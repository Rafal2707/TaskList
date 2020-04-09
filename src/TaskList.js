import React,{Component} from 'react';
import List from './List'



class TaskList extends Component {

    constructor(){
        super();
        this.state = {
            list: [],
            inputValue:'',
        }
    }

    getInputValue = (event) => {
        event.preventDefault();
        this.setState({inputValue: event.target.value});
    }

    addTask = (event) => {
        event.preventDefault();
        if(this.state.inputValue === ''){
            return;
        } 
        this.setState(prevState=>{
            return({
                list:prevState.list.concat([this.state.inputValue])
             })
        })

        this.setState({inputValue:''})
    }

    removeTask = (event) => {
        let filteredArray = this.state.list.filter((task, index) => {
            return index !== event;
        })

        this.setState({list:filteredArray})

    }

    render(){
        return(
            <div className = 'list'>
                <form onSubmit = {this.addTask}>
                    <input type = 'textarea' placeholder = 'Write another task to your List' value = {this.state.inputValue} onChange={this.getInputValue}></input>
                    <button>Add Task</button>
                </form>
                <p>If You finished your task, click to remove it :)</p>
                <List TasksArray = {this.state.list} removedTasks={this.removeTask}/>
            </div>
        )
    }
}

export default TaskList;