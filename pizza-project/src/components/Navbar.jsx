import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const Navbar = ({name}) => {
    const [isFocused, setIsFocused] = useState(false);
    const [search, setSearch] = useState("");
    const navigate = useNavigate();

    const handleSearch = (e) => {
        e.preventDefault();
        if (search.trim()) {
            navigate(`/order/${search.trim().toUpperCase()}`);
            setSearch("");
        }
    };

    return (
        <div>
            <div className="sticky  flex flex-row items-center  justify-between bg-[#facc15] p-3 px-4 md:px-6">
                <div onClick={() => navigate('/')} className="flex items-center cursor-pointer">
                    <h1 className="uppercase tracking-widest text-lg">
                        Fast React Pizza Co.
                    </h1>
                </div>
                <form onSubmit={handleSearch} className={`focus:border-4 rounded-3xl p-0.5 focus:border-amber-400 bg-[#fef9c3] transition-all duration-300 ${isFocused ? 'w-32 sm:w-80  outline-[3px] outline-amber-400' : 'w-32  sm:w-64'}`}>
                    <input
                        type="search"
                        placeholder="Search order #"
                        className="outline-none  placeholder:text-left p-1 px-4  w-full bg-transparent tracking-widest placeholder:text-gray-400"
                        onFocus={() => setIsFocused(true)}
                        onBlur={() => setIsFocused(false)}
                        value={search}
                        onChange={e => setSearch(e.target.value)}
                    />
                </form>
                {name && 
                <div className='hidden md:block'>
                    <h1>Hello, {name}</h1>
                </div>
                }
            </div>
        </div>
    )
}

export default Navbar