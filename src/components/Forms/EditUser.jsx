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
      <Modal active={active} setActive={setActive} title={'Редактирование пользователя'}>
        <form
          onSubmit={handleSubmit}
        >
          <label>Фамилия</label>
          <input
            placeholder='Введите фамилию'
            type="text"
            name="secondName"
            value={user.secondName}
            onChange={handleChange}
            required
          />
          <label>Имя</label>
          <input
            placeholder='Введите имя'
            type="text"
            name="primaryName"
            value={user.primaryName}
            onChange={handleChange}
            required
          />
          <label>Отчество</label>
          <input
            placeholder='Введите отчество'
            type="text" name="thirdName"
            value={user.thirdName}
            onChange={handleChange}
            required
          />
          <label>E-mail</label>
          <input
            placeholder='Введите электронную почту'
            type="email"
            name="email"
            value={user.email}
            onChange={handleChange}
            required
          />
          <label>Логин</label>
          <input
            placeholder='Введите логин'
            type="text"
            name="login"
            value={user.login}
            onChange={handleChange}
            required
          />
          <div className='form__actions'>
            {/*<button className='form__button cancel' onClick={() => setActive({...active, edit: false})}>Cancel</button>*/}
            <button className='form__button submit' type='submit'>Сохранить</button>
          </div>
        </form>

      </Modal>
    </>
  )
}