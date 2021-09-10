import React from 'react';
import './Table.css'
import {Modal} from "../Modal/Modal";

export const Table = ({users, editRow, delUser, active, setActive, checkUser, modalId}) => {

  return (
    <>
      <Modal active={active} setActive={setActive} title={'Удаление пользователя'}>
        <div className='modal__content'>
          <div className='modal__delete'>Удалить выбранного пользователя?</div>
          <div className='modal__actions'>
            <button className='modal__button cancel' onClick={() => setActive({...active, del: false})}>Отменить
            </button>
            <button className='modal__button submit' onClick={() => delUser(modalId)}>Удалить</button>
          </div>
        </div>
      </Modal>
      <table>
        <thead>
        <tr>
          <th>Фамилия</th>
          <th>Имя</th>
          <th>Отчество</th>
          <th>E-mail</th>
          <th>Логин</th>
          <th>{''}</th>
        </tr>
        </thead>
        <tbody>
        {users.length > 0 ? (
          users.map(user => (
            <tr key={user.id}>
              <td>{user.secondName}</td>
              <td>{user.primaryName}</td>
              <td>{user.thirdName}</td>
              <td>{user.email}</td>
              <td>{user.login}</td>
              <td>
                <button
                  onClick={() => {
                    editRow(user)
                  }}
                >
                  Edit
                </button>
                <button
                  onClick={() => checkUser(user.id)}
                  className=""
                >
                  Delete
                </button>
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan={3}>Таблица пуста</td>
          </tr>
        )}
        </tbody>
      </table>
    </>
  )
}