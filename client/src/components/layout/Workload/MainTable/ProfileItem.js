import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import PersonalTable from './PersonalTable'
import update from 'immutability-helper';
import { addTable } from '../../../../actions/profile'
import { connect } from 'react-redux'


class ProfileItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profile: {
        user: props.profile.user,
        personalTable: props.profile.personalTable,
      },

      errors: {},
    };
  }
  updateItem = (value) => {
    const index = this.state.profile.personalTable.findIndex((emp) => emp._id === value._id);
    const updateItems = update(this.state.profile.personalTable, { $splice: [[index, 1, value]] })
    // personalTable = [...this.state.personalTable]
    // personalTable[index] = value;
    this.setState({
      profile: {
        personalTable: updateItems,
        user: this.props.profile.user,
      }
    }, console.log(this.state.profile))
  }

  render() {


    // State destruction
    const { name } = this.state.profile.user;
    const tableUpdate = this.state.profile;
    // FLEX VERSION
    const table = (
      <Fragment>
        {this.state.profile.personalTable.map(item => <PersonalTable key={item._id} data={item} updateItem={this.updateItem} />)}
      </Fragment>
    )
    return (
      // FLEX
      <div className="table-body1">
        <div className="cell" style={{ "padding": "10px" }}>{name}</div>
        <div className="cell">{table}</div>
        <button onClick={() => { this.props.addTable(tableUpdate) }}></button>

      </div>
    )
  }
}

ProfileItem.propTypes = {
  profile: PropTypes.object.isRequired
};


export default connect(null, { addTable })(ProfileItem)

