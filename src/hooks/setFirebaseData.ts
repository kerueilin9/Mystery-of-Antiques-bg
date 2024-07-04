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

const setValue = async (
  dataref: any,
  collectionName: string,
  collectionItem: string,
  target: string | number,
  targetItem: string,
  value: number | string
) => {
  const userCollectionRef = collection(dataref, collectionName);
  let q = query(userCollectionRef, where(collectionItem, "==", target));
  let snapshot = await getDocs(q);
  const updatePromises1 = snapshot.docs.map((docSnapshot) =>
    updateDoc(docSnapshot.ref, { [targetItem]: value })
  );
  await Promise.all(updatePromises1);
};

export { increaseValue, setValue };
