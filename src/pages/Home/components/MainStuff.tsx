import { useEffect, useState } from "react";
import { itemsLeft, itemsRight } from "../data/icons";
import useIcons from "../hooks/useIcons";


const EquipmentsMain = () => {

    return (
        <div className="home-stuff_container">
            <div className="home-stuff">
                <ColumnItems items={itemsLeft} />
                <div className="chara">
                    <img src="https://s.ankama.com/www/static.ankama.com/dofus/renderer/look/7b317c38302c323132347c313d31363736353536342c323d31363335353838332c333d31363737373138352c343d323931303036342c353d31343536313739397c3134307d/full/1/250_250-10_100.png" referrerPolicy="no-referrer" alt="" />
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
                    <div className="item">
                        <img src={icon.url} alt="" />
                    </div>
                ))
            }
        </div>
    )
}