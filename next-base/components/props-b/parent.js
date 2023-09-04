// 共三種設定屬性方式:
// 父傳子
// 子傳父
// 子傳子

import { useState } from 'react';
import ChildA from './child-a';
import ChildB from './child-b';

export default function Parent() {
  //   const [pData, setPData] = useState('parent data');

  //專門提供給子女B設定狀態值回父母元件用
  const [dataFromChild, setDataFromChild] = useState('');
  return (
    <>
      <h1>Parent</h1>
      {/* <p>來自child-b的資料: {dataFromChild}</p> */}
      {/* 子女A得到資料 */}
      <ChildA dataFromChild={dataFromChild} /> {/* (取得值)父母傳到ChildA */}
      {/* 子女B設定資料 */}
      <ChildB setDataFromChild={setDataFromChild} />
      {/* (設定值)ChildB傳值給父母 */}
    </>
  );
}
