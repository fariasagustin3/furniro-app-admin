import { useState } from "react";
import InputText from "../../components/InputText";
import SubmitButton from "../../components/SubmitButton";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


export default function LoginPage() {
  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const { data } = await axios.post("http://localhost:3001/auth/login", input);
      if(data.user.isAdmin) {
        localStorage.setItem("token", "Bearer " + data.token);
        toast.success("Login successfull");
        setTimeout(() => {
          window.location.href = "http://localhost:5173/"
        }, 2000)
      } else {
        toast.error("You shall not pass 🧙‍♂️")
      }
    } catch (err) {
      console.log(err)
      toast.error("Something went wrong")
    }
  }

  return (
    <div className="w-screen h-screen bg-slate-200 flex items-center justify-center">
      <div className="w-96 h-max py-10 bg-slate-100 shadow-xl rounded-md">
        <h2 className="text-2xl font-thin text-slate-800 text-center">Admin Login</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-5 px-20 mt-8">
          <InputText placeholder="example@mail.com" required={true} name="email" onChange={handleChange} />
          <InputText placeholder="Your password" required={true} name="password" onChange={handleChange} />
          <SubmitButton imageSelected={true} />
        </form>
      </div>
      <ToastContainer />
    </div>
  )
}
