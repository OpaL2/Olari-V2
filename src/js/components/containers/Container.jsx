import React from 'react';

import DataStore from 'flux/stores/DataStore';

export default function container(Template) {
  
  return class extends React.Component {

    constructor(props) {
      super(props);
      this.state = DataStore.getState();

      this.onChange = this.onChange.bind(this);
    }

    componentDidMount() {
      DataStore.listen(this.onChange);
    }

    componentWillUnmount() {
      DataStore.unlisten(this.onChange);
    }

    onChange(state) {
      this.setState(state);
    }

    render() {
      return <Template data={this.state} {...this.props} />
    }
  }
}