import { addDoc, collection, deleteDoc, doc, getDocs, updateDoc } from 'firebase/firestore';
import { db } from '../config/firebase';
import type { PrayerContact } from '../types';

const COLLECTION = 'prayer_contacts';

export async function addPrayerContact(contact: Omit<PrayerContact, 'id'>): Promise<string> {
  const docRef = await addDoc(collection(db, COLLECTION), contact);
  return docRef.id;
}

export async function updatePrayerContact(id: string, updates: Partial<PrayerContact>): Promise<void> {
  await updateDoc(doc(db, COLLECTION, id), updates);
}

export async function deletePrayerContact(id: string): Promise<void> {
  await deleteDoc(doc(db, COLLECTION, id));
}

export async function getPrayerContactsFromFirestore(): Promise<PrayerContact[]> {
  const snapshot = await getDocs(collection(db, COLLECTION));
  return snapshot.docs.map((docItem) => ({
    id: docItem.id,
    ...docItem.data(),
  } as PrayerContact));
}
