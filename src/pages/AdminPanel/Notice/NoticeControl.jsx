import React, { useContext } from "react";
import Banner from "../../../components/Banner";
import UpcomingNotice from "./Components/UpcomingNotice";
import { authContext } from "../../../context/AuthProvider";
import LoadingPage from "../../Shared/LoadingPage";

const NoticeControl = () => {
  const { loading } = useContext(authContext);
  if (loading) {
    return <LoadingPage />;
  }
  return (
    <div className="min-h-[calc(100vh-50px)]">
      <Banner>Add and Update Upcoming Notices</Banner>
      <section className="py-10 px-4 lg:px-24">
        <div role="tablist" className="tabs tabs-lifted">
          <input
            type="radio"
            name="my_tabs_2"
            role="tab"
            className="tab  [--tab-bg:#8CB9BD] [--tab-border-color:green]"
            aria-label="Upcoming Notices"
          />
          <div
            role="tabpanel"
            className="tab-content  bg-base-100 border-base-300 rounded-box p-6"
          >
            <UpcomingNotice />
          </div>

          <input
            type="radio"
            name="my_tabs_2"
            role="tab"
            className="tab [--tab-bg:#8CB9BD] [--tab-border-color:green]"
            aria-label="Add New Notice"
            checked
          />
          <div
            role="tabpanel"
            className="tab-content bg-base-100 border-base-300 rounded-box p-6"
          >
            Tab content 2
          </div>

          <input
            type="radio"
            name="my_tabs_2"
            role="tab"
            className="tab [--tab-bg:#8CB9BD] [--tab-border-color:green]"
            aria-label="Send Mail"
          />
          <div
            role="tabpanel"
            className="tab-content bg-base-100 border-base-300 rounded-box p-6"
          >
            Tab content 3
          </div>
        </div>
      </section>
    </div>
  );
};

export default NoticeControl;
