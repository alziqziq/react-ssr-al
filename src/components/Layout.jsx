
import React, { Component } from 'react';
import { renderRoutes } from 'react-router-config';

import Navbar from './Navbar';

class Layout extends Component {
  render() {
    const { route } = this.props;

    return (
      <div>
        <Navbar/>
        <div>{renderRoutes(route.routes)}</div>
      </div>
    );
  }
}

export default Layout;