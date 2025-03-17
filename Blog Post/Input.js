import React from "react";

function Input({ inputTitle, setTitle, inputDesc, setDesc }) {

  return (
    <div className="layout-column justify-content-center align-items-center">
      <input className="w-100" type="text" placeholder="Enter Title" value={inputTitle} data-testid="title-input" onChange={(e) => setTitle(e.target.value)} />
      <textarea className="mt-10 w-100" placeholder="Enter Description" value={inputDesc} data-testid="description-input" onChange={(e) => setDesc(e.target.value)} />
    </div>
  );
}

export default Input;
