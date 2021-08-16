// ->dorim sa realizam un simplu formular cu React Hooks, motiv pentru care vom folosit useState() iar dintr-o componenta Class, aceasta va deveni o componenta Function
import React, { useState } from "react";
import "../components/FormUseState.css";

function FormUseState() {
  // ->vrem ca formularul sa aiba 4 inpuuturi:firstName, lastName, email, password->deci acestea in state-ul initial ar fi necompletate
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  function submitForm(event) {
    event.preventDefault();
    // resetarea inputurilor formularului
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
  }
  return (
    <div className="form-use-state">
      <form onSubmit={(event) => submitForm(event)} className="form">
        <label htmlFor="firstName" className="form-label">
          FirstName:
        </label>
        <input
          type="text"
          name="firstName"
          value={firstName}
          id="firstName"
          className="form-control"
          onChange={(event) => setFirstName(event.target.value)}
        />
        <label htmlFor="lastName" className="form-label">
          LastName:
        </label>
        <input
          type="text"
          name="lastName"
          value={lastName}
          id="lastName"
          className="form-control"
          onChange={(event) => setLastName(event.target.value)}
        />
        <label htmlFor="email" className="form-label">
          Email:
        </label>
        <input
          type="email"
          name="email"
          value={email}
          id="email"
          className="form-control"
          onChange={(event) => setEmail(event.target.value)}
        />
        <label htmlFor="password" className="form-label">
          Password:
        </label>
        <input
          type="password"
          name="password"
          value={password}
          id="password"
          className="form-control"
          onChange={(event) => setPassword(event.target.value)}
        />
        <input type="submit" value="Trimite" className="btn btn-primary" />
      </form>
    </div>
  );
}

export default FormUseState;
