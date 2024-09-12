import profilePic from "../assets/Vikram.jpg";


const Hero = () => {
    return (
        <div className="border-b border-neutral-900 pb-4 lg:mb-35">
            <div className="flex flex-wrap">
                <div className="w-full lg:w-1/2 ml-0 lg:ml-20">
                    <div className="flex flex-col items-center lg:items-start">
                        <h1
                            className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl">
                            Vikram Paswan
                        </h1>
                        <span className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent">
                            Full Stack Developer
                        </span>
                        <p className="my-3 max-w-xl py-6 font-light tracking-tighter mb-40">
                            I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With 2 years of hands-on experience, I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Node.js, MySQL, and MongoDB. My goal is to levelage my expertise to create innovative solutions that drive business growth and deliver exception user experiences.
                        </p>
                    </div>
                </div>
                <div className="w-full lg:w-1/3 lg:px-7 py-0 lg:py-6 ml-0 lg:ml-20">
                    <div className="flex justify-center items-center ">
                        <img src={profilePic} alt="Vikram" className="rounded-2xl"/>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Hero;
