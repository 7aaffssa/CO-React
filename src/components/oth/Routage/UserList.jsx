import { Link } from "react-router-dom";
import styled from "styled-components";

const UserListContainer = styled.div`
  padding: 2rem;
  max-width: 800px;
  margin: 0 auto;
`;

const UserCard = styled.div`
  background: white;
  border-radius: 8px;
  padding: 1rem;ù
  margin-bottom: 1rem;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  cursor: pointer;
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-2px);
  }
`;

function UserList() {
  const users = [
    { id: 1, name: "aaa", role: "Developer" },
    { id: 2, name: "bbb", role: "Designer" },
    { id: 3, name: "ccc", role: "Manager" },
    { id: 4, name: "ddd", role: "Engineer" }
  ];

  return (
    <UserListContainer>
      <h1>User List</h1>
      {users.map(user => (
        <Link to={`/user/${user.id}`} key={user.id}style={{ textDecoration: 'none', color: 'inherit' }}>
          <UserCard>
            <h3>{user.name}</h3>
            <p>{user.role}</p>
          </UserCard>
        </Link>
      ))}
    </UserListContainer>
  );
}

export default UserList;