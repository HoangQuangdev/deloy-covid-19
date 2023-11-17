import {useState} from "react";
import { registerables, Chart as CChart } from "chart.js";
import { Bar } from "react-chartjs-2";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { Box, Button, ButtonGroup, Paper, Typography } from "@mui/material";

CChart.register(...registerables);
CChart.register(ChartDataLabels);

interface chart {
  date: string;
  death: number;
  treating: number;
  cases: number;
  recovered: number;
  avgCases7day: number;
  avgRecovered7day: number;
  avgDeath7day: number;
  [key: string]: string | number;
}

const Chart = ({ chart }: { chart: chart[] }) => {
  const [type, setType] = useState("avgCases7day")
  const data = {
    labels: chart?.map((entry) => entry.date),
    datasets: [
      {
        label: "Số ca",
        backgroundColor: "rgba(0,170,81,0.2)",
        borderColor: "rgba(0,170,81,1)",
        borderWidth: 1,
        hoverBackgroundColor: "rgba(0,170,81,0.4)",
        hoverBorderColor: "rgba(0,170,81,1)",
        data: chart?.map((entry) => entry[type]),
      },
    ],
  };

  // const options = {
  //   legend: { display: true },
  //   title: {
  //     display: true,
  //     // text: "Predicted world population (millions) in 2050"
  //   },
  //   scales: {
  //     y: {
  //       beginAtZero: true,
  //     },
  //   },
  //   responsive: true,
  //   plugins: {
  //     datalabels: {
  //       align: "start", // Adjust this value based on your preference
  //     },
  //   },
  // };
  

  return (
    <Paper sx={{ p: 2, height: "100%" }}>
      <Box
        display={"flex"}
        flexDirection={"row"}
        justifyContent={"space-between"}>
        <ButtonGroup variant="outlined" aria-label="outlined button group" size="small">
          <Button
            sx={{ color : type === "avgCases7day" ? "red": "primary" }}
            onClick={()=>setType("avgCases7day")}>Số ca nhiễm</Button>
          <Button
            sx={{ color : type === "avgRecovered7day" ? "red": "primary" }}
            onClick={()=>setType("avgRecovered7day")}>Số ca khỏi</Button>
          <Button
          sx={{ color : type === "avgDeath7day" ? "red": "primary" }}
          onClick={()=>setType("avgDeath7day")}>Số ca tử vong</Button>
        </ButtonGroup>
        <Typography
          fontSize={20}
          fontWeight={"700"}
          color={"blue"}>Tháng</Typography>
      </Box>
      <Bar width={100} height={60} data={data} />
    </Paper>
  );
};

export default Chart;
