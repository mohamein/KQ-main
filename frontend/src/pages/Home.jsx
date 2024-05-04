import Cards from '@/components/Cards';
import Navbar from '@/components/Navbar';
import { Users, File } from 'lucide-react';

const Home = () => {
  return (
    <div className="flex gap-5 flex-col  w-full py-6">
      {/* navbar */}
      <Navbar title="Home" />

      <div className="flex flex-col px-4">
        <p className="text-sm font-light ">Welcome Back.</p>
        <h2 className="text-lg font-semibold text-accent-1">Mohamed Ismail</h2>
      </div>
      <div className="flex flex-col gap-20 px-4">
        <div className=" flex items-center justify-between gap-5">
          <Cards
            title="Users"
            Icon={
              <Users className="text-secondary-color text-2xl font-semibold" />
            }
            href="/users"
          />
          <Cards
            title="Documents"
            Icon={<File className="text-2xl font-semibold" />}
            href="/documents"
          />
        </div>

        <div>{/* charts */}</div>
      </div>
    </div>
  );
};

export default Home;
