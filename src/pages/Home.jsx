import Chef from "../components/chef";
import Exclusive from "../components/exclusive";
import FAQSection from "../components/FAQSection";
import Fig from "../components/fig";
import Hero from "../components/hero";
import More from "../components/more";
import Order from "../components/order";

function Home() {
    return (
        <>
        <div className="px-10">
            <Hero />
            <Exclusive />
            <Order /> 
            <More />
            <Chef />
            <FAQSection />
            <Fig />
        </div>
        </>
    );
}

export default Home;