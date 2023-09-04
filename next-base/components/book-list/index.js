import { useState } from 'react';
// 範例資料
import data from '@/data/books.json';
import BookItem from './book-item';

export default function BookList() {
  // 擴充原本書籍的資料，多一個fav屬性(布林值，預設為false)，代表有/沒有加入收藏
  const initState = data.map((v) => {
    return { ...v, fav: false };
  });

  // 宣告初始化的狀態
  const [books, setBooks] = useState(initState);

  // 純函式: 只作狀態改變(第1,2步)
  // 切換fav屬性改變
  const toggleFav = (books, isbn) => {
    return books.map((v) => {
      // 展開每個成員時，如果符合條件(v.isbn===isbn)則反相屬性fav
      if (v.isbn === isbn) return { ...v, fav: !v.fav };
      else return { ...v };
    });
  };

  // 3. 設定回原本的狀態中
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
          {books.map((v) => {
            {
              /* 解構展開所有要傳到子元件Item的各屬性，之後一個個分開傳 */
            }
            const { isbn, title, author, fav } = v;

            return (
              <BookItem
                key={isbn} //key加在map中的callback return最外圍元素
                isbn={isbn}
                title={title}
                author={author}
                fav={fav}
                // handleToggleFav={handleToggleFav}
                handleToggleFavByIsbn={() => {
                  handleToggleFav(isbn);
                }}
              />
            );
          })}
        </tbody>
      </table>
    </>
  );
}
