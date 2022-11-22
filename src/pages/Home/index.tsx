import { useState, useEffect } from 'react'
import useFetchapi from '../../hooks/useFetchapi';
import MainStuff from "./components/MainStuff"
import SettingChara from "./components/SettingChara";

//--redux
import {useSelector} from "react-redux"

const Home = () => {
    const [displaySettingsChara, setDisplaySettingsChara] = useState(false)
    const classesList = useFetchapi("/classes")

    const chara = useSelector<any>(state => state.chara)

    useEffect(() => {
        if(chara == "") {
            setDisplaySettingsChara(true)
        } else {
            setDisplaySettingsChara(false)
        }
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