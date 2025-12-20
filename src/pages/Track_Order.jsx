import OrderPage from "../components/OrderPage";
import Footer from "../components/footer";
import Info from "../components/info";
import Mac from "../components/mac";
import Map from "../components/map";
import Review from "../components/review";

function Track_Order(params) {
    return (
        <>
            <Mac />
            <OrderPage />
            <Info />
            <Map /> 
            <Review />
            <Footer />
        </>
    );
}

export default Track_Order;
