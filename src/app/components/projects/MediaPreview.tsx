import Image from 'next/image';
import styles from './MediaPreview.module.scss';

type MediaPreviewProps = {
  src: string;
  alt?: string;
};

const MediaPreview = ({ src, alt = 'project preview' }: MediaPreviewProps) => {
  const isVideo = /\.(mp4|webm)$/i.test(src);

  return (
    <div className={styles.mediaPreview}>
      {isVideo ? (
        <video src={src} autoPlay loop muted playsInline />
      ) : (
        <Image src={src} alt={alt} fill draggable={false} />
      )}
    </div>
  );
};

export default MediaPreview;
