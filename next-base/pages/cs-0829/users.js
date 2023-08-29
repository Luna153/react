import React from 'react';
// 導入時就會轉換為 js 的資料類型
import data from '@/data/users.json';

export default function Users() {
  // 不是物件不能呼叫 API
  console.log(data.users);
  return (
    <ul>
      {data.users.map((v, i) => {
        return (
          <li key={v.id}>
            {v.name} {v.email}
          </li>
        );
      })}
    </ul>
  );
}
