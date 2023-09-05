//先決定狀態
import { useEffect, useState } from 'react';
// 導入.module.css檔案
import styles from './star.module.css';

export default function Star({ startRating = 0, onRatingChange=()=>{} }) {
  // 這裡的onRatingChange代表: 當評分改變時會回傳參數
  
  // anti-pattern(反樣式): 以props(屬性)作為state(狀態)的初始化值，或稱為derived state(衍生的狀態)
  // https://zh-hant.reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html
  // https://vhudyma-blog.eu/react-antipatterns-props-in-initial-state/
  // 一般而言，props作為state初始值應避免，除非只需要在內部狀態初始化而已，
  // 而且之後props不會再被更動，或元件不需要再反應其它更動時

  // click時的評比分數
  const [rating, setRating] = useState(0);
  // mouse enter時的評比分數
  const [hoverRating, setHoverRating] = useState(0);

  // 解決derived state(衍生的狀態)連動問題=>使用useEffect(()=>{})
  useEffect(() => {
    setRating(startRating);
  }, [startRating]);
  // ^^^^^^^^^^^^^^^^相依性陣列，意指監聽startRating如有更動時，在執行其中程式碼一次

  return (
    <>
      <div>
        {/* 快速產生五個成員都是1的陣列，表達是語法 */}
        {Array(5)
          .fill(1)
          .map((v, i) => {
            {
              /* 每顆星星的分數=i+1 */
            }
            const score = i + 1;

            return (
              <button
                className={styles['star-btn']}
                key={i}
                onClick={() => {
                  // 點按後設定分數到達狀態
                  setRating(score);
                  //回傳父母元件
                  //評分狀態改變會回傳
                  onRatingChange(score)
                }}
                onMouseEnter={() => {
                  setHoverRating(score);
                }}
                onMouseLeave={() => {
                  setHoverRating(0);
                }}
              >
                <span
                  // 判斷分數(score)如果小於等於目前的評分(rating)狀態，或小於等於目前的懸停評分，則套用亮起樣式
                  className={
                    score <= rating || score <= hoverRating
                      ? styles['on']
                      : styles['off']
                  }
                >
                  &#9733;
                </span>{' '}
              </button>
            );
          })}
      </div>
    </>
  );
}
// 使用module.css會在標籤的class新增一段亂碼
