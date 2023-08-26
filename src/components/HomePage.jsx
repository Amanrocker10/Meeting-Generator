import styled from "styled-components";
import ContactCard from "./ContactCard";
import MeetingDetails from "./MeetingDetails";

const PageContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
`;

const HomePage = () => {
  const contacts = [
    {
      id: 1,
      name: "Aman Raj",
      email: "amanraj@gmail.com",
      avatarUrl: "https://randomuser.me/api/portraits/men/1.jpg",
    },
    {
      id: 2,
      name: "Ayush Sinha",
      email: "ayushcoolsinha@gmail.com",
      avatarUrl: "https://randomuser.me/api/portraits/men/3.jpg",
    },
    // Add more contacts as needed
  ];

  const meeting = {
    title: "Weekly Team Meeting",
    date: "2023-04-15",
    time: "10:00 AM",
    location: "Zoom",
    description: "Discuss project updates and upcoming tasks",
    attendees: contacts,
  };

  return (
    <PageContainer>
      <h1>Meeting Generator</h1>
      <MeetingDetails meeting={meeting} />
      <h2>Attendees</h2>
      {contacts.map((contact) => (
        <ContactCard
          key={contact.id}
          avatarUrl={contact.avatarUrl}
          name={contact.name}
          email={contact.email}
        />
      ))}
    </PageContainer>
  );
};

export default HomePage;