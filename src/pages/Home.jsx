import Chef from "../components/chef";
import Exclusive from "../components/exclusive";
import FAQSection from "../components/FAQSection";
import Fig from "../components/fig";
import Hero from "../components/hero";
import More from "../components/more";
import Order from "../components/order";
import Footer from "../components/footer";

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
        <Footer />
        </>
    );
}

export default Home;