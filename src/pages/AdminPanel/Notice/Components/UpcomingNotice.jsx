import React, { useContext, useState } from "react";
import Banner from "../../../../components/Banner";
import { authContext } from "../../../../context/AuthProvider";
import Headline from "../../../../components/Headline";
import { FaTrash } from "react-icons/fa6";
import { FaRegEdit } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const UpcomingNotice = () => {
  const { upcomingNotices } = useContext(authContext);
  const [notices, setnotices] = useState(upcomingNotices && upcomingNotices);
  const navigate = useNavigate();
  const handleDelete = (id) => {
    const newNotice = upcomingNotices.filter((notice) => notice._id !== id);
    setnotices(newNotice);
    const url = `https://csejnu-server-production.up.railway.app/removeNotice/${id}`;
    fetch(url, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        toast("Deleted Successfully");
      });
  };
  const handleEdit = (id) => {
    navigate(`/admin/ManageNotice/UpdateNotice/${id}`);
  };
  return (
    <div className="w-full">
      <Headline>Upcoming Notices</Headline>
      <section>
        {notices.length > 0 ? (
          <div className=" ">
            <table className="table table-xs lg:table-lg">
              <thead>
                <tr>
                  <th>Action</th>
                  <th>Title</th>
                  <th>Description </th>
                  <th>Date </th>
                  <th>Time</th>
                </tr>
              </thead>
              <tbody>
                {notices.map((notice) => (
                  <tr key={notice._id}>
                    <td className="flex flex-col gap-2 items-center ">
                      <button
                        onClick={() => handleEdit(notice._id)}
                        className=" "
                      >
                        <FaRegEdit />
                      </button>
                      <button
                        onClick={() => handleDelete(notice._id)}
                        className=""
                      >
                        <FaTrash className="text-red-700" />
                      </button>
                    </td>
                    <td className=" text-wrap">{notice.title}</td>
                    <td className=" text-wrap">{notice.description}</td>
                    <td className=" text-nowrap">{notice.date}</td>
                    <td className="text-nowrap ">{notice.time}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <h1 className="text-xl lg:text-5xl text-center">
            No Upcoming Notice Available
          </h1>
        )}
      </section>
    </div>
  );
};

export default UpcomingNotice;
