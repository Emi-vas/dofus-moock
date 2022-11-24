import { ICONS } from '../../../data/constants';
import StatsBlocElem from './StatsBlocElem';
import StatsBlocEntrave from './StatsBlocEntrave';
import StatsBlocMain from './StatsBlocMain';
import StatsBlocRes from './StatsBlocRes';
import StatsBlocResDiv from './StatsBlocResDiv';

const StatsBlocs = () => {
    return (
        <div className='statsBloc-page'>
            <div className='statsBloc-cont '>
                <StatsBlocMain />

                <StatsBlocElem elem={terre}/>
                <StatsBlocElem elem={intel}/>
                <StatsBlocElem elem={chance}/>
                <StatsBlocElem elem={agi}/>

                <StatsBlocRes />
                <StatsBlocEntrave />
            </div>
        </div>
    );
};

const terre = {
    name: "terre",
    iconMain: ICONS.terre,
    color1: "rgba(104, 51, 6, 0.95)",
    color2: "rgba(172, 91, 20, 0.95)",
    stats: ["Force", "Terre"]
}
const intel = {
    name: "intel",
    iconMain: ICONS.fire,
    color1: "rgba(190, 11, 11, 0.95)",
    color2: "rgba(245, 62, 62, 0.95)",
    stats: ["Intel", "Feu"]
}
const chance = {
    name: "chance",
    iconMain: ICONS.eau,
    color1: "rgba(11, 80, 158, 0.95)",
    color2: "rgba(49, 126, 213, 0.95)",
    stats: ["Chance", "Eau"]
}
const agi = {
    name: "agilité",
    iconMain: ICONS.air,
    color1: "rgba(26, 133, 9, 0.95)",
    color2: "rgba(60, 176, 42, 0.95)",
    stats: ["Agilité", "Air"]
}

export default StatsBlocs;