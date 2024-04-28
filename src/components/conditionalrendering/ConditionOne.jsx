import { useState, useEffect } from "react";
import { userList } from "./list";

const ConditionOne = () => {
  const [person, setPerson] = useState(userList);
  const [loading, setLoading] = useState(true)
  // console.log(person)


useEffect(()=> {
  setTimeout(()=> {
    setLoading(false)
  }, 5000)

}, [])
  return (
    <div>
      {loading ? (
        <>Loading...</>
      ) : (
        <>
          {person.map((item) => (
            <h2>{item.firstname}</h2>
          ))}
        </>
      )}
    </div>
  );
}
export default ConditionOne