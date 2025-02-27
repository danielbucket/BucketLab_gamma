import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { StyledDashboard } from './index.styled';

const { VITE_BUCKETLAB_SERVER } = import.meta.env;

export default function LaboratoryDashboard() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [permissions, setPermissions] = useState({});
  const [userProfile, setUserProfile] = useState({});
  
  const navigate = useNavigate();
  const location = useLocation();

  
  useEffect(() => {
    const { data } = location.state;

    if (data.logged_in) {
      const { logged_in, permissions } = data;

      setLoggedIn(() => logged_in);
      setUserProfile(() => data);
      setPermissions(() => permissions);
    };
  }, [location.state]);

  const handleClick = (e) => {
    e.preventDefault();
    const { email } = userProfile;

    fetch(`${VITE_BUCKETLAB_SERVER}/account/logout`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email })
    })
    .then((res) => res.json())
    .then((res) => {
      const { message } = res;

      navigate('/homelab/login', {
        state: { message }
      });
    });
  };

  return (
    <>
      <StyledDashboard>
        <div className='dash-main'>
          <h1>Welcome to the laboratory, {userProfile.first_name}.</h1>
        </div>

        <div className='dash-status'>
        <button onClick={(e) => handleClick(e)}>Logout</button>
          <div className='permissions-status'>
            { loggedIn 
              ? ( <>
                    <p>Permissions Active</p>
                    <p>Level:<span>{permissions}</span></p>
                  </>
              )
              : null
            }
          </div>
        </div>
      </StyledDashboard>
    </>
  );
};