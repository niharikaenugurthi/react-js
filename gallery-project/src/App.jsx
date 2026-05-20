import React, { useEffect, useState } from 'react'
import axios from 'axios'

const App = () => {

  const [data, setData] = useState([])
  const [page, setPage] = useState(1)

  const getData = async () => {

    const response = await axios.get(
      `https://picsum.photos/v2/list?page=${page}&limit=30`
    )

    setData(response.data)
  }

  useEffect(() => {
    getData()
  }, [page])

  let printUserData = (
    <h3 className='text-center text-gray-500 text-xl mt-20'>
      Loading...
    </h3>
  )

  if (data.length > 0) {

    printUserData = data.map((item) => {

      return (

        <div key={item.id} className='w-70'>

          <a href={item.url} target='_blank'>

            <img
              className='h-60 w-70 rounded-lg object-cover'
              src={item.download_url}
              alt={item.author}
            />

          </a>

          <h2 className='text-lg font-bold mt-2'>
            {item.author}
          </h2>

        </div>
      )
    })
  }

  return (

    <div className='bg-black h-screen overflow-hidden text-white p-5'>

      <h1 className='text-3xl mb-5 text-center'>
        Gallery
      </h1>

      {/* Gallery Section */}

      <div className='flex flex-wrap gap-4 justify-center items-center overflow-y-auto h-[80vh]'>

        {printUserData}

      </div>

      {/* Buttons */}

      <div className='flex justify-center gap-4 mt-5 align-middle'>

        <button
          className='bg-blue-500 active:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded'
          onClick={() => {

            if (page > 1) {
              setPage(page - 1)
              setData([])
            }

          }}
        >
          Prev
        </button>

        <h1 className='text-xl font-bold'>
          {`Page ${page}`}
        </h1>

        <button
          className='bg-blue-500 active:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded'
          onClick={() => {

            if (page < 34) {
              setPage(page + 1)
              setData([])
            }

          }}
        >
          Next
        </button>

      </div>

    </div>
  )
}

export default App