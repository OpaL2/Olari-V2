import React from 'react';

class SearchForm extends React.Component {

  render() {
    return(

<form role="search" method="get" className="form-inline" action={this.props.siteAddress}>
    <input id="search" type="search" className="form-control" name="s" />
    <button type="submit" className="btn btn-outline-primary"> <i className="fas fa-search" /></button>
</form>

    );
  }
}

export default SearchForm;