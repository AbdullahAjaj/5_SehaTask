import React, { useEffect, useState } from "react";
import { useRef } from "react";

const ReportsForm = () => {
  const [usersList, setUsersList] = useState(null);
  // const usernameRef = useRef(null);
  const reasonRef = useRef(null);
  const dateRef = useRef(null);

  useEffect(() => {
    fetch(`http://localhost:8000/users`)
      .then((res) => res.json())
      .then((data) => {
        setUsersList(data);
        console.log("users list");
        console.log(usersList);
      });
  }, [usersList]);

  return (
    <>
      <form id="form">
        <h1>Report Information</h1>
        <input type="hidden" name="hidden" />
        <label htmlFor="username">Choose a user:</label>
        <select name="username" id="username">
          {usersList
            ? usersList.map((item) => {
                return (
                  <option
                    value={`${item.firstName} ${item.lastName}`}
                  >{`${item.firstName} ${item.lastName}`}</option>
                );
              })
            : ""}
        </select>
        <input
          type="text"
          className="reason"
          ref={reasonRef}
          name="reason"
          placeholder="Reason"
        />
        <input
          type="date"
          className="date"
          ref={dateRef}
          name="date"
          placeholder="Date"
        />
      </form>
    </>
  );
};

export default ReportsForm;
