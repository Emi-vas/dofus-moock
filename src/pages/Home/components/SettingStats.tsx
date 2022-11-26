import { useEffect, useState } from 'react';
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
    const [level, setLevel] = useState(chara.level)

    const handleLevel = (levelNew: number) => {
        if(levelNew > 200) {
            setLevel(200)
        } else if(levelNew < 1) {
           setLevel(1)
        } else {
            setLevel(levelNew)
        }
    }
    useEffect(() => {
        if(level != "") {
            dispatch(updateChara(JSON.stringify({...chara, level: level})))
        }
    }, [level])

    return (
        <div className='home-settingStats'>
            <div className='level'>
                <label htmlFor="level">Niveau : </label>
                <input 
                    type="number" placeholder='Niveau' 
                    id='level' 
                    min="1"
                    max="200"
                    value={level}
                    onChange={(e) => {
                        if(e.target.value != ""){
                            handleLevel(parseInt(e.target.value))
                        } else {
                            setLevel("")
                        }
                    }}
                />
            </div>
            <Stats />
        </div>
    )
}




const Stats = () => {
    const dispatch = useDispatch()
    const chara = useChara()
    const [restPoints, setRestPoints] = useState(0)
    const [vita, setVita] = useState(chara.stats.base.vita)

    useEffect(() => {
        //when you change level, check if rest points is negative
        if(restPoints < 0) {
            //reset all stats
            storeVita(0)
            setVita(0)
            setRestPoints((chara.level - 1) * 5)
        } else {
            setRestPoints( 
                (chara.level - 1) * 5 //points level
                - chara.stats.base.vita
            )
        }
    }, [chara.level, restPoints])


    //--- Vita
    const handleVita = (vitaInput: string) => {
        if(vitaInput != "") {
            let vitaInputInt = parseInt(vitaInput)
            //we reset all point of vita
            let realRestPoints = parseInt(restPoints + vita)
            if(vitaInputInt <= realRestPoints) {
                setRestPoints((realRestPoints - vitaInputInt))
                setVita(vitaInputInt)
                storeVita(vitaInputInt)
            } else {
                //over rest points max
                setRestPoints(0)
                setVita(realRestPoints)
                storeVita(realRestPoints)
            }
        } else {
            //empty input
            setRestPoints(vita + restPoints)
            setVita("")
            storeVita(0)
        }
    }
    const storeVita = (vita: number) => {
        //put on store
        let tempChara = chara
        tempChara.stats.base.vita = vita
        dispatch(updateChara(JSON.stringify(tempChara)))
    }

    //--- Terre

    return(
        <div className='elementaireCont'>
            <div className='headerStats'>
                <div className='points'>
                    <p>Points à répartir : <span>{restPoints} </span></p>
                </div>
            </div>
            <div className='elementaireBloc' style={{background: "rgb(73, 73, 73)"}}>
                <i className={ICONS.heart}></i>
                <label htmlFor="vie-base">Base</label>
                <input 
                    type="number"id='vie-base' 
                    placeholder='Vitalité' 
                    min={0}
                    value={vita}
                    onChange={((e) => {
                        handleVita(e.target.value)
                    })}
                />
                <label htmlFor="vie-parchemin">Parchemin</label>
                <input type="number"id='vie-parchemin' />
            </div>
            <div className='elementaireBloc' style={{background: "rgb(114, 62, 6)"}}>
                <i className={ICONS.terre}></i>
                <label htmlFor="terre-base">Base</label>
                <input type="number"id='terre-base' placeholder='Force' />
                <label htmlFor="terre-parchemin">Parchemin</label>
                <input type="number"id='terre-parchemin' />
            </div>
            <div className='elementaireBloc' style={{background: "rgb(12, 120, 188)"}}>
                <i className={ICONS.eau}></i>
                <label htmlFor="eau-base">Base</label>
                <input type="number"id='eau-base' placeholder='Chance' />
                <label htmlFor="eau-parchemin">Parchemin</label>
                <input type="number"id='eau-parchemin' />
            </div>
            <div className='elementaireBloc' style={{background: "rgb(190, 43, 43)"}}>
                <i className={ICONS.fire}></i>
                <label htmlFor="feu-base">Base</label>
                <input type="number"id='feu-base' placeholder='Intelligence' />
                <label htmlFor="feu-parchemin">Parchemin</label>
                <input type="number"id='feu-parchemin' />
            </div>
            <div className='elementaireBloc' style={{background: "rgb(26, 137, 32)"}}>
                <i className={ICONS.air}></i>
                <label htmlFor="air-base">Base</label>
                <input type="number"id='air-base' placeholder='Agilité'/>
                <label htmlFor="air-parchemin">Parchemin</label>
                <input type="number"id='air-parchemin' />
            </div>
        </div>
    )
}