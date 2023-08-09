import LandingPage from './home/page'
import AboutPage from './about/page';
import ProcedurePage from './procedures/page';
import TreatmentCard from '@/components/treatmentCard/treatmentCard';
import Treatments from './procedures/type/page';
import CosmeticSurgeryPage from './p_cosmeticsurgery/page';
import CosmeticSurgeryCard from '@/components/cosmeticSurgery/cosmeticSurgery';
import BreastImplantInfo from '@/components/cosmeticSurgery/breastImplant/breastImplant';
export default function Home() {
    return (
        // <div className="container">
        <div className="flex items-center justify-center h-full w-screen m-0 p-0">
           {/* <Treatments/> */}
        <CosmeticSurgeryPage/>
<BreastImplantInfo/>
            {/* <LandingPage />  */}
            {/* <AboutPage/>
            <ProcedurePage/> */}


            {/* </div> */}
        </div>
    );
}
