import Swal from "sweetalert2";
import { useState } from "react";

const AdminPanel = () => {
  const [newdata, setNewdata] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const id = form.id.value;
    const email = form.email.value;
    const name = form.name.value;
    const serial = form.serial.value;

    const data = {
      uniName: "Jagannath University",
      degree: "BSc",
      major: "Computer Science and Engineering",
      uniStartYear: "2023",
      graduationDate: "2027",
      educationalBackground: "Science",
      clgPYear: null,
      name: name,
      serial: serial,
      clgName: null,
      schoolName: null,
      schoolPYear: null,
      toph: null,
      city: null,
      nickname: null,
      description: null,
      email: email,
      gender: null,
      birthdate: null,
      photo: null,
      skills: null,
      blood: null,
      address: null,
      height: null,
      weight: null,
      maritalStatus: null,
      spouseName: null,
      facebook: null,
      phone_number: null,
      instagram: null,
      linkedin: null,
      github: null,
      youtube: null,
      website: null,
      codeforces: null,
      codechef: null,
      leetcode: null,
      hackerrank: null,
      whatsapp: null,
      religion: null,
      id: id,
      hobbies: null,
    };

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
        fetch(
          "https://csejnu-server-production.up.railway.app/updateStudentData",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
          }
        );
        Swal.fire({
          title: "Added!",
          text: "Your data has been added.",
          icon: "success",
        });
      }
    });
    console.log(data);
    e.target.reset();
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   const form = e.target;
  //   const id = form.id.value;
  //   const email = form.email.value;
  // };

  return (
    <div>
      <h1 className="text-2xl text-center py-10">
        Admin Panel : Add Student Data
      </h1>
      <div className="mx-auto px-10 lg:w-2/3">
        <form onSubmit={handleSubmit} className="py-10 w-full ">
          <div className=" grid lg:grid-cols-2 gap-3">
            <div className="space-y-2 text-sm">
              <label>Name</label>
              <input
                name="name"
                className="w-full px-4 py-3 rounded-md border border-indigo-300 focus:outline-none"
              />
            </div>
            <div className="space-y-2 text-sm">
              <label>Serial</label>
              <input
                name="serial"
                className="w-full px-4 py-3 rounded-md border border-indigo-300 focus:outline-none"
              />
            </div>

            <div className="space-y-2 text-sm">
              <label>ID</label>
              <input
                name="id"
                className="w-full px-4 py-3 rounded-md border border-indigo-300 focus:outline-none"
              />
            </div>
            <div className="space-y-2 text-sm">
              <label>Email</label>
              <input
                name="email"
                className="w-full px-4 py-3 rounded-md border border-indigo-300 focus:outline-none"
              />
            </div>
          </div>
          <div className="mx-auto flex justify-center py-5">
            <button
              className="py-2 px-5 bg-blue-300 hover:bg-blue-400 rounded w-full "
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdminPanel;
