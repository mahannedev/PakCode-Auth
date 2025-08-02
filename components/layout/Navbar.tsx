import Link from "next/link"
import Image from "next/image"

const Navbar = () => {
    return (
        <nav className="flex justify-around items-center bg-white p-5 space-x-20">
            <div className="flex items-center space-x-12">
                <div className="flex space-x-2 justify-center items-center">
                    <Image
                        className="dark:invert"
                        src="/img.png"
                        alt="Next.js logo"
                        width={40}
                        height={40}
                        priority
                    />
                    <h1 className="text-2xl font-bold text-neutral-900">PaCode</h1>
                </div>
                <div className="flex items-center justify-center space-x-8">
                    <Link href='/'>خانه</Link>
                    <Link href='/articles'>مقالات</Link>
                    <Link href='/aboutUs'>درباره ما</Link>
                </div>
            </div>
            <div>
                <form className="max-w-md mx-auto">
                    <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
                        جستجو
                    </label>
                    <div className="relative">
                        <input
                            type="search"
                            id="default-search"
                            className="block w-full px-24 py-2 text-sm text-gray-900 border-2 border-black rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="جستجو"
                            required
                        />
                        <div className="absolute inset-y-0 end-0 flex items-center pe-3 pointer-events-none">
                            <svg
                                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 20 20"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                                />
                            </svg>
                        </div>
                    </div>
                </form>
            </div>
            <div className="flex space-x-2 justify-center items-center">
                <button className="border-2 border-black px-10 py-2 rounded-md">ثبت نام</button>
                <button className="border-2 border-black px-10 py-2 rounded-md">ورود</button>
            </div>
        </nav>
    )
}

export default Navbar