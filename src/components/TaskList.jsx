import React from 'react'
import TaskItem from './TaskItem'
const TaskList = (props) => {


    const checkboxChange = (index,status) => {
        props.updateStatus(index,status)
    }

    const deleteTask = (index) => {
        props.deleteTask(index)
    }

    const changePriority = (index,value) => {
        props.changePriority(index,value)
    }

    const {list} = props
    return(
        <div>
            List of Tasks
            <ol>
                {list.map((task,index) => {
                    return (
                        <TaskItem index={index} task={task} list={list} checkboxChange={checkboxChange} deleteTask={deleteTask} changePriority={changePriority} key={index}/>
                    );
                })}
            </ol>
        </div>
    );
}

export default TaskList


/*

x = [1,2,3]

newArray = x.map(item => return item*2)
newArray = [2,4,6]

*/