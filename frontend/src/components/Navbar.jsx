import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Search } from 'lucide-react';
const Navbar = ({ title }) => {
  return (
    <div className="flex justify-between w-full px-4">
      <h2 className="font-semibold text-accent-1 text-xl">{title}</h2>
      <div className="flex gap-2">
        <form>
          <div className="w-[300px] relative border border-[#c8c8c8] rounded-md">
            <Search className="absolute top-[8px] left-[2px]  mr-3 text-[#ccc]" />
            <input
              type="text"
              placeholder="Search..."
              className="w-full py-2 px-6 rounded-md bg-transparent text-accent-1 text-[15px] focus:outline-none ml-2"
            />
          </div>
        </form>

        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
};

export default Navbar;
