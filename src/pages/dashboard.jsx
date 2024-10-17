import Button from "../components/Elements/Button";
import AboutImages from "../assets/images/about.jpg"
import WomanDoctor from "../assets/images/woman-docktor.webp"
import DoctorsImages from "../assets/images/carousel-2.jpg"
import { Link } from "react-router-dom";
import Navigation from "../components/Layouts/Navigation";

const DashboardPage = () => {
    return (
        <div>
            <Navigation></Navigation>
            <section className="flex justify-between gap-8 px-20 bg-cover bg-[#F0F7FD] h-[92vh]">
                <div className="flex flex-col gap-8 justify-center p-10 rounded-lg backdrop-blur-sm">
                    <div className="text-7xl font-bold">
                    <h1>Health</h1>
                    <h1>Service Center</h1>
                    </div>
                    <p className="text-justify w-96">The greatest Doctor in the South Tangerang City area  have treated more patients with the invisalign appliance than Dr. Raul Randers Gootham. This vast experience leads to efficient treatment with outstanding results.</p>
                    <Button className="text-slate-50 bg-emerald-500 rounded-3xl w-40">
                        <Link to={"/booking"}>Book Online</Link>
                    </Button>
                </div>
                <div className="flex items-end">
                    <img src={WomanDoctor} alt="doctor" className="h-[90%]" />
                </div>
                

            </section>
        </div>
    )
}

export default DashboardPage;