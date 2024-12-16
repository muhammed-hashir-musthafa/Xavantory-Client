"use client";
import { FaEnvelope, FaLock, FaUser } from "react-icons/fa";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import InputField from "@/components/baseComponents/ui/InputField/InputField";
// import toast from "react-hot-toast";
// import { useRouter } from "next/navigation";

const AdminSignUpForm = () => {
  //   const { doctorSignUp, isLoading, isError, isSuccess, error } =
  //     useDoctorSignup();
  //   const router = useRouter();

  const doctorValidationSchema = Yup.object({
    fullName: Yup.string().required("Full Name is required"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    contactNumber: Yup.number().required("Contact Number is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });
  return (
    <div className="w-full mx-auto">
      <Formik
        initialValues={{
          fullName: "",
          email: "",
          contactNumber: "",
          password: "",
        }}
        validationSchema={doctorValidationSchema}
        onSubmit={(values, { resetForm }) => {
          //   doctorSignUp(values, {
          //     onSuccess: () => {
          //       resetForm();
          //       toast.success("Please verify your email with the OTP sent");
          //       router.push(
          //         `/otp-verification?email=${encodeURIComponent(values.email)}`
          //       );
          //     },
          //   });
          console.log("object");
        }}
      >
        {() => (
          <Form className="space-y-5 text-start">
            <InputField
              label="Full Name"
              name="fullName"
              icon={FaUser}
              placeholder="Full Name"
            />
            <InputField
              label="Email"
              name="email"
              icon={FaEnvelope}
              type="email"
              placeholder="Email"
            />
            <InputField
              label="Contact No."
              name="contactNumber"
              icon={FaUser}
              placeholder="Contact No. "
            />
            <InputField
              label="Password"
              name="password"
              icon={FaLock}
              type="password"
              placeholder="Password"
            />
            <button
              type="submit"
              //   disabled={isLoading}
              className="w-full p-2 rounded-lg bg-green-600 text-white font-semibold hover:bg-green-800 shadow-md transition duration-300"
            >
              Get
              {/* {isLoading ? "Signing up..." : "Get Started"} */}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default AdminSignUpForm;
