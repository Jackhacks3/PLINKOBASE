import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const MessagesContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
`;

const MessagesHeader = styled.div`
  margin-bottom: 20px;
`;

const ConversationsList = styled.div`
  background-color: white;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
`;

const ConversationItem = styled.div`
  display: flex;
  padding: 15px;
  border-bottom: 1px solid var(--light-gray);
  position: relative;
  cursor: pointer;
  
  &:last-child {
    border-bottom: none;
  }
  
  &:hover {
    background-color: var(--light-gray);
  }
`;

const ProfilePic = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  overflow: hidden;
  margin-right: 15px;
  flex-shrink: 0;
  position: relative;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const UnreadBadge = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 12px;
  height: 12px;
  background-color: var(--primary-color);
  border-radius: 50%;
  border: 2px solid white;
`;

const MessageContent = styled.div`
  flex: 1;
  min-width: 0;
`;

const MessageHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 5px;
`;

const UserName = styled.h3`
  font-size: 16px;
  margin: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Timestamp = styled.span`
  font-size: 12px;
  color: var(--dark-gray);
`;

const MessagePreview = styled.p`
  margin: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: var(--dark-gray);
  font-size: 14px;
`;

const EmptyState = styled.div`
  text-align: center;
  padding: 40px 20px;
`;

const EmptyStateButton = styled.button`
  background-color: var(--primary-color);
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 30px;
  font-weight: bold;
  margin-top: 20px;
  cursor: pointer;
`;

// Chat components
const ChatContainer = styled.div`
  background-color: white;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  height: 60vh;
`;

const ChatHeader = styled.div`
  display: flex;
  align-items: center;
  padding: 15px;
  border-bottom: 1px solid var(--light-gray);
`;

const BackButton = styled.button`
  background: none;
  border: none;
  font-size: 20px;
  margin-right: 10px;
  cursor: pointer;
`;

const ChatMessages = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 15px;
  display: flex;
  flex-direction: column;
`;

const Message = styled.div`
  max-width: 70%;
  padding: 10px 15px;
  border-radius: 18px;
  margin-bottom: 10px;
  word-break: break-word;
  
  ${props => props.sent ? `
    align-self: flex-end;
    background-color: var(--primary-color);
    color: white;
  ` : `
    align-self: flex-start;
    background-color: var(--light-gray);
    color: var(--text-color);
  `}
`;

const InputContainer = styled.form`
  display: flex;
  padding: 15px;
  border-top: 1px solid var(--light-gray);
`;

const MessageInput = styled.input`
  flex: 1;
  padding: 10px 15px;
  border-radius: 30px;
  border: 1px solid var(--medium-gray);
  font-size: 14px;
  outline: none;
  
  &:focus {
    border-color: var(--primary-color);
  }
