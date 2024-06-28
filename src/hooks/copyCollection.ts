import { collection, doc, getDocs, writeBatch } from "firebase/firestore";
import { db } from "@/firebaseConfig";

async function copyCollection(srcCollection: string, destCollection: string) {
  try {
    const srcCollectionRef = collection(db, srcCollection);
    const snapshot = await getDocs(srcCollectionRef);
    const batch = writeBatch(db);

    snapshot.forEach((docSnapshot) => {
      const destDocRef = doc(db, destCollection, docSnapshot.id);
      batch.set(destDocRef, docSnapshot.data());
    });

    await batch.commit();
    console.log(
      `Collection ${srcCollection} has been copied to ${destCollection}`
    );
  } catch (error) {
    console.error("Error copying collection:", error);
  }
}

export default copyCollection;
