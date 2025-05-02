import React from 'react'
import Head from './components/head.jsx'
import Main from './components/main.jsx'
import Photos from './components/photos.jsx'
import Memories from "./components/memories.jsx";
import Facts from "./components/facts.jsx";
import Videos from "./components/videos.jsx"
import Down from "./components/down.jsx";

export function App() {
    return (
        <div className="min-h-screen bg-white">
            <Head />
            <main className="w-full">
                <Main />
                <Photos />
                <Memories />
                <Facts />
                <Videos />
            </main>
            <Down />
        </div>
    )
}
