import React from 'react';

import DataStore from 'flux/stores/DataStore';

class SidebarContainer extends React.Component {

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
    return(
      this.props.render ? this.props.render(this.state) : this.props.children
    );
  }
}

export default SidebarContainer;