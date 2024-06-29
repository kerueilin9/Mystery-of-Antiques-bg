/* eslint-disable */
import * as functions from "firebase-functions";
import * as admin from "firebase-admin";

admin.initializeApp();

const db = admin.firestore();

/**
 * Cloud function to delete a room and its subcollections.
 *
 * @param {Object} data - The data object containing roomId.
 * @returns {Promise<{ success: boolean }>} - The result of the deletion.
 */
export const deleteRoomWithSubcollections = functions.https.onCall(
  async (data) => {
    const roomId = data.roomId;
    if (!roomId) {
      throw new functions.https.HttpsError(
        "invalid-argument",
        'The function must be called with one argument "roomId".'
      );
    }

    const roomPath = `rooms/${roomId}`;
    await deleteDocumentWithSubcollections(db, roomPath);
    return { success: true };
  }
);

/**
 * Deletes a document and its subcollections.
 *
 * @param {FirebaseFirestore.Firestore} db - The Firestore instance.
 * @param {string} docPath - The path to the document.
 */
async function deleteDocumentWithSubcollections(
  db: FirebaseFirestore.Firestore,
  docPath: string
) {
  const docRef = db.doc(docPath);
  const subcollections = await docRef.listCollections();

  for (const subcollection of subcollections) {
    await deleteCollection(db, subcollection.path, 10);
  }

  await docRef.delete();
}

/**
 * Deletes a collection in batches.
 *
 * @param {FirebaseFirestore.Firestore} db - The Firestore instance.
 * @param {string} collectionPath - The path to the collection.
 * @param {number} batchSize - The size of each batch.
 */
async function deleteCollection(
  db: FirebaseFirestore.Firestore,
  collectionPath: string,
  batchSize: number
) {
  const collectionRef = db.collection(collectionPath);
  const snapshot = await collectionRef.limit(batchSize).get();

  const batch = db.batch();
  snapshot.docs.forEach((doc) => {
    batch.delete(doc.ref);
  });

  await batch.commit();

  if (snapshot.size === batchSize) {
    // Repeat until all documents are deleted
    await deleteCollection(db, collectionPath, batchSize);
  }
}
