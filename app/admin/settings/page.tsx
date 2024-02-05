const Settings = () => {
    const json = [
        {
            name: 'General',
            url: '/admin/settings/general'
        }, {
            name: 'Theme',
            url: '/admin/settings/theme'
        }, {
            name: 'Users',
            url: '/admin/settings/users'
        }, {
            name: 'Pages',
            url: '/admin/settings/pages'
        }, {
            name: 'Globals',
            url: '/admin/settings/globals'
        },
        {
            name: 'Fields',
            url: '/admin/settings/fields'
        },
        {
            name: 'Components',
            url: '/admin/settings/components'
        },
    ]
    return (
        <section className="">
            <h1>Settings</h1>
            <div className="flex flex-wrap">
                {json.map((item) => (
                    <div key={item.url} className="p-8 w-1/4">
                        <a className="bg-gray-200 p-8 text-center block" href={item.url}>{item.name}</a>                            
                    </div>
                ))}
            </div>
            
        </section>
    )
}
export default Settings