import React, { useState } from 'react';
import TinderCard from 'react-tinder-card';
import styled from 'styled-components';

const CardContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 400px;
  height: 65vh;
  display: flex;
  justify-content: center;
`;

const Card = styled.div`
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100%;
  border-radius: 20px;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.1);
  position: relative;
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.02);
  }
`;

const CardInfo = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 20px;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.8), transparent);
  color: white;
  border-radius: 0 0 20px 20px;
  min-height: 40%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

const ProfileDetail = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
  font-size: 14px;

  svg {
    margin-right: 5px;
  }
`;

const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

const RoommateName = styled.h2`
  font-size: 24px;
  margin: 0;
`;

const Budget = styled.div`
  background-color: white;
  color: var(--primary-color);
  padding: 4px 8px;
  border-radius: 20px;
  font-size: 14px;
  font-weight: bold;
`;

const ViewProfileButton = styled.button`
  position: absolute;
  bottom: 15px;
  right: 15px;
  background-color: var(--primary-color);
  color: white;
  border: none;
  border-radius: 20px;
  padding: 8px 15px;
  font-size: 14px;
  font-weight: bold;
  opacity: 0.9;
  transition: opacity 0.3s ease, transform 0.2s ease;
  z-index: 10;
  cursor: pointer;

  &:hover {
    opacity: 1;
    transform: scale(1.05);
  }
`;

const ProfilePreview = styled.div`
  display: ${props => props.visible ? 'block' : 'none'};
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  border-radius: 20px;
  z-index: 5;
  transition: opacity 0.3s ease;
  opacity: ${props => props.visible ? 1 : 0};
`;

const ProfileContent = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 20px;
  justify-content: center;
  align-items: center;
  color: white;
  text-align: center;
  overflow-y: auto;
`;

const ProfileBio = styled.div`
  background-color: rgba(255, 255, 255, 0.1);
  padding: 15px;
  border-radius: 10px;
  margin: 15px 0;
  font-size: 14px;
  line-height: 1.5;
  max-height: 40%;
  overflow-y: auto;
`;

const PreviewTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
  margin-top: 10px;
`;

const Tag = styled.span`
  background-color: var(--primary-color);
  color: white;
  padding: 5px 10px;
  border-radius: 20px;
  font-size: 12px;
`;

const PhotoIndicator = styled.div`
  position: absolute;
  top: 15px;
  right: 15px;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  padding: 5px 10px;
  border-radius: 20px;
  font-size: 12px;
  display: flex;
  align-items: center;
  z-index: 3;
`;

const PhotoIcon = styled.span`
  margin-right: 5px;
  font-size: 14px;
`;

const GalleryNav = styled.div`
  position: absolute;
  top: 15px;
  left: 15px;
  display: flex;
  gap: 8px;
  z-index: 4;
`;

const GalleryDot = styled.button`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: ${props => props.active ? 'white' : 'rgba(255, 255, 255, 0.5)'};
  border: none;
  padding: 0;
  cursor: pointer;
  transition: background-color 0.2s;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
`;

const GalleryArrow = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(0, 0, 0, 0.3);
  color: white;
  border: none;
  width: 35px;
  height: 35px;
  border-radius: 50%;
  font-size: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background-color 0.2s;
  z-index: 4;

  &:hover {
    background-color: rgba(0, 0, 0, 0.6);
  }

  &.prev {
    left: 10px;
  }

  &.next {
    right: 10px;
  }
`;

// New styles for enhanced profile view
const EnhancedProfileButton = styled.button`
  position: absolute;
  bottom: 70px;
  left: 50%;
  transform: translateX(-50%);
  background-color: white;
  color: var(--primary-color);
  border: 2px solid var(--primary-color);
  border-radius: 30px;
  padding: 12px 25px;
  font-size: 16px;
  font-weight: bold;
  z-index: 10;
  cursor: pointer;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease;

  &:hover {
    background-color: var(--primary-color);
    color: white;
    transform: translateX(-50%) scale(1.05);
  }
`;

const ProfileSection = styled.div`
  margin-bottom: 15px;
  background-color: rgba(255, 255, 255, 0.1);
  padding: 12px;
  border-radius: 10px;
  width: 100%;
`;

const ProfileSectionTitle = styled.h3`
  font-size: 16px;
  margin: 0 0 8px 0;
  color: white;
  opacity: 0.9;
`;

const TraitItem = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 5px;
  font-size: 14px;
`;

const TraitLabel = styled.span`
  opacity: 0.8;
`;

const TraitValue = styled.span`
  font-weight: bold;
`;

