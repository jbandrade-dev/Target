interface BarraProps {
  item: number;
}

export function Barra({ item }: BarraProps) {
  return (
    <div>
      <span className="bg-green-500 rounded-md px-2" >
        {item}%
      </span>
    </div>
  );
}
