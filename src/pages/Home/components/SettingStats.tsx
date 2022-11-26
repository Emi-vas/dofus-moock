import { useDispatch } from 'react-redux';
import { ICONS } from '../../../data/constants';
import useChara from '../../../hooks/useChara';
import { updateChara } from '../../../redux/actions/chara.action';

interface Props {
    setDisplaySettingsStats: (value: boolean) => void
}

const SettingStats = ({ setDisplaySettingsStats }: Props) => {
    return (
        <div className="home-setting_page">
            <div className="main">
                <i className={ICONS.arrowLeft + " back"} onClick={() => setDisplaySettingsStats(false)}></i>
                
                <Settings />
                
                <div className="btn_bloc">
                    <button className="btn-1"  onClick={() => setDisplaySettingsStats(false)}>Valider</button>
                </div>
            </div>
        </div>
    );
};

export default SettingStats;

const Settings = () => {
    const chara = useChara()
    const dispatch = useDispatch()

    return (
        <div className='home-settingStats'>
            <div>
                <label htmlFor="level">Niveau</label>
                <input 
                    type="number" placeholder='Niveau' 
                    id='level' 
                    min="1"
                    max="200"
                    defaultValue={chara.level}
                    onChange={(e) => {
                        if(e.target.value != ""){
                            let level = parseInt(e.target.value)
                            if(level > 200) {
                                level = 200
                            }
                            if(level < 1) {
                                level = 1
                            }
                            dispatch(updateChara(JSON.stringify({...chara, level: level})))
                        }
                    }}
                />
            </div>

            <div className='elementaireCont'>
                <div className='elementaireBloc' style={{background: "rgb(114, 62, 6)"}}>
                    <i className={ICONS.terre}></i>
                    <label htmlFor="terre-base">Base</label>
                    <input type="number"id='terre-base' />
                    <label htmlFor="terre-parchemin">Parchemin</label>
                    <input type="number"id='terre-parchemin' />
                </div>
                <div className='elementaireBloc' style={{background: "rgb(12, 120, 188)"}}>
                    <i className={ICONS.eau}></i>
                    <label htmlFor="eau-base">Base</label>
                    <input type="number"id='eau-base' />
                    <label htmlFor="eau-parchemin">Parchemin</label>
                    <input type="number"id='eau-parchemin' />
                </div>
                <div className='elementaireBloc' style={{background: "rgb(190, 43, 43)"}}>
                    <i className={ICONS.fire}></i>
                    <label htmlFor="feu-base">Base</label>
                    <input type="number"id='feu-base' />
                    <label htmlFor="feu-parchemin">Parchemin</label>
                    <input type="number"id='feu-parchemin' />
                </div>
                <div className='elementaireBloc' style={{background: "rgb(26, 137, 32)"}}>
                    <i className={ICONS.air}></i>
                    <label htmlFor="air-base">Base</label>
                    <input type="number"id='air-base' />
                    <label htmlFor="air-parchemin">Parchemin</label>
                    <input type="number"id='air-parchemin' />
                </div>
            </div>
        </div>
    )
}