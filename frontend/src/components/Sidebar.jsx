import { NavLink } from 'react-router-dom';
import { Home, UserCircle, Users, File } from 'lucide-react';
const Sidebar = () => {
  return (
    <div className="w-64 bg-primary-color h-full py-6 px-4 ">
      <div className="flex flex-col space-y-6">
        <div className="border-b border-white py-2">
          <h2 className=" text-white text-2xl font-semibold">LOGO</h2>
        </div>

        {/* side menu */}
        <nav>
          <ul className="flex flex-col mt-2 space-y-10">
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? 'flex gap-2 items-center bg-secondary-color py-2 px-4 rounded-md text-white transition-all duration-500'
                  : 'text-white font-semibold flex gap-2 items-center'
              }
              to="/"
            >
              <Home />
              Dashboard
            </NavLink>

            <NavLink
              className={({ isActive }) =>
                isActive
                  ? 'flex gap-2 items-center bg-secondary-color py-2 px-4 rounded-md text-white transition-all duration-500'
                  : 'flex gap-2 items-center text-white font-semibold'
              }
              to="/documents"
            >
              <File />
              Documents
            </NavLink>

            <NavLink
              className={({ isActive }) =>
                isActive
                  ? 'flex gap-2 items-center bg-secondary-color py-2 px-4 rounded-md text-white transition-all duration-300'
                  : 'text-white flex items-center gap-2'
              }
              to="/users"
            >
              <Users />
              Users
            </NavLink>

            <NavLink
              className={({ isActive }) =>
                isActive
                  ? 'flex gap-2 items-center bg-secondary-color py-2 px-8 rounded-md text-white transition duration-300'
                  : 'text-white flex gap-2 items-center'
              }
              to="/profile"
            >
              <UserCircle />
              Profile
            </NavLink>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
