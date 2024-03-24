export const API_KEY = 'AIzaSyC8k-3wgN1Z3HC59dXp0rbUhUTOKxzID3Q';


// value converter
const value_converter =(value) => {
    if(value>= 1000000){
        return Math.floor(value/1000000) + "M";
    }
    else if(value>= 1000){
        return Math.floor(value/1000) +"K";
    }
    else{
        return value;
    }
}

export default value_converter;