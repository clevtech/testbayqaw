import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Sidebar extends Component {
    render() {
        return(
        <div className="nav-left-sidebar sidebar-dark">
            <div className="menu-list">
                <nav className="navbar navbar-expand-lg navbar-light">
                    <Link className="d-xl-none d-lg-none" to="/">Главная</Link>
                    <Link className="d-xl-none d-lg-none" to="/person">Персонал</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav flex-column">
                            <li className="nav-divider">Menu</li>
                            <li className="nav-item ">
                                <Link className="nav-link" to="/">Главная</Link>
                            </li>
                            <li className="nav-item ">
                                <Link className="nav-link" to="/person">Персонал</Link>
                            </li>  
                        </ul>
                    </div>
                </nav>
            </div> 
        </div>
        )
    }
}

export default Sidebar;