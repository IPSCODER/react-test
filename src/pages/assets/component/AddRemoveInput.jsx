import React, { useState } from 'react'

const AddRemoveInput = () => {

    const [inputList,setInputList] = useState([{firstName:"",lastName:""}])

    const handleChange = (e,i) =>{

        const {name,value} = e.target;
        const list = [...inputList]

        list[i][name] = value

        console.log(list);

    }
    

    const removeHandler = (i) =>{
        const list = [...inputList]
        list.splice(i,1)
        setInputList(list)
    }

    
    const clickHandler = () =>{
        setInputList([...inputList,{firstName:"",lastName:""}])

    } 

  return (
    <div>
        {
            inputList.map((x,i) =>(
        <div key={i} >
        <input type='text' placeholder='firstname..' name='firstName' onChange={(e) => handleChange(e,i)} />
        <input type='text' placeholder='lastname..' name='lastName' onChange={(e) => handleChange(e,i)} />
        {
            inputList.length !== 1 && 
            <button onClick={() => removeHandler(i)} >Remove</button>
        }
        {
            inputList.length - 1 === i && 
            <button onClick={clickHandler} >Add</button>
        }
        </div>
            ))
        }
    </div>
  )
}

export default AddRemoveInput