import React, { useState } from 'react'

const App = () => {

  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")
  const [tasks, setTasks] = useState([])

  // ADD NOTE
  const submitHandler = (e) => {
    e.preventDefault()

    const copyTask = [...tasks]

    copyTask.push({
      title,
      content
    })

    setTasks(copyTask)

    setTitle("")
    setContent("")
  }

  // DELETE NOTE
  const deleteHandler = (indexToDelete) => {

    const filteredTasks = tasks.filter((task, index) => {
      return index !== indexToDelete
    })

    setTasks(filteredTasks)
  }

  return (

    <div className="min-h-screen bg-gradient-to-br from-zinc-900 to-black text-white flex">

      {/* LEFT SECTION */}
      <div className="w-[35%] p-10 flex h-screen sticky top-0">

        <form
          onSubmit={submitHandler}
          className="w-full bg-zinc-800/70 backdrop-blur-lg p-8 rounded-[35px] border border-zinc-700 shadow-2xl flex flex-col gap-6 h-fit"
        >

          <div>

            <h1 className="text-5xl font-bold">
              Notes
            </h1>

            <p className="text-zinc-400 mt-2">
              Capture your thoughts quickly
            </p>

          </div>

          {/* TITLE INPUT */}
          <input
            type="text"
            placeholder="Note title"
            className="bg-zinc-900 border border-zinc-700 p-4 rounded-2xl outline-none text-lg focus:border-blue-500"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          {/* CONTENT INPUT */}
          <textarea
            rows="6"
            placeholder="Write something..."
            className="bg-zinc-900 border border-zinc-700 p-4 rounded-2xl outline-none resize-none text-lg focus:border-blue-500"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          ></textarea>

          {/* BUTTON */}
          <button
            className="bg-blue-500 hover:bg-blue-600 transition-all py-4 rounded-2xl text-lg font-semibold"
          >
            Create Note
          </button>

        </form>

      </div>


      {/* RIGHT SECTION */}
      <div className="w-[65%] p-10">

        <div className="flex justify-between items-center mb-10">

          <h1 className="text-5xl font-bold">
            Your Notes
          </h1>

        </div>


        {/* NOTES GRID */}
        <div className="grid grid-cols-3 gap-6 h-[80vh] overflow-y-auto pr-4">

          {tasks.map(function (task, index) {

            return (

              <div
                key={index}
                className="bg-blue-200 text-black p-6 rounded-[30px] h-60 flex flex-col justify-between"
              >

                <div>

                  <h2 className="text-2xl font-bold mb-4 break-words">
                    {task.title}
                  </h2>

                  <p className="break-words">
                    {task.content}
                  </p>

                </div>

                {/* DELETE BUTTON */}
                <button
                  onClick={() => deleteHandler(index)}
                  className="mt-6 bg-red-500 hover:bg-red-600 text-white py-2 rounded-xl"
                >
                  Delete
                </button>

              </div>
            )
          })}

        </div>

      </div>

    </div>
  )
}

export default App