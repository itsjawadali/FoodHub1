import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt, faPhone } from "@fortawesome/free-solid-svg-icons";
function RestaurantCard(props) {
  return (
        <div class="relative z-0 max-w-auto bg-stone-100 hover:shadow-lg rounded-lg overflow-hidden">
          <div
            class="bg-cover bg-center bg-opacity-75 h-64"
            style={{
              backgroundImage:
              `url('${props.item.image}')`
            }}
          ></div>
          <div class="absolute bottom-0 inset-x-0 flex items-center justify-center">
            <div class="p-6 bg-white rounded-t-lg bg-opacity-90 w-11/12">
              <h3 class="text-2xl font-semibold text-gray-800">
                  {props.item.name}
              </h3>
              <p class="text-gray-600 mt-2">
                <FontAwesomeIcon
                  icon={faMapMarkerAlt}
                  color="#8596A6"
                  className="mr-2"
                />
               {props.item.address}
              </p>
              <p class="text-gray-600 mt-2">
                <FontAwesomeIcon
                  icon={faPhone}
                  color="#8596A6"
                  className="mr-2"
                />
                {props.item.contact}
              </p>
            </div>
          </div>
        </div>
      );
  
}

export default RestaurantCard