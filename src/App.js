import React from 'react';
import { range } from 'd3';
import { Face } from './Face';
import './App.css';

const width = 160;
const height = 160;

const array = range(6 * 3);

export const App = () => {
  return array.map((index) => (
    <Face
      key={array[index]}
      width={width}
      height={height}
      centerX={width / 2}
      centerY={width / 2}
      strokeWidth={6 + Math.random() * 3}
      eyeOffSetX={20 + Math.random() * 9}
      eyeOffSetY={20 + Math.random() * 15}
      eyeRadius={5 + Math.random() * 10}
      mouthWidth={7 + Math.random() * 9}
      mouthRadius={30 + Math.random() * 10}
    />
  ));
};
