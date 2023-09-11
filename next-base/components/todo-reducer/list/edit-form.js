import { useState } from 'react';

export default function EditForm({ id, text, handleUpdateText }) {
  const [inputText, setInputText] = useState(text);
  return (
    <>
      <input
        type="text"
        // 影響SEO
        // autoFocus 
        value={inputText}
        onChange={(e) => {
          setInputText(e.target.value);
        }}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            handleUpdateText(id, inputText);
          }
        }}
      />
      <button
        onClick={() => {
          handleUpdateText(id, inputText);
        }}
      >
        儲存
      </button>
    </>
  );
}
