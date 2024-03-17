import React from "react";
import ExploreButton from "../../components/Button/ExploreButton";
import Swal from "sweetalert2";

const SendEmail = () => {
  const handleMail = (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const description = form.description.value;
    const message = {
      title: title,
      description: description,
    };
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Send This!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(
          "https://csejnu-server-production.up.railway.app/SendAMessageViaMail",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ message: message }),
          }
        );
        Swal.fire({
          title: "Sent!",
          text: "Message Send Successfully.",
          icon: "success",
        });
      }
    });
  };
  return (
    <div className="min-h-[calc(100vh-150px)] py-20">
      <div className="lg:w-1/2 mx-auto">
        <form onSubmit={handleMail} className="space-y-5">
          <div
            data-aos="zoom-in-up"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            className={`space-y-2 text-sm `}
          >
            <label htmlFor={"Email Subject"}>{"Email Subject"}</label>
            <input
              required
              name="title"
              type="text"
              placeholder={"Email Subject"}
              className={`w-full text-base-100 bg-neutral placeholder:text-black px-4 py-3 rounded-md border border-indigo-300 focus:outline-none `}
            />
          </div>
          <div
            data-aos="zoom-in-up"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            className={`space-y-2 text-sm `}
          >
            <label htmlFor={"Email Details"}>{"Email Details"}</label>
            {/* <input
              required
              name="description"
              placeholder={"Email Details"}
              className={`w-full text-base-100 bg-neutral placeholder:text-black px-4 h-20 py-1 rounded-md border border-indigo-300 focus:outline-none `}
            /> */}
            <textarea
              required
              placeholder="Email Details"
              name="description"
              className="w-full text-base-100 bg-neutral placeholder:text-black px-4 h-20 py-2 rounded-md border border-indigo-300 focus:outline-none"
            ></textarea>
          </div>
          <ExploreButton onSubmit={handleMail}>Submit</ExploreButton>
        </form>
      </div>
    </div>
  );
};

export default SendEmail;
