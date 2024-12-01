import React, { useState } from "react";

import { Header } from "./components/Header";
import UserInput from "./components/UserInput";
import Results from "./components/Results";

function App() {
  const [userIput, setUserIpunt] = useState({
    initialInvestiment: 10000,
    annualInvestiment: 1200,
    expectecReturn: 6,
    duration: 10,
  });

  function handleChange(inputIndetifier, newValue) {
    setUserIpunt((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIndetifier]: newValue,
      };
    });
  }
  return (
    <>
      <Header />
      <UserInput userIput={userIput} onChange={handleChange}/>
      <Results input={userIput}/>
    </>
  );
}

export default App;
