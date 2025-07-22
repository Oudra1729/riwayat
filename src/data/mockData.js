export const mockBooks = [
  {
    id: 1,
    title: "The Adventures of Huckleberry Finn",
    author: "Mark Twain",
    genre: "Fiction",
    description: "A classic American novel about a young boy's journey down the Mississippi River.",
    summary: "The Adventures of Huckleberry Finn is a novel by American author Mark Twain, which was first published in the United Kingdom in December 1884 and in the United States in February 1885. Commonly named among the Great American Novels, the work is among the first in major American literature to be written throughout in vernacular English, characterized by local color regionalism.",
    coverUrl: "https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=400",
    dateAdded: "2024-01-15"
  },
  {
    id: 2,
    title: "Love Does",
    author: "Bob Goff",
    genre: "Self-Help",
    description: "A powerful exploration of what it means to live a life of love and purpose.",
    summary: "Love Does is a book about what happens when we quit being afraid and actually start living. Bob Goff's stories read like a fairy tale, yet they're true. Through his engaging storytelling, Bob shares how to transform your life through love in action.",
    coverUrl: "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=400",
    dateAdded: "2024-01-14"
  },
  {
    id: 3,
    title: "Rebel of the Sands",
    author: "Alwyn Hamilton",
    genre: "Fantasy",
    description: "A desert fantasy adventure filled with magic, romance, and rebellion.",
    summary: "She's more gunpowder than girl—and the fate of the desert lies in her hands. Mortals rule the desert nation of Miraji, but mythical beasts still roam the wild and barren wastes, and rumor has it that somewhere, djinni still practice their magic.",
    coverUrl: "https://images.pexels.com/photos/1029141/pexels-photo-1029141.jpeg?auto=compress&cs=tinysrgb&w=400",
    dateAdded: "2024-01-13"
  },
  {
    id: 4,
    title: "Birthright",
    author: "Nora Roberts",
    genre: "Romance",
    description: "A thrilling tale of family secrets and unexpected love.",
    summary: "When Callie Dunbrook was born, she was left on the steps of a church. Now, twenty-eight years later, her adoptive parents have revealed the truth: she is the daughter of a family thought to be dead for decades.",
    coverUrl: "https://images.pexels.com/photos/1130980/pexels-photo-1130980.jpeg?auto=compress&cs=tinysrgb&w=400",
    dateAdded: "2024-01-12"
  },
  {
    id: 5,
    title: "The Science of Everything",
    author: "National Geographic",
    genre: "Science",
    description: "Explore the wonders of science through stunning visuals and expert insights.",
    summary: "From the smallest particles to the largest galaxies, this comprehensive guide takes you on a journey through the fundamental principles that govern our universe.",
    coverUrl: "https://images.pexels.com/photos/1370296/pexels-photo-1370296.jpeg?auto=compress&cs=tinysrgb&w=400",
    dateAdded: "2024-01-11"
  },
  {
    id: 6,
    title: "The Night Circus",
    author: "Erin Morgenstern",
    genre: "Fantasy",
    description: "A magical tale of a mysterious circus that appears without warning.",
    summary: "The circus arrives without warning. No announcements precede it. It is simply there, when yesterday it was not. Within the black-and-white striped canvas tents is an utterly unique experience full of breathtaking amazements.",
    coverUrl: "https://images.pexels.com/photos/1290141/pexels-photo-1290141.jpeg?auto=compress&cs=tinysrgb&w=400",
    dateAdded: "2024-01-10"
  }
];

export const mockUsers = [
  {
    id: 1,
    name: "Sarah Johnson",
    email: "sarah@example.com",
    password: "password123",
    avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop"
  },
  {
    id: 2,
    name: "Ahmed Al-Rashid",
    email: "ahmed@example.com", 
    password: "password123",
    avatar: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop"
  },
  {
    id: 3,
    name: "Emma Thompson",
    email: "emma@example.com",
    password: "password123",
    avatar: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop"
  }
];

export const mockReviews = [
  {
    id: 1,
    bookId: 1,
    userId: 1,
    userName: "Sarah Johnson",
    rating: 5,
    comment: "A timeless classic that every reader should experience. Twain's writing is both humorous and profound.",
    date: "2024-01-16"
  },
  {
    id: 2,
    bookId: 1,
    userId: 2,
    userName: "Ahmed Al-Rashid",
    rating: 4,
    comment: "Brilliant storytelling with important social commentary. Still relevant today.",
    date: "2024-01-17"
  },
  {
    id: 3,
    bookId: 2,
    userId: 3,
    userName: "Emma Thompson",
    rating: 5,
    comment: "Bob Goff's stories are inspiring and life-changing. This book made me want to live more boldly.",
    date: "2024-01-15"
  },
  {
    id: 4,
    bookId: 3,
    userId: 1,
    userName: "Sarah Johnson",
    rating: 4,
    comment: "Great fantasy adventure with strong female protagonist. The desert setting is beautifully crafted.",
    date: "2024-01-14"
  }
];