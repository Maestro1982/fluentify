import Link from 'next/link';
import Image from 'next/image';

import { QUESTS } from '@/constant';

import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';

type Props = {
  points: number;
};

export const Quests = ({ points }: Props) => {
  return (
    <div className='border-2 rounded-xl p-4 space-y-4'>
      <div className='flex items-center justify-between w-full space-y-2'>
        <h3 className='text-lg font-bold'>Quests</h3>
        <Link href='/quests'>
          <Button variant='primaryOutline' size='sm'>
            View all
          </Button>
        </Link>
      </div>
      <ul className='w-full space-y-4'>
        {QUESTS.map((quest) => {
          const progress = (points / quest.value) * 100;
          return (
            <div
              key={quest.title}
              className='w-full flex items-center pb-4 gap-x-4'
            >
              <Image src='/points.svg' alt='Points' width={40} height={40} />
              <div className='flex flex-col w-full gap-y-1'>
                <p className='text-neutral-700 dark:text-slate-500 font-bold text-sm'>
                  {quest.title}
                </p>
                <Progress value={progress} className='h-2' />
              </div>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
