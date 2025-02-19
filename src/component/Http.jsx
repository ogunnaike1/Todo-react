import React, { useState,useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import { isFetching, isSuccessful, isError } from './Redux/Userslice'


const Http = () => {
    const [data, setData] = useState([])
    // const [isLoading, setIsloading] = useState(false)
    // const [error, setError] = useState(false)
    const dispatch = useDispatch()
    const {isLoading, user, error} = useSelector((state)=> state.userSlice)
    console.log({isLoading, user, error})

    useEffect(() => {
        const fecthData = async()=>{
            try {
                dispatch(isFetching());
               const response = await axios.get(`https://jsonplaceholder.typicode.com/todos/`)
               dispatch(isSuccessful(response.data));
               console.log(response.data)
            } catch (error) {
                console.log(error)
                dispatch(isError(error.message));

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
        user && user.map((item)=>(
            <div key={item.id}>
            <h1>{item.user}</h1>
            <h1>{item.title}</h1>
            <input type="checkbox" checked={item.completed ? 'checked' : '' } name="" id="" />
            <Link to={`/seemore/${item.id}`}>see more</Link>
            </div>

        ))

        }
    </div>
  )
}

export default Http