import { useState } from "react";
import AddFriend from "./AddFriend";
import "./App.css";
import Button from "./Button";
import FriendList from "./FreindsList";
import SplitBill from "./SplitBill";

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

function App() {
  const [friends, setFriends] = useState(initialFriends);
  const [open, setOpen] = useState(false);
  const [friend, setFriend] = useState(null);

  function addFriend(f) {
    setFriends((cur) => [...cur, f]);
  }
  function handleOpen() {
    setOpen(!open);
  }

  function handleFriend(f) {
    setFriend(f);
    setOpen(false);
  }

  function updateFriends(f) {
    if (f) {
      setFriends((cur) =>
        cur.map((f) => {
          if (f.id === friend.id) {
            return { ...f, balance: friend.balance };
          }
          return { ...f };
        })
      );
    }
    return;
  }
  return (
    <div className="app">
      <div className="sidebar">
        <FriendList
          friends={friends}
          onBtnClick={handleFriend}
          selectedFriend={friend}
        />
        {open && <AddFriend onAddFriend={addFriend} onOpen={handleOpen} />}
        <Button onclick={handleOpen}>{open ? "Close" : "Add Friend"}</Button>
      </div>
      {friend && <SplitBill friend={friend} updateFriends={updateFriends} />}
    </div>
  );
}

export default App;
