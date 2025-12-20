import Info from "../components/info";
import Mac from "../components/mac";
import Map from "../components/map";
import Offer from "../components/offers";
import Review from "../components/review";

function Restaurant(params) {
    return (
        <>
        <Mac />
        <Offer />
        <Info />
        <Map />
        <Review />  
        </>
    );
}

export default Restaurant;
