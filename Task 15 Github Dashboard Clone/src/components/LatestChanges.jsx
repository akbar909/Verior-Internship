const changes = [
	{
		date: 'Yesterday',
		desc: 'CodeQL 2.22.1 bring Rust support to public preview',
	},
	{
		date: 'Yesterday',
		desc: 'Agents page for GitHub Copilot coding agent',
	},
	{
		date: '2 days ago',
		desc: 'Enterprise enabled policy for GitHub Models...',
	},
	{
		date: '2 days ago',
		desc: 'Copilot coding agent now has its own web browser',
	},
];

const LatestChanges = () => {
	return (
		<div className="hidden xl:block bg-transparent border border-[#30363d] rounded-xl p-5 w-full max-w-[250px] max-h-fit mt-6 text-[#c9d1d9]">
			<h2 className="text-lg font-semibold mb-4">Latest changes</h2>
			<div className="relative pl-5 flex flex-col gap-4">
				<div className="absolute left-2.5 top-2 h-[calc(100%-2.5rem)] w-px bg-[#30363d] z-0" />
				{changes.map((item, idx) => (
					<div key={idx} className="relative z-10">
						<span className="absolute -left-3 top-1 w-2 h-2 rounded-full bg-[#c9d1d9] border-2 border-[#161b22]" />
						<div className="text-xs text-[#8b949e] mb-0.5">{item.date}</div>
						<div className="text-sm leading-snug hover:text-[#58a6ff] hover:underline cursor-pointer">{item.desc}</div>
					</div>
				))}
				<a
					href="#"
					className="block text-xs text-[#8b949e] hover:text-[#58a6ff]"
				>
					View changelog →
				</a>
			</div>
		</div>
	);
};

export default LatestChanges;