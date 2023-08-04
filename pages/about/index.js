import Header from "@/components/Header/Header";
import React from "react";

export default function Home(){
    return (
        <>
    <Header/>
    <section className="text-pink-900 bg-pink-400 body-font">
            <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
                <img className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" alt="hero" src="https://images.unsplash.com/photo-1560179707-f14e90ef3623?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y29tcGFueXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"/>
                <div className="text-center w-full">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">About Us</h1>
                    <p className="mb-8 leading-relaxed">Our company was founded in 2021, and we have been providing quality products and services ever since. Located in City, State, we employ over 2000 people and manufacture a wide range of products.</p>
                    <div className="flex justify-center">
                       <a href="../contactus"> <button  className="inline-flex text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded text-lg">Contact Us</button></a>
                    </div>
                </div>
            </div>
        </section>

    </>
    
    )
}