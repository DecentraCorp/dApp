//chart is a pain So had to use this external file
import Chart from "./chart";
import ChartMobile from "./chartMobile";
import React from "react";
import ChartTablet from "./chartTablet";
export const ResChart = () => {
    
    const [width, setWidth] = React.useState(window.innerWidth);
    const breakpointBig = 945;
    const breakpointLittle = 720;

    React.useEffect(() => {
  
      window.addEventListener("resize", () => setWidth(window.innerWidth));

    }, []);
  //return width <  breakpointBig ? <ChartMobile /> : <Chart />;
          

    if(width > breakpointLittle){

    return width > breakpointBig ? <Chart/> : <ChartTablet />
    }
    else {
      return <ChartMobile />
    } 
  }