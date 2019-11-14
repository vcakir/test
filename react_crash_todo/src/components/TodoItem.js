import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TodoItem extends Component{

    getStyle = () =>{
        return{
            background: '#f1f1f1',
            padding: '10px',
            borderBottom: '1px #ccc dashed',
            textDecoration: this.props.todo.completed ? 'line-through' : 'none'
        }

    /*    
        if(this.props.todo.completed){
            return{
                textDecoration: 'line-through'
            }
        }else{
            return{
                textDecoration: 'none'
            }
        }
    */
    }

  

    render(){
        const { id, title} = this.props.todo;
        return (
            <div style={this.getStyle()}>
                <p>
                    <input type="checkbox" onChange={this.props.markComplete.bind(this,id)}/> {' '}
                    {title }
                    <button onClick={this.props.onDelete.bind(this, id)} style={btnStyle}>x</button>
                </p>
            </div>
        )
    }
}

//PropTypes
TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
}


const btnStyle = {
    background: '#ff0000',
    color: '#fff',
    border: 'none',
    padding: '5px 8px',
    borderRadius: '50%',
    cursor: 'pointer',
    float: 'right'
}


export default TodoItem;
