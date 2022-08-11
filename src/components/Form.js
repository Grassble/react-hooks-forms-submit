import React, { useState } from "react";

function Form(props) {
  const [firstName, setFirstName] = useState("Sylvia");
  const [lastName, setLastName] = useState("Woods");
  const [people, setPeople] = useState([])

  function handleFirstNameChange(event) {
    setFirstName(event.target.value);
  }

  function handleLastNameChange(event) {
    setLastName(event.target.value);
  }

  const reset = () => {
    setFirstName("")
    setLastName("")
  }

const handleSubmit = (e) => {
  e.preventDefault()
  let newPerson = {firstName: firstName, lastName: lastName}
  setPeople([...people, newPerson])
  reset()
}

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleFirstNameChange} value={firstName} />
        <input type="text" onChange={handleLastNameChange} value={lastName} />
        <button type="submit">Submit</button>
      </form>
      <h3>People</h3>
      {people.map(person => (<p>{person.firstName} {person.lastName}</p>))}
    </div>
  );
}

export default Form;
