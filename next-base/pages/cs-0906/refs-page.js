import React from 'react';
import IdForm from '@/components/refs/id-form';
import RefsForm from '@/components/refs/refs-form';

export default function RefsPage() {
  return (
    <>
      <h1>Refs範例</h1>
      <RefsForm />
      <RefsForm />
      <hr />
      <IdForm />
      <IdForm />
    </>
  );
}
