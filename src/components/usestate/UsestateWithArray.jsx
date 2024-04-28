import { useState } from "react";
import { staffs } from "../../data";
// console.log(staffs)

const UsestateWithArray = () => {
  const [data, setData] = useState(staffs);
  // console.log("DATA======", data);

  const deleteAllStaffs = () => {
    setData([]);
  };

  const deleteStaff = (id) => {
    const remainingStaffs = data.filter((staff) => staff.id !== id);
    setData(remainingStaffs);
  };

  return (
    <div className="witharr">
      <h2>UsestateWithArray</h2>

      {data.map((item) => {
        const { id, name, course } = item;
        return (
          <div key={item.id}>
            <h3>{name}</h3>
            <h4>{course}</h4>
            <button onClick={() => deleteStaff(id)}>Delete Staff</button>
          </div>
        );
      })}
      <button onClick={deleteAllStaffs} className="btn">
        Delete All Staffs
      </button>
    </div>
  );
};
export default UsestateWithArray;
