import DMBT1 from '../assets/images/thumbnails/DMBT1.PNG'
import DMBT2 from '../assets/images/thumbnails/DMBT2.png'
import DMBT3 from '../assets/images/thumbnails/DMBT3.png'
import DMBPT1 from '../assets/images/preview/DMBPT1.png'
import DMBPT2 from '../assets/images/preview/DMBPT2.png'
import DMBPT3 from '../assets/images/preview/DMBPT3.png'
import DMBLogo from '../assets/images/logo/LogoDMB.png'
import DMB12TP from '../assets/images/preview/LOPDMB12T.png'
import DMB12T from '../assets/images/thumbnails/LOPDMB12T.jpg'
import DMB13TP from '../assets/images/preview/DMB13TP.png'
import DMB13T from '../assets/images/thumbnails/DMBEP13TT.png'

const Trailers = [
    {
        id: 1,
        section: 'Trailers',
        title: 'Dúper Mario Bros - Teaser',
        thumbnailUrl: DMBT1,
        webUrl: 'https://www.youtube.com/embed/wQSsQHrIS8k', // Add the episode URL
        backgroundImage: DMBPT1,
        seriesLogo: DMBLogo,
        description: 'Así es, la continuación de Dúper Mario Bros está en desarrollo. Sé que hay muchas preguntas pero paciencia, todo a su tiempo.',
      },
      {
        id: 2,
        section: 'Trailers',
        title: 'Dúper Mario Bros - Teaser #2',
        thumbnailUrl: DMBT2,
        webUrl: 'https://www.youtube.com/embed/pHAgZtUf5sM', // Add the episode URL
        backgroundImage: DMBPT2,
        seriesLogo: DMBLogo,
        description: 'La aventura continua, y con ella nuevos retos... Lo mostrado en este teaser está sujeto a cambiar y no tepresenta el resultado final (Voces, visuales y música serán mejor)',
      },
      {
        id: 3,
        section: 'Trailers',
        title: 'Dúper Mario Bros - Teaser #3',
        thumbnailUrl: DMBT3,
        webUrl: 'https://www.youtube.com/embed/GMVIoQlH9Qs', // Add the episode URL
        backgroundImage: DMBPT3,
        seriesLogo: DMBLogo,
        description: 'Mario y los demás se preparan para su siguiente reto. No se pierdan este año LA OTRA PARTE DE Dúper Mario Bros - Episodio 12...',
      },
    {
        id: 4,
        section: 'Trailers',
        title: 'Trailer - LA OTRA PARTE DE Dúper Mario Bros - Episodio 12',
        thumbnailUrl: DMB12T,
        webUrl: 'https://www.youtube.com/embed/_diKznt3v34', // Add the episode URL
        backgroundImage: DMB12TP,
        seriesLogo: DMB12TP,
        description: 'Proximemente',
      },
      {
        id: 5,
        section: 'Trailers',
        title: 'Dúper Mario Bros - Episodio 13 || Trailer',
        thumbnailUrl: DMB13T,
        webUrl: 'https://www.youtube.com/embed/q8H8WdX04tM', // Add the episode URL
        backgroundImage: DMB13TP,
        seriesLogo: DMBLogo,
        description: 'Proximemente',
      },
    
  ];

  export default Trailers;
