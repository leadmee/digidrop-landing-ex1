import { FileArchive, FileText, Image, KeyRound, Music } from 'lucide-react'
import { useEffect, useState } from 'react'

const files = [
  { cls: 'file-1', name: 'Курс.zip', tag: '2,4 ГБ', icon: FileArchive },
  { cls: 'file-2', name: 'licence.key', tag: 'Лицензия', icon: KeyRound },
  { cls: 'file-3', name: 'Гайд.pdf', tag: 'Водяной знак', icon: FileText },
  { cls: 'file-4', name: 'Сэмплы.wav', tag: 'Аудио', icon: Music },
  { cls: 'file-5', name: 'Пресеты.dng', tag: '12 шт.', icon: Image },
]

export default function FolderDrop() {
  const [open, setOpen] = useState(false)
  const [staticMode, setStaticMode] = useState(false)

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    // Hidden tabs and reduced motion freeze CSS transitions — snap the folder
    // open (no transition) so it never looks closed/empty in the preview.
    if (reduce || document.visibilityState === 'hidden') {
      setStaticMode(true)
      setOpen(true)
      return
    }
    const t = setTimeout(() => setOpen(true), 900)
    return () => clearTimeout(t)
  }, [])

  const toggle = () => setOpen((v) => !v)

  return (
    <div
      className={`folder-card ${open ? 'is-open' : ''} ${staticMode ? 'is-static' : ''}`}
      role="button"
      tabIndex={0}
      aria-expanded={open}
      aria-label={open ? 'Свернуть папку с файлами' : 'Открыть папку с файлами'}
      onClick={toggle}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault()
          toggle()
        }
      }}
    >
      <div className="hint-wrapper" aria-hidden="true">
        <svg
          viewBox="0 0 40 40"
          width="34"
          height="34"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-fog"
        >
          <path d="M32 6C32 20 24 30 10 33" />
          <path d="M17 30l-7 3 3-7" />
        </svg>
        <span className="hint-text">нажмите</span>
      </div>

      <div className="folder-container">
        <svg className="folder-back" viewBox="0 0 170 130" aria-hidden="true">
          <defs>
            <linearGradient id="folder-back-g" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="#42424b" />
              <stop offset="1" stopColor="#26262c" />
            </linearGradient>
          </defs>
          <path
            d="M2 26a10 10 0 0 1 10-10h44l8 10h94a10 10 0 0 1 10 10v82a10 10 0 0 1-10 10H12a10 10 0 0 1-10-10Z"
            fill="url(#folder-back-g)"
          />
        </svg>

        {files.map(({ cls, name, tag, icon: Icon }) => (
          <div key={cls} className={`file ${cls}`}>
            <span className="shine" />
            <Icon className="file-icon" aria-hidden="true" />
            <span className="file-text">{name}</span>
            <span className="file-tag">{tag}</span>
          </div>
        ))}

        <svg className="folder-front-wrapper" viewBox="0 0 170 84" aria-hidden="true">
          <defs>
            <linearGradient id="folder-front-g" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="#5a5a64" />
              <stop offset="1" stopColor="#34343b" />
            </linearGradient>
          </defs>
          <path
            d="M2 12a10 10 0 0 1 10-10h146a10 10 0 0 1 10 10v60a10 10 0 0 1-10 10H12a10 10 0 0 1-10-10Z"
            fill="url(#folder-front-g)"
          />
          <rect x="12" y="12" width="30" height="4" rx="2" fill="rgba(255,255,255,0.32)" />
        </svg>

        <div className="counter">
          <span className="status-dot" />
          <span className="counter-label">доставлено</span>
          <span className="counter-number">5</span>
        </div>
      </div>
    </div>
  )
}
