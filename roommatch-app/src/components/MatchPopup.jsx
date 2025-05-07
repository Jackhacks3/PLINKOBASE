import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const MatchOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  animation: fadeIn 0.3s ease-out;

  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
`;

const MatchContent = styled.div`
  background-color: white;
  width: 90%;
  max-width: 400px;
  border-radius: 20px;
  overflow: hidden;
  text-align: center;
  padding: 20px;
  animation: scaleIn 0.3s ease-out;

  @keyframes scaleIn {
    from { transform: scale(0.9); }
    to { transform: scale(1); }
  }
`;

const MatchHeader = styled.h2`
  color: var(--primary-color);
  font-size: 28px;
  margin-bottom: 20px;
`;

const ProfilesContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

const ProfileCircle = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  overflow: hidden;
  border: 3px solid var(--primary-color);
  margin: 0 10px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const MessageButton = styled.button`
  background-color: var(--primary-color);
  color: white;
  border: none;
  border-radius: 30px;
  padding: 12px 24px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  margin-top: 10px;
  transition: background-color 0.2s;

  &:hover {
    background-color: #e0305c;
  }
`;

const KeepSwipingButton = styled.button`
  background: none;
  border: none;
  color: var(--dark-gray);
  margin-top: 10px;
  cursor: pointer;
  text-decoration: underline;
  font-size: 14px;
`;

const MatchPopup = ({ roommate, onClose }) => {
  const navigate = useNavigate();
  const userImage = 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=776&q=80';

  const handleSendMessage = () => {
    navigate('/messages');
    onClose();
  };

  return (
    <MatchOverlay onClick={onClose}>
      <MatchContent onClick={(e) => e.stopPropagation()}>
        <MatchHeader>It's a Match!</MatchHeader>
        <p>You and {roommate.name} have liked each other.</p>
        
        <ProfilesContainer>
          <ProfileCircle>
            <img src={userImage} alt="You" />
          </ProfileCircle>
          <ProfileCircle>
            <img src={roommate.imageUrl} alt={roommate.name} />
          </ProfileCircle>
        </ProfilesContainer>
        
        <p>Start a conversation now to discuss potential roommate arrangements!</p>
        
        <MessageButton onClick={handleSendMessage}>
          Send a Message
        </MessageButton>
        <div>
          <KeepSwipingButton onClick={onClose}>
            Keep Swiping
          </KeepSwipingButton>
        </div>
      </MatchContent>
    </MatchOverlay>
  );
};

export default MatchPopup; 