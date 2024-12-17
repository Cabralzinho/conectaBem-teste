'use client';

import { Button } from '@mui/material';
import { signIn } from 'next-auth/react';
import { FaFacebook } from 'react-icons/fa';

export default function FacebookSign() {
  return (
    <Button
      className="text-black bg-white"
      variant="outlined"
      size="large"
      startIcon={<FaFacebook className="text-blue-600" />}
      onClick={() => signIn('facebook')}
    >
      Entrar com o Facebook
    </Button>
  );
}
