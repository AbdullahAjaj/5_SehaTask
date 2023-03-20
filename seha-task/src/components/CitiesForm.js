import { useRef } from "react";

const CitiesForm = () => {
  const nameEngRef = useRef(null);
  const nameArRef = useRef(null);
  const date = new Date();

  return (
    <>
      <form id="form">
        <h1>City Information</h1>
        <input type="hidden" name="hidden" />
        <input
          type="text"
          className="nameEng"
          ref={nameEngRef}
          name="nameEng"
          placeholder="English Name"
        />
        <input
          type="text"
          className="nameAr"
          ref={nameArRef}
          name="nameAr"
          placeholder="Arabic Name"
        />
        <input type="hidden" name="date" value={date.toLocaleDateString()} />
      </form>
    </>
  );
};

export default CitiesForm;
