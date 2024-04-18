import Image from 'next/image';
import { redirect } from 'next/navigation';

import { getUserProgress } from '@/db/queries';

import { StickyWrapper } from '@/components/sticky-wrapper';
import { UserProgress } from '@/components/user-progress';
import { FeedWrapper } from '@/components/feed-wrapper';

import { Items } from '@/app/(main)/shop/items';

const ShopPage = async () => {
  const userProgressData = getUserProgress();

  const [userProgress] = await Promise.all([userProgressData]);

  if (!userProgress || !userProgress.activeCourse) {
    redirect('/courses');
  }

  return (
    <div className='flex flex-row-reverse gap-[48px] px-6'>
      <StickyWrapper>
        <UserProgress
          activeCourse={userProgress.activeCourse}
          hearts={userProgress.hearts}
          points={userProgress.points}
          hasActiveSubscription={false}
        />
      </StickyWrapper>
      <FeedWrapper>
        <div className='flex flex-col w-full items-center'>
          <Image src='/shop.svg' alt='Shop' width={90} height={90} />
          <h1 className='text-center font-bold text-2xl my-6'>
            <span className='text-sky-500'>Sh</span>
            <span className='text-yellow-500'>op</span>
          </h1>
          <p className='text-muted-foreground text-center text-lg mb-6'>
            Spend your points on cool stuff.
          </p>
          <Items
            hearts={userProgress.hearts}
            points={userProgress.points}
            hasActiveSubscription={false} // TODO: add user subscription
          />
        </div>
      </FeedWrapper>
    </div>
  );
};
export default ShopPage;
