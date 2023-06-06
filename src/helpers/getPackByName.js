import { packs } from "../data/packs";


export const getPackByName = ( name = '') => {
    
    name = name.toLocaleLowerCase().trim();
    
    if( name.length === 0 ) return [];

    const test = packs.find(
        pack => pack.destination.toLocaleLowerCase().includes(name)
    );

    return test ? test.id : null;
}