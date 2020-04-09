import React from 'react';

const List = props => {

        let List = props.TasksArray.map((task, index) => {
            return <li key={index} onClick={()=>props.removedTasks(index)}>{task}</li>;
        })

    return(
        <ul className = 'task-list'>
            {List}
        </ul>
    )
}

export default List;