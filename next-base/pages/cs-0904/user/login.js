//context+app+pages
// import { useContext } from 'react';
//導入context
// import { AuthContext } from '@/context/auth';
// 用Link元件取代<a>
import Link from 'next/link';
import { useAuth } from '@/hooks/use-auth';

export default function Login() {
  //解構AuthContext中帶的 auth, setAuth
  //   const { auth, setAuth } = useContext(AuthContext);
  const { auth, setAuth } = useAuth();
  return (
    <>
      <h1>會員登入頁</h1>
      <p>目前登入狀態: {auth.isAuth ? '登入中' : '未登入'}</p>
      <p>ID: {auth.isAuth ? auth.userData.id : ''}</p>
      <p>Name: {auth.isAuth ? auth.userData.name : ''}</p>
      <p>Usename: {auth.isAuth ? auth.userData.usename : ''}</p>
      <p>Email: {auth.isAuth ? auth.userData.email : ''}</p>
      <button
        onClick={() => {
          setAuth({
            isAuth: true,
            userData: {
              id: 1,
              name: '哈利',
              username: 'herry',
              email: 'herry@test.com',
            },
          });
        }}
      >
        登入
      </button>
      <br />
      <a href="/cs-0904/user/profile">資料頁a</a>
      <br />
      <Link href="/cs-0904/user/profile">資料頁Link</Link>
      {/* 使用Link元件取代a連結，才不會導致重新整理頁面跳轉，可以讓Context保持住 */}
    </>
  );
}
