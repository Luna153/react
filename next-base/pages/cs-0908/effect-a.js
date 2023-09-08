import { useState, useEffect } from 'react';

export default function EffectA() {
  const [total, setTotal] = useState(0);
  const [force, setForce] = useState(false);
  //-----------------------------------------------------------
  //   樣式1 : 每次render都會執行一次(很少用到的樣式，禿常出現在自訂勾子裡)
  useEffect(() => {
    console.log('第一種 : 每次render都會執行這裡');
  });
  //-----------------------------------------------------------
  //   樣式2 : (使用百分比70~80%) : 只有第一次渲染" 後 (After) "執行一次，之後不會再執行
  //  對比之前的類別行元件中的 componentDidMount(掛載) 生命週期方法，但並非完全相同
  useEffect(() => {
    console.log('第二種 : 只有第一次渲染"後(After)"執行一次');
  }, []);
  // ^^^這裡要保持空陣列，這稱為相依性陣列，裡面要放置"相依變數們"，空陣列表示不與任何變數相依，套用預設行為=初次render時執行一次
  //  只有兩種東西可以當相依變數: 屬性props、狀態state
  //-----------------------------------------------------------
  //  樣式3 : (使用百分比20~30%) : didMount = didUpdate
  useEffect(() => {
    console.log(
      '第三種 : 第一次渲染"後(After)"執行一次 + 每次total有變"後(After)"都會在改變後執行一次'
    );
  }, [total]);
  //-----------------------------------------------------------

  return (
    <>
      {/* 用profiler觀察 藍色框框表示有render */}
      {/* rerender */}
      <h1>useEffect基本範例</h1>
      <h1>{total}</h1>
      <button
        onClick={() => {
          setTotal(total + 1);
        }}
      >
        +1
      </button>

      <button
        onClick={() => {
          setForce(!force);
        }}
      >
        強制re-render
      </button>
    </>
    // note: 兩種情況才會重新渲染=>
    // 1.接收到新的 props
    // 2.本身有更新 useState

    // 有渲染，不代表畫面改變
    // render(虛擬DOM->真實DOM) vs paint(畫面改變)
  );
}
