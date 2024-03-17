import React, { useContext } from "react";
import Banner from "../../../components/Banner";
import UpcomingNotice from "./Components/UpcomingNotice";
import { authContext } from "../../../context/AuthProvider";
import LoadingPage from "../../Shared/LoadingPage";
import { Link, Outlet } from "react-router-dom";

const NoticeControl = () => {
  const { loading } = useContext(authContext);
  if (loading) {
    return <LoadingPage />;
  }
  return (
    <div className="min-h-[calc(100vh-50px)]">
      <Banner>Add and Update Upcoming Notices</Banner>
      <section className="py-10 px-4 lg:px-24">
        <div className="flex gap-5 justify-center">
          <Link to={""}>
            <div className="border py-2 px-4 rounded text-sm lg:text-xl text-center cursor-pointer border-teal-500">
              Upcoming Notice
            </div>
          </Link>
          <Link to={"/admin/ManageNotice/addNew"}>
            <div className="border py-2 px-4 rounded text-sm lg:text-xl text-center cursor-pointer border-teal-500">
              Add New
            </div>
          </Link>
          <Link to={"/admin/ManageNotice/SendMail"}>
            <div className="border py-2 px-4 rounded text-sm lg:text-xl text-center cursor-pointer border-teal-500">
              Send Mail
            </div>
          </Link>
        </div>
        <Outlet />
      </section>
    </div>
  );
};

export default NoticeControl;
