import React, { Component } from 'react'

class TaskSubmit extends Component {

    constructor(props){
        super(props)
        this.state = {
            newTask : ""
        }
    }

    handleChange = (e) => {
        this.setState({newTask:e.target.value})
    }

    render(){
        return (
            <div>
                <input type="text" value={this.state.newTask} onChange={this.handleChange}/><br/>
                <button>Submit</button>
            </div>
        );
    }
}

export default TaskSubmit