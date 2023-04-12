import Link from 'next/link';
import { FaStar, FaCodeBranch, FaEye } from 'react-icons/fa';

async function fetchRepo(name) {
    const response = await fetch(
		`https://api.github.com/repos/thijsBoet/${name}`,
		{
			next: {
				revalidate: 60 * 60 * 24,
			},
		},
	);
    const repo = await response.json()
    return repo
}

const Repo = async ({name}) => {
    const repo = await fetchRepo(name)

    return (
		<>
			<h2>{repo.name}</h2>
			<p>{repo.description}</p>
			<div className='card-stats'>
				<div className='card-stat'>
					<span>
						<FaStar className='icon' /> {repo.stargazers_count}
					</span>
					<span>
						<FaCodeBranch className='icon' /> {repo.forks_count}
					</span>
					<span>
						<FaEye className='icon' /> {repo.watchers_count}
					</span>
				</div>
			</div>
		</>
	);
}

export default Repo