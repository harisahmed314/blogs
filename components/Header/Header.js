import React from 'react'

const Header = () => {
  return (
    <header className="text-black bg-pink-300 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <svg xmlns="http://www.w3.org/2000/svg" fill="#FF1493" viewBox="0 0 24 24" className="w-10 h-10 text-white p-2 bg-red-500 rounded-full">
            <path d="M0 0h24v24H0z" fill="none" />
            <path d="M4 4h16v16H4V4zm1.618 1.968L7.99 7.335a1.7 1.7 0 0 1 1.528-.04l.155.069 2.634 1.8a1.7 1.7 0 0 1 .247 2.68l-.133.122-1.884 1.68-1.03 1.962c-.173.33-.516.546-.885.586l-.18.007H7.6c-.915 0-1.71-.63-1.898-1.528L5.677 13H5.7l-.017-.327 1.248-2.327 1.042-.595a1.7 1.7 0 0 1 1.74-.003l.154.087 1.223.835-.425-.464a1.7 1.7 0 0 1-.123-2.185l.097-.132L6.617 5.968z" />
          </svg>


          <span className="ml-3 text-xl">Bloggers-Web</span>
        </a>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
          <a href='./' className="mr-5 hover:text-pink-800">Home</a>
          <a href='./about' className="mr-5 hover:text-pink-800">About</a>
          <a href='./contactus' className="mr-5 hover:text-pink-800">Contact Us</a>

        </nav>

      </div>
    </header>
  )
}

export default Header