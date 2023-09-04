//會員登入
//引入函式
import { createContext, useState, useContext } from 'react';

//導出
// 習慣上都以null 作為初始化值
export const AuthContext = createContext(null);

//新增元件(從app檔案裡面移過來)
export function AuthProvider({ children }) {
  const [auth, setAuth] = useState({
    isAuth: false,
    userData: {
      id: 0,
      name: '',
      username: '',
      email: '',
    },
  });

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
