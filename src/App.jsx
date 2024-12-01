import React, { useState } from "react";

import { Header } from "./components/Header";
import UserInput from "./components/UserInput";
import Results from "./components/Results";

function App() {
  const [userIput, setUserIpunt] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const inputIsValid = userIput.duration >= 1;

  function handleChange(inputIndetifier, newValue) {
    setUserIpunt((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIndetifier]: +newValue,
      };
    });
  }
  return (
    <>
      <Header />
      <UserInput userIput={userIput} onChange={handleChange}/>
      {!inputIsValid && <p className="center">Please enter a duration greater than zero.</p>}
      {inputIsValid && <Results input={userIput}/>}
    </>
  );
}

export default App;
