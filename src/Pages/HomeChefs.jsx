import React from "react";
import Navbar from "../Components/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt, faPhone } from "@fortawesome/free-solid-svg-icons";
import Footer from "../Components/Footer";

import homeHead from '../img/homeChefs/homeHead.jpg'
import home1 from '../img/homeChefs/home1.jpg'
import home2 from '../img/homeChefs/home2.jpg'
import home3 from '../img/homeChefs/home3.jpg'
import home4 from '../img/homeChefs/home4.jpg'


function HomeChefs() {
  const homeChefs =[
    {
      "name": "Savour food house (home chef)",
      "address": "Plot 103, Dhoke Abdullah Jhelum, Punjab 49600",
      "contact": "0336 9847805",
      "image": home1
    },
    {
      "name": "Ghousia Kitchen (Home-Cheff)",
      "address": "XP4J+RV5, Jhelum, Punjab",
      "contact": "0305 5026001",
      "image": home2
    },
    {
      "name": "Tea Time Cafe-Home chef",
      "address": "WPVG+3J3, Muhammadi Chok, Chishtiyan Mohallah Chishtian Mohalla, Jhelum, Punjab 49600",
      "contact": "0304 8974247",
      "image": home3
    },
    {
      "name": "Enno’s Kitchen",
      "address": "Doctors Colony Near Quaid e Azam Chowk and Gora Qabaristan Jaffar Road Cantt, Jhelum",
      "contact": "",
      "image": home4
    }
  ]
  
  

  return (
    <>
      <Navbar />
      <div className="bg-cyan-50">
      <div class="relative">
          <div
            class="bg-cover bg-center h-64 md:h-80"
            style={{
              backgroundImage: `url(${homeHead})`,
              backgroundColor: "rgba(0, 0, 0, 0.5)",
            }}
          >
            <div class="flex items-center justify-center h-full">
            <div class="font-bold text-2xl md:text-4xl text-center text-white">
              Home Chefs
            </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="rounded overflow-hidden shadow-lg p-10">
            <div class="container mt-10 grid lg:grid-cols-2 gap-10 sm:grid-cols-1">
              {homeChefs.map((item) => {
                return (
                  <div class="relative z-0 max-w-auto bg-stone-100 hover:shadow-lg rounded-lg overflow-hidden">
                    <div
                      class="bg-cover bg-center bg-opacity-75 h-64"
                      style={{
                        backgroundImage:
                        `url('${item.image}')`
                      }}
                    ></div>
                    <div class="absolute bottom-0 inset-x-0 flex items-center justify-center">
                      <div class="p-6 bg-white rounded-t-lg bg-opacity-90 w-11/12">
                        <h3 class="text-2xl font-semibold text-gray-800">
                            {item.name}
                        </h3>
                        <p class="text-gray-600 mt-2">
                          <FontAwesomeIcon
                            icon={faMapMarkerAlt}
                            color="#8596A6"
                            className="mr-2"
                          />
                         {item.address}
                        </p>
                        <p class="text-gray-600 mt-2">
                          <FontAwesomeIcon
                            icon={faPhone}
                            color="#8596A6"
                            className="mr-2"
                          />
                          {item.contact}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default HomeChefs;
