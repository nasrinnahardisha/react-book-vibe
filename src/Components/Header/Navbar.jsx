import { Link, NavLink } from "react-router";
import logo from "../../assets/Book Vibe.svg";

const Navbar = () => {
  const links = (
    <>
      <>
        <NavLink
          to="/"
          className={({ isActive }) =>
            `m-1 md:m-4 md:px-[18px] text-center md:text-start md:py-3.5 px-3 py-2  transition text-[18px]  rounded-[14px] border-2 
          ${
            isActive
              ? "text-[#23BE0A] border border-[#23BE0A]"
              : "text-[#131313] border-transparent"
          }
          hover:text-[#23BE0A] hover:border hover:border-[#23BE0A]`
          }
        >
          Home
        </NavLink>

        <NavLink
          to="/listedBooks"
          className={({ isActive }) =>
            `m-1 md:m-4 md:px-[18px] text-center md:text-start md:py-3.5 px-3 py-2  transition text-[18px] border-2  rounded-[14px]
          ${
            isActive
              ? "text-[#23BE0A] border border-[#23BE0A]"
              : "text-[#131313] border-transparent"
          }
          hover:text-[#23BE0A] hover:border hover:border-[#23BE0A]`
          }
        >
          Listed Books
        </NavLink>

        <NavLink
          to="/pagesToReads"
          className={({ isActive }) =>
            `m-1 md:m-4 md:px-[18px] text-center md:text-start md:py-3.5 px-3 py-2   transition text-[18px] border-2 rounded-[14px]
          ${
            isActive
              ? "text-[#23BE0A] border border-[#23BE0A]"
              : "text-[#131313] border-transparent"
          }
          hover:text-[#23BE0A] hover:border hover:border-[#23BE0A]`
          }
        >
          Pages to Reads
        </NavLink>
      </>
    </>
  );

  return (
    <div>
      <div className="navbar">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>

            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
              <Link
                to="/login"
                className="sm:hidden
                    text-white text-center md:text-start font-semibold
                    bg-[#59C6D2]
                    px-6 md:px-[34px] py-2 md:py-4
                    rounded-lg
                    transition
                    hover:bg-[#23BE0A]
                    inline-block text-[18px]"
              >
                SignIn
              </Link>
            </ul>
          </div>
          <Link to="/" className="ml-4">
            <img src={logo} alt="" />
          </Link>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 flex items-center">
            {links}
          </ul>
        </div>

        <div className="navbar-end flex gap-4">
          <Link
            to="/login"
            className=" hidden
                  text-white font-semibold
                  bg-[#59C6D2]
                  px-[34px] py-4
                  rounded-lg
                  transition
                  hover:bg-[#23BE0A]
                  sm:inline-block
              "
          >
            SignIn
          </Link>

          <Link
            to="/signup"
            className="
				text-white font-semibold
				bg-[#59C6D2] px-6 
				sm:px-[35px] py-2 sm:py-4
				rounded-lg
				transition
				hover:bg-[#23BE0A]
				inline-block
    "
          >
            SignUp
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
