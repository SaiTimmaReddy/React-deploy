import React, { useState } from "react";
import { send } from "emailjs-com";
const Contact = () => {
  const [sender_name, set_sender_name] = useState("");
  const [sender_email, set_sender_email] = useState("");
  const [message, set_message] = useState("");
  const handleName = (e) => {
    set_sender_name(e.target.value);
  };
  const handleEmail = (e) => {
    set_sender_email(e.target.value);
  };
  const handleMessage = (e) => {
    set_message(e.target.value);
  };
  const sendMail = (e) => {
    e.preventDefault();
    send(
      "service_mric3cp",
      "template_cvg8pc6",
      { sender_name, sender_email, message },
      "eZKZkrBE4DJr_EVeu"
    )
      .then((response) => {
        console.log(
          "message sent successfully",
          response.status,
          response.text
        );
      })
      .catch((err) => {
        console.log("failed", err);
      });
    set_sender_name("");
    set_sender_email("");
    set_message("");
  };
  return (
    <>
      <h1>Contact</h1>
      <form onSubmit={sendMail}>
        <input
          type="text"
          name="sender_name"
          placeholder="your name"
          required
          value={sender_name}
          onChange={handleName}
        />
        <input
          type="email"
          name="sender_email"
          placeholder="your email"
          required
          value={sender_email}
          onChange={handleEmail}
        />
        <textarea
          name="message"
          id=""
          cols="30"
          rows="10"
          placeholder="your message"
          value={message}
          onChange={handleMessage}
        ></textarea>
        <button type="submit">submit</button>
      </form>
    </>
  );
};

export default Contact;
