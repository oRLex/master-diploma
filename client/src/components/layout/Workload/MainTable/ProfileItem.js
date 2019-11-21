import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import PersonalTable from './PersonalTable'
import AddRow from './AddRow'
import update from 'immutability-helper';
import { addTable } from '../../../../actions/profile'
import uuid from "uuid";

import { connect } from 'react-redux'


class ProfileItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profile: {
        user: props.profile.user,
        personalTable: props.profile.personalTable,
      },
      toggleProperties: false,
      SaveLineToggler: false,
      errors: {},
    };
  }
  updateItem = (value) => {
    console.log(value);
    const index = this.state.profile.personalTable.findIndex((emp) => emp._id === value._id);
    const updateItems = update(this.state.profile.personalTable, { $splice: [[index, 1, value]] })
    // personalTable = [...this.state.personalTable]
    // personalTable[index] = value;
    this.setState({
      profile: {
        personalTable: updateItems,
        user: this.props.profile.user,
      }
    })
  }
  addItem = (value) => {

  }
  showTable = (e) => {
    e.preventDefault();
    this.setState(prevState => {
      return { toggleProperties: !prevState.toggleProperties }
    })
  }


  render() {
    // Add show class to toolbar_dropdown-collection class
    let displayProperties = 'fade';
    if (this.state.toggleProperties) {
      displayProperties = 'show'
    }
    const newData = {
      _id: uuid.v4(),
      halfYear: this.state.halfYear,
      trainningForm: this.state.trainningForm,
      faculty: this.state.faculty,
      disciplinesName: this.state.disciplinesName,
      сourse: this.state.сourse,
      term: this.state.term,
      groupNumber: this.state.groupNumber,
      secondTeacher: this.state.secondTeacher,
      lectionsNumb: this.state.lectionsNumb,
      labsNumb: this.state.labsNumb,
      consultaionsNumb: this.state.consultaionsNumb,
      practicalNumb: this.state.practicalNumb,
      ModularContNumb: this.state.ModularContNumb,
      ExamsNumb: this.state.ExamsNumb
    };

    // State destruction
    const { name } = this.state.profile.user;
    const tableUpdate = this.state.profile;
    // FLEX VERSION
    const table = (
      <Fragment>

      </Fragment>
    )
    console.log(this.state.profile.personalTable.find(item => item.labsNumb))
    return (
      // FLEX
      <Fragment>
        <button onClick={this.showTable}>Editign table</button>
        <button onClick={() => { this.props.addTable(tableUpdate) }} className={displayProperties}>Save row</button>
        <div className="table-body1">
          <div className="cell" style={{ "width": "70px" }}>{name}</div>
          <div className="cell">
            {this.state.profile.personalTable.map(item =>
              <Fragment key={item._id}>
                <PersonalTable key={item._id} data={item} updateItem={this.updateItem} addItem={this.addItem} toggleShow={this.state.toggleProperties} />
              </Fragment>
            )}
            {this.state.toggleProperties && <AddRow addItem={this.addItem} toggleShow={this.showTable} />}
            {/* {this.state.profile.personalTable.find(item =>} */}

          </div>
        </div>
      </Fragment >

    )
  }
}

ProfileItem.propTypes = {
  profile: PropTypes.object.isRequired
};


export default connect(null, { addTable })(ProfileItem)

