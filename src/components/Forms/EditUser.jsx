import React, {useState, useEffect} from 'react';
import './Form.css'
import {Modal} from "../Modal/Modal";

export const EditUser = ({currentUser, updateUser, active, setActive}) => {
  const [user, setUser] = useState(currentUser)

  useEffect(
    () => {
      setUser(currentUser)
    },
    [currentUser, updateUser]
  )
  // Handlers
  const handleChange = e => {
    const {name, value} = e.target
    setUser({...user, [name]: value})
  }
  const handleSubmit = e => {
    e.preventDefault()
    updateUser(user.id, user)
    setActive(false)
  }

  return (
    <>
      <Modal active={active} setActive={setActive}>
        <form
          onSubmit={handleSubmit}
        >
          <label>Фамилия</label>
          <input type="text" name="secondName" value={user.secondName} onChange={handleChange}/>
          <label>Имя</label>
          <input type="text" name="primaryName" value={user.primaryName} onChange={handleChange}/>
          <label>Отчество</label>
          <input type="text" name="thirdName" value={user.thirdName} onChange={handleChange}/>
          <label>E-mail</label>
          <input type="email" name="email" value={user.email} onChange={handleChange}/>
          <label>Логин</label>
          <input type="text" name="login" value={user.login} onChange={handleChange}/>
          <button type='submit'>Update user</button>
          <button className="button muted-button">
            Cancel
          </button>
        </form>
      </Modal>
    </>
  )
}