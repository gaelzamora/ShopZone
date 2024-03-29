import Logo from '../assets/logo.png'

import { Link } from "react-router-dom"

function CategoryPage() {
  return (
    <div className="flex justify-center">
        <div className="p-8 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-16">
            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <Link to='/'>
                    <img src={Logo} alt="" className='rounded-t-lg'/>
                </Link>
                <div className='p-5'>
                    <Link to='/'>
                        <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
                            
                        </h5>
                    </Link>
                </div>
            </div>
            <div className='max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'>
                <Link to=''>
                    <img src={Logo} alt="" className='rounded-t-lg' />
                </Link> 
                <div className='p-5'>
                    <Link to=''>
                        <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
                            
                        </h5>
                    </Link>
                </div>
            </div>
            <div className='max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'>
                <Link to=''>
                    <img src={Logo} alt="" className='rounded-t-lg'/>
                </Link>
                <div className='p-5'>
                    <Link to=''>
                        <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>

                        </h5>
                    </Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CategoryPage
