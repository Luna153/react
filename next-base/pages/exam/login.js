import { React } from 'react';
import { useState } from 'react';

export default function Login() {
  const [user, setUser] = useState({
    account: '',
    password: '',
  });

  const originErrors = {
    account: '',
    password: '',
  };
  const [errors, setErrors] = useState(originErrors);

  const handleFieldChange = (e) => {
    // console.log(e.target.name, e.target.type, e.target.value);
    //1 2 步
    const newUser = { ...user, [e.target.name]: e.target.value };
    //第3步
    setUser(newUser);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    //信號值
    // 檢查name, email必填
    let hasErrors = false;
    const newErrors = { ...originErrors };

    if (!user.account) {
      // 如果沒填
      newErrors.account = '請填寫帳號';
      hasErrors = true;
    }

    if (!user.password) {
      // 如果沒填
      newErrors.password = '請填寫帳號';
      hasErrors = true;
    }

    if (hasErrors) {
      setErrors(newErrors);
      return; //跳出提供的函式
    }

    //清空所有錯誤訊息
    setErrors(originErrors);

    //檢查無誤，送到伺服器
    if (user.account === 'user123' && user.password === '123456') {
      setLogin(!login);
      alert('登入成功');
    }
  };
  const [show, setShow] = useState(false);
  const [login, setLogin] = useState(false);
  const loginForm = (
    <>
      <h1>會員登入頁</h1>
      <form onSubmit={handleSubmit}>
        <label>
          帳號：
          <input
            name="account"
            type="text"
            value={user.account}
            onChange={handleFieldChange}
          />
        </label>
        <span>{errors.account}</span>
        <br />

        <label>
          密碼：
          <input
            name="password"
            type={show ? 'text' : 'password'}
            value={user.password}
            onChange={handleFieldChange}
          />
          <input
            checked={show}
            type="checkbox"
            onChange={() => {
              setShow(!show);
            }}
          />
          顯示
        </label>
        <span>{errors.password}</span>
        <br />
        <button type="submit">登入</button>
      </form>
    </>
  );
  const logout = (
    <>
      <button
        onClick={() => {
          setLogin(!login);
          setUser({
            account: '',
            password: '',
          });
        }}
      >
        登出
      </button>
    </>
  );
  return <>{login ? logout : loginForm}</>;
}
