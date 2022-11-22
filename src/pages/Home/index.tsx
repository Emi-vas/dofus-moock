import { useState } from 'react'
import useFetchapi from '../../hooks/useFetchapi';
import MainStuff from "./components/MainStuff"
import SettingChara from "./components/SettingChara";

const Home = () => {
    const [displaySettingsChara, setDisplaySettingsChara] = useState(false)
    const classesList = useFetchapi("/classes")

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