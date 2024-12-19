"use client";

import { CodeInput } from "@/components/CodeInput";
import { useEffect, useState } from "react";
import { useCodeEmail } from "../hooks/useCodeEmail";
import { Button } from "@mui/material";

export const CodeForm = () => {
  const [code, setCode] = useState<(string | null)[]>([null, null, null, null]);
  const { mutate: codeEmail, error } = useCodeEmail();

  useEffect(() => {
    setCode([null, null, null, null]);
  }, [error]);

  const onSubmit = (data: (string | null)[]) => {
    const code = data.join("");

    codeEmail({
      data: {
        code: code,
      },
    });
  };

  return (
    <>
      <div className="flex flex-col gap-3 text-sm">
        <div className="flex flex-col gap-2 ">
          <CodeInput
            value={code}
            onChange={setCode}
            onFirstComplete={onSubmit}
          />
          <span>Reenviar código</span>
        </div>

        {error && <span className="text-red-600">{error?.message}</span>}
      </div>

      <Button
        disabled={!error}
        className="rounded-lg w-full"
        variant="outlined"
      >
        Confirmar código
      </Button>
    </>
  );
};
