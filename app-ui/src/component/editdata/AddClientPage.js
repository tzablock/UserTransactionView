import React from 'react';
import { Field, reduxForm } from 'react-redux-form'

class AddClientPage extends React.Component {
    handleSubmit = form => {
        console.log(form)
    }
    render(){
        return <AddClientForm handleSubmit={this.handleSubmit}/>
    }
}

//Client (client id, name, surname, nationality, birth day, current location, place of birth)
let AddClientForm = props => {
return <form onSubmit={this.props.handleSubmit}>
           <div>
               <label>Client ID</label>
               <Field name="clientId" component="input" type="text"/>
           </div>
       </form>
}

AddClientForm = reduxForm({form: 'addClient'})(AddClientForm)

export default AddClientPage