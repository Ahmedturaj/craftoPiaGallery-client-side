import { useEffect, useState } from "react";
import { Fade, Slide } from "react-awesome-reveal";
import { Typewriter } from "react-simple-typewriter";

const Subscribers = () => {
    const [subscribers, setSubscribers] = useState([]);
    useEffect(() => {
        fetch('https://b9a10-server-side.vercel.app/users')
            .then(res => res.json())
            .then(data => setSubscribers(data))
    }, []);


    return (
        <div className="w-10/12 ml-10 md:ml-20 my-24 mx-auto">
            <div className=" flex mb-14 gap-3 items-center justify-center border-b-2 rounded-lg border-[#f17941] w-full md:w-80 md:ml-20"> <img src="https://assets-global.website-files.com/5e51c674258ffe10d286d30a/5e53552ff5fa1a9d22f727e2_peep-35.svg" alt="" className="w-14" />

                <Fade duration={2000}>
                    <h2 className="text-2xl text-center md:text-left font-bold">Our Subscribers :<Typewriter
                        words={['Do', 'Subscribe', 'Stay', 'With Us']}
                        loop={0}
                    /></h2>
                </Fade>
            </div>
            <div className="mb-12">
                <Slide duration={900}>
                    <p>The subscription section allows users to stay updated and connected. By subscribing, users receive regular updates, exclusive offers, and notifications about new content, ensuring they remain engaged and informed.</p>
                </Slide>
            </div>
            <Slide cascade damping={0.5}>
                <div className="carousel rounded-box">
                    {subscribers.map(subscriber => (
                        <div key={subscriber._id} className="carousel-item relative">
                            <img
                                src={subscriber.photo}
                                className="h-96 w-full"
                                alt={`photos of ${subscriber.name}`}
                            />
                            <div className="subscriber-info absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-2 rounded-lg shadow-[#f17941]  border border-[#f17941] shadow-md">
                                <p className="text-[#f17941]">Subscriber's Name: {subscriber.name}</p>
                                <p className="text-[#f17941]">Email: {subscriber.email}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </Slide>

        </div>
    );
};

export default Subscribers;
