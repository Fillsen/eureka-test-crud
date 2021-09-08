import React, {useState} from 'react';
import './Table.css'
import {Modal} from "../Modal/Modal";

export const Table = ({users, editRow, delUser, active, setActive, checkUser, modalId}) => {

  return (
    <>
      <Modal active={active} setActive={setActive}>
        <button onClick={() => delUser(modalId)}>Удаляем?</button>
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
                  // onClick={() => setActive({...active, edit: true})}
                  // className=""
                >
                  Edit
                </button>
                <button
                  // onClick={() => delUser(user.id)}
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
            <td colSpan={3}>No users</td>
          </tr>
        )}
        </tbody>
      </table>
    </>
  )
}