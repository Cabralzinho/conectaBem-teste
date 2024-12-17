'use client';

import { WelcomeSectionHeader } from '@/components/WelcomeSectionHeader';
import { CodeForm } from '@/features/confirm-code/components/CodeForm';
// import { useSession } from '@/stores/useSession';
import { Button } from '@mui/material';
import { FaRegQuestionCircle } from 'react-icons/fa';

export default function ConfirmCode() {
  // const { session } = useSession();

  // console.log(session);

  return (
    <main className="flex justify-center">
      <div className="flex flex-col md:max-w-[450px] justify-center gap-8">
        <WelcomeSectionHeader
          href="/auth"
          title={`Digite o código enviado para email@email.com!`}
        />

        <CodeForm />

        <div className="flex flex-col gap-4 text-gray-600">
          <span className="">
            Não se esqueça de verificar sua caixa de spam, caso não encontre
            nosso e-mail
          </span>
          <div className="flex items-center gap-2">
            <FaRegQuestionCircle />

            <span className="">Precisa de ajuda?</span>
          </div>
          <Button disabled className="rounded-lg w-full" variant="contained">
            Confirmar código
          </Button>
          <Button
            href="/auth"
            className="text-center text-red-500"
            variant="outlined"
            color="error"
          >
            Sair
          </Button>
        </div>
      </div>
    </main>
  );
}
