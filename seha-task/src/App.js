import { useEffect, useState } from "react";
import CitiesForm from "./components/CitiesForm";
import DeleteDialog from "./components/DeleteDialog";
import Header from "./components/Header";
import Nav from "./components/Nav";
import ReportsForm from "./components/ReportsForm";
import TableList from "./components/TableList";
import UsersForm from "./components/UsersForm";

const App = () => {
  const [dataList, setDataList] = useState(null);
  const [whoFormVisible, setWhoFormVisible] = useState("show"); //show,new,edit
  const [listName, setListName] = useState("Cities"); // Cities, Users, Reports
  const [headers, setHeaders] = useState({});
  const [itemId, setItemId] = useState(null);
  const [isDialogVisible, setIsDialogVisible] = useState(false);

  useEffect(() => {
    fetch(`http://localhost:8000/${listName}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setDataList(data);
        console.log(data);
      });

    listName === "Cities"
      ? setHeaders({
          id: "id",
          nameEng: "English Name",
          nameAr: "Arabic Name",
          date: "Date",
        })
      : listName === "Users"
      ? setHeaders({
          id: "id",
          firstName: "First Name",
          lastName: "Last Name",
          email: "Email",
          mobile: "mobile",
        })
      : setHeaders({
          id: "id",
          username: "Username",
          reason: "Reason",
          date: "Date",
        });
  }, [listName, whoFormVisible, isDialogVisible]);

  function handleCancelClick() {
    setWhoFormVisible("show");
  }
  function handleAddNewClick() {
    setWhoFormVisible("new");
  }

  async function createNewData(objData) {
    await fetch(`http://localhost:8000/${listName}`, {
      method: "POST",
      body: JSON.stringify(objData),
      headers: { "content-type": "application/json" },
    });
    setWhoFormVisible("show");
  }

  async function editClick(city) {
    await setWhoFormVisible("edit");
    await fetch(`http://localhost:8000/${listName}/${city.id}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        document.forms["form"].hidden.value = JSON.stringify(data);
        let formInputs = [...document.forms["form"].children].slice(2);

        formInputs.forEach((item) => {
          if (document.forms["form"][item.name] !== undefined)
            document.forms["form"][item.name].value = data[item.name];
        });
      });
  }

  async function updateData(updatedObj) {
    await fetch(`http://localhost:8000/${listName}/${updatedObj.id}`, {
      method: "PUT",
      body: JSON.stringify(updatedObj),
      headers: { "content-type": "application/json" },
    });
    setWhoFormVisible("show");
  }

  function closeClick() {
    setIsDialogVisible(false);
    setItemId(null);
  }

  function deleteClick(objId) {
    setIsDialogVisible(true);
    setItemId(objId);
    console.log("Done");
  }

  async function confirmDeleteClick() {
    console.log(itemId);
    await fetch(`http://localhost:8000/${listName}/${itemId}`, {
      method: "DELETE",
    });
    console.log("Deleted");
    setWhoFormVisible("show");
    setIsDialogVisible(false);
    setItemId(null);
  }

  function changeList(name) {
    setListName(name);
    console.log(listName);
  }

  return (
    <>
      <Header
        cancelClick={handleCancelClick}
        addNewClick={handleAddNewClick}
        whoFormVisible={whoFormVisible}
        createNewData={createNewData}
        updateData={updateData}
      />

      {whoFormVisible === "show" ? (
        <>
          <Nav changeList={changeList} />
          {dataList && (
            <TableList
              dataList={dataList}
              tableRowHandlers={{
                editClick: editClick,
                deleteClick: deleteClick,
              }}
              headers={headers}
            />
          )}
        </>
      ) : listName === "Cities" ? (
        <CitiesForm />
      ) : listName === "Users" ? (
        <UsersForm />
      ) : listName === "Reports" ? (
        <ReportsForm />
      ) : (
        ""
      )}
      {isDialogVisible && (
        <DeleteDialog
          confirmDeleteClick={confirmDeleteClick}
          closeClick={closeClick}
        />
      )}
    </>
  );
};

export default App;
