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
        <Hero />
        <Exclusive />
        <Order /> 
        <More />
        <Chef />
        <FAQSection />
        <Fig />
        </>
    );
}

export default Home;