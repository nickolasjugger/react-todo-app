import React from 'react';

import './app-header.css';

const AppHeader = ({toDo , done}) => {
    return (
        <div className="d-flex align-items-end justify-content-between">
            <h3>Todo List</h3>
            <h6>{toDo} more to do, {done} done</h6>
        </div>
    );
}

export default  AppHeader;