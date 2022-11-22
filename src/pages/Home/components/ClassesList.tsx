
interface Props {
    classes : any[]
}

const ClassesList = ({ classes }: Props) => {

    console.log(classes)

    return (
        <div className="home-settingChara_container">
            {
                classes[0] && classes.map(classe => (
                    <div key={classe.name} className="home-settingChara">
                        <img src={classe.maleImg} alt={classe.name} />
                    </div>
                ))
            }
        </div>
    );
};

export default ClassesList;