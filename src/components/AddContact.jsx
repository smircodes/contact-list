import { useState } from "react";

export default function AddContact({ onAddContact }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    const newError = {};
    if (!name.trim()) {
      newError.name = "Name is required.";
    }
    if (!email.trim()) {
      newError.email = "Email is required.";
    }
    if (!phone.trim()) {
      newError.phone = "Phone is required.";
    }
    setErrorMessage(newError);
    if (Object.keys(newError).length === 0) {
      const newContact = {
        name,
        phone,
        email,
      };
      onAddContact(newContact);
      setName("");
      setPhone("");
      setEmail("");
    }
  };

  return (
    <div className="py-7 px-5">
      <h1>Add Contact</h1>
      <form onSubmit={handleSubmit} className="flex flex-col space-y-2 mt-6">
        <input
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          className="border"
          placeholder="name"
        />
        <span className="text-red-500 text-sm">{errorMessage.name}</span>
        <input
          name="phone"
          type="text"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="border"
          placeholder="phone"
        />
        <span className="text-red-500 text-sm">{errorMessage.phone}</span>
        <input
          name="email"
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border"
          placeholder="email"
        />
        <span className="text-red-500 text-sm">{errorMessage.email}</span>
        <button
          className="h-8 bg-gray-200 rounded-md text-sm hover:bg-blue-400"
          type="submit"
        >
          Add
        </button>
      </form>
    </div>
  );
}
