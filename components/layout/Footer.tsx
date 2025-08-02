import Image from "next/image"
import React from "react"

const Footer = () => {
    return (
        <div className="container-fluid w-full mx-auto border border-black border-2 flex p-16 justify-around items-center">
            <div className="row space-y-8">
                <div className="column flex">
                    <Image
                        src="/img.png"
                        alt="Next.js logo"
                        width={100}
                        height={100}
                        priority
                    />
                    <h1 className="font-bold text-9xl">پاکد</h1>
                </div>
                <div className="column flex justify-center items-center">
                    <Image
                        src="/linkdin.png"
                        alt="Next.js logo"
                        width={40}
                        height={40}
                        priority 
                    />
                    <Image
                        src="/github.jpg"
                        alt="Next.js logo"
                        width={40}
                        height={40}
                        priority 
                    />
                    <Image
                        src="/telegram.png"
                        alt="Next.js logo"
                        width={40}
                        height={40}
                        priority 
                    />
                </div>
                <div className="column text-center">
                    <h1 className="text-xl text-gray-700">کپی رایت</h1>
                </div>
            </div>
            <div className="row">
                <div className="footer-section p-12 column">
                    <nav className="flex gap-4 justify-center items-center text-center">
                        <a href="/">درباره ما</a>
                        <a href="/">درباره ما</a>
                        <a href="/">درباره ما</a>
                        <a href="/">درباره ما</a>
                        <a href="/">درباره ما</a>
                    </nav>
                </div>
                <div className="footer-section p-12 column justify-center items-center space-y-4">
                    <h4 className="text-center">لورم اپیسوم متن ساختگی با تولید سادگی</h4>
                    <div className="flex justify-center items-center space-x-2">
                        <input className="border border-black border-2 py-2 px-4 rounded-md text-center" type="email" placeholder="email@email.com" />
                        <button className="border border-black border-2 py-2 px-8 rounded-md text-center text-gray-700">ارسال</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
