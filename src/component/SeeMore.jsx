import React, { useState,useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

const SeeMore = () => {
    const [data, setData] = useState({})
    const [isLoading, setIsloading] = useState(false)
    const {id} = useParams()

    useEffect(() => {
        const fecthData = async()=>{
            try {
                setIsloading(true)
               const response = await axios.get(`https://jsonplaceholder.typicode.com/todos/${id}`)
               setData(response.data)
               setIsloading(false)
            } catch (error) {
                console.log(error)
            }
        }

        fecthData()
    
    }, [id])

   
 
  return (
    <div>
    <p>SeeMore</p>
    
    {isLoading ? <p>...loading</p> : 
            <div>
            <h1>{data.userId}</h1>
            <h1>{data.id}</h1>
            <h1>{data.title}</h1>
            <h1>{data.completed}</h1>
            </div>
        }
        </div>
  )
}

export default SeeMore

