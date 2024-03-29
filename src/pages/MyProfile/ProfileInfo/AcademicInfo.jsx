import React from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import EduTimeline from "../../../portfolio/EduTimeline";
import StudentIDCard from "../../StudentID/StudentIDCard";
import Headline from "../../../components/Headline";

const AcademicInfo = ({ studentData }) => {
  return (
    <div>
      <Headline>Academic Info</Headline>
      <Tabs>
        <TabList>
          <Tab>ID Card</Tab>
          <Tab>Timeline</Tab>
        </TabList>
        <TabPanel>
          <div className="flex justify-center">
            <StudentIDCard item={studentData}></StudentIDCard>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="lg:w-1/2 mx-auto">
            <EduTimeline academics={studentData}></EduTimeline>
          </div>{" "}
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default AcademicInfo;
