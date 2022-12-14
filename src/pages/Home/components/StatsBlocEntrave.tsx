import React from 'react';
import { ICONS } from '../../../data/constants';

const StatsBlocEntrave = () => {
    return (
        <div className='statsBloc'>
            <div className='head'>
                <i className={ICONS.lock + " orange"}></i>
            </div>
            <div className='stats'>

                <div className='stats_line'>
                    <p>Retrait PA</p>
                    <i className={ICONS.star + " yellow"}></i>
                    <p>na</p>
                </div>
                <div className='stats_line'>
                    <p>Esquive PA</p>
                    <i className={ICONS.star + " yellow"}></i>
                    <p>na</p>
                </div>
                <div className='separation'></div>

                <div className='stats_line'>
                    <p>Retrait PM</p>
                    <i className={ICONS.pm + " green"}></i>
                    <p>na</p>
                </div>
                <div className='stats_line'>
                    <p>Esquive PM</p>
                    <i className={ICONS.pm + " green"}></i>
                    <p>na</p>
                </div>
            
                <div className='separation'></div>

                <div className='stats_line'>
                    <p>Fuite</p>
                    <i className={ICONS.fuite + " orange"}></i>
                    <p>na</p>
                </div>
                <div className='stats_line'>
                    <p>Tacle</p>
                    <i className={ICONS.tacle + " orange"}></i>
                    <p>na</p>
                </div>

            </div>
        </div>
    );
};

export default StatsBlocEntrave;