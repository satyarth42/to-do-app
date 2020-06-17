import React, { Component } from 'react'

import TaskSubmit from './TaskSubmit'
import TaskList from './TaskList'

import '../styles/Home.css'
class Home extends Component {

    constructor(props){
        super(props)
        this.state = {
            list: []
        }
    }

    createTask = (newTask) => {
        const newState = {...this.state}
        const {list} = newState // taskList = this.state.taskList
        this.setState({
            list:[...list,{name:newTask,status:false}]
        })
    }

    updateStatus = (index,status) => {
        const {list} = this.state
        list[index].status = status
        this.setState({list},() => console.log(this.state))
    }

    render(){
        return (
            <div className="container">
                <TaskSubmit createTask={this.createTask}/>
                <br/>
                <TaskList list={this.state.list} updateStatus={this.updateStatus}/>
            </div>
        );
    }
}

export default Home


/*
submit button
Text box

Checkbox
List to display


task : name, status : done/not done

*/