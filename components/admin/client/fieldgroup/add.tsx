"use client"

import {Insert} from "@/components/admin/server/add/group"

const addGroup = (themeID: number) => {
    let sign = prompt("What is the name of the new group?");
    console.log(sign);
    sign = sign ? sign : "";
    Insert(sign, themeID);
    // TODO: make it reload the element only not the whole page
    window.location.reload();
}
const GroupFields = ({themeID}: {themeID: number}) => {
    return (
        <button onClick={e => addGroup(themeID)} >Add new group Item</button>
    )
}

export default GroupFields