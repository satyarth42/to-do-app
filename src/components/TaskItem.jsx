import React,{Fragment} from 'react'


const TaskItem = ({task,list,index,checkboxChange,deleteTask,changePriority}) => {
    return(
        <Fragment>
            <li>{task.name}
                <input type="checkbox" checked={list[index].status} onChange={() => checkboxChange(index,!list[index].status)}/>
                <button onClick={() => deleteTask(index)}>Delete</button>
                <input type="text" value={task.priority} onChange={(e) => changePriority(index,e.target.value)}/>
            </li>
         </Fragment>
    );
}

export default TaskItem