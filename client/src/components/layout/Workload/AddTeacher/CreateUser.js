import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'
import { registerUser } from '../../../../actions/auth'
import { setAlert } from '../../../../actions/alert'
// import { createProfile } from '../../../../actions/profile'
import TextFieldGroup from '../../Helpers/TextFieldGroup'
import './CraeteUser.css'

class CreateUser extends Component {
  constructor() {
    super();
    this.state = {
      role: '',
      name: '',
      email: '',
      password: '',
      password2: '',
      facebook: '',
      degree: '',
      telephone: ''
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  // componentDidMount() {
  //   if (this.props.auth.role) {
  //     this.props.history.push('/workload');
  //   }
  // }

  // componentWillReceiveProps(nextProps) {
  //   if (nextProps.errors) {
  //     this.setState({ errors: nextProps.errors });
  //   }
  // }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    const userData = {
      role: this.state.role,
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2
    };
    const profileData = {
      facebook: this.state.facebook,
      degree: this.state.degree,
      telephone: this.state.telephone,

    }
    const { history } = this.props
    if (this.state.password === this.state.password2) {
      this.props.register(userData, profileData, history);

      // this.props.createProfile(profileData, history)


    } else {
      setAlert('Password not matched', 'danger')
    }

  }
  render() {
    return (
      <Fragment>
        <form onSubmit={this.onSubmit}>
          <TextFieldGroup
            placeholder="Role"
            name="role"
            value={this.state.role}
            onChange={this.onChange}
          />

          <TextFieldGroup
            placeholder="Name"
            name="name"
            value={this.state.name}
            onChange={this.onChange}
          />
          <TextFieldGroup
            placeholder="Email"
            name="email"
            type="email"
            value={this.state.email}
            onChange={this.onChange}
            info="This site uses Gravatar so if you want a profile image, use a Gravatar email"
          />
          <TextFieldGroup
            placeholder="Password"
            name="password"
            type="password"
            value={this.state.password}
            onChange={this.onChange}
          />
          <TextFieldGroup
            placeholder="Confirm Password"
            name="password2"
            type="password"
            value={this.state.password2}
            onChange={this.onChange}
          />
          <h3>Add social links</h3>
          <TextFieldGroup
            placeholder="Facebook"
            name="facebook"
            value={this.state.facebook}
            onChange={this.onChange}
          />
          <TextFieldGroup
            placeholder="degree"
            name="degree"
            value={this.state.degree}
            onChange={this.onChange}
          />
          <TextFieldGroup
            placeholder="telephone"
            name="telephone"
            value={this.state.telephone}
            onChange={this.onChange}
          />
          <input type="submit" className="btn btn-info btn-block mt-4" />
        </form>
      </Fragment>
    );
  }
}

CreateUser.propTypes = {
  registerUser: PropTypes.func.isRequired,
  // createProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  // errors: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth,
  profile: state.profile
})
export default connect(mapStateToProps,
  { setAlert, registerUser })(withRouter(CreateUser))