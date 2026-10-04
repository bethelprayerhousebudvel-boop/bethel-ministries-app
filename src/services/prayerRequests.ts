import { addDoc, collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../config/firebase';
import type { PrayerRequest } from '../types';

const COLLECTION = 'prayer_requests';

export async function submitPrayerRequest(request: PrayerRequest): Promise<string> {
  const docRef = await addDoc(collection(db, COLLECTION), {
    ...request,
    createdAt: new Date().toISOString(),
    status: 'new',
  });
  return docRef.id;
}

export async function getPrayerRequests(): Promise<PrayerRequest[]> {
  const snapshot = await getDocs(collection(db, COLLECTION));
  return snapshot.docs.map((docItem) => ({
    id: docItem.id,
    ...docItem.data(),
  } as PrayerRequest));
}
