import { useEffect, useState } from "react";
import CitiesForm from "./components/CitiesForm";
import Header from "./components/Header";
import Nav from "./components/Nav";
import TableList from "./components/TableList";
import UsersForm from "./components/UsersForm";

const App = () => {
  const [dataList, setDataList] = useState(null);
  const [whoFormVisible, setWhoFormVisible] = useState("show"); //show,new,edit
  const [listName, setListName] = useState("Cities"); // cities, users
  const [headers, setHeaders] = useState({});

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
      : setHeaders({
          id: "id",
          firstName: "First Name",
          lastName: "Last Name",
          email: "Email",
          mobile: "mobile",
        });
    console.log("headers");
    console.log(headers);
  }, [listName, whoFormVisible]);

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

  async function deleteClick(deletedObj) {
    console.log("Hi");
    await fetch(`http://localhost:8000/${listName}/${deletedObj.id}`, {
      method: "DELETE",
    });
    console.log("Deleted");
    setWhoFormVisible("show");
  }

  function changeList(name) {
    setListName(name);
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
      ) : (
        ""
      )}
    </>
  );
};

export default App;