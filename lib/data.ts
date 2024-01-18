import React from 'react';
import { CgWorkAlt } from 'react-icons/cg';
import {
  FaReact,
  FaNodeJs,
  FaBootstrap,
  FaJava,
  FaAws,
  FaLaptopCode,
} from 'react-icons/fa';
import { LuGraduationCap } from 'react-icons/lu';
import { AiOutlineHtml5 } from 'react-icons/ai';
import { RiCss3Line } from 'react-icons/ri';
import { IoLogoJavascript } from 'react-icons/io5';
import {
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiRedux,
  SiSequelize,
  SiSocketdotio,
  SiExpress,
  SiSpringboot,
} from 'react-icons/si';
import { GrMysql } from 'react-icons/gr';
import syosImg from '@/public/syos.png';
import appoImg from '@/public/appointment.png';
import bluejeansImg from '@/public/bluejeans.png';

export const links = [
  {
    name: 'Home',
    hash: '#home',
  },
  {
    name: 'Skills',
    hash: '#skills',
  },
  {
    name: 'Projects',
    hash: '#projects',
  },
  {
    name: 'Experience',
    hash: '#experience',
  },
  {
    name: 'Contact',
    hash: '#contact',
  },
] as const;

export const projectsData = [
  {
    title: 'SYOS',
    subtitle: '데스크탑 공유 & 추천 웹 서비스',
    roles: ['메인페이지 디자인 및 구현', '채팅', '게시물 상세'],
    description:
      '첫 웹 풀스택 프로젝트입니다. 추후 백엔드와의 원할환 의사소통을 위하여 DB까지 직접 만져보았고, RDS, S3도 활용하였습니다. 또한 순수 CSS로 스타일링하여 기초적인 CSS를 잘 다루게된 계기가 되었습니다.',
    tags: [
      'HTML',
      'CSS',
      'JavaScript',
      'Node.js',
      'express',
      'MySQL',
      'Sequelize',
    ],
    imageUrl: syosImg,
    githubLink: 'https://github.com/cheolung12/SYOS',
    postLink: [],
  },
  {
    title: '내일어때?',
    description:
      'Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.',
    tags: ['React', 'Javascript', 'Tailwind', 'Redux', 'Kakao Map API'],
    imageUrl: appoImg,
    githubLink: 'https://github.com/cheolung12/appointment-making-project',
    postLink: [],
  },
  {
    title: 'BlueJeans',
    description:
      'Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.',
    tags: [
      'React',
      'Javascript',
      'Tailwind',
      'Open AI API',
      'react-speech-recognition',
      'SpringBoot',
      'JPA',
      'MySQL',
    ],
    imageUrl: bluejeansImg,
    githubLink: 'https://github.com/cheolung12/BlueJeans',
    postLink: [],
  },
  {
    title: 'Portfolio',
    description:
      'Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.',
    tags: [
      'React',
      'Typescript',
      'Next.js',
      'Tailwind',
      'Framer-motion',
      'resend',
    ],
    imageUrl: bluejeansImg,
    githubLink: 'https://github.com/cheolung12/portfolio',
    postLink: [],
  },
  // ...
] as const;

export const skillsData = [
  {
    name: 'HTML',
    icon: React.createElement(AiOutlineHtml5),
  },
  {
    name: 'CSS',
    icon: React.createElement(RiCss3Line),
  },
  {
    name: 'JavaScript',
    icon: React.createElement(IoLogoJavascript),
  },
  {
    name: 'TypeScript',
    icon: React.createElement(SiTypescript),
  },
  {
    name: 'React',
    icon: React.createElement(FaReact),
  },
  {
    name: 'Next.js',
    icon: React.createElement(SiNextdotjs),
  },
  {
    name: 'Node.js',
    icon: React.createElement(FaNodeJs),
  },
  {
    name: 'TailwindCSS',
    icon: React.createElement(SiTailwindcss),
  },
  {
    name: 'Redux',
    icon: React.createElement(SiRedux),
  },
  {
    name: 'Bootstrap',
    icon: React.createElement(FaBootstrap),
  },
  {
    name: 'MySQL',
    icon: React.createElement(GrMysql),
  },
  {
    name: 'Sequelize',
    icon: React.createElement(SiSequelize),
  },
  {
    name: 'Socket IO',
    icon: React.createElement(SiSocketdotio),
  },
  {
    name: 'Express',
    icon: React.createElement(SiExpress),
  },
  {
    name: 'Java',
    icon: React.createElement(FaJava),
  },
  {
    name: 'SpringBoot',
    icon: React.createElement(SiSpringboot),
  },
  {
    name: 'AWS',
    icon: React.createElement(FaAws),
  },
] as const;

export const experiencesData = [
  {
    title: '국민대학교 소프트웨어학부',
    description:
      'I graduated after 6 months of studying. I immediately found a job as a front-end developer.',
    icon: React.createElement(LuGraduationCap), // tsx가 아닌 ts 파일이므로 <LuGraduationCap /> 이렇게 안하고 createElement함수 사용
    date: '- 2023.08',
  },
  {
    title: '포스코 x 코딩온 웹 풀스택 부트캠프',
    description:
      'I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.',
    icon: React.createElement(FaLaptopCode),
    date: '2019 - 2021',
  },
  {
    title: '...',
    description: '...',
    icon: React.createElement(CgWorkAlt),
    date: 'present',
  },
] as const;
