import { useEffect, useState } from "react";
import styles from "./user.module.css";

const url = "https://fakestoreapi.com/users";

const Users = () => {

  const [users, setUsers] = useState([]);
  console.log("USERS", users);
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await fetch(url);
        const data = await res.json();
        setUsers(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchUsers();
  }, []);

  return (
    <div>
      <h2>UserList</h2>
      {users.length === 0 ? (
        <h1>Loading...</h1>
      ) : (
        <>
          <section className={styles.cards}>
            {users.map((user) => {
              return (
                <section key={user.id} className={styles.card}>
                  <h3>
                    {user.name.firstname} {user.name.lastname}
                  </h3>
                  <span>{user.username}</span>
                  <p>{user.address.city}</p>
                  <p>{user.address.street}</p>
                  <p>{user.email}</p>
                </section>
              );
            })}
          </section>
        </>
      )}
    </div>
  );
};

export default Users;
