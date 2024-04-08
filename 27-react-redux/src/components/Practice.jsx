import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deposit, withdraw } from "../store/module/bankReducer";

export default function Bank() {
  const [money, setMoney] = useState(0);
  const balance = useSelector((state) => state.bank); //Number
  const dispatch = useDispatch();
  return (
    <div>
      <p>잔액: {balance}</p>
      <input
        type="number"
        value={money}
        onChange={(e) => setMoney(Number(e.target.value))}
        step={100}
      />
      <button onClick={() => dispatch(deposit(money))}>deposit(예금)</button>
      <button onClick={() => dispatch(withdraw(money))}>withdraw(출금)</button>
    </div>
  );
}
