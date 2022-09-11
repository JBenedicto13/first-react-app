import React from 'react'

function Card (props) {
    const { name, age, gender } = props
    return (
        <div className="card-main">
            <h1>User Card</h1>
            <ul>
                <li>Name: {name}</li>
                <li>Age: {age}</li>
                <li>Gender: {gender}</li>
            </ul>
        </div>
    )
        
}

export default Card;