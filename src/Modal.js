import React from 'react'
import styles from './styles.module.css'
import PropTypes from 'prop-types'

/**
 * A component to display the Modal
 * @param { boolean } show state of the modal
 * @param { function } onCloseModal function to close the modal
 * @param { string } children content of the modal
 * @returns { React.Component }
 */

const Modal = ({ show, children, onCloseModal }) => {
  return (
    <div>
      {show && (
        <div className={styles.overlay}>
          <div className={styles.modal}>
            <button
              className={styles.modal_close}
              type='button'
              onClick={onCloseModal}
            >
              X
            </button>
            <div className={styles.modal_body}>{children}</div>
          </div>
        </div>
      )}
    </div>
  )
}

Modal.PropTypes = {
  show: PropTypes.bool.isRequired,
  onCloseModal: PropTypes.func.isRequired,
  children: PropTypes.string.isRequired
}

export default Modal
