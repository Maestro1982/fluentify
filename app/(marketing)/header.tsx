import Image from 'next/image';
import { Loader } from 'lucide-react';

import {
  ClerkLoaded,
  ClerkLoading,
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from '@clerk/nextjs';

import { Button } from '@/components/ui/button';
import { ModeToggle } from '@/components/mode-toggle';

export const Header = () => {
  return (
    <header className='h-20 w-full border-b-2 border-slate-200 dark:border-slate-800 px-4'>
      <div className='lg:max-w-screen-lg mx-auto flex items-center justify-between h-full'>
        <div className='pt-8 pl-4 pb-7 flex items-center gap-x-3'>
          <Image src='/mascot.svg' alt='Mascot' width={40} height={40} />
          <h1 className='text-2xl font-extrabold text-lime-600 tracking-wide'>
            Fluentify
          </h1>
        </div>
        <div className='flex items-center space-x-4'>
          <ClerkLoading>
            <Loader className='w-5 h-5 text-muted-foreground animate-spin' />
          </ClerkLoading>
          <ClerkLoaded>
            <SignedIn>
              <UserButton afterSignOutUrl='/' />
            </SignedIn>
            <SignedOut>
              <SignInButton
                mode='modal'
                afterSignInUrl='/learn'
                afterSignUpUrl='/learn'
              >
                <Button size='lg' variant='ghost'>
                  Login
                </Button>
              </SignInButton>
            </SignedOut>
          </ClerkLoaded>
          <div className='ml-4 lg:ml-0'>
            <ModeToggle />
          </div>
        </div>
      </div>
    </header>
  );
};
