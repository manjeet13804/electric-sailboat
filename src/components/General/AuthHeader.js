import Dropdown from 'react-bootstrap/Dropdown';
import NavDropdown from 'react-bootstrap/NavDropdown';
import NavItem from 'react-bootstrap/NavItem';
import NavLink from 'react-bootstrap/NavLink';

export default function AuthHeader() {

    return(
        <nav className="navbar navbar-expand-lg navbar-light fixed-top dark-background py-3">
            <div className="container">
                <a className="navbar-brand d-flex align-items-center fw-bold fs-2" href="/">
                    <img src="/images/logo.svg" alt="Logo" className="img-fluid logo-size" />
                </a>
                <button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon" /></button>
                <div className="collapse navbar-collapse border-lg-0 mt-4 mt-lg-0" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto pt-2 pt-lg-0">
                        <li className="nav-item"><a className="nav-link fw-medium active" aria-current="page" href="#">ABOUT</a></li>
                        <li className="nav-item"><a className="nav-link fw-medium" href="#">BLOG</a></li>
                        <Dropdown as={NavItem} className="nav-item position-relative">
                            <Dropdown.Toggle as={NavLink} className="nav-link fw-medium nav-link-no-icon">
                                <i className="fa fa-bell" aria-hidden="true" />
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        <Dropdown as={NavItem} className="nav-item position-relative">
                            <Dropdown.Toggle as={NavLink} className="nav-link fw-medium nav-link-no-icon">
                                <i className="far fa-envelope" />
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        <Dropdown as={NavItem} className="nav-item position-relative">
                            <Dropdown.Toggle as={NavLink} className="nav-link fw-medium nav-link-no-icon">
                                <img src="/images/user.jpg" alt="user img" className="img-fluid" />
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item href="/member">Dashboard</Dropdown.Item>
                                <Dropdown.Item href="/member/profile">Member Profile</Dropdown.Item>
                                <Dropdown.Item href="/member/profile/edit">Logout</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </ul>
                </div>
            </div>
        </nav>    
    );
}