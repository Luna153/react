import { useState, useEffect } from 'react';
import Link from 'next/link';
// https://my-json-server.typicode.com/eyesofkids/json-fake-data/products
export default function List() {
  // !重要!注意1. 初始值: 陣列至少要用空陣列作初始值。
  // !重要!注意2. 應用程式執行期間，狀態都一定要保持同種資料類型
  // 建議在開發時，先把陣列樣貌範例寫在註解出來，ex.
  //   [{
  //     "id": "5",
  //     "picture": "https://via.placeholder.com/150",
  //     "stock": 6,
  //     "name": "Google Pixel 5",
  //     "price": 17000,
  //     "tags": "安卓,大螢幕"
  //   }]
  const [products, setProducts] = useState([]);

  // 向伺服器要求資料，設定到狀態中
  const getProducts = async () => {
    const res = await fetch(
      'https://my-json-server.typicode.com/eyesofkids/json-fake-data/products'
    );

    const data = await res.json();

    console.log(data);
    // 設定到狀態中 -> 會觸發重新渲染(re-render)
    if (Array.isArray(data)) setProducts(data);
  };

  // didMount 初次渲染"後", 向伺服器要求資料，設定到狀態中
  useEffect(() => {
    getProducts();
  }, []);

  // 觀察渲染情況
  console.log('render');

  return (
    <>
      <h1>商品列表</h1>
      <ul>
        {/* 以下程式碼實際上要執行兩次，第一次是空陣列，第二次才會有真正從伺服器獲得的資料 */}
        {products.map((v, i) => {
          return (
            <li key={v.id}>
              <Link href={`/cs-0908/product/${v.id}`}>{v.name}</Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}
