import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import {
  ChevronDownIcon,
  PhoneIcon,
  PlayCircleIcon,
} from "@heroicons/react/20/solid";

const callsToAction = [
  { name: "Watch demo", href: "#", icon: PlayCircleIcon },
  { name: "Contact sales", href: "#", icon: PhoneIcon },
];

const Example = ({ AddCar, total, onAddClick, CarAdd = [] }) => {
  return (
    <Popover className="relative">
      <PopoverButton className="inline-flex elements-center gap-x-1 text-sm font-semibold leading-6 text-gray-50">
        <span>Solutions</span>
        <ChevronDownIcon aria-hidden="true" className="h-5 w-5" />
      </PopoverButton>

      <PopoverPanel
        transition
        className="absolute left-1/2 z-10 mt-5 flex w-screen max-w-max -translate-x-1/2 px-4 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
      >
        <div className="w-screen max-w-md flex-auto overflow-hidden rounded-3xl bg-black text-sm leading-6 shadow-lg ring-1 ring-gray-900/5">
          <div className="p-4">
            <p className="text-center px-4 py-2">
              <p>${total}</p>
            </p>
            {CarAdd.length > 0 ? (
              CarAdd.map((element, index) => (
                <li key={index} className="px-4 py-2 border-b">
                  <p>Nombre: {element.id}</p>
                  <p>Nombre: {element.nombre}</p>
                  <p>Marca: {element.marca}</p>
                  <p>Precio: ${element.precio}</p>
                  <p>Categoría: {element.category}</p>
                  <p>Subtotal:{element.precio * element.quantity}</p>
                  <p>cantidad:{element.quantity}</p>

                  <td className="px-6 py-3  dark:bg-black-800">
                    <td>
                      <button className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">
                        -
                      </button>
                    </td>
                    <th scope="row" class="px-6 py-3 text-base">
                      <input
                        min={1}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        type="number"

                        /* value={element.quantity} */
                        /* onChange={(event) => handleInputChange(event, element.id)} */ // Añade el controlador del evento onChange
                      />
                    </th>
                    <td>
                      <button
                        onClick={() => onAddClick()}
                        className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
                      >
                        +
                      </button>
                    </td>
                  </td>
                </li>
              ))
            ) : (
              <p className="text-center px-4 py-2">
                No hay productos en el carrito
              </p>
            )}
          </div>
          <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
            {callsToAction.map((element) => (
              <a
                key={element.name}
                href={element.href}
                className="flex elements-center justify-center gap-x-2.5 p-3 font-semibold text-gray-900 hover:bg-gray-100"
              >
                <element.icon
                  aria-hidden="true"
                  className="h-5 w-5 flex-none text-gray-400"
                />
                {element.name}
              </a>
            ))}
          </div>
        </div>
      </PopoverPanel>
    </Popover>
  );
};
export default Example;
