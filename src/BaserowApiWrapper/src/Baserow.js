import axios from "axios";

const API_ENDPOINT = "https://api.baserow.io/api/database/rows/table/";
/**
 *
 * @param {*} api_token 
 * @returns {*} baserowInstance
 * @description function which returns a baserowInstance object associated with the api_token
 * 
 */
module.exports = function Baserow(api_token){
    /**
     * 
     */
    let baserowInstance = {
        getTable,
        getRow,
        createRow,
        updateRow,
        deleteRow,
        getAllPages: async function(tableID, {search=null, size=100, page=1, filters=null}){
            let data = await getTable(tableID, {search, size, page, filters});
            let next = data.next;
            let pages = [data.results];

            while(next !== null){
                console.log(next);
                let newData = await getNextPage(next);
                pages.push(newData.results);
    
                next = newData.next;
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
    async function getTable(tableID, { search = null, size = 100, page = 1, filters = null },) {
        try {
            let response = await axios({
                url: `${API_ENDPOINT}${tableID}/`,
                method: "get",
                params:{
                    'user_field_names': true,
                    'search': search,
                    'size': size,
                    'page': page,
                    'filters': filters
                },
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
                url: `${API_ENDPOINT}${tableID}/${rowID}/`,
                method: "get",
                params:{
                    'user_field_names': true
                },
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
                url: `${API_ENDPOINT}${tableID}/`,
                method: "post",
                params: {
                    'user_field_names': true
                },
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
                url: `${API_ENDPOINT}${tableID}/${rowID}/`,
                method: "patch",
                params:{
                    'user_field_names': true
                },
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
                url: `${API_ENDPOINT}${tableID}/${rowID}/`,
                method: "delete",
                params:{
                    'user_field_names': true,
                },
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
        
        try {
            let response = await axios({
                url: url,
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
}