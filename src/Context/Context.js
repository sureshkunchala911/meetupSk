import React from 'react'

const Context = React.createContext({
  inputValue: '',
  activeId: '',
  changeInput: () => {},
  changeTopic: () => {},
})

export default Context
