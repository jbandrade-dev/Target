import { VictoryLabel, VictoryPie } from "victory";

export function Chart() {
  return (
    <svg viewBox="0 0 400 400">
      <VictoryPie
        standalone={false}
        width={400}
        height={400}
        data={[
          { x: "SP", y: 38, fill: "blue" },
          { x: "RJ", y: 20, fill: "purple" },
          { x: "MG", y: 16, fill: "red" },
          { x: "ES", y: 15, fill: "orange" },
          { x: "OE", y: 11, fill: "gray" },
        ]}
        innerRadius={50}
        labelRadius={100}
        style={{
          data: {
            fill: ({ datum }) => datum.fill,
          },
          labels: { fontSize: 16, fill: "white" },
        }}
      />
      <circle
        cx="200"
        cy="200"
        r="45"
        fill="none"
        stroke="white"
        strokeWidth={3}
      />
      <circle
        cx="200"
        cy="200"
        r="155"
        fill="none"
        stroke="white"
        strokeWidth={3}
      />
      <VictoryLabel
        textAnchor="middle"
        verticalAnchor="middle"
        x={200}
        y={200}
        style={{ fontSize: 30, fill: "white" }}
        text="%"
      />
    </svg>
  );
}
