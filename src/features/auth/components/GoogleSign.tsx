'use client';

import { GoogleLogin } from '@react-oauth/google';
import { useGoogleLogin } from '../hooks/useGoogleLogin';

export const GoogleSign = () => {
  const { mutate: login } = useGoogleLogin();

  return (
    <GoogleLogin
      size="large"
      onSuccess={(data) =>
        login({
          data: {
            credential: data.credential as string,
          },
        })
      }
    />
  );
};
