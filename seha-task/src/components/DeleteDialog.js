import closeIcon from "./../images/close.png";

const DeleteDialog = ({ confirmDeleteClick, closeClick }) => {
  function handleCloseClick() {
    closeClick();
  }

  function handleDeleteConfirmation() {
    confirmDeleteClick();
  }

  return (
    <div className="popup-overlay">
      <div className="popup-box">
        <p>Are you sure you want to delete it?</p>
        <img
          src={closeIcon}
          id="close"
          onClick={handleCloseClick}
          alt="close"
          height="30"
          width="30"
        />
        <button className="yes" onClick={handleDeleteConfirmation}>
          Yes
        </button>
        <button className="Cancel" onClick={handleCloseClick}>
          Cancel
        </button>
      </div>
    </div>
  );
};

export default DeleteDialog;
