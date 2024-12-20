import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { UserLoginForm } from "../types";
import ErrorMessage from "../components/ErrorMessage";

export default function SignInView() {

  const initialValues: UserLoginForm = {
    username: "",
    password: "",
  };

  const { register, handleSubmit, formState: { errors } } = useForm<UserLoginForm>({ defaultValues: initialValues });

  const handleLogin = (data: UserLoginForm) => {
    console.log(data);
  };

  return (
    <div className="xs:w-4/5 flex flex-col md:flex-row max-w-5xl mx-auto">
      {/* Left Side */}
      <div className="md:w-1/2 bg-[#02020A] flex flex-col justify-center items-center text-white py-4 md:px-4 rounded-t-lg md:rounded-tr-none md:rounded-l-lg">
        <div className="bg-red-600">
          <img src="/logo.svg" alt="logo" className="w-72" />
        </div>
        <div className="text-center">
          <h1 className="text-3xl font-bold xs:text-4xl">COSMUNITY</h1>
          <h2 className="text-sm font-semibold text-yellow xs:text-base">
            Connect, Create, Inspire!
          </h2>
          <p className="font-medium hidden md:block">
            United through connection, empowered by creativity, and driven by
            inspiration. Join us on our journey towards a world full of
            possibilities!
          </p>
        </div>
      </div>
      {/* Right Side */}
      <div className="bg-zinc-800 flex flex-col items-center gap-8 px-8 py-4 rounded-b-lg md:rounded-r-lg md:rounded-bl-none md:w-1/2 relative">
        <div className="xs:self-end">
          <Link
            className="py-1 px-3 transition-colors font-semibold rounded-l-2xl bg-yellow text-[#02020A] hover:bg-[#ced118]"
            to={"/signin"}
          >
            Sign In
          </Link>
          <Link
            className="py-1 px-3 transition-colors font-semibold  rounded-r-2xl bg-[#02020A] text-white hover:bg-gray-700"
            to={"/signup"}
          >
            Sign Up
          </Link>
        </div>
        <div className="rounded-lg w-full max-w-md">
          <div className="flex items-center gap-2 mb-6">
            <h2 className="text-lg xs:text-2xl font-bold text-[#FCFF4B]">
              Sign In
            </h2>
            <p className="text-base xs:text-xl text-white font-semibold">or</p>
            <h2 className="text-lg xs:text-2xl font-bold text-[#02020A]">
              Sign Up
            </h2>
          </div>
          <form onSubmit={handleSubmit(handleLogin)} noValidate>
            <div className="mb-4">
              <label
                className="block text-white text-sm xs:text-base font-bold mb-2"
                htmlFor="username"
              >
                Username
              </label>
              <input
                className="text-sm xs:text-base shadow border rounded w-full py-2 px-3 text-white bg-transparent border-transparent border-b-white leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder="Enter your username"
                {...register("username",{
                  required: "Username is required",
                })}
              />
              {errors.username && (
                <ErrorMessage>{errors.username.message}</ErrorMessage>
              )}
            </div>
            <div className="mb-4">
              <label
                className="block text-white text-sm xs:text-base font-bold mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className="text-sm xs:text-base shadow border rounded w-full py-2 px-3 text-white bg-transparent border-transparent border-b-white leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="Enter your password"
                {...register("password",{
                  required: "Password is required",
                })}
              />
              {errors.password && (
                <ErrorMessage>{errors.password.message}</ErrorMessage>
              )}
            </div>
            <div className="flex items-center justify-between flex-col gap-4 lg:flex-row">
              <button
                className="bg-[#FCFF4B] hover:bg-[#ced118] text-[#02020A] w-full md:w-auto font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
              >
                Sign In
              </button>
              <Link
                className="inline-block align-baseline border-b border-yellow font-bold text-sm text-yellow hover:text-[#ced118]"
                to={"/signup"}
              >
                I'm not a member
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
