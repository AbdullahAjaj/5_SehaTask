import React from "react";
import EditIcon from "./../images/editIcon.png";
import DeleteIcon from "./../images/deleteIcon.png";

const TableRow = ({ dataItem, headers, editClick, deleteClick }) => {
  function handleEditClick() {
    editClick(dataItem);
  }
  function handleDeleteClick() {
    deleteClick(dataItem);
  }

  return (
    <tr>
      {Object.keys(headers).map((item) => {
        return <td>{dataItem[item]}</td>;
      })}
      <td className="icons">
        <img
          src={EditIcon}
          onClick={handleEditClick}
          alt="edit"
          height={15}
          width={15}
        />
        <img
          src={DeleteIcon}
          onClick={handleDeleteClick}
          alt="edit"
          height={15}
          width={15}
        />
      </td>
    </tr>
  );
};

export default TableRow;
