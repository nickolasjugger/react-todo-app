import React, { Component } from 'react';

import './item-status-filter.css';

export default class ItemStatusFilter extends Component {
    buttons = [
        {name: 'all', label: 'All'},
        {name: 'active', label: 'Active'},
        {name: 'done', label: 'Done'}
    ];



    render() {

        const { filter, onFilterChange } = this.props;

        const buttons = this.buttons.map(({ name, label }) => {
            const isActive = filter === name;
            const clazz = isActive ? 'btn-info' : 'btn-outline-secondary';

            return (
                <button type="button"
                        className={`btn ${clazz}`}
                        key={name}
                        onClick={() => onFilterChange(name)}        
                >
                    {label}
                </button>
            )
        });

        return (
            <div className="btn-group">
                {buttons}
            </div>  
        )
    }
}

// const ItemStatusFilter = () => {
//     return (
//         <div className="btn-group">
//             <button className="btn btn-primary border-secondary">All</button>
//             <button className="btn border-secondary">Active</button>
//             <button className="btn border-secondary">Done</button>
//         </div>
//     )
// }

// export default ItemStatusFilter;