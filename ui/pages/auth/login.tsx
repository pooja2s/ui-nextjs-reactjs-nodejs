import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';
import axios from 'axios';
import { zodResolver } from '@hookform/resolvers/zod';
import { object , string , TypeOf } from 'zod';
import { toast } from 'react-hot-toast';

const userSchema = object({
  email:
    string().
    min(1,"Email is required").
    min(3,"Email too short").
    max(50,"Email too long").
    email("Invalid Email format"),
  password:
    string().
    min(1,"Password is required").
    min(3,"Password too short - should be 3 character minimun").
    max(50,"Password too long")
});

type createUserInput = TypeOf <typeof userSchema> ;

export default function LoginPage() {
  const router = useRouter();

  const [loginError, setLoginError] = useState<null | string>(null);
  
  const { register, formState: { errors } , handleSubmit } = useForm<createUserInput>({
    resolver: zodResolver(userSchema),
  });

  const handleButtonClick = () => {
    router.push('/auth/register');
  };

  async function onSubmit(values:createUserInput)
  {
      // Extract specific fields from values
      const { email, password } = values;
      // Create a new object with only the necessary fields
      const userData = { email, password };

    try{
      await axios.post(`${process.env.NEXT_PUBLIC_SERVER_ENDPOINT}/auth/login` , userData)
      .then((response)=> {
        toast.success(response?.data.data.messag);
        if (response.data.data.token) {
          localStorage.setItem("auth-token", response.data.data.token);
        }
        router.push("/dashboard")}
      )
      .catch((err)=>{
        toast.error(err.response?.data.message);
        setLoginError(err.response?.data.message)
      });

    }
    catch(err:any){
      setLoginError(err.message)
    }
  }
  return (
    <>
    <div className="login-container mt-10">
       <h2 className="heading">Login</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-element">
            <label htmlFor="email" className="form-label">Email address</label>
            <input 
              type="text" 
              className="form-control" 
              id="email" 
              placeholder="abc@example.com" 
              {...register("email")} 
            />
            <p>{errors.email ? errors.email.message : null}</p>
          </div>
          <div className="form-element">
            <label htmlFor="password" className="form-label">Password</label>
            <input 
              type="password" 
              className="form-control" 
              id="password" 
              placeholder="********" 
              {...register("password")} 
            />
            <p>{errors.password ? errors.password.message : null}</p>
          </div>
          <button className="submitBtn" type="submit">Sign In</button>
        </form>
        
        <button className="submitBtn mt-3"  onClick={handleButtonClick}>Register now! </button>

      </div>
    </>
  );
}
