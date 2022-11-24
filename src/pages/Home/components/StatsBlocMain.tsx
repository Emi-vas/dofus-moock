import { ICONS } from '../../../data/constants';

const StatsBlocMain = () => {
    return (
        <div className='statsBloc'>
            <div className='head'>
                <i className={ICONS.clipboard}></i>
            </div>
            <div className='stats'>
                <div className='stats_line'>
                    <p>Vitalité</p>
                    <i className={ICONS.heart + " red"}></i>
                    <p>150</p>
                </div>
                <div className='stats_line'>
                    <p>PA</p>
                    <i className={ICONS.star + " yellow"}></i>
                    <p>6</p>
                </div>
                <div className='stats_line'>
                    <p>PM</p>
                    <i className={ICONS.pm + " green"}></i>
                    <p>3</p>
                </div>
                <div className='stats_line'>
                    <p>PO</p>
                    <i className={ICONS.po + " green"}></i>
                    <p>1</p>
                </div>
                <div className='stats_line'>
                    <p>Invo</p>
                    <i className={ICONS.invo + " orange"}></i>
                    <p>1</p>
                </div>

                <div className='separation'></div>

                <div className='stats_line'>
                    <p>Crit</p>
                    <i className={ICONS.crit + " red"}></i>
                    <p>10%</p>
                </div>
                <div className='stats_line'>
                    <p>Ini</p>
                    <i className={ICONS.ini + " purple"}></i>
                    <p>1200</p>
                </div>
                <div className='stats_line'>
                    <p>PP</p>
                    <i className={ICONS.search + " blue"}></i>
                    <p>200</p>
                </div>
                <div className='stats_line'>
                    <p>Sagesse</p>
                    <i className={ICONS.sagesse + " purple"}></i>
                    <p>300</p>
                </div>
                <div className='stats_line'>
                    <p>Soins</p>
                    <i className={ICONS.soins + " red"}></i>
                    <p>300</p>
                </div>
            </div>
        </div>
    );
};

export default StatsBlocMain;