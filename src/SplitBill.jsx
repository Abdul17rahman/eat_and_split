import { useState } from "react";
import Button from "./Button";

export default function SplitBill({ friend, updateFriends }) {
  const [bill, setBill] = useState("");
  const [expense, setExpense] = useState("");
  const [payer, setPayer] = useState("You");

  const friendExpense = bill - expense;

  function handleSplit(e) {
    e.preventDefault();
    const bal = payer === "You" ? -friendExpense : expense;
    console.log(bal);
    friend.balance = friend.balance + bal;
    updateFriends(friend);
    setBill("");
    setExpense("");
  }

  return (
    <form className="form-split-bill" onSubmit={handleSplit}>
      <h2>Split bill with {friend.name}</h2>

      <label>💰 Bill Value</label>
      <input
        type="text"
        value={bill}
        onChange={(e) => setBill(Number(e.target.value))}
      />

      <label>💰 Your expense</label>
      <input
        type="text"
        value={expense}
        onChange={(e) =>
          setExpense(
            Number(e.target.value) > bill ? expense : Number(e.target.value)
          )
        }
      />

      <label>💵 {friend.name} expense</label>
      <input type="text" disabled value={friendExpense} />

      <label>👩🏻‍🤝‍👩🏻 Who is paying the bill?</label>
      <select value={payer} onChange={(e) => setPayer(e.target.value)}>
        <option value="You">You</option>
        <option value={friend.name}>{friend.name}</option>
      </select>
      <Button>Split Bill</Button>
    </form>
  );
}
