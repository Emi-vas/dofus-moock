import {useSelector} from "react-redux"

const useChara = () => {
   
    const chara: any = useSelector<any>(state => state.chara)

    if(chara == "") {
        return false
    } else {
        return JSON.parse(chara)
    }
};

export default useChara;