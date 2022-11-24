import React from 'react';
import { ICONS } from '../../../data/constants';

type Elem = {
    name: string,
    iconMain: string,
    color1: string,
    color2: string,
    stats: string[]
}

interface Props {
    elem: Elem,
}

const StatsBlocElem = ({ elem }: Props) => {
    return (
<div className='statsBloc'>
            <div className='head'>
                <i className={elem.iconMain} style={{color: elem.color1}}></i>
            </div>
            <div className='stats'>
                <TerreElem elem={elem} />
                <div className='stats_line'>
                    <p>Do Distance</p>
                    <i className={ICONS.dist + " purple"}></i>
                    <p>150</p>
                </div>
                <div className='stats_line'>
                    <p>Do Mélée</p>
                    <i className={ICONS.mele + " purple"}></i>
                    <p>150</p>
                </div>
                <div className='stats_line'>
                    <p>Do Crit</p>
                    <i className={ICONS.crit + " red"}></i>
                    <p>150</p>
                </div>
                <div className='stats_line'>
                    <p>Do Pou</p>
                    <i className={ICONS.dopou + " orange"}></i>
                    <p>150</p>
                </div>
                <div className='stats_line'>
                    <p>Do Neutre</p>
                    <i className={ICONS.neutre + " black"}></i>
                    <p>30</p>
                </div>
            </div>
        </div>
    );
};

export default StatsBlocElem;

interface PropsSpe {
    elem: Elem
}

const TerreElem = ({ elem }: PropsSpe) => {
    
    return (
        <>
        <div className='stats_elem'>
            <div>
                <div className=' stat' style={{ color: elem.color1 }}>
                {elem.stats[0]} : <br />
                    <span style={{ color: elem.color1 }}>1100</span>
                </div>
                <div className=' stat'>
                    Puissance : <br />
                    <span>300</span>
                </div>
            </div>
            <div className='res' style={{background: elem.color1}}>
                <p>1400</p>
            </div>
        </div>
        <div className='separation'></div>
        <div className='stats_elem'>
            <div>
                <div className=' stat' style={{ color: elem.color1 }}>
                    Do {elem.stats[1]} : <br />
                    <span style={{ color: elem.color1 }}>200</span>
                </div>
                <div className=' stat'>
                    Do Fixes : <br />
                    <span>50</span>
                </div>
            </div>
            <div className='res resDo' style={{background: elem.color2}}>
                <p>250</p>
            </div>
        </div>
        <div className='separation'></div>
        </>
    )
}