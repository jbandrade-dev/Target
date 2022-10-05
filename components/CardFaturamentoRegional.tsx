interface CardFaturamentoRegionalProps {
  estados: string[];
  porcentagem: number[];
}

export function CardFaturamentoRegional({
  estados,
  porcentagem,
}: CardFaturamentoRegionalProps) {
  return (
    <div className="grid grid-cols-2 gap-3">
      <div className="flex flex-col gap-3">
        {estados.map((estados) => {
          return (
            <div key={estados} className="bg-gray-100 rounded-md text-lg p-2">
              
              {estados} 
            </div>
          );
        })}
      </div>

      <div className="flex flex-col gap-3">
        {porcentagem.map((item) => {
          return (
            <div key={item} className="flex flex-col">
              <span className="bg-gray-100 rounded-md text-lg p-2">
                {item}%
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
