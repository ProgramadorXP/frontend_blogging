import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { UserRegistationForm } from "../types";
import ErrorMessage from "../components/ErrorMessage";
import { createAccount } from "../api/UserAPI";

export default function SignUpView() {
  const initialValues: UserRegistationForm = {
    username: "",
    email: "",
    password: "",
    confirm_password: "",
  };

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<UserRegistationForm>({ defaultValues: initialValues });

  //Use navigate to redirect
  const navigate = useNavigate();

  const { mutate } = useMutation({
    mutationFn: createAccount,
    onError: (error) => {
      toast.error(error.message);
    },
    onSuccess: (data) => {
      toast.success(data);
      reset();
      navigate("/signin");
    },
  });

  const password = watch("password");

  const handleRegister = (formData: UserRegistationForm) => mutate(formData);

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
            className="py-1 px-3 transition-colors font-semibold rounded-l-2xl bg-[#02020A] text-white hover:bg-gray-700"
            to={"/signin"}
          >
            Sign In
          </Link>
          <Link
            className="py-1 px-3 transition-colors font-semibold rounded-r-2xl bg-yellow text-[#02020A] hover:bg-[#ced118]"
            to={"/signup"}
          >
            Sign Up
          </Link>
        </div>
        <div className="rounded-lg w-full max-w-md">
          <div className="flex items-center gap-2 mb-6">
            <h2 className="text-lg xs:text-2xl font-bold text-[#02020A]">
              Sign In
            </h2>
            <p className="text-base xs:text-xl text-white font-semibold">or</p>
            <h2 className="text-lg xs:text-2xl font-bold text-[#FCFF4B]">
              Sign Up
            </h2>
          </div>
          <form onSubmit={handleSubmit(handleRegister)} noValidate>
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
                {...register("username", {
                  required: "Username is required",
                  pattern: {
                    value: /^[a-zA-Z0-9._]{4,20}$/,
                    message: "Username can contain between 4 and 20 characters long",
                  },
                })}
              />
              {errors.username && (
                <ErrorMessage>{errors.username.message}</ErrorMessage>
              )}
            </div>
            <div className="mb-4">
              <label
                className="block text-white text-sm xs:text-base font-bold mb-2"
                htmlFor="email"
              >
                E-mail
              </label>
              <input
                className="text-sm xs:text-base shadow border rounded w-full py-2 px-3 text-white bg-transparent border-transparent border-b-white leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                placeholder="Enter your email"
                {...register("email", {
                  required: "E-mail is required",
                  pattern: {
                    value: /\S+@\S+\.\S+/,
                    message: "E-mail is invalid",
                  },
                })}
              />
              {errors.email && (
                <ErrorMessage>{errors.email.message}</ErrorMessage>
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
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 8,
                    message: "Password must be at least 8 characters long",
                  },
                })}
              />
              {errors.password && (
                <ErrorMessage>{errors.password.message}</ErrorMessage>
              )}
            </div>
            <div className="mb-4">
              <label
                className="block text-white text-sm xs:text-base font-bold mb-2"
                htmlFor="confirm_password"
              >
                Confirm Password
              </label>
              <input
                className="text-sm xs:text-base shadow border rounded w-full py-2 px-3 text-white bg-transparent border-transparent border-b-white leading-tight focus:outline-none focus:shadow-outline"
                id="confirm_password"
                type="password"
                placeholder="Confirm your password"
                {...register("confirm_password", {
                  required: "Confirm password is required",
                  validate: (value: string) =>
                    value === password || "Passwords do not match",
                })}
              />
              {errors.confirm_password && (
                <ErrorMessage>{errors.confirm_password.message}</ErrorMessage>
              )}
            </div>
            <div className="mb-4">
              <label className="inline-flex items-center">
                <input type="checkbox" className="form-checkbox" />
                <span className="ml-2 text-sm xs:text-base text-white">
                  I agree to all statements in{" "}
                  <a href="#" className="text-yellow">
                    terms of service
                  </a>
                </span>
              </label>
            </div>
            <div className="flex items-center justify-between flex-col gap-4 lg:flex-row">
              <button className="bg-[#FCFF4B] hover:bg-[#ced118] text-[#02020A] w-full md:w-auto font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                Sign Up
              </button>
              <Link
                className="inline-block align-baseline border-b border-yellow font-bold text-sm text-yellow hover:text-[#ced118]"
                to={"/signin"}
              >
                I'm already a member
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
