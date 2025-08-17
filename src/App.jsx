import Navbar from "./components/Navbar.jsx";
import ContactList from "./components/ContactList.jsx";
import SearchBar from "./components/SearchBar.jsx";
import ContactCard from "./components/ContactCard.jsx";
import AddContact from "./components/AddContact.jsx";
import EditContact from "./components/EditContact.jsx";
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  const [activePage, setActivePage] = useState("list");

  const [contacts, setContacts] = useState(() => {
    const savedContacts = localStorage.getItem("contacts");
    if (savedContacts) {
      return JSON.parse(savedContacts);
    } else {
      return [
        {
          id: uuidv4(),
          name: "Samira",
          phone: 1223323443,
          email: "samirarostami@gmail.com",
        },
        {
          id: uuidv4(),
          name: "Amir",
          phone: 435456456456,
          email: "amiritest@gmail.com",
        },
        {
          id: uuidv4(),
          name: "Sarah",
          phone: 4545645645,
          email: "sarahtest@gmail.com",
        },
      ];
    }
  });

  // Saved contacts on stroge
  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const addContactHandler = (newContact) => {
    setContacts([...contacts, { id: uuidv4(), ...newContact }]);
  };
  const deleteContactHandler = (id) => {
    const filteredContacts = contacts.filter((item) => item.id !== id);
    setContacts(filteredContacts);
  };

  // Edit contact
  const [isEditing, setIsEditing] = useState(false);
  const [editingContact, setEditingContact] = useState(null);

  const editContactHandler = (id) => {
    // console.log("Edited contact:", id);
    setIsEditing(true);
    setEditingContact(id);
    setActivePage("edit");
  };

  const contactToEdit = contacts.find((item) => item.id === editingContact);

  const handleUpdateContact = (updateContact) => {
    console.log("Updated user is:", updateContact);
    setContacts((prevContacts) =>
      prevContacts.map((prevContact) =>
        prevContact.id === updateContact.id ? updateContact : prevContact
      )
    );
  };

  return (
    <>
      <div className="m-10 bg-white shadow-[0_35px_35px_rgba(0,0,0,0.25)] rounded-2xl">
        {activePage === "list" && (
          <div className=" rounded shadowmb-2">
            <Navbar onNavigate={setActivePage} />
            <ContactCard>
              <SearchBar
                contacts={contacts}
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
              />
              <ContactList
                contacts={contacts}
                searchTerm={searchTerm}
                onDeleteContact={deleteContactHandler}
                onEdit={editContactHandler}
              />
            </ContactCard>
          </div>
        )}
      </div>

      <div className="flex gap-6">
        {activePage === "add" && (
          <div className="add-contact ml-10 border w-1/2">
            <Navbar onNavigate={setActivePage} />
            <AddContact onAddContact={addContactHandler} />
          </div>
        )}
        {activePage === "edit" && contactToEdit && isEditing && (
          <div className="edit-contact  ml-10 border w-1/2">
            <Navbar onNavigate={setActivePage} />
            <EditContact
              contact={contactToEdit}
              onUpdateContact={handleUpdateContact}
              isEditing={isEditing}
              setIsEditing={setIsEditing}
              setEditingContact={setEditingContact}
              onNavigate={setActivePage}
            />
          </div>
        )}
      </div>
    </>
  );
}

export default App;
