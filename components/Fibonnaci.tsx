import { ChangeEvent, FormEvent, Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { NumberCircleTwo, X } from "phosphor-react";

const fibonacci = [0, 1];
const size = 16;

for (let i = 2; i <= size; i++) {
  fibonacci[i] = fibonacci[i - 2] + fibonacci[i - 1];
}

const data = fibonacci.map(String);

export function Fibonacci() {
  const [number, setNumber] = useState("");
  const [isFibonacci, setIsFibonacci] = useState<boolean>();
  const [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function handleSubmit(event: FormEvent) {
    event.preventDefault();

    if (data.indexOf(number) > -1) {
      setIsFibonacci(true);
    } else {
      setIsFibonacci(false);
    }

    setIsOpen(true);
  }

  function handleCleanInput(event: FormEvent) {
    event.preventDefault();
    setNumber("");
  }

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setNumber(event.target.value);
  }

  return (
    <div className="grid gap-2 px-4 mt-10">
      <header>
        <NumberCircleTwo size={32} />
        <h2 className="uppercase font-bold text-lg mt-4">sequência de fibonacci</h2>
      </header>
      <form className="flex gap-2" onSubmit={handleSubmit}>
        <input
          className="w-[50%] rounded-md px-2 text-gray-900 placeholder:text-xs"
          type="number"
          min={0}
          max={1000}
          placeholder="Insira um número de entre 0 e 1000:"
          value={number}
          onChange={handleChange}
          required
        />
        <button className="w-[25%] font-semibold rounded-md px-4 bg-purple-500 hover:bg-purple-800">
          Faz parte?
        </button>
        <button
          onClick={handleCleanInput}
          className="w-[25%] font-semibold rounded-md px-4 bg-blue-500 hover:bg-blue-800"
        >
          Limpar
        </button>
      </form>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-30" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-900 bg-opacity-75" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-screen items-center justify-center ">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="max-w-xl flex justify-center bg-gray-100 wrapper transform rounded-md p-16 text-left shadow-xl transition-all">
                  <Dialog.Title
                    as="span"
                    className="text-gray-900 font-bold text-lg uppercase"
                  >
                    {isFibonacci
                      ? "Esse número faz parte da sequência!"
                      : "Esse não faz parte"}
                  </Dialog.Title>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
}
