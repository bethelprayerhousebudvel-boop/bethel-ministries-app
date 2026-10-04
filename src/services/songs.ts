import { addDoc, collection, deleteDoc, doc, getDocs, updateDoc } from 'firebase/firestore';
import { db } from '../config/firebase';
import type { Song } from '../types';

const COLLECTION = 'songs';

export async function addSong(song: Omit<Song, 'id'>): Promise<string> {
  const docRef = await addDoc(collection(db, COLLECTION), song);
  return docRef.id;
}

export async function updateSong(id: string, updates: Partial<Song>): Promise<void> {
  await updateDoc(doc(db, COLLECTION, id), updates);
}

export async function deleteSong(id: string): Promise<void> {
  await deleteDoc(doc(db, COLLECTION, id));
}

export async function getSongsFromFirestore(): Promise<Song[]> {
  const snapshot = await getDocs(collection(db, COLLECTION));
  return snapshot.docs.map((docItem) => ({
    id: docItem.id,
    ...docItem.data(),
  } as Song));
}
