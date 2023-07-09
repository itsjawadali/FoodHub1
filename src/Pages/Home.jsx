import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../Components/Navbar";
import logo from "../img/logo.png";
import backgroundImage from "../img/backgroundImage.jpg";
import pakfood from "../img/pakFood/pakfood.jpeg";
import fastfood from "../img/fastFood/fastfood.jpg";
import pizza from "../img/pizza/pizza.jpg";
import db from "../img/dessertAndBakes/db.jpeg";
import home from "../img/homeChefs/home.jpg";
import is from "../img/icecreamAndShakes/is.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Footer from "../Components/Footer";

const Home = () => {
  const menu = [
    {
      name: "Pakistani Food",
      image: pakfood,
      route: "/pakistani-food",
    },
    {
      name: "Fast Food",
      image: fastfood,
      route: "/fast-food",
    },
    {
      name: "Pizza",
      image: pizza,
      route: "/pizza",
    },
    {
      name: "Desserts and Bakes",
      image: db,
      route: "/desserts-and-bakes",
    },
    {
      name: "Home Chef",
      image: home,
      route: "/home-chefs",
    },
    {
      name: "Ice Cream and Shakes",
      image: is,
      route: "/icecream-and-shakes",
    },
  ];

  return (
    <>
      <Navbar />
      <div className="h-full">
        <div
          className="bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: `url(${backgroundImage})`,
          }}
        >
          <div className="container pt-32 md:pt-48 flex justify-center items-center text-center">
            <div>
              <div class="flex justify-center items-center mb-8">
                <img src={logo} alt="Logo" class="object-contain md:w-48 md:h-48 w-32 h-32" />
              </div>
              <div class="bg-cyan-800 bg-opacity-30 p-8 rounded-lg shadow-lg lg:mx-20 md:mx-16 mx-8">
                <h2 class="lg:text-4xl text-2xl font-bold text-white">
                  Welcome to Food Hub
                </h2>
                <p class="text-white font-semibold lg:text-2xl text-xl my-2">
                  Your ultimate destination for discovering the best food places
                  in your city!
                </p>
                <p class="text-white lg:text-lg text-md">
                  Whether you're craving a mouthwatering burger, exotic cuisine
                  from around the city, or a cozy café for a perfect cup of
                  coffee, Food Hub has got you covered. Our website features an
                  extensive directory of local food places, ranging from trendy
                  restaurants and charming bistros to hidden gems and food
                  trucks.
                </p>
              </div>
            </div>
          </div>
          <div className="mx-5 md:mx-10 md:px-6 px-4 lg:px-8 md:mt-40 mt-32 grid lg:grid-cols-3 sm:grid-cols-1 gap-10">
            {menu.map((item) => {
              return (
                <div
                  class="max-w-auto my-8 bg-cyan-50 rounded overflow-hidden shadow-lg"
                  style={{ height: "40vh" }}
                >
                  <img
                    class="w-full object-cover"
                    style={{ height: "20vh" }}
                    src={item.image}
                    alt="image"
                  />
                  <div class="px-6 py-4">
                    <div class="font-bold text-2xl mb-2 text-stone-600 text-center">
                      {item.name}
                    </div>
                    <div className="text-center lg:mt-4 md:mt-4 sm:mt-2">
                      <Link to={item.route}>
                        <button class="bg-cyan-800 hover:bg-cyan-700 font-bold py-1 w-full rounded-full text-cyan-50">
                          <FontAwesomeIcon
                            icon={faArrowRight}
                            color="bg-cyan-50"
                            className="my-2"
                            size="xl"
                          />
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="mt-24 pb-24 flex justify-center items-center text-center">
              <div class="bg-cyan-50 p-8 rounded-lg shadow-lg lg:mx-20 md:mx-16 mx-8">
                <h2 class="lg:text-4xl text-2xl font-bold text-stone-600">
                  About Us
                </h2>
                <p class="text-stone-600 lg:text-lg text-md mt-2">
                <span className="font-semibold text-cyan-800"> Food Hub</span> is a website designed to provide citizens with information about local restaurants in their area. It aims to be a comprehensive platform that helps users discover new dining options, explore Bakers, read reviews, and make informed decisions about where to eat.
                </p>
              </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
