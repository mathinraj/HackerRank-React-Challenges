import React, { useState, useEffect } from "react";
import Table from "./Table";

function Main() {
  const [inputAmount, setInputAmount] = useState(null);
  const [error, setError] = useState("");
  const [hasError, setHasError] = useState(false);

  useEffect(()=>{
    if (inputAmount==="") {setError("Amount cannot be empty"); setHasError(false)};
    if (inputAmount < 0 && inputAmount!=="") {setError("Amount cannot be less than $0.01"); setHasError(true)};
    if (inputAmount > 17042.67) {setError("Amount cannot exceed the available balance"); setHasError(true)}
    if (inputAmount > 0 && inputAmount < 17042.67) {setError(""); setHasError(false)}
  },[inputAmount])

  const handleInput = (e) => {
    setInputAmount(e.target.value);
    // console.log(inputAmount);
  }

  return (
    <div className="layout-column align-items-center mx-auto">
      <h1>CryptoRank Exchange</h1>
      <section>
        <div className="card-text layout-column align-items-center mt-12 px-8 flex text-center">
          <label>
            I want to exchange $ <input className="w-10" data-testid="amount-input" required type="number" placeholder="USD" value={inputAmount} onChange={handleInput} /> of my $
            <span>17042.67</span>:
          </label>
          { inputAmount!== null && error &&
            <p data-testid="error" className="form-hint error-text mt-3 pl-0 ml-0"> {error} </p>
          }
          {/* The errors can be Amount cannot be empty /be less than $0.01/exceed the available balance */}
        </div>
      </section>
      <Table inputAmount={inputAmount} hasError={hasError} />
    </div>
  );
}

export default Main;
