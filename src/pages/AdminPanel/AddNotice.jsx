import React from "react";
import noticeicon from "../../assets/noticeicon.json";
import Lottie from "lottie-react";
import { timeConvert } from "../../utility/usefulfuntion";
import Swal from "sweetalert2";
const fields = [
  {
    type: "text",
    name: "title",
    placeholder: "Enter the title",
    label: "Enter the title",
  },
  {
    type: "select",
    name: "courseTeacher",
    placeholder: "Select the course teacher",
    label: "Select the course teacher",
    options: [
      "Ahsanul Kabir",
      "Shahidul Islam",
      "Rahat Khan ",
      "All Faculty Member",
    ],
  },
  {
    type: "select",
    name: "course",
    placeholder: "Select the course",
    label: "Select the course",
    options: ["CSE 101", "CSE 102", "CSE 103", "Other"],
  },
  {
    type: "date",
    name: "date",
    placeholder: "Enter the date",
    label: "Select the date",
  },
  {
    type: "time",
    name: "time",
    placeholder: "Enter the time",
    label: "Select the time",
  },
  {
    type: "select",
    name: "room",
    placeholder: "Select the room",
    label: "Select the room",
    options: ["601", "712", "VC Room", "Dream Lab", "Software Lab-1", "Other"],
  },
  {
    type: "text",
    name: "description",
    placeholder: "Write the description",
    label:
      "Write the description. Each fullstop will be considered as a new line.",
  },
  {
    type: "text",
    name: "tag",
    placeholder: "Write the tag",
    label: "Write  tags separated by commas(At most 3)",
  },
];
const AddNotice = () => {
  const handleNotice = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const data = {};
    for (let name of formData.keys()) {
      data[name] = formData.get(name);
    }
    const info = {
      title: data.title,
      courseTeacher: data.courseTeacher,
      course: data.course,
      date: data.date,
      time: data.time,
      room: data.room,
      description: data.description,
    };

    const dsc = data.description.split(".");
    if (!dsc[dsc.length - 1]) {
      dsc.pop();
    }
    const tags = data.tag.split(",");
    if (!tags[tags.length - 1]) {
      tags.pop();
    }
    const newTime = timeConvert(data.time);
    data.description = dsc;
    data.tag = tags;
    data.time = newTime;
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, add it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch("https://jnu-server-production.up.railway.app/addNewNotice", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });
        fetch("https://jnu-server-production.up.railway.app/sendMail", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            info: info,
          }),
        });
        Swal.fire({
          title: "added!",
          text: "Your notice has been added.",
          icon: "success",
        });
      }
    });
    form.reset();
    // console.log(data);
  };
  return (
    <section className="min-h-[calc(100vh-150px)] flex flex-col gap-16 lg:flex-row px-5 lg:px-24">
      <div className="w-[80%]">
        <Lottie className=" lg:sticky lg:top-5" animationData={noticeicon} />
      </div>
      <div className="w-full lg:py-20">
        <h1 className="lg:text-4xl font-bold py-10 text-center myText">
          ---------- Add New Notice ---------
        </h1>
        <form onSubmit={handleNotice} className="">
          <div className="grid grid-cols-1  gap-3">
            {fields.map((field, index) => {
              return field.type === "select" ? (
                <div
                  data-aos="zoom-in-up"
                  data-aos-delay="50"
                  data-aos-duration="1000"
                  data-aos-easing="ease-in-out"
                  className="space-y-2 "
                >
                  <label className="font-medium" htmlFor={field.name}>
                    {field.label}
                  </label>
                  <select
                    key={index}
                    required
                    name={field.name}
                    className="w-full placeholder:text-black bg-neutral py-2 px-4 focus:outline-none"
                  >
                    <option selected disabled hidden>
                      {field.label}
                    </option>
                    {field.options.map((option, index) => (
                      <option
                        className="bg-base-100"
                        key={index}
                        value={option}
                      >
                        {option}
                      </option>
                    ))}
                  </select>
                </div>
              ) : (
                <div
                  data-aos="zoom-in-up"
                  data-aos-delay="50"
                  data-aos-duration="1000"
                  data-aos-easing="ease-in-out"
                  className={`space-y-2 text-sm ${
                    field.type === "textarea" && "lg:col-span-2"
                  }`}
                >
                  <label htmlFor={field.name}>{field.label}</label>
                  <input
                    required
                    key={index}
                    name={field.name}
                    type={field.type}
                    placeholder={field.placeholder}
                    className={`w-full text-base-100 bg-neutral placeholder:text-black px-4 py-3 rounded-md border border-indigo-300 focus:outline-none ${
                      field.type === "textarea" && "min-h-24 col-span-2 p-2"
                    }`}
                  />
                </div>
              );
            })}
          </div>
          <button className="btn my-5 w-full">Submit</button>
        </form>
      </div>
    </section>
  );
};

export default AddNotice;
