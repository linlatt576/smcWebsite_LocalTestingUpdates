import { SmcPeopleViews, RoomsView, EventsView } from "./Views.js";
import SMCBaserow from "./SMCBaserow.js";

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

async function GetCourses() {
    try {
        let pages = await smcBaserowInstance.getClassesTable();
        return extractPages(pages);
    } catch (err) {
        console.log(err.message);
    }
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

module.exports = {
    GetFaculty,
    GetPeopleByRole,
    GetStudents,
    GetBookableRooms,
    GetUpcomingEvents,
    GetCourses
}