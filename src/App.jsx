import { useEffect, useState } from "react";
import countriesData from "./data";
import { data } from "autoprefixer";
function App() {
  const [searchValue, setSearchValue] = useState("")
  const [filteredData, setFilteredData] = useState([])
   console.log((countriesData))
  const onChange = (event) => {
    setSearchValue(event.target.value)
  }
  useEffect(() => {
    if (searchValue === "") {
      setFilteredData([]); 
    } else {
 
      const filtered = countriesData.filter((country) =>
        country.toLowerCase().includes(searchValue.toLowerCase()) 
      );
      setFilteredData(filtered); 
    }
  }, [searchValue]); 
  return (
    <>
      <div className="w-[800px] h-[1200px] relative bg-gray-100 rounded-tr-[50px] flex-col justify-start items-start inline-flex overflow-hidden">
        <div className="w-[1740px] h-[1740px] relative">
          <div className="w-[267px] h-15 px-6 py-4 bg-white rounded-[12px] shadow-[0px_12px_24px_0px_rgba(0,0,0,0.06)] justify-start items-center gap-4 inline-flex relative top-[40px] left-[40px]">
            <input
              className="w-[267px] h-[40px] px-6 py-4 bg-white rounded-[48px] shadow-[0px_12px_24px_0px_rgba(0,0,0,0.06)] justify-start items-center gap-4 inline-flex overflow-hidden"
              value={searchValue} onChange={onChange}
            />
             {filteredData.length > 0 && (
              <div>
                {filteredData.map((el ,index) => (
                  <p key={index}>{el}</p> 
                ))}
              </div>
            )}
          </div>
          <div className="w-[340px] h-[340px]  left-[630px] top-[430px] absolute opacity-10 rounded-full border border-gray-900" />
          <div className="w-[540px] h-[540px] left-[530px] top-[330px] absolute opacity-10 rounded-full border border-gray-900" />
          <div className="w-[940px] h-[940px] left-[330px] top-[130px] absolute opacity-5 rounded-full border border-gray-900" />
          <div className="w-[1340px] h-[1340px] left-[130px] top-[-70px] absolute opacity-5 rounded-full border border-gray-900" />
          <div className="w-[1740px] h-[1740px]  left-[-70px] top-[-270px] absolute opacity-5 rounded-full border border-gray-900" />
          <div className="w-44 h-44 relative">
            <div className="w-44 h-44 left-[130px] top-[177px] absolute rounded-full bg-[#FF8E27]" />
            <div className="w-[414px] h-[828px] left-[193px] top-[230px] absolute relative bg-white/75 rounded-[48px]  overflow-hidden">
              <div className="w-[398px] h-[504px] left-[8px] top-[8px] absolute relative bg-gradient-to-b from-gray-50 to-gray-50 rounded-[42px]">
                <div className="w-8 h-8 absolute relative  overflow-hidden top-[93px] left-[334px]">
                  <div className="w-1 h-1 left-[14px] top-[11px] absolute rounded-full border-2 border-gray-600" />
                  {/*  */}
                </div>
                <div className="h-[91px] flex-col justify-start items-start inline-flex relative top-[64px] left-[48px]">
                  <div className="text-gray-500 text-lg font-medium font-['Manrope']">
                    September 10, 2021
                  </div>

                  <div className="text-gray-900 text-5xl font-extrabold font-['Manrope']">
                    Kraków
                  </div>
                  <div className="w-[274.09px] h-[274.09px] relative">
                    <img
                      className="w-[262.11px] h-[262.11px] left-[11.98px] top-[11.98px] absolute opacity-50 blur-[47.93px]"
                      src="https://pinecone-academy-weather-app.vercel.app/_next/image?url=%2Fsun.png&w=640&q=75"
                    />
                    <img
                      className="w-[262.11px] h-[262.11px] left-0 top-0 absolute"
                      src="https://pinecone-academy-weather-app.vercel.app/_next/image?url=%2Fsun.png&w=640&q=75"
                    />
                  </div>
                  <div className="h-[230px] flex-col justify-start items-start inline-flex relative top-[278px] left-[48px]">
                    <div className="text-gray-900 text-[144px] font-extrabold bg-gradient-to-b from-[#111827] to-[#6B7280] bg-clip-text text-transparent font-black font-['Manrope Fallback'] ">
                      26˚
                    </div>
                    <div className="text-[#fe8e26] text-2xl font-extrabold font-['Manrope]">
                      Bright
                    </div>
                  </div>
                
                </div>
                <div className="w-[318px] h-8 justify-between items-end inline-flex relative top-[626px] left-[48px]">
                    <div className="w-8 h-8 relative  overflow-hidden">
                      <img src="./Home.png" />
                    </div>
                    <div className="w-8 h-8 relative  overflow-hidden">
                      <div className="w-1 h-1 left-[14px] top-[11px] absolute rounded-full border-2 border-gray-300"></div>
                      <img src="./Pin.png" />
                    </div>
                    <div className="w-8 h-8 relative  overflow-hidden">
                      <img src="Heart.png" />
                    </div>
                    <div className="w-8 h-8 relative  overflow-hidden">
                      <div className="w-3.5 h-3.5 left-[9px] top-[2px] absolute rounded-full border-2 border-gray-300" />
                      <img src="User.png" />
                    </div>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
