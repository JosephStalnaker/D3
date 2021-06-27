import React from 'react';
import { Mouth } from './Mouth';
import { Eyes } from './Eyes';
import { BackgroundCircle } from './BackgroundCircle';
import { FaceContainer } from './FaceContainer';

export const Face = ({
  width,
  height,
  centerX,
  centerY,
  strokeWidth,
  eyeOffSetX,
  eyeOffSetY,
  eyeRadius,
  mouthWidth,
  mouthRadius,
}) => (
  <FaceContainer
    width={width}
    height={height}
    centerX={centerX}
    centerY={centerY}
  >
    <BackgroundCircle
      radius={centerY - strokeWidth / 2}
      strokeWidth={strokeWidth}
    />
    <Eyes
      eyeOffSetX={eyeOffSetX}
      eyeOffSetY={eyeOffSetY}
      eyeRadius={eyeRadius}
    />
    <Mouth mouthRadius={mouthRadius} mouthWidth={mouthWidth} />
  </FaceContainer>
);
