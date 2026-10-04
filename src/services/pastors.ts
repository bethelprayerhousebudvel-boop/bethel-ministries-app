import { addDoc, collection, deleteDoc, doc, getDocs, updateDoc } from 'firebase/firestore';
import { db } from '../config/firebase';
import type { Pastor } from '../types';

const COLLECTION = 'pastors';

export async function addPastor(pastor: Omit<Pastor, 'id'>): Promise<string> {
  const docRef = await addDoc(collection(db, COLLECTION), pastor);
  return docRef.id;
}

export async function updatePastor(id: string, updates: Partial<Pastor>): Promise<void> {
  await updateDoc(doc(db, COLLECTION, id), updates);
}

export async function deletePastor(id: string): Promise<void> {
  await deleteDoc(doc(db, COLLECTION, id));
}

export async function getPastorsFromFirestore(): Promise<Pastor[]> {
  const snapshot = await getDocs(collection(db, COLLECTION));
  return snapshot.docs.map((docItem) => ({
    id: docItem.id,
    ...docItem.data(),
  } as Pastor));
}
