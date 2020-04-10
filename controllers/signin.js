const db = require("../firebase-config");

const getEmailandPassword = async () => {
  try {
    const snapshot = await db.collection("users").get();
    const objOfData = {};
    snapshot.docs.forEach(doc => {
      objOfData[doc.data().email] = doc.data().password;
    });

    return objOfData;
  } catch (err) {
    alert(err);
  }
};

const signIn = async (body) => {
  const { email, password } = body;
  //get all emails and passwords from firebase
  const emailsAndPassword = await getEmailandPassword();

  for (let userEmail in emailsAndPassword) {
    if (userEmail === email && emailsAndPassword[userEmail] === password) {
      return { didSignIn: true };
    } else {
      return { didSignIn: false };
    }
  }
};

module.exports = {
  signIn: signIn
};


