import React from 'react'
import ShipingCard from './ShipingCard'
import { ImTruck } from 'react-icons/im';
import { FiShoppingBag } from 'react-icons/fi';
import { GiWoodPile } from 'react-icons/gi';
function Shiping() {
  return (
    <div className="container mx-auto px-5 py-6 flex justify-between md:flex-row flex-col gap-5 md:gap-0">
        <ShipingCard
         title="Fast & Free Shipping"
         icon={<ImTruck size={25}/>}
         desc=" Every single order ships for free.No minimums,no tiers, no fine print whatsoever"
        />
         <ShipingCard
         title="Modular,easy-to-move design"
         icon={<FiShoppingBag size={25}/>}
         desc=" Every single order ships for free.No minimums,no tiers, no fine print whatsoever"
        />
         <ShipingCard
         title="Durrable,premium matcrials"
         icon={<GiWoodPile size={25}/>}
         desc=" Every single order ships for free.No minimums,no tiers, no fine print whatsoever"
        />
    </div>
  )
}

export default Shiping