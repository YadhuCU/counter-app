import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  increment,
  incrementByAmount,
  reset,
} from "./redux/countSlice";
import { useState } from "react";

export const Counter = () => {
  const [amount, setAmount] = useState("");
  const dispatch = useDispatch();

  const count = useSelector((state) => state.counterReducer.count);
  const handleChange = () => {
    if (!amount) alert("Input field should not be empty.");
    else {
      dispatch(incrementByAmount(Number(amount)));
      setAmount("");
    }
  };
  return (
    <div className="w-full md:w-1/2 rounded-xl bg-gradient-to-r from-indiogo-950 to-purple-950 shadow-lg shadow-indigo-500/50 py-20">
      <h1 className="text-8xl text-center">{count}</h1>
      <div className="flex justify-evenly my-10">
        <button
          className="rounded-md bg-gradient-to-r 
          from-indigo-700 hover:from-indigo-600 
          to-violet-950 hover:to-violet-800 
          cursor-pointer py-3 px-7 font-bold
          "
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
        <button
          className="rounded-md bg-gradient-to-r 
          from-rose-700 hover:from-rose-600 
          to-red-950 hover:to-red-800 
          py-3 cursor-pointer px-7 font-bold"
          onClick={() => dispatch(reset())}
        >
          Reset
        </button>
        <button
          className="rounded-md bg-gradient-to-r 
          from-indigo-700 hover:from-indigo-600
          to-violet-950 hover:to-violet-800 
          cursor-pointer py-3 px-7 font-bold"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
      </div>
      <div className="flex px-5 justify-center gap-4">
        <input
          className=" bg-transparent caret-indigo-600 "
          type="text"
          placeholder="Input Increment Amount"
          onChange={(e) => setAmount(e.target.value)}
          value={amount}
        />
        <button
          className="rounded-md bg-gradient-to-r 
          from-indigo-700 hover:from-indigo-600
          to-violet-950 hover:to-violet-800 
          cursor-pointer py-3 px-7 font-bold"
          onClick={handleChange}
        >
          Increment by Amount
        </button>
      </div>
    </div>
  );
};
