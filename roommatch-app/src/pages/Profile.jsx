import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const ProfileContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
`;

const ProfileHeader = styled.div`
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ProfileCard = styled.div`
  background-color: white;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
`;

const ProfileImage = styled.div`
  height: 250px;
  width: 100%;
  position: relative;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const ImageUploadOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  opacity: 0;
  transition: opacity 0.3s;
  cursor: pointer;

  &:hover {
    opacity: 1;
  }
`;

const NameOverlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.8), transparent);
  padding: 20px;
  color: white;
`;

const ProfileInfo = styled.div`
  padding: 20px;

  p {
    margin-bottom: 15px;
    line-height: 1.5;
  }
`;

const Detail = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  
  svg {
    margin-right: 10px;
    color: var(--primary-color);
  }
`;

const EditableField = styled.div`
  margin-bottom: 15px;
`;

const FieldLabel = styled.label`
  display: block;
  font-size: 14px;
  color: var(--dark-gray);
  margin-bottom: 5px;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid var(--medium-gray);
  border-radius: 5px;
  font-size: 16px;
  margin-bottom: 5px;
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 10px;
  border: 1px solid var(--medium-gray);
  border-radius: 5px;
  font-size: 16px;
  margin-bottom: 5px;
  min-height: 100px;
  resize: vertical;
`;

const Select = styled.select`
  width: 100%;
  padding: 10px;
  border: 1px solid var(--medium-gray);
  border-radius: 5px;
  font-size: 16px;
  margin-bottom: 5px;
`;

const PreferencesSection = styled.div`
  margin-top: 20px;
`;

const PreferenceGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
  margin-top: 10px;
`;

const PreferenceItem = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  background-color: var(--light-gray);
  border-radius: 5px;
`;

const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;

  input {
    margin-right: 8px;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
`;

const Button = styled.button`
  flex: 1;
  padding: 15px;
  border-radius: 10px;
  border: none;
  font-weight: bold;
  font-size: 16px;
  cursor: pointer;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.9;
  }
`;

const PrimaryButton = styled(Button)`
  background-color: var(--primary-color);
  color: white;
`;

const SecondaryButton = styled(Button)`
  background-color: white;
  color: var(--primary-color);
  border: 1px solid var(--primary-color);
`;

const DangerButton = styled(Button)`
  background-color: #ff4757;
  color: white;
`;

const EditToggle = styled.button`
  background-color: ${props => props.active ? 'var(--primary-color)' : 'white'};
  color: ${props => props.active ? 'white' : 'var(--primary-color)'};
  border: 1px solid var(--primary-color);
  padding: 8px 15px;
  border-radius: 20px;
  font-weight: bold;
  cursor: pointer;
`;

const SliderContainer = styled.div`
  margin: 15px 0;
`;

const SliderHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 5px;
`;

const SliderLabel = styled.span`
  font-size: 14px;
  color: var(--dark-gray);
`;

const SliderValue = styled.span`
  font-weight: bold;
  color: var(--primary-color);
`;

const RangeSlider = styled.input`
  width: 100%;
  height: 8px;
  border-radius: 4px;
  background: linear-gradient(to right, var(--light-gray), var(--primary-color));
  outline: none;
  -webkit-appearance: none;

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: var(--primary-color);
    cursor: pointer;
    border: 2px solid white;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
  }

  &::-moz-range-thumb {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: var(--primary-color);
    cursor: pointer;
    border: 2px solid white;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
  }
`;

const SliderLabels = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 5px;
`;

const SubSectionTitle = styled.h3`
  font-size: 18px;
  margin: 20px 0 10px;
  color: var(--primary-color);
