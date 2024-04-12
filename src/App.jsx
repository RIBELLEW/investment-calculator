import { useState } from "react"
import Header from "./components/Header"
import UserInput from "./components/UserInput"
import Results from "./components/Results";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
    });
    const inputIsValid = userInput.duration >=1 && userInput.initialInvestment >=0 && userInput.annualInvestment >0 && userInput.expectedReturn >0;
    function handleUserInputChange(identifier, newValue){
      setUserInput((prevUserInput)=>{
          return ({
              ...prevUserInput,
              [identifier]: +newValue,
              
      })
      });
  }

    
  return (
    <>
    <Header/>
    <UserInput userInput={userInput} onChange={handleUserInputChange}/>
    {!inputIsValid &&  <p className="center">Please enter values greater than zero.</p>}
    {inputIsValid && <Results input={userInput}/>}
    </>
  )
}

export default App
