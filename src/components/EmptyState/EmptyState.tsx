import './EmptyState.css'

interface EmptyStateProps {
  title: string
  description: string
}

export function EmptyState({ title, description }: EmptyStateProps) {
  return (
    <div className="empty-state" role="status">
      <i className="fa-regular fa-compass" aria-hidden="true" />
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  )
}
