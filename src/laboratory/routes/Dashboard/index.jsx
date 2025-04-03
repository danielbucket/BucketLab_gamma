import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { StyledDashboard } from './index.styled';

const { VITE_API_V1_URL_DEV, VITE_API_V1_URL_PROD } = import.meta.env;
const isDev = import.meta.env.DEV || false;
const API_URL = isDev ? VITE_API_V1_URL_DEV : VITE_API_V1_URL_PROD;

export default function LaboratoryDashboard() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [permissions, setPermissions] = useState({});
  const [userProfile, setUserProfile] = useState({});
  const [token, setToken] = useState({});
  
  const navigate = useNavigate();
  const location = useLocation();
  
  useEffect(() => {
    const { data } = location.state;

    if (data.logged_in) {
      const { first_name, permissions, logged_in, login_count, _id, token } = data;

      setToken(() => token);
      setLoggedIn(() => logged_in);
      setPermissions(() => permissions);
      setUserProfile(() => Object.assign({}, {
        first_name,
        login_count,
        _id
      }));
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
      if (res.status !== 'success') {
        return console.error('ERROR: ', res);
      };

      setPermissions(() => {});
      setUserProfile(() => {});
      setLoggedIn(() => false);

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