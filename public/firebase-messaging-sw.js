// importScripts('https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js');
// importScripts('https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js');

// const firebaseConfig = {
//   apiKey: "AIzaSyDIYfd341igAf3OW3gjmfCF91KGVUWI5D8",
//   authDomain: "gallery-ca6cc.firebaseapp.com",
//   projectId: "gallery-ca6cc",
//   storageBucket: "gallery-ca6cc.appspot.com",
//   messagingSenderId: "19095802754",
//   appId: "1:19095802754:web:ecd6d81b338e002db1759b",
//   measurementId: "G-69K0MPF4FY"
// };

// firebase.initializeApp(firebaseConfig);
// const messaging = firebase.messaging();

// messaging.onBackgroundMessage((payload)=>{
//   console.log('[firebase-messaging-sw.js] Received background message ', payload);
//   // Customize notification here
//   const notificationTitle = 'Background Message Title';
//   const notificationOptions = {
//     body: 'Background Message body.',
//     icon: '/firebase-logo.png'
//   };

//   self.registration.showNotification(notificationTitle, notificationOptions);
// })


self.addEventListener("install", function (e) {
  console.log("fcm sw install..");
  self.skipWaiting();
});  

self.addEventListener('push', function (event) {
  if (event.data) {
    // 알림 메세지일 경우엔 event.data.json().notification;
    const data = event.data.json().data;
    const options = {
      body: data.body,
      icon: data.icon,
      image: data.image,
      badge:'3.jpg',
      vibrate:[200,100,300],
      data: {
        click_action: data.click_action, // 이 필드는 밑의 클릭 이벤트 처리에 사용됨
      },
      tag:'abc'
     }

    event.waitUntil(self.registration.showNotification(data.title, options));
  } else {
    console.log('This push event has no data.');
  }
});

self.addEventListener('notificationclick', function (event) {
  event.preventDefault();
  event.notification.close();

  const urlToOpen = event.notification.data.click_action;

  // 클라이언트에 해당 사이트가 열려있는지 체크
  const promiseChain = clients
    .matchAll({
      type: 'window',
      includeUncontrolled: true,
    })
    .then(function (windowClients) {
      let matchingClient = null;

      for (let i = 0; i < windowClients.length; i++) {
        const windowClient = windowClients[i];
        if (windowClient.url.includes(urlToOpen)) {
          matchingClient = windowClient;
          break;
        }
      }

      // 열려있다면 focus, 아니면 새로 open
      if (matchingClient) {
        return matchingClient.focus();
      } else {
        return clients.openWindow(urlToOpen);
      }
    });

  event.waitUntil(promiseChain);
});