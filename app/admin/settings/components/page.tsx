import Link from 'next/link'

const Sections = () => {
    return (
        <div>
            <div className='flex justify-between mt-3'>
                <h1>Componenets</h1>
                <Link href="/admin/settings/components/new" className='px-4 py-2 bg-slate-900 text-white mr-5 mb-3 rounded-md'>new Component</Link>
            </div>
        </div>
    )
}

export default Sections