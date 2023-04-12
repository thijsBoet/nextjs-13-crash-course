import Link from 'next/link'
import Courses from './components/Courses'


const page = () => {
    return (
		<div>
			<h1>Welcome to Traversy</h1>
			<Courses />
		</div>
	);
}

export default page