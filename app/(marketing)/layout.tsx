import { Header } from '@/app/(marketing)/header';
import { Footer } from '@/app/(marketing)/footer';

type Props = {
  children: React.ReactNode;
};

const MarketingLayout = ({ children }: Props) => {
  return (
    <div className='min-h-screen flex flex-col'>
      <Header />
      <main className='flex flex-col flex-1 items-center justify-center'>
        {children}
      </main>
      <Footer />
    </div>
  );
};
export default MarketingLayout;
