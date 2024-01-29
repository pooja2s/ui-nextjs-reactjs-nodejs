import React, { useState } from 'react'
import { useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import { toast } from 'react-hot-toast';

interface UserDataResponse {
  status: boolean;
  message:  string;
  data: UserData;
  // Add other properties based on your API response
}
interface UserData {
  _id : string;
  email : string;
  userName : string;
  phone : string;
  firstName : string;
  lastName : string;
  address : string; 
  city : string;
  state : string;
  country : string;
  zipcode : string;
  userImage : string;
  // Add other properties based on your API response
}

export default function dashboard() {
  const router = useRouter();

  const [userData, setUserData] = useState<UserData | null>(null);
  const [error, setError] = useState<string | null>(null);
  

  useEffect(() => {
  if(localStorage.getItem('auth-token') == null )
  {
    router.push("/auth/login")
  }
    const fetchData = async () => {
      try {
        const response = await axios.get<UserDataResponse>(`${process.env.NEXT_PUBLIC_SERVER_ENDPOINT}/user`, {
          headers: {
            'auth-token': localStorage.getItem('auth-token'), // Replace with your actual access token
          }});
        setUserData(response.data.data);
      } catch (error) {
        setError('Error fetching user data.');
      }
    };

    fetchData();
  }, []);

  const logout = () =>{
    localStorage.removeItem("auth-token");
    toast.success('Logout Successfully!');
    router.push("/")
  }


  return (
    <div className='welcome-container'>
      <h1>Dashboard</h1>
      {error ? (
        <p>{error}</p>
      ) : userData ? (
        <div>
          <h2>Welcome {userData.userName}</h2>
          <button onClick={logout}>Logout</button>
          {/* Add other properties based on your API response */}
        </div>
      ) : (
        <p>Loading...</p>
      )}
   
    </div>
  )
}
