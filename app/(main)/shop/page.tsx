import Image from 'next/image';
import { redirect } from 'next/navigation';

import { getUserProgress, getUserSubscription } from '@/db/queries';

import { StickyWrapper } from '@/components/sticky-wrapper';
import { UserProgress } from '@/components/user-progress';
import { FeedWrapper } from '@/components/feed-wrapper';

import { Items } from '@/app/(main)/shop/items';

const ShopPage = async () => {
  const userProgressData = getUserProgress();
  const userSubscriptionData = getUserSubscription();

  const [userProgress, userSubscription] = await Promise.all([
    userProgressData,
    userSubscriptionData,
  ]);

  if (!userProgress || !userProgress.activeCourse) {
    redirect('/courses');
  }

  // add !! to convert to boolean and ? because it can be null / undefined
  const isPro = !!userSubscription?.isActive;

  return (
    <div className='flex flex-row-reverse gap-[48px] px-6'>
      <StickyWrapper>
        <UserProgress
          activeCourse={userProgress.activeCourse}
          hearts={userProgress.hearts}
          points={userProgress.points}
          hasActiveSubscription={isPro}
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
            hasActiveSubscription={isPro}
          />
        </div>
      </FeedWrapper>
    </div>
  );
};
export default ShopPage;
