import React from "react";

const Header = ({
  whoFormVisible,
  cancelClick,
  addNewClick,
  createNewData,
  updateData,
}) => {
  function handleCreateClick() {
    let objData = {};
    let formInputs = [...document.forms["form"].children].slice(2);
    objData.id = Date.now();

    formInputs.forEach((item) => {
      objData[item.name] = document.forms["form"][item.name].value;
    });

    createNewData(objData);
  }

  function handleUpdateClick() {
    let objData = JSON.parse(document.forms["form"].hidden.value);
    let formInputs = [...document.forms["form"].children].slice(2);

    formInputs.forEach((item) => {
      objData[item.name] = document.forms["form"][item.name].value;
    });

    updateData(objData);
  }

  return (
    <div className="header">
      {whoFormVisible === "show" ? (
        <button className="add" onClick={addNewClick}>
          Add New
        </button>
      ) : whoFormVisible === "new" ? (
        <>
          <button className="create" onClick={handleCreateClick}>
            Create
          </button>
          <button className="cancel" onClick={cancelClick}>
            Cancel
          </button>
        </>
      ) : (
        <>
          <button className="update" onClick={handleUpdateClick}>
            Update
          </button>
          <button className="cancel" onClick={cancelClick}>
            Cancel
          </button>
        </>
      )}
    </div>
  );
};

export default Header;
