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
            list:[...list,{name:newTask,status:false,priority:1}]
        })
    }

    updateStatus = (index,status) => {
        const {list} = this.state
        list[index].status = status
        this.setState({list})
    }

    deleteTask = (index) => {
        const {list} = this.state
        list.splice(index, 1);
        this.setState({...list})
    }

    changePriority = (index,value) => {
        const {list} = this.state
        list[index].priority = value
        this.setState({list})
    }

    sortByPriotity = () => {
        const {list} = this.state
        const newList = [...list]
        newList.sort((a,b) => {
            return parseInt(b.priority,10) - parseInt(a.priority,10)
        })

        this.setState({list:newList})
    }

    render(){
        return (
            <div className="container">
                Tasks Done: {this.state.list.filter(task => task.status===true).length}
                Tasks Pending: {this.state.list.filter(task => task.status===false).length}
                <TaskSubmit createTask={this.createTask}/>
                <button onClick={this.sortByPriotity}>Sort</button>
                <br/>
                <TaskList list={this.state.list} updateStatus={this.updateStatus} deleteTask={this.deleteTask} changePriority={this.changePriority}/>
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


delete a task
add priority to a task


var object = { 'a': [{ 'b': { 'c': 3 } }] };


*/