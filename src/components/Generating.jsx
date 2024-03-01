import { loading } from "../assets";

const Generating = ({ className }) => {
  return (
    <div
      className={`flex items-center h-[3.5rem] px-6 bg-n-8/80 rounded-[1.7rem] ${
        className || ""
      } text-base`}
    >
      <img className="w-5 h-5 mr-4" src={loading} alt="Loading" />
      AI is generating
      
      <div className=" w-200 h-200 relative  rounded-full shadow-inner inset-0 0 14px 0 white inset-40px -30px 60px 0 purple inset-40px -30px 70px 0 blue inset-40px -30px 100px 0 cyan inset-40px -30px 140px 0 powderblue shadow-outer
       0 0 20px 0 white shadow-outer-2 10px 10px 20px 10px purple shadow-outer-3 -10px -10px 20px 0 cyan">
      <div className="absolute w-10 h-10  rounded-full 
       top-1/2 left-[-150px] transform origin-[calc(200px+50%)] rotate-[-30deg]  ">

      </div>
      <div className="absolute w-10 h-10  rounded-full top-100 left-275 shadow-white-10 shadow-cyan-15"></div>
      <div className="absolute w-10 h-10  rounded-full top-0 left-[-150px] shadow-white-10 shadow-red-20"></div>
      <div className="absolute w-10 h-10  rounded-full  top-300 left-250 shadow-white-10 shadow-magenta-20"></div>
      </div>
    </div>
    
  );
};

export default Generating;
