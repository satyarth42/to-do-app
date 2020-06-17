import React, { Fragment } from 'react'

const TaskList = (props) => {


    const checkboxChange = (index,status) => {
        props.updateStatus(index,status)
    }

    const {list} = props
    return(
        <div>
            List of Tasks
            <ol>
                {list.map((task,index) => {
                    return (
                        <Fragment key={index}>
                            <li>{task.name}
                                <input type="checkbox" value={list[index].status} onChange={() => checkboxChange(index,!list[index].status)}/>
                            </li>
                        </Fragment>
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