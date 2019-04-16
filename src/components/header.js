import React, {Component} from 'react';
import  {Link} from 'react-router-dom';

class Header extends Component {
	render() {
		return (
			<div className="dashboard-header">
            <nav className="navbar navbar-expand-lg bg-white fixed-top">
                <Link className="navbar-brand" to="/">Concept</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse " id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto navbar-right-top">
                        <li className="nav-item">
                            <div id="custom-search" className="top-search-bar">
                                <input className="form-control" type="text" placeholder="Search.." />
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
		)
	}
}

export default Header;