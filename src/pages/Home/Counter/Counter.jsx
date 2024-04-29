import ScrollTrigger from "react-scroll-trigger";
import CountUp from "react-countup"
import { useEffect, useState } from "react";
import { MdCategory } from "react-icons/md";
import { SiApmterminals } from "react-icons/si";

const Counter = () => {
    const [categories, setCategories] = useState([]);
    const [allArtItems, setAllArtItems] = useState([]);
    useEffect(() => {
        fetch('https://b9a10-server-side.vercel.app/categories')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, []);
    useEffect(() => {
        fetch('https://b9a10-server-side.vercel.app/arts')
            .then(res => res.json())
            .then(data => setAllArtItems(data))
    }, [])
    const [counterOn, setCounterOn] = useState(false);
    return (
        <div className="mt-10 py-6 bg-gray-300">
            <div className="template-container flex justify-center">
                <div className="grid grid-cols-1 md:grid-cols-2 justify-items-center gap-10">
                    <div className="w-full md:w-[330px] text-center border rounded-br-[90px] rounded-tl-[90px] border-[#f17941] shadow-[#f17941] shadow-sm p-5 bg-gray-100">
                        <span className="flex justify-center mb-4 font-bold text-8xl text-[#f17941]">
                            <MdCategory className="rotate-90 hover:rotate-45" style={{transition:'all 1s',}} />
                        </span>
                        <h2 className="font-medium text-xl flex items-center gap-3">
                            Total Art & Craft Categories{" "}
                            <span className="font-bold text-5xl text-[#f17941]">
                                <ScrollTrigger
                                    onEnter={() => setCounterOn(true)}
                                    onExit={() => setCounterOn(false)}
                                >
                                    {counterOn && (
                                        <CountUp
                                            start={0}
                                            end={categories?.length}
                                            duration={2}
                                            delay={0}
                                        />
                                    )}
                                </ScrollTrigger>
                            </span>
                        </h2>
                    </div>
                    <div className="w-full md:w-[330px] text-center border border-[#f17941] shadow-[#f17941] shadow-sm rounded-tr-[90px] rounded-bl-[90px] p-5 bg-gray-100">
                        <span className="flex justify-center mb-4 font-bold text-8xl text-[#f17941]">
                            <SiApmterminals />
                        </span>
                        <h2 className="font-medium text-xl flex items-center gap-3">
                            Total Art & Craft Items
                            <span className="font-bold text-5xl text-[#f17941]">
                                <ScrollTrigger
                                    onEnter={() => setCounterOn(true)}
                                    onExit={() => setCounterOn(false)}
                                >
                                    {counterOn && (
                                        <CountUp
                                            start={0}
                                            end={allArtItems.length}
                                            duration={2}
                                            delay={0}
                                        />
                                    )}
                                </ScrollTrigger>
                            </span>
                        </h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Counter;