//chart is a pain So had to use this external file
import Chart from "./chart";
import ChartMobile from "./chartMobile";
import React from "react";
export const ResChart = () => {
    
    const [width, setWidth] = React.useState(window.innerWidth);
    const breakpoint = 620;
  
    React.useEffect(() => {
  
      window.addEventListener("resize", () => setWidth(window.innerWidth));

    }, []);
  
    return width < breakpoint ? <ChartMobile /> : <Chart />;
  }