import './App.css';
import React, {useState} from "react";
// Components
import {Table} from "./components/Table/Table";
import {EditUser} from "./components/Forms/EditUser";
import {AddUser} from "./components/Forms/AddUser";

export const App = () => {
  // Init state
  const initUsers = [
    {
      id: 1,
      secondName: 'Иванов',
      primaryName: 'Иван',
      thirdName: 'Иванович',
      email: 'mail1@gmail.com',
      login: 'user1',
    },
    {
      id: 2,
      secondName: 'Петров',
      primaryName: 'Петр',
      thirdName: 'Сергеевич',
      email: 'mail2@gmail.com',
      login: 'user2',
    },
    {
      id: 3,
      secondName: 'Сергеев',
      primaryName: 'Григорий',
      thirdName: 'Викторович',
      email: 'mail3@gmail.com',
      login: 'user3',
    },
    {
      id: 4,
      secondName: 'Федоров',
      primaryName: 'Виктор',
      thirdName: 'Федорович',
      email: 'mail4@gmail.com',
      login: 'user4',
    },
    {
      id: 5,
      secondName: 'Хвастунов',
      primaryName: 'Сергей',
      thirdName: 'Петрович',
      email: 'mail5@gmail.com',
      login: 'user5',
    },
    {
      id: 6,
      secondName: 'Григорьев',
      primaryName: 'Федор',
      thirdName: 'Григорьевич',
      email: 'mail6@gmail.com',
      login: 'user6',
    },
  ]
  const initForm = {id: null, secondName: '', primaryName: '', thirdName: '', email: '', login: ''}

  // Set state
  // const [edit, setEdit] = useState(false)
  const [users, setUsers] = useState(initUsers)
  const [currentUser, setCurrentUser] = useState(initForm)
  const [modal, setModal] = useState({
    edit: false,
    add: false,
    del: false,
    modalId: 1
  })

  // CRUD
  const addUser = user => {
    user.id = users.length + 1
    setUsers([user, ...users])
  }
  const delUser = id => {
    setUsers(users.filter(user => user.id !== id))
    setModal({...modal, del: false, modalId: null})
  }

  const checkUser = id => {
    console.log(id)
    setModal({...modal, del: true, modalId: id})
  }

  const updateUser = (id, updatedUser) => {
    // setEdit(false)
    setUsers(users.map(user => (user.id === id ? updatedUser : user)))
  }
  const editRow = user => {
    // setEdit(true)
    setModal({...modal, edit: true})
    setCurrentUser({
      id: user.id,
      secondName: user.secondName,
      primaryName: user.primaryName,
      thirdName: user.thirdName,
      email: user.email,
      login: user.login
    })
  }

  return (
    <>
      <AddUser
        addUser={addUser}
        active={modal.add}
        setActive={setModal}
      />
      <Table
        users={users}
        setUsers={setUsers}
        editRow={editRow}
        delUser={delUser}
        active={modal.del}
        checkUser={checkUser}
        modalId={modal.modalId}
        setActive={setModal}
      />
      <EditUser
        // edit={edit}
        // setEdit={setEdit}
        currentUser={currentUser}
        updateUser={updateUser}
        active={modal.edit}
        setActive={setModal}
      />
    </>
  );
}
