import { Disclosure } from "@headlessui/react";
import { CaretDown, NumberCircleFour } from "phosphor-react";
import { VictoryLabel, VictoryPie } from "victory";

const faturamentoRegional = [
  { estado: "São Paulo", faturamento: 67.836 },
  { estado: "Rio de Janeiro", faturamento: 36.678 },
  { estado: "Minas Gerais", faturamento: 29.229 },
  { estado: "Espírito Santo", faturamento: 27.165 },
  { estado: "Outros", faturamento: 19.849 },
];

const data = faturamentoRegional.map((item) => {
  return item.faturamento;
});

const estados = faturamentoRegional.map((item) => {
  return item.estado;
});

const soma = data.reduce(function (soma, i) {
  return soma + i;
});

const umPorcento = soma / 100;
const porcentagem = data.map((item) => {
  return Math.round(item / umPorcento);
});

export function FaturamentoRegional() {
  return (
    <div className="items-center gap-2 px-4 mt-10 ">
      <NumberCircleFour size={32} />
      <Disclosure>
        {({ open }) => (
          <div className="mt-4">
            <Disclosure.Button className="flex gap-1 rounded-lg text-lg">
              <h2 className="text-gray-100 uppercase font-bold">
                Representatividade por estado
              </h2>
              <CaretDown
                className={`${
                  open ? "rotate-180 transform mt-1.5" : ""
                } h-5 w-5 text-gray-100 mt-1`}
              />
            </Disclosure.Button>

            <Disclosure.Panel className="flex max-h-[500px] text-gray-100">
              <svg viewBox="0 0 400 400">
                <VictoryPie
                  standalone={false}
                  width={400}
                  height={400}
                  data={[
                    {
                      x: `SP-${porcentagem[0]}%`,
                      y: porcentagem[0],
                      fill: "blue",
                    },
                    {
                      x: `RJ-${porcentagem[1]}%`,
                      y: porcentagem[1],
                      fill: "purple",
                    },
                    {
                      x: `MG-${porcentagem[2]}%`,
                      y: porcentagem[2],
                      fill: "red",
                    },
                    {
                      x: `ES-${porcentagem[3]}%`,
                      y: porcentagem[3],
                      fill: "orange",
                    },
                    {
                      x: `OU-${porcentagem[4]}%`,
                      y: porcentagem[4],
                      fill: "gray",
                    },
                  ]}
                  innerRadius={50}
                  labelRadius={80}
                  style={{
                    data: {
                      fill: ({ datum }) => datum.fill,
                    },
                    labels: { fontSize: 12, fill: "white" },
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
                  style={{ fontSize: 22, fill: "white" }}
                  text="%"
                />
              </svg>
            </Disclosure.Panel>
          </div>
        )}
      </Disclosure>
    </div>
  );
}
