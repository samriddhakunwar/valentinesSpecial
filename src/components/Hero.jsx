import { motion } from 'framer-motion';
import styled from 'styled-components';
import Dateform from './Dateform';
import React from 'react';

const HeroContainer = styled.div`
  background-image: url('https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExdnBpcmFteXJwemtrZDl1d2F1Zzd3ZjkybXg2aTZzYXdweDkzNWhtayZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/xTcnT2ZYSaCTdkTSmI/giphy.gif');
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background-size: cover; /* Make sure it covers the full screen */
  background-repeat: no-repeat;
  background-position: center;
`;

const Heart = styled(motion.div)`
  font-size: 64px;
  margin-bottom: 20px;
`;

const Hero = () => {
  return (
    <HeroContainer>
      <Heart 
        animate={{ y: [0, -10, 0] }} 
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        ❤️
      </Heart>
      <Dateform /> {/* The Valentine proposal form */}
    </HeroContainer>
  );
};

export default Hero;
