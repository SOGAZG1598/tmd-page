// src/components/Navbar.js
import React from 'react';
import Navbar from '../components/NavBar';
import Personajes from '../components/Wiki/Personajes';
import Footer from '../components/Footer';
import Colin from '../assets/images/wiki/1.png'
import Mario from '../assets/images/wiki/2.png'
import LegoBob from '../assets/images/wiki/3.png'
import Santa from '../assets/images/wiki/4.png'
import Luigi from '../assets/images/wiki/5.png'
import Yoshi from '../assets/images/wiki/6.png'
import Toad from '../assets/images/wiki/7.png'
import LegoBobDMB from '../assets/images/wiki/8.png'
import Koopa from '../assets/images/wiki/9.png'
import Bowser from '../assets/images/wiki/10.png'
import Burro from '../assets/images/wiki/12.png'
import Dustin from '../assets/images/wiki/13.png'
import Pikachu from '../assets/images/wiki/14.png'
import MarioLB from '../assets/images/wiki/15.png'
import Link from '../assets/images/wiki/16.png'
import Ezlo from '../assets/images/wiki/17.png'
import Johnny from '../assets/images/wiki/18.png'
import Soul from '../assets/images/wiki/19.png'
import ShyGuy from '../assets/images/wiki/20.png'
import Sabio from '../assets/images/wiki/21.png'
import Tienda from '../assets/images/wiki/22.png'
import Petey from '../assets/images/wiki/23.png'
import Bellota from '../assets/images/wiki/25.png'
import Malio from '../assets/images/wiki/26.png'
import Clyde from '../assets/images/wiki/27.png'
import Skelto from '../assets/images/wiki/28.png'
import Justin from '../assets/images/wiki/29.png'
import BBYoshi from '../assets/images/wiki/30.png'
import MamaY from '../assets/images/wiki/31.png'
import LegoBuck from '../assets/images/wiki/32.png'
import Weirdo from '../assets/images/wiki/34.png'
import Anio from '../assets/images/wiki/35.png'
import LBCreepy from '../assets/images/wiki/36.png'
import CHIN from '../assets/images/wiki/37.png'
import Nugget from '../assets/images/wiki/38.png'
import Rodri from '../assets/images/wiki/39.png'
import MRAAA from '../assets/images/wiki/40.png'
import MamaYDMB from '../assets/images/wiki/41.png'
import Daniel from '../assets/images/wiki/42.png'
import DMBLogo from '../assets/images/logo/LogoDMB.png'
import LBLogo from '../assets/images/logo/LogoLB.png'
import CreepyLogo from '../assets/images/logo/LogoCreepy.png'
import PDLogo from '../assets/images/logo/LogoPD.png'
import CWLogo from '../assets/images/logo/LogoCW.png'
import JALogo from '../assets/images/logo/LogoJA.png'
import BackgroundVideo from '../components/Wiki/BackgroundVideo';


