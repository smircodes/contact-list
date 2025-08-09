export default function EditContact() {
  return (
    <div className="py-7 px-5">
      <h1>Edit Contact</h1>
      <form className="flex flex-col space-y-4 mt-6">
        <label>Name</label>
        <input name="name" id="name" type="text" />
        <label>Phone</label>
        <input name="phone" id="phone" type="text" />
        <label>Email</label>
        <input name="Email" id="Email" type="text" />
        <button type="submit">Save</button>
      </form>
    </div>
  );
}
