import React, { useEffect, useState } from 'react'
import axios from 'axios';
const UseEffect = () => {

    const [ users, setUsers ] = useState([]);


useEffect=(()=>{

const loadData =  async () => {

    const {data}= await axios.get('https://api.github.com/users')
    console.log(data)
    setUsers(data)


}

loadData();

},[])

  return (
    <div>
      

      <ul>

 {
    users.map(user=>{
        return <li  key={user.id} > { user.login }  </li>
    })
 }
      </ul> 

    </div>
  )
}

export default UseEffect
