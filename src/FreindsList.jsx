import Friend from "./Friend";

export default function FriendList({ friends, onBtnClick }) {
  return (
    <div>
      {friends.map((f) => (
        <Friend key={f.id} friend={f} onBtnClick={onBtnClick} />
      ))}
    </div>
  );
}
