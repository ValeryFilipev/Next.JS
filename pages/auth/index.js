import React from 'react';

import User from '../../components/User';

const authIndexPage = () => (
  <div>
    <h1>The auth page</h1>
    <User name="Valery" age={20}/>
  </div>
);

export default authIndexPage;