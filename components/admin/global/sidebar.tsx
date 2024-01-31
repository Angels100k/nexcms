import Link from 'next/link'

const Sidebar = ({ globals }: any) => {
    
    return (
        <ul className='bg-gray-300'>
            {globals.map((global: any) => {
                return (
                    <li key={global.name}>
                        <Link className='py-2  rounded-md flex' href={"/admin/globals/" + global.name}>{global.name}</Link>
                    </li>
                )
            })}
        </ul>
    )
}
export default Sidebar