import StaffSignUpForm from "@/components/staffComponents/forms/SignUpForm/SignUpForm";
import React from "react";

const StaffSignup = () => {
  return (
    <div>
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <title>Login</title>

        <div className="flex w-full max-w-4xl bg-white rounded-lg shadow-lg">
          <div className="hidden p-8 rounded-l-lg md:flex md:items-center md:justify-center"></div>

          <div className="w-full p-8 space-y-8 md:w-1/2">
            <h2 className="text-2xl font-bold text-center text-gray-900">
              Sign up Here!
            </h2>

            <StaffSignUpForm />

            <p className="absolute bottom-5 left-1/2 transform -translate-x-1/2 text-center text-gray-500 text-sm">
              © Xavantory, All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StaffSignup;
