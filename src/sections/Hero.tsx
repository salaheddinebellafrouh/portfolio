import memojiImage from '@/assets/images/memoji-computer.png';
import Image from 'next/image';
import ArrowDown from '@/assets/icons/arrow-down.svg';
import grainImage from '@/assets/images/grain.jpg';
import StarIcon from '@/assets/icons/star.svg'
import SparkleIcon from '@/assets/icons/sparkle.svg'
import { HeroOrbit } from '@/components/HeroOrbit';

export const HeroSection = () => {
  return <div className='relative z-0 w-full overflow-x-hidden max-w-full py-20 sm:py-32 md:py-48 lg:py-60'>
    <div
      className="absolute inset-0"
      style={{
        maskImage:
          "linear-gradient(to bottom, transparent, black 10%, black 70%, transparent)",
        WebkitMaskImage:
          "linear-gradient(to bottom, transparent, black 10%, black 70%, transparent)",
      }}
    >
      <div className='absolute inset-0 -z-30 opacity-5' style={{ backgroundImage: `url(${grainImage.src})` }}></div>
      <div className='size-[645px] hero-ring'></div>
      <div className='size-[845px] hero-ring'></div>
      <div className='size-[1045px] hero-ring'></div>
      <div className='size-[1245px] hero-ring'></div>
      <HeroOrbit size={800} rotation={-72}>
        <StarIcon className="size-28 text-emerald-300" />
      </HeroOrbit>
      <HeroOrbit size={550} rotation={20}>
        <StarIcon className="size-12 text-emerald-300" />
      </HeroOrbit>
      <HeroOrbit size={590} rotation={98}>
        <StarIcon className="size-8 text-emerald-300" />
      </HeroOrbit>
      <HeroOrbit size={430} rotation={-14}>
        <SparkleIcon className="size-8 text-emerald-300/20" />
      </HeroOrbit>
      <HeroOrbit size={440} rotation={79}>
        <SparkleIcon className="size-5 text-emerald-300/20" />
      </HeroOrbit>
      <HeroOrbit size={530} rotation={178}>
        <SparkleIcon className="size-10 text-emerald-300/20" />
      </HeroOrbit>
      <HeroOrbit size={710} rotation={144}>
        <SparkleIcon className="size-14 text-emerald-300/20" />
      </HeroOrbit>
      <HeroOrbit size={720} rotation={90}>
        <div className="size-3 rounded-full bg-emerald-300/20" >
        </div>
      </HeroOrbit>
      <HeroOrbit size={520} rotation={-41}>
        <div className="size-2 rounded-full bg-emerald-300/20" >
        </div>
      </HeroOrbit>
      <HeroOrbit size={650} rotation={-5}>
        <div className="size-2 rounded-full bg-emerald-300/20" >
        </div>
      </HeroOrbit>
    </div>
    <div className="container">
      <div className='flex flex-col items-center'>
        <Image src={memojiImage} className='size-[100px]' alt="person peeking from behind laptop" />
        <div className='bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex items-center gap-3 rounded-lg'>
          <div className='bg-green-500 size-2.5 rounded-full'></div>
          <div></div>
          <div className='text-sm font-medium'>Available for new projects</div>
        </div>
      </div>
      <div className='max-w-lg mx-auto'>
        <h1 className='font-serif text-3xl md:text-5xl text-center mt-8 tracking-wide'>Building Exceptional User Experiences</h1>
        <p className='mt-4 text-center text-white/60 md:text-lg'>I’m passionate about turning ideas into clean, user-friendly interfaces.
          Every project I work on is designed to not only look grea t but also feel
          intuitive and responsive. My goal is to create digital experiences that leave a lasting
          impression and truly connect with users.</p>
      </div>
      <div className='flex flex-col md:flex-row justify-center items-center mt-8 gap-4'>
        <button className='inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl'>
          <span>Explore My work</span>
          <ArrowDown className="size-4" />
        </button>
        <button className='inline-flex items-center gap-2 border border-white bg-white text-gray-900 h-12 px-6 rounded-xl'>
          <span>👋</span>
          <span className='font-semibold'>Let's Connect</span>
        </button>
      </div>
    </div>

  </div>;
};
