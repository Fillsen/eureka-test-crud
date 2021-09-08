import React, {useState} from 'react';
import './Form.css'
import {Modal} from "../Modal/Modal";

export const AddUser = ({addUser, active, setActive}) => {
  const initForm = {id: null, secondName: '', primaryName: '', thirdName: '', email: '', login: ''}
  const [user, setUser] = useState(initForm)

  const handleChange = e => {
    const {name, value} = e.target
    setUser({...user, [name]: value})
  }

  const handleSubmit = e => {
    e.preventDefault()
    addUser(user)
    setUser(initForm)
    setActive(false)
  }

  return (
    <>
      <button onClick={() => setActive({...active, add: true})}>Test</button>
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
          <button type='submit'>Add new user</button>
          <button>Cancel</button>
        </form>
      </Modal>
    </>
  )
}
