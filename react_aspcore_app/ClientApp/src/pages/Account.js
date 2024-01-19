import React, { useEffect } from 'react';
import styles from '../styles/Account.module.css';
import { useState } from 'react';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';

import AccountInfo from '../components/Account/AccountInfo';
import WachtWoordChanger from '../components/Account/WachtWoordChanger';

function Account() {

  const [currentWindow, setCurrentWindow] = useState('AccountInfo');

  useEffect(() => {
    document.title = 'Account - Stichting Accessibility';

    // If not logged in, redirect to login page
    axios.post('https://localhost:7251/api/User/Authorize', {}, {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('jwt')
      }
    }).then((response) => {
      console.log(response);
      if (response.status === 200) {
        console.log('Authorized');
      }
    })
      .catch((error) => {
        console.log(error);
        if (error.response.status === 401) {
          localStorage.removeItem('jwt');
          window.location.href = '/login';
        }
      });
  }, []);

  const ChangePassword = (oldPassword, newPassword) => {
    const user = jwtDecode(localStorage.getItem('jwt'));

    const Email = user.sub;

    console.log(Email);
    //https://localhost:7251/api/User/ChangePassword
    axios.put('/api/User/ChangePassword', {
      Email: Email,
      wachtwoord: oldPassword,
      nieuwWachtwoord: newPassword
    }, {
      headers: {
        
        Authorization: 'Bearer ' + localStorage.getItem('jwt')
      }
    }).then((response) => {
      console.log(response);
      if (response.status === 200) {
        alert('Wachtwoord succesvol veranderd');
      }
    }).catch((error) => {
      console.log(error);
      if (error.response.status === 401) {
        alert('Oud wachtwoord is incorrect');
      }
      else {
        alert(error.response.status);
      }
    });
  }
  return (
    <>
      {currentWindow === 'AccountInfo' && <AccountInfo setCurrentWindow={setCurrentWindow}  />}
      {currentWindow === 'WachtWoordChanger' && <WachtWoordChanger setCurrentWindow={setCurrentWindow} ChangePassword={ChangePassword} />}
    </>
  );
}

export default Account;