`;

const Profile = () => {
  // Initial user data
  const initialUserData = {
    name: 'Sam Smith',
    age: 27,
    bio: 'Software developer looking for a clean and quiet roommate. I enjoy cooking and hiking on weekends.',
    location: 'Downtown',
    budget: '$800-1200/mo',
    moveInDate: 'June 1st',
    profileImage: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=776&q=80',
    preferences: {
      smoking: false,
      pets: true,
      gender: 'Any',
      ageRange: '21-35',
    },
    traits: {
      sleepSchedule: 3, // 1 = Night Owl, 5 = Early Riser
      socialLevel: 3,   // 1 = Homebody, 5 = Very Social
      cleanliness: 4    // 1 = Relaxed, 5 = Very Clean
    }
  };
  
  const [isEditing, setIsEditing] = useState(false);
  const [userData, setUserData] = useState(initialUserData);
  const [formData, setFormData] = useState(initialUserData);
  
  // Load user data from localStorage if available
  useEffect(() => {
    const savedUserData = localStorage.getItem('roommate-user-profile');
    if (savedUserData) {
      try {
        const parsedData = JSON.parse(savedUserData);
        // Ensure traits object exists in older profile data
        if (!parsedData.traits) {
          parsedData.traits = initialUserData.traits;
        }
        setUserData(parsedData);
        setFormData(parsedData);
      } catch (error) {
        console.error("Error parsing saved user data:", error);
      }
    }
  }, []);
  
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    if (name.includes('.')) {
      // Handle nested objects (preferences or traits)
      const [parent, child] = name.split('.');
      setFormData({
        ...formData,
        [parent]: {
          ...formData[parent],
          [child]: type === 'checkbox' ? checked : 
                  type === 'range' ? parseInt(value, 10) : value
        }
      });
    } else {
      // Handle regular fields
      setFormData({
        ...formData,
        [name]: type === 'checkbox' ? checked : value
      });
    }
  };
  
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData({
          ...formData,
          profileImage: reader.result
        });
      };
      reader.readAsDataURL(file);
    }
  };
  
  const handleSave = () => {
    // Save to localStorage
    localStorage.setItem('roommate-user-profile', JSON.stringify(formData));
    
    // Update user data
    setUserData(formData);
    
    // Exit edit mode
    setIsEditing(false);
  };
  
  const handleCancel = () => {
    // Reset form data to current user data
    setFormData(userData);
    
    // Exit edit mode
    setIsEditing(false);
  };
  
  const handleReset = () => {
    if (window.confirm('Are you sure you want to reset your profile to default?')) {
      // Reset to initial data
      setUserData(initialUserData);
      setFormData(initialUserData);
      
      // Save to localStorage
      localStorage.setItem('roommate-user-profile', JSON.stringify(initialUserData));
      
      // Exit edit mode
      setIsEditing(false);
    }
  };

  // Helper to render slider value in words
  const getTraitValueText = (trait, value) => {
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
    <ProfileContainer>
      <ProfileHeader>
        <h1>Your Profile</h1>
        <EditToggle 
          active={isEditing}
          onClick={() => setIsEditing(!isEditing)}
        >
          {isEditing ? 'Cancel Edit' : 'Edit Profile'}
        </EditToggle>
      </ProfileHeader>
      
      <ProfileCard>
        <ProfileImage>
          <img src={formData.profileImage} alt={formData.name} />
          {isEditing && (
            <ImageUploadOverlay>
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 21h-16a2 2 0 0 1-2-2v-12a2 2 0 0 1 2-2h4l2-3h4l2 3h4a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2z"></path>
                <circle cx="12" cy="13" r="4"></circle>
              </svg>
              <p>Change Photo</p>
              <input 
                type="file" 
                accept="image/*" 
                onChange={handleImageChange}
                style={{ position: 'absolute', width: '100%', height: '100%', opacity: 0, cursor: 'pointer' }}
              />
            </ImageUploadOverlay>
          )}
          <NameOverlay>
            <h2>{formData.name}, {formData.age}</h2>
          </NameOverlay>
        </ProfileImage>
        
        <ProfileInfo>
          {isEditing ? (
            // Edit mode
            <>
              <EditableField>
                <FieldLabel>Name</FieldLabel>
                <Input 
                  type="text" 
                  name="name" 
                  value={formData.name} 
                  onChange={handleInputChange}
                />
              </EditableField>
              
              <EditableField>
                <FieldLabel>Age</FieldLabel>
                <Input 
                  type="number" 
                  name="age" 
                  value={formData.age} 
                  onChange={handleInputChange}
                  min="18"
                  max="100"
                />
              </EditableField>
              
              <EditableField>
                <FieldLabel>Location</FieldLabel>
                <Input 
                  type="text" 
                  name="location" 
                  value={formData.location} 
                  onChange={handleInputChange}
                />
              </EditableField>
              
              <EditableField>
                <FieldLabel>Budget</FieldLabel>
                <Input 
                  type="text" 
                  name="budget" 
                  value={formData.budget} 
                  onChange={handleInputChange}
                  placeholder="e.g. $800-1200/mo"
                />
              </EditableField>
              
              <EditableField>
                <FieldLabel>Move-in Date</FieldLabel>
                <Input 
                  type="text" 
                  name="moveInDate" 
                  value={formData.moveInDate} 
                  onChange={handleInputChange}
                  placeholder="e.g. June 1st"
                />
              </EditableField>
              
              <EditableField>
                <FieldLabel>About You</FieldLabel>
                <TextArea 
                  name="bio" 
                  value={formData.bio} 
                  onChange={handleInputChange}
                  placeholder="Tell potential roommates about yourself..."
                />
              </EditableField>
              
              <SubSectionTitle>Lifestyle & Habits</SubSectionTitle>
              
              <SliderContainer>
                <SliderHeader>
                  <SliderLabel>Sleep Schedule</SliderLabel>
                  <SliderValue>{getTraitValueText('sleepSchedule', formData.traits.sleepSchedule)}</SliderValue>
                </SliderHeader>
                <RangeSlider 
                  type="range" 
                  min="1" 
                  max="5" 
                  name="traits.sleepSchedule" 
                  value={formData.traits.sleepSchedule} 
                  onChange={handleInputChange} 
                />
                <SliderLabels>
                  <span>Night Owl</span>
                  <span>Early Riser</span>
                </SliderLabels>
              </SliderContainer>
              
              <SliderContainer>
                <SliderHeader>
                  <SliderLabel>Social Level</SliderLabel>
                  <SliderValue>{getTraitValueText('socialLevel', formData.traits.socialLevel)}</SliderValue>
                </SliderHeader>
                <RangeSlider 
                  type="range" 
                  min="1" 
                  max="5" 
                  name="traits.socialLevel" 
                  value={formData.traits.socialLevel} 
                  onChange={handleInputChange} 
                />
                <SliderLabels>
                  <span>Homebody</span>
                  <span>Very Social</span>
                </SliderLabels>
              </SliderContainer>
              
              <SliderContainer>
                <SliderHeader>
                  <SliderLabel>Cleanliness</SliderLabel>
                  <SliderValue>{getTraitValueText('cleanliness', formData.traits.cleanliness)}</SliderValue>
                </SliderHeader>
                <RangeSlider 
                  type="range" 
                  min="1" 
                  max="5" 
                  name="traits.cleanliness" 
                  value={formData.traits.cleanliness} 
                  onChange={handleInputChange} 
                />
                <SliderLabels>
                  <span>Relaxed</span>
                  <span>Very Clean</span>
                </SliderLabels>
              </SliderContainer>
              
              <PreferencesSection>
                <h3>Preferences</h3>
                <PreferenceGrid>
                  <PreferenceItem>
                    <CheckboxLabel>
                      <input 
                        type="checkbox" 
                        name="preferences.smoking" 
                        checked={formData.preferences.smoking} 
                        onChange={handleInputChange}
                      />
                      Smoking Allowed
                    </CheckboxLabel>
                  </PreferenceItem>
                  
                  <PreferenceItem>
                    <CheckboxLabel>
                      <input 
                        type="checkbox" 
                        name="preferences.pets" 
                        checked={formData.preferences.pets} 
                        onChange={handleInputChange}
                      />
                      Pets Allowed
                    </CheckboxLabel>
                  </PreferenceItem>
                  
                  <PreferenceItem>
                    <FieldLabel>Preferred Gender</FieldLabel>
                    <Select 
                      name="preferences.gender" 
                      value={formData.preferences.gender} 
                      onChange={handleInputChange}
                    >
                      <option value="Any">Any</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Non-binary">Non-binary</option>
                    </Select>
                  </PreferenceItem>
                  
                  <PreferenceItem>
                    <FieldLabel>Age Range</FieldLabel>
                    <Input 
                      type="text" 
                      name="preferences.ageRange" 
                      value={formData.preferences.ageRange} 
                      onChange={handleInputChange}
                      placeholder="e.g. 21-35"
                    />
                  </PreferenceItem>
                </PreferenceGrid>
              </PreferencesSection>
            </>
          ) : (
            // View mode
            <>
              <Detail>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                <span>{userData.location}</span>
              </Detail>
              
              <Detail>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="12" y1="8" x2="12" y2="12"></line>
                  <line x1="12" y1="16" x2="12.01" y2="16"></line>
                </svg>
                <span>Budget: {userData.budget}</span>
              </Detail>
              
              <Detail>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                  <line x1="16" y1="2" x2="16" y2="6"></line>
                  <line x1="8" y1="2" x2="8" y2="6"></line>
                  <line x1="3" y1="10" x2="21" y2="10"></line>
                </svg>
                <span>Available: {userData.moveInDate}</span>
              </Detail>
              
              <p>{userData.bio}</p>
              
              <SubSectionTitle>Lifestyle & Habits</SubSectionTitle>
              
              <PreferenceGrid>
                <PreferenceItem>
                  <span>Sleep Schedule</span>
                  <span>{getTraitValueText('sleepSchedule', userData.traits.sleepSchedule)}</span>
                </PreferenceItem>
                <PreferenceItem>
                  <span>Social Level</span>
                  <span>{getTraitValueText('socialLevel', userData.traits.socialLevel)}</span>
                </PreferenceItem>
                <PreferenceItem>
                  <span>Cleanliness</span>
                  <span>{getTraitValueText('cleanliness', userData.traits.cleanliness)}</span>
                </PreferenceItem>
              </PreferenceGrid>
              
              <PreferencesSection>
                <h3>Preferences</h3>
                <PreferenceGrid>
                  <PreferenceItem>
                    <span>Smoking</span>
                    <span>{userData.preferences.smoking ? 'Yes' : 'No'}</span>
                  </PreferenceItem>
                  <PreferenceItem>
                    <span>Pets</span>
                    <span>{userData.preferences.pets ? 'Yes' : 'No'}</span>
                  </PreferenceItem>
                  <PreferenceItem>
                    <span>Gender</span>
                    <span>{userData.preferences.gender}</span>
                  </PreferenceItem>
                  <PreferenceItem>
                    <span>Age Range</span>
                    <span>{userData.preferences.ageRange}</span>
                  </PreferenceItem>
                </PreferenceGrid>
              </PreferencesSection>
            </>
          )}
        </ProfileInfo>
      </ProfileCard>
      
      {isEditing ? (
        <ButtonGroup>
          <SecondaryButton onClick={handleCancel}>Cancel</SecondaryButton>
          <PrimaryButton onClick={handleSave}>Save Changes</PrimaryButton>
        </ButtonGroup>
      ) : (
        <ButtonGroup>
          <PrimaryButton onClick={() => setIsEditing(true)}>Edit Profile</PrimaryButton>
          <Link to="/" style={{ flex: 1 }}>
            <SecondaryButton>Back to Swiping</SecondaryButton>
          </Link>
        </ButtonGroup>
      )}
      
      {isEditing && (
        <DangerButton onClick={handleReset}>Reset to Default</DangerButton>
      )}
    </ProfileContainer>
  );
};

export default Profile; 