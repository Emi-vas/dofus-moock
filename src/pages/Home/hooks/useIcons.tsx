import { useEffect, useState } from "react";


const useIcons = () => {
    const [bottomIcons, setBottomIcons] = useState([])

    useEffect(() => {
        let tempArray: any = []
        for(let i = 0; i < 6; i++) {
            tempArray = [
                ...tempArray,
                {name: `dofus${i}`, url: "./img/items/bg_equipment_dofus.jpg"}
            ]
        }
        setBottomIcons(tempArray)
    }, [])
    return ({ bottomIcons })
};

export default useIcons;