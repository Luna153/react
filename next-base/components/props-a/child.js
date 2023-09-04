import React from 'react';
import PropTypes from 'prop-types';
//prop-types已安裝(看package.json)

export default function Child({ text = '預設值', price = 10, hasNum = false }) {
  //console.log(props)函式的傳入參數是物件
  //將傳入參數props改成解構賦值{}
  return (
    <div>
      <h1>Child</h1>
      <p>text: {text}</p>
      <p>price: {price}</p>
      <p>hasNum: {hasNum ? 'true' : 'false'}</p>
    </div>
  );
}

//類別(class) Fields(欄位/成員)標準
Child.PropTypes = {
  text: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  hasNum: PropTypes.bool.isRequired,
};