`;

const SendButton = styled.button`
  background-color: var(--primary-color);
  color: white;
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  margin-left: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const Messages = () => {
  const [conversations, setConversations] = useState([]);
  const [selectedConversation, setSelectedConversation] = useState(null);
  const [messages, setMessages] = useState({});
  const [newMessage, setNewMessage] = useState('');
  const chatEndRef = useRef(null);

  // Load matches from localStorage
  useEffect(() => {
    const savedMatches = JSON.parse(localStorage.getItem('roommate-matches') || '[]');
    // Initialize with default messages
    const initialConversations = savedMatches.map(match => ({
      ...match,
      lastMessage: getInitialMessage(match.name),
      timestamp: '2 hours ago',
      unread: true,
    }));
    
    // Add default conversations if there are no matches
    if (initialConversations.length === 0) {
      setConversations([
        {
          id: '1',
          name: 'Jamie',
          age: 28,
          imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
          lastMessage: "Hey! I really liked your profile. Would love to chat about the apartment.",
          timestamp: '2 hours ago',
          unread: true,
        },
        {
          id: '2',
          name: 'Alex',
          age: 25,
          imageUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
          lastMessage: "When would you be available to meet?",
          timestamp: '1 day ago',
          unread: false,
        },
        {
          id: '3',
          name: 'Morgan',
          age: 30,
          imageUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=776&q=80',
          lastMessage: "I have a viewing scheduled for this Saturday at 2pm. Would you be interested in joining?",
          timestamp: '3 days ago',
          unread: false,
        },
      ]);
    } else {
      setConversations(initialConversations);
    }

    // Initialize messages for each conversation
    const initialMessages = {};
    initialConversations.forEach(conv => {
      initialMessages[conv.id] = [
        { id: 1, text: getInitialMessage(conv.name), sent: false, timestamp: new Date().toISOString() }
      ];
    });
    setMessages(initialMessages);
  }, []);

  // Scroll to bottom when new messages arrive
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, selectedConversation]);

  const getInitialMessage = (name) => {
    const messages = [
      `Hey! I really liked your profile. Would love to be roommates!`,
      `Hi there! I think we'd be great roommates. When are you looking to move?`,
      `Hello! I'm interested in discussing the possibility of sharing an apartment. Are you still looking?`
    ];
    return messages[Math.floor(Math.random() * messages.length)];
  };

  const selectConversation = (conversation) => {
    // Mark as read when selected
    setConversations(prev => 
      prev.map(conv => 
        conv.id === conversation.id 
          ? { ...conv, unread: false } 
          : conv
      )
    );
    setSelectedConversation(conversation);
  };

  const handleMessageSubmit = (e) => {
    e.preventDefault();
    if (!newMessage.trim() || !selectedConversation) return;

    // Add message to the conversation
    const newMsg = {
      id: Date.now(),
      text: newMessage.trim(),
      sent: true,
      timestamp: new Date().toISOString()
    };

    // Update messages state
    setMessages(prev => ({
      ...prev,
      [selectedConversation.id]: [...(prev[selectedConversation.id] || []), newMsg]
    }));

    // Update conversation with latest message
    setConversations(prev => 
      prev.map(conv => 
        conv.id === selectedConversation.id 
          ? { ...conv, lastMessage: newMessage.trim(), timestamp: 'Just now' } 
          : conv
      )
    );

    // Clear input
    setNewMessage('');

    // Simulate response after 1-3 seconds
    setTimeout(() => {
      const responses = [
        "That sounds great! When would you like to meet?",
        "I'm interested too! Do you have any specific requirements for a roommate?",
        "Thanks for reaching out! Would you prefer to visit the place first?",
        "I like your profile too! What area are you looking to live in?",
        "Perfect timing! I've been looking for someone like you to share with!"
      ];
      
      const responseMsg = {
        id: Date.now(),
        text: responses[Math.floor(Math.random() * responses.length)],
        sent: false,
        timestamp: new Date().toISOString()
      };

      setMessages(prev => ({
        ...prev,
        [selectedConversation.id]: [...(prev[selectedConversation.id] || []), responseMsg]
      }));

      setConversations(prev => 
        prev.map(conv => 
          conv.id === selectedConversation.id 
            ? { ...conv, lastMessage: responseMsg.text, timestamp: 'Just now' } 
            : conv
        )
      );
    }, 1000 + Math.random() * 2000);
  };

  const formatMessageTime = (timestamp) => {
    return new Date(timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  const backToConversations = () => {
    setSelectedConversation(null);
  };

  return (
    <MessagesContainer>
      <MessagesHeader>
        <h1>Your Messages</h1>
      </MessagesHeader>
      
      {!selectedConversation ? (
        conversations.length > 0 ? (
          <ConversationsList>
            {conversations.map((conversation) => (
              <ConversationItem 
                key={conversation.id}
                onClick={() => selectConversation(conversation)}
              >
                <ProfilePic>
                  <img src={conversation.imageUrl} alt={conversation.name} />
                  {conversation.unread && <UnreadBadge />}
                </ProfilePic>
                
                <MessageContent>
                  <MessageHeader>
                    <UserName>{conversation.name}, {conversation.age}</UserName>
                    <Timestamp>{conversation.timestamp}</Timestamp>
                  </MessageHeader>
                  <MessagePreview>{conversation.lastMessage}</MessagePreview>
                </MessageContent>
              </ConversationItem>
            ))}
          </ConversationsList>
        ) : (
          <EmptyState>
            <h2>No messages yet</h2>
            <p>Match with roommates to start chatting!</p>
            <Link to="/">
              <EmptyStateButton>Find Roommates</EmptyStateButton>
            </Link>
          </EmptyState>
        )
      ) : (
        <div>
          <ChatContainer>
            <ChatHeader>
              <BackButton onClick={backToConversations}>&larr;</BackButton>
              <ProfilePic>
                <img src={selectedConversation.imageUrl} alt={selectedConversation.name} />
              </ProfilePic>
              <UserName>{selectedConversation.name}, {selectedConversation.age}</UserName>
            </ChatHeader>
            
            <ChatMessages>
              {messages[selectedConversation.id]?.map((message) => (
                <Message key={message.id} sent={message.sent}>
                  {message.text}
                  <div style={{ fontSize: '0.7rem', opacity: 0.7, marginTop: '5px', textAlign: message.sent ? 'right' : 'left' }}>
                    {formatMessageTime(message.timestamp)}
                  </div>
                </Message>
              ))}
              <div ref={chatEndRef} />
            </ChatMessages>
            
            <InputContainer onSubmit={handleMessageSubmit}>
              <MessageInput
                type="text"
                placeholder="Type a message..."
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
              />
              <SendButton type="submit">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="22" y1="2" x2="11" y2="13"></line>
                  <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                </svg>
              </SendButton>
            </InputContainer>
          </ChatContainer>
        </div>
      )}
    </MessagesContainer>
  );
};

export default Messages; 