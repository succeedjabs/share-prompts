import '@styles/globals.css';
import Nav from "@components/Nav";

export const metadata = {
    title: 'Promptopia',
    description: 'Promptopia is a place to find writing prompts and share your own.',
}
const RootLayout = ({children}) => {
    return (
        <html lang="en">
            <body>
                <div className="main">
                    <div className="gradient"/>
                </div>
                <main className="app">
                    <Nav />
                    {children}
                </main>
            </body>
        </html>
    )
}
export default RootLayout;
