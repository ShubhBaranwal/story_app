"use client";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export default function Home() {
    const [buttonTextIndex, setButtonTextIndex] = useState(0);

    const buttonVariants = [
        "Abhi Chodne Ki Aag Jala 🔥",
        "Lund Hard Karne Wali Stories 🍆",
        "Chut Geeli Karne Ka Time Aa Gaya 💦",
        "Gandi Kahaniyan Abhi Tere Phone Mein 📲",
        "Tap Kar Aur Chudai Shuru Kar 🔞",
        "Pyasi Chut Ki Pyaas Bujha 👅",
        "Download Kar Aur Raat Bhar Thok 🔨"
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setButtonTextIndex((prev) => (prev + 1) % buttonVariants.length);
        }, 2000);
        return () => clearInterval(interval);
    }, []);

    return (
        <main className="relative min-h-screen w-full flex flex-col items-center justify-center bg-[#050000] text-white overflow-hidden font-sans px-4">
            {/* Background Image Layer */}
            {/* Background Image Layer */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/image on bed.jpg"
                    alt="Background"
                    fill
                    priority
                    className="object-cover opacity-30 scale-110 blur-[2px]"
                />

                {/* Gradient Overlay for Fade Effect */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/95"></div>
            </div>

            <div className="relative z-10 container max-w-lg w-full py-8 flex flex-col items-center text-center">
                {/* App Name */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="relative mb-6"
                >
                    <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-white to-red-600 drop-shadow-[0_5px_15px_rgba(220,38,38,0.8)] font-serif uppercase italic">
                        Pyasi Raaton <br /> Ka Raaz
                    </h1>
                    <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-3/4 h-1 bg-red-600 shadow-[0_0_10px_#ff0000]"></div>
                </motion.div>

                {/* Tagline */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    className="mb-8"
                >
                    <p className="text-2xl md:text-3xl font-extrabold text-red-500 mb-2 drop-shadow-[0_2px_4px_rgba(0,0,0,1)] uppercase">
                        रात भर चुदाई की कहानियाँ... 🔥
                    </p>
                    <p className="text-white text-lg font-bold tracking-tight opacity-100 flex items-center justify-center gap-2">
                        <span className="h-[2px] w-8 bg-red-600"></span>
                        Ab Tak Sabse Gandi Stories – <span className="text-red-400 underline decoration-red-600 underline-offset-4">Sirf Tere Liye</span>
                        <span className="h-[2px] w-8 bg-red-600"></span>
                    </p>
                </motion.div>

                {/* Download Button Area */}
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.5, type: "spring" }}
                    className="w-full mb-8 relative"
                >
                    {/* Floating image hint near button */}
                    <div className="absolute -top-12 -right-4 w-20 h-20 rounded-full border-2 border-red-600 overflow-hidden shadow-2xl rotate-12 z-20 hidden md:block animate-bounce">
                        <Image src="/download.jpg" alt="Hot" fill className="object-cover" />
                    </div>

                    <a
                        href="/download"
                        className="relative group block w-full"
                    >
                        <motion.button
                            className="relative w-full overflow-hidden bg-gradient-to-br from-red-600 via-red-800 to-black text-white text-2xl md:text-3xl font-black py-8 px-6 rounded-2xl border-b-8 border-red-950 shadow-[0_15px_40px_rgba(220,38,38,0.7)] flex items-center justify-center gap-3 animate-pulse-intense group-active:translate-y-2 group-active:border-b-0 transition-all"
                        >
                            {/* Inner Glow/Shine */}
                            <div className="absolute top-0 -left-full w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 group-hover:left-full transition-all duration-700"></div>

                            <span className="block min-h-[1.2em] w-full flex items-center justify-center drop-shadow-lg">
                                <AnimatePresence mode="wait">
                                    <motion.span
                                        key={buttonTextIndex}
                                        initial={{ rotateX: 90, opacity: 0 }}
                                        animate={{ rotateX: 0, opacity: 1 }}
                                        exit={{ rotateX: -90, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="block uppercase tracking-tighter"
                                    >
                                        {buttonVariants[buttonTextIndex]}
                                    </motion.span>
                                </AnimatePresence>
                            </span>
                        </motion.button>

                        {/* Dramatic Glow */}
                        <div className="absolute -inset-2 bg-red-600 rounded-2xl blur-xl opacity-20 group-hover:opacity-50 animate-pulse transition-opacity"></div>
                    </a>

                    <div className="mt-4 space-y-2">
                        <p className="text-yellow-400 text-sm font-black uppercase tracking-[0.2em] drop-shadow-md">
                            Free • Sirf Android • 100% Private
                        </p>
                        <div className="inline-block bg-red-600 text-white text-xs font-black px-4 py-1 rounded-full animate-bounce uppercase">
                            Urgent: Sirf Aaj Ke Liye Free! ⏳
                        </div>
                    </div>
                </motion.div>

                {/* Teaser Paragraph with dynamic images */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 }}
                    className="bg-[#1a0000]/90 backdrop-blur-xl p-8 rounded-3xl border-2 border-red-900 shadow-2xl mb-10 text-left relative overflow-hidden group/card"
                >
                    {/* Subtle BG Image for Container */}
                    <div className="absolute inset-0 opacity-10 transition-transform duration-1000 group-hover/card:scale-110">
                        <Image src="/image 1 desk.jpg" alt="Context" fill className="object-cover" />
                    </div>

                    <div className="space-y-6 text-gray-100 text-xl leading-relaxed font-bold relative z-10">
                        <p className="border-l-4 border-red-600 pl-4">
                            <span className="text-red-500 font-black text-2xl uppercase">कल्पना कर...</span> वो रात जब तेरी उंगली खुद-ब-खुद नीचे चली जाए,
                            सांसें फूलें, लंड खड़ा हो जाए, और हर शब्द तेरी <span className="text-red-400 underline decoration-2">chut</span> को तरसा दे।
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
                            <p className="text-lg">
                                यहाँ मिलेंगी वो <span className="text-red-500">kahaniyan</span> जो सीधे तेरे दिमाग में वार करेंगी –
                                bhabhi की tight chut से लेकर chachi की pyasi gaand तक, सब कुछ <span className="text-red-600 uppercase font-black">raw और ganda</span>।
                            </p>
                            <div className="relative h-32 rounded-xl border border-red-800 overflow-hidden shadow-lg transform -rotate-2">
                                <Image src="/images (1).jpg" alt="Story" fill className="object-cover" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
                                <span className="absolute bottom-2 left-2 text-[10px] uppercase font-black bg-red-600 px-2 py-0.5 rounded">Preview</span>
                            </div>
                        </div>

                        <p className="text-red-400 font-extrabold text-right pt-4 text-base border-t border-red-900 animate-pulse">
                            🔞 18+ Only – Pyasa Hai To Aa, Warna Bhag Ja!
                        </p>
                    </div>
                </motion.div>

                {/* Performance Hooks with Icons/Stickers */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full mb-12">
                    {[
                        { text: "Teri chut ab bhi sookhi hai? Isse geela kar! 💦", img: "/image on bed.jpg" },
                        { text: "Bhabhi ki awaaz, devar ka lund – Feel Everything. 🤤", img: "/images.jpg" }
                    ].map((hook, i) => (
                        <motion.div
                            key={i}
                            whileHover={{ scale: 1.02 }}
                            className="flex items-center gap-4 p-4 rounded-2xl border border-red-800 bg-black/60 shadow-xl overflow-hidden"
                        >
                            <div className="relative w-16 h-16 shrink-0 rounded-lg overflow-hidden border border-red-600">
                                <Image src={hook.img} alt="Hook" fill className="object-cover brightness-50" />
                            </div>
                            <p className="text-red-100 text-sm font-bold leading-tight">{hook.text}</p>
                        </motion.div>
                    ))}
                </div>

                {/* High Urgency Note */}
                <div className="w-full bg-gradient-to-r from-transparent via-red-950 to-transparent py-4 mb-8">
                    <p className="text-white font-black text-sm uppercase italic tracking-widest animate-pulse">
                        ⚠️ Warning: Ye App Tumhari Raat Kharab (Ya Sabse Best) Kar Degi!
                    </p>
                </div>

                {/* Download Now Footer Trigger */}
                <motion.div
                    whileTap={{ scale: 0.95 }}
                    className="w-full mb-12"
                >
                    <a href="/download" className="block p-4 bg-red-600 text-white font-black rounded-xl text-center shadow-[0_0_20px_#ff0000] uppercase tracking-widest">
                        Fast Download (Sirf 5MB) 🚀
                    </a>
                </motion.div>
            </div>

            {/* Float Effects Overlay (Dust/Particles style) */}
            <div className="absolute inset-0 pointer-events-none opacity-20">
                <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-red-600 rounded-full blur-[120px] animate-pulse"></div>
                <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-red-800 rounded-full blur-[150px] animate-pulse delay-1000"></div>
            </div>
        </main>
    );
}