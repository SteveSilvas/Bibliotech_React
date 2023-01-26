const Converters = {
   
    StringToDate(value:string):Date{
        const fragmentedValue:string[] = value.split("-");
        const year = parseInt(fragmentedValue[0]);
        const month = parseInt(fragmentedValue[1]);
        const day = parseInt(fragmentedValue[2]);
        
        return new Date(year, month, day);
    }
}



export default Converters; 
