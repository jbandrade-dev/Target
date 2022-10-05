import { NumberCircleFive } from "phosphor-react";
import { ChangeEvent, FormEvent, useState } from "react";

export function ReverterString() {
  const [data, setData] = useState("");

  function reverseString(data: string) {
    return data.split("").reverse().join("");
  }

  function handleCleanInput(event: FormEvent) {
    event.preventDefault();
    setData("");
  }

  return (
    <div className="px-4 mt-10">
      <NumberCircleFive size={32} />
      <h2 className="uppercase font-bold text-lg mt-4">Reverter String :</h2>
      <form className="flex gap-2 mt-4 pb-4">
        <input
          className="w-full rounded-md px-2 text-gray-900 placeholder:text-xs"
          type="text"
          placeholder="Insira uma palavra:"
          value={data}
          onChange={(event) => setData(event.target.value)}
          required
        />
        <button
          onClick={handleCleanInput}
          className="w-[32%] font-semibold rounded-md px-4 bg-blue-500 hover:bg-blue-800"
        >
          Limpar
        </button>
      </form>
      <span className="px-4">{reverseString(data)}</span>
    </div>
  );
}
