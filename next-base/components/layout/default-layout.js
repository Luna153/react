import Navbar from './navbar'
import Footer from './footer'
// 預設版型
export default function DefaultLayout({ children }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  )
}
