import { useDispatch } from "react-redux"
import useChara from "../../../hooks/useChara";
import { updateChara } from "../../../redux/actions/chara.action";
import { ICONS } from "../../../data/constants"
import { useState, useEffect } from "react";


interface Props {
    classes : any[],
    setDisplaySettingsChara: (value: boolean) => void
}

const ClassesList = ({ classes, setDisplaySettingsChara }: Props) => {
    const dispatch = useDispatch()
    const chara = useChara()
    const [gender, setGender] = useState('male')
    const [isClasseChange, setIsClasseChange] = useState(false) //handle change gender on actual classe

    useEffect(() => {
        setGender(chara.gender)
    }, [])

    const setClasse = (classe: any) => {
        setIsClasseChange(true)
        const charaNew = {
            ...chara,
            classe: classe.name,
            imgMale:  classe.maleImg,
            imgFemale: classe.femaleImg,
            gender: gender,
        }
        dispatch(updateChara(JSON.stringify(charaNew)))
        setDisplaySettingsChara(false)
    }

    return (
        <div className="home-settingChara_container">
            <Gender gender={gender} setGender={setGender} isClasseChange={isClasseChange} />
            {
                classes[0] && classes.map(classe => (
                    <div 
                        onClick={() => setClasse(classe)}
                        key={classe.name} 
                        className={classe.name == chara.classe ? "home-settingChara active" : "home-settingChara"  }
                    >
                        <img src={gender == "male" ? classe.maleImg : classe.femaleImg} alt={classe.name} />
                    </div>
                ))
            }
        </div>
    );
};

export default ClassesList;


interface PropsGender {
    gender: string,
    setGender: (value: string) => void,
    isClasseChange: boolean
}

const Gender = ({ gender, setGender, isClasseChange }: PropsGender) => {
    let chara = useChara()
    const dispatch = useDispatch()

    const setClass = (genderIcon: string) => {
        let isActive = ""

        if(genderIcon == gender) {
            isActive = ' active'
        }
        if(genderIcon == 'male') {
            return ICONS.male+ isActive
        }
        if(genderIcon == 'female') {
            return ICONS.female+ isActive
        }
    }

    const handleClick = (gender: string) => {
        setGender(gender)
        if(!isClasseChange) {
            //update gender
            chara.gender = gender
            dispatch(updateChara(JSON.stringify(chara)))
        }
    }

    return (
        <div className="gender">
            <i 
                className={setClass("male")}
                onClick={() => handleClick("male")}
            ></i>
            <i 
                className={setClass('female')}
                onClick={() => handleClick("female")}
            ></i>
        </div>
    )
}