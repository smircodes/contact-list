export default function ContactList({ searchTerm, contacts }) {
  const filteredContacts = contacts.filter(
    (contact) =>
      contact.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      contact.email.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <div>
      <h2>Contact List</h2>
      <ul className="contact-list">
        {filteredContacts.map((contact) => {
          return (
            <li key={contact.id} className="flex justify-between py-5">
              <div className="px-5">
                <span>{contact.name}</span>
                <p className="text-[#666]">{contact.email}</p>
              </div>
              <div className="flex gap-x-4">
                <button>Edit</button>
                <button>Delete</button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
