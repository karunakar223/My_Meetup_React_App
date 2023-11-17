import React from 'react'

const TopicContext = React.createContext({
  input: '',
  topic: 'ARTS_AND_CULTURE',
  isRegistered: false,
  error: false,

  onChangeInput: () => {},
  onChangeTopic: () => {},
  register: () => {},
  updateError: () => {},
})

export default TopicContext
