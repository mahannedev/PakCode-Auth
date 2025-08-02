import React from 'react';

const BoxFilter: React.FC = () => {
    const options = ["پربازدید ترین مقالات", "قدیمی ترین مقالات", "جدید ترین مقالات"];

    return (
        <div className="container border border-black border-2 p-10 flex items-center justify-around mb-32">
            <div className="flex gap-12 justify-center items-center text-gray-700">
                {options.map((option, index) => (
                    <span key={index} className="cursor-pointer">
                        {option}
                    </span>
                ))}
            </div>
            <div>
                <button className="border-2 border-black p-2">پایتون</button>
            </div>
        </div>
    );
};

export default BoxFilter;