import React, { Component } from 'react';
import LifeCycleMethod from '../LifecycleMethods/LifeCycleMethod';
class Root extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'abc'
    }
  }
  click() {
    this.setState({
      name: 'welcome'
    })
  }
  render() {
    return (
      <div>
        <button onClick={() => this.click()}>click</button>
        <LifeCycleMethod name={this.state.name} />
      </div>
    );
  }
}
export default Root 