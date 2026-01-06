import { url } from "inspector";
import Image from "next/image";

 const StatsCard: React.FC<{ title: string; value: string; subtitle: string ;url:string}> = ({
  title,
  value,
  subtitle,
  url
}) => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6 flex items-start justify-between">
      <div>
        <h3 className="text-gray-600 text-sm mb-2">{title}</h3>
        <p className={`text-3xl font-bold text-[#F2482D] mb-1`}>{value}</p>
        <p className="text-gray-500 text-xs">{subtitle}</p>
      </div>
      <button className="w-8 h-8 flex items-center justify-center bg-[#497BC6] rounded text-white transition-colors">
        <Image
        src={url}
        alt="image"
        width={20}
        height={10}
        className="text-white"
        />
      </button>
    </div>
  );
};

export default StatsCard