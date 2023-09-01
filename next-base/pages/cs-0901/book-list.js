import { useState } from 'react';
import Image from 'next/image';

// 範例資料
import data from '@/data/books.json';

// 實心圖
import bookmarkIconFill from '@/assets/bookmark-fill.svg';
// 空心圖
import bookmarkIcon from '@/assets/bookmark.svg';

function BookList() {
  // 先擴充原本書籍的資料，多一個fav屬性(布林值,預設false)，代表有/沒有加入收藏
  const initState = data.map((v) => {
    return { ...v, fav: false };
  });
  console.log(data)
  console.log(initState)

  // 宣告初始化的狀態
  const [books, setBooks] = useState(initState);

  // 純函式:只做狀態改變(第1,2步)
  // 切換fav屬性改變
  const toggleFav = (books, isbn) => {
    return books.map((v) => {
      // 展開每個成員時，如果符合條件(v.isbn===isbn)則反向屬性fav
      if (v.isbn === isbn) return { ...v, fav: !v.fav };
      else return { ...v };
    });
  };
  //3.設定回原本的狀態中
  const handleToggleFav = (isbn) => {
    setBooks(toggleFav(books, isbn));
  };
  return (
    <>
      <h1>書籍清單</h1>
      <table>
        <thead>
          <tr>
            <th>ISBN</th>
            <th>title</th>
            <th>author</th>
            <th>加入收藏</th>
          </tr>
        </thead>
        <tbody>
          {books.map((v, i) => {
            return (
              <tr key={v.isbn}>
                <td>{v.isbn}</td>
                <td>{v.title}</td>
                <td>{v.author}</td>
                <td>
                  <Image
                    src={v.fav ? bookmarkIconFill : bookmarkIcon}
                    alt=""
                    onClick={() => {
                      handleToggleFav(v.isbn)
                    }}
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default BookList;
