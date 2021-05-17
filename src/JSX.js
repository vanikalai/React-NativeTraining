import React from 'react';
  function Greeting() {
    const user = {
        firstName: 'Harper',
        lastName: 'Perez',
      };
      function formatName(user) {
        console.log(user);
      return user.firstName + ' ' + user.lastName;
    }

      //return <h1>Hello, {formatName(user)}!</h1>;
      //Without JSX
      return  React.createElement('div',null,
      React.createElement('h1',null,'Hello Kalai'))
    
    
  }

  export default Greeting;
  