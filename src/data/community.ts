export const groupUrl = "https://www.facebook.com/groups/highlevelbangladesh";
export const albumUrl =
  "https://www.playbook.com/s/ghlprojects/QpYamYiVaSVjLdKCfJoqWhuU";
export const resources = [
  {
    number: "01",
    type: "GET UNSTUCK",
    title: "HighLevel Help Center",
    description: "Find step-by-step answers for the tools you use every day.",
    url: "https://help.gohighlevel.com/",
  },
  {
    number: "02",
    type: "EXPLORE THE PLATFORM",
    title: "Discover HighLevel",
    description: "Explore the platform and find what fits your business.",
    url: "https://www.gohighlevel.com/",
  },
  {
    number: "03",
    type: "BUILD YOUR SKILLS",
    title: "HighLevel Certification",
    description: "Explore structured learning and certification opportunities.",
    url: "https://www.gohighlevel.com/certifications",
  },
  {
    number: "04",
    type: "STAY IN THE LOOP",
    title: "Product Updates",
    description: "Keep up with new features, improvements, and releases.",
    url: "https://ideas.gohighlevel.com/changelog",
  },
];
export const photos = [
  {
    name: "meetup",
    alt: "GHL Bangladesh meetup attendees gathered for a group photograph",
    caption: "The HighLevel Bangladesh community.",
  },
  {
    name: "conversations",
    alt: "Meetup attendees sitting together and exchanging ideas",
    caption: "Members talking together at the meetup.",
  },
  {
    name: "speaker",
    alt: "A speaker sharing ideas with the GHL Bangladesh meetup audience",
    caption: "A presentation at the Bangladesh meetup.",
  },
  {
    name: "building",
    alt: "A GHL Bangladesh attendee working on a laptop",
    caption: "An attendee working on a laptop.",
  },
  {
    name: "workshop",
    alt: "An attendee presenting alongside a projected screen at the meetup",
    caption: "A session with a projected presentation.",
  },
  {
    name: "dsc08436",
    alt: "Bangladesh Parliament building beyond green trees in Dhaka",
    caption: "A view toward the Bangladesh Parliament building.",
  },
  {
    name: "dsc08687",
    alt: "GHL Bangladesh meetup members gathered in front of the event banner",
    caption: "Together at the GHL Bangladesh meetup.",
  },
  {
    name: "dsc08636",
    alt: "Two meetup attendees reviewing a laptop together beside the GHL Bangladesh banner",
    caption: "Working through ideas together.",
  },
  {
    name: "dsc08567",
    alt: "A speaker addressing meetup attendees in front of a projected screen as an audience member raises a hand",
    caption: "Questions and conversation during a meetup session.",
  },
  {
    name: "dsc08546",
    alt: "Meetup attendees listening to a session, with an attendee holding a phone",
    caption: "Listening to the discussion.",
  },
  {
    name: "dsc08543",
    alt: "A meetup speaker holding a microphone in front of a projected presentation",
    caption: "Sharing ideas with the room.",
  },
  {
    name: "dsc08517",
    alt: "Rows of attendees seated in the GHL Bangladesh meetup venue",
    caption: "The meetup in session.",
  },
  {
    name: "dsc08501",
    alt: "GHL Bangladesh attendees gathered in rows of chairs beside the purple meetup banner",
    caption: "The community gathered at the meetup venue.",
  },
  {
    name: "dsc08489",
    alt: "Five attendees posing together in front of the GHL Bangladesh meetup banner",
    caption: "A photo together by the event banner.",
  },
  {
    name: "dsc08463",
    alt: "Three meetup attendees sitting together in a small group",
    caption: "A conversation at the meetup.",
  },
  {
    name: "dsc08408",
    alt: "Three attendees smiling and posing while seated at the meetup",
    caption: "Faces from the meetup.",
  },
  {
    name: "dsc08339",
    alt: "Meetup attendees seen from behind facing a speaker and projected presentation",
    caption: "Following a meetup session.",
  },
  {
    name: "dsc08278",
    alt: "Attendees seated in the meetup venue among rows of white chairs",
    caption: "A moment in the meetup audience.",
  },
  {
    name: "dsc08260",
    alt: "Three seated meetup attendees talking together with other small groups behind them",
    caption: "Conversations around the meetup room.",
  },
  {
    name: "dsc08237",
    alt: "A GHL Bangladesh meetup attendee working at an open laptop",
    caption: "Working at the meetup.",
  },
];
// Events on the homepage. Facts come from docs/redesign.md; update `nextEvent`
// once the date and venue of the next meetup are confirmed.
export const lastEvent = {
  name: "GHL Meetup Bangladesh 2026",
  date: "2026-06-11",
  dateLabel: "11 June 2026",
  summary:
    "An unofficial, community-driven meetup: GHL users in one room, asking questions and sharing what was actually working for them.",
  organisers: "Co-organised by Mehedi Sharif and Shariful Islam",
  galleryUrl: "/events/meetup-2026",
  // group photo shown on the event card (one of the gallery photos above)
  photo: "meetup",
};
export const nextEvent = {
  dateLabel: "Date to be announced",
  place: "Bangladesh",
  title: "Your next local connection starts here.",
  summary:
    "Details of the next Bangladesh chapter meetup will be shared here once confirmed.",
};
// Volunteers page: roles volunteers commonly take on at community meetups
// (based on public volunteer pages such as WordCamp's). They are examples,
// not confirmed GHL Bangladesh roles; replace them once roles are announced.
export const volunteerRoles = [
  {
    title: "Welcome & check-in",
    description:
      "Greet people at the door, help with check-in and point the way.",
    when: "On the day",
    icon: "M4 6h16v12H4zM8 10.5h8M8 14h5",
  },
  {
    title: "Setup & logistics",
    description:
      "Arrange chairs, signs and screens before the start, and tidy up after.",
    when: "On the day",
    icon: "M4 4h7v7H4zM13 4h7v7h-7zM4 13h7v7H4zM13 13h7v7h-7z",
  },
  {
    title: "Photos & video",
    description:
      "Capture the talks and the conversations around them. A phone camera is often enough.",
    when: "On the day",
    icon: "M4 8h3.5l2-2.5h5l2 2.5H20v11H4zM12 16.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z",
  },
  {
    title: "Social media",
    description:
      "Share live updates and photos, and help put the recap together afterwards.",
    when: "During & after",
    icon: "M4 5h16v11H9.5L5 19.5V16H4z",
  },
  {
    title: "Session support",
    description: "Help speakers with microphones, slides and timing.",
    when: "On the day",
    icon: "M12 3.5a3 3 0 0 0-3 3v5a3 3 0 0 0 6 0v-5a3 3 0 0 0-3-3ZM6.5 11.5a5.5 5.5 0 0 0 11 0M12 17v3.5",
  },
  {
    title: "Content & design",
    description:
      "Write announcements and make simple graphics for upcoming meetups.",
    when: "Before meetups",
    icon: "M5 19l3.5-.8L19 7.7 16.3 5 5.8 15.5zM14.5 6.8l2.7 2.7",
  },
];
