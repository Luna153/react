import '@/styles/book-list.css';
// import { AuthContext } from '@/context/auth';
// import { useState } from 'react';
import { AuthProvider } from '@/hooks/use-auth';

export default function MyApp({ Component, pageProps }) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || ((page) => page);

  // 移動到hooks
  // const [auth, setAuth] = useState({
  //   isAuth: false,
  //   userData: {
  //     id: 0,
  //     name: '',
  //     username: '',
  //     email: '',
  //   },
  // });

  // 移動到hooks
  // return (
  //   <AuthContext.Provider value={{ auth, setAuth }}>
  //     {getLayout(<Component {...pageProps} />)}
  //   </AuthContext.Provider>
  // );

  return <AuthProvider>{getLayout(<Component {...pageProps} />)}</AuthProvider>;

  // 原本預設
  // return getLayout(<Component {...pageProps} />)
}
