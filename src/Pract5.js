import axios from 'axios'
import React, { useEffect,useState } from 'react'

const Pract5 = () => {

    const [users, setUsers]=useState([]);

useEffect(() => {
  

    const api = async () => {

        const {data}= await axios.get("https://api.github.com/users")
        console.log(data)
        setUsers(data)

    }

api();


}, [])


  return (
    <div>
      


    </div>
  )
}

export default Pract5
