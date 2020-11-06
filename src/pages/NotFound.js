import React from 'react';
import { Link } from 'react-router-dom';

import '../components/styles/PageError.css'

class NotFound extends React.Component {
  render () {
    return (
      <div className="PageError">
        <h1>404: Not Found</h1> 
        <p>Do you want to return to <Link to="/"> Home </Link></p>
      </div>
   )
  }
}

export default NotFound;
