import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

// https://my-json-server.typicode.com/eyesofkids/json-fake-data/products/{pid}
export default function Detail() {
  // 1.由router中要獲得動態路由pid(即檔案方括號中的名稱)
  // router.query中會包含pid屬性
  // router.isReady(布林值)，如果為true代表本頁面已完成水合作用(hydration)，router.query已經有值可以使用
  const router = useRouter()

  const [product, setProduct] = useState({
    id: '',
    picture: '',
    stock: 0,
    name: '',
    price: 0,
    tags: '',
  })

  // 向伺服器要求資料，設定到狀態中
  const getProduct = async (pid) => {
    const res = await fetch(
      'https://my-json-server.typicode.com/eyesofkids/json-fake-data/products/' +
        pid
    )

    const data = await res.json()

    console.log(data)
    // 設定到狀態中 -> 會觸發重新渲染(re-render)
    setProduct(data)
  }

  useEffect(() => {
    if (router.isReady) {
      // 確保能得到router.query有值
      const { pid } = router.query
      console.log(pid)
      // 有pid後，向伺服器要求資料，設定到狀態中
      getProduct(pid)
    }
    // eslint-disable-next-line
  }, [router.isReady])

  return (
    <>
      <h1>商品詳細頁</h1>
      <p>名稱: {product.name}</p>
      <p>價格: {product.price}</p>
    </>
  )
}