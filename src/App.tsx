import { useState } from "react";
import "./styles/global.css";

import { useForm } from "react-hook-form";

export default function App() {
  const [output, setOutput] = useState("");
  const { register, handleSubmit } = useForm();

  function createUser(data: any) {
    //receive form data
    setOutput(JSON.stringify(data, null, 2));
  }
  // High-order function -> functional programming concept
  // methods like .map .reduce .filter -> pass a function to another function
  return (
    <main className="h-screen bg-zinc-950 text-zinc-300 flex flex-col gap-10 items-center justify-center">
      <form
        onSubmit={handleSubmit(createUser)} // onSubmit waits a function
        className="flex flex-col gap-4 w-full max-w-xs"
      >
        <div className="flex flex-col gap-1">
          <label htmlFor="">E-mail</label>
          <input
            type="email"
            className="border border-zinc-800 shadow-sm rounded h-10 px-3 bg-zinc-900 text-white"
            {...register("email")} // not necessary 'name="email"', it includes automatic by 'register'
          />
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="">Senha</label>
          <input
            type="password"
            className="border border-zinc-800 shadow-sm rounded h-10 px-3 bg-zinc-900 text-white"
            {...register("password")} // not necessary 'name="password"', it includes automatic by 'register'
          />
        </div>

        <button
          type="submit"
          className="bg-emerald-500 rounded font-semibold text-white h-10 hover:text hover:bg-emerald-600"
        >
          Salvar
        </button>
      </form>

      <pre>{output}</pre>
    </main>
  );
}
