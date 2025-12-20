import React from "react";
import { GoogleMap, LoadScript, Marker, InfoWindow } from "@react-google-maps/api";

function Map() {
    const center = { lat: 51.5074, lng: -0.1278 }; // London coordinates
    const [selected, setSelected] = React.useState(null);

    return (
        <div className="relative w-[90%] h-[400px] rounded-xl overflow-hidden justify-self-center max-lg:my-[30px]">
            <LoadScript googleMapsApiKey="AIzaSyCJEuqCZ7R2PD83MJePUrDXGrbdQTd3nd4">
                <GoogleMap
                    mapContainerClassName="w-full h-full"
                    center={center}
                    zoom={14}
                >
                    <Marker
                        position={center}
                        onClick={() => setSelected(center)}
                    />

                    {selected && (
                        <InfoWindow
                            position={center}
                            onCloseClick={() => setSelected(null)}
                        >
                            <div className="text-sm">
                                <h3 className="font-bold text-base mb-2">
                                    McDonald's <span className="text-[#fc8a06]">South London</span>
                                </h3>
                                <p className="mb-2 text-gray-700">
                                    Tooley St, London Bridge, London SE1 2TF, United Kingdom
                                </p>
                                <p className="mb-2 text-gray-700">
                                    <strong>Phone:</strong> +934443-43
                                </p>
                                <a 
                                    href="http://mcdonalds.uk/" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="text-[#00bfff] hover:underline"
                                >
                                    http://mcdonalds.uk/
                                </a>
                            </div>
                        </InfoWindow>
                    )}
                </GoogleMap>
            </LoadScript>

            {/* Floating Info Card */}
            <div className="absolute top-5 left-5 bg-[#0a0a2a] text-white py-10 px-5 rounded-xl max-w-[280px] font-sans shadow-2xl backdrop-blur-sm max-md:max-w-[250px] max-md:py-8 max-md:px-4">
                <h2 className="m-0 mb-2.5 text-2xl font-bold">
                    McDonald's <span className="text-[#fc8a06]">South London</span>
                </h2>
                <p className="mb-3 text-sm leading-relaxed text-gray-300">
                    Tooley St, London Bridge, London SE1 2TF, United Kingdom
                </p>
                <p className="mb-2 text-sm text-gray-300">
                    <strong className="text-white">Phone number:</strong> +934443-43
                </p>
                <p className="text-sm text-gray-300">
                    <strong className="text-white">Website:</strong>{" "}
                    <a 
                        href="http://mcdonalds.uk/" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#00bfff] hover:text-[#33ccff] hover:underline transition-colors duration-300"
                    >
                        http://mcdonalds.uk/
                    </a>
                </p>

                {/* Decorative element */}
                <div className="absolute -bottom-2 -right-2 w-20 h-20 bg-[#fc8a06]/20 rounded-full blur-xl"></div>
            </div>
        </div>
    );
}

export default Map;