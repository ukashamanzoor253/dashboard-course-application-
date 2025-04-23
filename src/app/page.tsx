"use client";
import * as React from "react";
import TopBanner from "./component/TopBanner";
import Header from "./component/Header";
import Breadcrumb from "./component/Breadcrumb";
import ProfileSummary from "./component/ProfileSummary";
import Sidebar from "./component/Sidebar";
import DashboardStats from "./component/DashboardStats";
import MyProfile from "./component/MyProfile";
import EnrolledCourses from "./component/EnrolledCourses";
import Footer from "./component/Footer";
import AddUser from "./component/AddUser";
import ViewUser from "./component/ViewUser";
import Setting from "./component/Setting";
import CourseHistory from "./component/CourseHistory";

function StudentDashboard() {
  const [activeItem, setActiveItem] = React.useState("dashboard");

  const renderComponent = () => {
    switch (activeItem) {
      case "dashboard":
        return <DashboardStats />;
      case "profile":
        return <MyProfile />;
      case "courses":
        return <EnrolledCourses />;
      case "addUser":
        return <AddUser />;
      case "viewUsers":
        return <ViewUser />;
      case "history":
        return <CourseHistory />;
      case "settings":
        return <Setting />;
      default:
        return <DashboardStats />;
    }
  };

  return (
    <main className="flex flex-col bg-neutral-100 min-h-screen">
      <TopBanner />
      <Header />

      <section className="flex flex-col self-center mt-5 w-full max-w-[1326px] max-md:max-w-full">
        <Breadcrumb />

        <article className="flex flex-col pt-6 mt-6 w-full bg-white rounded-3xl max-md:mt-4 max-md:max-w-full">
          <ProfileSummary />

          <hr className="shrink-0 mt-6 h-px border-b border-slate-200 max-md:max-w-full" />

          <div className="flex flex-col md:flex-row gap-6 p-6">
            <div className="w-full md:w-64 shrink-0">
              <Sidebar activeItem={activeItem} onItemClick={setActiveItem} />
            </div>

            <div className="hidden md:block w-px bg-slate-200 mx-2" />

            <div className="flex-1 overflow-auto">{renderComponent()}</div>
          </div>
        </article>
      </section>

      <Footer />
    </main>
  );
}

export default StudentDashboard;
