import React, { Component } from 'react'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class Home extends Component {
  render() {
    return (
      <div>
        HALAMAN Home
      </div>
    )
  }
}

const mapStateToProps = state => {
  console.log(state, 'state');
};

const mapDispatchToProps = {};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Home)
);
