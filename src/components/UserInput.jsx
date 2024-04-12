import { useState } from "react"

export default function UserInput (){
    const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
    });
    
    function handleUserInputChange(identifier, newValue){
        setUserInput((prevUserInput)=>{
            return ({
                ...prevUserInput,
                [identifier]: newValue,
                
        })
        });
    }
    return <section id='user-input'>
        <div className='input-group'>
            <p><label>Initial investment</label>
            <input type="number" required value={userInput.initialInvestment} onChange={(event)=>handleUserInputChange('initialInvestment', event.target.value)}/>
            </p>
            <p><label>Annual Investment</label>
            <input type="number" required   value={userInput.annualInvestment} onChange={(event)=>handleUserInputChange('annualInvestment', event.target.value)}/>
            </p>
        </div>
        <div className='input-group'>
            <p><label>Expected return</label>
            <input type="number" required value={userInput.expectedReturn} onChange={(event)=>handleUserInputChange('expectedReturn',event.target.value)}/>
            </p>
            <p><label>Duration</label>
            <input type="number" required value={userInput.duration} onChange={(event)=>handleUserInputChange('duration',event.target.value)}/>
            </p>
        </div>
    </section>
}