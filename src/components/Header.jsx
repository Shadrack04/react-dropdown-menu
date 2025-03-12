import { useState } from "react";
import Logo from "./Logo";
import NavLinks from "./Navlinks";
import { HiOutlineMenuAlt2 } from "react-icons/hi";

export default function Header() {
  const [openNav, setOpenNav] = useState(false);
  return (
    <header className=" h-12 w-full p-8 flex items-center">
      <nav className=" w-full h-full flex items-center justify-between gap-10">
        <Logo />
        <NavLinks openNav={openNav} setOpenNav={setOpenNav} />
        <HiOutlineMenuAlt2
          onClick={() => setOpenNav(!openNav)}
          className=" z-30 md:hidden size-8"
        />
      </nav>
    </header>
  );
}
