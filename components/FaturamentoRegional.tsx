import { Disclosure } from "@headlessui/react";
import { CaretDown, NumberCircleFour } from "phosphor-react";
import { CardFaturamentoRegional } from "./CardFaturamentoRegional";

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

            <Disclosure.Panel className="flex text-gray-100">
              <div className="w-full text-center mt-2 rounded-md text-gray-900 ml-1">
                <CardFaturamentoRegional
                  estados={estados}
                  porcentagem={porcentagem}
                />
              </div>
            </Disclosure.Panel>
          </div>
        )}
      </Disclosure>
    </div>
  );
}
