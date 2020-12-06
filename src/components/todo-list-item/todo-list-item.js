import React, { Component } from 'react';

import './todo-list-item.css';

export default class TodoListItem extends Component {
    render() {
        const { label, onDeleted, onToggleImportant, onToggleDone, important, done } = this.props;

        let classNames = 'todo-list-item';

        if (done) {
            classNames += ' done';
        }

        if (important) {
            classNames += ' important';
        }

        return (
            <div className="d-flex justify-content-between todo-list-item">
                <span 
                    className={classNames} 
                    
                    onClick={onToggleDone}
                >
                    { label }
                </span>
                <div>
                    <button 
                        className="btn fa fa-trash text-danger border-danger"
                        onClick={onDeleted}
                    ></button>
                    <button 
                        className="btn fa fa-exclamation text-success border-success"
                        onClick={onToggleImportant}
                    ></button>
                </div>
            </div>
        )
    }
}

// const TodoListItemFunc = ({ label, important = false }) => {
//     const style = {
//         color: important ? '#68bff2' : 'black'
//     };

//     return (
//         <div className="d-flex justify-content-between">
//             <span style={style}>{ label }</span>
//             <div>
//                 <button className="btn fa fa-trash text-danger border-danger"></button>
//                 <button className="btn fa fa-exclamation text-success border-success"></button>
//             </div>
//         </div>
//     );
// }