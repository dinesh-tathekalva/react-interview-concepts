import React from "react";


const ContactForm1 = () => {

    return (
        <form action="submit" method="POST" onSubmit={submitForm}>
            <label>Name</label>
            <input type="text" name="name" id="name" required></input>

            <label>Email</label>
            <input type="email" name="email" id="email" required></input>

            <label>Message</label>
            <input type="message" name="message" id="messageqee "></input>
            </form>
            
    )
}