import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function AddContact({ onAddContact }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newContact = {
      id: uuidv4(),
      name,
      phone,
      email,
    };
    onAddContact(newContact);
    setName("");
    setPhone("");
    setEmail("");
  };

  return (
    <div className="py-7 px-5">
      <h1>Add Contact</h1>
      <form onSubmit={handleSubmit} className="flex flex-col space-y-4 mt-6">
        <input
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          className="border"
          placeholder="name"
        />
        <input
          name="phone"
          type="text"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="border"
          placeholder="phone"
        />
        <input
          name="email"
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border"
          placeholder="email"
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}
