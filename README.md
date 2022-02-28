# mm-simple-modal

> Made with create-react-library

[![NPM](https://img.shields.io/npm/v/mm-simple-modal.svg)](https://www.npmjs.com/package/mm-simple-modal) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

https://www.npmjs.com/package/mm-simple-modal

## Install

```bash
npm install --save mm-simple-modal
```

## Usage

This is a simple example of mm-simple-modal.
You have to set a state for the modal and closeModal function in the parent component.

```jsx
import React, { useState } from 'react'

import Modal from 'mm-simple-modal'
import 'mm-simple-modal/dist/index.css'

const App = () => {
  const [showModal, setShowModal] = useState(false)

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
```

### Props

| Props        |   Type   | Required | Default |                             Description |
| :----------- | :------: | :------: | :-----: | --------------------------------------: |
| show         |   Bool   | Required |  False  |   State allows you to display the modal |
| onCloseModal | Function | Required |    -    | Function allows you to remove the modal |
| children     |  String  | Required |    -    |                       Add content modal |

## License

MIT © [MouniaFT](https://github.com/MouniaFT)
