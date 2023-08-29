// react不使用html寫介面
// 使用jsx=>下面 return() 裡面那段

// 導入 react 中的使用狀態勾子

import { useState, Fragment } from 'react';
// 新增 Fragment 參數 => 下面<>裡面也要加

// 預設輸出 function / class
export default function Counter() {
  // 宣告狀態
  // [getter獲得值的變數, setter設定值的變數]=useState(初始值)
  const [total, setTotal] = useState(0);

  // let t = 0;

  // 人造事件
  // return (
  //   <h1
  //     onClick={() => {
  //       setTotal(total + 1);
  // t+=1
  // console.log(t)
  // }}
  //解決紅線方法一
  //   role="presentation"
  // >
  //   {total}
  // </h1>
  //   );
  // }

  // 提升hoist => 可以先呼叫再宣告
  // function sum(a, b){
  //   return a+b
  // }

  // 先呼叫再宣告會"參照錯誤"
  // const sum = function(a, b){
  //   return a+b

  return (
    // <></>JSX要由括號包起來才能編譯
    // 上面 import 要新增參數
    // <Fragment>
    //   <h1>Hello</h1>
    //   <p>xxx</p>
    // </Fragment>
    <>
      {/* <form>
        <div class="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          <label className="form-check-label" for="exampleCheck1">
            Check me out
          </label>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form> */}
      {/* img 沒有/結束標籤會報錯 */}
    </>
  );
}
