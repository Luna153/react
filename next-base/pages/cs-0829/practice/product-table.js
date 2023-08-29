// 導入時就自動轉為JS資料格式
import data from '@/data/products.json';
// import styles from '@/styles/product-table.module.css';

export default function ProductTable() {
  //要的是products
  console.log(data.products);
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>圖片</th>
            <th>名稱</th>
            <th>價格</th>
          </tr>
        </thead>
        <tbody>
          {data.products.map((v, i) => {
            return (
              <tr key={v.id}>
              <td>{v.id}</td>
                <td>
                  <img src={v.picture} />
                </td>
                <td>{v.name}</td>
                <td>{v.price}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
