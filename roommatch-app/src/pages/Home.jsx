import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import RoommateCard from '../components/RoommateCard';
import SwipeButtons from '../components/SwipeButtons';
import roommates from '../data/roommates';

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  height: calc(100vh - 72px);
`;

const CardsContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  max-width: 400px;
  flex: 1;
  position: relative;
  margin-bottom: 70px;
`;

const EmptyState = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  max-width: 400px;
  padding: 20px;
`;

const ResetButton = styled.button`
  background-color: var(--primary-color);
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 30px;
  font-weight: bold;
  margin-top: 20px;
  cursor: pointer;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.9;
  }
`;

const MatchesCount = styled.div`
  margin-top: 20px;
  font-weight: bold;
  color: var(--primary-color);
`;

// Modal for profile view
const ProfileModal = styled.div`
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
`;

const ProfileContent = styled.div`
  background-color: white;
  width: 90%;
  max-width: 500px;
  max-height: 85vh;
  border-radius: 20px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;

const ProfileHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 20px;
  border-bottom: 1px solid var(--light-gray);
`;

const ProfileBody = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 0;
`;

const ProfileImageContainer = styled.div`
  position: relative;
  height: 300px;
  width: 100%;
`;

const ProfileImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const ImageOverlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.7), transparent);
  padding: 20px;
  color: white;
`;

const ProfileDetails = styled.div`
  padding: 20px;
`;

const DetailItem = styled.div`
  margin-bottom: 15px;
`;

const DetailLabel = styled.h4`
  margin: 0 0 5px 0;
  font-size: 14px;
  color: var(--dark-gray);
`;

const DetailValue = styled.p`
  margin: 0;
  font-size: 16px;
`;

const ProfileFooter = styled.div`
  padding: 15px 20px;
  border-top: 1px solid var(--light-gray);
  display: flex;
  justify-content: space-between;
`;

const ProfileActions = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const ActionButton = styled.button`
  padding: 12px 20px;
  border-radius: 30px;
  font-weight: bold;
  cursor: pointer;
  transition: transform 0.2s, opacity 0.2s;
  
  &:hover {
    opacity: 0.9;
    transform: scale(1.02);
  }
  
  &:active {
    transform: scale(0.98);
  }
`;

const LikeButton = styled(ActionButton)`
  background-color: var(--secondary-color);
  color: white;
  border: none;
  flex: 1;
  margin-left: 10px;
`;

const DislikeButton = styled(ActionButton)`
  background-color: white;
  color: var(--primary-color);
  border: 1px solid var(--primary-color);
  flex: 1;
  margin-right: 10px;
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  color: var(--dark-gray);
  line-height: 1;
`;

// Match popup styles
const MatchPopup = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1100;
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
  padding: 30px 20px;
  text-align: center;
`;

const MatchTitle = styled.h2`
  color: var(--primary-color);
  margin-bottom: 20px;
  font-size: 28px;
`;

const MatchImages = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px 0;
`;

const RoommateImage = styled.div`
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

const MatchButton = styled(ActionButton)`
  background-color: var(--primary-color);
  color: white;
  border: none;
  margin-top: 20px;
  padding: 12px 30px;
`;

const KeepSwipingButton = styled.button`
  background: none;
  border: none;
  margin-top: 15px;
  color: var(--dark-gray);
  text-decoration: underline;
  cursor: pointer;
`;

// New styles for image gallery
const ImageGallery = styled.div`
  position: relative;
  height: 350px;
  width: 100%;
`;

const GalleryImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: opacity 0.3s ease;
`;

const GalleryNav = styled.div`
  position: absolute;
  bottom: 15px;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  gap: 8px;
`;

const GalleryDot = styled.button`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${props => props.active ? 'white' : 'rgba(255, 255, 255, 0.5)'};
  border: none;
  padding: 0;
  cursor: pointer;
  transition: background-color 0.2s;
`;

const GalleryArrow = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(0, 0, 0, 0.3);
  color: white;
  border: none;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background-color 0.2s;
  z-index: 10;

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

const DetailGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px;
  margin-bottom: 20px;
`;

const InterestTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 10px;
`;

const InterestTag = styled.span`
  background-color: var(--light-gray);
  color: var(--dark-gray);
  padding: 5px 10px;
  border-radius: 15px;
  font-size: 14px;
`;

const SubSection = styled.div`
  margin-top: 20px;
  padding-top: 15px;
  border-top: 1px solid var(--light-gray);
`;

const SubSectionTitle = styled.h3`
  margin: 0 0 10px 0;
  font-size: 18px;
  color: var(--primary-color);
`;

// New confirmation overlay styles
const SwipeConfirmation = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2000;
  animation: fadeIn 0.2s ease-out;

  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
`;

const ConfirmationContent = styled.div`
  background-color: white;
  width: 90%;
  max-width: 400px;
  border-radius: 20px;
  padding: 20px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);
`;

const ConfirmationHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
`;

const ConfirmationImage = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 15px;
  border: 2px solid ${props => props.type === 'like' ? 'var(--secondary-color)' : 'var(--primary-color)'};
`;

const ConfirmationTitle = styled.h3`
  margin: 0;
  font-size: 18px;
  color: ${props => props.type === 'like' ? 'var(--secondary-color)' : 'var(--primary-color)'};
`;

const ConfirmationMessage = styled.p`
  margin: 10px 0;
  font-size: 16px;
`;

const ConfirmationButtons = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

const ConfirmButton = styled.button`
  padding: 10px 15px;
  border-radius: 20px;
  font-weight: bold;
  cursor: pointer;
  background-color: ${props => props.primary ? 'var(--secondary-color)' : 'white'};
  color: ${props => props.primary ? 'white' : 'var(--primary-color)'};
  border: ${props => props.primary ? 'none' : '1px solid var(--primary-color)'};
  flex: 1;
  margin: 0 5px;
`;

// Add new styled components for the quick preview feature
const PreviewButton = styled.button`
  background-color: white;
  color: var(--primary-color);
  border: 2px solid var(--primary-color);
  padding: 10px 15px;
  border-radius: 20px;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  margin-bottom: 10px;
  cursor: pointer;
  transition: all 0.2s ease;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  
  &:hover {
    background-color: var(--primary-color);
    color: white;
  }
  
  svg {
    width: 18px;
    height: 18px;
  }
`;

const QuickPreviewContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1200;
  animation: fadeIn 0.2s ease;
  
  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
`;

const QuickPreviewCard = styled.div`
  background-color: white;
  border-radius: 20px;
  width: 90%;
  max-width: 400px;
  max-height: 80vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  box-shadow: 0 5px 25px rgba(0, 0, 0, 0.2);
`;

const PreviewHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 20px;
  border-bottom: 1px solid var(--light-gray);
  
  h3 {
    margin: 0;
    color: var(--primary-color);
  }
`;

const PreviewImageContainer = styled.div`
  width: 100%;
  height: 350px;
  position: relative;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const PreviewInfo = styled.div`
  padding: 20px;
  overflow-y: auto;
`;

const PreviewDetail = styled.div`
  margin-bottom: 15px;
  
  h4 {
    margin: 0 0 5px 0;
    color: var(--dark-gray);
    font-size: 14px;
  }
  
  p {
    margin: 0;
    font-size: 16px;
  }
`;

const PreviewActions = styled.div`
  display: flex;
  gap: 10px;
  padding: 15px 20px;
  border-top: 1px solid var(--light-gray);
`;

const FullProfileButton = styled.button`
  flex: 1;
  padding: 12px;
  border-radius: 15px;
  font-weight: bold;
  cursor: pointer;
  transition: opacity 0.2s;
  
  &:hover {
    opacity: 0.9;
  }
`;

const ViewFullProfileButton = styled(FullProfileButton)`
  background-color: var(--primary-color);
  color: white;
  border: none;
`;

const ClosePreviewButton = styled(FullProfileButton)`
  background-color: white;
  color: var(--primary-color);
  border: 1px solid var(--primary-color);
`;

// Add a new styled component for the preview image
const CurrentRoommatePreview = styled.div`
  width: 100%;
  max-width: 400px;
  margin-bottom: 15px;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  background-color: white;
