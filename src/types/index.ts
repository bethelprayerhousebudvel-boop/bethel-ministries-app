export type Language = 'en' | 'te';

export type Song = {
  id: string;
  title: string;
  language: Language;
  category: string;
  lyrics: string;
  dateAdded: string;
  featured?: boolean;
  audioUrl?: string;
};

export type Poster = {
  id: string;
  title: string;
  imageUrl: string;
  type: string;
  createdAt: string;
};

export type Announcement = {
  id: string;
  title: string;
  description: string;
  date: string;
  imageUrl?: string;
  videoUrl?: string;
  contactNumber?: string;
};

export type VideoItem = {
  id: string;
  title: string;
  type: string;
  videoUrl: string;
  embedUrl?: string;
  createdAt: string;
};

export type Pastor = {
  id: string;
  name: string;
  position: string;
  bio: string;
  ministry: string;
  phone: string;
  photoUrl: string;
  whatsappNumber?: string;
};

export type PrayerContact = {
  id: string;
  label: string;
  phone: string;
  whatsapp?: string;
  active: boolean;
};

export type ChurchInfo = {
  id: string;
  name: string;
  address: string;
  serviceTimings: {
    sunday: string;
    prayer: string;
    bibleStudy: string;
  };
  whatsapp?: string;
  facebook?: string;
  instagram?: string;
  youtube?: string;
};

export type PrayerRequest = {
  id?: string;
  name: string;
  phone?: string;
  request: string;
  createdAt?: string;
};
