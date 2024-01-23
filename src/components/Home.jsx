import React from "react";

const Home = () => {
  return (
    <div>
      <nav className="flex justify-between bg-purple-600 text-white">
        <img
          src="https://images.unsplash.com/photo-1461988320302-91bde64fc8e4?ixid=2yJhcHBfaWQiOjEyMDd9"
          className="h-12 pt-3 px-3 rounded-e-2xl "
          alt=""
        />
        <ul className="flex space-x-6  px-20 p-4 cursor-pointer">
          <li>Home</li>
          <li>About</li>
          <li>Catalogue</li>
          <li>Contact Us</li>
        </ul>
      </nav>

      <main>
        <div className="h-0.5 bg-fuchsia-100 py-80 pl-9">
          <div className="text-6xl">The best phone in the town</div>
          <p className="w-1/3 py-4">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore
            esse voluptates officiis libero illo, corporis sint fugit dolorum
            nobis eos, autem asperiores a error provident labore pariatur atque
            totam repudiandae!
          </p>
          <div className="buttons">
            <button className="bg-purple-800 px-3 py-2 rounded-2xl text-white mx-4">Buy Now</button>
            <button className="bg-purple-800 px-3 py-2 rounded-2xl text-white mx-4">Contact US</button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
