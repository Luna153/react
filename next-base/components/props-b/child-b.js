import { useEffect, useState } from 'react';

export default function ChildB({ setDataFromChild }) {
  // 內部資料
  const [cData, setCData] = useState('child-b data');

  //   錯誤語法: 因為會產生錯誤也會有副作用
  //   setDataFromChild(cData);

  //   下面語法代表，在ChildB元件，第一次在頁面上渲染(render)完成後，執行其中的程式碼
  //   不用靠事件觸發，在渲染完成就會傳給父母
  useEffect(() => {
    setDataFromChild(cData);
  }, []);
  //   useEffect有三個參數useEffect(()=>{},[])

  return (
    <>
      <h1>ChildB</h1>
      <button
        onClick={() => {
          // 觸發事件，利用父母由props傳來的設定函式，回傳料給父母
          setDataFromChild(cData);
        }}
        // click回傳值給父母, 改變dataFromChild的值
      >
        送資料給父母
      </button>
    </>
  );
}
