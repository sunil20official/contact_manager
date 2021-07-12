import React, { Component } from 'react'


  class AddContact extends Component {
      state = {
          name:"",
          email:"",
      };

    add = (event) => {
        event.preventDefault();
        if(this.state.name === "" || this.state.email === "") {
            alert("All the fiels are mandatory !");
            return
        }
        this.props.addContactHandler(this.state);
        this.setState({name:"",email:""});
    };
       
    render() {
        return (
            
            <div >
                
                 <br></br>
                 <br/>
                <h2>Add Contacts</h2>
                <form className="ui form" onSubmit={this.add}>
                    <div className= "field">
                        <label> Name </label>
                        <input 
                        type = "text" 
                        name = "name" 
                        placeholder="Name" 
                        value={this.state.name}
                        onChange={(event) => this.setState({name:event.target.value})}/>
                    </div>
                    <div>
                        <label> Email </label>
                        <input 
                        type = "text" 
                        name = "email" 
                        placeholder="Email"
                        value = {this.state.email} 
                        onChange={(event) =>this.setState({email:event.target.value}) }/>
                    </div>
                    <button className="ui button blue" >Add</button>
                </form>
            </div>
        
        );
    }
}

export default AddContact;
