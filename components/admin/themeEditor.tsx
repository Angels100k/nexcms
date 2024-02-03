"use client"
import { useState, useEffect } from 'react'

import { Update } from '@/components/admin/server/updatetheme'

interface Theme {
     ID: number; themeName: string; active: number;
}
const themeEditor = ({ theme }: { theme: Theme[] }) => {
    const [themes, setThemes] = useState<Theme[]>([]);

    const UpdateTheme = async (ID: number) => {
        await Update(ID)
        // TODO: dont make it a window reload but use the use effects to get the new active theme from the database
        window.location.reload()
    }

    useEffect(() => {
      setThemes(theme);
    }, [theme]); 
    return (
        <section className='flex flex-wrap'>
            <div className='w-full'>
                <h1>Theme</h1>
                <p>Upload your theme</p>
                <button className="upload" >Upload</button>
            </div>
            {themes.map((item) => (
                <div key={item.ID.toString()} className="p-8 w-1/4"> 
                    <button onClick={() => {UpdateTheme(item.ID)}} key={item.ID} className={"p-8 text-center block rounded-md " + (item.active ? "bg-green-200" : "bg-red-200")}>{item.themeName}</button>
                </div>
            ))}
        </section>
    )
}

export default themeEditor