import Link from 'next/link'
import AdminComponents from '@/components/admin/server/admincomponents'

const Sections = () => {
    return (
        <div>
            <div className='flex flex-wrap flex-row mt-3'>
                <div className='w-full flex justify-between p-3'>
                    <h1>Componenets</h1>
                    <Link href="/admin/settings/components/new" className='px-4 py-2 bg-slate-900 text-white mr-5 mb-3 rounded-md'>new Component</Link>
                </div>
                <div className='w-full p-3'>
                    <AdminComponents />
                </div>
            </div>
        </div>
    )
}

export default Sections