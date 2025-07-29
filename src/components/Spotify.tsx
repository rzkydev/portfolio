'use client';

import { useRef, useState, useEffect, ChangeEvent } from 'react';

// Type definitions for Spotify Embed API
interface SpotifyPlaybackData {
  position: number;
  duration: number;
  isBuffering: boolean;
  isPaused: boolean;
  playingURI: string;
}

interface SpotifyPlaybackEvent {
  data: SpotifyPlaybackData;
}

interface SpotifyPlaybackStartedEvent {
  data: {
    playingURI: string;
  };
}

interface SpotifyEmbedController {
  addListener(event: 'ready', callback: () => void): void;
  addListener(
    event: 'playback_update',
    callback: (e: SpotifyPlaybackEvent) => void
  ): void;
  addListener(
    event: 'playback_started',
    callback: (e: SpotifyPlaybackStartedEvent) => void
  ): void;
  removeListener(event: string): void;
  play(): void;
  pause(): void;
  loadUri(uri: string): void;
}

interface SpotifyEmbedOptions {
  width: string;
  height: string;
  uri: string;
}

interface SpotifyIframeApi {
  createController(
    element: HTMLElement,
    options: SpotifyEmbedOptions,
    callback: (controller: SpotifyEmbedController) => void
  ): void;
}

// Extend Window interface to include Spotify API
declare global {
  interface Window {
    onSpotifyIframeApiReady?: (api: SpotifyIframeApi) => void;
  }
}

export default function Spotify(): JSX.Element {
  const embedRef = useRef<HTMLDivElement>(null);
  const spotifyEmbedControllerRef = useRef<SpotifyEmbedController | null>(null);
  const [iFrameAPI, setIFrameAPI] = useState<SpotifyIframeApi | undefined>(
    undefined
  );
  const [playerLoaded, setPlayerLoaded] = useState<boolean>(false);
  const [uri, setUri] = useState<string>(
    'spotify:playlist:37i9dQZF1DZ06evO3eIivx'
  );

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://open.spotify.com/embed/iframe-api/v1';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  useEffect(() => {
    if (iFrameAPI) {
      return;
    }

    window.onSpotifyIframeApiReady = (SpotifyIframeApi: SpotifyIframeApi) => {
      setIFrameAPI(SpotifyIframeApi);
    };
  }, [iFrameAPI]);

  useEffect(() => {
    if (playerLoaded || iFrameAPI === undefined || !embedRef.current) {
      return;
    }

    iFrameAPI.createController(
      embedRef.current,
      {
        width: '100%',
        height: '352',
        uri: uri,
      },
      (spotifyEmbedController: SpotifyEmbedController) => {
        spotifyEmbedController.addListener('ready', () => {
          setPlayerLoaded(true);
        });

        const handlePlaybackUpdate = (e: SpotifyPlaybackEvent): void => {
          const { position, duration, isBuffering, isPaused, playingURI } =
            e.data;
          console.log(
            `Playback State updates:
            position - ${position},
            duration - ${duration},
            isBuffering - ${isBuffering},
            isPaused - ${isPaused},
            playingURI - ${playingURI},
            duration - ${duration}`
          );
        };

        spotifyEmbedController.addListener(
          'playback_update',
          handlePlaybackUpdate
        );

        spotifyEmbedController.addListener(
          'playback_started',
          (e: SpotifyPlaybackStartedEvent) => {
            const { playingURI } = e.data;
            console.log(`The playback has started for: ${playingURI}`);
          }
        );

        spotifyEmbedControllerRef.current = spotifyEmbedController;
      }
    );

    return () => {
      if (spotifyEmbedControllerRef.current) {
        spotifyEmbedControllerRef.current.removeListener('playback_update');
      }
    };
  }, [playerLoaded, iFrameAPI, uri]);

  const onPauseClick = (): void => {
    if (spotifyEmbedControllerRef.current) {
      spotifyEmbedControllerRef.current.pause();
    }
  };

  const onPlayClick = (): void => {
    if (spotifyEmbedControllerRef.current) {
      spotifyEmbedControllerRef.current.play();
    }
  };

  const onUriChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setUri(event.target.value);
    if (spotifyEmbedControllerRef.current) {
      spotifyEmbedControllerRef.current.loadUri(event.target.value);
    }
  };

  return (
    <div>
      <div ref={embedRef} />
      {!playerLoaded && <p>Loading...</p>}
      <div>
        <button aria-label="Play" onClick={onPlayClick}>
          Play
        </button>
        <button aria-label="Pause" onClick={onPauseClick}>
          Pause
        </button>
      </div>
      <div>
        <p>Change URI:</p>
        <input
          type="text"
          value={uri}
          onChange={onUriChange}
          placeholder="Enter Spotify URI"
        />
      </div>
    </div>
  );
}

export { Spotify };
