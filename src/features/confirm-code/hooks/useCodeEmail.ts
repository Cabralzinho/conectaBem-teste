// import { useSession } from '@/stores/useSession';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';

const code = '1234';

export const useCodeEmail = () => {
  const router = useRouter();
  // const { session } = useSession();

  return useMutation({
    mutationFn: async ({ data }: Args) => {
      if (data.code !== code) {
        throw new Error('Código inválido');
      }
    },
    onSuccess: () => {
      router.refresh();

      // if (!session?.email?.isConfirmed) {
      //   return router.push(`/auth/register`);
      // }

      router.push(`/auth/register`);


      // router.push(`/`);
    },
    onError: (error) => {
      router.refresh();

      console.log(error.message);
    },
  });
};

type Data = {
  code: string;
};

type Args = {
  data: Data;
  onSucess?: () => void;
  onError?: () => void;
};
