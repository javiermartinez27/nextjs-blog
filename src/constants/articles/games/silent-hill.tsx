import React from 'react';

import Image from 'next/image';

import mainImage from "@/images/articles/games/silentHill2/SilentHill2_1.webp";

const SILENT_HILL_2 = {
  title: 'Silent Hill 2 – El terror y la tristeza',
  subtitle: 'El tan proclamado mejor juego de terror de la historia: Silent Hill 2. Veamos cómo genera miedo y busca ir más allá de este.',
  mainImage: (<Image className="rounded-xl border-white border-4" src={mainImage} alt="Article image"/>),
  sideImage: (<Image className="rounded-xl border-white border-4" height={150} src={mainImage} alt="Article image"/>),
  link: '/games/silent-hill-2-el-terror-y-la-tristeza',
  tags: ['Terror'],
  p1: {
    ph1: "¿Cuál fue el momento más triste en tu vida? Quizás perdiste a alguien muy cercan@ a ti, o cometiste un error imposible de enmendar. Tal vez estuviste (o estás) tan perdid@, que no tienes ni una idea de cómo avanzar con tu vida. ¿Sentiste también miedo en ese momento?",
    ph2: "Esto es lo que Silent Hill 2 toma como punto de partida, con el protagonista, James, recibiendo un recordatorio de su mayor tristeza; una carta de su esposa muerta, diciendo que lo espera en Silent Hill. Como es sabido, aquí el terror lo estará esperando en cada esquina, pero, ¿qué nos hace sentir miedo? ¿Lo desconocido? Esto puede venir de muchas formas…",
    img1: "/img/articles/games/silentHill2/SilentHill2_1.webp",
  },
  p2: {
    ph1: "El juego hace todo lo posible para que cada paso que demos esté lleno de dudas y temor. Sin ir demasiado lejos, solo el punto de partida de la historia nos deja con una sensación extraña, como obligándonos a preguntarnos dónde nos estamos metiendo. Pero, sin dudas, “físicamente” es la niebla la que nos llega de temor y dudas.",
    ph2: "Y es que esta niebla no deja ver nada. Cualquier cosa que esté a más de dos metros del personaje será prácticamente invisible, y sólo sabremos que hay algo que temer con el sonido de nuestra radio. Radio que, por más horrible que sea su sonido, será lo único que nos hará sentir seguros. Exceptuando una cosa…",
    img1: "/img/articles/games/silentHill2/SilentHill2_2.webp",
    ph3: "Otro aspecto muy trabajado para sacarte de la seguridad es el aspecto técnico, con la cámara y el control del personaje. En todo momento la cámara peleará contigo; por más que puedas centrarla detrás de James, esta luchará por ponerse en ángulos incómodos que dificulten tu visión y eviten que puedas ver con claridad.",
    ph4: "Para poner la guinda a la torta, el apartado visual es excelente, y aguanta por más que sea un juego de 2001. Se aprovecha de no tener gráficos hiperrealistas, y difumina todos los diseños, ya sea de enemigos o del escenario, de manera que nunca nos sintamos seguro con lo que estamos mirando."
  },
};

export default SILENT_HILL_2;