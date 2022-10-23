import React, {useState} from "react";
import RealityPage, {VirtualReality} from "./virtualReal";
import SpeakersStore, {speakers} from "./speakers";
import LaptopPage, {LaptopStore} from "./laptops";
import GamingPage, {Controller} from "./gaming";
import PlantsPage, {PlantsStore} from "./plants";
import PhonesPage, {PhonesStore} from "./phones";

const MyStore = () => {
    
    return (
        <div className="entireStore">
            
            <article>
                <StoreProducts />
            </article>
        </div>
    )
}
const StoreProducts = () => {
    const [virtualStore] = useState(VirtualReality)
    const [speakerItem] = useState(speakers)
    const [singlePlant] = useState(PlantsStore)
    const [myLaptop] = useState(LaptopStore)
    const [gameController] = useState(Controller)
    const [singlePhone] = useState(PhonesStore)
    
    
    return (
        <>
        <div className="fullStore">
                    <h1>Virtual Reality</h1>
                    {virtualStore.map((vritem)=>{
                        return(
                            <RealityPage key={vritem.id} {...vritem}/>
                        )
                    })}
                </div>
                 <div className="fullStore">
                     <h1>Speakers</h1>
                     {speakerItem.map((speaker)=>{
                         return(
                             <SpeakersStore key={speaker.id} {...speaker} />
                         )
                     })}
                     </div>   
                     <div className="fullStore">
                         <h1>Laptops</h1>
                         {myLaptop.map((screen)=>{
                             return (
                                 <LaptopPage key={screen.id} {...screen} />
                             )
                         })}
                     </div>
                        <div className="fullstore">
                            <h1>PlayStore Controllers</h1>
                            {gameController.map((game)=>{
                                return (
                                    <GamingPage key={game.id} {...game} />
                                )
                            })}
                        </div>
            
            
            <div className="fullStore">
                <h1>Plants Store</h1>
                {singlePlant.map((plant)=>{
                    return (
                        <PlantsPage key={plant.id} {...plant} />
                    )
                })}
            </div>
           <div className="fullStore">
                <h1>Phones Store</h1>
                {singlePhone.map((phone)=>{
                    return (
                        <PhonesPage key={phone.id} {...phone} />
                    )
                })}
            </div>
            
        </>
    )
}

export default MyStore