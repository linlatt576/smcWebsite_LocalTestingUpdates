/*
    Views.js holds predefined filters for the SMCBaserow object. Filters were created using the filters builder on baserow.
    Future developers should use that to make or modify the views to limit possible errors. Baserow is your best friend.
    Future views should be in all caps and seperated by underscores to keep the syntax similar. The name of the constant should 
    specify what exactly the filter is showing.
*/

/*
    If you are ever unsure what these filters are doing, use postman to test them out and get back a json object. 
    This is especially useful to verify the filters are filtering the correct rows.
*/

const SmcPeopleViews = {
    FACULTY: {"filter_type":"AND","filters":[{"type":"multiple_select_has","field":"Role","value":"1100707"}],"groups":[]},
    ENROLLED_STUDENT: {"filter_type":"OR","filters":[{"type":"multiple_select_has","field":"Role","value":"1100708"},
                    {"type":"multiple_select_has","field":"Role","value":"1100712"},
                    {"type":"multiple_select_has","field":"Role","value":"1100713"}],
                    "groups":[]},
    SMC_STUDENT_WORKERS: {"filter_type":"OR","filters":[{"type":"multiple_select_has","field":"Role","value":"1100712"}],"groups":[]},
    RFC_STUDENT_WORKERS: {"filter_type":"OR","filters":[{"type":"multiple_select_has","field":"Role","value":"1100713"}],"groups":[]},
    
    GEAR_ACCESS_1: {"filter_type":"OR","filters":[{"type":"single_select_equal","field":"Gear Access","value":"1100737"}],"groups":[]},
    GEAR_ACCESS_2: {"filter_type":"OR","filters":[{"type":"single_select_equal","field":"Gear Access","value":"1100738"}],"groups":[]},
    GEAR_ACCESS_3: {"filter_type":"OR","filters":[{"type":"single_select_equal","field":"Gear Access","value":"1100739"}],"groups":[]},
    GEAR_ACCESS_4: {"filter_type":"OR","filters":[{"type":"single_select_equal","field":"Gear Access","value":"1100740"}],"groups":[]},

    GUITAR_SIGNOUTS: {"filter_type":"OR","filters":[
                        {"type":"single_select_equal","field":"Gear Access","value":"1100740"},
                        {"type":"single_select_equal","field":"Gear Access","value":"1100738"},
                        {"type":"single_select_equal","field":"Gear Access","value":"1100737"}
                    ],
                    "groups":[]},
    
    FULL_SMC_ACCESS: {"filter_type":"AND","filters":[{"type":"single_select_equal","field":"Gear Access","value":"1100738"},{"type":"single_select_equal","field":"Room Access","value":"1100743"}],"groups":[]},
    EDIT_REHERSAL_ACCESS: {"filter_type":"OR","filters":[],"groups":[{"filter_type":"AND","filters":[{"type":"single_select_equal","field":"Gear Access","value":"1100737"},{"type":"single_select_equal","field":"Room Access","value":"1100742"}],"groups":[]},{"filter_type":"AND","filters":[{"type":"single_select_equal","field":"Gear Access","value":"1100738"},{"type":"single_select_equal","field":"Room Access","value":"1100743"}],"groups":[]}]},
    EDIT_SUITE_COLLAB_ACCESS: {"filter_type":"AND","filters":[{"type":"single_select_equal","field":"Gear Access","value":"1100740"},{"type":"single_select_equal","field":"Room Access","value":"1100741"}],"groups":[]},

}

const RoomsView = {
    BOOKABLE_EDIT_COLLAB_ROOMS: {"filter_type":"AND","filters":[{"type":"boolean","field":"Bookable","value":"1"},{"type":"multiple_select_has_not","field":"Purpose","value":"1100751"}],"groups":[{"filter_type":"OR","filters":[{"type":"multiple_select_has","field":"Purpose","value":"1100754"},{"type":"multiple_select_has","field":"Purpose","value":"1100752"},{"type":"multiple_select_has","field":"Purpose","value":"1100753"},{"type":"multiple_select_has","field":"Purpose","value":"1100755"}],"groups":[]}]},
    BOOKABLE_REHERSAL_ROOMS: {"filter_type":"AND","filters":[{"type":"boolean","field":"Bookable","value":"1"},{"type":"multiple_select_has","field":"Purpose","value":"1100753"}],"groups":[]},
    BOOKABLE_STUDIO_ROOMS: {"filter_type":"AND","filters":[{"type":"boolean","field":"Bookable","value":"1"},{"type":"multiple_select_has","field":"Purpose","value":"1100751"}],"groups":[]},
}

const EventsView = {
    UPCOMING: {"filter_type":"OR","filters":[{"type":"date_equals_today","field":"Start Time","value":"America/Indianapolis?"},{"type":"date_after_today","field":"Start Time","value":"America/Indianapolis?"}],"groups":[]}
}

export {
    SmcPeopleViews,
    RoomsView,
    EventsView
}