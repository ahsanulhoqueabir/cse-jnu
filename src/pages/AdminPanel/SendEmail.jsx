import React from "react";

const SendEmail = () => {
  const handleMail = (e) => {
    e.preventDefault();
    const message = e.target.text.value;
    fetch("http://localhost:3000/sendMail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message: message }),
    });
  };
  return (
    <div className="min-h-[calc(100vh-150px)] py-20">
      <div>
        <form onSubmit={handleMail}>
          <input name="text" placeholder="Text" type="text" />
          <button>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default SendEmail;
