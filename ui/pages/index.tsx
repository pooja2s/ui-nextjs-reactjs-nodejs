import React from 'react';
import type { GetServerSideProps, NextPage } from 'next';
import useSwr from 'swr';
import fetcher from '../utils/fetcher';
import { useSWRHandler } from "swr/dist/use-swr";
import { useRouter } from 'next/router';

interface User{
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
}

const Home : NextPage<{ fallbackData: User }> = ({fallbackData}) => {
    const router = useRouter();

    const { data } = useSwr<User | null>(
        `${process.env.NEXT_PUBLIC_SERVER_ENDPOINT}/user`,
        fetcher,
        { fallbackData }
    );
    
   
    const handleButtonClick = (action: string) => () => {
        if (action === 'login') {
          router.push('/auth/login');
        } else if (action === 'register') {
          router.push('/auth/register');
        }
        // You can add more conditions for different actions if needed
      };
    if(data){  
        return <div className='welcome-container'>Welcome! {JSON.stringify(data)}</div>; 
    }
  return ( 
    <div  className='welcome-container'>
          <button onClick={handleButtonClick('login')}>Please login </button> /  <button onClick={handleButtonClick('register')}>Register Now! </button>
    </div> 
  )
}

export const getServerSideProps: GetServerSideProps = async (context) =>
{
    const data = await fetcher(
        `${process.env.NEXT_PUBLIC_SERVER_ENDPOINT}/user`,
        context.req.headers
    );
    return { props : { fallbackData: data } }
}

export default Home;
