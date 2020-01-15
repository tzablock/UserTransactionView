import React from 'react';
import { Field, reduxForm } from 'redux-form'

class AddClientPage extends React.Component {
    handleSubmit = form => this.props.addClient(form);
    render(){
        return <AddClientForm onSubmit={this.handleSubmit} insertClientResult={this.props.insertClientResult}/>  // must be onSubmit
    }
}

//Client (client id, name, surname, nationality, birth day, current location, place of birth)
let AddClientForm = props => {
    const { handleSubmit } = props;  // need to have name handleSubmit
    const { insertClientResult } = props;
    return (
        <div>
    <form onSubmit={ handleSubmit }>
           <div>
               <label>Client ID</label>
               <Field name="client_id" component="input" type="text"/>
           </div>
           <div>
               <label>Client Name</label>
               <Field name="name" component="input" type="text"/>
           </div>
           <div>
               <label>Client Surname</label>
               <Field name="surname" component="input" type="text"/>
           </div>
           <div>
               <label>Client Nationality</label>
               <Field name="nationality" component="input" type="text"/>
           </div>
           <div>
               <label>Client Birth Day</label>
               <Field name="birth_date" component="input" type="text"/>
            </div>
            <div>
               <label>Client Current Location</label>
               <Field name="current_location" component="input" type="text"/>
            </div>
            <div>
               <label>Client Place Of Birth</label>
               <Field name="place_of_birth" component="input" type="text"/>
           </div>
        <button type="submit">Submit</button>
       </form>
            <b>{insertClientResult}</b>
        </div>
    )
};

AddClientForm = reduxForm({form: 'addClient'})(AddClientForm);

export default AddClientPage