import React from 'react'

const Home = () => {
  const [value, setValue] = React.useState<string | number>(0)

  const name: string = "Gilmi"
  const char: string = name.charAt(0)

  const handleClick = () => {
    if (char === 'G') {
      setValue("Right")
    }
  }

  function add(a: number, b: number): number {
    return a + b
  }

  return (
    <div className="flex flex-col items-center text-center text-black min-h-screen mt-10">
      <p className="text-2xl font-bold">${add(5, 3)}</p>

      <p className="text-xl">Hello, {char}!</p>

      <button onClick={handleClick} className="bg-blue-500 text-white px-4 py-2 rounded mt-4">
        Check
      </button>

      <p className="text-lg mt-4">
        My name is {value} and I am 25 years old.
      </p>
    </div>
  )
}

export default Home