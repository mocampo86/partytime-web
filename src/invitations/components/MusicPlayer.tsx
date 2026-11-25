import { useId, useRef, useState } from 'react';
import type { InvitationMusic } from '../../types/invitation';

type MusicPlayerProps = {
  music?: InvitationMusic;
  variant?: 'card' | 'floating';
};

export type PlaybackState = 'paused' | 'playing' | 'error' | 'ended';

export function getMusicStatusMessage(
  playbackState: PlaybackState,
  hasSource: boolean,
  unavailableLabel?: string,
) {
  if (!hasSource) {
    return unavailableLabel ?? 'La música se habilitará cuando se cargue el archivo final.';
  }
  if (playbackState === 'playing') {
    return 'La música está sonando.';
  }
  if (playbackState === 'error') {
    return 'No se pudo reproducir la música. Podés intentar nuevamente.';
  }
  if (playbackState === 'ended') {
    return 'La canción terminó.';
  }
  return 'La música está en pausa.';
}

export function MusicPlayer({ music, variant = 'card' }: MusicPlayerProps) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playbackState, setPlaybackState] = useState<PlaybackState>('paused');
  const [isMuted, setIsMuted] = useState(false);
  const titleId = useId();

  if (!music) {
    return null;
  }

  const hasSource = Boolean(music.src);
  const isPlaying = playbackState === 'playing';
  const isLooping = music.loop ?? true;
  const title = music.title ?? 'Canción especial';
  const statusMessage = getMusicStatusMessage(
    playbackState,
    hasSource,
    music.unavailableLabel,
  );
  const audioElement = hasSource ? (
    <audio
      ref={audioRef}
      src={music.src}
      loop={isLooping}
      preload="none"
      onPause={(event) => {
        if (!event.currentTarget.ended) {
          setPlaybackState('paused');
        }
      }}
      onPlay={() => setPlaybackState('playing')}
      onEnded={() => setPlaybackState('ended')}
      onError={() => setPlaybackState('error')}
    />
  ) : null;

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
      setPlaybackState('paused');
      await audio.play();
    } catch {
      setPlaybackState('error');
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

  if (variant === 'floating') {
    return (
      <aside
        className="invitation-music invitation-music--floating"
        aria-label="Música de la invitación"
      >
        {audioElement}
        <div className="invitation-music__meta">
          <span className="invitation-music__icon" aria-hidden="true">
            ♪
          </span>
          <span className="invitation-music__text">
            <span className="invitation-music__title">{hasSource ? title : 'Música por confirmar'}</span>
            <span className="invitation-music__artist">
              {hasSource
                ? isPlaying
                  ? 'Sonando'
                  : playbackState === 'error'
                    ? 'Error de reproducción'
                    : playbackState === 'ended'
                      ? 'Canción finalizada'
                      : (music.artist ?? 'Lista para sonar')
                : 'Sin audio disponible'}
            </span>
          </span>
        </div>
        {hasSource ? (
          <>
            <button
              className="invitation-music__control"
              type="button"
              aria-label={isPlaying ? 'Pausar música' : 'Reproducir música'}
              aria-pressed={isPlaying}
              onClick={togglePlayback}
            >
              <span aria-hidden="true">{isPlaying ? 'II' : '▶'}</span>
            </button>
            <button
              className="invitation-music__control"
              type="button"
              aria-label={isMuted ? 'Activar sonido' : 'Silenciar música'}
              aria-pressed={isMuted}
              onClick={toggleMuted}
            >
              <span aria-hidden="true">{isMuted ? '×' : '♪'}</span>
            </button>
          </>
        ) : (
          <button
            className="invitation-music__control"
            type="button"
            aria-label="Música no disponible"
            disabled
          >
            <span aria-hidden="true">♪</span>
          </button>
        )}
        <span className="invitation-sr-only" role="status">
          {statusMessage}
        </span>
      </aside>
    );
  }

  return (
    <section className="invitation-card invitation-music" aria-labelledby={titleId}>
      <div>
        <p className="invitation-eyebrow">Música</p>
        <h2 id={titleId}>{title}</h2>
        {music.artist ? <p>{music.artist}</p> : null}
      </div>
      <div className="invitation-music__controls" role="group" aria-label="Controles de música">
        {audioElement}
        <button
          className="invitation-button"
          type="button"
          disabled={!hasSource}
          aria-pressed={isPlaying}
          onClick={togglePlayback}
        >
          {isPlaying ? 'Pausar' : 'Reproducir'}
        </button>
        <button
          className="invitation-button invitation-button--ghost"
          type="button"
          disabled={!hasSource}
          aria-pressed={isMuted}
          onClick={toggleMuted}
        >
          {isMuted ? 'Activar sonido' : 'Silenciar'}
        </button>
      </div>
      {!hasSource || playbackState === 'error' ? (
        <p className="invitation-notice" role="status">
          {statusMessage}
        </p>
      ) : null}
    </section>
  );
}
