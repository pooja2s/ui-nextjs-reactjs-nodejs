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
  userName:
    string().
    min(1,"Username is required").
    min(3,"Username too short - should be 3 character minimun").
    max(50,"Username too long - should be 50 character maximun"),
  password:
    string().
    min(1,"Password is required").
    min(3,"Password too short - should be 3 character minimun").
    max(50,"Password too long"),
  passwordConfirmation: 
    string({required_error:"passwordConfirmation is required"})
}).refine((data) => data.password === data.passwordConfirmation,
{
  message : "Both Password and Confirm Password must match",
  path: ["passwordConfirmation"]
});

type createUserInput = TypeOf <typeof userSchema> ;

export default function RegisterPage() {
  const router = useRouter();

  const [registerError, setRegisterError] = useState<null | string>(null);
  
  const { register, formState: { errors } , handleSubmit } = useForm<createUserInput>({
    resolver: zodResolver(userSchema),
  });

  const handleButtonClick = () => {
    router.push('/auth/login');
  };

  async function onSubmit(values:createUserInput)
  {
      // Extract specific fields from values
      const { email, userName, password } = values;
      // Create a new object with only the necessary fields
      const userData = { email, userName, password };

    try{
      await axios.post(`${process.env.NEXT_PUBLIC_SERVER_ENDPOINT}/auth/register`,userData)
      .then((response)=> {
        toast.success(response?.data.data.messag);
        router.push("/auth/login")
      })
      .catch((err)=>{
        toast.error(err.response?.data.message);
        setRegisterError(err.response?.data.message)
      });

    }
    catch(err:any){
      setRegisterError(err.message)
    }
  }
  return (
    <>
    <div className="register-container">
      <h2 className="heading">Registration</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-containers">
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
            <label htmlFor="Username" className="form-label">Username</label>
            <input 
              type="text" 
              className="form-control" 
              id="userName" 
              placeholder="abc" 
              {...register("userName")} 
            />
            <p>{errors.userName ? errors.userName.message : null}</p>
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
          <div className="form-element">
            <label htmlFor="passwordConfirmation" className="form-label">Confirm Password</label>
            <input 
              type="password" 
              className="form-control" 
              id="passwordConfirmation" 
              placeholder="********" 
              {...register("passwordConfirmation")} 
            />
            <p>{errors.passwordConfirmation ? errors.passwordConfirmation.message : null}</p>
          </div>
          <button className="submitBtn mt-3" type="submit">Register</button>
        </div>
      </form>

      <button className="submitBtn mt-3"  onClick={handleButtonClick}>Login now! </button>

      </div>
    </>
  );
}
