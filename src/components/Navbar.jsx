export default function Navbar({ onNavigate }) {
  return (
    <div className="flex justify-between px-5 py-3 border-[#e1e3e1] border-b">
      <h1>CONTACTS</h1>

      <ul className="flex items-center gap-10">
        <li>
          <a
            className="text-[1.2em]"
            href="#"
            onClick={() => onNavigate("list")}
          >
            Home
          </a>
        </li>
        <li>
          <a
            className="text-[1.2em]"
            href="#"
            onClick={() => onNavigate("add")}
          >
            Add Contact
          </a>
        </li>
      </ul>
    </div>
  );
}
