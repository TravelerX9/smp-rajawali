"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PhotoIcon, VideoCameraIcon, XMarkIcon, SparklesIcon, ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

const galleryItems = [
    { id: "1", type: "image", title: "Momen ke-1", category: "Ramadhan 2026", src: "/galery/1.jpeg" },
    { id: "2", type: "image", title: "Momen ke-2", category: "Ramadhan 2026", src: "/galery/2.jpeg" },
    { id: "3", type: "image", title: "Momen ke-3", category: "Ramadhan 2026", src: "/galery/3.jpeg" },
    { id: "4", type: "image", title: "Momen ke-4", category: "Ramadhan 2026", src: "/galery/4.jpeg" },
    { id: "5", type: "image", title: "Momen ke-5", category: "Ramadhan 2026", src: "/galery/5.jpeg" },
    { id: "6", type: "image", title: "Momen ke-6", category: "Ramadhan 2026", src: "/galery/6.jpeg" },
    { id: "7", type: "image", title: "Momen ke-7", category: "Ramadhan 2026", src: "/galery/7.jpeg" },
    { id: "8", type: "image", title: "Momen ke-8", category: "Ramadhan 2026", src: "/galery/8.jpeg" },
    { id: "9", type: "image", title: "Momen ke-9", category: "Ramadhan 2026", src: "/galery/9.jpeg" },
    { id: "10", type: "image", title: "Momen ke-10", category: "Ramadhan 2026", src: "/galery/10.jpeg" },
    { id: "11", type: "image", title: "Momen ke-11", category: "Ramadhan 2026", src: "/galery/11.jpeg" },
    { id: "12", type: "image", title: "Momen ke-12", category: "Ramadhan 2026", src: "/galery/12.jpeg" },
    { id: "13", type: "image", title: "Momen ke-13", category: "Ramadhan 2026", src: "/galery/13.jpeg" },
    { id: "14", type: "image", title: "Momen ke-14", category: "Ramadhan 2026", src: "/galery/14.jpeg" },
    { id: "14=", type: "image", title: "Momen ke-14 extra", category: "Ramadhan 2026", src: "/galery/14=.jpeg" },
    { id: "15", type: "image", title: "Momen ke-15", category: "Ramadhan 2026", src: "/galery/15.jpeg" },
    { id: "16", type: "image", title: "Momen ke-16", category: "Ramadhan 2026", src: "/galery/16.jpeg" },
    { id: "17", type: "image", title: "Momen ke-17", category: "Ramadhan 2026", src: "/galery/17.jpeg" },
    { id: "18", type: "image", title: "Momen ke-18", category: "Ramadhan 2026", src: "/galery/18.jpeg" },
    { id: "19", type: "image", title: "Momen ke-19", category: "Ramadhan 2026", src: "/galery/19.jpeg" },
    { id: "20", type: "image", title: "Momen ke-20", category: "Ramadhan 2026", src: "/galery/20.jpeg" },
    { id: "21", type: "image", title: "Momen ke-21", category: "Ramadhan 2026", src: "/galery/21.jpeg" },
    { id: "22", type: "image", title: "Momen ke-22", category: "Ramadhan 2026", src: "/galery/22.jpeg" },
    { id: "23", type: "image", title: "Momen ke-23", category: "Ramadhan 2026", src: "/galery/23.jpeg" },
    { id: "24", type: "image", title: "Momen ke-24", category: "Ramadhan 2026", src: "/galery/24.jpeg" },
    { id: "25", type: "image", title: "Momen ke-25", category: "Ramadhan 2026", src: "/galery/25.jpeg" },
    { id: "26", type: "image", title: "Momen ke-26", category: "Ramadhan 2026", src: "/galery/26.jpeg" },
    { id: "27", type: "video", title: "Momen ke-27", category: "Ramadhan 2026", src: "/galery/27.mp4" },
    { id: "28", type: "image", title: "Momen ke-28", category: "Ramadhan 2026", src: "/galery/28.jpeg" },
    { id: "29", type: "image", title: "Momen ke-29", category: "Ramadhan 2026", src: "/galery/29.jpeg" },
    { id: "30", type: "image", title: "Momen ke-30", category: "Ramadhan 2026", src: "/galery/30.jpeg" },
    { id: "31", type: "image", title: "Momen ke-31", category: "Ramadhan 2026", src: "/galery/31.jpeg" },
    { id: "32", type: "video", title: "Momen ke-32", category: "Ramadhan 2026", src: "/galery/32.mp4" },
    { id: "33", type: "image", title: "Momen ke-33", category: "Ramadhan 2026", src: "/galery/33.jpeg" },
    { id: "34", type: "image", title: "Momen ke-34", category: "Ramadhan 2026", src: "/galery/34.jpeg" },
    { id: "35", type: "video", title: "Momen ke-35", category: "Ramadhan 2026", src: "/galery/35.mp4" },
    { id: "36", type: "image", title: "Momen ke-36", category: "Ramadhan 2026", src: "/galery/36.jpeg" },
    { id: "37", type: "image", title: "Momen ke-37", category: "Ramadhan 2026", src: "/galery/37.jpeg" },
    { id: "38", type: "image", title: "Momen ke-38", category: "Ramadhan 2026", src: "/galery/38.jpeg" },
    { id: "39", type: "image", title: "Momen ke-39", category: "Ramadhan 2026", src: "/galery/39.jpeg" },
    { id: "40", type: "image", title: "Momen ke-40", category: "Ramadhan 2026", src: "/galery/40.jpeg" },
    { id: "41", type: "image", title: "Momen ke-41", category: "Ramadhan 2026", src: "/galery/41.jpeg" },
    { id: "42", type: "image", title: "Momen ke-42", category: "Ramadhan 2026", src: "/galery/42.jpeg" },
    { id: "43", type: "image", title: "Momen ke-43", category: "Ramadhan 2026", src: "/galery/43.jpeg" },
    { id: "44", type: "image", title: "Momen ke-44", category: "Ramadhan 2026", src: "/galery/44.jpeg" },
    { id: "45", type: "image", title: "Momen ke-45", category: "Ramadhan 2026", src: "/galery/45.jpeg" },
    { id: "46", type: "image", title: "Momen ke-46", category: "Ramadhan 2026", src: "/galery/46.jpeg" },
    { id: "47", type: "image", title: "Momen ke-47", category: "Ramadhan 2026", src: "/galery/47.jpeg" },
    { id: "48", type: "image", title: "Momen ke-48", category: "Ramadhan 2026", src: "/galery/48.jpeg" },
    { id: "49", type: "image", title: "Momen ke-49", category: "Ramadhan 2026", src: "/galery/49.jpeg" },
    { id: "50-img", type: "image", title: "Momen ke-50", category: "Ramadhan 2026", src: "/galery/50.jpeg" },
    { id: "50-vid", type: "video", title: "Video ke-50", category: "Ramadhan 2026", src: "/galery/50.mp4" },
    { id: "51", type: "video", title: "Momen ke-51", category: "Ramadhan 2026", src: "/galery/51.mp4" },
    { id: "52", type: "image", title: "Momen ke-52", category: "Ramadhan 2026", src: "/galery/52.jpeg" },
    { id: "53", type: "image", title: "Momen ke-53", category: "Ramadhan 2026", src: "/galery/53.jpeg" },
    { id: "54", type: "image", title: "Momen ke-54", category: "Ramadhan 2026", src: "/galery/54.jpeg" },
    { id: "55", type: "video", title: "Momen ke-55", category: "Ramadhan 2026", src: "/galery/55.mp4" },
    { id: "56", type: "video", title: "Momen ke-56", category: "Ramadhan 2026", src: "/galery/56.mp4" },
    { id: "57", type: "video", title: "Momen ke-57", category: "Ramadhan 2026", src: "/galery/57.mp4" },
    { id: "58", type: "video", title: "Momen ke-58", category: "Ramadhan 2026", src: "/galery/58.mp4" },
    { id: "62", type: "image", title: "Momen ke-62", category: "Ramadhan 2026", src: "/galery/62.jpeg" },
    { id: "63", type: "image", title: "Momen ke-63", category: "Ramadhan 2026", src: "/galery/63.jpeg" },
    { id: "64", type: "image", title: "Momen ke-64", category: "Ramadhan 2026", src: "/galery/64.jpeg" },
    { id: "65", type: "image", title: "Momen ke-65", category: "Ramadhan 2026", src: "/galery/65.jpeg" },
    { id: "76", type: "video", title: "Momen ke-76", category: "Ramadhan 2026", src: "/galery/76.mp4" },
    { id: "77", type: "video", title: "Momen ke-77", category: "Ramadhan 2026", src: "/galery/77.mp4" },
    { id: "78", type: "video", title: "Momen ke-78", category: "Ramadhan 2026", src: "/galery/78.mp4" },
    { id: "79", type: "video", title: "Momen ke-79", category: "Ramadhan 2026", src: "/galery/79.mp4" },
];