const RoommateCard = ({ roommate, onSwipe, onCardClick }) => {
  const { name, age, bio, imageUrl, location, budget, moveInDate, images, interests, traits } = roommate;
  const [showPreview, setShowPreview] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const togglePreview = (e) => {
    e.stopPropagation();
    setShowPreview(!showPreview);
  };

  const handleCardClick = () => {
    if (!showPreview) {
      setShowPreview(true);
    } else {
      onCardClick && onCardClick(roommate);
    }
  };

  const hasMultiplePhotos = images && images.length > 1;
  
  const nextImage = (e) => {
    e.stopPropagation();
    if (images && images.length > 1) {
      setCurrentImageIndex((prev) => 
        prev === images.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevImage = (e) => {
    e.stopPropagation();
    if (images && images.length > 1) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? images.length - 1 : prev - 1
      );
    }
  };

  const selectImage = (index, e) => {
    e.stopPropagation();
    setCurrentImageIndex(index);
  };

  // Determine which image to display
  const currentImage = images && images.length > 0 
    ? images[currentImageIndex] 
    : imageUrl;

  // Helper function to interpret trait values
  const getTraitText = (trait, value) => {
    if (!value) return "Not specified";
    
    switch(trait) {
      case 'sleepSchedule':
        return value === 1 ? 'Night Owl' : 
               value === 2 ? 'Late Nights' : 
               value === 3 ? 'Balanced' : 
               value === 4 ? 'Early Nights' : 'Early Riser';
      case 'socialLevel':
        return value === 1 ? 'Homebody' : 
               value === 2 ? 'Occasionally Social' : 
               value === 3 ? 'Balanced' : 
               value === 4 ? 'Social' : 'Very Social';
      case 'cleanliness':
        return value === 1 ? 'Relaxed' : 
               value === 2 ? 'Somewhat Tidy' : 
               value === 3 ? 'Average' : 
               value === 4 ? 'Clean' : 'Very Clean';
      default:
        return value;
    }
  };

  return (
    <CardContainer>
      <TinderCard
        className="swipe"
        key={name}
        preventSwipe={['up', 'down']}
        onSwipe={(dir) => onSwipe(dir, roommate)}
      >
        <Card 
          style={{ backgroundImage: `url(${currentImage})` }}
          onClick={handleCardClick}
        >
          {hasMultiplePhotos && (
            <>
              <PhotoIndicator>
                <PhotoIcon>📷</PhotoIcon> {currentImageIndex + 1}/{images.length}
              </PhotoIndicator>
              
              <GalleryNav>
                {images.map((_, index) => (
                  <GalleryDot 
                    key={index} 
                    active={index === currentImageIndex} 
                    onClick={(e) => selectImage(index, e)}
                  />
                ))}
              </GalleryNav>
              
              <GalleryArrow className="prev" onClick={prevImage}>
                &#10094;
              </GalleryArrow>
              
              <GalleryArrow className="next" onClick={nextImage}>
                &#10095;
              </GalleryArrow>
            </>
          )}

          <CardInfo>
            <CardHeader>
              <RoommateName>{name}, {age}</RoommateName>
              <Budget>{budget}</Budget>
            </CardHeader>
            
            <ProfileDetail>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
              {location}
            </ProfileDetail>
            
            <ProfileDetail>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                <line x1="16" y1="2" x2="16" y2="6"></line>
                <line x1="8" y1="2" x2="8" y2="6"></line>
                <line x1="3" y1="10" x2="21" y2="10"></line>
              </svg>
              Moving: {moveInDate}
            </ProfileDetail>
            
            <p>{bio.length > 60 ? `${bio.substring(0, 60)}...` : bio}</p>
            
            <EnhancedProfileButton onClick={togglePreview}>
              See Full Profile
            </EnhancedProfileButton>
            
            <ViewProfileButton onClick={(e) => {
              e.stopPropagation();
              onCardClick && onCardClick(roommate);
            }}>
              View Details
            </ViewProfileButton>
          </CardInfo>

          <ProfilePreview visible={showPreview}>
            <ProfileContent>
              <RoommateName>{name}, {age}</RoommateName>
              <ProfileDetail>{location} • {budget}</ProfileDetail>
              <ProfileDetail>Available from {moveInDate}</ProfileDetail>
              
              <ProfileSection>
                <ProfileSectionTitle>About</ProfileSectionTitle>
                <ProfileBio>
                  {bio}
                </ProfileBio>
              </ProfileSection>
              
              {interests && interests.length > 0 && (
                <ProfileSection>
                  <ProfileSectionTitle>Interests</ProfileSectionTitle>
                  <PreviewTags>
                    {interests.map((interest, index) => (
                      <Tag key={index}>{interest}</Tag>
                    ))}
                  </PreviewTags>
                </ProfileSection>
              )}
              
              {traits && (
                <ProfileSection>
                  <ProfileSectionTitle>Lifestyle</ProfileSectionTitle>
                  
                  {traits.sleepSchedule && (
                    <TraitItem>
                      <TraitLabel>Sleep Schedule:</TraitLabel>
                      <TraitValue>{getTraitText('sleepSchedule', traits.sleepSchedule)}</TraitValue>
                    </TraitItem>
                  )}
                  
                  {traits.socialLevel && (
                    <TraitItem>
                      <TraitLabel>Social Level:</TraitLabel>
                      <TraitValue>{getTraitText('socialLevel', traits.socialLevel)}</TraitValue>
                    </TraitItem>
                  )}
                  
                  {traits.cleanliness && (
                    <TraitItem>
                      <TraitLabel>Cleanliness:</TraitLabel>
                      <TraitValue>{getTraitText('cleanliness', traits.cleanliness)}</TraitValue>
                    </TraitItem>
                  )}
                </ProfileSection>
              )}
              
              <ViewProfileButton onClick={(e) => {
                e.stopPropagation();
                onCardClick && onCardClick(roommate);
              }}>
                View Detailed Profile {hasMultiplePhotos && `(${images.length} Photos)`}
              </ViewProfileButton>
            </ProfileContent>
          </ProfilePreview>
        </Card>
      </TinderCard>
    </CardContainer>
  );
};

export default RoommateCard; 