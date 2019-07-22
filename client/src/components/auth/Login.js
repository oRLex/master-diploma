import React, { Fragment, useState } from 'react'
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { setAlert } from '../../actions/alert';
import { login } from '../../actions/auth';
import PropTypes from 'prop-types'


const Login = ({ setAlert, login, isAuthenticated }) => {
  const initialState = {
    email: '',
    password: ''
  }

  const [formData, setFormData] = useState(initialState)

  const { email, password } = formData;

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value })

  const onSubmit = e => {
    e.preventDefault()
    login(email, password)
    // if (email !== null && password !== null) {
    //   login({ email, password })
    // } else {
    //   setAlert('Login failed')
    // }
  }

  // Redirect if logged in
  if (isAuthenticated) {
    return <Redirect to="/workload" />
  }
  return (
    <Fragment>
      <div className="left">
        <div className="header">
          <h2 className="animation a1">Навантаження на викладачів кафедри</h2>
          <h4 className="animation a2">Авторизуйтесь щоб увійти в додаток</h4>
        </div>
        <div className="form-card">
          <form className="form-body" onSubmit={e => onSubmit(e)}>
            <input
              type="email"
              className="form-field animation a3"
              name="email"
              value={email}
              onChange={e => onChange(e)}
              placeholder="Email Address"
            // required
            />
            <input
              type="password"
              className="form-field animation a4"
              name="password"
              value={password}
              onChange={e => onChange(e)}
              placeholder="Password"
            />
            <button className="animation a6">LOGIN</button>
          </form>
        </div>
        <div className="copyright">
          <p>@ Copyright by oRlex</p>
        </div>
      </div>

    </Fragment>
  )
}

Login.propTypes = {
  setAlert: PropTypes.func.isRequired,
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps, { setAlert, login })(Login);
