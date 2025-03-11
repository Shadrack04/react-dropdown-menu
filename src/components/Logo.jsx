import logo from "/images/logo.svg";

export default function Logo() {
  return (
    <div className=" flex-3/4 md:flex-initial mt-1 h-full flex items-center">
      <img src={logo} alt="Logo icon" />
    </div>
  );
}
