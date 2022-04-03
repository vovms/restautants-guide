
const initState = {
    ListOfAlerts : [
        {
            TerritoryName : 'Ternopil',
            StartDate : Date.now()
        },
        {
            TerritoryName : 'Lviv',
            StartDate : Date.now()
        },
        {
            TerritoryName : 'Rivne',
            StartDate : Date.now()
        },
        {
            TerritoryName : 'Kyiv',
            StartDate : Date.now()
        }
    ]
};

const alarmReducer = (state = initState , action) =>{
    return state;
}

export default alarmReducer;
