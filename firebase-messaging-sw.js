importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js");

firebase.initializeApp({
 apiKey: "AIzaSyCpjHtL8bZktJYSEQvtUJvhMImAvaPoAjM",
 projectId: "mychatapp-7a329",
 messagingSenderId: "489231530058",
 appId: "1:489231530058:web:d32580399444a8e62f0eb3"
});

const messaging = firebase.messaging();

messaging.setBackgroundMessageHandler(function(payload) {
 return self.registration.showNotification(
  payload.notification.title,
  {
   body: payload.notification.body
  }
 );
});
