import Button from "./Button";

export default function Friend({ friend, onBtnClick, selectedFriend }) {
  const isSelected = friend.id === selectedFriend?.id;
  return (
    <li className={isSelected ? "selected" : ""}>
      <img src={friend.image} />
      <h4>{friend.name}</h4>
      {friend.balance < 0 && (
        <p className="red">
          You owe {friend.name} {Math.abs(friend.balance)}
        </p>
      )}
      {friend.balance > 0 && (
        <p className="green">
          {friend.name} owes you {friend.balance}
        </p>
      )}
      {friend.balance === 0 && <p>You're even with {friend.name}</p>}
      <Button onclick={() => onBtnClick(friend)}>
        {isSelected ? "Close" : "Open"}
      </Button>
    </li>
  );
}
