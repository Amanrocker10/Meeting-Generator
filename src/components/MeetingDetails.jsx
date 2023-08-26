import ContactCard from "./ContactCard";

const contacts = [
  {
    id: 1,
    name: "John Doe",
    email: "johndoe@example.com",
    avatarUrl: "https://ui-avatars.com/api/?name=John+Doe",
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "janesmith@example.com",
    avatarUrl: "https://ui-avatars.com/api/?name=Jane+Smith",
  },
];

const MeetingDetails = () => {
  return (
    <div>
      <h2>Meeting Details</h2>
      {contacts.map((contact) => (
        <ContactCard
          key={contact.id}
          avatarUrl={contact.avatarUrl}
          name={contact.name}
          email={contact.email}
        />
      ))}
    </div>
  );
};

export default MeetingDetails;