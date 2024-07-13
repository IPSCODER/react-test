import React, { useEffect, useState } from 'react'

const About = () => {

  const [users,setUsers] = useState([]);


  useEffect(() =>{


    const fetchData = async () =>{
      try{

        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json()

        setUsers(data)

      }catch(err){
        console.log("Error fetching data",err);
      }
    }

    fetchData()

  },[])

  const wait = (timer) =>{
    return new Promise((resolve,reject) =>{
      setTimeout(() =>{
        reject("done")
        console.log("task completed")
      },timer)
    })
  }


  wait(1000).then((resp) => {console.log(resp,"suces");}).catch((Err) => console.log(Err)).finally(() => {console.log("done dona done");})
  try{

  }catch(err){
console.log(err);
  }


  // const wait = (timer) => {
  //   return new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //       console.log("task completed");
  //       resolve(); // Resolve the promise after logging
  //     }, timer);
  //   });
  // };
  
  // wait(1000).then((resp) => {
  //   console.log("Promise resolved");
  // });
  return (
    <div>
      <h1>About</h1>
      {users.map((item) =>{
       return <p key={item.id} >{item.name}</p>
      })}
    </div>
  )
}

export default About