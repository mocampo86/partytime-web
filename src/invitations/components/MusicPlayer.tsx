import { useRef, useState } from 'react';
import type { InvitationMusic } from '../../types/invitation';

type MusicPlayerProps = {
  music?: InvitationMusic;
};

export function MusicPlayer({ music }: MusicPlayerProps) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  if (!music) {
    return null;
  }

  const hasSource = Boolean(music.src);

  const togglePlayback = async () => {
    const audio = audioRef.current;

    if (!audio || !music.src) {
      return;
    }

    if (isPlaying) {
      audio.pause();
      return;
    }

    try {
      await audio.play();
    } catch {
      setIsPlaying(false);
    }
  };

  const toggleMuted = () => {
    const audio = audioRef.current;

    if (!audio) {
      return;
    }

    audio.muted = !audio.muted;
    setIsMuted(audio.muted);
  };

  return (
    <section className="invitation-card invitation-music" aria-labelledby="invitation-music-title">
      <div>
        <p className="invitation-eyebrow">Música</p>
        <h2 id="invitation-music-title">{music.title ?? 'Canción especial'}</h2>
        {music.artist ? <p>{music.artist}</p> : null}
      </div>
      <div className="invitation-music__controls" role="group" aria-label="Controles de música">
        {hasSource ? (
          <audio
            ref={audioRef}
            src={music.src}
            loop
            preload="none"
            onPause={() => setIsPlaying(false)}
            onPlay={() => setIsPlaying(true)}
          />
        ) : null}
        <button
          className="invitation-button"
          type="button"
          disabled={!hasSource}
          onClick={togglePlayback}
        >
          {isPlaying ? 'Pausar' : 'Reproducir'}
        </button>
        <button
          className="invitation-button invitation-button--ghost"
          type="button"
          disabled={!hasSource}
          onClick={toggleMuted}
        >
          {isMuted ? 'Activar sonido' : 'Silenciar'}
        </button>
      </div>
      {!hasSource ? (
        <p className="invitation-notice" role="status">
          {music.unavailableLabel ?? 'La música se habilitará cuando se cargue el archivo final.'}
        </p>
      ) : null}
    </section>
  );
}
