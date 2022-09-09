import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { getApiResource } from '../../service/getApiResource';
import { MOVIEDB_ROOT, MOVIEDB_API, VIDEOS, LANG, RU } from '../../constans/api';

import style from './video.module.css';

const Video = ({ id }) => {
  const [videoData, setVideoData] = useState(null);
  const {tv} = useParams();

  useEffect(() => {
    (async () => {
      const res = await getApiResource(
        `${MOVIEDB_ROOT}${tv}/${id}${VIDEOS}${MOVIEDB_API}${LANG}${RU}`
      );
      
      if (res) {
        setVideoData(res);
      }
    })();
  }, []);

  console.log(videoData);

  return (
    <>
      {videoData && videoData.results.map(item => (
        <div 
          key={item.key}
          className={style.wrapp}
        >
          <h3>{item.name}</h3>
          <div className={style.video}>
            <iframe
              className={style.iframe}
              src={'https://www.youtube.com/embed/'+item.key}
              frameBorder="0"
              allowFullScreen
              allow="autoplay; encrypted-media;"
            />
          </div>
        </div>
      ))}
    </>
  );
}

export default Video;