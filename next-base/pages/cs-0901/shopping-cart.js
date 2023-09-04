import { useState } from 'react';
//引入元件useState->宣告物件->輸出預設函式export return->
const initialProducts = [
  {
    id: 0,
    name: '小熊餅乾',
    count: 1,
  },
  {
    id: 1,
    name: '巧克力豆餅乾',
    count: 5,
  },
  {
    id: 2,
    name: '小老板海苔',
    count: 2,
  },
];

export default function ShoppingCart() {
  const [products, setProducts] = useState(initialProducts);

  // 純函式:只做狀態改變(地1.2步)
  // 只做對應id的某商品count屬性改變
  const updateCount = (products, id, value) => {
    return products.map((v) => {
      // 展開每個成員，如果符合條件(v.id===id)則count:v.count+value
      if (v.id === id) return { ...v, count: v.count + value };
      else return { ...v };
    });
  };

  // 純函式:只做狀態改變(地1.2步)
  // 只做對應id的某商品從物件陣列中移除
  const remove = (products, id) => {
    return products.filter((v) => v.id !== id);
  };

  // 3. 設定回原本的狀態中
  const handleIncrement = (id) => {
    setProducts(updateCount(products, id, 1));
  };
  const handleDecrement = (id) => {
    setProducts(updateCount(products, id, -1));
  };
  const handleRemove = (id) => {
    setProducts(remove(products, id)); //在-按鈕上做
  };
  return (
    <ul>
      {products.map((product) => (
        <li key={product.id}>
          {product.name} (<b>{product.count}</b>)
          <button
            onClick={() => {
              handleIncrement(product.id);
            }}
          >
            +
          </button>
          <button
            onClick={() => {
              // 如果商品數量目前是1，則進行移除
              if (product.count === 1) {
                handleRemove(product.id);
              } else {
                // 否則遞減商品
                handleDecrement(product.id);
              }
            }}
          >
            –
          </button>
        </li>
      ))}
    </ul>
  );
}
