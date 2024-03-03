import React, { useContext, useEffect, useState } from "react";
import fields from "../../assets/fields.json";
import { authContext } from "../../context/AuthProvider";
import Banner from "../../components/Banner";
import Swal from "sweetalert2";
import LoadingPage from "../LoadingPage";
const UpdateInfo2 = () => {
  const { user } = useContext(authContext);
  const [loading, setLoading] = useState(true);
  const [studentData, setStudentData] = useState([]);
  const [userProfilePhoto, setUserProfilePhoto] = useState(null);
  const userMail = user?.email;
  useEffect(() => {
    fetch(
      `https://jnu-server-production.up.railway.app/userProfileDetails?email=${userMail}`
    )
      .then((res) => res.json())
      .then((data) => {
        setStudentData(data);
        setUserProfilePhoto(data.photo);
        setLoading(false);
      });
  }, [user]);
  const allfields = [];
  const typos = Object.keys(fields);
  const data = typos.map((t) => {
    return fields[t];
  });

  const allData = data?.map((d) => {
    d.map((f) => {
      allfields.push(f);
    });
  });

  // save changes using handlesubmit button --------------------
  const handleSubmit = (e) => {
    e.preventDefault();
    const apiURL = import.meta.env.VITE_APIKEY_IMGAGEUPLOAD_TOKEN;
    const img_hosting_url = `https://api.imgbb.com/1/upload?key=${apiURL}`;
    const form = e.target;
    const newData = {};
    for (let i = 0; i < form.length; i++) {
      if (form[i].name) {
        newData[form[i].name] = form[i].value;
      }
    }
    newData.photo = userProfilePhoto;
    const imgData = new FormData();
    const photoFile = form.photo.files[0];
    imgData.append("image", photoFile);
    if (photoFile) {
      fetch(img_hosting_url, {
        method: "POST",
        body: imgData,
      })
        .then((res) => res.json())
        .then((data) => {
          // console.log(data);
          if (data.success === true) {
            setUserProfilePhoto(data.data.display_url);
            newData.photo = data.data.display_url;
          }
        });
    }
    // console.log(photoFile);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Update it!",
    }).then((result) => {
      if (result.isConfirmed) {
        // hosting image to database

        //
        // console.log(imgData);

        fetch(
          `https://jnu-server-production.up.railway.app/UpdateMyData/${studentData._id}`,
          {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(newData),
          }
        );

        Swal.fire({
          title: "Updated!",
          text: "Your info has been updated.",
          icon: "success",
        });
      }
    });
  };
  const handleImageChange = (e) => {
    // setUserProfilePhoto();
  };
  if (loading) return <LoadingPage />;

  return (
    <div className="min-h-[calc(100vh-180px)]">
      <Banner>My Profile</Banner>
      <div className="mx-auto px-10 py-10 lg:w-2/3">
        <form onSubmit={handleSubmit}>
          <div className="grid lg:grid-cols-2 gap-3">
            {allfields.map((field) => {
              return field.type === "select" ? (
                <div
                  data-aos="zoom-in-up"
                  data-aos-delay="50"
                  data-aos-duration="1000"
                  data-aos-easing="ease-in-out"
                  className="space-y-2 "
                >
                  <label className="font-medium">{field.label}</label>
                  <select
                    name={field.name}
                    className="w-full bg-neutral py-2 px-4 focus:outline-none placeholder:text-black"
                  >
                    <option
                      defaultValue={studentData[field.name]}
                      selected
                      disabled
                      hidden
                    >
                      {studentData[field.name]
                        ? studentData[field.name]
                        : "Select an option"}
                    </option>
                    {Object.keys(field.options).map((option) => {
                      return (
                        <option className="bg-base-100" value={option}>
                          {field.options[option]}
                        </option>
                      );
                    })}
                  </select>
                </div>
              ) : field.type === "file" ? (
                <div
                  data-aos="zoom-in-up"
                  data-aos-delay="50"
                  data-aos-duration="1000"
                  data-aos-easing="ease-in-out"
                  className={`space-y-2 text-sm `}
                >
                  <label className=" font-medium">{field.label}</label>
                  <input
                    name={field.name}
                    type={field.type}
                    placeholder={field.label}
                    className={`w-full placeholder:text-black text-base-100 bg-neutral px-4 py-3 rounded-md border border-indigo-300 focus:outline-none ${
                      field.type === "textarea" && "min-h-24 col-span-2 p-2"
                    } `}
                  />
                  {/* <div>
                    {/* <img src={field.photo} alt="" /> */}
                  {/* </div> */}
                </div>
              ) : (
                <div
                  data-aos="zoom-in-up"
                  data-aos-delay="50"
                  data-aos-duration="1000"
                  data-aos-easing="ease-in-out"
                  className={`space-y-2 text-sm ${
                    field.type === "textarea" && "lg:col-span-2"
                  } ${field.name === "photo" && "relative"}`}
                >
                  <label className=" font-medium">{field.label}</label>
                  <input
                    name={field.name}
                    type={field.type}
                    placeholder={field.label}
                    defaultValue={studentData[field.name]}
                    className={`w-full placeholder:text-black text-base-100 bg-neutral px-4 py-3 rounded-md border border-indigo-300 focus:outline-none ${
                      field.type === "textarea" && "min-h-24 col-span-2 p-2"
                    } `}
                  />
                  {/* <div>
                    {/* <img src={field.photo} alt="" /> */}
                  {/* </div> */}
                </div>
              );
            })}
          </div>
          <div className="mx-auto flex justify-center py-5">
            <button
              className="py-2 px-5 bg-blue-300 hover:bg-blue-400 rounded w-full "
              type="submit"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateInfo2;
