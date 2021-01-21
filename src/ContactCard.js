import React from 'react';



function ContactCard(props) {
    const  { picture, firstName, lastName, phone, cell, email, city, state, country} = props

    return (
        <section>
            <li style={{ margin: "0px"}}>
                <img src={picture} alt={"Person"}></img>
                <h2>{firstName} {lastName}</h2>
                <h4>Phone: {phone}</h4>
                <h4>Cell: {cell}</h4>
                <h4>{email}</h4>
                <h5>{city}, {state}, {country}</h5>
            </li>
            <button style={{ margin: "10px"}}>Hide Details</button>
        </section>
    )
}

export default ContactCard;