import { SmcPeopleViews, RoomsView, EventsView } from "./Views";
import {SMCBaserow, TableIDs} from "./SMCBaserow.js";

const smcBaserowInstance = SMCBaserow();

async function GetFaculty(){
    try {
        let pages = await smcBaserowInstance.getSMCPeopleTable({filters: JSON.stringify(SmcPeopleViews.FACULTY)});
        return extractPages(pages);

    } catch (err) {
        console.log(err.message)
    }
}

async function GetStudents(){
    try {
        let pages = await smcBaserowInstance.getSMCPeopleTable({ filters: JSON.stringify(SmcPeopleViews.ENROLLED_STUDENT) });
        return extractPages(pages);

    } catch (err) {
        console.log(err.message)
    }
}

async function GetBookableRooms(){
    try {
        let pages = await smcBaserowInstance.getRoomsTable({filters: JSON.stringify(RoomsView.BOOKABLE_EDIT_COLLAB_ROOMS)});
        return extractPages(pages);
    } catch (err) {
        console.log(err.message);
    }
}

async function GetPeopleByRole(role){
    let roleFilter = {
        "filter_type": "AND",
        "filters":[
            { "type":"contains", "field":"Role", "value":role }
        ],
        "groups":[]
    }

    try{
        let pages = await smcBaserowInstance.getSMCPeopleTable({filters: JSON.stringify(roleFilter)});
        return extractPages(pages);
    } catch (err){
        console.log(err.message);
    }
}

async function GetUpcomingEvents(){
    try {
        let pages = await smcBaserowInstance.getEventsTable({filters: JSON.stringify(EventsView.UPCOMING)})
        return extractPages(pages);
    } catch (err) {
        console.log(err.message);
    }
}
async function createNewEvent(event){
    return await smcBaserowInstance.createRow(TableIDs.SMCEVENTS, event);
}

function extractPages(pages){
    let allObjects = [];

    pages.forEach((page) => {
        page.forEach(object => {
            allObjects.push(object);
        })
    })
    return allObjects;

}

export default {
    GetFaculty,
    GetPeopleByRole,
    GetStudents,
    GetBookableRooms,
    GetUpcomingEvents
}