import React from 'react';
import { ICONS } from '../../../data/constants';

const StatsBlocRes = () => {
    return (
        <div className='statsBloc'>
            <div className='head'>
                <i className={ICONS.shield + " black"}></i>
            </div>
            <div className='stats'>
                <div className='stats_line'>
                    <p>Res Neutre </p>
                    <i className={ICONS.neutre + " black"}></i>
                    <p>na% <br /> na</p>
                </div>
             
                <div className='separation'></div>
                <div className='stats_line'>
                    <p>Res Terre</p>
                    <i className={ICONS.terre + " brown"}></i>
                    <p>na% <br /> na</p>
                </div>
               
                <div className='separation'></div>

                <div className='stats_line'>
                    <p>Res Feu</p>
                    <i className={ICONS.fire + " red"}></i>
                    <p>na% <br /> na</p>
                </div>

                <div className='separation'></div>

                <div className='stats_line'>
                    <p>Res Eau</p>
                    <i className={ICONS.eau + " blue"}></i>
                    <p>na% <br /> na</p>
                </div>

                <div className='separation'></div>

                <div className='stats_line'>
                    <p>Res Air</p>
                    <i className={ICONS.air + " green"}></i>
                    <p>na% <br /> na</p>
                </div>
                <div className='separation'></div>

                <div className='stats_line'>
                    <p>Res Distance</p>
                    <i className={ICONS.dist + " purple"}></i>
                    <p>na%</p>
                </div>
                <div className='stats_line'>
                    <p>Res Mélée</p>
                    <i className={ICONS.mele + " purple"}></i>
                    <p>na%</p>
                </div>
                <div className='stats_line'>
                    <p>Res crit</p>
                    <i className={ICONS.crit + " red"}></i>
                    <p>na</p>
                </div>
                <div className='stats_line'>
                    <p>Res poussée</p>
                    <i className={ICONS.dopou + " orange"}></i>
                    <p>na</p>
                </div>
            </div>
        </div>
    );
};

export default StatsBlocRes;