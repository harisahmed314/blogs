import Header from "@/components/Header/Header";
import AddressInformation from "@/components/address";
import ContactInformation from "@/components/contactIndormation";
import FeedbackForm from "@/components/feddback";
import React from "react";

export default function Home() {
    return (
        <><Header />
        <section className="text-gray-600 bg-pink-400 body-font relative">
            <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
                <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
                    <iframe 
                        width="100%" 
                        height="100%" 
                        className="absolute inset-0" 
                        frameBorder="0" 
                        title="map" 
                        marginHeight="0" 
                        marginWidth="0" 
                        scrolling="no" 
                        src="https://www.google.com/maps/d/embed?mid=10HNhSmt3DIADu2pyqdFZTYOmatk&hl=en_US&ehbc=2E312F"
                        style={{ filter: "grayscale(1) contrast(1.2) opacity(0.4)" }}
                    ></iframe>
                    <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
                        <AddressInformation/>
                        <ContactInformation />
                    </div>
                </div>
                <FeedbackForm />
            </div>
        </section>
        </>
    );
}
