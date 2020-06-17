import React from 'react'

const TaskList = (props) => {
    const {list} = props
    return(
        <div>
            List of Tasks
            <ol>
                {list.map((task,index) => {
                    return (<li key={index}>{task.name}</li>);
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