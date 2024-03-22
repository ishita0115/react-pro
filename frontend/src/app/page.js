
import Link from 'next/link';
import Navbar from "./navbar/page";
import dynamic from 'next/dynamic';
import Profile from './profile/page';


export default function Home() {
  return (
    <>
      <Navbar />

      <div className='w-full h-2  '>
      <main className="slider-bg">     
      <Link href="/">
          <img src="https://static.realestateindia.com/rei/images/header_bg1.jpg" alt="homespere" />
      </Link>
      <Profile />
      </main>
      </div>
    </>
  );
}

const Map = dynamic(() => import('./map/page'), {
  ssr: false
});