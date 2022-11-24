import { useEffect, useState } from 'react'
import useFetchapi from '../../hooks/useFetchapi';
import MainStuff from "./components/MainStuff"
import SettingChara from "./components/SettingChara";

import { useDispatch} from "react-redux"
import { updateChara } from '../../redux/actions/chara.action';
import useChara from '../../hooks/useChara';
import { IMAGE_MALE_DEFAULT, IMAGE_FEMALE_DEFAULT } from '../../data/constants';
import StatsBlocMain from './components/StatsBlocMain';
import StatsBlocs from './components/StatsBlocs';



const Home = () => {
    const dispatch = useDispatch()
    const [displaySettingsChara, setDisplaySettingsChara] = useState(false)
    const classesList = useFetchapi("/classes")
    const chara = useChara() //get redux charactere info

    useEffect(() => {
        //set a default character
        if(!chara) {
            dispatch(updateChara(JSON.stringify(newChara)))
        }
    }, [])


    useEffect(() => {
        console.log(chara)
    }, [chara])

    return (
        <div>
            <MainStuff 
                setDisplaySettingsChara={setDisplaySettingsChara} 
            />
            
            { displaySettingsChara && 
                <SettingChara 
                    classesList={classesList}
                    setDisplaySettingsChara={setDisplaySettingsChara} 
                /> 
            }

            <StatsBlocs />
        </div>
    );
};

export default Home;

//default cara
const newChara = {
    classe : "Iop",
    imgMale: IMAGE_MALE_DEFAULT,
    imgFemale: IMAGE_FEMALE_DEFAULT,
    gender: "male",

    stats: {
        vita: 250,
        pa: 6,
        pm: 3,
        po: 0,
        invo: 1,
        ini: 1000,
        //elem
        agi: 0,
        intel: 0,
        force: 0,
        eau: 0,
        puissance: 0,
        sagesse: 0,
        //crit
        crit: 0,
        doCrit: 0,
        reCrit: 0,
    }
}