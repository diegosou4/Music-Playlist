

interface AudioPlayerProps {
  url: string;
}

const AudioPlayer = ({ url }: AudioPlayerProps) => {

    return(
            <audio 
              slot="media"
              src={url}
              playsInline
              crossOrigin="anonymous"
              style={{ display: 'none' }}>
            </audio>
    )
}


export default AudioPlayer;

