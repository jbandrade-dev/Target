
interface CardFaturamentoProps{
  content: {
    dia: number
    valor: number
  }
}

export function CardFaturamento({ content }: CardFaturamentoProps) {
  return (
    <div className="flex flex-col text-left gap-2 text-sm rounded-md px-2 bg-gray-100 text-gray-900">
      <div>Dia {content.dia}</div>
      <div>{content.valor}</div>
    </div>
  );
}
