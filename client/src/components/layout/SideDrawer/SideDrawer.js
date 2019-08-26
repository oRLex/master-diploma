import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { logoutUser } from '../../../actions/auth'

import './SideDrawer.css'


class SideDrawer extends Component {
  render() {
    const { isAuthenticated, user, loading } = this.props.auth;
    const { logout } = this.props;
    const { show } = this.props;
    const { close } = this.props

    let drawerClasses = 'side-drawer';
    if (show) {
      drawerClasses = 'side-drawer open'
    }
    const authLinks = (
      <ul>
        <li><span><Link to="/singleteacher" onClick={close}>Зведене навантаження</Link></span></li>
        <li><span><Link to="/teachers" onClick={close}>Викладачі</Link></span></li>
        <li><a onClick={logout} href="#!">
          <i className='fas fa-sign-out-alt'></i>{' '} <span>Вийти</span>
        </a></li>
      </ul>

    );
    const adminLinks = (

      <ul>
        <li><span><Link to="/workload" onClick={close}>Загальне навантаження</Link></span></li>
        <li><span><Link to="/singleteacher" onClick={close}>Зведене навантаження</Link></span></li>
        <li><span><Link to="/addteacher" onClick={close}>Додати викладача</Link></span></li>
        <li><span><Link to="/teachers" onClick={close}>Викладачі</Link></span></li>
        <li><a onClick={logout} href="#!">
          <i className='fas fa-sign-out-alt'></i>{' '} <span>Вийти</span>
        </a></li>
      </ul>
    )
    return (
      <nav className={drawerClasses}>
        {isAuthenticated && user.role === "admin" ?
          (<Fragment>{adminLinks}</Fragment>) :
          (<Fragment>{authLinks}</Fragment>)
        }
      </nav>
    )
  }
}

SideDrawer.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  show: PropTypes.bool.isRequired,
}

const mapStateToProps = state => ({
  auth: state.auth,
})

export default connect(mapStateToProps, { logoutUser })(SideDrawer)
