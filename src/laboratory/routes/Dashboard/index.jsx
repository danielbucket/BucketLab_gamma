import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { StyledDashboard } from './index.styled';

const { VITE_BUCKETLAB_API_DEV_URL } = import.meta.env;
const isDev = import.meta.env.DEV || false;
const API_URL = isDev ? VITE_BUCKETLAB_API_DEV_URL : 'https://bucketlab.io/api/v1';

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

  const handleClick = () => {
    const { _id } = userProfile;

    fetch(`${API_URL}/accounts/logout/:${_id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' }
    })
    .then((res) => res.json())
    .then((res) => {
      if (res.status === 'fail') {
        return console.error('ERROR: ', res);
      };

      setLoggedIn(() => false);
      setPermissions(() => {});
      setUserProfile(() => {});

      navigate('/homelab/login', {
        state: { ...res.message }
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