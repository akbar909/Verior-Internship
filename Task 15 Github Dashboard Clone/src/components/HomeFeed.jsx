import { ChevronRight, CircleDot, Code, Filter, MoreHorizontal, SendHorizontal, Star } from 'lucide-react';
import Repository from './Repository';

const feed = [
	{
		type: 'repo',
		user: {
			name: 'thinkfeatSS',
			avatar: 'https://avatars.githubusercontent.com/u/1024025?v=4',
		},
		action: 'created a repository',
		time: 'yesterday',
		repo: {
			name: 'thinkfeatSS/law-gat-api',
			language: 'Python',
			languageColor: '#3572A5',
		},
	},
	{
		type: 'follow',
		user: {
			name: 'EtishaGarg',
			avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
		},
		action: 'followed',
		time: 'last week',
		followed: {
			name: 'Ani Betts',
			username: 'aniasbetts',
			description: 'Margot Tenenbaum as software developer.',
			repos: 337,
			followers: '2.3k',
			avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
		},
	},
];

const trending = [
	{
		name: 'TauricResearch/TradingAgents',
		description: 'TradingAgents: Multi-Agents LLM Financial Trading Framework',
		language: 'Python',
		languageColor: '#3572A5',
		stars: '10.6k',
	},
	{
		name: 'stan-smith/FossFLOW',
		description: 'Make beautiful isometric infrastructure diagrams',
		language: 'TypeScript',
		languageColor: '#3178c6',
		stars: '3.5k',
	},
];

