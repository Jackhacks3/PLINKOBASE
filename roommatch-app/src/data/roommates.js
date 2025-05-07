const roommates = [
  {
    id: '1',
    name: 'Alex',
    age: 25,
    bio: 'Software engineer working remotely. I\'m clean, quiet, and enjoy cooking. Looking for a place near downtown.',
    imageUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
    images: [
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
      'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
      'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'
    ],
    location: 'Downtown',
    budget: '$800-1200/mo',
    moveInDate: 'June 1st',
    interests: ['Cooking', 'Technology', 'Hiking'],
    cleaningHabits: 'Very tidy',
    schedule: 'Regular 9-5 work hours',
    traits: {
      sleepSchedule: 3, // 1 = Night Owl, 5 = Early Riser
      socialLevel: 2,   // 1 = Homebody, 5 = Very Social
      cleanliness: 5    // 1 = Relaxed, 5 = Very Clean
    }
  },
  {
    id: '2',
    name: 'Jamie',
    age: 28,
    bio: 'Grad student in psychology. Looking for a quiet place to study. I love cats and am an early riser.',
    imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
    images: [
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
      'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'
    ],
    location: 'University District',
    budget: '$700-900/mo',
    moveInDate: 'July 15th',
    interests: ['Reading', 'Psychology', 'Cats'],
    cleaningHabits: 'Clean and organized',
    schedule: 'Early riser, studies during day',
    traits: {
      sleepSchedule: 5, // 1 = Night Owl, 5 = Early Riser
      socialLevel: 3,   // 1 = Homebody, 5 = Very Social
      cleanliness: 4    // 1 = Relaxed, 5 = Very Clean
    }
  },
  {
    id: '3',
    name: 'Taylor',
    age: 24,
    bio: 'Barista and part-time musician. I practice guitar but use headphones after 8pm. Looking for creative roommates.',
    imageUrl: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
    images: [
      'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
      'https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'
    ],
    location: 'Arts District',
    budget: '$600-800/mo',
    moveInDate: 'ASAP',
    interests: ['Music', 'Art', 'Coffee'],
    cleaningHabits: 'Somewhat tidy',
    schedule: 'Works mornings, free evenings',
    traits: {
      sleepSchedule: 2, // 1 = Night Owl, 5 = Early Riser
      socialLevel: 4,   // 1 = Homebody, 5 = Very Social
      cleanliness: 3    // 1 = Relaxed, 5 = Very Clean
    }
  },
  {
    id: '4',
    name: 'Morgan',
    age: 30,
    bio: 'Marketing manager who works from home. I\'m tidy, organized, and looking for a place with good internet.',
    imageUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=776&q=80',
    images: [
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=776&q=80',
      'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=776&q=80',
      'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=776&q=80'
    ],
    location: 'Midtown',
    budget: '$900-1300/mo',
    moveInDate: 'August 1st',
    interests: ['Marketing', 'Running', 'Cooking'],
    cleaningHabits: 'Very organized',
    schedule: 'Works from home, regular hours',
    traits: {
      sleepSchedule: 4, // 1 = Night Owl, 5 = Early Riser
      socialLevel: 3,   // 1 = Homebody, 5 = Very Social
      cleanliness: 5    // 1 = Relaxed, 5 = Very Clean
    }
  },
  {
    id: '5',
    name: 'Jordan',
    age: 26,
    bio: 'Teacher who loves hiking on weekends. Looking for roommates with similar schedules and clean habits.',
    imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
    images: [
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
      'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
      'https://images.unsplash.com/photo-1528763380143-65b3ac89a3ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'
    ],
    location: 'Suburbs',
    budget: '$700-1000/mo',
    moveInDate: 'September 1st',
    interests: ['Hiking', 'Education', 'Reading'],
    cleaningHabits: 'Clean and tidy',
    schedule: 'Teacher hours, free weekends',
    traits: {
      sleepSchedule: 4, // 1 = Night Owl, 5 = Early Riser
      socialLevel: 2,   // 1 = Homebody, 5 = Very Social
      cleanliness: 4    // 1 = Relaxed, 5 = Very Clean
    }
  }
];

export default roommates; 