import cloudy from "@assets/icons/cloudy.svg";
import rain from "@assets/icons/rain.svg";
import storm from "@assets/icons/storm.svg";

interface Props {
  time: string;
  icon: "cloudy" | "rain" | "storm";
  temp: number;
}

const WeatherItem = ({ icon, temp, time }: Props) => {
  const iconWeather = {
    cloudy: <img src={cloudy} alt="cloudy" width={24} />,
    rain: <img src={rain} alt="rain" width={24} />,
    storm: <img src={storm} alt="storm" width={24} />,
  };

  return (
    <div
      style={{
        color: "white",
        fontSize: "0.7rem",
        fontFamily: "Prompt-Light",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <p>{time}</p>
      {icon && iconWeather[icon]}
      <p>{`${temp} ํ`}</p>
    </div>
  );
};

export default WeatherItem;
