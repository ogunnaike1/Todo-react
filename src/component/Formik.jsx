import React, { useState,   useEffect } from 'react'
import axios from 'axios'
import { useFormik } from 'formik'
import * as yup from "yup";
import { ToastContainer, toast } from 'react-toastify';
import {useDispatch, useSelector} from 'react-redux'
import { increment, decrease } from './Redux/Counterslice';

const Formik = () => {
  const {count} = useSelector((state)=> state.countSlice)
  console.log(count);

  const dispatch = useDispatch()


    useEffect(() => {
      axios
        .get("http://localhost:4008/users")
        .then((res) => {
          console.log(res.data); 
          setFormDetails(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }, [isLoading]);

    const formik = useFormik({
        initialValues:{
            username:"",
            email:"",
            password:""
        },
        validationSchema:yup.object({
            username:yup.string().min(3,"username should not be less than 3").required("username is required"),
            email:yup.string().email("must be a valid email").required("email is required"),
            password:yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
        }),
        onSubmit: (values) => {
      console.log(values);
    //   formik.setValues({
    //     username: "",
    //     email: "",
    //     password: "",
    // });
  
   
    const existUser = formDetails.find((user) => user.email === values.email);
    if( existUser){
      console.log("user already exist")
      toast.error("user already existed")
    }else{
      setIsLoading(true)
      axios.post("http://localhost:4008/users", values)
      .then((res)=>{
        console.log(res)
        toast.success("sign up successful")
        setIsLoading(false)
      })
      .catch((error)=>{
        console.log(error)
        
    })
  }  
    

    },
    })
    console.log(formik.errors)

  return (
    <div className='bg-blue-200'>
    <h1>{count}</h1>
    <button onClick={()=> dispatch(increment())}>increase</button>
    <button onClick={()=> dispatch(decrease())}>decrease</button>
    <ToastContainer/>
        <form action="" onSubmit={formik.handleSubmit} className='flex flex-col gap-3' >
            <div>
                <label>Username:</label>
                <input value={formik.values.username} onBlur={formik.handleBlur} className='form-control' onChange={formik.handleChange} name="username" type="text" />
                <p className='text-red-300'>{formik.touched.username && formik.errors.username }</p>
            </div>
            <div>
                <label>Email:</label>
                <input value={formik.values.email} onBlur={formik.handleBlur} className='form-control' onChange={formik.handleChange} name="email" type="email" />
                <p className='text-red-300'>{formik.touched.email && formik.errors.email }</p>
            </div>
            <div>
                <label>Password:</label>
                <input value={formik.values.password} onBlur={formik.handleBlur}  className='form-control' onChange={formik.handleChange} name="password" type="password" />
                <p className='text-red-300'>{formik.touched.password && formik.errors.password }</p>
            </div>
            <button type='submit'>submit</button>
        </form>
    </div>
  )
}

export default Formik