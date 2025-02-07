import { NavLink } from "react-router";

const NavBar = () => {
  const link = (
    <>
      <NavLink to="/" onClick={(e) => {
        e.preventDefault();
        document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
      }} className="px-3 py-2 hover:text-[#143D60]">About Me</NavLink>

      <NavLink to="/" onClick={(e) => {
        e.preventDefault();
        document.getElementById("skill")?.scrollIntoView({ behavior: "smooth" });
      }} className="px-3 py-2 hover:text-[#143D60]">Skills</NavLink>

      <NavLink to="/" onClick={(e) => {
        e.preventDefault();
        document.getElementById("edu")?.scrollIntoView({ behavior: "smooth" });
      }} className="px-3 py-2 hover:text-[#143D60]">Educational Qualification</NavLink>

      <NavLink to="/" onClick={(e) => {
        e.preventDefault();
        document.getElementById("project")?.scrollIntoView({ behavior: "smooth" });
      }} className="px-3 py-2 hover:text-[#143D60]">Projects</NavLink>

      <NavLink to="/contact" className="px-3 py-2 hover:text-[#143D60]">Connect with Me</NavLink>
    </>
  );

  return (
    <div className="w-full fixed top-0 left-0 z-50">
      <nav className="w-full bg-gradient-to-r from-[#263441] to-[#263441] shadow-md">
        <div className="navbar flex justify-between items-center px-5 py-4">
          <NavLink to="/" className="text-xl text-white font-bold">
            Keya's Portfolio
          </NavLink>
          <div className="-ml-20 ">
            <div className="dropdown">
              <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
              </div>
              <ul
                tabIndex={0}
                class="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow text-left">
                {link}
              </ul>
            </div>
          </div>
          <div className="hidden lg:flex">
            <ul className="flex space-x-6 text-white text-lg">
              {link}
            </ul>
          </div>
          <NavLink to="/contact" className="btn bg-white text-[#143D60] border-[#143D60] hover:bg-[#143D60] hover:text-white">
            Contact Me
          </NavLink>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
