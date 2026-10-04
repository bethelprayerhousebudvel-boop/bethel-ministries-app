import { addDoc, collection, deleteDoc, doc, getDocs, updateDoc } from 'firebase/firestore';
import { db } from '../config/firebase';
import type { Announcement } from '../types';

const COLLECTION = 'announcements';

export async function addAnnouncement(announcement: Omit<Announcement, 'id'>): Promise<string> {
  const docRef = await addDoc(collection(db, COLLECTION), announcement);
  return docRef.id;
}

export async function updateAnnouncement(id: string, updates: Partial<Announcement>): Promise<void> {
  await updateDoc(doc(db, COLLECTION, id), updates);
}

export async function deleteAnnouncement(id: string): Promise<void> {
  await deleteDoc(doc(db, COLLECTION, id));
}

export async function getAnnouncementsFromFirestore(): Promise<Announcement[]> {
  const snapshot = await getDocs(collection(db, COLLECTION));
  return snapshot.docs.map((docItem) => ({
    id: docItem.id,
    ...docItem.data(),
  } as Announcement));
}
