import { doc, getDoc } from 'firebase/firestore';
import { db } from '../config/firebase';

export async function isValidAdminUid(uid: string): Promise<boolean> {
  if (!uid) {
    return false;
  }

  try {
    const adminRef = doc(db, 'admins', uid);
    const snap = await getDoc(adminRef);
    return snap.exists();
  } catch (error) {
    return false;
  }
}
