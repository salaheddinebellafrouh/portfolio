import memojiImage from '@/assets/images/memoji-computer.png'
import Image from 'next/image';
import ArrowDown from '@/assets/icons/arrow-down.svg'
export const HeroSection = () => {
  return <div className='py-32'> 
     <div className="container">
      <div className='flex flex-col items-center'>
      <Image src={memojiImage} className='size-[100px]' alt= "person peeking from behind laptop" />
     <div className='bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex items-center gap-3 rounded-lg'>
      <div className='bg-green-500 size-2.5 rounded-full'></div>
     <div></div>
     <div className='text-sm font-medium'>Available for new projects</div>
     </div>
     </div>
     <h1 className='font-serif text-3xl text-center mt-8 tracking-wide'>Building Exceptional User Experiences</h1>
     <p className='mt-4 text-center text-white/60'>I’m passionate about turning ideas into clean, user-friendly interfaces.
       Every project I work on is designed to not only look great but also feel 
       intuitive and responsive. My goal is to create digital experiences that leave a lasting
      impression and truly connect with users.</p>
     <div className='flex flex-col items-center'>
      <button className='inline-flex items-center gap-2 border border-white/15'>
        <span>Explore My work</span>
        <ArrowDown className="size-4"/>
      </button>
      <button>
        <span>👋</span>
        <span>Let's Connect</span>
      </button>
     </div>
     </div>

  </div>;
};
