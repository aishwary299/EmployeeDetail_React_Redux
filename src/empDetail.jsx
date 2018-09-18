

import React, { Component } from 'react';
import './App.css';
import {bindActionCreators} from 'redux';
import  {connect} from 'react-redux';

class EmpDetail extends React.Component { 
    constructor(props){
        super(props);
        this.state ={
            department :"HR"
            , eId :""
            ,arrEid : [1,2,3,4,5]
        };

        this.handleDep = this.handleDep.bind(this);
        this.handleEid = this.handleEid.bind(this);
    }

    handleDep(e){
        this.setState({department: e.target.value});
        if(e.target.value == "HR"){
            this.setState({arrEid : [1,2,3,4,5]});
        }

        if(e.target.value == "Engineering"){
            this.setState({arrEid : [6,7,8,9,10]});
        }
        
        
    }
    handleEid(e){
        this.setState({eId: e.target.value});
    }

    btnGetdetails(){
        var a = this.state.department;
        var b = this.state.eId;
    }

    renderData(data, index){
        if(!data){
            return <span>wait..</span>
        }
        return(
            <option value={data}>{data}</option>
        );
    }

    render(){

        return(
            <div>
                <div>
                    <span>iyt7t y9y98y7</span>
                <span>
                    <select name="drpDepartment" value={this.state.department}
                    onChange={this.handleDep}>
                    <option value="HR">HR</option>
                    <option value="Engineering">Engineering</option>

                    </select>
                </span>
                <span>
                    <select name="drpEids" value={this.state.eId}
                    onChange={this.handleEid}>
                    {this.arrEid.map((e,index) => {return this.renderData(e,index);})}

                    </select>
                </span>
                </div>

                <div>
                    <button onClick={() =>this.btnGetdetails()}>
                        GetDetail
                    </button>
                </div>
                

            </div>
        );
    }

 

}

function mapStateToProps(state){
    return {
        users : state.user
    };
}

export default connect(mapStateToProps) (EmpDetail);