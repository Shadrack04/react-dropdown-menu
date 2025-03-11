import Button from "./Button";
import { IoIosArrowDown } from "react-icons/io";
// import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDropup } from "react-icons/io";

import todoIcon from "/images/icon-todo.svg";
import calenderIcon from "/images/icon-calendar.svg";
import planningIcon from "/images/icon-planning.svg";
import reminderIcon from "/images/icon-reminders.svg";

export default function NavLinks() {
  return (
    <div className=" md:static md:flex md:items-center md:justify-between w-full">
      <div className="md:hidden fixed inset-0 bg-black/70"></div>
      <div className=" pt-16 md:pt-0 absolute md:static top-0 right-0 bg-white md:bg-transparent h-screen md:h-auto md:flex md:items-center justify-between w-3/5 md:w-full z-20">
        <ul className=" p-6 md:p-0 flex flex-col md:flex-row items-start md:items-center gap-4">
          <li className=" w-full flex flex-col md:items-center gap-1 relative">
            <div className=" flex items-center gap-1">
              <a href="#">Features</a>
              <IoIosArrowDown />
            </div>
            <ul className=" md:absolute flex flex-col gap-2 top-6 md:-left-8 rounded-md bg-white md:shadow-xl px-2 py-2">
              <li className=" flex items-center gap-1 mx-1 text-sm w-full">
                <img src={todoIcon} alt="todo icon" />
                <a href="#">Todo List</a>
              </li>
              <li className=" flex items-center gap-1 mx-1 text-sm w-full">
                <img src={calenderIcon} alt="calender icon" />
                <a href="#">Calender</a>
              </li>
              <li className=" flex items-center gap-1 mx-1 text-sm w-full">
                <img src={reminderIcon} alt="reminders icon" />
                <a href="#">Reminder</a>
              </li>
              <li className=" flex items-center gap-1 mx-1 text-sm w-full">
                <img src={planningIcon} alt="planning icon" />
                <a href="#">Planning</a>
              </li>
            </ul>
          </li>
          <li className=" flex flex-col md:items-center gap-1 relative">
            <div className=" flex items-center gap-1">
              <a href="#">Company</a>
              <IoIosArrowDown />
            </div>
            <ul className=" md:absolute flex flex-col gap-1 top-6 rounded-md bg-white md:shadow-xl p-2">
              <li className=" mx-1 text-sm w-full">
                <a href="#">History</a>
              </li>
              <li className=" mx-1 text-sm w-full">
                <a className="" href="#">
                  Our Team
                </a>
              </li>
              <li className=" mx-1 text-sm w-full">
                <a href="#">Blog</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#">Careers</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
        </ul>
        <div className=" flex flex-col md:flex-row items-center gap-4">
          {/* <button className=" py-2 px-4 rounded-2xl box-border ">Login</button> */}
          <Button>Login</Button>
          <Button border="2px solid black" width={90}>
            Register
          </Button>
        </div>
      </div>
    </div>
  );
}
