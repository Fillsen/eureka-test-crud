import React from 'react';
import './Modal.css'

export const Modal = ({active, setActive, children, title}) => {
  return (
    <>
      <div className={active ? 'modal active' : 'modal'} onClick={() => setActive(false)}>
        <div className={active ? 'modal_content active' : 'modal_content'} onClick={e => e.stopPropagation()}>
          <div className='modal_header'>
            <div className='modal_title'>{title}</div>
          </div>
          <div className='modal_children'>
            {children}
          </div>
        </div>
      </div>
    </>
  );
};