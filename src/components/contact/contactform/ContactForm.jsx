import { useState } from "react";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import emailjs from "emailjs-com";
import "./contactform.css";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [disabled, setDisabled] = useState(false);

  // Function that displays a success toast on bottom right of the page when form submission is successful
  const toastifySuccess = () => {
    toast("Form sent!", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      className: "submit-feedback success",
      toastId: "notifyToast",
    });
  };

  // Function called on submit that uses emailjs to send email of valid contact form
  const onSubmit = async (data) => {
    // Destrcture data object
    const { name, email, subject, message } = data;
    try {
      // Disable form while processing submission
      setDisabled(true);

      // Define template params
      const templateParams = {
        name,
        email,
        subject,
        message,
      };

      // Use emailjs to email contact form data
      await emailjs.send(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        templateParams,
        process.env.REACT_APP_USER_ID
      );

      // Reset contact form fields after submission
      reset();
      // Display success toast
      toastifySuccess();
      // Re-enable form submission
      setDisabled(false);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="ContactForm">
      <div className="container">
        <div className="contactForm">
          <form id="contact-form" onSubmit={handleSubmit(onSubmit)} noValidate>
            <div className="row">
              <div className="name-container">
                {" "}
                <input
                  type="text"
                  name="name"
                  {...register("name", {
                    required: {
                      value: true,
                      message: "Please enter your name",
                    },
                    maxLength: {
                      value: 30,
                      message: "Please use 30 characters or less",
                    },
                  })}
                  className="form-control formInput"
                  placeholder="Name"
                ></input>
                {errors.name && (
                  <span className="errorMessage">{errors.name.message}</span>
                )}
              </div>
              <div className="email-container">
                <input
                  type="email"
                  name="email"
                  {...register("email", {
                    required: true,
                    pattern:
                      /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                  })}
                  className="form-control formInput"
                  placeholder="Email address"
                ></input>
                {errors.email && (
                  <span className="errorMessage">
                    Please enter a valid email address
                  </span>
                )}
              </div>
            </div>
            <div className="row">
              <div className="phone-container">
                <input
                  type="tel"
                  name="phone"
                  {...register("tel", {
                    required: true,
                    pattern: /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/,
                  })}
                  className="form-control formInput"
                  placeholder="Phone"
                ></input>
                {errors.phone && (
                  <span className="errorMessage">
                    Please enter a valid phone number
                  </span>
                )}
              </div>
              <div className="website-container">
                {" "}
                <input
                  type="text"
                  name="website"
                  {...register("website", {
                    required: {
                      value: true,
                      message: "Please enter your website",
                    },
                    maxLength: {
                      value: 30,
                      message: "Please use 30 characters or less",
                    },
                  })}
                  className="form-control formInput"
                  placeholder="Name"
                ></input>
                {errors.name && (
                  <span className="errorMessage">{errors.name.message}</span>
                )}
              </div>
            </div>
            <div className="row">
              <div className="consult-container">
                <select
                  name="consult"
                  id="consult"
                  className="form-control formInput"
                  placeholder="Consult"
                  {...register("consult", {
                    required: true,
                  })}
                >
                  <option value="startup">Startup</option>
                  <option value="grow">Grow</option>
                  <option value="accelerate">Accelerate</option>
                </select>
                {errors.message && (
                  <span className="errorMessage">Please enter a comment</span>
                )}
              </div>
            </div>
            <div className="row">
              <div className="comment-container" style={{ width: "100%" }}>
                <textarea
                  style={{ width: "70%" }}
                  rows={3}
                  name="comment"
                  {...register("comment", {
                    required: true,
                  })}
                  className="form-control formInput"
                  placeholder="Comment"
                ></textarea>
                {errors.message && (
                  <span className="errorMessage">Please enter a comment</span>
                )}
              </div>
            </div>
            <button className="submit-btn" disabled={disabled} type="submit">
              Submit
            </button>
          </form>
        </div>
        <ToastContainer />
      </div>
    </div>
  );
};

export default ContactForm;
