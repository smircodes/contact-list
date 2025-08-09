import Navbar from "./components/Navbar.jsx";
import ContactList from "./components/ContactList.jsx";
import SearchBar from "./components/SearchBar.jsx";
import ContactCard from "./components/ContactCard.jsx";
import AddContact from "./components/AddContact.jsx";
import EditContact from "./components/EditContact.jsx";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [contacts, setContacts] = useState([
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
  ]);
  const [activePage, setActivePage] = useState("list");
  const addContactHandler = (newContact) => {
    // console.log("New Contact Add:", newContact);
    setContacts([...contacts, newContact]);
  };
  return (
    <>
      <div className="border m-10">
        {/* {activePage === "list" && ( */}
        <>
          <Navbar onNavigate={setActivePage} />
          <ContactCard>
            <SearchBar
              contacts={contacts}
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
            />
            <ContactList contacts={contacts} searchTerm={searchTerm} />
          </ContactCard>
        </>
        {/* )} */}
      </div>
      {/* {activePage === "add" && ( */}
      <>
        <div className="flex gap-6">
          <div className="add-contact ml-10 border w-1/2">
            <Navbar onNavigate={setActivePage} />
            <AddContact onAddContact={addContactHandler} />
          </div>
          <div className="edit-contact mr-10 border w-1/2">
            <Navbar onNavigate={setActivePage} />
            <EditContact />
          </div>
        </div>
      </>
      {/* )} */}
    </>
  );
}

export default App;
