import React, { useState } from 'react'

import Modal from 'mm-simple-modal'
import 'mm-simple-modal/dist/index.css'

const App = () => {
  const [showModal, setShowModal] = useState(false)

  //Function to close the modal
  const closeModal = () => {
    showModal && setShowModal(false)
  }

  return (
    <div className='App'>
      <h1>React Modal</h1>
      <button className='btn' onClick={() => setShowModal(true)}>
        show Modal
      </button>
      <Modal show={showModal} onCloseModal={closeModal}>
        Message in Modal
      </Modal>
    </div>
  )
}

export default App
