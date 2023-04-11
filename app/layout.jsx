import { Poppins} from 'next/font/google'
import './globals.css'
import Header from './components/Header'

const poppins = Poppins({
    weight: ['400', '700'],
    subsets: ['latin'],
})

export const metadata = {
    title: 'Traversy Media',
    description: 'Web development tutorials and courses',
    keywords: 'web development, web design, javascript, react, node, angular, vue, html, css, bootstrap, sass, php, laravel, python, django, ruby, rails, java, c#, c++, c, go, swift, ios, android, mobile, programming, coding, developer, web developer, web designer, web development tutorials, web development courses, web development training, web development bootcamp, web development school, web development classes, web development lessons, web development education, web development learning',
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={poppins.className}>
                <Header />
                <main className='container'>
                    {children}
                </main>
            </body>
        </html>
    )
}
