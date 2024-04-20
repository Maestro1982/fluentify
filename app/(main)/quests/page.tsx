import Image from 'next/image';
import { redirect } from 'next/navigation';

import { getUserProgress, getUserSubscription } from '@/db/queries';
import { QUESTS } from '@/constant';

import { StickyWrapper } from '@/components/sticky-wrapper';
import { UserProgress } from '@/components/user-progress';
import { FeedWrapper } from '@/components/feed-wrapper';

import { Progress } from '@/components/ui/progress';

const QuestsPage = async () => {
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
          <Image src='/quests.svg' alt='Quests' width={90} height={90} />
          <h1 className='text-center font-bold text-2xl my-6'>
            <span className='text-red-500'>Que</span>
            <span className='text-sky-500'>sts</span>
          </h1>
          <p className='text-muted-foreground text-center text-lg mb-6'>
            Complete quests by earning points.
          </p>
          <ul className='w-full'>
            {QUESTS.map((quest) => {
              const progress = (userProgress.points / quest.value) * 100;

              return (
                <div
                  key={quest.title}
                  className='w-full flex items-center p-4 gap-x-4 border-t-2'
                >
                  <Image
                    src='/points.svg'
                    alt='Points'
                    width={60}
                    height={60}
                  />
                  <div className='flex flex-col w-full gap-y-2'>
                    <p className='text-neutral-700 dark:text-slate-500 font-bold text-xl'>
                      {quest.title}
                    </p>
                    <Progress value={progress} className='h-3' />
                  </div>
                </div>
              );
            })}
          </ul>
        </div>
      </FeedWrapper>
    </div>
  );
};
export default QuestsPage;
