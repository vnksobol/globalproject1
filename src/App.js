import { Chart } from "react-google-charts";
import './App.css';

export const data = [
  ["Resources", "Percent"],
  ["Hydro", 40],
  ["Solar", 28],
  ["Wind", 27],
  ["Other", 5],
];

export const options = {
  title: "Renewable energy",
  is3D: true,
};

function App() {

  return (
    <>
      <Chart
      chartType="PieChart"
      data={data}
      options={options}
      width={"100%"}
      height={"400px"}
    />
    </>
  );

}

export default App;
