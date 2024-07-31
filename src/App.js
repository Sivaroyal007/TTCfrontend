import React, { useState } from 'react';
import { Box, Typography, Button, LinearProgress, styled } from '@mui/material';
import Coin from './images/Coin.png';

// Styled components
const CoinButton = styled(Button)({
  width: '150px',
  height: '150px',
  borderRadius: '50%',
  backgroundColor: '#ffd700',
  boxShadow: '0 0 20px rgba(255, 215, 0, 0.5)',
  '&:hover': {
    backgroundColor: '#ffcc00',
  },
});

const ProgressBarContainer = styled(Box)({
  width: '100%',
  position: 'relative',
  marginTop: '20px',
});

const ProgressBar = styled(LinearProgress)({
  height: '20px',
  borderRadius: '10px',
  width: '100%',
  backgroundColor: '#000000',
  '& .MuiLinearProgress-bar': {
    backgroundColor: '#ffd700',
  },
});

const ProgressText = styled(Typography)({
  position: 'absolute',
  right: '0',
  top: '50%',
  transform: 'translateY(-50%)',
  fontSize: '16px',
  fontWeight: 'bold',
  color: 'white',
  paddingRight: '10px',
});

const CoinCount = styled(Typography)({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  fontSize: '24px',
  fontWeight: 'bold',
  color: 'white',
});

const LevelBadge = styled(Typography)({
  position: 'absolute',
  top: '20px',
  left: '20px',
  background: 'linear-gradient(90deg, #ffd700, #d4af37)',
  padding: '10px 20px',
  borderRadius: '20px',
  fontWeight: 'bold',
  fontSize: '16px',
  color: '#ffffff',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
});

const CoinWallet = styled(Typography)({
  position: 'absolute',
  top: '20px',
  right: '20px',
  background: 'linear-gradient(90deg, #ffd700, #d4af37)',
  padding: '10px 20px',
  borderRadius: '20px',
  fontWeight: 'bold',
  fontSize: '16px',
  color: '#ffffff',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
});

const UserName = styled(Typography)({
  position: 'absolute',
  top: '20px',
  left: '50%',
  transform: 'translateX(-50%)',
  fontSize: '24px',
  fontWeight: 'bold',
  color: '#ffffff',
});

const BottomTabContainer = styled(Box)({
  position: 'absolute',
  bottom: '0',
  width: '100%',
  backgroundColor: '#333333',
  padding: '10px 0',
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'center',
  boxShadow: '0 -2px 5px rgba(0, 0, 0, 0.2)',
});

const IconButton = styled(Button)({
  color: '#ffffff',
  minWidth: '60px',
  minHeight: '60px',
  borderRadius: '50%',
  backgroundColor: '#555555',
  '&:hover': {
    backgroundColor: '#777777',
  },
});

const App = () => {
  const [coinCount, setCoinCount] = useState(0);
  const [progress, setProgress] = useState(2000);
  const [level, setLevel] = useState('Bronze');
  const [userName, setUserName] = useState('Test User423'); // Replace with actual username

  const handleCoinClick = () => {
    if (progress > 0) {
      setCoinCount(prevCoinCount => {
        const newCoinCount = prevCoinCount + 1;
        setProgress(prevProgress => {
          const newProgress = Math.max(prevProgress - 1, 0); // Ensure progress doesn't go below 0
          updateLevel(newCoinCount);
          return newProgress;
        });
        return newCoinCount;
      });
    }
  };

  const updateLevel = (count) => {
    if (count < 10) {
      setLevel('Bronze');
    } else if (count >= 10 && count < 50) {
      setLevel('Silver');
    } else if (count >= 50 && count < 100) {
      setLevel('Gold');
    } else {
      setLevel('Diamond');
    }
  };

  return (
    <Box sx={{ 
      height: '100vh', 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center', 
      position: 'relative', 
      background: 'linear-gradient(180deg, #333333 0%, #ffd700 100%)'
    }}>
      <UserName>{userName}</UserName>

      <Box sx={{ 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center' 
      }}>
        <CoinButton onClick={handleCoinClick}>
          <img src={Coin} alt="Coin" style={{ width: '100%', height: '100%' }} />
        </CoinButton>

        <ProgressBarContainer>
          <ProgressBar
            variant="determinate"
            value={(progress / 2000) * 100}
            sx={{
              width: '80vw',
              maxWidth: '500px',
            }}
          />
          <ProgressText>{progress}</ProgressText>
          <CoinCount>{coinCount}</CoinCount>
        </ProgressBarContainer>

        <Box sx={{ 
          display: 'flex', 
          justifyContent: 'center', 
          width: '100%', 
          marginTop: '20px' 
        }}>
          <LevelBadge>Level: {level}</LevelBadge>
          <CoinWallet>Coins: {coinCount}</CoinWallet>
        </Box>
      </Box>

      <BottomTabContainer>
        <IconButton>Refer</IconButton>
        <IconButton>Watch Videos</IconButton>
        <IconButton>Connect</IconButton>
        <IconButton>Twitter</IconButton>
      </BottomTabContainer>
    </Box>
  );
};

export default App;
