import Button from "./Button";

export default function Friend({ friend, onBtnClick }) {
  return (
    <li>
      <img src={friend.image} />
      <h4>{friend.name}</h4>
      {friend.balance < 0 && <p className="red">You owe {friend.balance}</p>}
      {friend.balance > 0 && <p className="green">You owe {friend.balance}</p>}
      {friend.balance === 0 && <p>You're even</p>}
      <Button onclick={() => onBtnClick(friend)}>Select</Button>
    </li>
  );
}
