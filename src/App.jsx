import { useEffect, useState } from "react";
import { getAllCities } from "./utils/get-All-Cities";
import CircleLeft from "./componets/Circle-left";
import CircleRight from "./componets/circle-rigth";
import leftAllDAta from "./componets/Left-all-datas";
import RigthAllDatas from "./componets/Right-all-datas";
function App() {
  const [searchValue, setSearchValue] = useState("");
  const [allCities, setAllCities] = useState([]);
  const [selectedCity, setSelectedCity] = useState("Ulaanbaatar, Mongolia");
  const [filteredData, setFilteredData] = useState([]);
  const [allData, setAllData] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const getCountries = async () => {
    try {
      const response = await fetch(
        "https://countriesnow.space/api/v0.1/countries"
      );

      const result = await response.json();

      const countries = result.data;
      const cities = getAllCities(countries);
      setAllCities(cities);
    } catch (error) {
      console.log(error);
    }
  };

  const onChange = (event) => {
    console.log(event.target.value);
    setSearchValue(event.target.value);
    const filtered = allCities
      .filter((el) => el.toLowerCase().startsWith(searchValue.toLowerCase()))
      .slice(0, 4);
    setFilteredData(filtered);
  };
  useEffect(() => {
    getCountries();
  }, []);
  useEffect(() => {
    getAllData();
  }, [selectedCity]);
  const handleClickCity = (city) => {
    setSelectedCity(city);
  };
  const weatherApiKey = "90f6cecb21c349f489891237251501";

  const getAllData = async () => {
    try {
      setIsLoading(true);

      const response = await fetch(
        `https://api.weatherapi.com/v1/forecast.json?key=${weatherApiKey}&q=${selectedCity}`
      );
      const result = await response.json();

      const temp = {
        temp: result.forecast.forecastday[0].day.maxtemp_c,
        text: result.forecast.forecastday[0].day.condition.text,
        tempn: result.forecast.forecastday[0].day.mintemp_c,
        time: result.forecast.forecastday[0].date,
      };
      console.log(result);
      setAllData(temp);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };
  const icons = {
    clouds: "Clouds.webp",
    cloudsmoon: "Cloudsmoon.webp",
    moon: "moon.webp",
    sun: "sun.webp",
    rain: "Rain.webp",
    rainMoon: "Rainmoon.webp",
    snow: "Snow.webp",
    swnowTunderMoon: "snowTunder.moon.webp",
    wind: "Wind.webp",
    Wind: "WindMoon.webp",
  };

  console.log(isLoading);
  return (
    <>
      <div className="flex justify-center item-center relative top-[120px]">
        <div className="w-[800px] h-[1200px] relative absolute bg-gray-100 rounded-tl-[50px] rounded-bl-[50px] flex-col justify-start items-start inline-flex overflow-hidden">
          <div className="w-[1740px] h-[1740px] relative">
            <div className="w-[327px] h-15 px-6 py-4 rounded-[12px]justify-center items-center gap-4  absolute z-10 top-[40px]">
              {isLoading || (
                <div>
                  <input
                    className="w-[267px] h-[50px] px-[60px] py-4 bg-white rounded-[48px] shadow-[0px_12px_24px_0px_rgba(0,0,0,0.06)] justify-start items-center gap-4 inline-flex overflow-hidden mb-[15px] bg-[url(search.webp)] bg-no-repeat ]"
                    value={searchValue}
                    onChange={onChange}
                    placeholder="Search"
                  />
                  {filteredData.length > 0 && searchValue.length > 0 && (
                    <div className="w-[267px] h-fit bg-white p-[20px] rounded-[12px] ">
                      {filteredData.map((el, index) => (
                        <p
                          className="p-[10px] flex"
                          key={index}
                          onClick={() => handleClickCity(el)}
                        >
                          <img
                            src="localization_icon.webp"
                            className="mr-[19px] h-[32px]"
                          />
                          {el}
                        </p>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
            <CircleLeft />
            <div className="w-44 h-44 relative">
              {isLoading || (
                <img
                  src="sun-little.webp"
                  className="w-44 h-44 left-[130px] top-[177px] absolute rounded-full "
                />
              )}
              {isLoading ? (
                <div className="w-[414px] h-[828px] left-[193px] top-[230px] absolute relative">
                  <div
                    className="relative top-[46%] left-[80%] animate-spin inline-block size-6 border-[3px] border-current border-t-transparent text-blue-600 rounded-full"
                    role="status"
                    aria-label="loading"
                  ></div>
                </div>
              ) : (
                <div className="w-[414px] h-[828px] left-[193px] top-[230px] absolute relative shadow-lg bg-white/75 backdrop-blur-[10px] rounded-[48px]  overflow-hidden">
                <div className="w-[398px] h-[504px] left-[8px] top-[8px] absolute relative   rounded-[42px]">
                  <div className="w-8 h-8 absolute relative  overflow-hidden top-[93px] left-[334px]">
                    <img src="localization_icon.webp" />
                  </div>
                  <div className="h-[91px] flex-col justify-start items-start inline-flex relative top-[64px] left-[48px]">
                    <div className="text-gray-500 text-lg font-medium font-['Manrope Fallback']  ">
                      {allData.time}
                    </div>
        
                    <div className="text-gray-900 text-5xl font-extrabold font-['Manrope']w-[174px] whitespace-pre-line">
                      {selectedCity}
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
                    <div className="h-[230px] flex-col justify-start items-start inline-flex relative top-[278px] left-[18px]">
                      <div className="text-gray-900 text-[124px] font-extrabold bg-gradient-to-b from-[#111827] to-[#6B7280] bg-clip-text text-transparent font-black font-['Manrope Fallback'] ">
                        {allData.temp}˚
                      </div>
                      <div className="text-[#fe8e26] text-2xl font-extrabold font-['Manrope Fallback']">
                        {allData.text}
                      </div>
                    </div>
                  </div>
                  <div className="w-[318px] h-8 justify-between items-end inline-flex relative top-[626px] left-[48px]">
                    <div className="w-8 h-8 relative  overflow-hidden">
                      <img src="./Home.webp" />
                    </div>
                    <div className="w-8 h-8 relative  overflow-hidden">
                      <div className="w-1 h-1 left-[14px] top-[11px] absolute rounded-full border-2 border-gray-300"></div>
                      <img src="./Pin.webp" />
                    </div>
                    <div className="w-8 h-8 relative  overflow-hidden">
                      <img src="Heart.webp" />
                    </div>
                    <div className="w-8 h-8 relative  overflow-hidden">
                      <div className="w-3.5 h-3.5 left-[9px] top-[2px] absolute rounded-full border-2 border-gray-300" />
                      <img src="User.webp" />
                    </div>
                  </div>
                </div>
              </div>
              )}
            </div>
          </div>
        </div>

        {/* right */}

        <div className="w-[800px] h-[1200px] relative flex-col rounded-tr-[50px] rounded-br-[50px] justify-start items-start inline-flex overflow-hidden bg-[#0F141E]">
          <div className="w-[1740px] h-[1740px] relative">
            {/* circle */}
            <CircleRight />
            {isLoading || (
              <img
                className="w-32 h-32  absolute rounded-full  top-[968px] left-[527px]"
                src="Ellipse22.webp"
              />
            )}
            {isLoading ? (
              <div className="w-[414px] h-[828px] left-[193px] top-[230px] absolute relative">
                {" "}
                <div
                  className="relative top-[45%] left-[15%] animate-spin inline-block size-6 border-[3px] border-current border-t-transparent text-blue-600 rounded-full"
                  role="status"
                  aria-label="loading"
                ></div>
              </div>
            ) : (
              <div className="w-[414px] h-[828px] left-[193px] top-[216px] absolute relative  shadow-lg bg-[#111827]/75 backdrop-blur-md rounded-[48px]  overflow-hidden ">
              <div className="w-[398px] h-[504px] left-[8px] top-[8px] absolute relative bg-gradient-to-b from-gray-800 to-gray-900  rounded-[42px]">
                <div className="w-8 h-8 absolute relative  overflow-hidden top-[93px] left-[334px]">
                  <img src="localization_icon.webp" />
                </div>
                <div className="h-[91px] flex-col justify-start items-start inline-flex relative top-[64px] left-[48px]">
                  <div className="text-[#9CA3AF] text-lg font-medium font-['Manrope Fallback']  ">
                    {allData.time}
                  </div>

                  <div className="text-[#FFFFFF] text-5xl font-extrabold font-['Manrope Fallback'] w-[174px] whitespace-pre-line">
                    {selectedCity}
                  </div>
                  <div className="w-[274.09px] h-[274.09px] relative">
                    <img
                      class="w-[264.89px] h-[264.89px] opacity-30 blur-[84.77px]"
                      src="https://pinecone-academy-weather-app.vercel.app/_next/image?url=%2Fmoon.webp&w=640&q=75"
                    />
                    <img
                      className="w-[262.11px] h-[262.11px] left-0 top-0 absolute"
                      src="moon.webp"
                    />
                  </div>
                  <div className="h-[230px] flex-col justify-start items-start inline-flex relative left-[18px]">
                    <div className="text-gray-900 text-[114px] font-extrabold bg-gradient-to-b from-[#F9FAFB] to-[#F9FAFB00] bg-clip-text text-transparent font-black font-['Manrope Fallback'] ">
                      {allData.tempn}˚
                    </div>
                    <div className="text-[#777CCE] text-2xl font-extrabold font-['Manrope]">
                      {allData.text}
                    </div>
                  </div>
                </div>

                <div className="w-[318px] h-8 justify-between items-end inline-flex relative top-[626px] left-[48px]">
                  <div className="w-8 h-8 relative  overflow-hidden">
                    <img src="./Home.webp" />
                  </div>
                  <div className="w-8 h-8 relative  overflow-hidden">
                    <div className="w-1 h-1 left-[14px] top-[11px] absolute rounded-full border-2 border-gray-300"></div>
                    <img src="./Pin.webp" />
                  </div>
                  <div className="w-8 h-8 relative  overflow-hidden">
                    <img src="Heart.webp" />
                  </div>
                  <div className="w-8 h-8 relative  overflow-hidden">
                    <div className="w-3.5 h-3.5 left-[9px] top-[2px] absolute rounded-full border-2 border-gray-300" />
                    <img src="User.webp" />
                  </div>
                </div>
              </div>
            </div>
            )}
          </div>
        </div>
        <div className=" w-[140px] h-[140px] relative z-10 top-[530px] left-[-870px] rounded-full bg-[#f3f4f6] flex justify-center item-center gap-[30px] border-gray-200 border-2 relative">
          <img
            src="Group4.webp"
            className="h-[86px] w-[43.29px] relative  left-[9px] top-[24px]"
          />
          <img
            src="Vector.webp"
            className="h-[86px] w-[43.29px] relative    top-[24px]"
          />
        </div>
        <RigthAllDatas/>
      </div>
    </>
  );
}

export default App;

