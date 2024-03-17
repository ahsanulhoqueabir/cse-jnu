import React, { useContext, useEffect, useState } from "react";
import Banner from "../../components/Banner";
import { authContext } from "../../context/AuthProvider";
import LoadingPage from "../Shared/LoadingPage";

const ClassRoutine = () => {
  const { loading } = useContext(authContext);
  const [loader, setLoader] = useState(true);
  const [routine, setRoutine] = useState({});
  const [isOpen, setIsOpen] = useState(null);
  const handleToggle = (idx) =>
    setIsOpen((prevIdx) => (prevIdx === idx ? null : idx));
  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/ahsanul-database/cse-jnu-serverr/main/classRoutine.json"
    )
      .then((res) => res.json())
      .then((data) => {
        setRoutine(data);
        setLoader(false);
      });
  }, []);
  const days = [];
  for (const day in routine) {
    days.push(day);
  }
  const courses = [];
  days.map((day) => {
    routine[day].routine.map((item) => {
      courses.push(item.room);
    });
  });
  console.log(new Set(courses));

  if (loading || loader) {
    return <LoadingPage />;
  }
  return (
    <div className="min-h-screen">
      <Banner>Class Routine</Banner>
      <section className="px-5 lg:px-24 py-10">
        {days?.map((data, idx) => (
          <div key={idx} className="mb-2">
            <div
              onClick={() => handleToggle(idx)}
              className={`px-4 md:px-8 py-6 bg-green-50 border-green-500 border-l-[3px] cursor-pointer`}
            >
              <div className="flex items-center">
                <span>
                  <svg
                    className={`mr-4 fill-green-900 shrink-0`}
                    width="16"
                    height="16"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      y="7"
                      width="16"
                      height="2"
                      rx="1"
                      className={`transform origin-center transition duration-200 ease-out ${
                        isOpen === idx && "!rotate-180"
                      }`}
                    />
                    <rect
                      y="7"
                      width="16"
                      height="2"
                      rx="1"
                      className={`transform origin-center rotate-90 transition duration-200 ease-out ${
                        isOpen === idx && "!rotate-180"
                      }`}
                    />
                  </svg>
                </span>
                <h4 className={`text-green-900 text-xl`}>
                  Class Routine of {routine[data].day}
                </h4>
              </div>
            </div>
            {/* body / content  */}
            <div
              className={`grid overflow-hidden transition-all duration-300 ease-in-out   ${
                isOpen === idx
                  ? "grid-rows-[1fr] opacity-100"
                  : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden ">
                <div
                  className={`grid lg:grid-cols-2 gap-4 pt-5 pb-6 pr-4 pl-4 lg:pl-14 md:pl-16 border-l-[3px] text-sm text-black bg-green-50 border-green-500 `}
                >
                  {routine[data].routine.map((item, idx) => (
                    <div
                      key={idx}
                      className=" bg-blue-100 p-5 py-2 space-y-2 rounded"
                    >
                      <p>
                        <b>Time</b> {item.time}
                      </p>
                      <p>
                        <b>Course: </b>
                        {item.course}
                      </p>
                      <p>
                        <b>Teacher: </b>
                        {item.teacher}
                      </p>
                      <p>
                        <b>Classroom: </b>
                        {item.room}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default ClassRoutine;