const GalleryPage = () => {
    const [selectedItemIndex, setSelectedItemIndex] = useState<number | null>(null);
    const [filter, setFilter] = useState("All");

    const categories = ["All", ...Array.from(new Set(galleryItems.map((item) => item.category)))];
    const filteredItems = filter === "All" ? galleryItems : galleryItems.filter((item) => item.category === filter);

    const [isZoomed, setIsZoomed] = useState(false);
    const [zoomOrigin, setZoomOrigin] = useState("center");

    const selectedItem = selectedItemIndex !== null ? filteredItems[selectedItemIndex] : null;

    const navigate = (direction: "prev" | "next") => {
        if (selectedItemIndex === null) return;
        setIsZoomed(false); // Reset zoom on navigate
        if (direction === "next") {
            setSelectedItemIndex((selectedItemIndex + 1) % filteredItems.length);
        } else {
            setSelectedItemIndex((selectedItemIndex - 1 + filteredItems.length) % filteredItems.length);
        }
    };

    const handleImageClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (isZoomed) {
            setIsZoomed(false);
            setZoomOrigin("center");
        } else {
            const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
            const x = ((e.clientX - left) / width) * 100;
            const y = ((e.clientY - top) / height) * 100;
            setZoomOrigin(`${x}% ${y}%`);
            setIsZoomed(true);
        }
    };

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-900 transition-colors duration-300 font-sans">
            {/* Head is managed via metadata in layout or handled by Next.js in App Router */}

            <main className="mx-auto px-4 sm:px-6 lg:px-8 py-16">
                {/* Header Section */}
                <div className="text-center mb-16 px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <span className="inline-flex items-center px-4 py-1 rounded-full text-sm font-semibold bg-orange-100 dark:bg-orange-500/20 text-orange-600 dark:text-orange-400 mb-4 tracking-wider uppercase">
                            <SparklesIcon className="w-4 h-4 mr-2" />
                            Moments of 2026
                        </span>
                        <h1 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white mb-6">
                            Gallery <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-pink-500">Visual</span>
                        </h1>
                        <p className="text-lg text-slate-600 dark:text-slate-400 mx-auto leading-relaxed">
                            Arsip kenangan, acara, ngopi bareng, teman SMP Rajawali dalam menjalin silahturahmi dan persahabatan.
                        </p>
                    </motion.div>
                </div>

                {/* Filter Bar */}
                <div className="flex flex-wrap justify-center gap-3 mb-12">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setFilter(cat)}
                            className={`px-6 py-2 rounded-full text-sm font-bold transition-all duration-300 ${filter === cat
                                ? "bg-orange-500 text-white shadow-lg shadow-orange-500/30 scale-105"
                                : "bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-orange-50 dark:hover:bg-slate-700"
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Masonry-like Grid */}
                <motion.div
                    layout
                    className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6"
                >
                    <AnimatePresence mode="popLayout">
                        {filteredItems.map((item, index) => (
                            <motion.div
                                key={item.id}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3 }}
                                className="relative break-inside-avoid group cursor-pointer overflow-hidden rounded-3xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-2xl transition-all duration-500"
                                onClick={() => setSelectedItemIndex(index)}
                            >
                                {/* Media Preview */}
                                <div className="relative aspect-video sm:aspect-auto overflow-hidden">
                                    {item.type === "video" ? (
                                        <video
                                            src={item.src}
                                            className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                                            muted
                                            playsInline
                                            onMouseOver={(e) => (e.target as HTMLVideoElement).play()}
                                            onMouseOut={(e) => {
                                                const video = e.target as HTMLVideoElement;
                                                video.pause();
                                                video.currentTime = 0;
                                            }}
                                        />
                                    ) : (
                                        <img
                                            src={item.src}
                                            alt={item.title}
                                            className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                                        />
                                    )}

                                    {/* Media Icon Overlay */}
                                    <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-md p-2 rounded-xl text-white">
                                        {item.type === "video" ? (
                                            <VideoCameraIcon className="w-5 h-5" />
                                        ) : (
                                            <PhotoIcon className="w-5 h-5" />
                                        )}
                                    </div>

                                    {/* Hover Information */}
                                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <p className="text-orange-400 text-xs font-bold uppercase tracking-widest mb-1">{item.category}</p>
                                        <h3 className="text-white font-bold text-lg">{item.title}</h3>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </main>

            {/* Full-Screen Lightbox */}
            <AnimatePresence>
                {selectedItem && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[110] flex items-center justify-center bg-black/98 backdrop-blur-md"
                        onClick={() => setSelectedItemIndex(null)}
                    >
                        {/* Close Button - Top Right */}
                        <button
                            onClick={() => setSelectedItemIndex(null)}
                            className="absolute top-4 right-4 md:top-6 md:right-6 z-[130] p-2.5 md:p-4 bg-white/10 hover:bg-white/20 text-white rounded-full transition-all duration-300 backdrop-blur-xl border border-white/20 hover:scale-110 active:scale-90"
                        >
                            <XMarkIcon className="w-4 h-4" />
                        </button>

                        {/* Navigation Controls - Bottom Center */}
                        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-[130] flex items-center gap-6">
                            <button
                                onClick={(e) => { e.stopPropagation(); navigate("prev"); }}
                                className="p-3.5 bg-black/40 hover:bg-white/10 text-white rounded-full transition-all duration-300 backdrop-blur-md border border-white/10 active:scale-95 group"
                            >
                                <ChevronLeftIcon className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                            </button>
                            <button
                                onClick={(e) => { e.stopPropagation(); navigate("next"); }}
                                className="p-3.5 bg-black/40 hover:bg-white/10 text-white rounded-full transition-all duration-300 backdrop-blur-md border border-white/10 active:scale-95 group"
                            >
                                <ChevronRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </button>
                        </div>

                        {/* Full-Screen Media Display */}
                        <motion.div
                            key={selectedItem.id}
                            initial={{ scale: 0.95, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.95, opacity: 0 }}
                            className="w-full h-full flex items-center justify-center overflow-hidden"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="relative w-full h-full flex items-center justify-center">
                                {selectedItem.type === "video" ? (
                                    <video
                                        src={selectedItem.src}
                                        controls
                                        autoPlay
                                        className="w-full h-full object-contain"
                                    />
                                ) : (
                                    <div
                                        className={`relative w-full h-full flex items-center justify-center overflow-hidden ${isZoomed ? 'cursor-zoom-out' : 'cursor-zoom-in'}`}
                                        onClick={handleImageClick}
                                    >
                                        <img
                                            src={selectedItem.src}
                                            alt={selectedItem.title}
                                            className="w-full h-full object-contain transition-transform duration-500 ease-in-out"
                                            style={{
                                                transform: isZoomed ? "scale(3)" : "scale(1)",
                                                transformOrigin: zoomOrigin
                                            }}
                                        />
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div >
    );
};

export default GalleryPage;
