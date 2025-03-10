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
    <div className="hidden md:flex items-center justify-between w-full">
      <ul className=" flex items-center gap-4">
        <li className="flex items-center gap-1 relative">
          <a href="#">Features</a>
          <IoIosArrowDown />
          <ul className="absolute flex flex-col gap-2 top-6 -left-8 rounded-md bg-white shadow-xl px-2 py-2">
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
        <li className=" flex items-center gap-1 relative">
          <a href="#">Company</a>
          <IoIosArrowDown />
          <ul className="absolute top-6 rounded-md bg-white shadow-xl p-2">
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
      <div className=" flex items-center gap-4">
        <button className=" py-2 px-4 rounded-2xl box-border ">Login</button>
        <Button border="border">Register</Button>
      </div>
    </div>
  );
}
