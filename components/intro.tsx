'use client';

import Image from 'next/image';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { BsArrowRight } from 'react-icons/bs';
import { RiNotionFill } from 'react-icons/ri';
import { IoOpenOutline } from 'react-icons/io5';
import {
  FaGithubSquare,
} from 'react-icons/fa';
import { useSectionInView } from '@/lib/hooks';
import { useActiveSectionContext } from '@/context/active-section-context';

export default function Intro() {
  const { ref } = useSectionInView('Home', 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      id='home'
      ref={ref}
      className='mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]'
    >
      <div className='flex items-center justify-center'>
        <div className='relative'>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: 'tween', duration: 0.2 }}
          >
            <Image
              src='https://avatars.githubusercontent.com/u/109952479?v=4'
              alt='Cheolung12'
              width='192'
              height='192'
              quality='95'
              priority={true}
              className={`rounded-full h-32 w-32 border-[0.35rem] border-slate object-cover shadow-xl relative`}
            />
          </motion.div>

          <motion.span
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: 'spring',
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
            className='text-4xl absolute bottom-0 right-0'
          >
            👋🏻
          </motion.span>
        </div>
      </div>

      <motion.div
        className='px-2 text-2xl font-medium !leading-[1.5] sm:text-4xl mt-8 mb-10 flex flex-col items-center justify-center'
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className='mb-3'>Frontend 개발자 홍철웅입니다.</span>

        <span className='text-base sm:text-lg'>
          사용자의 입장을 먼저 생각하는 주니어 개발자 입니다.
        </span>
        <span className='text-base sm:text-lg'>
          개발 중 더 나은 UI/UX에 대하여 끊임없이 고민하며,
        </span>
        <span className='text-base sm:text-lg'>
          언제든 새로운 지식을 받아들일 준비가 되어 있습니다.
        </span>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className='flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium'
      >
        <Link
          href='#contact'
          className='group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition'
          onClick={() => {
            setActiveSection('Contact');
            setTimeOfLastClick(Date.now());
          }}
        >
          Contact me{' '}
          <BsArrowRight className='opacity-70 group-hover:translate-x-1 transition' />
        </Link>
        <a
          href='/resume.pdf'
          target='_blank'
          className='group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10'
        >
          Open Resume{' '}
          <IoOpenOutline className='opacity-60 group-hover:-translate-y-1 transition' />
        </a>
        <a
          href='https://cheolung12.notion.site/Study-fded1b6c25374bf8b3e0978e882e2e45'
          target='_blank'
          className='bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:text-gray-950 hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60'
        >
          <RiNotionFill />
        </a>
        <a
          href='https://github.com'
          target='_blank'
          className='bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:text-gray-950 hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60'
        >
          <FaGithubSquare />
        </a>
      </motion.div>
    </section>
  );
}
