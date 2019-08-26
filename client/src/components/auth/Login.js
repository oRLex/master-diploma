import React, { Fragment, Component } from 'react'
import { connect } from 'react-redux';
import { loginUser } from '../../actions/auth';
import { Route, Redirect, withRouter } from 'react-router-dom';
import TextFieldGroup from '../layout/Helpers/TextFieldGroup'
import PropTypes from 'prop-types'


class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      errors: {}
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    if (this.props.auth.isAuthenticated && this.props.auth.user.role === "admin") {
      this.props.history.push('/workload');
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated && nextProps.auth.user.role === "admin") {
      this.props.history.push('/workload');
    } else {
      this.props.history.push(`/workload/profile/${nextProps.auth.user._id}`);
    }



    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onSubmit(e) {
    e.preventDefault();

    const userData = {
      email: this.state.email,
      password: this.state.password
    };

    this.props.loginUser(userData);

  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }


  //   // Redirect if logged in
  //   if(isAuthenticated && user.role === "admin") {
  //   return <Redirect to="/workload" />
  // } else {
  //   if (isAuthenticated && user.role === "user") {
  //     return <Redirect to={`/profile/${user._id}`} />
  //   }


  render() {
    const { email, password, errors } = this.state;

    return (
      <Fragment>
        <div className="left">
          <div className="header">
            <h2 className="animation a1">Навантаження на викладачів кафедри</h2>
            <h4 className="animation a2">Авторизуйтесь щоб увійти в додаток</h4>
          </div>
          <div className="form-card">
            <form className="form-body" onSubmit={this.onSubmit}>
              <TextFieldGroup
                placeholder="Email address"
                className="form-field animation a3"
                name="email"
                type="email"
                value={email}
                onChange={this.onChange}
                error={errors.email}
                required
              />
              <TextFieldGroup
                type="password"
                className="form-field animation a4"
                name="password"
                value={password}
                onChange={this.onChange}
                error={errors.password}
                placeholder="Password"
              />
              {/* <input
                type="email"
                className="form-field animation a3"
                name="email"
                value={email}
                onChange={this.onChange}
                placeholder="Email Address"
                error={errors.email}
                required
              /> */}
              {/* <input
                type="password"
                className="form-field animation a4"
                name="password"
                value={password}
                onChange={this.onChange}
                error={errors.password}
                placeholder="Password"
              /> */}
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
}


Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
})

export default connect(mapStateToProps, { loginUser })(withRouter(Login));
