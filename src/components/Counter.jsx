import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, reset } from "./redux/countSlice";

export const Counter = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counterReducer.count);
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
    </div>
  );
};