`;

const PreviewImage = styled.div`
  width: 100%;
  height: 200px;
  position: relative;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const PreviewName = styled.h3`
  margin: 0 0 5px 0;
  color: var(--primary-color);
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  span {
    font-size: 14px;
    color: var(--dark-gray);
    background-color: var(--light-gray);
    padding: 3px 8px;
    border-radius: 10px;
  }
`;

const Home = () => {
  const navigate = useNavigate();
  const [roommateData, setRoommateData] = useState([]);
  const [matches, setMatches] = useState([]);
  const [selectedProfile, setSelectedProfile] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [showMatch, setShowMatch] = useState(false);
  const [matchedProfile, setMatchedProfile] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [swipeConfirmation, setSwipeConfirmation] = useState(null);
  
  // New state for quick preview
  const [showQuickPreview, setShowQuickPreview] = useState(false);

  // Initialize data
  useEffect(() => {
    try {
      console.log("Loading roommate data:", roommates);
      setRoommateData(roommates);
      
      // Load existing matches from localStorage
      const savedMatches = JSON.parse(localStorage.getItem('roommate-matches') || '[]');
      setMatches(savedMatches);
    } catch (error) {
      console.error("Error initializing data:", error);
    }
  }, []);

  // Reset current image index when profile changes
  useEffect(() => {
    setCurrentImageIndex(0);
  }, [selectedProfile]);

  const getCurrentRoommate = () => {
    return roommateData.length > 0 ? roommateData[roommateData.length - 1] : null;
  };

  // New function to show quick preview of current roommate
  const showCurrentRoommatePreview = () => {
    const currentRoommate = getCurrentRoommate();
    if (currentRoommate) {
      setShowQuickPreview(true);
    }
  };

  // Function to view full profile from preview
  const viewFullProfileFromPreview = () => {
    setShowQuickPreview(false);
    viewProfile(getCurrentRoommate());
  };

  const confirmSwipe = (direction, roommate) => {
    // Show confirmation dialog
    setSwipeConfirmation({
      direction,
      roommate
    });
  };

  const handleSwipe = (direction, roommate) => {
    try {
      // Close confirmation if open
      setSwipeConfirmation(null);
      
      // Remove from deck
      setRoommateData(prev => prev.filter(item => item.id !== roommate.id));
      
      // If swiped right, check for match
      if (direction === 'right') {
        // Create a 70% chance of match
        const isMatch = Math.random() > 0.3;
        
        if (isMatch) {
          // Check if already matched
          const alreadyMatched = matches.some(match => match.id === roommate.id);
          
          if (!alreadyMatched) {
            // Add to matches
            const newMatch = {...roommate, isMatched: true};
            setMatches(prev => [...prev, newMatch]);
            
            // Save to localStorage
            const updatedMatches = [...matches, newMatch];
            localStorage.setItem('roommate-matches', JSON.stringify(updatedMatches));
            
            // Show match popup
            setMatchedProfile(newMatch);
            setShowMatch(true);
          }
        }
      }
    } catch (error) {
      console.error("Error handling swipe:", error);
    }
  };

  const cancelSwipe = () => {
    setSwipeConfirmation(null);
  };

  const resetRoommates = () => {
    // Clear localStorage to ensure fresh data
    localStorage.removeItem('roommate-matches');
    
    // Reset matches state
    setMatches([]);
    
    // Reset roommate data from source
    console.log("Resetting with fresh data:", roommates);
    setRoommateData(roommates);
  };

  const viewProfile = (roommate) => {
    setSelectedProfile(roommate);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedProfile(null);
  };

  const closeMatchPopup = () => {
    setShowMatch(false);
    setMatchedProfile(null);
  };

  const goToMessages = () => {
    closeMatchPopup();
    navigate('/messages');
  };

  const nextImage = () => {
    if (selectedProfile && selectedProfile.images) {
      setCurrentImageIndex((prev) => 
        prev === selectedProfile.images.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevImage = () => {
    if (selectedProfile && selectedProfile.images) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? selectedProfile.images.length - 1 : prev - 1
      );
    }
  };

  const currentRoommate = getCurrentRoommate();

  return (
    <HomeContainer>
      <CardsContainer>
        {roommateData.length > 0 ? (
          roommateData.map((roommate) => (
            <RoommateCard
              key={roommate.id}
              roommate={roommate}
              onSwipe={(dir) => confirmSwipe(dir, roommate)}
              onCardClick={() => viewProfile(roommate)}
            />
          ))
        ) : (
          <EmptyState>
            <h2>No more roommates!</h2>
            <p>Check back later or adjust your preferences.</p>
            <ResetButton onClick={resetRoommates}>
              Reset Roommates
            </ResetButton>
            {matches.length > 0 && (
              <MatchesCount>
                You have {matches.length} matches! Check your messages.
              </MatchesCount>
            )}
          </EmptyState>
        )}
      </CardsContainer>
      
      {roommateData.length > 0 && (
        <>
          {getCurrentRoommate() && (
            <div style={{
              width: '100%',
              maxWidth: '400px',
              height: '600px',
              borderRadius: '15px',
              overflow: 'hidden',
              boxShadow: '0 5px 15px rgba(0, 0, 0, 0.2)',
              backgroundColor: 'white',
              marginLeft: 'auto',
              marginRight: 'auto',
              position: 'relative',
              marginBottom: '20px'
            }}>
              {/* Large image covering most of the card */}
              <div style={{
                width: '100%',
                height: '100%',
                backgroundImage: `url(${getCurrentRoommate().imageUrl})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                position: 'relative'
              }}>
                {/* Gradient overlay at bottom to make text readable */}
                <div style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  width: '100%',
                  background: 'linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0) 100%)',
                  padding: '60px 20px 20px 20px',
                }}>
                  {/* Name, age and verification */}
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    marginBottom: '4px'
                  }}>
                    <h2 style={{
                      margin: 0,
                      color: 'white',
                      fontSize: '26px',
                      fontWeight: 'bold'
                    }}>
                      {getCurrentRoommate().name}, {getCurrentRoommate().age}
                      {/* Verification badge */}
                      <span style={{
                        color: '#2196F3',
                        fontSize: '18px',
                        marginLeft: '5px'
                      }}>✓</span>
                    </h2>
                  </div>
                  
                  {/* Location info */}
                  <p style={{
                    margin: '0 0 8px 0',
                    color: 'rgba(255,255,255,0.8)',
                    fontSize: '14px'
                  }}>
                    {getCurrentRoommate().location} • 5 miles away
                  </p>
                  
                  {/* About section */}
                  <div style={{
                    color: 'white',
                    fontSize: '14px',
                    marginBottom: '20px'
                  }}>
                    <p style={{margin: '0 0 5px 0', fontWeight: 'bold'}}>About Me</p>
                    <p style={{
                      margin: 0,
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      display: '-webkit-box',
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: 'vertical'
                    }}>
                      {getCurrentRoommate().bio}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          <SwipeButtons 
            onSwipe={(direction) => {
              if (roommateData.length > 0) {
                confirmSwipe(direction, roommateData[roommateData.length - 1]);
              }
            }}
            currentProfile={getCurrentRoommate()}
          />
        </>
      )}

      {/* Quick Preview Modal */}
      {showQuickPreview && currentRoommate && (
        <QuickPreviewContainer onClick={() => setShowQuickPreview(false)}>
          <QuickPreviewCard onClick={(e) => e.stopPropagation()}>
            <PreviewHeader>
              <h3>{currentRoommate.name}, {currentRoommate.age}</h3>
              <button 
                onClick={() => setShowQuickPreview(false)}
                aria-label="Close preview"
                style={{ background: 'none', border: 'none', fontSize: '24px', cursor: 'pointer' }}
              >
                &times;
              </button>
            </PreviewHeader>
            
            <PreviewImageContainer>
              <img 
                src={currentRoommate.imageUrl} 
                alt={`${currentRoommate.name}, ${currentRoommate.age}`} 
              />
            </PreviewImageContainer>
            
            <PreviewInfo>
              <PreviewDetail>
                <h4>Location</h4>
                <p>{currentRoommate.location}</p>
              </PreviewDetail>
              
              <PreviewDetail>
                <h4>Budget</h4>
                <p>{currentRoommate.budget}</p>
              </PreviewDetail>
              
              <PreviewDetail>
                <h4>Move-in Date</h4>
                <p>{currentRoommate.moveInDate}</p>
              </PreviewDetail>
              
              <PreviewDetail>
                <h4>About</h4>
                <p>{currentRoommate.bio}</p>
              </PreviewDetail>
              
              {currentRoommate.traits && (
                <PreviewDetail>
                  <h4>Lifestyle</h4>
                  <p>
                    {currentRoommate.traits.sleepSchedule === 1 ? 'Night Owl' : 
                     currentRoommate.traits.sleepSchedule === 2 ? 'Late Nights' : 
                     currentRoommate.traits.sleepSchedule === 3 ? 'Balanced Sleep Schedule' : 
                     currentRoommate.traits.sleepSchedule === 4 ? 'Early Nights' : 'Early Riser'}
                    {' • '}
                    {currentRoommate.traits.cleanliness === 1 ? 'Relaxed Cleaning' : 
                     currentRoommate.traits.cleanliness === 2 ? 'Somewhat Tidy' : 
                     currentRoommate.traits.cleanliness === 3 ? 'Average Cleanliness' : 
                     currentRoommate.traits.cleanliness === 4 ? 'Clean' : 'Very Clean'}
                  </p>
                </PreviewDetail>
              )}
            </PreviewInfo>
            
            <PreviewActions>
              <ClosePreviewButton onClick={() => setShowQuickPreview(false)}>
                Close
              </ClosePreviewButton>
              <ViewFullProfileButton onClick={viewFullProfileFromPreview}>
                View Full Profile
              </ViewFullProfileButton>
            </PreviewActions>
          </QuickPreviewCard>
        </QuickPreviewContainer>
      )}

      {/* Existing Modals */}
      {/* Profile Modal */}
      {showModal && selectedProfile && (
        <ProfileModal onClick={closeModal}>
          <ProfileContent onClick={(e) => e.stopPropagation()}>
            <ProfileHeader>
              <h2>{selectedProfile.name}, {selectedProfile.age}</h2>
              <CloseButton onClick={closeModal}>&times;</CloseButton>
            </ProfileHeader>

            <ProfileBody>
              {/* Image Gallery */}
              <ImageGallery>
                {selectedProfile.images && selectedProfile.images.map((image, index) => (
                  <GalleryImage 
                    key={index} 
                    src={image} 
                    alt={`${selectedProfile.name} ${index + 1}`} 
                    style={{ display: index === currentImageIndex ? 'block' : 'none' }}
                  />
                ))}
                
                <GalleryArrow className="prev" onClick={(e) => {
                  e.stopPropagation();
                  prevImage();
                }}>
                  &#10094;
                </GalleryArrow>
                
                <GalleryArrow className="next" onClick={(e) => {
                  e.stopPropagation();
                  nextImage();
                }}>
                  &#10095;
                </GalleryArrow>
                
                <GalleryNav>
                  {selectedProfile.images && selectedProfile.images.map((_, index) => (
                    <GalleryDot 
                      key={index} 
                      active={index === currentImageIndex} 
                      onClick={(e) => {
                        e.stopPropagation();
                        setCurrentImageIndex(index);
                      }}
                    />
                  ))}
                </GalleryNav>
                
                <ImageOverlay>
                  <h3>{selectedProfile.name}, {selectedProfile.age}</h3>
                </ImageOverlay>
              </ImageGallery>
              
              <ProfileDetails>
                <DetailGrid>
                  <DetailItem>
                    <DetailLabel>Location</DetailLabel>
                    <DetailValue>{selectedProfile.location}</DetailValue>
                  </DetailItem>
                  
                  <DetailItem>
                    <DetailLabel>Budget</DetailLabel>
                    <DetailValue>{selectedProfile.budget}</DetailValue>
                  </DetailItem>
                  
                  <DetailItem>
                    <DetailLabel>Move-in Date</DetailLabel>
                    <DetailValue>{selectedProfile.moveInDate}</DetailValue>
                  </DetailItem>
                  
                  <DetailItem>
                    <DetailLabel>Cleaning Habits</DetailLabel>
                    <DetailValue>{selectedProfile.cleaningHabits || 'Not specified'}</DetailValue>
                  </DetailItem>
                </DetailGrid>
                
                <DetailItem>
                  <DetailLabel>About</DetailLabel>
                  <DetailValue>{selectedProfile.bio}</DetailValue>
                </DetailItem>
                
                {selectedProfile.interests && selectedProfile.interests.length > 0 && (
                  <SubSection>
                    <SubSectionTitle>Interests</SubSectionTitle>
                    <InterestTags>
                      {selectedProfile.interests.map((interest, index) => (
                        <InterestTag key={index}>{interest}</InterestTag>
                      ))}
                    </InterestTags>
                  </SubSection>
                )}
                
                {selectedProfile.schedule && (
                  <SubSection>
                    <SubSectionTitle>Schedule</SubSectionTitle>
                    <DetailValue>{selectedProfile.schedule}</DetailValue>
                  </SubSection>
                )}
              </ProfileDetails>
            </ProfileBody>

            <ProfileFooter>
              <ProfileActions>
                <DislikeButton onClick={() => {
                  handleSwipe('left', selectedProfile);
                  closeModal();
                }}>Dislike</DislikeButton>
                <LikeButton onClick={() => {
                  handleSwipe('right', selectedProfile);
                  closeModal();
                }}>Like</LikeButton>
              </ProfileActions>
            </ProfileFooter>
          </ProfileContent>
        </ProfileModal>
      )}
        
      {/* Match Popup */}
      {showMatch && matchedProfile && (
        <MatchPopup>
          <MatchContent>
            <MatchTitle>It's a Match!</MatchTitle>
            <p>You and {matchedProfile.name} have liked each other.</p>
            
            <MatchImages>
              <RoommateImage>
                <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=776&q=80" alt="You" />
              </RoommateImage>
              <RoommateImage>
                <img src={matchedProfile.imageUrl} alt={matchedProfile.name} />
              </RoommateImage>
            </MatchImages>
            
            <p>Start a conversation now to discuss potential roommate arrangements!</p>
            
            <MatchButton onClick={goToMessages}>
              Send a Message
            </MatchButton>
            <br />
            <KeepSwipingButton onClick={closeMatchPopup}>
              Keep Swiping
            </KeepSwipingButton>
          </MatchContent>
        </MatchPopup>
      )}

      {/* Swipe Confirmation Dialog */}
      {swipeConfirmation && (
        <SwipeConfirmation>
          <ConfirmationContent>
            <ConfirmationHeader>
              <ConfirmationImage 
                src={swipeConfirmation.roommate.imageUrl} 
                alt={swipeConfirmation.roommate.name}
                type={swipeConfirmation.direction === 'right' ? 'like' : 'dislike'} 
              />
              <ConfirmationTitle type={swipeConfirmation.direction === 'right' ? 'like' : 'dislike'}>
                {swipeConfirmation.direction === 'right' ? 'Like' : 'Dislike'} {swipeConfirmation.roommate.name}?
              </ConfirmationTitle>
            </ConfirmationHeader>
            
            <ConfirmationMessage>
              {swipeConfirmation.direction === 'right' 
                ? `You're about to like ${swipeConfirmation.roommate.name} as a potential roommate.`
                : `You're about to pass on ${swipeConfirmation.roommate.name} as a roommate.`}
            </ConfirmationMessage>
            
            <ConfirmationButtons>
              <ConfirmButton onClick={cancelSwipe}>
                Cancel
              </ConfirmButton>
              <ConfirmButton 
                primary
                onClick={() => handleSwipe(swipeConfirmation.direction, swipeConfirmation.roommate)}
              >
                Confirm
              </ConfirmButton>
            </ConfirmationButtons>
          </ConfirmationContent>
        </SwipeConfirmation>
      )}
    </HomeContainer>
  );
};

export default Home; 