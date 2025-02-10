import React from 'react'
import { useFormik } from 'formik'
import * as yup from "yup";

const Formik = () => {
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
    
      
    },
    })
    console.log(formik.errors)

  return (
    <div className='bg-blue-200'>
        <form action="" onSubmit={Formik.handlesubmit} className='flex flex-col gap-3' >
            <div>
                <label>Username:</label>
                <input onBlur={formik.handleBlur} className='form-control' onChange={Formik.handlechange} name="username" type="text" />
                <p className='text-red-300'>{formik.touched.username && formik.errors.username }</p>
            </div>
            <div>
                <label>Email:</label>
                <input onBlur={formik.handleBlur} className='form-control' onChange={Formik.handlechange} name="email" type="email" />
                <p className='text-red-300'>{formik.touched.email && formik.errors.email }</p>
            </div>
            <div>
                <label>Password:</label>
                <input onBlur={formik.handleBlur}  className='form-control' onChange={Formik.handlechange} name="password" type="password" />
                <p className='text-red-300'>{formik.touched.password && formik.errors.password }</p>
            </div>
            <button type='submit'>submit</button>
        </form>
    </div>
  )
}

export default Formik