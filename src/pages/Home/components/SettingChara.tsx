import ClassesList from "./ClassesList";
import { ICONS } from "../../../data/constants"

interface Props {
    classesList : any[],
    setDisplaySettingsChara: (val:boolean) => void
}


const SettingChara = ({ classesList, setDisplaySettingsChara }: Props) => {
    return (
        <div className="home-setting_page">
            <div className="main">
                <i className={ICONS.arrowLeft + " back"} onClick={() => setDisplaySettingsChara(false)}></i>
                
                <ClassesList classes={classesList} setDisplaySettingsChara={setDisplaySettingsChara} />
                
                <div className="btn_bloc" onClick={() => setDisplaySettingsChara(false)}>
                    <button className="btn-1">Valider</button>
                </div>
            </div>
        </div>
    );
};

export default SettingChara;