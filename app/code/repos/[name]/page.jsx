import { Suspense } from 'react';
import Repo from '@/app/components/Repo';
import Link from 'next/link';
import RepoDirs from '../../../components/RepoDirs';

const RepoPage = ({ params: { name } }) => {
	return (
		<div className='card'>
			<Link className='btn btn-back' href='/code/repos'>
				Back To Repositories
			</Link>
			<Suspense fallback={<div>Loading repo...</div>}>
				<Repo name={name} />
			</Suspense>
			<Suspense fallback={<div>Loading directories...</div>}>
				<RepoDirs name={name} />
			</Suspense>
		</div>
	);
};

export default RepoPage;
