import React ,{useContext} from 'react'

import { FirstName, LastName } from './App'

function Component2() {
    const fname=  useContext(FirstName)
    const Lname=  useContext(LastName)
    
  return (
    <div>{fname} + {Lname}</div>
  )
}

export default Component2