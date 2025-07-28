const API_KEY = "AIzaSyBiwZRWJB-Nfr0e9oMjLGKl2BpsdLnNbq4";

export const YOUTUBE_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=IN&maxResults=50&key=" +
  API_KEY;

export const YOUTUBE_SEARCH_API =
  "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

export const CHAT_DATA = [
  {
    id: "c1",
    user: "OriginalPoster",
    message: "What's the best way to learn Rust in 2025?",
    timestamp: "2025-07-24T08:00:00Z",
    replies: [
      {
        id: "c2",
        user: "CodeNinja42",
        message: "The official Rust Book is still the best place to start.",
        timestamp: "2025-07-24T08:10:00Z",
        replies: [
          {
            id: "c3",
            user: "TypeSafe",
            message: "Totally agree. It’s very beginner-friendly.",
            timestamp: "2025-07-24T08:12:00Z",
            replies: [],
          },
          {
            id: "c4",
            user: "MemoryWizard",
            message: "Also try building a CLI tool as you read it.",
            timestamp: "2025-07-24T08:15:00Z",
            replies: [
              {
                id: "c5",
                user: "CLI_Junkie",
                message: "Yes! That hands-on learning is super effective.",
                timestamp: "2025-07-24T08:18:00Z",
                replies: [],
              },
            ],
          },
        ],
      },
      {
        id: "c6",
        user: "RustyDev",
        message: "I'd also suggest checking out 'Rust by Example'.",
        timestamp: "2025-07-24T08:11:00Z",
        replies: [],
      },
      {
        id: "c7",
        user: "Skeptic101",
        message: "Why not just learn Go? Easier and more jobs.",
        timestamp: "2025-07-24T08:12:30Z",
        replies: [
          {
            id: "c8",
            user: "RustFan88",
            message:
              "Depends on what you're building. Rust is safer for systems.",
            timestamp: "2025-07-24T08:13:30Z",
            replies: [
              {
                id: "c9",
                user: "LanguageNeutral",
                message: "Both are great, but have different use cases.",
                timestamp: "2025-07-24T08:14:30Z",
                replies: [],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "a1",
    user: "New Post",
    message: "What's the best way to learn Rust in 2025?",
    timestamp: "2025-07-24T08:00:00Z",
    replies: [
      {
        id: "c2",
        user: "CodeNinja42",
        message: "The official Rust Book is still the best place to start.",
        timestamp: "2025-07-24T08:10:00Z",
        replies: [
          {
            id: "c3",
            user: "TypeSafe",
            message: "Totally agree. It’s very beginner-friendly.",
            timestamp: "2025-07-24T08:12:00Z",
            replies: [],
          },
        ],
      },
      {
        id: "c6",
        user: "RustyDev",
        message: "I'd also suggest checking out 'Rust by Example'.",
        timestamp: "2025-07-24T08:11:00Z",
        replies: [],
      },
      {
        id: "c7",
        user: "Skeptic101",
        message: "Why not just learn Go? Easier and more jobs.",
        timestamp: "2025-07-24T08:12:30Z",
        replies: [
          {
            id: "c8",
            user: "RustFan88",
            message:
              "Depends on what you're building. Rust is safer for systems.",
            timestamp: "2025-07-24T08:13:30Z",
            replies: [
              {
                id: "c9",
                user: "LanguageNeutral",
                message: "Both are great, but have different use cases.",
                timestamp: "2025-07-24T08:14:30Z",
                replies: [],
              },
            ],
          },
        ],
      },
    ],
  },
];

export const LIVE_CHAT_DATA = [
  {
    id: "c1",
    user: "OriginalPoster",
    message: "What's the best way to learn Rust in 2025?",
  },
  {
    id: "c2",
    user: "CodeNinja42",
    message: "The official Rust Book is still the best place to start.",
  },
  {
    id: "c3",
    user: "TypeSafe",
    message: "Totally agree. It’s very beginner-friendly.",
  },
  {
    id: "c4",
    user: "MemoryWizard",
    message: "Also try building a CLI tool as you read it.",
  },
  {
    id: "c5",
    user: "CLI_Junkie",
    message: "Yes! That hands-on learning is super effective.",
  },
  {
    id: "c6",
    user: "RustyDev",
    message: "I'd also suggest checking out 'Rust by Example'.",
  },
  {
    id: "c7",
    user: "Skeptic101",
    message: "Why not just learn Go? Easier and more jobs.",
  },
  {
    id: "c8",
    user: "RustFan88",
    message: "Depends on what you're building. Rust is safer for systems.",
  },
  {
    id: "c9",
    user: "LanguageNeutral",
    message: "Both are great, but have different use cases.",
  },
  {
    id: "a1",
    user: "New Post",
    message: "What's the best way to learn Rust in 2025?",
  },
  {
    id: "c2",
    user: "CodeNinja42",
    message: "The official Rust Book is still the best place to start.",
  },
  {
    id: "c3",
    user: "TypeSafe",
    message: "Totally agree. It’s very beginner-friendly.",
  },
  {
    id: "c6",
    user: "RustyDev",
    message: "I'd also suggest checking out 'Rust by Example'.",
  },
  {
    id: "c7",
    user: "Skeptic101",
    message: "Why not just learn Go? Easier and more jobs.",
  },
  {
    id: "c8",
    user: "RustFan88",
    message: "Depends on what you're building. Rust is safer for systems.",
  },
  {
    id: "c9",
    user: "LanguageNeutral",
    message: "Both are great, but have different use cases.",
  },
];
