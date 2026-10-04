import { addDoc, collection, deleteDoc, doc, getDocs, updateDoc } from 'firebase/firestore';
import { db } from '../config/firebase';
import type { VideoItem } from '../types';

const COLLECTION = 'videos';

export async function addVideo(video: Omit<VideoItem, 'id'>): Promise<string> {
  const docRef = await addDoc(collection(db, COLLECTION), video);
  return docRef.id;
}

export async function updateVideo(id: string, updates: Partial<VideoItem>): Promise<void> {
  await updateDoc(doc(db, COLLECTION, id), updates);
}

export async function deleteVideo(id: string): Promise<void> {
  await deleteDoc(doc(db, COLLECTION, id));
}

export async function getVideosFromFirestore(): Promise<VideoItem[]> {
  const snapshot = await getDocs(collection(db, COLLECTION));
  return snapshot.docs.map((docItem) => ({
    id: docItem.id,
    ...docItem.data(),
  } as VideoItem));
}
