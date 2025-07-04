import { ChevronDown, CircleDot, GitBranch, Github, Inbox, Menu, Plus, Search, User2 } from "lucide-react"
import profile from '../assets/profile.png'
const Header = () => {
    return (
        <div>
            <div className="flex justify-between items-center p-4 border border-b-[#30363d]">
                <div className="flex items-center gap-2 ">
                    <Menu className="cursor-pointer text-[#6e7681] border border-[#30363d] rounded-md p-1 w-8 h-8 " />
                    <Github className="cursor-pointer bg-white rounded-full text-black p-1 w-8 h-8 " />
                    <h1 className= "cursor-pointer text-white font-semibold">Dashboard</h1>
                </div>
                <div className="flex items-center gap-2">
                
                    <div className="relative hidden lg:block">
                        <span className="absolute left-3 top-2 -translate-y-1/2 text-[#6e7681]">
                            <Search className="w-5 h-5" />
                        </span>
                        <input
                            type="text"
                            placeholder="Type / to search"
                            className="pl-10 pr-3 py-1.5 w-72 bg-transparent border border-[#30363d] rounded-md text-sm text-white placeholder-[#6e7681] focus:outline-none focus:ring-1 focus:ring-[#30363d]"
                            style={{ fontFamily: 'inherit' }}
                        />
                    </div>
            
                    <Search className="text-[#6e7681] cursor-pointer lg:hidden border border-[#30363d] rounded-md p-1 w-8 h-8" />
                    <div className="hidden md:flex items-center gap-2">
                        <div className=" flex items-center cursor-pointer">
                            <User2 className="text-[#6e7681]  rounded-r-none border border-[#30363d] rounded-md p-1 w-8 h-8" />
                            <ChevronDown className="  border border-[#30363d] rounded-md rounded-l-none p-1 w-8 h-8  text-[#6e7681] " />
                        </div>
                        <div className=" flex items-center cursor-pointer">
                            <Plus className="text-[#6e7681] rounded-r-none border border-[#30363d] rounded-md p-1 w-8 h-8" />
                            <ChevronDown className="  border border-[#30363d] rounded-md rounded-l-none p-1 w-8 h-8  text-[#6e7681] " />
                        </div>
                        <CircleDot className="text-[#6e7681] cursor-pointer border border-[#30363d] rounded-md p-1 w-8 h-8" />
                        <GitBranch className="text-[#6e7681] cursor-pointer border border-[#30363d] rounded-md p-1 w-8 h-8" />
                    </div>
                    <Inbox className="text-[#6e7681] border border-[#30363d] cursor-pointer rounded-md p-1 w-8 h-8" />
                    <img src={profile}  alt="User Avatar" className="cursor-pointer w-9 h-9 rounded-full ml-2" />
                </div>

            </div>
        </div>
    )
}

export default Header