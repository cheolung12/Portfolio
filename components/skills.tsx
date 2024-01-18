'use client';

import React from 'react';
import SectionHeading from './section-heading';
import { skillsData } from '@/lib/data';
import { useSectionInView } from '@/lib/hooks';
import { motion } from 'framer-motion';

export default function Skills() {
  const { ref } = useSectionInView('Skills');
  const fadeInAnimation = {
    initial: {
      opacity: 0,
      y: 100,
    },
    animate: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.05 * index,
      },
    }),
  };

  return (
    <section
      id='skills'
      ref={ref}
      className='mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40'
    >
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <SectionHeading>My skills</SectionHeading>
      </motion.div>
      <ul className='flex flex-wrap justify-center gap-2 text-lg text-gray-800'>
        {skillsData.map((skill, idx) => (
          <motion.li
            key={idx}
            initial='initial'
            whileInView='animate'
            variants={fadeInAnimation}
            viewport={{
              once: true,
            }}
            className='bg-white border border-black/[0.1] rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80'
          >
            <span className='flex justify-center items-center gap-1'>
              {' '}
              {skill.name} {skill.icon}{' '}
            </span>
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
