import { useQuery } from "@tanstack/react-query"
import { Loader } from "../components/Loader"
import { get_product } from "../api/products"
import { useParams } from "react-router-dom"
import toast from "react-hot-toast"

function SoloProduct() {
  const {slug} = useParams()

  const {data, isError, isLoading} = useQuery({
    queryKey: ['products', slug],
    queryFn: () => get_product(slug || ''),
  })

  if(isError) return toast.error("Error!")
  if(isLoading) return <Loader />

  return (
    <div className="bg-white dark:bg-gray-900">
      <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-1">
        <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                {data.name}
                <span className="text-green-300 ml-4">
                  ${data.price}
                </span>
            </h2>
            <p className="mg-4 font-bold">{data.description}</p>
            <a href="" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white">
                Add To Cart
                <svg 
                    aria-hidden="true"
                    className="w-4 p-4 ml-2 -mr-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path 
                        fillRule="evenodd"
                        d="M10.203 3.293a1 1 0 011.414 0l6 6al 1 0 010 1.4141-6 6al 1 0 01-1.414-1.414L1"
                        clipRule="evenodd"
                    >
                    </path>
                </svg>
            </a>
        </div>
        <img className="rounded-t-lg" src={`${import.meta.env.VITE_BACKEND_URL}${data.image}`}  alt="" />
      </div>
    </div>
  )
}

export default SoloProduct
