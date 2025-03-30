import mobileProject10 from "../assets/ProjectsImg/MobileApps/mob.png";
import mobileProject101 from "../assets/ProjectsImg/MobileApps/mob1.png";
import mobileProject102 from "../assets/ProjectsImg/MobileApps/mob2.png";
import mobileProject103 from "../assets/ProjectsImg/MobileApps/mob3.png";

import mobileProject11 from "../assets/ProjectsImg/MobileApps/mob11.png";
import mobileProject111 from "../assets/ProjectsImg/MobileApps/mob111.png";
import mobileProject112 from "../assets/ProjectsImg/MobileApps/mob112.png";
import mobileProject113 from "../assets/ProjectsImg/MobileApps/mob113.png";

export const mobileAppProjects = [
  {
    id: 501,
    image: mobileProject10,
    gallery: [
      mobileProject10,
      mobileProject101,
      mobileProject102,
      mobileProject103,
    ],
    title: "Swipsel",
    description:
      "Swipsel is a modern marketplace app built with React Native, designed for renting, swapping, and buying properties, vehicles, and other items. With a clean and user-friendly interface, it makes finding and listing items effortless.",
    overview:
      "Swipsel is an intuitive and feature-rich mobile marketplace application that enables users to browse, list, and manage various items, including properties, vehicles, and more. Designed for seamless transactions, it offers an engaging UI, smart search functionality, real-time communication, and listing management tools to enhance the user experience.",
    techStack: [
      "React Native",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Redux Toolkit",
      "Firebase (for authentication & notifications)",
      "Cloudinary (for image uploads)",
      "Stripe (Payment Gateway)",
      "Tailwind CSS",
    ],
    features: [
      "Browse & List Items – Find properties, vehicles, and more, or post your own listings with details and images.",
      "Smart Search & Filters – Easily search and filter listings by category, price, discount, and more.",
      "Profile & Account Management – Create a profile, manage listings, and customize preferences.",
      "Save & Bookmark – Keep track of your favorite listings for quick access later.",
      "Smooth & Engaging UI – Well-organized categories, high-quality images, and easy navigation.",
      "Chat & Notifications – Message sellers, get updates, and stay informed in real time.",
      "Post Ads & Subscribe – List items for rent or sale, with premium plans for extra visibility.",
    ],
    duration: "2 months",
    startDate: "2023-06-24",
    endDate: "2023-08-22",
    role: "MobileApp Developer",
    status: "Completed",
    client: "Upwork",
    category: "MobileApp",
  },

  {
    id: 502,
    image: mobileProject11,
    gallery: [
      mobileProject11,
      mobileProject111,
      mobileProject112,
      mobileProject113,
    ],
    title: "Mula Wallet",
    description:
      "Mula Wallet is a secure and fast digital payment app built with React Native and Firebase. It enables seamless money transfers, withdrawals, and event ticket purchases, ensuring a hassle-free payment experience.",
    overview:
      "A modern digital wallet offering secure transactions, instant money transfers, and event ticket purchases with real-time notifications.",
    techStack: [
      "React Native",
      "Expo",
      "Firebase (Auth, Firestore, Cloud Functions, Notifications)",
      "Node.js",
      "Express.js",
      "PostgreSQL (Relational Database)",
      "Prisma (ORM)",
      "Redis (Caching & Session Management)",
      "WebSockets (Live chat & notifications)",
      "Redux Toolkit",
      "Stripe (Payment Processing)",
      "Cloudinary (Image Storage)",
    ],
    features: [
      "Secure Login & Authentication – Firebase with OTP & Email login.",
      "User Verification – Multi-step verification for secure transactions.",
      "Real-time Money Transfers & Withdrawals – Instant transactions using WebSockets & Redis.",
      "Live Chat & Messaging – Secure in-app messaging for buyers & sellers.",
      "Push Notifications – Real-time updates on transactions & messages.",
      "User Profile – Manage personal details, payment methods & security settings.",
      "Seller Account – Special dashboard with transaction insights.",
      "Event Ticket Selling – Buy & sell event tickets with QR-based verification.",
    ],
    duration: "2.5 months",
    startDate: "2023-08-01",
    endDate: "2023-10-15",
    role: "MobileApp Developer",
    status: "Completed",
    client: "Upwork",
    category: "MobileApp",
  },
];
