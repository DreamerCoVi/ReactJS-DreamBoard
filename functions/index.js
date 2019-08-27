const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);


const createNotification = (notification) => { // we got an object 'notification'
  return admin.firestore().collection('notifications') // connect to notifications collection
    .add(notification) // and add a new notify
    .then(doc=>console.log('notification added', doc));  // and log it into console
};

exports.projectCreated = functions.firestore // cloud function
      .document('projects/{projectId}') // ever,  a new project is created 
      .onCreate(doc=>{ // inside collection, we calls a function

        const project = doc.data(); // got the data
        const notification = { // and create an object for 
            content: 'Added a new project', // 'create notification' function
            user: `${project.authorFirstName} ${project.authorLastName}`,
            time: admin.firestore.FieldValue.serverTimestamp()
        }

        return createNotification(notification); // calls with the formed object
});

exports.userJoined = functions.auth // functions that calls when
    .user() // a new user
    .onCreate(user => { // is Signed Up

      return admin.firestore().collection('users') // then we got access to 'users' collection
        .doc(user.uid).get().then((doc) => { // and find newUser for Id 

            const newUser = doc.data(); // takes his data
            const notification = { // and create a notification
              content: 'Joined the party', // with the message
              user: `${newUser.firstName} ${newUser.lastName}`, // and his name
              time: admin.firestore.FieldValue.serverTimestamp() // and creating a timestamp
            }

            return createNotification(notification);
        })
})