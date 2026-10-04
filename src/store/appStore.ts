import { create } from 'zustand';
import type { Song, Poster, Announcement, VideoItem, Pastor, PrayerContact, ChurchInfo } from '../types';

interface AppState {
  songs: Song[];
  posters: Poster[];
  announcements: Announcement[];
  videos: VideoItem[];
  pastors: Pastor[];
  prayerContacts: PrayerContact[];
  churchInfo: ChurchInfo | null;
  loading: boolean;
  error: string | null;
  
  setSongs: (songs: Song[]) => void;
  setPosters: (posters: Poster[]) => void;
  setAnnouncements: (announcements: Announcement[]) => void;
  setVideos: (videos: VideoItem[]) => void;
  setPastors: (pastors: Pastor[]) => void;
  setPrayerContacts: (contacts: PrayerContact[]) => void;
  setChurchInfo: (info: ChurchInfo) => void;
  setLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;
}

export const useAppStore = create<AppState>((set) => ({
  songs: [],
  posters: [],
  announcements: [],
  videos: [],
  pastors: [],
  prayerContacts: [],
  churchInfo: null,
  loading: false,
  error: null,
  
  setSongs: (songs) => set({ songs }),
  setPosters: (posters) => set({ posters }),
  setAnnouncements: (announcements) => set({ announcements }),
  setVideos: (videos) => set({ videos }),
  setPastors: (pastors) => set({ pastors }),
  setPrayerContacts: (contacts) => set({ prayerContacts: contacts }),
  setChurchInfo: (churchInfo) => set({ churchInfo }),
  setLoading: (loading) => set({ loading }),
  setError: (error) => set({ error }),
}));
