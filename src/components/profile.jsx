import React, {Component} from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

class Profile extends Component {
    state = {
        user:{
        userName: 'Ehsan',
        birthDay: new Date(),
        favColor: 'Purple'
        },
        editMode: false
    };

    previousState = null

    handleDateChange= date => {
        this.setState({
            birthDay : date 
        })
        this.state.user.birthDay = date;
      }

    cancel=()=>{ 
        let userState = Object.assign({},this.previousState)
        this.setState({user: userState, editMode: false}, () =>{console.log(this.state.user.userName,'Cancelled')});
    }
    handleChange=(e)=>{    
        this.state.user[e.target.name] = e.target.value    
        this.setState({state : this.state.user})
    }

    update=()=>{
        this.previousState = Object.assign({},this.state.user)
        if(this.state.user.userName != "" && this.state.user.favColor != "" &&  Date.parse(this.state.user.birthDay) != NaN)
        {
            this.setState({editMode: !this.state.editMode})
        }
        else
        {
            
            alert("Please fill required field correctly")        
        }
    }

    showBirthDay=(val)=>{
        let today = new Date();
        let selectedDate = new Date(val);
        if(selectedDate != undefined && selectedDate != '')
        {
            if(selectedDate.getDate() == today.getDate() && selectedDate.getMonth() == today.getMonth())
            return 'inline';
        }
        return 'none';
    } 

    
    render()
    {
        return(
<div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                
                                    User Profile
                                <div className = "card-body">
                                    
                                <div className = "form-group">
                                        <div className = "form-inline">
                                            <label> User Name: </label>
                                            <input placeholder="User name" name="userName" id="userName" className="form-control" disabled= {!this.state.editMode} 
                                               onChange={(e)=>this.handleChange(e)}  value ={this.state.user.userName}  />
                                        </div>
                                        </div>
                                        <div className = "form-group">
                                        <div className = "form-inline">
                                            <label> Favourite Color: </label>
                                            <select class="form-select" aria-label="Default select example" disabled={!this.state.editMode} name="favColor" value={this.state.user.favColor} required onChange={(e)=>this.handleChange(e)} >
                                                  <option value="">Open this select Color</option>
                                                    <option value="Blue">Blue</option>
                                                    <option  value="Purple">Purple</option>
                                                    <option value="Red">Red</option>
                                                    <option value="Pink">Pink</option>
                                                    </select>
                                        </div>
                                        </div>
                                        <div className = "form-group">
                                        <div className = "form-inline">
                                            <label> D.O.B: </label>
                                            <DatePicker disabled={!this.state.editMode} 
                                            selected={ this.state.user.birthDay }
                                            onChange={(e)=>this.handleDateChange(e)}
                                            name="birthDay"
                                            dateFormat="MM/dd/yyyy"/>
                                            {/* <input class="form-control" id="date" type="date" name="date" placeholder="MM/DD/YYY" value={this.state.birthDay} min="1900-01-01" max={this.state.birthDay} disabled={!this.state.editMode}/> */}
                                        </div>
                                        </div>

                                        <button className="btn btn-success" style={{backgroundColor: this.state.user.favColor}}
                                            onClick={this.update}>
                                            {this.state.editMode? 'Save' : 'Edit'}
                                        </button>
                                        <button className="btn btn-success" style={{backgroundColor: this.state.user.favColor,marginLeft:"15px", display: !this.state.editMode?'none':'inline'}}
                                           onClick={this.cancel}>
                                           Cancel
                                        </button>
                                    
                                </div>
                            </div>
                        </div>                        
                        <div className="row">
                        <div className = "card col-md-6 offset-md-3 offset-md-3">
                            
                            <div className = "card-body">
                                
                                    <div className = "form-group">
                        <img src="HBD.GIF" alt="Happy Birth Day"  width="650" style={{ display: this.showBirthDay(this.state.user.birthDay) }}/>
                        </div>
                        </div>
                        </div>
                        </div>

                   </div>
            </div>


        );
    }
cssClass()
{
    return "'background-color:"+this.state.favColor+"'";
}
}



export default Profile;