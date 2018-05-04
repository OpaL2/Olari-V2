import React from 'react';

class SearchForm extends React.Component {

  render() {
    return(

<form role="search" method="get" className="form mt-3 w-100" action={this.props.siteAddress}>
  <div className="form-group row mx-1">
    <input id="search" type="search" className="form-control col-10" name="s" />
    <div className="col-2">
      <button type="submit" className="btn btn-outline-secondary"> <i className="fas fa-search" /></button>
    </div>
  </div>
</form>

    );
  }
}

export default SearchForm;