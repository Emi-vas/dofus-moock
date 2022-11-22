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
                <h2>Settings</h2>

                <div className="back" onClick={() => setDisplaySettingsChara(false)}>
                    <i className={ICONS.arrowLeft} ></i>
                </div>

                <ClassesList classes={classesList} />
            </div>
        </div>
    );
};

export default SettingChara;