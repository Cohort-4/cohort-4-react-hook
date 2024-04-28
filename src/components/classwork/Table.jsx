import { useState } from "react";
import { staffs } from "../../data";

const Table = () => {
  const [user, setUser] = useState(staffs);
  return (
    <table>
      <thead>
        <tr>
          <th>id</th>
          <th>name</th>
          <th>matric</th>
          <th>course</th>
          <th>Delete</th>
        </tr>
      </thead>
      {user.map((item) => {
        const { id, name, matric, course } = item;
        return (
          <tbody key={id}>
            <tr>
              <td>{id}</td>
              <td>{name}</td>
              <td>{matric}</td>
              <td>{course}</td>
              <td>
                <button>Delete</button>
              </td>
            </tr>
          </tbody>
        );
      })}

      <button>Delete All</button>
    </table>
  );
};
export default Table;
