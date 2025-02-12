import React, { useState,useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'



const Http = () => {
    const [data, setData] = useState([])
    const [isLoading, setIsloading] = useState(false)
    const [error, setError] = useState(false)

    useEffect(() => {
        const fecthData = async()=>{
            try {
                setIsloading(true)
               const response = await axios.get(`https://jsonplaceholder.typicode.com/todos/`)
               setData(response.data)
               console.log(data)
               setIsloading(false)
            } catch (error) {
                setError(error)
            }

        }
    //     try {
    //         setIsloading(true)
    //         axios.get(`https://jsonplaceholder.typicode.com/todos/`)
    // .then((res)=>{
    //     console.log(res.data)
    //     setData(res.data)
    //     setIsloading(false)
    // }).catch((err)=>{
    //     console.log(err)
    // })
            
    //     } catch (error) {
    //         console.log(error)
            
    //     }

        fecthData()
    
    }, [])
    
  return (
    <div>
        <h1>API</h1>

        {isLoading ? <p>...loading</p> : 
        data.map((item)=>(
            <div key={item.id}>
        
            <input type="checkbox" checked={item.completed ? 'checked' : '' } name="" id="" />
            <Link to={`/seemore/${item.id}`}>see more</Link>
            </div>

        ))

        }
    </div>
  )
}

export default Http