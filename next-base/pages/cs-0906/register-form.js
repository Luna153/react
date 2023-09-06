import { useState } from 'react';

export default function RegisterForm() {
  // 狀態初始化屬性名稱和欄位名稱一致
  const [user, setUser] = useState({
    fullname: '',
    email: '',
    password: '',
    repassword: '',
  });

  //所有欄位共用的事件處理函式
  const handleFieldChange = (e) => {
    // {[e.target.name]: e.target.value}
    //^^^^^^^^^^^^^^計算後得來的屬性名稱(computed property names)
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer
    //1 2 步
    const newUser = { ...user, [e.target.name]: e.target.value };
    //第3步
    setUser(newUser);
  };

  const handleSubmit = (e) => {};

  return (
    <>
      <h1>會員註冊表單</h1>
      <form onSubmit={handleSubmit}>
        <label>
          姓名:{' '}
          <input
            type="text"
            name="fullname"
            value={user.fullname}
            onChange={handleFieldChange}
          />
        </label>
        <br />
        <label>
          Email:{' '}
          <input
            type="text"
            name="email"
            value={user.email}
            onChange={handleFieldChange}
          />
        </label>
        <br />
        <label>
          密碼 :{' '}
          <input
            type="password"
            name="password"
            value={user.password}
            onChange={handleFieldChange}
          />
        </label>
        <br />
        <label>
          確認密碼 :{' '}
          <input
            type="password"
            name="repassword"
            value={user.repassword}
            onChange={handleFieldChange}
          />
        </label>
        <br />
        <button type="submit">送出</button>
      </form>
    </>
  );
}
