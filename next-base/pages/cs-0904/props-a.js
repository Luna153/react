//注意命名規則:有三種
import React from 'react';
import Parent from '@/components/props-a/parent';
//props import parent, parent import child
//<xxx/>渲染
//結果:props>parent>child
export default function PropsA() {
  return (
    <>
      <Parent />
    </>
  );
}
