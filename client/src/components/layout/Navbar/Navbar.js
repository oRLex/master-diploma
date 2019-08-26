import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { logoutUser } from '../../../actions/auth'
import { getCurrentProfile } from '../../../actions/profile'
import { clearCurrentProfile } from '../../../actions/profile'


// Components
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';

// Style
import './Navbar.css';
class Navbar extends Component {
  state = {
    showDropdownMenu: false
  }

  onLogoutClick(e) {
    e.preventDefault();
    this.props.clearCurrentProfile();
    this.props.logoutUser();
  }

  onShowClick = (e) => {
    e.preventDefault();
    this.setState(prevState => {
      return { showDropdownMenu: !prevState.showDropdownMenu }
    })

  }
  render() {
    const { isAuthenticated, user } = this.props.auth;
    const { showDropdownMenu } = this.state;

    // Add show class to toolbar_dropdown-collection class
    let showClass = 'toolbar_dropdown-collection';
    if (showDropdownMenu) {
      showClass = 'toolbar_dropdown-collection show'
    }
    // Change to Times
    let photoTag = (
      <div className="photo">
        <div className="img-wrap">
          <img src={user.avatar} alt="avatar" />
        </div>

        <b className="caret d-none d-lg-block d-xl-block"></b>
      </div>
    );
    if (showDropdownMenu && window.innerWidth <= 769) {
      photoTag = (
        <div className="photo-times">
          <i className="fa fa-times" aria-hidden="true"></i>
        </div>
      )
    }
    const authLinks = (
      <Fragment>
        <div className="toolbar_brand"><Link to={`/workload/profile/${user._id}`}>Кафедра програмної інженерії та кібербезпеки</Link></div>
        <div className="spacer" />
        <div className="toolbar_navigation-items">
          <ul>
            <li>
              <span>
                <Link to="/workload/singleteacher">Зведене навантаження</Link>
              </span>
            </li>
            <li>
              <span>
                <Link to="/workload/teachers">Викладачі</Link>
              </span>
            </li>
          </ul>
        </div>
      </Fragment>
    );
    const adminLinks = (
      <Fragment>
        <div className="toolbar_brand"><Link to="/workload">Кафедра програмної інженерії та кібербезпеки</Link></div>
        <div className="spacer" />
        <div className="toolbar_navigation-items">
          <ul>
            <li>
              <span>
                <Link to="/workload">Загальне навантаження</Link>
              </span>
            </li>
            <li>
              <span>
                <Link to="/workload/singleteacher">Зведене навантаження</Link>
              </span>
            </li>
            <li>
              <span>
                <Link to="/workload/addteacher">Додати викладача</Link>
              </span>
            </li>
            <li>
              <span>
                <Link to="/workload/teachers">Викладачі</Link>
              </span>
            </li>
          </ul>
        </div>
      </Fragment>
    )
    return (
      <header className="toolbar" >
        <nav className="toolbar__navigation">
          <div className="toolbar__toggle-button">
            <DrawerToggleButton click={this.props.drawerClickHandler} />
          </div>

          {isAuthenticated && user.role === "admin" ?
            (<Fragment>{adminLinks}</Fragment>) :
            (<Fragment>{authLinks}</Fragment>)
          }
          <div className="toolbar_dropdown">
            <a onClick={this.onShowClick} href="javascript:void(0);" className="toolbar_dropdown-link">
              {photoTag}
            </a>
          </div>
          <ul className={showClass} >
            <li className="collection-item">
              <span><Link to={`/workload/profile/${user._id}`}>Обліковий запис</Link></span>
            </li>
            <li className="collection-divide"></li>
            <li className="collection-item">
              <a onClick={this.onLogoutClick.bind(this)} href="javascript:void(0);">
                <i className='fas fa-sign-out-alt'></i>{' '} <span>Вийти</span>
              </a>
            </li>
          </ul>

        </nav>
      </header>
    );
  }
}
Navbar.propTypes = {
  auth: PropTypes.object.isRequired,
  getCurrentProfile: PropTypes.func.isRequired,
  logoutUser: PropTypes.func.isRequired,
  drawerClickHandler: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  auth: state.auth,
  profile: state.profile
})

export default connect(mapStateToProps, { getCurrentProfile, logoutUser, clearCurrentProfile })(Navbar);