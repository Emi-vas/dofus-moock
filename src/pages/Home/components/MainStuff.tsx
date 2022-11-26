import { useEffect, useState } from "react";
import useChara from "../../../hooks/useChara";
import { itemsLeft, itemsRight } from "../data/icons";
import useIcons from "../hooks/useIcons";

interface Props {
    setDisplaySettingsChara: (val:boolean) => void,
    setDisplaySettingsStats: (val:boolean) => void,
}

const EquipmentsMain = ({ setDisplaySettingsChara, setDisplaySettingsStats }: Props) => {
    const chara = useChara()
   
    return (
        <div className="home-stuff_container">
            <div className="home-stuff">
                <ColumnItems items={itemsLeft} />
                <div className="chara">
                    <div>
                        <p className="classe">{chara.classe}</p>
                        <p>niveau : {chara.level}</p>
                    </div>
                    <img 
                        src={chara.gender == "male" ? chara.imgMale : chara.imgFemale} 
                        referrerPolicy="no-referrer" alt="" 
                    />
                    <div className="bloc-btn">
                        <button onClick={() => setDisplaySettingsChara(true)} className="btn-1">
                            changer de classe
                        </button>
                        <button onClick={() => setDisplaySettingsStats(true)} className="btn-2">
                            caractéristiques
                        </button>
                    </div>
                </div>
                <ColumnItems items={itemsRight} />
            </div>
            <BottomItems />
        </div>
    );
};

export default EquipmentsMain;


interface Items {
    items: {
        name: string,
        url: string
    }[]
}

const ColumnItems = ({ items }: Items) => {
    return(
        <div className="column">
            {
                items.map((item, index) => (
                    <img src={item.url} alt={item.name} key={index} />
                ))
            }
        </div>
    )
}



const BottomItems = () => {
    const {bottomIcons} = useIcons()

    return(
        <div className="home-stuff_bottomLine">
            {
                bottomIcons[0] && bottomIcons.map((icon: any) => (
                    <div className="item" key={icon.name}>
                        <img src={icon.url} alt={icon.name}  />
                    </div>
                ))
            }
        </div>
    )
}