export default function ContactList({
  searchTerm,
  contacts,
  onDeleteContact,
  onEdit,
}) {
  const displayContacts = contacts.filter(
    (contact) =>
      contact.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      contact.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h2 className="text-gray-800">Contact List</h2>
      <ul className="contact-list">
        {displayContacts.map((contact) => {
          return (
            <li key={contact.id} className="flex justify-between py-5">
              <div className="px-5">
                <span className="text-gray-700 text-lg font-semibold">
                  {contact.name}
                </span>
                <p className="text-[#666] text-lg">{contact.email}</p>
              </div>
              <div className="flex gap-x-4">
                <button
                  className="text-base h-8 text-gray-700"
                  onClick={() => onEdit(contact.id)}
                >
                  Edit
                </button>
                <button
                  className="text-base h-8 text-gray-700"
                  onClick={() => onDeleteContact(contact.id)}
                >
                  Delete
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
