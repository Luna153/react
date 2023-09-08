import { useState } from 'react';

export default function RegisterForm() {
  // 狀態初始化屬性名稱和欄位名稱一致
  const [user, setUser] = useState({
    fullname: '',
    email: '',
    password: '',
    repassword: '',
  });

  // 初始的錯誤訊息物件
  //一開始的錯誤訊息要獨立出來定義，原因是要假定每次使用者提交時，
  //所有錯誤訊息都是空的，換言之，每次提交都要重新檢查所有欄位
  const originErrors = {
    fullname: '',
    email: '',
    password: '',
    repassword: '',
  };

  //記錄錯誤訊息用的狀態
  const [errors, setErrors] = useState(originErrors);

  //所有欄位共用的事件處理函式
  const handleFieldChange = (e) => {
    console.log(e.target.name, e.target.type, e.target.value);
    // {[e.target.name]: e.target.value}
    //^^^^^^^^^^^^^^計算後得來的屬性名稱(computed property names)
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer
    //1 2 步
    const newUser = { ...user, [e.target.name]: e.target.value };
    //第3步
    setUser(newUser);
  };

  const handleSubmit = (e) => {
    //阻擋(取消)表單預設送出行為
    e.preventDefault();

    //對表單個欄位作檢查
    //另一種方式: FormData API
    //用於"可控的"與"不可控"表單元素
    //input tpye='file'欄位必為不可控元素，要用FormData才能處理
    const formData = new FormData(e.target);
    console.log(
      formData.get('fullname', formData.get('email'), formData.getAll('fruits'))
    );

    //信號值
    // 檢查name, email必填
    let hasErrors = false;
    const newErrors = { ...originErrors };

    //直接用狀態的值來檢查
    // if (user.fullname === '') {
    // if (user.fullname.length === 0) {
    // 空字串為falsy
    // if (!user.fullname) {
      //有填
    // } else {
      // 沒填
      // newErrors.fullname = '請填寫姓名';
      // hasErrors = true;
    // }
    
    if (!user.fullname) {
      // 如果沒填
      newErrors.fullname = '請填寫姓名';
      hasErrors = true;
    }

    if (user.email === '') {
      newErrors.email = '請填寫Email';
      hasErrors = true;
    }

    if (hasErrors) {
      setErrors(newErrors);
      return; //跳出提供的函式
    }

    //清空所有錯誤訊息
    setErrors(originErrors);

    //檢查無誤，送到伺服器
    alert('檢查無誤，送到伺服器');
  };

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
        <span>{errors.fullname}</span>
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
        <span>{errors.email}</span>
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
        <label>
          喜歡的水果 :
          <input type="checkbox" name="fruits" value="西瓜" /> 西瓜
          <input type="checkbox" name="fruits" value="芒果" /> 芒果
        </label>
        <br />
        <button type="submit">送出</button>
      </form>
    </>
  );
}
