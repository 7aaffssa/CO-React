import { useParams, useNavigate } from "react-router-dom";
import styled from "styled-components";

const DetailContainer = styled.div`
  padding: 2rem;
  max-width: 800px;
  margin: 0 auto;
`;

const UserDetailCard = styled.div`
  background: white;
  border-radius: 8px;
  padding: 2rem;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
`;

const BackButton = styled.button`
  background: #3498db;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
  margin-bottom: 1rem;

  &:hover {
    background: #2980b9;
  }
`;

function UserDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const users = {
    1: { id: 1, name: "aaa", role: "Developer", email: "aaa@example.com", experience: "5 years" },
    2: { id: 2, name: "bbb", role: "Designer", email: "bbb@example.com", experience: "3 years" },
    3: { id: 3, name: "ccc", role: "Manager", email: "ccc@example.com", experience: "7 years" },
    4: { id: 4, name: "ddd", role: "Engineer", email: "ddd@example.com", experience: "4 years" }
  };

  const user = users[id];

  if (!user) {
    return <div>User not found</div>;
  }

  return (
    <DetailContainer>
      <BackButton onClick={() => navigate(-1)}>← Back</BackButton>
      <UserDetailCard>
        <h2>{user.name}</h2>
        <p><strong>Role:</strong> {user.role}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Experience:</strong> {user.experience}</p>
      </UserDetailCard>
    </DetailContainer>
  );
}

export default UserDetail;