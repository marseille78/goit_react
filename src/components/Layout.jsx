import { useDispatch, useSelector } from "react-redux";
import { increment } from "../redux/store";

export const Layout = () => {
  const value = useSelector(state => state.myValue);
  const dispatch = useDispatch();

  console.log('value :>> ', value);

  return (
    <div>
      {value}
      <button onClick={() => dispatch(increment(100))}>Increment</button>
    </div>
  );
};
