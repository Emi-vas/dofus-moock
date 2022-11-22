import { useEffect, useState } from 'react'
import useFetchapi from '../../hooks/useFetchapi';
import MainStuff from "./components/MainStuff"
import SettingChara from "./components/SettingChara";

import { useDispatch} from "react-redux"
import { updateChara } from '../../redux/actions/chara.action';
import useChara from '../../hooks/useChara';


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

const newChara = {
    classe : "Iop",
    img: "https://s.ankama.com/www/static.ankama.com/dofus/renderer/look/7b317c38302c323132347c313d31363736353536342c323d31363335353838332c333d31363737373138352c343d323931303036342c353d31343536313739397c3134307d/full/1/250_250-10_100.png"
}