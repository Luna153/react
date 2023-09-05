// import { useContext } from 'react';
// import { AuthContext } from '@/context/auth';
// 用Link元件取代<a>
import Link from 'next/link';
import { useAuth } from '@/hooks/use-auth';

export default function Profile() {
  //解構AuthContext中帶的 auth, setAuth
  //   const { auth, setAuth } = useContext(AuthContext);
  const { auth } = useAuth();

  return (
    <>
      <h1>會員資料頁</h1>
      <p>目前登入狀態: {auth.isAuth ? '登入中' : '未登入'}</p>
      <p>會員姓名: {auth.isAuth ? auth.userData.name : ''}</p>
      <p>使用者名稱: {auth.isAuth ? auth.userData.usename : ''}</p>
      <p>會員Email: {auth.isAuth ? auth.userData.email : ''}</p>
      <br />
      <a href="/cs-0904/user/login">資料頁a</a>
      <br />
      <Link href="/cs-0904/user/login">資料頁Link</Link>
      {/* 使用Link元件取代a連結，才不會導致重新整理頁面跳轉，可以讓Context保持住 */}
    </>
  );
}
