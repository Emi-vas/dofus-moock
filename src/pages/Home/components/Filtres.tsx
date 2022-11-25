import { ICONS } from '../../../data/constants';

type Filter = {
    main: boolean,
    res: boolean,
    entrave: boolean,
    terre: boolean,
    feu: boolean,
    eau: boolean,
    air: boolean
}

interface Props {
    filters: Filter,
    setFilters: (value: any) => void
}

const Filtres = ({ filters, setFilters }: Props) => {
    return (
        <div className='homeFiltres'>
            <div className='cont'>
                <h2>Filtres</h2>
                <div className='bloc'>
                    <div className=' elem blue1'>
                        <label htmlFor="main">
                            <i className={ICONS.clipboard}></i>
                            <p>Générales</p>
                        </label>
                        <input type="checkbox" id='main' 
                            checked={filters.main} 
                            onChange={() => {
                                setFilters({
                                    ...filters,
                                    main: !filters.main
                                })
                            }}
                        />
                    </div>
                    <div className=' elem black'>
                        <label htmlFor="res">
                            <i className={ICONS.shield}></i>
                            <p>Res</p>
                        </label>
                        <input className='checkbox' type="checkbox" id='res' 
                            checked={filters.res} 
                            onChange={() => {
                                setFilters({
                                    ...filters,
                                    res: !filters.res
                                })
                            }}
                        />
                    </div>
                    <div className=' elem orange'>
                        <label htmlFor="entrave">
                            <i className={ICONS.lock}></i>
                            <p>Entrave</p>
                        </label>
                        <input type="checkbox" id='entrave' 
                            checked={filters.entrave} 
                            onChange={() => {
                                setFilters({
                                    ...filters,
                                    entrave: !filters.entrave
                                })
                            }}
                        />
                    </div>
                </div>

                <div className='bloc'>
                    <div className='elem brown'>
                        <label htmlFor="terre">
                            <i className={ICONS.terre}></i>
                            <p>Terre</p>
                        </label>
                        <input type="checkbox" id='terre'
                            checked={filters.terre} 
                            onChange={() => {
                                setFilters({
                                    ...filters,
                                    terre: !filters.terre
                                })
                            }}
                        />
                    </div>
                    <div className='elem red'>
                        <label htmlFor="feu">
                            <i className={ICONS.fire}></i>
                            <p>Feu</p>
                        </label>
                        <input type="checkbox" id='feu' 
                            checked={filters.feu} 
                            onChange={() => {
                                setFilters({
                                    ...filters,
                                    feu: !filters.feu
                                })
                            }}
                        />
                    </div>
                    <div className='elem blue'>
                        <label htmlFor="eau">
                            <i className={ICONS.eau}></i>
                            <p>Eau</p>
                        </label>
                        <input type="checkbox" id='eau' 
                            checked={filters.eau} 
                            onChange={() => {
                                setFilters({
                                    ...filters,
                                    eau: !filters.eau
                                })
                            }}
                        />
                    </div>
                    <div className='elem green'>
                        <label htmlFor="air">
                            <i className={ICONS.air}></i>
                            <p>Air</p>
                        </label>
                        <input type="checkbox" id='air' 
                            checked={filters.air} 
                            onChange={() => {
                                setFilters({
                                    ...filters,
                                    air: !filters.air
                                })
                            }}
                        />
                    </div>
                </div>
            </div>
           
        </div>
    );
};

export default Filtres;