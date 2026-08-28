import type { Platform } from '../../types/streamer'
import './PlatformLinks.css'

interface PlatformLinksProps {
  platforms: Platform[]
  username: string
}

const platformIcons: Record<string, string> = {
  youtube: 'fa-brands fa-youtube',
  twitch: 'fa-brands fa-twitch',
  facebook: 'fa-brands fa-facebook',
}

function getPlatformIcon(type: string): string {
  return platformIcons[type.toLocaleLowerCase()] ?? 'fa-solid fa-link'
}

export function PlatformLinks({ platforms, username }: PlatformLinksProps) {
  return (
    <div className="platform-links" aria-label={`Plataformas de ${username}`}>
      {platforms.map((platform) => (
        <a
          key={`${platform.type}-${platform.channel_url}`}
          className="platform-links__item"
          href={platform.channel_url}
          target="_blank"
          rel="noreferrer"
          aria-label={`${platform.type} de ${username}`}
          title={platform.type}
        >
          <i className={getPlatformIcon(platform.type)} aria-hidden="true" />
          {platform.is_live && (
            <span className="platform-links__live" title="Ao vivo">
              <i className="fa-solid fa-tower-broadcast" aria-hidden="true" />
              <span className="sr-only">Ao vivo</span>
            </span>
          )}
        </a>
      ))}
    </div>
  )
}
