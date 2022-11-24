import React from 'react';
import { ICONS } from '../../../data/constants';

const StatsBlocResDiv = () => {
    return (
        <div className='statsBloc'>
        <div className='head'>
            <i className={ICONS.shield + " black"}></i>
        </div>
        <div className='stats'>
            <div className='stats_line'>
                <p>Res Distance</p>
                <i className={ICONS.dist + " green"}></i>
                <p>50</p>
            </div>
            <div className='stats_line'>
                <p>Res crit</p>
                <i className={ICONS.crit + " red"}></i>
                <p>50</p>
            </div>
            <div className='stats_line'>
                <p>Res poussée</p>
                <i className={ICONS.dopou + " orange"}></i>
                <p>50</p>
            </div>

        </div>
    </div>
    );
};

export default StatsBlocResDiv;