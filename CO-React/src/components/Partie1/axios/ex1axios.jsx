import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Exx1() {
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((res) => setUsers(res.data));
  }, []);

  const handleUserClick = (userId) => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
      .then((res) => setPosts(res.data));
  };

  return (
    <div>
      <h1>Utilisateurs</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id} onClick={() => handleUserClick(user.id)}>
            {user.name}
          </li>
        ))}
      </ul>

      <h2>Publications</h2>
      <ul>
        {posts.length > 0 ? (
          posts.map((post) => (
            <li key={post.id}>
              <strong>{post.title}</strong>: {post.body}
            </li>
          ))
        ) : (
          <p>Aucune publication sélectionnée.</p>
        )}
      </ul>
    </div>
  );
}