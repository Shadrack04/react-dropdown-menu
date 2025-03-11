import Logo from "./Logo";
import NavLinks from "./Navlinks";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
export default function Header() {
  return (
    <header className=" h-12 w-full p-8 flex items-center">
      <nav className=" w-full h-full flex items-center justify-between gap-10">
        <Logo />
        <NavLinks />
        <HiOutlineMenuAlt2 className=" z-30 md:hidden size-10" />
      </nav>
    </header>
  );
}
