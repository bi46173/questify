import { pluralize } from "@/lib/utils";
import parse from "html-react-parser";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import { pieChartPalette } from "@/lib/colors";
import { useMemo } from "react";
import { SubItem } from "@/types/form";
import type { Answer } from "./types";
ChartJS.register(ArcElement, Tooltip, Legend);

interface P {
  name: string;
  count: number;
  answers: Answer[];
  options: SubItem[];
}
const prepareChartData = (answers: Answer[], options: SubItem[]) => {
  const optionFrequencyMapper: Record<string, number> = {};
  options.forEach((option) => {
    const optionLabel = option.value.trim();
    answers?.forEach((answer) => {
      if (answer.value?.includes(optionLabel)) {
        optionFrequencyMapper[optionLabel] =
          (optionFrequencyMapper[optionLabel] || 0) + 1;
      }
    });
  });
  return {
    labels: Object.keys(optionFrequencyMapper),
    values: Object.values(optionFrequencyMapper),
  };
};
export const PieChart = ({ name, count, answers, options }: P) => {
  const chartData = useMemo(
    () => prepareChartData(answers, options),
    [answers, options]
  );

  return (
    <div className="flex flex-col gap-1 h-auto">
      {parse(name)}
      <div className="text-sm text-gray-500">
        {pluralize(count, "response")}
      </div>
      <div className="h-72 ml-auto mr-auto">
        <Pie
          data={{
            labels: chartData.labels,
            datasets: [
              {
                data: chartData.values,
                backgroundColor: pieChartPalette,
              },
            ],
          }}
          options={{
            responsive: true,
            plugins: {
              legend: {
                display: true,
                position: "bottom",
              },
            },
          }}
        />
      </div>
    </div>
  );
};
