import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { setLoading, getMahasiswaAction } from '../../redux/actions';

class Home extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.setLoading(true);
    this.props.getMahasiswaAction();
  }

  render() {
    return (
      <div>
        HALAMAN Home
        <br/>
        {`Loading... ${this.props.loading}`}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  loading: state.app.loading
});

const mapDispatchToProps = {
  setLoading,
  getMahasiswaAction
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Home)
);
