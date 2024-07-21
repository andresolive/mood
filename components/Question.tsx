'use client'

import { useState } from 'react'

const Question = () => {
  const [value, setValue] = useState('')
  const onChange = (e) => {
    e.preventDefault()
  }

  return (
    <div>
      <form>
        <input
          onChange={onChange}
          value={value}
          type="text"
          placeholder=""
          className="rounded-lg border border-black/20 px-4 py-6 text-lg"
        />
        <button
          type="submit"
          className="rounded-lg bg-blue-400 px-4 py-2 text-lg"
        >
          Ask
        </button>
      </form>
    </div>
  )
}
