import Image from 'next/image';
import { SignInButton } from '@clerk/nextjs';

import { Button } from '@/components/ui/button';

export const Footer = () => {
  return (
    <footer className='hidden lg:block h-20 w-full border-t-2 border-slate-200 dark:border-slate-800 p-2'>
      <div className='max-w-screen-lg mx-auto flex items-center justify-evenly h-full'>
        <SignInButton
          mode='modal'
          afterSignInUrl='/learn'
          afterSignUpUrl='/learn'
        >
          <Button size='lg' variant='ghost' className='w-full'>
            <Image
              src='/hr.svg'
              alt='Croatian'
              width={40}
              height={32}
              className='mr-4 rounded-md'
            />
            Croatian
          </Button>
        </SignInButton>

        <SignInButton
          mode='modal'
          afterSignInUrl='/learn'
          afterSignUpUrl='/learn'
        >
          <Button size='lg' variant='ghost' className='w-full'>
            <Image
              src='/es.svg'
              alt='Spanish'
              width={40}
              height={32}
              className='mr-4 rounded-md'
            />
            Spanish
          </Button>
        </SignInButton>

        <SignInButton
          mode='modal'
          afterSignInUrl='/learn'
          afterSignUpUrl='/learn'
        >
          <Button size='lg' variant='ghost' className='w-full'>
            <Image
              src='/fr.svg'
              alt='French'
              width={40}
              height={32}
              className='mr-4 rounded-md'
            />
            French
          </Button>
        </SignInButton>

        <SignInButton
          mode='modal'
          afterSignInUrl='/learn'
          afterSignUpUrl='/learn'
        >
          <Button size='lg' variant='ghost' className='w-full'>
            <Image
              src='/it.svg'
              alt='Italian'
              width={40}
              height={32}
              className='mr-4 rounded-md'
            />
            Italian
          </Button>
        </SignInButton>

        <SignInButton
          mode='modal'
          afterSignInUrl='/learn'
          afterSignUpUrl='/learn'
        >
          <Button size='lg' variant='ghost' className='w-full'>
            <Image
              src='/jp.svg'
              alt='Japanese'
              width={40}
              height={32}
              className='mr-4 rounded-md'
            />
            Japanese
          </Button>
        </SignInButton>
      </div>
    </footer>
  );
};
