import React, { useState, useEffect } from "react";

function EmployeeValidationForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [eid, setEid] = useState("");
  const [doj, setDOJ] = useState("");
  const [validInput, setValidInput] = useState(false);

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const nameRegex = /^[A-Za-z\s]+$/;
  const eidRegex = /^[0-9]{6}$/;

  const isNameValid = (name) => name.length > 3 && nameRegex.test(name);
  const isEmailValid = (email) => emailRegex.test(email);
  const isIDValid = (eid) => eidRegex.test(eid);
  const isDOJValid = (doj) => new Date(doj) < new Date();

  useEffect(() => {
    setValidInput(
      isNameValid(name) &&
        isEmailValid(email) &&
        isIDValid(eid) &&
        isDOJValid(doj)
    );
  }, [name, email, eid, doj]);

  const handleSubmit = () => {
    setName("");
    setEmail("");
    setEid("");
    setDOJ("");
  };

  return (
    <div className="layout-column align-items-center mt-20 ">
      <div
        className="layout-column align-items-start mb-10 w-50"
        data-testid="input-name"
      >
        <input
          className="w-100"
          type="text"
          name="name"
          value={name}
          placeholder="Name"
          data-testid="input-name-test"
          onChange={(e) => setName(e.target.value)}
        />
        {!isNameValid(name) && (
          <p className="error mt-2">
            Name must be at least 4 characters long and only contain letters and
            spaces{" "}
          </p>
        )}
      </div>
      <div
        className="layout-column align-items-start mb-10 w-50"
        data-testid="input-email"
      >
        <input
          className="w-100"
          type="text"
          name="email"
          value={email}
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        {!isEmailValid(email) && (
          <p className="error mt-2">Email must be a valid email address</p>
        )}
      </div>
      <div
        className="layout-column align-items-start mb-10 w-50"
        data-testid="input-employee-id"
      >
        <input
          className="w-100"
          type="text"
          name="employeeId"
          value={eid}
          placeholder="Employee ID"
          onChange={(e) => setEid(e.target.value)}
        />
        {!isIDValid(eid) && (
          <p className="error mt-2">Employee ID must be exactly 6 digits</p>
        )}
      </div>
      <div
        className="layout-column align-items-start mb-10 w-50"
        data-testid="input-joining-date"
      >
        <input
          className="w-100"
          type="date"
          name="joiningDate"
          value={doj}
          placeholder="Joining Date"
          onChange={(e) => setDOJ(e.target.value)}
        />
        {!isDOJValid(doj) && (
          <p className="error mt-2">Joining Date cannot be in the future</p>
        )}
      </div>
      <button
        data-testid="submit-btn"
        type="submit"
        disabled={!validInput}
        onClick={handleSubmit}
      >
        Submit
      </button>
    </div>
  );
}

export default EmployeeValidationForm;