const HomeFeed = () => {
	return (
		<div className="w-full max-w-2xl mx-auto p-4">
			<h1 className="text-white text-2xl font-semibold mb-4">Home</h1>
			<div className="flex items-center mb-4">
				<input
					type="text"
					placeholder="Ask Copilot"
					className="flex-1 bg-transparent border border-[#30363d] rounded-xl text-[#c9d1d9] px-4 py-2.5 text-base placeholder-[#6e7681] outline focus:outline-[#58a6ff] "
				/>
				<button className="-ml-10 mr-2 p-2 cursor-pointer text-[#6e7681] hover:text-[#c9d1d9]">
					<SendHorizontal />
				</button>
			</div>
			<div className="flex flex-wrap gap-3 mb-6">
				<button className="flex items-center gap-2 border border-[#30363d] rounded-full px-4 py-2 text-[#c9d1d9] bg-transparent hover:bg-[#21262d] text-sm">
					<CircleDot className='w-5 h-5' color="#23b106" />
					Suggest next steps for an issue
				</button>
				<button className="flex items-center gap-2 border border-[#30363d] rounded-full px-4 py-2 text-[#c9d1d9] bg-transparent hover:bg-[#21262d] text-sm">
					<Code className='w-5 h-5 text-[#6e7681]'/>
					Make a Pong game
				</button>
			</div>
            <h2 className="text-white text-base font-semibold md:hidden mb-3">
					Top repositories
				</h2>
            <Repository className=" md:hidden mb-6" />
			{/* Feed header */}
			<div className="flex items-center justify-between mb-2">
				<span className="text-white text-lg font-semibold">Feed</span>
				<button className="flex items-center gap-1 px-2 py-1 text-sm text-[#c9d1d9] border border-[#30363d] rounded hover:bg-[#21262d]">
					<Filter className="w-4 h-4" /> Filter
				</button>
			</div>
			{/* Feed cards */}
			<div className="flex flex-col gap-4 mb-6">
				{feed.map((item, idx) => (
					<div
						key={idx}
						className="bg-[#161b22] border border-[#30363d] rounded-lg p-3 relative"
					>
						<button className="absolute top-2 right-2 text-[#6e7681] hover:bg-[#21262d] rounded p-1">
							<MoreHorizontal className="w-5 h-5" />
						</button>
						{item.type === 'repo' && (
							<>
								<div className="flex items-center gap-2 mb-2">
									<img
										src={item.user.avatar}
										alt="avatar"
										className="w-7 h-7 rounded-full"
									/>
									<span className="text-[#c9d1d9] font-medium">
										{item.user.name}
									</span>
									<span className="text-[#8b949e] text-sm">
										{item.action}
									</span>
									<span className="text-[#8b949e] text-xs ml-2">
										{item.time}
									</span>
								</div>
								<div className="flex items-center gap-2 bg-[#21262d] border border-[#30363d] rounded px-3 py-2 mt-1">
									<span className="text-[#58a6ff] font-medium">
										{item.repo.name}
									</span>
									<span className="flex items-center gap-1 ml-auto text-xs text-[#8b949e]">
										<span
											className="w-2 h-2 rounded-full"
											style={{
												background: item.repo.languageColor,
											}}
										></span>
										{item.repo.language}
									</span>
									<button className="ml-2 flex items-center gap-1 px-2 py-1 text-xs border border-[#30363d] rounded text-[#c9d1d9] bg-[#161b22] hover:bg-[#21262d]">
										<Star className="w-4 h-4" /> Star
									</button>
								</div>
							</>
						)}
						{item.type === 'follow' && (
							<>
								<div className="flex items-center gap-2 mb-2">
									<img
										src={item.user.avatar}
										alt="avatar"
										className="w-7 h-7 rounded-full"
									/>
									<span className="text-[#c9d1d9] font-medium">
										{item.user.name}
									</span>
									<span className="text-[#8b949e] text-sm">
										{item.action}
									</span>
									<span className="text-[#8b949e] text-xs ml-2">
										{item.time}
									</span>
								</div>
								<div className="flex items-center gap-3 bg-[#21262d] border border-[#30363d] rounded px-3 py-2 mt-1">
									<img
										src={item.followed.avatar}
										alt="avatar"
										className="w-8 h-8 rounded-full"
									/>
									<div className="flex-1">
										<span className="text-[#c9d1d9] font-medium block">
											{item.followed.name}{' '}
											<span className="text-[#8b949e] text-xs">
												{item.followed.username}
											</span>
										</span>
										<span className="text-[#8b949e] text-xs block">
											{item.followed.description}
										</span>
										<span className="text-[#8b949e] text-xs block mt-1">
											{item.followed.repos} repositories ·{' '}
											{item.followed.followers} followers
										</span>
									</div>
									<button className="ml-auto px-3 py-1 text-xs border border-[#30363d] rounded text-[#c9d1d9] bg-[#161b22] hover:bg-[#21262d]">
										Follow
									</button>
								</div>
							</>
						)}
					</div>
				))}
			</div>
			{/* Trending repositories */}
			<div className="bg-[#161b22] border border-[#30363d] rounded-lg p-3">
				<div className="flex items-center gap-2 mb-2">
					<span className="text-[#c9d1d9] text-sm font-medium">
						Trending repositories
					</span>
					<ChevronRight className="w-4 h-4 text-[#8b949e]" />
					<span className="text-[#58a6ff] text-xs cursor-pointer ml-auto">
						See more
					</span>
				</div>
				<div className="flex flex-col gap-3">
					{trending.map((repo, idx) => (
						<div
							key={idx}
							className="bg-[#21262d] border border-[#30363d] rounded px-3 py-2 flex flex-col gap-1"
						>
							<span className="text-[#58a6ff] font-medium">{repo.name}</span>
							<span className="text-[#8b949e] text-xs">
								{repo.description}
							</span>
							<div className="flex items-center gap-3 mt-1">
								<span className="flex items-center gap-1 text-xs text-[#8b949e]">
									<span
										className="w-2 h-2 rounded-full"
										style={{ background: repo.languageColor }}
									></span>
									{repo.language}
								</span>
								<span className="flex items-center gap-1 text-xs text-[#8b949e]">
									<Star className="w-4 h-4" /> {repo.stars}
								</span>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default HomeFeed;