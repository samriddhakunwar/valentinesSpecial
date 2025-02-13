import { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import Confetti from 'react-confetti';

// Styled container for the form
const FormContainer = styled.div`
  padding: 20px;
  text-align: center;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 90vw;  /* Responsive width */
  height: 90vh; /* Responsive height */
  max-width: 800px;
  max-height: 600px;
  background: rgba(255, 255, 255, 0.85);
  border-radius: 15px;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.3);
`;

// Styled GIF
const GifImage = styled.img`
  width: 300px; /* Adjust size as needed */
  height: auto;
  margin-bottom: 20px;
`;

// Basic button styles
const Button = styled.button`
  padding: 25px 50px;
  background: #ff6b6b;
  color: white;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  font-size: 18px;
  margin: 25px;
  transition: background-color 0.3s ease;

  &:hover {
    background: #d63447;
  }
`;

// "No" button - can teleport anywhere
const TeleportButton = styled(Button)`
  position: fixed;
  transition: transform 0.2s ease;
  z-index: 9999;
`;

const Dateform = () => {
  const [response, setResponse] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [confettiVisible, setConfettiVisible] = useState(false);
  const teleportButtonRef = useRef(null);

  const handleResponse = (answer) => {
    setResponse(answer);
    setIsSubmitted(true);

    if (answer === 'Yes') {
      setConfettiVisible(true);
      alert(`💌 You chose: ${answer} 💌`);
    } else {
      setConfettiVisible(false);
      alert(`💔 You chose: ${answer} 💔`);
    }
  };

  const teleportButton = () => {
    const button = teleportButtonRef.current;

    if (button) {
      const screenWidth = window.innerWidth;
      const screenHeight = window.innerHeight;

      const buttonWidth = button.offsetWidth;
      const buttonHeight = button.offsetHeight;

      // Ensure the button stays within screen bounds
      const maxX = screenWidth - buttonWidth;
      const maxY = screenHeight - buttonHeight;

      const randomX = Math.floor(Math.random() * maxX);
      const randomY = Math.floor(Math.random() * maxY);

      // Apply new position
      button.style.left = `${randomX}px`;
      button.style.top = `${randomY}px`;
    }
  };

  useEffect(() => {
    if (confettiVisible) {
      // Stop confetti after 5 seconds
      const timer = setTimeout(() => {
        setConfettiVisible(false);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [confettiVisible]);

  return (
    <FormContainer>
      {confettiVisible && <Confetti />}
      
      {/* Cute Valentine GIF */}
      <GifImage src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExdjZnc3dzbm9jdHZoaXYxcTA4eWM2ZTBiaXZqNDJ3bHNlZWZyYTEwNCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/sNPeJFq6YNEvLZdcqX/giphy.gif" alt="Cute Valentine GIF" />
      
      <h3>Will you be my Valentine?</h3>

      <div>
        <Button onClick={() => handleResponse('Yes')}>Yes</Button>
        <TeleportButton
          ref={teleportButtonRef}
          onMouseEnter={teleportButton} // Trigger teleport on hover
          onClick={() => handleResponse('No')}
        >
          No
        </TeleportButton>
      </div>
    </FormContainer>
  );
};

export default Dateform;
