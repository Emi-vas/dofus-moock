import { useEffect, useState } from 'react'
import useFetchapi from '../../hooks/useFetchapi';
import MainStuff from "./components/MainStuff"
import SettingChara from "./components/SettingChara";

import { useDispatch} from "react-redux"
import { updateChara } from '../../redux/actions/chara.action';
import useChara from '../../hooks/useChara';
import { IMAGE_MALE_DEFAULT, IMAGE_FEMALE_DEFAULT } from '../../data/constants';


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
            <h1>Home</h1>
            <MainStuff 
                setDisplaySettingsChara={setDisplaySettingsChara} 
            />
            
            { displaySettingsChara && 
                <SettingChara 
                    classesList={classesList}
                    setDisplaySettingsChara={setDisplaySettingsChara} 
                /> 
            }
        </div>
    );
};

export default Home;

//default cara
const newChara = {
    classe : "Iop",
    imgMale: IMAGE_MALE_DEFAULT,
    imgFemale: IMAGE_FEMALE_DEFAULT,
    gender: "male"
}