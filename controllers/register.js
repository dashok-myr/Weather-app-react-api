const db = require("../firebase-config");

const getEmails = async () => {
  try {
    const snapshot = await db.collection("users").get();
    const emails = [];
    snapshot.docs.forEach(doc => {
      emails.push(doc.data().email);
    });
    return emails;
  } catch (err) {
    alert(err);
  }
};

const saveUser = async user => {
  try {
    const addUser = await db.collection("users").add(user);
    return addUser;
  } catch (err) {
    alert(err);
  }
};

const registerUser = async (body, bcrypt) => {
  const { email } = body;

  //get all emails from firebase
  const allEmails = await getEmails();

  for (let firebaseEmail of allEmails) {
    if (firebaseEmail === email) {
      return { didSaveUser: false };
    }
  }
  await saveUser(body);
  return { didSaveUser: true };
};

module.exports = {
  registerUser: registerUser
};
