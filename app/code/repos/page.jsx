import Link from 'next/link';
import {FaStar, FaCodeBranch, FaEye} from 'react-icons/fa';

async function fetchRepos() {
    const response = await fetch(
		`https://api.github.com/users/thijsBoet/repos`, {
			next: {
				revalidate: 60 * 60 * 24, // 1 day
			}
		}
    );
    const repos = await response.json();
    return repos;
}

const ReposPage = async () => {
    const repos = await fetchRepos();
    console.log(repos);

    return (
		<div className='repos-container'>
			<h2>Repositories</h2>
			<ul className='repo-list'>
				{repos.map((repo) => (
					<li key={repo.id} className='repo'>
						<Link href={`/code/repos/${repo.name}`}>
							<h3>{repo.name}</h3>
							<p>{repo.description}</p>
							<div className='repo-details'>
								<span>
									<FaStar className='icon' />{' '}
									{repo.stargazers_count}
								</span>
								<span>
									<FaCodeBranch className='icon' />{' '}
									{repo.forks_count}
								</span>
								<span>
									<FaEye className='icon' />{' '}
									{repo.watchers_count}
								</span>
							</div>
						</Link>
					</li>
				))}
			</ul>
		</div>
	);
}

export default ReposPage