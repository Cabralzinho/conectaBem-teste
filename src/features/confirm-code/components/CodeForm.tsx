'use client';

import { CodeInput } from '@/components/CodeInput';
import { useState } from 'react';
import { useCodeEmail } from '../hooks/useCodeEmail';

export const CodeForm = () => {
  const [code, setCode] = useState<(string | null)[]>([null, null, null, null]);
  const { mutate: codeEmail } = useCodeEmail();

  const onSubmit = (data: (string | null)[]) => {
    const code = data.join('');

    codeEmail({
      data: {
        code: code,
      },
    });
  };

  return (
    <CodeInput value={code} onChange={setCode} onFirstComplete={onSubmit} />
  );
};
