import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { logout } from '../../../actions/auth'


// Components
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';

// Style
import './Navbar.css';
class Navbar extends Component {
  state = {
    showDropdownMenu: false
  }
  onShowClick = () => {
    this.setState(prevState => {
      return { showDropdownMenu: !prevState.showDropdownMenu }
    })

  }
  render() {
    const { isAuthenticated, user, loading } = this.props.auth;
    const { logout } = this.props;
    const { showDropdownMenu } = this.state;
    const innerWidth = window.innerWidth;
    // Add show class to toolbar_dropdown-collection class
    let showClass = 'toolbar_dropdown-collection';
    if (showDropdownMenu) {
      showClass = 'toolbar_dropdown-collection show'
    }
    // Change to Times
    let photoTag = (
      <div className="photo">
        <div className="img-wrap">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Face-plain.svg/1024px-Face-plain.svg.png" alt="" />
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
      <div className="toolbar_navigation-items">
        <ul>
          <li><span><Link to="/singleteacher">Зведене навантаження</Link></span></li>
          <li><span><Link to="/">Викладачі</Link></span></li>
        </ul>
      </div>

    );
    const adminLinks = (
      <div className="toolbar_navigation-items">
        <ul>
          <li><span><Link to="/workload">Загальне навантаження</Link></span></li>
          <li><span><Link to="/singleteacher">Зведене навантаження</Link></span></li>
          <li><span><Link to="/addteacher">Додати викладача</Link></span></li>
          <li><span><Link to="/">Викладачі</Link></span></li>
        </ul>
      </div>
    )
    return (
      <header className="toolbar" >
        <nav className="toolbar__navigation">
          <div className="toolbar__toggle-button">
            <DrawerToggleButton click={this.props.drawerClickHandler} />
          </div>
          <div className="toolbar_brand"><Link to="/workload">Кафедра програмної інженерії та кібербезпеки</Link></div>
          <div className="spacer" />
          {/* <div className="toolbar_navigation-items">
            <ul>
              <li><a href="/">Загальне навантаження</a></li>
              <li><a href="/">Зведене навантаження</a></li>
              <li><a href="/">Викладачі</a></li>
            </ul>
          </div> */}
          {isAuthenticated && user.role === "admin" ?
            (<Fragment>{adminLinks}</Fragment>) :
            (<Fragment>{authLinks}</Fragment>)
          }
          <div className="toolbar_dropdown">
            <a onClick={this.onShowClick} href="#!" className="toolbar_dropdown-link">
              {photoTag}
            </a>
          </div>
          <ul className={showClass} >
            <li className="collection-item">
              <a href="#!">Обліковий запис</a>
            </li>
            <li className="collection-divide"></li>
            <li className="collection-item">
              <a onClick={logout} href="#!">
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
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  drawerClickHandler: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  auth: state.auth,
})

export default connect(mapStateToProps, { logout })(Navbar);