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
import portfolioImg from '@/public/portfolio.png';

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
    description:
      '첫 웹 풀스택 팀 프로젝트입니다. 추후 백엔드와의 원할환 의사소통을 위하여 DB까지 직접 만져보았고, RDS, S3도 활용하였습니다. 순수 CSS로 스타일링하여 기초적인 CSS를 잘 다루게된 계기가 되었습니다.',
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
    demoLink: 'https://port-0-syos-2rrqq2blmiwyaxo.sel5.cloudtype.app/',
    githubLink: 'https://github.com/cheolung12/SYOS',
    postLink: 'https://cu1210.tistory.com/6',
  },
  {
    title: '내일어때?',
    subtitle: '약속시간 정하기 & 중간지점 찾기 웹 서비스',
    description:
      '제가 사용해보고 싶어서 만들어 본 개인프로젝트입니다. kakao map API를 공식문서를 참고하여 다양한 방법으로 활용하였고, Redux Toolkit을 활용해 상태관리를 해주었습니다.',
    tags: ['React', 'Javascript', 'Tailwind', 'Redux', 'Kakao Map API'],
    imageUrl: appoImg,
    demoLink:
      'https://web-appointment-making-project-euegqv2blnvns8kd.sel5.cloudtype.app/',
    githubLink: 'https://github.com/cheolung12/appointment-making-project',
    postLink: 'https://cu1210.tistory.com/8',
  },
  {
    title: 'Bluejeans',
    subtitle: '시니어를 위한 디지털 환경 제공 웹 서비스',
    description:
      '사회적 문제를 해결해 보고자 만들어본 팀 프로젝트입니다. 타겟이 명확한 만큼 UI/UX에 신경을 많이 썼고, Open AI API를 활용해 음성인식 기능이 있는 챗봇을 구현하고, springboot를 처음으로 사용해보았습니다.',
    tags: [
      'React',
      'Javascript',
      'Tailwind',
      'Open AI',
      'SpringBoot',
      'JPA',
      // 'MySQL',
    ],
    imageUrl: bluejeansImg,
    demoLink: 'https://www.bluejeansu.site/',
    githubLink: 'https://github.com/cheolung12/BlueJeans',
    postLink: 'https://cu1210.tistory.com/10',
  },
  {
    title: 'hongcheolung',
    subtitle: '포트폴리오 웹 사이트',
    description:
      'NextJS 13을 활용하여 만든 포트폴리오 사이트입니다. 스크롤 애니메이션과 이메일 보내기 기능이 있습니다.',
    tags: [
      'React',
      'Typescript',
      'Next.js',
      'Tailwind',
      'Framer-motion',
      'resend',
    ],
    imageUrl: portfolioImg,
    demoLink: 'https://hongcheolung.vercel.app/',
    githubLink: 'https://github.com/cheolung12/Portfolio',
    postLink: 'https://cu1210.tistory.com/12',
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
      '자료구조, 알고리즘, 컴퓨터구조, 운영체제 등 컴퓨터공학에 관련한 필수 전공 지식들을 배웠습니다. 이를 통해 문제해결능력, 프로그래밍 기술, 컴퓨터 동작 원리등에 대해 더 자세히 알게되었습니다. ',
    icon: React.createElement(LuGraduationCap), // tsx가 아닌 ts 파일이므로 <LuGraduationCap /> 이렇게 안하고 createElement함수 사용
    date: 'ㅤ- 2023.08',
  },
  {
    title: '포스코 x 코딩온 웹 풀스택 부트캠프',
    description:
      '협업이 중요시되는 이 분야에서 성장하기 위해 풀스택 웹 교육을 듣게 되었습니다. 학사 과정에서 배우지 않은 기술들을 주로 배웠으며 다양한 사람들과의 협업 경험을 얻었습니다. ',
    icon: React.createElement(FaLaptopCode),
    date: '2019 - 2021ㅤ',
  },
  {
    title: '...',
    description: '...',
    icon: React.createElement(CgWorkAlt),
    date: 'ㅤpresent',
  },
] as const;
