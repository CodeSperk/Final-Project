import { Link, useLocation, useNavigate } from "react-router-dom";
import loginBg from "../../assets/others/authentication.png";
import loginImg from "../../assets/others/authentication2.png";
import { FaFacebookF, FaGithub, FaGoogle } from "react-icons/fa";
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";
import useAuth from "../../Hooks/useAuth";
import { useEffect, useState } from "react";

const Login = () => {
  const [disabled, setDisabled] = useState(true);
  const {loginUser, loginWithGoogle} = useAuth();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const navigate = useNavigate();

  const handleCaptcha = (e) => {
    e.preventDefault();
    const userCaptcha = e.target.value;
    if(validateCaptcha(userCaptcha)){
      setDisabled(false);
    }else{
      setDisabled(true);
    }
  }

  useEffect(()=>{
    loadCaptchaEnginge(5); 
  },[])


  const handleLogin = e => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    loginUser(email,password)
    .then( () => {
      Swal.fire({
        icon: "success",
        title: "Your work has been saved",
        showConfirmButton: false,
        timer: 1500
      });
      navigate(from,{replace:true});
    })
    .catch(error => {
      console.log(error.code);
    })
    }

  // Google Login
  const handleGoogleLogin = () => {
    loginWithGoogle()
    .then(result => {
      console.log(result.user);
      navigate(from,{replace:true});
    })
    .catch(error => {
      console.log(error.code);
    })
  }

  return (
    <div
      className="bg-no-repeat bg-center bg-cover min-h-screen py-24 px-4"
      style={{ background: `url(${loginBg})` }}
    >

      <Helmet>
        <title>TasteTrack | Login</title>
      </Helmet>

      <div className="max-w-[1400px] mx-auto px-3 md:px-8 lg:px-10 h-25">
        <div className="border-2 shadow-xl py-14 px-4 md:px-12 lg:px-16 xl:px-20 flex flex-col md:flex-row justify-between items-center gap-6 lg:gap-12 xl:gap-24">
        
            <img src={loginImg} alt="" className="md:w-1/2"/>
          <div className="md:w-1/2 text-center">
            <form className="card-body" onSubmit={handleLogin}>
              <h3 className="text-center">Login</h3>

              {/* email field */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered focus:outline-none"
                  required
                />
              </div>

              {/* password field */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered focus:outline-none"
                  required
                />
              </div>

              {/* captcha display Field */}
              <div className="">
               <LoadCanvasTemplate />
              </div>
              
              {/* captcha input Field */}
              <div className="form-control mt-6">
                <input
                  type="text"
                  name="captcha"
                  placeholder="Type captcha here"
                  className="input input-bordered focus:outline-none"
                  onBlur={handleCaptcha}
                  required
                />
              </div>

              <div className="form-control mt-6">
                <button className="btn" disabled={disabled}>Login</button>
              </div>
            </form>

            <p className="text[var(--clr-accent)]">New here? <Link to="/register" className="font-bold">Create a New Account</Link></p>
            <p className="my-4">Or sign in with</p>

            <div className="flex items-center justify-center gap-4">
            <FaFacebookF className="border-2 border-[var(--clr-primary)] hover:border-[var(--clr-accent)] hover:text-[var(--clr-accent)] p-2 text-4xl rounded-full text-[var(--clr-primary)] cursor-pointer duration-1000 hover:scale-125"/>
            <FaGoogle className="border-2 border-[var(--clr-primary)] hover:border-[var(--clr-accent)] hover:text-[var(--clr-accent)] p-2 text-4xl rounded-full text-[var(--clr-primary)] cursor-pointer duration-1000 hover:scale-125" onClick={handleGoogleLogin}/>
            <FaGithub className="border-2 border-[var(--clr-primary)] hover:border-[var(--clr-accent)] hover:text-[var(--clr-accent)] p-2 text-4xl rounded-full text-[var(--clr-primary)] cursor-pointer duration-1000 hover:scale-125"/>

            </div>


          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
