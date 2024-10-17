import Navigation from "../components/Layouts/Navigation";

const AboutPage = () => {
    return (
        <div>
            <Navigation></Navigation>
            <div className="flex justify-center items-center h-screen">
                <h1 className="text-3xl underline underline-offset-8">About Page</h1>
            </div>
        </div>
    )
}

export default AboutPage;