'use client';

import Image from 'next/image';
import { useTransition } from 'react';
import { toast } from 'sonner';

import { MAX_HEARTS, POINTS_TO_REFILL } from '@/constant';

import { refillHearts } from '@/actions/user-progress';
import { createStripeUrl } from '@/actions/user-subscription';

import { Button } from '@/components/ui/button';

type Props = {
  hearts: number;
  points: number;
  hasActiveSubscription: boolean;
};

export const Items = ({ hearts, points, hasActiveSubscription }: Props) => {
  const [pending, startTransition] = useTransition();

  const onRefillHearts = () => {
    if (pending || hearts === MAX_HEARTS || points < POINTS_TO_REFILL) {
      return;
    }

    startTransition(() => {
      refillHearts().catch(() => toast.error('Something went wrong'));
    });
  };

  const onUpgrade = () => {
    startTransition(() => {
      createStripeUrl()
        .then((response) => {
          if (response.data) {
            window.location.href = response.data;
          }
        })
        .catch(() => toast.error('Something went wrong'));
    });
  };

  return (
    <ul className='w-full'>
      <div className='flex items-center w-full p-4 gap-x-4 border-t-2'>
        <Image src='/heart.svg' alt='Heart' width={60} height={60} />
        <div className='flex-1'>
          <p className='text-neutral-700 font-bold text-base lg:text-xl'>
            Refill hearts
          </p>
        </div>
        <Button
          onClick={onRefillHearts}
          disabled={
            pending || hearts === MAX_HEARTS || points < POINTS_TO_REFILL
          }
        >
          {hearts === MAX_HEARTS ? (
            'full'
          ) : (
            <div className='flex items-center'>
              <Image src='/points.svg' alt='Points' width={20} height={20} />
              <p>{POINTS_TO_REFILL}</p>
            </div>
          )}
        </Button>
      </div>
      <div className='w-full flex items-center p-4 pt-8 gap-x-4 border-t-2'>
        <Image src='/unlimited.svg' alt='Unlimited' width={60} height={60} />
        <div className='flex-1'>
          <p className='text-neutral-700 font-bold text-base lg:text-xl'>
            Unlimited hearts
          </p>
        </div>
        <Button onClick={onUpgrade} disabled={pending}>
          {hasActiveSubscription ? 'settings' : 'upgrade'}
        </Button>
      </div>
    </ul>
  );
};
