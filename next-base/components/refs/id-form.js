import React from 'react';

export default function IdForm() {
  return (
    <>
      <h2>IdForm</h2>
      <input type="text" id="my-input" />
      <button
        onClick={() => {
          document.getElementById('my-input').focus();
        }}
      >
        聚焦(focus)
      </button>
      <button
        onClick={() => {
          document.getElementById('my-input').blur();
        }}
      >
        失焦(blur)
      </button>
      <button
        onClick={() => {
          console.log(document.getElementById('my-input').value);
        }}
      >
        獲得值
      </button>
    </>
  );
}
