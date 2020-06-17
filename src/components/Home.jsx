import React, { Component } from 'react'

import TaskSubmit from './TaskSubmit'

import '../styles/Home.css'
class Home extends Component {

    constructor(props){
        super(props)
        this.state = {
            taskList: []
        }
    }

    createTask = (newTask) => {
        const newState = {...this.state}
        const {taskList} = newState // taskList = this.state.taskList
        this.setState({taskList:[...taskList,newTask]},() => console.log(this.state))
    }

    render(){
        return (
            <div className="container">
                <TaskSubmit/>
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

*/