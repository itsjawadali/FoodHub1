import React from "react";
import Navbar from "../Components/Navbar";
import RestaurantCard from "../Components/RestaurantCard";
import Footer from "../Components/Footer";

import pizza1 from '../img/pizza/pizza1.jpeg'
import pizza2 from '../img/pizza/pizza2.jpeg'
import pizza3 from '../img/pizza/pizza3.jpg'
import pizza4 from '../img/pizza/pizza4.jpg'
import pizza5 from '../img/pizza/pizza5.jpg'
import pizza6 from '../img/pizza/pizza6.jpg'
import pizza7 from '../img/pizza/pizza7.jpg'
import pizza8 from '../img/pizza/pizza8.jpg'
import pizza9 from '../img/pizza/pizza9.jpg'
import pizza10 from '../img/pizza/pizza10.jpg'
import pizza11 from '../img/pizza/pizza11.jpg'
import pizza12 from '../img/pizza/pizza12.jpg'
import pizza13 from '../img/pizza/pizza13.jpg'


function Pizza() {
 const pizzaPoints = [
  {
    "name": "Domino’s Pizza Jhelum",
    "address": "XP25+JH7، G T Road, Jada, Jhelum, Punjab 49600",
    "contact": "0307 5489185",
    "image": pizza1
  },
  {
    "name": "Pizza Originale",
    "address": "WP9C+44R, Grand Trunk Rd، near PSO Petrol Pump, Jhelum Cantt, Jhelum, Punjab",
    "contact": "(0544) 621703",
    "image": pizza2
  },
  {
    "name": "Pizza Hot",
    "address": "WPJM+77F, Naya Mohalla Jhelum, Jhelum, Punjab 49600",
    "contact": "(0544) 623060",
    "image": pizza3
  },
  {
    "name": "Italy Pizza Jhelum",
    "address": "WPPP+JJM, Civil Lines, near fazal hospital, Dhoke Abdullah, Jhelum, Punjab 49600",
    "contact": "(0544) 276327",
    "image": pizza4
  },
  {
    "name": "Italian Pizza",
    "address": "WPGG+9JC, Paradise Rd, Jhelum Cantt, Jhelum, Punjab 49600",
    "contact": "(0544) 610629",
    "image": pizza5
  },
  {
    "name": "The golden crust pizza",
    "address": "XP25+JQ5, NH 5, Jada, Jhelum, Punjab 49600",
    "contact": "0322 6229595",
    "image": pizza6
  },
  {
    "name": "Crunchie’s pizza kitchen",
    "address": "3 A, Machine Mohalla No.3 Machine Mohalla 3, Jhelum",
    "contact": "0326 6006633",
    "image": pizza7
  },
  {
    "name": "Peppery Chicken & Pizza",
    "address": "Shop # 41-42, GTS Plaza, G.T.S. Chowk, Jhelum, 49600",
    "contact": "0331 6625550",
    "image": pizza8
  },
  {
    "name": "Pizza17",
    "address": "Old G T Rd, Machine Mohalla No.2 Machine Mohalla 2, Jhelum, Punjab 49600",
    "contact": "0307 1881717",
    "image": pizza9
  },
  {
    "name": "De Amigos",
    "address": "Grand Trunk Road, Kala phattak, Kala Gujran, Jhelum, Punjab 49600",
    "contact": "(0544) 275655",
    "image": pizza10
  },
  {
    "name": "Mirchi hud",
    "address": "Plot G 320, Machine Mohalla 2, Jhelum, Punjab 49600",
    "contact": "0317 7204405",
    "image": pizza11
  },
  {
    "name": "Noor pizza orignal",
    "address": "Civil Lines, Jhelum, Punjab 49600",
    "contact": "(0544) 622239",
    "image": pizza12
  },
  {
    "name": "HFC Jhelum",
    "address": "Near Old G T Rd, Machine Mohalla No.3 Machine Mohalla 3, Jhelum, Punjab 49600",
    "contact": "(0544) 613400",
    "image": pizza13
  }
]
  

  return (
    <>
      <Navbar />
      <div style={{ backgroundColor: "#B8C6D9" }}>
        <div className="container md:p-20">
          <div className="bg-white rounded overflow-hidden shadow-lg p-10">
            <div class="font-bold text-2xl text-center text-stone-600">
              Pizza Points
            </div>
            <div class="container mt-10 grid lg:grid-cols-2 gap-10 sm:grid-cols-1">
              {pizzaPoints.map((item) => {
                return <RestaurantCard item = {item}/>
              })}
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default Pizza;
