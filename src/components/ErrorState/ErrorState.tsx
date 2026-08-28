import { getErrorMessage } from '../../utils/errorMessages'
import './ErrorState.css'

interface ErrorStateProps {
  error: unknown
  onReload: () => void
}

export function ErrorState({ error, onReload }: ErrorStateProps) {
  const message = getErrorMessage(error)

  return (
    <div className="error-state" role="alert">
      <i className="fa-solid fa-triangle-exclamation" aria-hidden="true" />
      <h2>{message.title}</h2>
      <p>{message.description}</p>
      <button type="button" onClick={onReload}>
        <i className="fa-solid fa-rotate-right" aria-hidden="true" />
        Recarregar
      </button>
    </div>
  )
}
