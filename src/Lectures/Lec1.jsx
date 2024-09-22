

import React from 'react'

function Lec1() {

    
    const name = 'Faizan Tufail'
    const age = 22
    const gpa= 2.9
    const product = "new"

  return (
    
      
      <div>
        
        <h1>This is the Div created in "Lec-1 Component.."</h1>

        <p>Hi, My name is {name}, I'm {age} years old, My current CGPA is {gpa} </p> 
        
        {/* The Below statement is called "Short Circuit Operator", This is the Alternate of "if Condition", If the Condition is true it will display the Output otherwise not..
        
            NOTE: "&&" this is not "And logical Operator" , this is  "Short Circuit Operator"*/}

        <p>{ product == "new" &&  "The Product is new"}</p>


    </div>
  )
}

export default Lec1
