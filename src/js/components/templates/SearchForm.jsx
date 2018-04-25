import React from 'react';

class SearchForm extends React.Component {

  render() {
    return(

<form role="search" method="get" className="form" action={this.props.siteAddress}>
    <div className="form-group">
    <label htmlFor="search">
        <span className="sr-only">Search</span>
    </label>
        <input id="search" type="search" className="form-control"
            name="s" />
    </div>
    <input type="submit" className="btn btn-primary"
        value="submit" />
</form>

    );
  }
}

export default SearchForm;