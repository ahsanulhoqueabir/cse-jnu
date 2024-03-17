import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Home from "./pages/Home/Home.jsx";
import Academic from "./Layout/Academic.jsx";
import Faculty from "./components/Faculty.jsx";
import AuthProvider from "./context/AuthProvider.jsx";
import Students from "./pages/StudentID/Students.jsx";
import Portfolio from "./Portfolio/Portfolio.jsx";
import ErrorPage from "./pages/Shared/ErrorPage.jsx";
import Routine from "./pages/Routine/Routine.jsx";
import StudentData from "./Layout/StudentData.jsx";
import StudentProfile from "./pages/StudentProfile/StudentProfile.jsx";
import Notes from "./pages/Notes.jsx";
import Tutorial from "./pages/Tutorial/Tutorial.jsx";
import TutorialX from "./pages/Tutorial/TutorialX.jsx";
import QuestionBank from "./pages/QuestionBank.jsx";
import TutorialNew from "./pages/Tutorial/TutorialNew.jsx";
import FeaturesLog from "./pages/FeaturesLog.jsx";
import Login from "./pages/Login.jsx";
import PrivateRoute from "./router/PrivateRoute.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AdminPanel from "./pages/AdminPanel/AdminPanel.jsx";
import LoadingPage from "./pages/Shared/LoadingPage.jsx";
import UserProfile from "./pages/MyProfile/ProfileDetails/UserProfile.jsx";
// import UpdateInfo from "./pages/UpdateInfo/UpdateInfo.jsx";
import AddNotes from "./pages/AddNote/AddNotes.jsx";
import Notices from "./pages/Notices.jsx";
import AddNotice from "./pages/AdminPanel/Notice/AddNotice.jsx";
import SendEmail from "./pages/AdminPanel/SendEmail.jsx";
import NotAuthorized from "./pages/Shared/NotAuthorized.jsx";
import AdminRoute from "./router/AdminRoute.jsx";
import UpdateInfo2 from "./pages/MyProfile/UpdateInfo/UpdateInfo2.jsx";
import NoticeControl from "./pages/AdminPanel/Notice/NoticeControl.jsx";
import UpcomingNotice from "./pages/AdminPanel/Notice/Components/UpcomingNotice.jsx";
import UpdateNotice from "./pages/AdminPanel/Notice/Components/UpdateNotice.jsx";
import ClassRoutine from "./pages/Routine/ClassRoutine.jsx";
const route = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "academic",
        element: <Academic />,
        children: [
          // {
          //   path: "routine",
          //   element: <Routine />,
          //   loader: () =>
          //     fetch(
          //       "https://raw.githubusercontent.com/ahsanul-database/fakeDB/main/routine1312.json"
          //     ),
          // },
          {
            path: "routine",
            element: <ClassRoutine />,
          },
          {
            path: "notes",
            element: (
              <PrivateRoute>
                <Notes />
              </PrivateRoute>
            ),
            loader: () =>
              fetch(
                "https://csejnu-server-production.up.railway.app/allNotesbybatch13"
              ),
          },
          {
            path: "tutorialX",
            element: (
              <PrivateRoute>
                <Tutorial />
              </PrivateRoute>
            ),
            loader: () =>
              fetch(
                "https://raw.githubusercontent.com/ahsanul-database/fakeDB/main/tutorials.json"
              ),
          },
          {
            path: "tutorial",
            element: (
              <PrivateRoute>
                <TutorialX />
              </PrivateRoute>
            ),
            loader: () =>
              fetch(
                "https://raw.githubusercontent.com/ahsanul-database/fakeDB/main/tutorials.json"
              ),
          },
          {
            path: "TutorialNew",
            element: <TutorialNew />,
            loader: () =>
              fetch(
                "https://raw.githubusercontent.com/ahsanul-database/fakeDB/main/tutorials.json"
              ),
          },
          {
            path: "questionbank",
            element: (
              <PrivateRoute>
                <QuestionBank />
              </PrivateRoute>
            ),
            loader: () =>
              fetch(
                "https://raw.githubusercontent.com/ahsanul-database/cse-jnu-serverr/main/QtbBank.json"
              ),
          },
        ],
      },
      {
        path: "students",
        element: <StudentData />,
        children: [
          {
            path: "profileCard",
            element: <StudentProfile />,
            loader: () =>
              fetch(
                "https://csejnu-server-production.up.railway.app/allDataofCSE13"
              ),
          },
          {
            path: "idCard",
            element: (
              <PrivateRoute>
                <Students />
              </PrivateRoute>
            ),
            loader: () =>
              fetch(
                "https://csejnu-server-production.up.railway.app/allDataofCSE13"
              ),
          },
        ],
      },
      {
        path: "students/profileCard/:id",
        element: <Portfolio />,
        loader: ({ params }) =>
          fetch(
            `https://csejnu-server-production.up.railway.app/allDataofCSE13/${params.id}`
          ),
      },
      {
        path: "faculty",
        element: <Faculty />,
      },
      {
        path: "details/profile",
        element: (
          <PrivateRoute>
            <UserProfile />
          </PrivateRoute>
        ),
      },
      {
        path: "/allnotices",
        element: <Notices />,
      },
      {
        path: "admin/ManageNotice",
        element: (
          <AdminRoute>
            {/* <AddNotice /> */}
            <NoticeControl />
          </AdminRoute>
        ),
        children: [
          {
            path: "",
            element: <UpcomingNotice />,
          },
          {
            path: "UpdateNotice/:id",
            element: <UpdateNotice />,
          },
          {
            path: "addNew",
            element: <AddNotice />,
          },
          {
            path: "SendMail",
            element: <SendEmail />,
          },
        ],
      },
      {
        path: "AddNote",
        element: (
          <PrivateRoute>
            <AddNotes />
          </PrivateRoute>
        ),
      },
      {
        path: "updateinfo",
        element: (
          <PrivateRoute>
            <UpdateInfo2 />
          </PrivateRoute>
        ),
      },
      {
        path: "mailinghhhhhhhhhhhhhhh",
        element: <SendEmail />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "*",
        element: <ErrorPage />,
      },
    ],
  },
  {
    path: "notauthorized",
    element: <NotAuthorized />,
  },
  {
    path: "/loadingpage",
    element: <LoadingPage />,
  },
  {
    path: "/features",
    element: <FeaturesLog />,
  },

  {
    path: "/adminpanel",
    element: <AdminPanel />,
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <ToastContainer />
      <RouterProvider router={route}></RouterProvider>
    </AuthProvider>
  </React.StrictMode>
);
