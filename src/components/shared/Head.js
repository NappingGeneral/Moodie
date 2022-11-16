import { Menu, Transition } from "@headlessui/react";
import { useState } from "react";
import { HiOutlineSearch } from "react-icons/hi";
import { Link, Navigate } from "react-router-dom";

export default function Head() {
  const [isShowing, setIsShowing] = useState(false);

  return (
    <div className="text-white bg-[#1D1D1D] w-full h-16 px-4 flex justify-between items-center">
      <div className='flex text-4xl pl-7 flex-col items-center font-Kanit'><a href='/'>Moodie</a></div>
      <div className="flex items-center">
        <Transition show={isShowing}>
          <input
            name="pesquisa"
            type="text"
            placeholder="Pesquisa"
            className="rounded w-[400px] placeholder:text-neutral-400 bg-neutral-700 text-white border-none outline-none"
          />
        </Transition>
        <button
          onClick={() => setIsShowing((isShowing) => !isShowing)}
          className="text-[25px] px-3"
        >
          <HiOutlineSearch />
        </button>
        <Menu as="div" className="relative">
          <div>
            <Menu.Button className="mx-2 inline-flex rounded-full focus:outline-none focus:ring-2 focus:ring-violet-900">
              <span className="sr-only">Open user menu</span>
              <div
                className="h-10 w-10 rounded-full bg-neutral-700 bg-cover bg-center"
                style={{backgroundImage:'url("https://source.unsplash.com/80x80?face")'}}
              >
                <span className="sr-only">Perfil</span>
              </div>
            </Menu.Button>
          </div>
          <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="px-1 py-1 ">
              <Menu.Item>
                {({ active }) => (
                  <a
                    className={`${active ? "bg-violet-500 text-white" : "text-gray-900"} group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  >
                    <Link to='/perfil'>
                      Edit
                    </Link>
                  </a>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${active ? "bg-violet-500 text-white" : "text-gray-900"} group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  >
                    Duplicate
                  </button>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Menu>
      </div>
    </div>
  );
}
