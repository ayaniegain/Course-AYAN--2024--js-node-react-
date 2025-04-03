import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { decrement, incByValue, increment } from "./Redux/counterSlice";
import User from "./User";

function App() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter);

  return (
    <>
      <div className="flex flex-col items-center justify-center my-30 bg-gray-100">
        <h1 className="text-3xl font-bold mb-4">
          Counter Value:{count} <span className="text-blue-600">{}</span>
        </h1>
        <div className="flex gap-4">
          <button
            className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
            onClick={() => dispatch(increment())}
          >
            Increment
          </button>
          <button
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
            onClick={() => dispatch(decrement())}
          >
            Decrement
          </button>
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            onClick={() => dispatch(incByValue(200))}
          >
            Increment by 200
          </button>
        </div>
      </div>
      <User/>
    </>
  );
}

export default App;
