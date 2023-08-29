// 導入 css module 檔案， style 會是一個物件
import styles from '@/styles/jsx-b.module.css';

export default function JsxB() {
  return (
    <>
      {/* style 屬性一定要是物件，不然程式會錯誤無法執行 */}
      {/* <div class="card" style="width: 18rem"; fontSize: "20px";> */}
      {/* 第一種解法: style屬性改物件值 */}
      {/* <div class="card" style={{width: '18rem', fontSize: '20px'}}> */}
      {/* 第二種解法: css moudule */}
      {/* <div class={`card ${styles.w18}`}> */}
      {/* 第三種解法: styled-jsx */}
      <div class="card w18">
        <img src="/images/react.png" class="card-img-top" />
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the cards content.
          </p>
          <a href="#" class="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
      <style jsx>
        {`
          img {
            width: 200px;
          }
          .w18 {
            width: 18rem;
            font-size: 20px;
          }
        `}
      </style>
    </>
  );
}
