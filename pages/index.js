import Head from 'next/head'
import React,{useState} from 'react'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import ChatBox from '@/components/chatBox'
import Card from '@/components/card'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [response,setResponse] = useState("");
  console.log(response,"Index")
  const handleResChange = (newValue) => {
    setResponse(newValue);
  };
  return (
    <>
      <Head>
        <title>PECGPT</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className} relative`} style={{ overflow: 'hidden' }}>
        <div
          className="absolute inset-0 bg-center bg-cover"
          style={{
            backgroundImage: 'url("/jf.gif")',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            animation: 'zoomAnimation 5s infinite alternate',
            zIndex: -1
          }}
        />
        {/* Content */}
        <div className="h-screen p-2 w-full flex flex-col items-center ">
          <ChatBox handleResChange={handleResChange} />
          <Card response={response} />
        </div>
      </main>
    </>
  )
}
