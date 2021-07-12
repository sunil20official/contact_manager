
import React from 'react';
import user from '../images/user.png';

const ContactCard = (props) => {
    const {id , name , email } = props.contact;
    return (
        
        <div className="item">
            <br/>
            <img className="ui avatar image" src={user} alt="user"  />
        <div className="content">
             <div className="header"> {name}</div>
             <div>{email}</div>     
        </div>
        <div style= {{float:"right"}} >
         <i className="trash alternate outline icon"
            style={{color:"red" ,marginTop:"10px",assignment:"right"}}
            onClick={() => props.clickHandler(id)}
        ></i> 
        </div>
        <br/>
    </div>
    );
     
};

export default ContactCard;