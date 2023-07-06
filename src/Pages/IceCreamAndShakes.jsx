import React from "react";
import Navbar from "../Components/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt, faPhone } from "@fortawesome/free-solid-svg-icons";
import Footer from "../Components/Footer";
import is1 from '../img/icecreamAndShakes/is1.jpg'
import is2 from '../img/icecreamAndShakes/is2.jpg'
import is3 from '../img/icecreamAndShakes/is3.jpg'
import is4 from '../img/icecreamAndShakes/is4.jpg'
import is5 from '../img/icecreamAndShakes/is5.jpg'
import is6 from '../img/icecreamAndShakes/is6.jpg'



function IceCreamAndShakes() {
  const iceCreamAndShakes =[
    {
      "name": "Chaman Ice Cream آئسکریم چمن",
      "address": "Grand Trunk Rd, Jada, Jhelum, Punjab 49600",
      "contact": "0321 3070100",
      "image": is1
    },
    {
      "name": "The Waffles",
      "address": "WPGG+QHP, Kazim Kamal Road, GTS Chowk Jhelum Cantt, Jhelum, Punjab 50000",
      "contact": "0301 4112801",
      "image": is2
    },
    {
      "name": "Pehalwan Rabri Milk (Osman icecream)",
      "address": "WPGF+9VX, Kazim Kamal Road, Jhelum Cantt, Jhelum, Punjab 49600",
      "contact": "",
      "image": is3
    },
    {
      "name": "Soft Swirl",
      "address": "WPHH+4GQ, Railway Colony Rd, Model Colony Jhelum, Punjab 49600",
      "contact": "0317 3174283",
      "image": is4
    },
    {
      "name": "Barre Mian Sweets",
      "address": "WPGJ+WG7, Shaheen Rd, Jhelum, Punjab 49600",
      "contact": "(0544) 614556",
      "image": is5
    },
    {
      "name": "Sweet Palace",
      "address": "Railway Road, Model Colony Jhelum, Punjab 49600",
      "contact": "(0544) 628411",
      "image": is6
    }
  ]
  
  

  return (
    <>
      <Navbar />
      <div style={{ backgroundColor: "#B8C6D9" }}>
        <div className="container md:p-20">
          <div className="bg-white rounded overflow-hidden shadow-lg p-10">
            <div class="font-bold text-2xl text-center text-stone-600">
            IceCream and Shakes
            </div>
            <div class="container mt-10 grid lg:grid-cols-2 gap-10 sm:grid-cols-1">
              {iceCreamAndShakes.map((item) => {
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

export default IceCreamAndShakes;
