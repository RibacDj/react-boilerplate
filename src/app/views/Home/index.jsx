import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { increment, addNumber } from '../../actions/app';
import { getData } from '../../actions/data';

import Button from '../../components/Button';

const Home = ({ number, increment, addNumber, getData, data }) => {
  console.log(data);
  return (
    <div>
      <h1>Hello {number}</h1>
      <Button onClick={() => increment()}>increment</Button>
      <br />
      <Button onClick={() => addNumber(5)}>Add 5</Button>
      <br />
      <Button onClick={() => getData()}>Get Data</Button>
    </div>
  );
};

Home.propTypes = {
  number: PropTypes.number,
  increment: PropTypes.func,
  addNumber: PropTypes.func,
  data: PropTypes.object,
  getData: PropTypes.func
};

const mapStateToProps = state => ({
  number: state.app.get('number'),
  data: state.data.get('data')
});

export default connect(mapStateToProps, { increment, addNumber, getData })(Home);
