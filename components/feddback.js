import React, { useState } from "react";

function FeedbackForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    async function submitForm(e) {
        e.preventDefault();

        const response = await fetch('/api/feedback', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, email, message }),
        });

        const data = await response.json();

        console.log(data);
    }
    return (
            <form onSubmit={submitForm} className="bg-pink-300 lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0 mx-auto rounded">
            <h2 className="text-gray-900 text-lg mb-1 font-medium title-font text-center">Feedback</h2>
            <input type="text" id="name" name="name" placeholder="Your Name" value={name} onChange={e => setName(e.target.value)} className="mb-4 w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
            <input type="email" id="email" name="email" placeholder="Your Email" value={email} onChange={e => setEmail(e.target.value)} className="mb-4 w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
            <textarea id="message" name="message" placeholder="Your Message" value={message} onChange={e => setMessage(e.target.value)} className="mb-4 w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
            <button type="submit" className="text-white bg-red-500 border-0 py-1 px-2 focus:outline-none hover:bg-red-600 rounded text-sm">Submit</button>
            </form>

    );
}

export default FeedbackForm;