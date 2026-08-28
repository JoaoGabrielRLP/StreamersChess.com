import './LoadingState.css'

interface LoadingStateProps {
  message?: string
}

export function LoadingState({ message = 'Carregando streamers...' }: LoadingStateProps) {
  return (
    <div className="loading-state" role="status" aria-live="polite">
      <i className="fa-solid fa-spinner fa-spin" aria-hidden="true" />
      <span>{message}</span>
    </div>
  )
}
