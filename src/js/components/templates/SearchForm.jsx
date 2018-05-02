import React from 'react';

class SearchForm extends React.Component {

  render() {
    return(

<form role="search" method="get" className="form-inline mt-3" action={this.props.siteAddress}>
    <input id="search" type="search" className="form-control w-75" name="s" />
    <button type="submit" className="btn btn-outline-primary float-right ml-3"> <i className="fas fa-search" /></button>
</form>

    );
  }
}

export default SearchForm;