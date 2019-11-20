import React, { forwardRef } from 'react';
import './style.css';

const ChildComponent = forwardRef((props, ref) => {
    return <div ref={ref} className="child-component">
        <h3>Child component</h3>
        
        <div className="row">
            <div className="column-label">
                <label>Name <span role="img" aria-label="name">📙</span>:</label>
            </div>
            <div className="column-input">
                <input type="text" name="name" />
            </div>
        </div>

        <div className="row">
            <div className="column-label">
                <label>Age <span role="img" aria-label="age">📅</span>:</label>
            </div>
            <div className="column-input">
                <input type="text" name="age" />
            </div>
        </div>

        <div className="row">
            <div className="column-label">
                <label>Hair color <span role="img" aria-label="hair">✂️</span>:</label>
            </div>
            <div className="column-input">
                <input type="text" name="hairColor" />
            </div>
        </div>

        <p>
            <button>Submit <span role="img" aria-label="submit">💾</span></button>
        </p>
    </div>
})

export default ChildComponent;