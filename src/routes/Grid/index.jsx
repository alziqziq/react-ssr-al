import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class Grid extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        HALAMAN GRID
      </div>
    )
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Grid)
);