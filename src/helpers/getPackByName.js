import { packs } from "../data/packs";


export const getPackByName = ( name = '') => {
    
    name = name.toLocaleLowerCase().trim();
    
    if( name.length === 0 ) return [];

    return packs.filter(
        pack => pack.destination.toLocaleLowerCase().includes(name)
    );
}