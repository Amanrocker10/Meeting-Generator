import styled from "styled-components";

const Card = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem;
  margin-bottom: 1rem;
  background-color: #fff;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.1);
`;

const Avatar = styled.img`
  width: 48px;
  height: 48px;
  object-fit: cover;
  border-radius: 50%;
  margin-right: 1rem;
`;

const Name = styled.h3`
  margin: 0;
  font-size: 1rem;
  font-weight: bold;
`;

const Email = styled.p`
  margin: 0;
  font-size: 0.8rem;
  color: #666;
`;

const ContactCard = ({ avatarUrl, name, email }) => {
  return (
    <Card>
      <Avatar src={avatarUrl} alt={name} />
      <div>
        <Name>{name}</Name>
        <Email>{email}</Email>
      </div>
    </Card>
  );
};

export default ContactCard;
