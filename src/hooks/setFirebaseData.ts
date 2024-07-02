import {
  DocumentData,
  DocumentReference,
  Firestore,
  collection,
  getDocs,
  increment,
  query,
  updateDoc,
  where,
} from "firebase/firestore";

const increaseValue = async (
  dataref: any,
  collectionName: string,
  collectionItem: string,
  target: string | number,
  targetItem: string,
  increase: number
) => {
  const roomsRef = collection(dataref, collectionName);
  let q = query(roomsRef, where(collectionItem, "==", target));
  let snapshot = await getDocs(q);

  let updatePromises = snapshot.docs.map((docSnapshot) =>
    updateDoc(docSnapshot.ref, { [targetItem]: increment(increase) })
  );

  await Promise.all(updatePromises);
};

export { increaseValue };
