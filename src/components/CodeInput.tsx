'use client';

import React, { useEffect, useRef, useState } from 'react';

type CodeInputProps = {
  value: (string | null)[];
  onChange?: (value: (string | null)[]) => void;
  onFirstComplete?: (value: (string | null)[]) => void;
};

export const CodeInput = ({
  value,
  onChange,
  onFirstComplete,
}: CodeInputProps) => {
  const [hasFirstCompleted, setHasFirstCompleted] = useState(false);
  const refs = useRef<(HTMLInputElement | null)[]>([]);

  useEffect(() => {
    const isCompleted = value.every((item) => item);

    if (isCompleted && !hasFirstCompleted) {
      onFirstComplete?.(value);

      setHasFirstCompleted(true);
    }
  }, [value]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number,
  ) => {
    let formatedValue = e.target.value;

    formatedValue = formatedValue[formatedValue.length - 1];

    const newValue = [
      ...value.slice(0, index),
      formatedValue,
      ...value.slice(index + 1),
    ];

    onChange?.(newValue);

    refs.current[index + 1]?.focus();
  };

  return (
    <div className="flex w-full gap-4 text-center">
      {Array.from({ length: value.length }).map((_, index) => (
        <input
          onClick={() => {
            const input = refs.current[index];

            setTimeout(() => {
              input?.setSelectionRange(input.value.length, input.value.length);
            }, 0);
          }}
          onChange={(e) => handleChange(e, index)}
          ref={(ref) => {
            refs.current[index] = ref;
          }}
          value={value[index] || ''}
          key={index}
          className="px-2 py-6 rounded-lg w-full text-center border-2 border-inputCodeBorder focus:outline-inputCodeBorder text-inputCodeText font-bold"
          type='number'
        />
      ))}
    </div>
  );
};
