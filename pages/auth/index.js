import React from 'react';

import User from '../../components/User';

const authIndexPage = (props) => (
  <div>
    <h1>The auth page - {props.appName}</h1>
    <User name="Valery" age={20}/>
  </div>
);

authIndexPage.getInitialProps = (context) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({appName: 'Super App (Auth)'})
    }, 1000)
  });
};

export default authIndexPage;