const Wiki = () => {
    return(
        <div>
            <head><script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3081463517624663"
     crossOrigin="anonymous"></script></head>
            <Navbar />
            <BackgroundVideo />
            <Personajes
  images={[ 'slider1.png', 'slider2.png' ]}
  seriesLogos={[
    { id: 'DMB', logo: DMBLogo },
    { id: 'LB', logo: LBLogo },
    { id: 'CW', logo: CWLogo },
    { id: 'Creepy', logo: CreepyLogo },
    { id: 'PD', logo: PDLogo },
    { id: 'JA', logo: JALogo }
  ]}
  personajesData={[
    { nombre: 'Mario', imagen: Mario, serie: 'DMB', descripcion: 'Mario es un héroe que salva constantemente el mundo de las manos de Bowser. Tiende a ser aventurero, valiente, torpe e inteligente en ocasiones. Tiene una adicción extraña a la pasta italiana y a su bigote. Siempre está acompañado con su hermano Luigi y van en búsqueda de aventuras.' },
{ nombre: 'Colin', imagen: Colin, serie: 'PD', descripcion: 'El sirviente, ehem digo ayudante del primer y septimo Preguntas Dimensionales. Se creyó muerto por comentarios negativos hacia TheMarioDImension, pero está de regreso.' },
{ nombre: 'LegoBob', imagen: LegoBob, serie: 'LB', descripcion: 'Es el que empezó todo esto. LegoBob es el mismo de nuestra caricatura favorita. BOB ES PON JA. Pero en Lego. LegoBob empieza su aventura en el Hotel Denson donde será destruido incontables veces y conocerá muchos amigos y enemigos.Este personaje vive en el departamento #2 del mini hotel Denson.' },
{ nombre: 'Santa', imagen: Santa, serie: 'CW', descripcion: 'Spoiler: No es Santa, es un ladrón. Es conocido por su famoso Escape 007' },
{ nombre: 'Luigi', imagen: Luigi, serie: 'DMB', descripcion: 'Luigi es el hermano menor de Mario aunque de mayor estatura. Es un poco miedoso a diferencia de Mario, le asusta todo y tiene una extraña adicción a la pasta italiana. Odia su cuerpo "Aumentado" y es alérgico al ketchup.' },
{ nombre: 'Yoshi', imagen: Yoshi, serie: 'DMB', descripcion: 'Yoshi es el fiel amigo de Mario que lo acompaña a sus aventuras. Tiende a ser tierno y adorable; Pero es igual de valiente que Mario. Tiene una fascinación por sus galletas favoritas y le gusta visualizar productos de tiendas.' },
{ nombre: 'Toad', imagen: Toad, serie: 'DMB', descripcion: 'Amigo de Mario y Luigi, es algo miedoso y un poco tonto pero es muy gracioso.' },
{ nombre: 'LegoBobDMB', imagen: LegoBobDMB, serie: 'DMB', descripcion: 'LegoBob siempre apoya a sus amigos. Con la ayuda del Sabio Washatumorra para entrar al Reino Champiñón, acompaña a Mario y los demás en la busqueda de las esferas sagradas.' },
{ nombre: 'Koopa', imagen: Koopa, serie: 'DMB', descripcion: 'El rival principal de Mario en DMB, después de Bowser claro, se volverá un dolor de cabeza para nuestros heroes en la serie.' },
{ nombre: 'Bowser', imagen: Bowser, serie: 'DMB', descripcion: 'Bowser Mada Faca. El enemigo principal de Mario, con el poder de la barita sagrada porfin será una mayor amenaza para Mario y los demás.' },
{ nombre: 'Burro', imagen: Burro, serie: 'LB', descripcion: 'También conocido como “Asno”. Pero no le digas así porque se enoja. El mejor amigo de Legobob y su primer compañero a lo largo de su aventura. Vive en el departamento #3 del hotel Denson, se mudó ahí desde que el exdueño el Sr. Kowalsky se mudó.' },
{ nombre: 'Dustin', imagen: Dustin, serie: 'LB', descripcion: 'Dustin es un personaje creado por TheMarioDimension con un acento raro pero gracioso, Dustin es un personaje dispuesto a ayudar. Este personaje tiene más dinero que todos los otros, así que el vive en el departamento #1 tambíen conocido como la Suit Presidencial del hotel Denson.' },
{ nombre: 'Pikachu', imagen: Pikachu, serie: 'LB', descripcion: 'Pikachu es un pokémon electrico de la famosisima caricatura Pokémon. Este personaje es fiel y tiene una voz algo aguda que a la vez es tierna. Pikachu es pobre, así que vive con Legobob en el departamento #2 del hotel.' },
{ nombre: 'MarioLB', imagen: MarioLB, serie: 'LB', descripcion: 'Un personaje muy valiente y fuerte, viene del Reino Champiñon. Mario viene de la mundialmente famosa serie de videojuegos "Super Mario" creada por Nintendo. Mario vive en el Reino Champiñon, pero gracias a una tubería puede visitar a Legobob cuando le de la regalada gana.' },
{ nombre: 'Link', imagen: Link, serie: 'PD', descripcion: 'El presentador oficial del Preguntas Dimensionales. A veces aparece de color verde (Rodrigo) o cambia su look al azúl (Daniel).' },
{ nombre: 'Ezlo', imagen: Ezlo, serie: 'PD', descripcion: 'Tú Madre' },
{ nombre: 'Johnny', imagen: Johnny, serie: 'DMB', descripcion: 'Es el hijo del Sabio Washatumorra. Vive en la Suit Presidencial del Hotel Denson y le encanta contar historias usando Flipnote Studio.' },
{ nombre: 'Soul', imagen: Soul, serie: 'DMB', descripcion: 'Es un ente misterioso en forma de humo que se adhiere a personas u objetos. Se desconoce su proposito real.' },
//{ nombre: 'ShyGuy', imagen: ShyGuy, serie: 'DMB', descripcion: 'El guardian de la Torre Sagrada. Es famoso por nunca callarse y hablar como NPC. Espera algún día reencontrarse con su hijo' },
{ nombre: 'Sabio Washatumorra', imagen: Sabio, serie: 'DMB', descripcion: 'Lo sabe casi todo, ¿qué pregunta le vas a hacer?' },
{ nombre: 'El Señor de la Tienda', imagen: Tienda, serie: 'DMB', descripcion: 'Era el encargado de la Tienda del Club de Comedia Bikolt, y era cocinero del restaurante El Italiano. Sus encuentros con Mario y los demás han hecho su vida más dificil de lo que pudo imaginar.' },
{ nombre: 'Petey Piranha', imagen: Petey, serie: 'DMB', descripcion: 'El Monstruo del Túnel del Miedo/Basilisco del Terror. No tiene ojos pero tiene un increible sentido del olfato y auditivo que logra saber la ubicación exacta de su presa en todo el túnel del miedo y basilisco del terror. Odia escuchar canciones de Luis Miguel.' },
{ nombre: 'Bellota', imagen: Bellota, serie: 'LB', descripcion: 'Viene de la conocida caricatura Las Chicas Super Poderosas, en Legobob no esta tan poderosa, trabaja con sus hermanas en una tienda de abarrotes en el mini hotel Denson.' },
{ nombre: 'Malio', imagen: Malio, serie: 'LB', descripcion: 'El primo de Mario y de Luigi, no, no tiene sindrome de dam, simplemente es algo tonto.' },
{ nombre: 'Clyde', imagen: Clyde, serie: 'LB', descripcion: 'Era sirviente de Skelto pero se amotinó para defender a Bob (Legobob)' },
{ nombre: 'Justin', imagen: Justin, serie: 'LB', descripcion: 'El hermano menor de Dustin, vive en otro lado y por eso solo ha salido una ves.' },
{ nombre: 'Skelto', imagen: Skelto, serie: 'LB', descripcion: 'También llamado como “El Rey del Lego”, es el antagonista principal de la serie “Legobob”, con una apariencia de robot de tintes plateados y rojos,su objetivo es recuperar la pieza sagrada de lego que antes poseía, para así asesinar a Legobob junto con sus amigos y dominar al mundo.' },
{ nombre: 'Bebe Yoshi', imagen: BBYoshi, serie: 'LB', descripcion: 'Un Yoshi bebe del que Mario dependió para que naciera, ama los perros y le encanta jugar.' },
{ nombre: 'Mamá Yoshi', imagen: MamaY, serie: 'LB', descripcion: 'Mamá de bebe Yoshi e amiga de Mario, se preocupa mucho por su hijo y le está eternamente agradezida a Mario por salvar a su bebe.' },
{ nombre: 'Lego Buck', imagen: LegoBuck, serie: 'LB', descripcion: 'El es el tatara tatara tatara abuelo de Legobob, el era un vaquero del viejo oeste, es algo incredulo con las creencias.' },
{ nombre: 'Weirdo', imagen: Weirdo, serie: 'CW', descripcion: 'Sus mayores logros son que le hayan robado su casa y matar el año a balazos. Se piensa que murió a principios del 2013 porque nadie lo ha visto desde entonces.' },
{ nombre: '2012', imagen: Anio, serie: 'CW', descripcion: 'Hola! Soy el 2012 AAAAAAAGH XO' },
{ nombre: 'LegoBob Te Parece Divertido', imagen: LBCreepy, serie: 'Creepy', descripcion: '¿Qué pasaría si LegoBob fuera el villano?' },
{ nombre: 'La Chingada', imagen: CHIN, serie: 'JA', descripcion: 'AAWGEJWE   /$W%(W""&R ¨*¨*[qqfgaFSF TESHDDR....' },
{ nombre: 'NuggetMaster', imagen: Nugget, serie: 'JA', descripcion: 'Odia su vida y a la Mamá de Carlos' },
{ nombre: 'Rodrigo', imagen: Rodri, serie: 'JA', descripcion: 'El Creador' },
{ nombre: 'Daniel', imagen: Daniel, serie: 'JA', descripcion: 'El Continuador' },
{ nombre: 'MR. AAAAAAAA', imagen: MRAAA, serie: 'DMB', descripcion: 'AAAAAAAAAAAAAAAA AAAAAAAAAAAAAAAA AAAAAAAAAAAAAAAA AAAAAAAAAAAAAAAA AAAAAAAAAAAAAAAA AAAAAAAAAAAAAAAA AAAAAAAAAAAAAAAA AAAAAAAAAAAAAAAA AAAAAAAAAAAAAAAA AAAAAAAAAAAAAAAA AAAAAAAAAAAAAAAA' },
{ nombre: 'Mamá Yoshi DMB', imagen: MamaYDMB, serie: 'DMB', descripcion: 'Ella ayudó a Mario y a Luigi en la travesía al tunel del miedo, salió en la escena más icónica de la serie y se fue para siempre. No se sabe su paradero actual.' },

  ]}
/>
            <Footer />
        </div>
    )
};

export default Wiki;