import { NumberCircleOne } from "phosphor-react";

export function Soma() {
  const array = [];
  const size = 13;
  for (let i = 0; i < size; i++) {
    array.push(i);
  }

  const soma = array.reduce(function (soma, i) {
    return soma + i;
  });

  return (
    <div className="px-4 mt-4">
      <NumberCircleOne size={32} />
      <div className="flex gap-1 items-center text-lg font-bold uppercase mt-4">
        <span>Soma =</span>
        <span>{soma}</span>
      </div>
    </div>
  );
}
