import Image from 'next/image';
import { redirect } from 'next/navigation';

import {
  getTopTenUsers,
  getUserProgress,
  getUserSubscription,
} from '@/db/queries';

import { StickyWrapper } from '@/components/sticky-wrapper';
import { UserProgress } from '@/components/user-progress';
import { FeedWrapper } from '@/components/feed-wrapper';

import { Separator } from '@/components/ui/separator';
import { Avatar, AvatarImage } from '@/components/ui/avatar';

const LeaderboardPage = async () => {
  const userProgressData = getUserProgress();
  const userSubscriptionData = getUserSubscription();
  const leaderboardData = getTopTenUsers();

  const [userProgress, userSubscription, leaderboard] = await Promise.all([
    userProgressData,
    userSubscriptionData,
    leaderboardData,
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
            <span className='text-sky-500'>Leader</span>
            <span className='text-yellow-500'>board</span>
          </h1>
          <p className='text-muted-foreground text-center text-lg mb-6'>
            See where you stand among other learners in the community.
          </p>
          <Separator className='mb-4 h-0.5 rounded-full' />
          {leaderboard.map((userProgress, index) => (
            <div
              key={userProgress.userId}
              className='w-full flex items-center p-2 px-4 rounded-xl hover:bg-gray-200/50 dark:hover:bg-slate-800'
            >
              {/* Ouput the position on the leaderboard through the index */}
              <p className='font-bold text-lime-700 mr-4'>{index + 1}</p>
              <Avatar className='border bg-lime-500 h-12 w-12 ml-3 mr-6'>
                <AvatarImage
                  src={userProgress.userImageScr}
                  alt='Image'
                  className='object-cover'
                />
              </Avatar>
              <p className='font-bold text-neutral-800 dark:text-slate-400 flex-1'>
                {userProgress.userName}
              </p>
              <p className='text-muted-foreground font-bold'>
                {userProgress.points}{' '}
                <span className='text-yellow-400 font-bold'>XP</span>
              </p>
            </div>
          ))}
        </div>
      </FeedWrapper>
    </div>
  );
};
export default LeaderboardPage;
