import { useContext } from "react"
import { LockClosedIcon } from "@heroicons/react/20/solid"
import { FcGoogle } from "react-icons/fc"
import Head from "../components/shared/Head"
import { AuthGoogleContext } from "../Context/AuthGoogle"

export default function Login() {
  const { signInGoogle } = useContext(AuthGoogleContext)

  return (
    <div className="flex flex-col relative w-screen h-screen bg-gray-800">
      <Head />
      <div className="flex justify-center items-center h-full">
        <form
          className="p-8 px-8 max-w-[400px] w-full mx-auto rounded-2xl bg-[#7b5cc9]"
          onSubmit={(e) => e.preventDefault()}
        >
          <h1 className="text-2xl font-bold text-center text-white">
            Para continuar, faça login no Moodie
          </h1>

          <div className="flex justify-between">
            <button
              className="flex justify-center bg-white my-4 py-2 w-full rounded-3xl"
              onClick={() => signInGoogle()}
            >
              <FcGoogle className="mr-4 text-2xl" /> Continuar com Google
            </button>
          </div>

          <div className="flex flex-col text-white py-2">
            <label>Endereço de Email</label>
            <input
              className="rounded-lg h-10 bg-violet-400 mt-1 p-2 border-none focus:border-solid focus:border-violet-900  focus:border-2  focus:bg-violet-500"
              type="text"
            />
          </div>

          <div className="flex flex-col text-white py-2">
            <label>Senha</label>
            <input
              className="rounded-lg h-10 bg-violet-400 mt-1 p-2 border-none focus:border-solid focus:border-violet-900  focus:border-2  focus:bg-violet-500"
              type="password"
            />
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                type="checkbox"
                className="h-4 w-4 rounded border-gray-300 text-violet-900 focus:ring-violet-600"
              />
              <label
                htmlFor="remember-me"
                className="ml-2 block text-sm py-2 text-gray-200"
              >
                Remember me
              </label>
            </div>

            <div className="text-sm">
              <a
                href="#"
                className="font-semibold text-violet-900 hover:text-purple-800"
              >
                Forgot your password?
              </a>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative flex w-full justify-center rounded-md border border-transparent bg-violet-900 mt-2 py-2 px-4 text-sm font-medium text-white hover:bg-purple-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <LockClosedIcon
                  className="h-5 w-5 text-violet-500 group-hover:text-purple-400"
                  aria-hidden="true"
                />
              </span>
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
