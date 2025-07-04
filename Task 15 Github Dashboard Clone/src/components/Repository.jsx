import { BookPlus } from "lucide-react"
import profile from '../assets/profile.png'
const repositories = [
	{
		name: 'Verior-Internship',
		owner: 'akbar909',
		avatar: profile,
	},
	{
		name: 'portfoliobuilder',
		owner: 'akbar909',
		avatar: profile,
	},
	{
		name: 'Personal-Portfolio',
		owner: 'akbar909',
		avatar: profile,
	},
	{
		name: 'Edunova',
		owner: 'akbar909',
		avatar: profile,
	},
	{
		name: 'Recipe-Sharing-Frontend',
		owner: 'akbar909',
		avatar: profile,
	},
	
]

const Repository = ({ className = "" }) => {
	return (
        <div className={className}>
		<div className="-ml-5 p-4 rounded-md md:rounded-none border border-[#30363d] mx-auto bg-[#0d1117]">
			<div className="flex items-center justify-between md:mb-3">
				<h2 className="text-white text-base font-semibold hidden md:block">
					Top repositories
				</h2>
				<button className="hidden md:flex items-center cursor-pointer gap-1 bg-green-600 hover:bg-green-700 text-white text-xs font-medium px-2 py-1 rounded">
				<BookPlus className="w-4 h-4" />
					New
				</button>
			</div>
			<input
				type="text"
				placeholder="Find a repository..."
				className="w-full mb-3 px-3 py-1.5 bg-transparent border border-[#30363d] rounded-md text-sm text-white placeholder-[#6e7681] focus:outline-none focus:ring-1 focus:ring-[#30363d]"
			/>
			<ul className="max-h-[400px] overflow-y-auto pr-1">
				{repositories.map((repo, id) => (
					<li
						key={id}
						className="flex items-center gap-2 py-1 px-2 rounded  cursor-pointer"
					>
						<img
							src={repo.avatar}
							alt="avatar"
							className="w-6 h-6 rounded-full"
						/>
						<span className="text-[#c9d1d9] text-sm font-medium hover:underline">
							{repo.owner}/
							<span>{repo.name}</span>
						</span>
					</li>
				))}
			</ul>
		</div>
        </div>
	)
}

export default Repository