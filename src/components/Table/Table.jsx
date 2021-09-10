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
                <svg onClick={() => {
                  editRow(user)
                }}
                     xmlns="http://www.w3.org/2000/svg"
                     style={{height: '24px', width: '24px', cursor: 'pointer'}}
                     fill="none"
                     stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/>
                </svg>
                <svg onClick={() => checkUser(user.id)}
                     xmlns="http://www.w3.org/2000/svg"
                     style={{height: '24px', width: '24px', cursor: 'pointer'}}
                     fill="none"
                     stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/>
                </svg>
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