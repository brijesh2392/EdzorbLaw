
import { IoMdCloudDownload } from "react-icons/io";

const TestSeriesBox = ({image, Heading, L1, L2, L3, L4, L5 }) => {
  return (
    <>
      <div className=' border-2 border-gray-300 rounded-lg flex items-center justify-center h-[400px] md:h-[650px]    gap-5 my-10 mx-5 px-5 md:mx-5 shadow-xl hover:shadow-2xl '>
        <div className="border-2 border-gray-300 rounded-lg w-96" ><img src={image} alt="" /></div>
        <div className=" px-4 w-[600px]">
        <div ><h1 className=" text-lg md:text-4xl font-semibold">{Heading}</h1></div>
        <div className=" w-[200px] md:w-[600px]  text-gray-600 py-5 text-xs md:text-lg  ">
          <li>{L1}</li>
          <li>{L2}</li>
          <li>{L3}</li>
          <li>{L4}</li>
          <li>{L5}</li>
          
        </div>
        <div className=" border-2 border-blue-900 bg-blue-900 text-gray-100 rounded-xl text-lg md:text-xl  font-bold p-3 px-2 md:px-6 flex items-center gap-2 w-48 md:w-60"> Download Free <IoMdCloudDownload size={25} /> </div>
        </div>
      </div>
    </>
  );
};

export default TestSeriesBox;
