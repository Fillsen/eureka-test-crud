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

  const handleCheck = () => {
    return user.secondName === '' || user.primaryName === '' || user.thirdName === '' || user.email === '' || user.login === ''
  }


  return (
    <>
      <div className='form__header'>
        <div className='form__title'>Пользователи</div>
        <button className='form__button submit' onClick={() => setActive({...active, add: true})}>Добавить</button>
      </div>
      <Modal active={active} setActive={setActive} title={'Создание пользователя'}>
        <form
          onSubmit={handleSubmit}
        >
          <label>Фамилия</label>
          <input type="text" name="secondName" value={user.secondName} onChange={handleChange} required/>
          <label>Имя</label>
          <input type="text" name="primaryName" value={user.primaryName} onChange={handleChange} required/>
          <label>Отчество</label>
          <input type="text" name="thirdName" value={user.thirdName} onChange={handleChange} required/>
          <label>E-mail</label>
          <input type="email" name="email" value={user.email} onChange={handleChange} required/>
          <label>Логин</label>
          <input type="text" name="login" value={user.login} onChange={handleChange} required/>
          <div className='form__actions'>
            <button
              className={handleCheck() ? 'form__button' : 'form__button submit'}
              type='submit'
              disabled={handleCheck()}
            >
              Add new user
            </button>
          </div>
        </form>
      </Modal>
    </>
  )
}
