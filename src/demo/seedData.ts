export const demoSongs = [
  {
    id: 'song-1',
    title: 'Amazing Grace',
    language: 'en',
    category: 'Worship',
    lyrics: `Amazing grace, how sweet the sound
That saved a wretch like me.
I once was lost, but now am found;
Was blind, but now I see.`,
    dateAdded: '2026-01-12',
    featured: true,
    audioUrl: 'https://example.com/audio/amazing-grace.mp3',
  },
  {
    id: 'song-2',
    title: 'Naa Hridayam',
    language: 'te',
    category: 'Prayer',
    lyrics: `Naa hridayam, Yesu kosam
Naa praarthana, nannu goppa.
Naa jeevana, nenu paaluku
Kristhu raaja, neeku namaskaram.`,
    dateAdded: '2026-01-18',
    featured: false,
  },
  {
    id: 'song-3',
    title: 'Jesus Loves Me',
    language: 'en',
    category: 'Children',
    lyrics: `Jesus loves me, this I know,
For the Bible tells me so;
Little ones to Him belong,
They are weak but He is strong.`,
    dateAdded: '2026-02-01',
    featured: false,
  },
];

export const demoPosters = [
  {
    id: 'poster-1',
    title: 'Sunday Worship',
    type: 'Sunday service',
    imageUrl: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=800&q=80',
    createdAt: '2026-02-03',
  },
  {
    id: 'poster-2',
    title: 'Prayer Meeting',
    type: 'Prayer',
    imageUrl: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=800&q=80',
    createdAt: '2026-02-05',
  },
];

export const demoAnnouncements = [
  {
    id: 'announcement-1',
    title: 'Sunday Worship Service',
    description: 'Join us this Sunday for worship, prayer and Bible teaching. Service starts at 9:00 AM.',
    date: '2026-02-09',
    imageUrl: 'https://images.unsplash.com/photo-1507692049790-de58290a4334?auto=format&fit=crop&w=800&q=80',
    videoUrl: 'https://www.youtube.com/watch?v=QH2-TGUlwu4',
    contactNumber: '+91 90000 00000',
  },
  {
    id: 'announcement-2',
    title: 'Youth Prayer Meeting',
    description: 'Youth prayer and fellowship will be held on Friday evening.',
    date: '2026-02-12',
  },
];

export const demoVideos = [
  {
    id: 'video-1',
    title: 'Sunday Sermon',
    type: 'Sermon',
    videoUrl: 'https://www.youtube.com/watch?v=ysz5S6PUM-U',
    embedUrl: 'https://www.youtube.com/embed/ysz5S6PUM-U',
    createdAt: '2026-02-02',
  },
  {
    id: 'video-2',
    title: 'Worship Song',
    type: 'Worship',
    videoUrl: 'https://www.youtube.com/watch?v=aqz-KE-bpKQ',
    embedUrl: 'https://www.youtube.com/embed/aqz-KE-bpKQ',
    createdAt: '2026-02-05',
  },
];

export const demoPastors = [
  {
    id: 'pastor-1',
    name: 'Pastor David',
    position: 'Senior Pastor',
    bio: 'Pastor David leads the church with prayer, teaching and pastoral care. He is committed to building strong disciples and a Christ-centered family in the congregation.',
    ministry: 'Leadership & Prayer',
    phone: '+91 90000 00000',
    photoUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80',
    whatsappNumber: '+91 90000 00000',
  },
  {
    id: 'pastor-2',
    name: 'Pastor Anitha',
    position: 'Women’s Ministry Leader',
    bio: 'Pastor Anitha serves the women’s ministry, discipleship classes and community prayer gatherings.',
    ministry: 'Women & Discipleship',
    phone: '+91 90000 00001',
    photoUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=800&q=80',
    whatsappNumber: '+91 90000 00001',
  },
];

export const demoPrayerContacts = [
  {
    id: 'prayer-1',
    label: 'Prayer Team',
    phone: '+91 90000 00000',
    whatsapp: 'https://wa.me/919000000000',
    active: true,
  },
  {
    id: 'prayer-2',
    label: 'Pastoral Care',
    phone: '+91 90000 00002',
    whatsapp: 'https://wa.me/919000000002',
    active: true,
  },
];

export const demoChurchInfo = {
  id: 'church-info',
  name: 'Bethel Ministries',
  address: '123 Church Road, Hyderabad, Telangana, India',
  serviceTimings: {
    sunday: '9:00 AM, 11:00 AM, 6:00 PM',
    prayer: 'Friday at 7:00 PM',
    bibleStudy: 'Wednesday at 7:00 PM',
  },
  whatsapp: 'https://wa.me/919000000000',
  facebook: 'https://facebook.com/bethelministries',
  instagram: 'https://instagram.com/bethelministries',
  youtube: 'https://youtube.com/@bethelministries',
};
