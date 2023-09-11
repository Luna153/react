import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
// https://loading.io/css/
// 使用css modules導入樣式檔
import styles from '@/styles/product.module.css';

// https://my-json-server.typicode.com/eyesofkids/json-fake-data/products/{pid}
export default function Detail() {
  // 1.由router中要獲得動態路由pid(即檔案方括號中的名稱)
  // router.query中會包含pid屬性
  // router.isReady(布林值)，如果為true代表本頁面已完成水合作用(hydration)，router.query已經有值可以使用
  const router = useRouter();

  const [product, setProduct] = useState({
    id: '',
    picture: '',
    stock: 0,
    name: '',
    price: 0,
    tags: '',
  });

  // 信號狀態，控制仔入動畫出現與關閉
  const [isLoading, setIsLoading] = useState(true);

  // 向伺服器要求資料，設定到狀態中
  const getProduct = async (pid) => {
    try {
      const res = await fetch(
        'https://my-json-server.typicode.com/eyesofkids/json-fake-data/products/' +
          pid
      );

      const data = await res.json();

      console.log(data);
      // 設定到狀態中 -> 會觸發重新渲染(re-render)
      setProduct(data);
    } catch (e) {
      // 這裡可以作錯誤處理
      // setTimeout(() => {
      //   setIsLoading(false);
      // }, 2000);
      alert('伺服器連線失敗');
      console.error(e);
    }
  };

  //等候資料從伺服器獲得後，product資料設定完成後，再關閉載入動畫
  useEffect(() => {
    //如果狀態中已經成功設定到值時，2秒後關閉動畫
    if (product.id) {
      setTimeout(() => {
        setIsLoading(false);
      }, 2000);
    }
  }, [product]);

  // 獲得pid用的
  useEffect(() => {
    if (router.isReady) {
      // 如果載入動畫是關閉的，打開它準備載入資料
      if (!isLoading) setIsLoading(true);

      // 確保能得到router.query有值
      const { pid } = router.query;
      console.log(pid);
      // 有pid後，向伺服器要求資料，設定到狀態中
      getProduct(pid);
    }
    // eslint-disable-next-line
  }, [router.isReady, router.query]);
  // ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ 這裡一樣要監聽query，代表網址上的pid有改變

  // 載入指示動畫
  const loader = (
    <div className={styles['lds-spinner']}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );

  const productData = (
    <>
      <p>名稱: {product.name}</p>
      <p>價格: {product.price}</p>
    </>
  );

  return (
    <>
      <h1>商品詳細頁</h1>
      <div>{isLoading ? loader : productData}</div>
      <div>
        <ul>
          <li>
            <Link href="/cs-0908/product/3">相關商品id=3</Link>
          </li>
          <li>
            <Link href="/cs-0908/product/1">相關商品id=1</Link>
          </li>
        </ul>
      </div>
    </>
  );
}
