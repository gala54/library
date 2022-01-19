import React, {Component} from 'react';

class Navbar extends Component {
  handleSearchChange = event => {
    this.props.onSearchChange(event.target.value)
  }
  render() {
    return (
      <nav className="navbar navbar-expand-md navbar-light bg-light">
        <div className="container-fluid" style={{"paddingLeft": "2vw", "paddingRight": "2vw"}}>
          <a className="navbar-brand" href="/" style={{"padding": "0"}}>
            <img src="./poro.gif" alt="" width="50" height="50" />
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/about">About</a>
              </li>
            </ul>
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Filter by name or tags"
                aria-label="Search"
                onChange = {this.handleSearchChange}
              />
            </form>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar