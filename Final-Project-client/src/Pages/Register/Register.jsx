import { Link } from "react-router-dom";
import loginBg from "../../assets/others/authentication.png";
import loginImg from "../../assets/others/authentication2.png";
import { FaFacebookF, FaGithub, FaGoogle } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet-async";

const Register = () => {
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm();

    const onSubmit = data => {
      console.log(data);
    }

  return (
    <div
      className="bg-no-repeat bg-center bg-cover min-h-screen py-24 px-4"
      style={{ background: `url(${loginBg})` }}
    >
            <Helmet>
        <title>TasteTrack | Register</title>
      </Helmet>
      <div className="max-w-[1400px] mx-auto px-3 md:px-8 lg:px-10 h-25">
        <div className="border-2 shadow-xl py-14 px-4 md:px-12 lg:px-16 xl:px-20 flex flex-col md:flex-row-reverse justify-between items-center gap-6 lg:gap-12 xl:gap-24">
          <img src={loginImg} alt="" className="md:w-1/2" />
          <div className="md:w-1/2 text-center">
            <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
              <h3 className="text-center">Sign Up</h3>

              {/* name field */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  {...register("name", {required: true})}
                  placeholder="Type here"
                  className="input input-bordered focus:outline-none"
                  required
                />
                   {errors.name && <span className="text-red-500">Email is required</span>}
              </div>

              {/* Age field */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Age</span>
                </label>
                <input
                  type="number"
                  {...register("age", {required: true, min:18, max: 30})}
                  placeholder="Type here"
                  className="input input-bordered focus:outline-none"
                />
                   {errors.age?.type === "required" && <span className="text-red-500">This field is required</span>}
                   {errors.age?.type === "min" && <span className="text-red-500">You are too young</span>}
              {errors.age?.type === "max" && <span className="text-red-500">You are old</span>}

              </div>

              {/* email field */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  {...register("email")}
                  placeholder="email"
                  className="input input-bordered focus:outline-none"
                />
              </div>

              {/* password field */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  {...register("password", {required: true, minLength:8, maxLength:12, pattern: /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)/})}

                  placeholder="password"
                  className="input input-bordered focus:outline-none"
                />
                {errors.password?.type === "required" && <span className="text-red-500">Password is required</span>}
                {errors.password?.type === "minLength" && <span className="text-red-500">Minimum Length is 8</span>}
                {errors.password?.type === "maxLength" && <span className="text-red-500">Max length is 12</span>}
                {errors.password?.type === "pattern" && <span className="text-red-500">At Least one Uppercase, one LowerCase, one Number & one Special Character</span>}
              </div>

              <div className="form-control mt-6">
                <button className="btn ">Sign Up</button>
              </div>
            </form>

            <p className="text[var(--clr-accent)]">
              Already Registered?{" "}
              <Link className="font-bold" to="/login">
                Go to log in
              </Link>
            </p>
            <p className="my-4">Or sign up with</p>

            {/* social icons */}
            <div className="flex items-center justify-center gap-4">
              <FaFacebookF className="border-2 border-[var(--clr-primary)] hover:border-[var(--clr-accent)] hover:text-[var(--clr-accent)] p-2 text-4xl rounded-full text-[var(--clr-primary)] cursor-pointer duration-1000 hover:scale-125" />
              <FaGoogle className="border-2 border-[var(--clr-primary)] hover:border-[var(--clr-accent)] hover:text-[var(--clr-accent)] p-2 text-4xl rounded-full text-[var(--clr-primary)] cursor-pointer duration-1000 hover:scale-125" />
              <FaGithub className="border-2 border-[var(--clr-primary)] hover:border-[var(--clr-accent)] hover:text-[var(--clr-accent)] p-2 text-4xl rounded-full text-[var(--clr-primary)] cursor-pointer duration-1000 hover:scale-125" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
