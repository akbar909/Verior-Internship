import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
const Hero = ({ setName }) => {
    const [isFocused, setIsFocused] = useState(false);
    const [name1, setName1] = useState("");
    const [nameInput, setNameInput] = useState('');
    const [ordered, setOrdered] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const storedName = localStorage.getItem('name');
        if (storedName) {
            setName1(storedName);
            setOrdered(true);
        }
    }, []);

    const handleStartOrdering = () => {
        setName(name1);
        setOrdered(true);
        navigate('/menu');
    };
    const handleContinueOrdering = () => {
        navigate('/menu');
    };
    return (
        <div className="flex flex-col items-center justify-center min-h-[70vh] ">
            <div className="font-semibold text-center ">
                <h1 className="text-3xl leading-9">The best pizza.</h1>
                <h3 className="text-[#eab308] text-3xl leading-9">Straight out of the oven, straight to you.</h3>
            </div>
            {!ordered ? (
                <>
                    <p className="text-lg leading-6 mt-8">👋 Welcome! Please start by telling us your name: </p>
                    <div className={`border-2 ${isFocused ? 'border-yellow-400 outline-1 outline-amber-400 ' : 'border-transparent outline-gray-300 outline'} rounded-3xl p-2.5 bg-white mt-4 w-72 transition-all duration-300`}>
                        <input
                            type="search"
                            placeholder='Your full name'
                            className="outline-none px-6 w-full"
                            onFocus={() => setIsFocused(true)}
                            onBlur={() => setIsFocused(false)}
                            value={name1}
                            onChange={e => {
                                setName1(e.target.value);
                                setNameInput(e.target.value);
                            }}
                        />
                    </div>
                </>
            ) : null}

            <div className="h-16 flex items-center justify-center mt-10">
                {!ordered && name1 && (
                    <button onClick={handleStartOrdering} className='bg-[#facc15] cursor-pointer  uppercase text-black px-6 py-3 rounded-3xl hover:bg-yellow-300 transition-colors duration-300'>
                        Start Ordering
                    </button>
                )}
                {ordered && (
                    <button onClick={handleContinueOrdering} className='bg-[#facc15] cursor-pointer uppercase text-black px-6 py-3 rounded-3xl hover:bg-yellow-300 transition-colors duration-300'>
                        Continue ordering, {name1}
                    </button>
                )}
            </div>
        </div>
    )
}

export default Hero