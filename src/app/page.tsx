"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { getClientToken,messaging,app } from "@/lib/firebase-sdk";

export default function Home() {
  
    
  async function pushTest(){
    const token = await getClientToken();
    console.log(token);

    const message = {
      data: {
        title:'fcm test',
        body:'fcm.......',
        icon:'https://d2v80xjmx68n4w.cloudfront.net/gigs/rate/G14y51681184466.JPG',
        image: 'https://blog.kakaocdn.net/dn/cxXz0g/btrpdnEFZxC/kLMtiZk07PMa0rmvLGF1g0/img.jpg',
        click_action:'https://www.naver.com',
      },
      token
    };

    axios({
      method: 'POST',
      url:'/api',
      data: { message },
    });
  };


  const clientPermission = () => {
    Notification.requestPermission().then(async (permission) => {
      if (permission !== 'granted') {
        alert('푸시 거부됨');
      } else {
       
      }
    });
  };

  useEffect(()=>{
    if('navigator' in window){
      navigator.serviceWorker.register('/firebase-messaging-sw.js',{scope:'/firebase-cloud-messaging-push-scope'})
    }
  },[])


  return (
    <main>
      npm install firebase <br />
      npm install firebase-admin<br />
      https://velog.io/@hisung-ah/Next.js%EC%97%90%EC%84%9C-PWA-%EA%B8%B0%EB%B0%98-FCM-%ED%91%B8%EC%8B%9C-%EC%95%8C%EB%A6%BC-%EB%B3%B4%EB%82%B4%EA%B8%B0<br/><br/>

      fcm guid<br/>
      https://firebase.google.com/docs/cloud-messaging/js/first-message?hl=ko&_gl=1*4tws1a*_up*MQ..*_ga*ODE1OTM2ODg0LjE3MDk2Mjk3NjQ.*_ga_CW55HF8NVT*MTcwOTYyOTc2My4xLjAuMTcwOTYyOTg3OS4wLjAuMA..

      <button onClick={clientPermission}>알림허용</button>
      <button onClick={pushTest}>푸시알림</button>
    </main>
  );
}