import { useState } from 'react'

export default function EditForm({ id, text, dispatch }) {
  const [inputText, setInputText] = useState(text)

  return (
    <>
      <input
        type="text"
        value={inputText}
        onChange={(e) => {
          setInputText(e.target.value)
        }}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            // handleUpdateText(id, inputText)
            dispatch({ type: 'update-text', payload: { id, text: inputText } })
          }
        }}
      />
    </>
  )
}