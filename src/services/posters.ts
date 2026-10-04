import { addDoc, collection, deleteDoc, doc, getDocs, updateDoc } from 'firebase/firestore';
import { db } from '../config/firebase';
import type { Poster } from '../types';

const COLLECTION = 'posters';

export async function addPoster(poster: Omit<Poster, 'id'>): Promise<string> {
  const docRef = await addDoc(collection(db, COLLECTION), poster);
  return docRef.id;
}

export async function updatePoster(id: string, updates: Partial<Poster>): Promise<void> {
  await updateDoc(doc(db, COLLECTION, id), updates);
}

export async function deletePoster(id: string): Promise<void> {
  await deleteDoc(doc(db, COLLECTION, id));
}

export async function getPostersFromFirestore(): Promise<Poster[]> {
  const snapshot = await getDocs(collection(db, COLLECTION));
  return snapshot.docs.map((docItem) => ({
    id: docItem.id,
    ...docItem.data(),
  } as Poster));
}
