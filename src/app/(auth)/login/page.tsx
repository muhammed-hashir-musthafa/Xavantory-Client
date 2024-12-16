import Head from "next/head";
import Image from "next/image";
import LoginForm from "@/components/baseComponents/forms/LoginForm/LoginForm";
// import { signIn } from "next-auth/react";

export default function Login() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <Head>
        <title>Login</title>
      </Head>

      <div className="flex w-full max-w-4xl bg-white rounded-lg shadow-lg">
        <div className="hidden p-8 rounded-l-lg md:flex md:items-center md:justify-center">
          <Image
            width={1000}
            height={2500}
            src="https://stylemixthemes.com/wp/wp-content/uploads/sites/2/2020/06/01-1.jpg"
            alt="LMS Illustration"
            className="w-full max-w-xs"
          />
        </div>

        <div className="w-full p-8 space-y-8 md:w-1/2">
          <h2 className="text-2xl font-bold text-center text-gray-900">
            Lets Get Started
          </h2>

          <LoginForm />

          <div className="flex items-center justify-between py-3">
            <span className="w-1/5 border-b dark:border-gray-600 lg:w-1/4"></span>
            <span className="text-xs text-center text-gray-500 uppercase dark:text-gray-400">
              Or
            </span>
            <span className="w-1/5 border-b dark:border-gray-600 lg:w-1/4"></span>
          </div>

          <div>
            <button
            //   onClick={() => signIn("google")}
              className="flex items-center justify-center w-full px-4 py-2 space-x-2 font-medium text-white bg-red-500 rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 48 48"
                className="w-5 h-5"
              >
                <path
                  fill="#FFC107"
                  d="M43.611 20.083h-2.092V20H24v8h11.307C33.011 32.588 28.963 36 24 36c-6.627 0-12-5.373-12-12s5.373-12 12-12c2.637 0 5.065.846 7.057 2.259l5.657-5.657C33.18 6.786 28.769 5 24 5 12.954 5 4 13.954 4 25s8.954 20 20 20c10.493 0 18.506-7.544 19.798-17.304A19.897 19.897 0 0044 24c0-.668-.067-1.317-.189-1.957z"
                ></path>
                <path
                  fill="#FF3D00"
                  d="M6.306 14.691l6.572 4.821C14.77 16.113 19.106 14 24 14c2.637 0 5.065.846 7.057 2.259l5.657-5.657C33.18 6.786 28.769 5 24 5c-7.031 0-13.16 3.345-17.094 8.691z"
                ></path>
                <path
                  fill="#4CAF50"
                  d="M24 44c4.696 0 8.978-1.802 12.191-4.736l-5.737-4.859C28.76 36.167 26.462 37 24 37c-5.028 0-9.294-3.211-10.946-7.681l-6.489 4.992C9.366 39.776 16.229 44 24 44z"
                ></path>
                <path
                  fill="#1976D2"
                  d="M43.611 20.083h-2.092V20H24v8h11.307a11.94 11.94 0 01-4.066 5.436l.002-.002 5.737 4.859C34.114 37.178 40 31.931 40 24c0-.668-.067-1.317-.189-1.957z"
                ></path>
              </svg>
              <span>Sign in with Google</span>
            </button>
          </div>
          <p className="absolute bottom-5 left-1/2 transform -translate-x-1/2 text-center text-gray-500 text-sm">
            © Xavantory, All Rights Reserved
          </p>
        </div>
      </div>
    </div>
  );
}
