import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
//import TextField from "@material-ui/core/TextField";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: 300,
    },
  },
}));

export default function TextFieldSizes() {
  const classes = useStyles();

  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const { name, email, phone, message } = data;
  const handlechange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  function myFunction1() {
    alert("Your data is submited!! Thank you. ❤️🎉");
  }
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://v1.nocodeapi.com/tamil293/google_sheets/IwsIdzAIXQRciskB?tabId=Sheet1",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify([[name, email, phone, message]]),
        }
      );
      await response.json();
      setData({ ...data, name: "", email: "", phone: "", message: "" });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <form
      className={classes.root}
      onSubmit={handleSubmit}
      noValidate
      autoComplete="off"
    >
      <div class="container">
        <div class="contact-box">
          <div class="right">
            <h2>Contact Us</h2>
            <input
              type="text"
              class="field"
              name="name"
              placeholder="Your Name"
              value={name}
              onChange={handlechange}
            ></input>

            <input
              type="text"
              class="field"
              name="email"
              placeholder="Your Email"
              value={email}
              onChange={handlechange}
            ></input>
            <input
              type="text"
              class="field"
              name="phone"
              placeholder="Phone"
              value={phone}
              onChange={handlechange}
            ></input>
            <TextareaAutosize
              type="text"
              class="field"
              name="message"
              placeholder="Your message"
              value={message}
              onChange={handlechange}
            />

            <button onClick={myFunction1} class="btn">
              Submit
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}
