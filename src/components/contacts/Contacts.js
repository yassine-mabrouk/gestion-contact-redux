import React, { Component } from 'react';
import { connect } from 'react-redux';
import {  getContacts } from '../actions/contactActions';
import Contact from './Contact';

class Contacts extends Component {
  componentDidMount (){
    this.props.getContacts();
  }

  render() {
    const { contacts } = this.props;
    return (
      <React.Fragment>
        <h1 className="display-4 mb-2">
          <span className="text-success">Contacts</span> List
        </h1>
        {contacts.map(contact => (
          <Contact key={contact.id} contact={contact} />
        ))}
      </React.Fragment>
    );
  }
}
const mapStateToProps= (state)=> {
   return {
      contacts: state.mycontacts.contacts
  }
}
/*
const mapDispatchToProps  = (dispatch) => {
   return {
     getContacts : ()=> {
      dispatch( {
        type: 'GET_CONTACTS'
      })
     }
   }
}*/

export default  connect(mapStateToProps,{getContacts}) (Contacts);
