
import './App.css';
import {useForm} from "react-hook-form";
import * as yup from "yup";
import {yupResolver} from '@hookform/resolvers/yup'

function App() {



  const schema = yup.object().shape({
    fullName : yup.string().required("Your Full Name is required!"),
    email : yup.string().email().required(),
    age : yup.number().positive('must be positive').integer('must be integer').min(18, 'age must be atlest eighteen').required(),
    password : yup.string().min(4, 'must be atleast four characters long').max(6, 'max is six').required(),
    confirmPassword : yup.string().oneOf([yup.ref('password')], null)
  })

const {register, handleSubmit, formState: {errors}} = useForm({
  resolver: yupResolver(schema),
});



const onSubmit = (data) => {
  console.log(data);
}
  
  return (
    <div className="App">
   <form onSubmit={handleSubmit(onSubmit)}>
    <input type="text" placeholder="Full Name"  {...register("fullName")}/><br />
    <p>{errors.fullName?.message}</p>
    <input type="text" placeholder="Email" {...register("email")}/><br />
    <input type="number" placeholder="Age" {...register("age")}/><br />
    <p>{errors.age?.message}</p>
    <input type="password" placeholder="Password" {...register("password")}/><br />
    <input type="password" placeholder="Confirm Password" {...register("confirmPassword")}/><br />
    <p>{errors.password?.message}</p>
 <input type="submit"  />

   </form>
   </div>
  );
}

export default App;
