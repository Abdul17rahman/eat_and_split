import { useState } from "react";
import Button from "./Button";

export default function AddFriend({ onAddFriend, onOpen }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");

  function handleFriend(e) {
    e.preventDefault();
    if (!name || !image) return;
    const newFriend = {
      id: Date.now(),
      name,
      image: `https://i.pravatar.cc/48?${image}`,
      balance: 0,
    };
    onAddFriend(newFriend);
    setName("");
    setImage("");
    onOpen();
  }
  return (
    <form className="form-add-friend" onSubmit={handleFriend}>
      <label>🥰 Name</label>
      <input
        type="text"
        value={name}
        name="name"
        onChange={(e) => setName(e.target.value)}
      />

      <label>📷 Image Url</label>
      <input
        type="text"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />
      <Button>Add</Button>
    </form>
  );
}
