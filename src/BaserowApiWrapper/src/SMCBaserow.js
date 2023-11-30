import Baserow from "../src/Baserow.js";

const API_KEY = "Token TzDtpdxtxo0iUq8HKNB2Eisv433d2Auy"; //would be moved to .env later

const TableIDs = 
{
    SMCPEOPLE: 212079,
    SMCROOMS: 212080,
    SMCEVENTS: 212081,
    SMCGEARS: 212082,
    SMCMANUFACTURERS: 212083,
    SMCCLASSES: 212084
};

/**
 * 
 * @returns SMCBaseRowInstance
 * @description function which returns an object wrapping the baserowInstance object. Represents a specific database in baserow
 */
function SMCBaserow(){

    let SMCBaseRowInstance = Object.create(Baserow(API_KEY));
    SMCBaseRowInstance = Object.assign(SMCBaseRowInstance, {

        /**
         * 
         * @param {*} options 
         * @returns json data
         */
        getSMCPeopleTable: async function(options = {}){
            let data = await this.getAllPages(TableIDs.SMCPEOPLE, options);
            return data;
        },

        /**
         * 
         * @param {*} rowID 
         * @returns json data
         */
        getSMCPerson: async function(rowID){
            return await this.getRow(TableIDs.SMCPEOPLE, rowID);
        },
        
        /**
         * 
         * @param {*} options 
         * @returns json data
         */
        getRoomsTable: async function(options = {}){
            let data = await this.getAllPages(TableIDs.SMCROOMS, options);
            return data;
        },
        
        /**
         * 
         * @param {*} rowID 
         * @returns json data
         */
        getRoom: async function(rowID){
            return await this.getRow(TableIDs.SMCROOMS, rowID);
        },
        
        /**
         * 
         * @param {*} options 
         * @returns json data
         */
        getEventsTable: async function(options = {}){
            let data = await this.getAllPages(TableIDs.SMCEVENTS, options);
            return data;
        },
        
        /**
         * 
         * @param {*} rowID 
         * @returns json data
         */
        getEvent: async function(rowID){
            return await this.getRow(TableIDs.SMCEVENTS, rowID);
        },
        
        /**
         * 
         * @param {*} options 
         * @returns json data
         */
        getGearsTable: async function(options = {}){
            let data = await this.getAllPages(TableIDs.SMCGEARS, options);
            return data;
        },
        
        /**
         * 
         * @param {*} rowID 
         * @returns json data
         */
        getGear: async function(rowID){
            return await this.getRow(TableIDs.SMCGEARS, rowID);
        },
        
        /**
         * 
         * @param {*} options 
         * @returns json data
         */
        getManufacturersTable: async function(options = {}){
            let data = await this.getAllPages(TableIDs.SMCMANUFACTURERS, options);
            return data;
        },
        
        /**
         * 
         * @param {*} rowID 
         * @returns json data
         */
        getManufacturer: async function(rowID){
            return await this.getRow(TableIDs.SMCMANUFACTURERS, rowID);
        },
        
        /**
         * 
         * @param {*} options 
         * @returns jjson data
         */
        getClassesTable: async function(options = {}){
            let data = await this.getAllPages(TableIDs.SMCCLASSES, options);
            return data;
        },
        
        /**
         * 
         * @param {*} rowID 
         * @returns json data
         */
        getClass: async function(rowID){
            return await this.getRow(TableIDs.SMCCLASSES, rowID);
        },
    })  
    return SMCBaseRowInstance;
}
export default SMCBaserow;
