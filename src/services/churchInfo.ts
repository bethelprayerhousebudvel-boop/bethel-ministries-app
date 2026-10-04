import { doc, getDoc, setDoc } from 'firebase/firestore';
import { db } from '../config/firebase';
import type { ChurchInfo } from '../types';

const DOC_ID = 'church-info';
const COLLECTION = 'church_info';

export async function getChurchInfoFromFirestore(): Promise<ChurchInfo> {
  const docRef = doc(db, COLLECTION, DOC_ID);
  const snap = await getDoc(docRef);
  if (snap.exists()) {
    return { id: snap.id, ...snap.data() } as ChurchInfo;
  }
  throw new Error('Church info not found');
}

export async function updateChurchInfo(updates: Partial<ChurchInfo>): Promise<void> {
  const docRef = doc(db, COLLECTION, DOC_ID);
  await setDoc(docRef, updates, { merge: true });
}
