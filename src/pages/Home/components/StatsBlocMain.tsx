import { useState, useEffect } from 'react'
import { ICONS } from '../../../data/constants';
import useChara from '../../../hooks/useChara';

const StatsBlocMain = () => {
    const chara = useChara()
    const [vita, setVita] = useState(55)

    useEffect(() => {
        setVita(
            55 +
            ((chara.level - 1) * 5) +
            (chara.stats.base.vita)
        )
    }, [chara])

    return (
        <div className='statsBloc'>
            <div className='head'>
                <i className={ICONS.clipboard}></i>
            </div>
            <div className='stats'>
                <div className='stats_line'>
                    <p>Vitalité</p>
                    <i className={ICONS.heart + " red"}></i>
                    <p>{vita}</p>
                </div>
                <div className='stats_line'>
                    <p>PA</p>
                    <i className={ICONS.star + " yellow"}></i>
                    <p>na</p>
                </div>
                <div className='stats_line'>
                    <p>PM</p>
                    <i className={ICONS.pm + " green"}></i>
                    <p>na</p>
                </div>
                <div className='stats_line'>
                    <p>PO</p>
                    <i className={ICONS.po + " green"}></i>
                    <p>na</p>
                </div>
                <div className='stats_line'>
                    <p>Invo</p>
                    <i className={ICONS.invo + " orange"}></i>
                    <p>na</p>
                </div>

                <div className='separation'></div>

                <div className='stats_line'>
                    <p>Crit</p>
                    <i className={ICONS.crit + " red"}></i>
                    <p>na%</p>
                </div>
                <div className='stats_line'>
                    <p>Ini</p>
                    <i className={ICONS.ini + " purple"}></i>
                    <p>na</p>
                </div>
                <div className='stats_line'>
                    <p>PP</p>
                    <i className={ICONS.search + " blue"}></i>
                    <p>na</p>
                </div>
                <div className='stats_line'>
                    <p>Sagesse</p>
                    <i className={ICONS.sagesse + " purple"}></i>
                    <p>na</p>
                </div>
                <div className='stats_line'>
                    <p>Soins</p>
                    <i className={ICONS.soins + " red"}></i>
                    <p>na</p>
                </div>
            </div>
        </div>
    );
};

export default StatsBlocMain;