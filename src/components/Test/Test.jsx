import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
//import { Test } from './Test.styles';

class Test extends PureComponent { 
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  componentWillMount = () => {
    console.log('Test will mount');
  }

  componentDidMount = () => {
    console.log('Test mounted');
  }

  componentWillReceiveProps = (nextProps) => {
    console.log('Test will receive props', nextProps);
  }

  componentWillUpdate = (nextProps, nextState) => {
    console.log('Test will update', nextProps, nextState);
  }

  componentDidUpdate = () => {
    console.log('Test did update');
  }

  componentWillUnmount = () => {
    console.log('Test will unmount');
  }

  render () {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return (
      <div className="TestWrapper">
        Test content
      </div>
    );
  }
}

Test.propTypes = {
  // bla: PropTypes.string,
};

Test.defaultProps = {
  // bla: 'test',
};

export default Test;
