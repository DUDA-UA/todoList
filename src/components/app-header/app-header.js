import React from 'react';

import './app-header.scss';

const AppHeader = ({todo,done,imp}) =>{
    return (
      <div className='app-header d-flex'>
        <h1>My Todo list</h1>
        <h2>{todo} more to do, {done} done, important {imp}</h2>
      </div>
    )
  }

export default AppHeader;