import { useState } from "react";

export default function EditContact({
  contact,
  onUpdateContact,
  setIsEditing,
  setEditingContact,
  onNavigate,
}) {
  const [name, setName] = useState(contact.name);
  const [phone, setPhone] = useState(contact.phone);
  const [email, setEmail] = useState(contact.email);

  const handleSaveEdit = (e) => {
    e.preventDefault();
    onUpdateContact({ id: contact.id, name, phone, email });
    onNavigate("list");
  };
  const handleCancel = (e) => {
    e.preventDefault();
    console.log("cancel clicked!");
    setIsEditing(false);
    setEditingContact(null);
    onNavigate("list");
  };
  return (
    <div className="py-7 px-5 ">
      <h1>Edit Contact</h1>
      <form onSubmit={handleSaveEdit} className="flex flex-col space-y-4 mt-6">
        <label>Name</label>
        <input
          onChange={(e) => setName(e.target.value)}
          value={name}
          name="name"
          type="text"
        />
        <label>Phone</label>
        <input
          onChange={(e) => setPhone(e.target.value)}
          value={phone}
          name="phone"
          type="text"
        />
        <label>Email</label>
        <input
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          name="Email"
          type="text"
        />
        <div className="flex space-x-2">
          <button
            className="px-3 bg-gray-200 py-1 rounded-md text-sm hover:bg-green-500"
            type="submit"
          >
            Save
          </button>
          <button
            className="px-3 py-1 bg-gray-200 rounded-md text-sm hover:bg-red-400"
            onClick={handleCancel}
            type="button"
          >
            cancel
          </button>
        </div>
      </form>
    </div>
  );
}
