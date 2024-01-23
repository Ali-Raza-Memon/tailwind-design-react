import React from "react";

const Home = () => {
  return (
    <div>
      <nav className="flex justify-between bg-purple-600 text-white">
        <img src="https://images.unsplash.com/photo-1461988320302-91bde64fc8e4?ixid=2yJhcHBfaWQiOjEyMDd9" className="h-12 pt-3 px-3 rounded-e-2xl " alt="" />
        <ul className="flex space-x-6  px-20 p-4 cursor-pointer">
            <li>Home</li>
            <li>About</li>
            <li>Catalogue</li>
            <li>Contact Us</li>
        </ul>
       
      </nav>
    

        <div>
            The best phone in the town
        </div>


    </div>
  );
};

export default Home;
