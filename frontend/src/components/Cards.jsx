import { Link } from 'react-router-dom';

const Cards = ({ title, Icon, href }) => {
  return (
    <div className="w-full h-[170px] flex flex-col space-y-6 bg-white border border-[#ddd] rounded-md p-4">
      <div className="flex justify-between items-center border-b border-b-secondary-color pb-2">
        <h3 className="text-accent-1 font-medium text-base">
          Total of {title}
        </h3>
        {Icon}
      </div>

      <div>
        <h1 className="text-3xl font-semibold text-accent-1"> Total Length</h1>
        <Link to={href}>View All {title}</Link>
      </div>
    </div>
  );
};

export default Cards;
