import {useSelector, useDispatch} from "react-redux"
import { json } from "stream/consumers";
import useChara from "../../../hooks/useChara";
import { updateChara } from "../../../redux/actions/chara.action";


interface Props {
    classes : any[]
}

const ClassesList = ({ classes }: Props) => {
    const dispatch = useDispatch()
    const chara = useChara()

    const setClasse = (classe: any) => {
        const chara = {
            classe: classe.name,
            img: classe.maleImg
        }
        dispatch(updateChara(JSON.stringify(chara)))
    }

    return (
        <div className="home-settingChara_container">
            {
                classes[0] && classes.map(classe => (
                    <div 
                        onClick={() => setClasse(classe)}
                        key={classe.name} 
                        className={classe.name == chara.classe ? "home-settingChara active" : "home-settingChara"  }
                    >
                        <img src={classe.maleImg} alt={classe.name} />
                    </div>
                ))
            }
        </div>
    );
};

export default ClassesList;