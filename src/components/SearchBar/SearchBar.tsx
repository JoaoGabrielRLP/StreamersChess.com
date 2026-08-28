import { useState, type FormEvent } from 'react'
import './SearchBar.css'

interface SearchBarProps {
  onSearch: (term: string) => void
  initialValue?: string
}

export function SearchBar({ onSearch, initialValue = '' }: SearchBarProps) {
  const [value, setValue] = useState(initialValue)

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    onSearch(value)
  }

  return (
    <form className="search-bar" onSubmit={handleSubmit} role="search">
      <label htmlFor="streamer-search">Pesquisar streamer</label>
      <div className="search-bar__controls">
        <input
          id="streamer-search"
          name="streamer-search"
          type="search"
          value={value}
          maxLength={45}
          onChange={(event) => setValue(event.target.value)}
          placeholder="Digite um username"
        />
        <button type="submit" aria-label="Pesquisar">
          <i className="fa-solid fa-magnifying-glass" aria-hidden="true" />
        </button>
      </div>
    </form>
  )
}
