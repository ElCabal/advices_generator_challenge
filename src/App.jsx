import { useState, useEffect } from "react";
import { Spinner } from "./Spinner";
import "./App.css";

function App() {
  const [advices, setAdvices] = useState({});
  const [spinner, setSpinner] = useState(true);
  const [change, setChange] = useState(true);

  async function getAdvices() {
    const response = await fetch("https://api.adviceslip.com/advice");
    const results = await response.json();
    setSpinner(false);
    setAdvices(results.slip);
  }

  useEffect(() => {
    getAdvices();
  }, [change]);
  return (
    <section className="font-manrope h-screen bg-darkBlue flex justify-center items-center px-4">
      <div className="rounded-xl bg-darkGrayishBlue h-72 w-[400px] px-6 py-10 flex flex-col items-center relative shadow-md">
        <p className=" text-center text-neonGreen text-xs tracking-[4px]">
          ADVICE #{advices.id}
        </p>
        <div className=" h-full flex justify-center items-center">
          {spinner ? (
            <Spinner />
          ) : (
            <p className=" text-center text-xl text-lightCyan">
              “{advices.advice}”
            </p>
          )}
        </div>
        <div className=" h-auto flex items-end pb-6">
          <img
            className=""
            src="/assets/pattern-divider-mobile.svg"
            alt="divider"
          />
        </div>
        <button
          className=" bg-neonGreen w-14 h-14 flex justify-center items-center rounded-full absolute -bottom-[29px] shadow_effect"
          onClick={() => setChange(!change)}
        >
          <img src="/assets/icon-dice.svg" alt="" />
        </button>
      </div>
    </section>
  );
}

export default App;
