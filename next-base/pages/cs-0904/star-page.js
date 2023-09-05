//page
import { useState } from 'react';
import Star from '@/components/star';
// 引入components內的star(star-page那支)

export default function StarPage() {
  //   const [start, setStart] = useState(3);
  // 預設星星數useState(x)
  const [value1, setValue1] = useState(2);
  const [value2, setValue2] = useState(3);
  const [value3, setValue3] = useState(4);

  return (
    <>
      {/* Star為自訂元件 */}
      <Star startRating={value1} onRatingChange={setValue1} />
      <Star startRating={value2} onRatingChange={setValue2} />
      <Star startRating={value3} onRatingChange={setValue3} />
      {/* 盡量不要用onChange這種命名 */}
      {/* 
        ------------------測試:--------------
      <Star startRating={1} />
      <Star startRating={5} />
      <button
        onClick={() => {
          setStart(1);
        }}
      >
        set start = 1
      </button>
      <button
        onClick={() => {
          setStart(5);
        }}
      >
        set start = 5
      </button> */}
    </>
  );
}
