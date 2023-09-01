//先決定狀態
import { useState } from 'react';
// 導入.module.css檔案
import styles from '@/styles/star.module.css';

export default function Star() {
  //click時的評比分數
  const [rating, setRating] = useState(0);
  // mouse enter時的評比分數
  const [hoverRating, setHoverRating] = useState(0);

  return (
    <>
      <h1>星星評分範例</h1>
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
