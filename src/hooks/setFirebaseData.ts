import { db, realtimeDB } from "@/firebaseConfig";
import {
  push,
  set,
  ref as fireRef,
  orderByChild,
  equalTo,
  get,
  update,
  query as rtQuery,
} from "firebase/database";
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

const increaseValueWithDB = async (
  roomId: number,
  targetItem: string,
  increase: number
) => {
  const roomsRef = collection(db, "rooms");
  let q = query(roomsRef, where("roomId", "==", roomId));
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

const setPlayerRecord = async (
  dataref: any,
  playerName: string | number,
  round: number | string,
  value: number | string
) => {
  const userCollectionRef = collection(dataref, "players");
  let q = query(userCollectionRef, where("name", "==", playerName));
  let snapshot = await getDocs(q);
  const docSnapshot = snapshot.docs[0];
  const playerData = docSnapshot.data() as DocumentData;
  const roundKey = `round${round}`;
  const roundData = playerData.record[roundKey] || [];
  roundData.push(value);
  const updatePromises = snapshot.docs.map((docSnapshot) =>
    updateDoc(docSnapshot.ref, {
      record: { ...playerData.record, [roundKey]: roundData },
    })
  );
  await Promise.all(updatePromises);
};

const setRTValue = async (path: string, value: string | number | object) => {
  const dataRef = fireRef(realtimeDB, path);
  const newItemRef = push(dataRef);
  await set(newItemRef, value);
};

const setRTRoomValue = async (
  roomId: string,
  target: string,
  value: string | number | object
) => {
  const roomsRef = fireRef(realtimeDB, "/rooms");
  const roomQuery = rtQuery(roomsRef, orderByChild("roomId"), equalTo(roomId));
  const snapshot = await get(roomQuery);

  if (snapshot.exists()) {
    const data = snapshot.val();
    const roomKey = Object.keys(data)[0];
    const itemValue = data[roomKey][target] || 0;
    const newRound = itemValue + value;

    const roundRef = fireRef(realtimeDB, `/rooms/${roomKey}`);
    update(roundRef, { [target]: newRound }).then(() => {
      console.log("Round incremented successfully!");
    });
  } else {
    console.log("roomId not found");
  }
};

export {
  increaseValue,
  increaseValueWithDB,
  setValue,
  setPlayerRecord,
  setRTValue,
  setRTRoomValue,
};
