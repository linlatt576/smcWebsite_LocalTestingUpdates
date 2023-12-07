import axios from "axios";
import utils from "./Utils.js"

/**
 *
 * @param {*} api_token 
 * @returns {*} baserowInstance
 * @description function which returns a baserowInstance object associated with the api_token
 * 
 */
export default function Baserow(api_token){
    /**
     * 
     */
    let baserowInstance = {
        getTable,
        getRow,
        createRow,
        updateRow,
        deleteRow,
        getAllPages: async function(tableID, {search="", size=100, page=1}){
            let data = await getTable(tableID, {search, size, page});
            let next = data.next;
            let pages = [data.results];

            while(next !== null){
                let data = await getNextPage(next);
                pages.push(data.results);
    
                next = data.next;
            }
            return pages;
        }

    }
    return baserowInstance;

    //private helper functions
    /**
     * 
     * @param {number} tableID 
     * @param {*} options
     * @returns {*} json data
     */
    async function getTable(tableID, { search = "", size = 100, page = 1 }) {
        try {
            let response = await axios({
                url: `https://api.baserow.io/api/database/rows/table/${tableID}/?user_field_names=true&search=${search}&size=${size}&page=${page}`,
                method: "get",
                headers: {
                    "Authorization": api_token
                },
            })
            return response.data;
        } catch (error) {
            console.log(error.message);
        }
    }

    /**
     * 
     * @param {number} tableID 
     * @param {number} rowID 
     * @returns json data
     */
    async function getRow(tableID, rowID) {
        try {
            let response = await axios({
                url: `https://api.baserow.io/api/database/rows/table/${tableID}/${rowID}/?user_field_names=true`,
                method: "get",
                headers: {
                    "Authorization": api_token
                }
            })
            return response.data;
        } catch (error) {
            console.log(error.message);
        }

    }
    /**
     * 
     * @param {*} tableID 
     * @param {*} row_fields 
     * @returns json data
     */
    async function createRow(tableID, row_fields) {

        try {
            let response = await axios({
                url: `https://api.baserow.io/api/database/rows/table/${tableID}/?user_field_names=true`,
                method: "post",
                headers: {
                    "Authorization": api_token,
                    "Content-Type": "application/json"
                },
                data: JSON.stringify(row_fields)
            })
            return response.data;
        } catch (error) {
            console.log(error.message);
        }

    }

    /**
     * 
     * @param {*} tableID 
     * @param {*} rowID 
     * @param {*} row_fields 
     * @returns json data
     */
    async function updateRow(tableID, rowID, row_fields) {
        try {
            let response = await axios({
                url: `https://api.baserow.io/api/database/rows/table/${tableID}/${rowID}?user_field_names=true`,
                method: "patch",
                headers: {
                    "Authorization": api_token,
                    "Content-Type": "application/json"
                },
                data: JSON.stringify(row_fields)
            })
            return response.data;
        } catch (error) {
            console.log(error.message);
        }
    }

    /**
     * 
     * @param {*} tableID 
     * @param {*} rowID 
     * @returns json data
     */
    async function deleteRow(tableID, rowID) {
        try {
            let response = await axios({
                url: `https://api.baserow.io/api/database/rows/table/${tableID}/${rowID}?user_field_names=true`,
                method: "delete",
                headers: {
                    "Authorization": api_token,
                    "Content-Type": "application/json"
                },
                data: JSON.stringify(row_fields)
            })
            return response.data;
        } catch (error) {
            console.log(error.message);
        }
    }

    async function getNextPage(url){
        if(!url)
            return;
        
        let options = utils.parseUrl(url);
        return await getTable(options.tableID, options);
    }
}