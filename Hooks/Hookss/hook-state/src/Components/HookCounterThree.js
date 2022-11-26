import React,{useState} from 'react'

function HookCounterThree() {
    const [name,setName] = useState({firstName: '', lastName: ''})
  return (
    <div>
        <form>
            {/* Here in this case ...(spread operator) is used to replace the value of first name since useState does not  merge the values and update the values. */}
           Input your first name::<input type="text" value={name.firstName} onChange={e =>setName({...name,firstName:e.target.value})}/>
            Input your last name::<input type="text" value={name.lastName} onChange={e =>setName({...name,lastName:e.target.value})}/>
            <h2>Your first name is = {name.firstName}</h2>
            <h2>Your last name is = {name.lastName}</h2>
        </form>
    </div>
  )
}

export default HookCounterThree