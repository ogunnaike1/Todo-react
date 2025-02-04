import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";

const Login = ({setIsAuthenticated}) => {
    const navigate = useNavigate();
    const [error, setError] = useState("");
    const [signUPDetails, setSignUPDetails] = useState({
        email:"",
        password:""
    });
    const handleLogin = () =>{
        const { email, password } = signUPDetails;
        if(!email || !password){
            setError("missing detail...fill all input");
            return;
        }
        const storedDetails = JSON.parse(localStorage.getItem("localStorageDetails")) || [];
        const existingUser = storedDetails.find(user => user.email === email && user.password === password);

        if (existingUser) {
            navigate("/home")
            setIsAuthenticated(true);
        } else {
        setError("wrong email or password")
      
        }

    }

    
  return (
    <div class="min-h-screen bg-gray-100 flex items-center justify-center p-4">
  <div class="max-w-md w-full bg-white rounded-xl shadow-lg p-8">
    <h2 class="text-2xl font-bold text-gray-900 mb-6 text-center">Log in</h2>
    
    <form class="space-y-4">
      <div>
        <label class="block text-sm font-medium text-gray-700 mb-1">Email</label>
        <input 
          type="email" 
          class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
          placeholder="your@email.com"
          onChange={(e)=>setSignUPDetails({...signUPDetails, email:e.target.value})}
        />
      </div>

      <div>
        <label class="block text-sm font-medium text-gray-700 mb-1">Password</label>
        <input 
          type="password" 
          class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
          placeholder="••••••••"
          onChange={(e)=>setSignUPDetails({...signUPDetails, password:e.target.value})}
        />
      </div>

      <div class="flex items-center justify-between">
        <label class="flex items-center">
          <input type="checkbox" class="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"/>
          <span class="ml-2 text-sm text-gray-600">Remember me</span>
        </label>
        <a href="#" class="text-sm text-indigo-600 hover:text-indigo-500">Forgot password?</a>
      </div>

      <button  type="button" onClick={handleLogin}  class="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2.5 rounded-lg transition-colors">
        Sign In
      </button>
    </form>

    <div class="mt-6 text-center text-sm text-gray-600">
      Don't have an account? 
      <a href="#" class="text-indigo-600 hover:text-indigo-500 font-medium">Sign up</a>
    </div>
  </div>
  <p>{error}</p>
</div>
  )
}

export default Login