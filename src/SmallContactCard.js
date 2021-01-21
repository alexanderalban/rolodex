import React from 'react';



function SmallContactCard(props) {
    const  { picture, firstName, lastName, phone, cell, email, city, state, country} = props


    return (
        <section>
            <li style={{ margin: "0px"}}>
                <img src={picture} alt={"Person"}></img>
                <h2>{firstName} {lastName}</h2>
            </li>
            <button style={{ margin: "10px"}}>Show Details</button>
        </section>
    )
}

export default SmallContactCard;