"use client"

import { useState, useEffect } from 'react'
import GroupFields from '@/components/admin/client/fieldgroup/add'
import { Key } from 'react';

export const FieldData = ({groups, fields, themeID}: {groups: any, fields: any, themeID:number}) => {
    const [groupsList, setGroupsList] = useState(0);
    return (
        <div className="flex w-full">
            <div className="w-1/5 bg-slate-400">
                <p onClick={() => setGroupsList(0)} className="cursor-pointer p-4 hover:bg-slate-500">All fields</p>
                {/* TODO: update styling */}
                {groups.map((item:any) => (
                    <p onClick={() => setGroupsList(item.ID)} className="cursor-pointer hover:bg-slate-500  p-4" key={item.ID}>{item.name}</p>
                ))}
                <GroupFields themeID={themeID} />
            </div>
            <div className="w-4/5 bg-slate-300">
                    {fields.map((item: { groupID: Key | null | undefined; name: string | number | boolean |  null | undefined; }, index: Key | null | undefined) => (
                        <p className={item.groupID != groupsList && groupsList != 0 ? "hidden" : ""} key={index}>{item.name}</p>
                    ))}
            </div>
        </div>
    )
}