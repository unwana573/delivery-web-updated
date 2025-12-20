import OrderPage from "../components/Orderpage";
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
        </>
    );
}

export default Track_Order;
