import React, { useState, useEffect } from 'react';

// // Assuming this is your JSON data
// const bloggers = [
//   {
//     "id": 1,
//     "name": "John Doe",
//     "blogTitle": "Tech Updates",
//     "blogPost": "Latest trends in AI.",
//     "like":25,
//     "comment":14,
//     "avatarUrl": "https://th.bing.com/th/id/R.5a34e855b8d2d68172c1dbe183b6814d?rik=YHUeeqCnYIs0NA&pid=ImgRaw&r=0"
//   },
//   {
//     "id": 2,
//     "name": "Jane Smith",
//     "blogTitle": "Healthy Living",
//     "blogPost": "Best vegan recipes.",
//     "avatarUrl": "https://th.bing.com/th/id/OIP.k7sywqb9JCHyxr7Yl2wlYQAAAA?pid=ImgDet&w=182&h=273&c=7",
//     "like":25,
//     "comment":14

//   },
//   {
//     "id": 3,
//     "name": "William Johnson",
//     "blogTitle": "Travel Diaries",
//     "blogPost": "Exploring Paris.",
//     "like":25,
//     "comment":14,
//     "avatarUrl": "https://i2.wp.com/austinemedia.com/wp-content/uploads/2019/09/7-6.jpg?resize=642%2C638&ssl=1"
//   }
// ]





const BloggersList = () => {
  const [bloggers, setBloggers] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/api/bloggerdata');
      const data = await response.json();

      if (data && data.data) {
        setBloggers(data.data);
      } else {
        console.error('Unexpected API response', data);
      }
    }
  
    fetchData();
  }, []);


  
    return (
        <section className="text-gray-600 body-font bg-pink-400" >
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-wrap -m-4">
              {bloggers.map(blogger => (
            <div key={blogger.id} className="p-4 md:w-1/3">
              <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <img className="lg:h-48 md:h-36 w-full object-cover object-center" src={blogger.avatarUrl} alt={`Avatar of ${blogger.name}`} />
                <div className="p-6 bg bg-pink-300">
                  <h2 className="tracking-widest text-xs title-font font-medium text-pink-900 mb-1">{blogger.blogTitle}</h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">{blogger.name}</h1>
                  <p className="leading-relaxed mb-3">{blogger.blogPost}</p>
                  <div className="flex items-center flex-wrap ">
                    <a className="text-red-500 inline-flex items-center md:mb-2 lg:mb-0">Learn More
                      <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                      </svg>
                    </a>
                    <span className="text-pink-900 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                      <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                        <circle cx="12" cy="12" r="3"></circle>
                      </svg>
                      <h3>{blogger.like}</h3>
                    </span>
                    <span className="text-pink-900 inline-flex items-center leading-none text-sm">
                      <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                      </svg>
                      <h3>{blogger.comment}</h3>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


export default BloggersList;
