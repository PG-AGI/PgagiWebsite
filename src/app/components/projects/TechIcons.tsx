import React, { JSX } from 'react';
import { FaReact, FaRobot, FaMicrophone, FaLink, FaCube } from 'react-icons/fa';

import {
  SiTailwindcss,
  SiTypescript,
  SiWeb3Dotjs,
  SiBlockchaindotcom,
  SiFramer,
} from 'react-icons/si';

export const techIconMap: Record<string, JSX.Element> = {
  'React.js': (
    <FaReact
      style={{
        width: '2.5rem',
        height: '2.5rem',
      }}
    />
  ),
  TailwindCSS: (
    <SiTailwindcss
      style={{
        width: '2.5rem',
        height: '2.5rem',
      }}
    />
  ),
  'Framer Motion': (
    <SiFramer
      style={{
        width: '2.5rem',
        height: '2.5rem',
      }}
    />
  ),
  'AI Systems': (
    <FaRobot
      style={{
        width: '2.5rem',
        height: '2.5rem',
      }}
    />
  ),
  'AI Agents': (
    <FaRobot
      style={{
        width: '2.5rem',
        height: '2.5rem',
      }}
    />
  ),
  'Growth AI': (
    <FaRobot
      style={{
        width: '2.5rem',
        height: '2.5rem',
      }}
    />
  ),
  Automation: (
    <FaCube
      style={{
        width: '2.5rem',
        height: '2.5rem',
      }}
    />
  ),
  'Voice AI': (
    <FaMicrophone
      style={{
        width: '2.5rem',
        height: '2.5rem',
      }}
    />
  ),
  'Voice + NLP': (
    <FaMicrophone
      style={{
        width: '2.5rem',
        height: '2.5rem',
      }}
    />
  ),
  Web3: (
    <SiWeb3Dotjs
      style={{
        width: '2.5rem',
        height: '2.5rem',
      }}
    />
  ),
  Blockchain: (
    <SiBlockchaindotcom
      style={{
        width: '2.5rem',
        height: '2.5rem',
      }}
    />
  ),
  TypeScript: (
    <SiTypescript
      style={{
        width: '2.5rem',
        height: '2.5rem',
      }}
    />
  ),
  LinkedIn: (
    <FaLink
      style={{
        width: '2.5rem',
        height: '2.5rem',
      }}
    />
  ),
};
