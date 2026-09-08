/* =================================================================
   INNOVABOARD · APRENDER — ÁREA DE CIENCIAS
   Lógica de la aplicación
================================================================= */

(function () {
  'use strict';

  /* ---------------------------------------------------------------
     1. DATOS DE LAS MATERIAS Y LECCIONES
  --------------------------------------------------------------- */

  const DATA = {
    biologia: {
      nombre: 'Biología',
      descripcion: 'La ciencia de la vida',
      icono: 'fa-dna',
      lecciones: [
        {
          id: 'bio-1',
          titulo: 'La célula y su importancia',
          intro: 'Toda forma de vida que conoces, desde una bacteria hasta un ser humano, está construida a partir de una misma unidad básica: la célula. Entender la célula es entender el punto de partida de la biología.',
          resumen: [
            'La célula es la unidad básica de todo ser vivo; puede existir sola (unicelular) o junto a millones más (pluricelular).',
            'La célula vegetal tiene pared celular y cloroplastos; la animal no tiene ninguna de las dos.',
            'El núcleo guarda el ADN y dirige la actividad de toda la célula.',
            'La membrana celular decide qué entra y qué sale (permeabilidad selectiva).',
            'Las mitocondrias producen la energía que la célula necesita para funcionar.'
          ],
          bloques: [
            {
              tipo: 'texto',
              titulo: '¿Qué es una célula?',
              parrafo: 'Una célula es la unidad estructural y funcional más pequeña capaz de realizar todas las actividades necesarias para mantenerse con vida: obtener energía, crecer, reaccionar a su entorno y reproducirse. Algunos organismos, como las bacterias, son unicelulares y están formados por una sola célula. Otros, como los animales y las plantas, son pluricelulares: están compuestos por millones o billones de células que trabajan de manera coordinada.'
            },
            {
              tipo: 'lista',
              titulo: 'Células animales y vegetales: sus diferencias',
              items: [
                'La célula vegetal tiene pared celular, una capa rígida que le da soporte estructural; la célula animal carece de ella.',
                'Las células vegetales contienen cloroplastos, organelos donde ocurre la fotosíntesis; las células animales no los tienen.',
                'La célula vegetal suele tener una gran vacuola central que almacena agua y nutrientes; en la célula animal las vacuolas son pequeñas y numerosas.',
                'Ambas comparten membrana celular, núcleo, mitocondrias y citoplasma.'
              ]
            },
            {
              tipo: 'concepto',
              texto: 'Todas las células provienen de células preexistentes. Ninguna célula surge de la nada: se forma siempre por la división de una célula anterior.'
            },
            {
              tipo: 'texto',
              titulo: 'Los organelos principales',
              parrafo: 'Dentro de la célula existen estructuras especializadas llamadas organelos, cada una con una tarea específica. Las mitocondrias generan la energía que la célula necesita para funcionar, por lo que se les conoce como las centrales energéticas de la célula. El retículo endoplasmático participa en la fabricación y transporte de proteínas y lípidos. El aparato de Golgi empaqueta y distribuye esas moléculas hacia su destino final, dentro o fuera de la célula.'
            },
            {
              tipo: 'texto',
              titulo: 'La función del núcleo',
              parrafo: 'El núcleo es el centro de control de la célula. En su interior se guarda el ADN, la molécula que contiene toda la información genética necesaria para construir y dirigir el organismo. El núcleo decide, en gran medida, qué proteínas se fabrican y en qué momento, regulando así el comportamiento completo de la célula.'
            },
            {
              tipo: 'texto',
              titulo: 'La función de la membrana celular',
              parrafo: 'La membrana celular envuelve a la célula y actúa como una frontera inteligente: permite el paso de nutrientes, oxígeno y otras sustancias necesarias, mientras bloquea el ingreso de elementos dañinos. Esta propiedad se llama permeabilidad selectiva y es esencial para que la célula mantenga un ambiente interno estable, un proceso conocido como homeostasis.'
            },
            {
              tipo: 'ejemplo',
              texto: 'Piensa en la membrana celular como la puerta de un edificio con un portero: deja entrar a los residentes y visitantes autorizados, pero no permite el paso de cualquier persona.'
            },
            {
              tipo: 'texto',
              titulo: 'Por qué las células son importantes',
              parrafo: 'Comprender la célula es la base para entender la salud, la enfermedad, el crecimiento y la herencia. Cuando una célula funciona mal, puede originar enfermedades; cuando se reproduce sin control, puede dar lugar a un cáncer. Por eso la biología celular es uno de los pilares de la medicina moderna, la agricultura y la biotecnología.'
            }
          ]
        },
        {
          id: 'bio-2',
          titulo: 'Los ecosistemas',
          intro: 'Ningún ser vivo existe de manera aislada. Un ecosistema es la red de relaciones entre los seres vivos y el ambiente físico que comparten, y comprenderla ayuda a entender por qué cada especie importa.',
          resumen: [
            'Un ecosistema combina seres vivos (factores bióticos) y su ambiente físico (factores abióticos).',
            'La energía fluye de productores a consumidores a través de la cadena alimenticia, perdiéndose parte en cada paso.',
            'Los descomponedores reciclan la materia orgánica muerta y devuelven nutrientes al suelo.',
            'El equilibrio ecológico depende de que estas relaciones se mantengan estables.',
            'La intervención humana puede romper ese equilibrio con consecuencias graves.'
          ],
          bloques: [
            {
              tipo: 'texto',
              titulo: '¿Qué es un ecosistema?',
              parrafo: 'Un ecosistema es el conjunto formado por los seres vivos de una zona (llamados comunidad biológica) junto con el ambiente físico en el que habitan. Puede ser tan grande como un bosque tropical o tan pequeño como un charco de agua. Lo importante no es el tamaño, sino que existan relaciones constantes de intercambio de materia y energía entre sus componentes.'
            },
            {
              tipo: 'lista',
              titulo: 'Factores bióticos',
              items: [
                'Son todos los seres vivos que forman parte del ecosistema: plantas, animales, hongos, bacterias.',
                'Se relacionan entre sí mediante la competencia, la depredación, el mutualismo y la simbiosis.',
                'Su presencia o ausencia puede modificar por completo el equilibrio de un ecosistema.'
              ]
            },
            {
              tipo: 'lista',
              titulo: 'Factores abióticos',
              items: [
                'Son los componentes sin vida: temperatura, luz solar, agua, suelo, aire y minerales.',
                'Determinan qué especies pueden sobrevivir en un lugar determinado.',
                'Un cambio abiótico, como una sequía, puede alterar drásticamente a los factores bióticos.'
              ]
            },
            {
              tipo: 'texto',
              titulo: 'Cadenas alimenticias',
              parrafo: 'Una cadena alimenticia describe el flujo de energía de un organismo a otro a través de la alimentación. Comienza siempre con un organismo capaz de producir su propio alimento y continúa con quienes se alimentan de él, y así sucesivamente. Este flujo nunca es perfectamente eficiente: en cada paso se pierde energía en forma de calor.'
            },
            {
              tipo: 'lista',
              titulo: 'Productores, consumidores y descomponedores',
              items: [
                'Productores: organismos como las plantas y algas que fabrican su propio alimento mediante la fotosíntesis.',
                'Consumidores primarios: se alimentan directamente de los productores (herbívoros).',
                'Consumidores secundarios y terciarios: se alimentan de otros consumidores (carnívoros y omnívoros).',
                'Descomponedores: hongos y bacterias que degradan la materia orgánica muerta y devuelven nutrientes al suelo.'
              ]
            },
            {
              tipo: 'concepto',
              texto: 'Sin descomponedores, los nutrientes quedarían atrapados en los cuerpos muertos para siempre y los ecosistemas colapsarían por falta de materia prima reciclada.'
            },
            {
              tipo: 'texto',
              titulo: 'La importancia del equilibrio ecológico',
              parrafo: 'Un ecosistema saludable mantiene un equilibrio dinámico: las poblaciones de cada especie se regulan entre sí de forma natural. Cuando el ser humano interviene de manera drástica —por deforestación, contaminación o introducción de especies invasoras— ese equilibrio puede romperse, provocando la extinción de especies, la pérdida de fertilidad del suelo o el colapso de poblaciones enteras.'
            },
            {
              tipo: 'ejemplo',
              texto: 'La desaparición de los lobos en algunas regiones provocó que los ciervos se reprodujeran sin control, agotando la vegetación de la que dependían muchas otras especies.'
            }
          ]
        },
        {
          id: 'bio-3',
          titulo: 'El cuerpo humano',
          intro: 'El cuerpo humano funciona como una organización perfectamente coordinada de sistemas que trabajan juntos. Conocer sus sistemas principales es el primer paso para entender cómo cuidarlo.',
          resumen: [
            'El sistema respiratorio aporta oxígeno y elimina dióxido de carbono.',
            'El sistema circulatorio transporta oxígeno y nutrientes a cada célula del cuerpo.',
            'El sistema digestivo convierte los alimentos en nutrientes utilizables.',
            'Los tres sistemas dependen entre sí: ninguno funciona de forma aislada.',
            'Cuidar la salud significa mantener estos sistemas trabajando en equilibrio.'
          ],
          bloques: [
            {
              tipo: 'texto',
              titulo: 'Sistemas principales del cuerpo',
              parrafo: 'El cuerpo humano está organizado en sistemas, cada uno formado por órganos que colaboran para cumplir una función específica. Aunque cada sistema tiene un rol distinto, ninguno funciona de manera aislada: todos dependen unos de otros para mantener la vida.'
            },
            {
              tipo: 'texto',
              titulo: 'El sistema respiratorio',
              parrafo: 'Su función principal es el intercambio de gases: introduce oxígeno al cuerpo y elimina dióxido de carbono. El aire ingresa por la nariz o la boca, viaja por la tráquea y llega a los pulmones, donde diminutas estructuras llamadas alvéolos permiten que el oxígeno pase a la sangre y el dióxido de carbono salga de ella.'
            },
            {
              tipo: 'texto',
              titulo: 'El sistema circulatorio',
              parrafo: 'Formado por el corazón, la sangre y los vasos sanguíneos, este sistema transporta oxígeno, nutrientes, hormonas y células de defensa a cada rincón del cuerpo, y recoge los desechos para que sean eliminados. El corazón actúa como una bomba incansable que impulsa la sangre en un circuito continuo.'
            },
            {
              tipo: 'texto',
              titulo: 'El sistema digestivo',
              parrafo: 'Se encarga de transformar los alimentos en nutrientes que las células pueden aprovechar. El proceso inicia en la boca, continúa en el estómago, donde los ácidos y enzimas descomponen la comida, y culmina en el intestino delgado, donde ocurre la mayor parte de la absorción de nutrientes hacia la sangre.'
            },
            {
              tipo: 'lista',
              titulo: 'Cómo se relacionan estos tres sistemas',
              items: [
                'El sistema digestivo aporta los nutrientes que el cuerpo necesita.',
                'El sistema respiratorio aporta el oxígeno necesario para liberar energía de esos nutrientes.',
                'El sistema circulatorio transporta ambos —nutrientes y oxígeno— hacia cada célula del cuerpo.'
              ]
            },
            {
              tipo: 'concepto',
              texto: 'Una célula puede sobrevivir varios minutos sin nutrientes, pero solo unos segundos sin oxígeno. Por eso la respiración y la circulación trabajan siempre en conjunto.'
            },
            {
              tipo: 'texto',
              titulo: 'La importancia de cuidar la salud',
              parrafo: 'Hábitos como una alimentación balanceada, la actividad física regular, el descanso adecuado y evitar sustancias dañinas permiten que estos sistemas funcionen de manera óptima durante más tiempo. Cuidar el cuerpo no es solo evitar enfermedades: es sostener la capacidad de estos sistemas de trabajar en armonía a lo largo de toda la vida.'
            },
            {
              tipo: 'ejemplo',
              texto: 'Cuando haces ejercicio, tu sistema respiratorio y circulatorio aceleran su ritmo para llevar más oxígeno a los músculos que lo están consumiendo más rápido.'
            }
          ]
        }
      ]
    },

    quimica: {
      nombre: 'Química',
      descripcion: 'La materia y sus transformaciones',
      icono: 'fa-flask-vial',
      lecciones: [
        {
          id: 'qui-1',
          titulo: 'La materia y sus propiedades',
          intro: 'Todo lo que puedes tocar, ver o pesar está formado por materia. Esta lección explora qué es la materia, cómo se presenta y qué propiedades permiten identificarla y diferenciarla.',
          resumen: [
            'La materia ocupa espacio y tiene masa; existe en estado sólido, líquido, gaseoso y plasma.',
            'Las propiedades generales (masa, volumen, peso) las comparte toda la materia.',
            'Las propiedades específicas (densidad, punto de fusión, solubilidad) identifican cada sustancia.',
            'Cada estado se diferencia por qué tan unidas y ordenadas están sus partículas.'
          ],
          bloques: [
            {
              tipo: 'texto',
              titulo: '¿Qué es la materia?',
              parrafo: 'La materia es todo aquello que ocupa un lugar en el espacio y tiene masa. Esto incluye desde el aire que respiras hasta las rocas, el agua y tu propio cuerpo. La química es precisamente la ciencia que estudia la composición, estructura, propiedades y transformaciones de la materia.'
            },
            {
              tipo: 'lista',
              titulo: 'Los estados de la materia',
              items: [
                'Sólido: tiene forma y volumen definidos; sus partículas están muy unidas y ordenadas.',
                'Líquido: tiene volumen definido pero se adapta a la forma del recipiente; sus partículas están unidas pero pueden moverse entre sí.',
                'Gaseoso: no tiene forma ni volumen definidos; sus partículas se mueven libremente y con gran separación entre ellas.',
                'Plasma: un estado de alta energía en el que los átomos pierden electrones, presente en estrellas y rayos.'
              ]
            },
            {
              tipo: 'texto',
              titulo: 'Propiedades generales de la materia',
              parrafo: 'Las propiedades generales son aquellas que comparten todas las formas de materia, sin importar de qué sustancia se trate: la masa (cantidad de materia que contiene un cuerpo), el volumen (espacio que ocupa) y el peso (la fuerza con la que la gravedad la atrae).'
            },
            {
              tipo: 'lista',
              titulo: 'Propiedades específicas de la materia',
              items: [
                'Densidad: relación entre la masa de una sustancia y el volumen que ocupa.',
                'Punto de fusión: temperatura a la que un sólido se convierte en líquido.',
                'Punto de ebullición: temperatura a la que un líquido se convierte en gas.',
                'Solubilidad: capacidad de una sustancia de disolverse en otra.',
                'Color, olor y sabor: propiedades organolépticas que ayudan a identificar sustancias.'
              ]
            },
            {
              tipo: 'concepto',
              texto: 'Las propiedades específicas son como una huella digital: permiten identificar y diferenciar una sustancia de otra, incluso si a simple vista se parecen.'
            },
            {
              tipo: 'ejemplo',
              texto: 'El agua y el alcohol pueden verse igual de transparentes, pero tienen puntos de ebullición muy distintos: por eso el alcohol se evapora mucho más rápido a temperatura ambiente.'
            }
          ]
        },
        {
          id: 'qui-2',
          titulo: 'Átomos y elementos químicos',
          intro: 'Detrás de toda la diversidad de sustancias que existen en el universo hay un conjunto relativamente pequeño de piezas básicas: los átomos. Esta lección explica su estructura y cómo se organizan en elementos.',
          resumen: [
            'El átomo tiene protones y neutrones en el núcleo, y electrones girando a su alrededor.',
            'El número de protones (número atómico) define de qué elemento se trata.',
            'Un elemento químico agrupa átomos con el mismo número de protones.',
            'La tabla periódica organiza los elementos según ese número y sus propiedades.'
          ],
          bloques: [
            {
              tipo: 'texto',
              titulo: '¿Qué es un átomo?',
              parrafo: 'El átomo es la unidad más pequeña de un elemento químico que conserva sus propiedades. Está formado por un núcleo central, donde se concentran los protones (carga positiva) y los neutrones (sin carga), rodeado por una nube de electrones (carga negativa) que se mueven a gran velocidad alrededor del núcleo.'
            },
            {
              tipo: 'lista',
              titulo: 'Las partículas subatómicas',
              items: [
                'Protones: partículas con carga positiva ubicadas en el núcleo; su número define de qué elemento se trata.',
                'Neutrones: partículas sin carga eléctrica que también se encuentran en el núcleo, aportando masa y estabilidad.',
                'Electrones: partículas con carga negativa que giran alrededor del núcleo y determinan cómo un átomo se une a otros.'
              ]
            },
            {
              tipo: 'texto',
              titulo: '¿Qué es un elemento químico?',
              parrafo: 'Un elemento químico es una sustancia formada por átomos que tienen el mismo número de protones. Ese número se llama número atómico y es único para cada elemento: el hidrógeno tiene un protón, el oxígeno tiene ocho, el hierro tiene veintiséis. Todos los elementos conocidos están organizados en la tabla periódica.'
            },
            {
              tipo: 'texto',
              titulo: 'La tabla periódica',
              parrafo: 'La tabla periódica organiza los elementos según su número atómico y sus propiedades químicas. Los elementos en una misma columna, llamada grupo, comparten comportamientos químicos similares porque tienen una distribución parecida de electrones en su capa más externa.'
            },
            {
              tipo: 'concepto',
              texto: 'Todo lo que existe en el universo, desde una estrella hasta una célula, está construido a partir de combinaciones de estos poco más de cien elementos.'
            },
            {
              tipo: 'ejemplo',
              texto: 'El agua que bebes es una combinación de solo dos elementos: hidrógeno y oxígeno, unidos en una proporción de dos átomos de hidrógeno por cada átomo de oxígeno.'
            }
          ]
        },
        {
          id: 'qui-3',
          titulo: 'Cambios físicos y químicos',
          intro: 'La materia está en constante transformación. Distinguir un cambio físico de uno químico es una de las habilidades fundamentales para entender qué ocurre a nuestro alrededor.',
          resumen: [
            'Un cambio físico modifica la forma o el estado, pero la sustancia sigue siendo la misma.',
            'Un cambio químico transforma la sustancia en otra distinta, con propiedades nuevas.',
            'Señales de cambio químico: color nuevo, gas, calor, luz o un sólido que se forma de repente.',
            'La prueba clave: si la sustancia original ya no se puede recuperar, fue un cambio químico.'
          ],
          bloques: [
            {
              tipo: 'texto',
              titulo: '¿Qué es un cambio físico?',
              parrafo: 'Un cambio físico es aquel en el que la sustancia modifica su forma, tamaño o estado, pero conserva su composición química original. Es decir, la sustancia sigue siendo la misma, solo que se presenta de otra manera.'
            },
            {
              tipo: 'lista',
              titulo: 'Ejemplos de cambios físicos',
              items: [
                'Congelar agua para convertirla en hielo.',
                'Cortar una hoja de papel en pedazos más pequeños.',
                'Disolver azúcar en agua.',
                'Estirar una liga de goma.'
              ]
            },
            {
              tipo: 'texto',
              titulo: '¿Qué es un cambio químico?',
              parrafo: 'Un cambio químico es aquel en el que una o más sustancias se transforman en sustancias distintas, con propiedades diferentes a las originales. En este proceso se rompen y forman nuevos enlaces entre los átomos, dando lugar a una reacción química.'
            },
            {
              tipo: 'lista',
              titulo: 'Señales de que ocurrió un cambio químico',
              items: [
                'Cambio de color que no se debe a una simple mezcla.',
                'Producción de burbujas o gas.',
                'Liberación o absorción de calor.',
                'Formación de un sólido nuevo (precipitado) dentro de un líquido.',
                'Producción de luz o de un olor completamente distinto al original.'
              ]
            },
            {
              tipo: 'concepto',
              texto: 'La clave para diferenciarlos es esta: en un cambio físico puedes normalmente recuperar la sustancia original; en un cambio químico, la sustancia original desaparece para dar lugar a algo nuevo.'
            },
            {
              tipo: 'ejemplo',
              texto: 'Quemar un papel es un cambio químico: el papel se transforma en ceniza, humo y gases, sustancias completamente distintas que ya no pueden volver a convertirse en papel.'
            }
          ]
        }
      ]
    },

    fisica: {
      nombre: 'Física',
      descripcion: 'Movimiento, fuerzas y energía',
      icono: 'fa-bolt',
      lecciones: [
        {
          id: 'fis-1',
          titulo: 'Movimiento y velocidad',
          intro: 'El movimiento está en todas partes: un carro que avanza, una pelota que cae, la Tierra girando alrededor del Sol. La física describe estos movimientos con precisión matemática.',
          resumen: [
            'El movimiento siempre se describe respecto a un punto de referencia.',
            'Distancia es el recorrido total; desplazamiento es la línea recta entre inicio y fin, con dirección.',
            'Velocidad = desplazamiento ÷ tiempo, e incluye una dirección.',
            'Existen movimientos rectilíneos uniformes, acelerados y circulares.'
          ],
          bloques: [
            {
              tipo: 'texto',
              titulo: '¿Qué es el movimiento?',
              parrafo: 'En física, se dice que un objeto está en movimiento cuando cambia de posición respecto a un punto de referencia a lo largo del tiempo. Ese punto de referencia es fundamental: un pasajero sentado en un autobús en marcha está en reposo respecto al autobús, pero en movimiento respecto a una persona parada en la acera.'
            },
            {
              tipo: 'texto',
              titulo: 'Distancia y desplazamiento',
              parrafo: 'La distancia es la longitud total del recorrido realizado por un objeto, sin importar la dirección. El desplazamiento, en cambio, es la distancia en línea recta entre el punto de partida y el punto final, e incluye la dirección. Un corredor que da una vuelta completa a una pista recorre una gran distancia, pero su desplazamiento es cero porque termina en el mismo lugar donde empezó.'
            },
            {
              tipo: 'texto',
              titulo: '¿Qué es la velocidad?',
              parrafo: 'La velocidad describe qué tan rápido cambia la posición de un objeto y en qué dirección lo hace. Se calcula dividiendo el desplazamiento entre el tiempo empleado. La rapidez, por su parte, es similar pero se calcula con la distancia total recorrida, sin considerar la dirección.'
            },
            {
              tipo: 'concepto',
              texto: 'Velocidad = desplazamiento ÷ tiempo. Si un carro se desplaza 100 kilómetros en dirección norte en 2 horas, su velocidad es de 50 km/h hacia el norte.'
            },
            {
              tipo: 'lista',
              titulo: 'Tipos de movimiento',
              items: [
                'Movimiento rectilíneo uniforme: el objeto se mueve en línea recta a velocidad constante.',
                'Movimiento acelerado: la velocidad del objeto aumenta o disminuye con el tiempo.',
                'Movimiento circular: el objeto se desplaza siguiendo una trayectoria curva o circular.'
              ]
            },
            {
              tipo: 'ejemplo',
              texto: 'Un ciclista que mantiene el mismo ritmo de pedaleo en una calle recta durante varios minutos describe un movimiento rectilíneo aproximadamente uniforme.'
            }
          ]
        },
        {
          id: 'fis-2',
          titulo: 'Fuerzas',
          intro: 'Cada vez que empujas, jalas, lanzas o detienes algo, estás aplicando una fuerza. Las fuerzas son las responsables de que los objetos cambien su movimiento.',
          resumen: [
            'Una fuerza puede acelerar, frenar, desviar o deformar un objeto.',
            'Existen fuerzas de gravedad, fricción, normal y elástica, entre otras.',
            'Primera ley de Newton: un objeto sigue en reposo o movimiento a menos que una fuerza lo cambie (inercia).',
            'Tercera ley de Newton: a toda acción corresponde una reacción igual y en sentido contrario.'
          ],
          bloques: [
            {
              tipo: 'texto',
              titulo: '¿Qué es una fuerza?',
              parrafo: 'Una fuerza es toda acción capaz de modificar el estado de movimiento de un objeto —acelerarlo, frenarlo o cambiar su dirección— o de deformarlo. Las fuerzas se representan mediante vectores porque tienen magnitud (qué tan intensa es) y dirección (hacia dónde actúa).'
            },
            {
              tipo: 'lista',
              titulo: 'Tipos comunes de fuerzas',
              items: [
                'Fuerza de gravedad: atrae a los objetos hacia el centro de la Tierra.',
                'Fuerza de fricción: se opone al movimiento entre dos superficies en contacto.',
                'Fuerza normal: la que ejerce una superficie sobre un objeto que descansa sobre ella, en dirección perpendicular.',
                'Fuerza elástica: la que ejercen objetos deformables, como un resorte, al intentar volver a su forma original.'
              ]
            },
            {
              tipo: 'texto',
              titulo: 'Las leyes de Newton',
              parrafo: 'Isaac Newton describió tres leyes fundamentales que explican cómo las fuerzas afectan el movimiento. La primera ley, o ley de la inercia, establece que un objeto en reposo permanece en reposo y uno en movimiento continúa en movimiento a menos que una fuerza externa actúe sobre él. La segunda ley relaciona la fuerza, la masa y la aceleración de un objeto. La tercera ley afirma que a toda acción corresponde una reacción de igual magnitud pero en sentido contrario.'
            },
            {
              tipo: 'concepto',
              texto: 'La inercia es la resistencia natural de un objeto a cambiar su estado de movimiento. Cuanto mayor es la masa de un objeto, mayor es su inercia.'
            },
            {
              tipo: 'ejemplo',
              texto: 'Cuando saltas desde un bote pequeño hacia un muelle, el bote se mueve hacia atrás: esa es la tercera ley de Newton en acción, la fuerza que ejerces sobre el bote genera una reacción igual sobre ti.'
            }
          ]
        },
        {
          id: 'fis-3',
          titulo: 'Energía',
          intro: 'La energía es uno de los conceptos más importantes de toda la física: no se crea ni se destruye, solo se transforma de una forma a otra, y comprender esto explica gran parte de cómo funciona el universo.',
          resumen: [
            'La energía no se crea ni se destruye, solo se transforma (ley de conservación de la energía).',
            'La energía cinética depende del movimiento; la potencial depende de la posición o el estado.',
            'Al caer un objeto, su energía potencial se convierte progresivamente en energía cinética.',
            'Las transformaciones de energía están presentes en máquinas, cuerpos vivos y fenómenos naturales.'
          ],
          bloques: [
            {
              tipo: 'texto',
              titulo: '¿Qué es la energía?',
              parrafo: 'La energía es la capacidad de un sistema para realizar un trabajo o producir un cambio. Se manifiesta de muchas formas: mecánica, térmica, eléctrica, química, luminosa y nuclear, entre otras, y puede transformarse de un tipo a otro sin perderse.'
            },
            {
              tipo: 'lista',
              titulo: 'Las dos formas principales de energía mecánica',
              items: [
                'Energía cinética: la que posee un objeto debido a su movimiento; depende de su masa y su velocidad.',
                'Energía potencial: la energía almacenada que un objeto tiene debido a su posición o estado, como un objeto elevado o un resorte comprimido.'
              ]
            },
            {
              tipo: 'texto',
              titulo: 'La ley de conservación de la energía',
              parrafo: 'Uno de los principios más importantes de la física establece que la energía no se crea ni se destruye, solo se transforma de una forma a otra. La cantidad total de energía en un sistema cerrado permanece constante, aunque cambie de forma repetidamente.'
            },
            {
              tipo: 'concepto',
              texto: 'Cuando dejas caer una pelota, su energía potencial se transforma progresivamente en energía cinética a medida que gana velocidad durante la caída.'
            },
            {
              tipo: 'lista',
              titulo: 'Ejemplos de transformación de energía',
              items: [
                'Una planta hidroeléctrica convierte la energía potencial del agua en energía eléctrica.',
                'Un panel solar transforma la energía luminosa del Sol en energía eléctrica.',
                'Un motor de combustión convierte energía química del combustible en energía mecánica.',
                'El cuerpo humano transforma la energía química de los alimentos en energía mecánica para moverse.'
              ]
            },
            {
              tipo: 'ejemplo',
              texto: 'En una montaña rusa, la energía potencial acumulada en el punto más alto se convierte en energía cinética conforme el carrito desciende y gana velocidad.'
            }
          ]
        }
      ]
    },

    tierra: {
      nombre: 'Ciencias de la Tierra',
      descripcion: 'Nuestro planeta y su cuidado',
      icono: 'fa-earth-americas',
      lecciones: [
        {
          id: 'tie-1',
          titulo: 'Estructura del planeta Tierra',
          intro: 'Bajo tus pies existe un mundo de capas que pocas veces vemos, pero que determinan desde los terremotos hasta el campo magnético que nos protege del espacio.',
          resumen: [
            'La Tierra está formada por capas: corteza, manto, núcleo externo y núcleo interno.',
            'El movimiento del núcleo externo líquido genera el campo magnético terrestre.',
            'La corteza está fragmentada en placas tectónicas que se desplazan muy lentamente.',
            'El choque y movimiento de placas explica montañas, volcanes y terremotos.'
          ],
          bloques: [
            {
              tipo: 'texto',
              titulo: 'Las capas internas de la Tierra',
              parrafo: 'La Tierra está organizada en capas concéntricas, cada una con propiedades físicas y químicas distintas. Estas capas se descubrieron principalmente gracias al estudio de las ondas sísmicas generadas por los terremotos, que viajan de forma diferente según el material que atraviesan.'
            },
            {
              tipo: 'lista',
              titulo: 'Las capas principales',
              items: [
                'Corteza: la capa más externa y delgada, donde vivimos; puede ser continental u oceánica.',
                'Manto: la capa más gruesa, compuesta de roca semisólida que fluye muy lentamente a lo largo de millones de años.',
                'Núcleo externo: formado por hierro y níquel en estado líquido; su movimiento genera el campo magnético terrestre.',
                'Núcleo interno: una esfera sólida de hierro y níquel sometida a temperaturas y presiones extremas.'
              ]
            },
            {
              tipo: 'texto',
              titulo: 'Las placas tectónicas',
              parrafo: 'La corteza terrestre no es una sola pieza continua, sino que está fragmentada en placas tectónicas que flotan sobre el manto y se desplazan lentamente. El movimiento de estas placas explica la formación de montañas, la actividad volcánica y la ocurrencia de terremotos en los límites donde dos placas interactúan.'
            },
            {
              tipo: 'concepto',
              texto: 'El campo magnético generado por el núcleo externo actúa como un escudo invisible que protege a la Tierra de la radiación dañina proveniente del Sol.'
            },
            {
              tipo: 'ejemplo',
              texto: 'La Cordillera del Himalaya se sigue elevando actualmente porque la placa que contiene a India continúa chocando lentamente contra la placa euroasiática.'
            }
          ]
        },
        {
          id: 'tie-2',
          titulo: 'Fenómenos naturales',
          intro: 'Terremotos, volcanes, huracanes: los fenómenos naturales son manifestaciones de la energía interna y externa del planeta. Conocer sus causas ayuda a comprenderlos y a prepararnos mejor ante ellos.',
          resumen: [
            'Los fenómenos geológicos (terremotos, volcanes) nacen de la actividad interna de la Tierra.',
            'Los fenómenos atmosféricos (huracanes, tornados, sequías) nacen de la dinámica de la atmósfera.',
            'No se pueden evitar, pero sí prepararse: alertas tempranas y construcciones resistentes salvan vidas.',
            'La ciencia permite anticipar y reducir el impacto de estos fenómenos.'
          ],
          bloques: [
            {
              tipo: 'texto',
              titulo: 'Fenómenos de origen geológico',
              parrafo: 'Los terremotos ocurren cuando se libera de forma repentina la energía acumulada por el roce entre placas tectónicas, generando vibraciones que se propagan a través de la corteza terrestre. Los volcanes, por su parte, son aberturas en la corteza por donde el magma —roca fundida del interior— puede salir a la superficie en forma de erupciones.'
            },
            {
              tipo: 'lista',
              titulo: 'Fenómenos de origen atmosférico',
              items: [
                'Huracanes: sistemas de tormentas giratorias que se forman sobre aguas oceánicas cálidas.',
                'Tornados: columnas de aire en rotación violenta que se forman durante tormentas severas.',
                'Sequías: períodos prolongados con precipitaciones muy por debajo de lo habitual.',
                'Inundaciones: acumulación excesiva de agua que sobrepasa la capacidad normal de un terreno o cauce.'
              ]
            },
            {
              tipo: 'texto',
              titulo: 'La importancia de la prevención',
              parrafo: 'Aunque no es posible evitar que ocurran estos fenómenos, sí es posible reducir su impacto mediante la ciencia: sistemas de alerta temprana, construcciones resistentes a sismos y planes de evacuación bien diseñados salvan miles de vidas cada año.'
            },
            {
              tipo: 'concepto',
              texto: 'Un fenómeno natural se convierte en un desastre cuando afecta directamente a comunidades humanas que no estaban preparadas para enfrentarlo.'
            },
            {
              tipo: 'ejemplo',
              texto: 'Los sismógrafos permiten detectar terremotos incluso a miles de kilómetros de distancia, registrando las ondas sísmicas que viajan por el interior de la Tierra.'
            }
          ]
        },
        {
          id: 'tie-3',
          titulo: 'El medio ambiente y cambio climático',
          intro: 'El planeta que habitamos está cambiando a un ritmo acelerado debido a la actividad humana. Comprender el cambio climático es fundamental para actuar de manera responsable.',
          resumen: [
            'El efecto invernadero es natural y necesario: mantiene al planeta con una temperatura habitable.',
            'El cambio climático es la aceleración de ese efecto por la actividad humana.',
            'Las principales causas son la quema de combustibles fósiles, la deforestación y la ganadería intensiva.',
            'Reducir el consumo de energía fósil y proteger los bosques ayuda a mitigar el impacto.'
          ],
          bloques: [
            {
              tipo: 'texto',
              titulo: '¿Qué es el efecto invernadero?',
              parrafo: 'El efecto invernadero es un proceso natural en el que ciertos gases de la atmósfera, como el dióxido de carbono y el metano, retienen parte del calor del Sol, manteniendo al planeta a una temperatura adecuada para la vida. Sin este efecto, la Tierra sería demasiado fría para sostener la mayoría de los seres vivos que conocemos.'
            },
            {
              tipo: 'texto',
              titulo: '¿Qué es el cambio climático?',
              parrafo: 'El cambio climático se refiere a las variaciones a largo plazo en los patrones de temperatura y clima del planeta. Aunque el clima siempre ha cambiado de forma natural a lo largo de la historia geológica, la actividad humana —principalmente la quema de combustibles fósiles— ha acelerado este proceso de manera drástica en los últimos dos siglos, intensificando el efecto invernadero.'
            },
            {
              tipo: 'lista',
              titulo: 'Principales causas de origen humano',
              items: [
                'Quema de combustibles fósiles como el petróleo, el carbón y el gas natural.',
                'Deforestación, que reduce la capacidad del planeta de absorber dióxido de carbono.',
                'Ganadería y agricultura intensivas, que generan grandes cantidades de metano.',
                'Producción industrial y generación de residuos a gran escala.'
              ]
            },
            {
              tipo: 'concepto',
              texto: 'Un aumento de apenas unos pocos grados en la temperatura promedio global puede alterar drásticamente los patrones de lluvia, el nivel del mar y la distribución de los ecosistemas.'
            },
            {
              tipo: 'lista',
              titulo: 'Acciones que ayudan a mitigar el impacto',
              items: [
                'Reducir el consumo de energía proveniente de combustibles fósiles.',
                'Favorecer las energías renovables como la solar y la eólica.',
                'Proteger y restaurar bosques y ecosistemas naturales.',
                'Reducir, reutilizar y reciclar materiales en la vida diaria.'
              ]
            },
            {
              tipo: 'ejemplo',
              texto: 'El derretimiento acelerado de los glaciares en las últimas décadas es una de las evidencias más visibles del calentamiento global sobre el planeta.'
            }
          ]
        }
      ]
    }
  };

  const TOTAL_LECCIONES = Object.values(DATA).reduce((sum, m) => sum + m.lecciones.length, 0);
  const STORAGE_KEY_BASE = 'innovaboard_progreso_ciencias';
  const USERS_KEY = 'innovaboard_usuarios';
  const SESSION_KEY = 'innovaboard_sesion';

  /* ---------------------------------------------------------------
     1B. ESQUEMAS VISUALES POR LECCIÓN
     Cada entrada tiene un SVG (el dibujo) y, cuando ayuda a entender
     mejor las partes sueltas de un dibujo, una leyenda con colores.
  --------------------------------------------------------------- */

  const ESQUEMAS = {

    'bio-1': {
      titulo: 'La célula por dentro',
      svg: '<svg viewBox="0 0 600 300" role="img" aria-label="Diagrama de una célula con membrana, núcleo y mitocondrias">' +
        '<ellipse cx="300" cy="150" rx="255" ry="120" fill="rgba(119,255,51,0.07)" stroke="var(--green-400)" stroke-width="2.5"/>' +
        '<circle cx="215" cy="150" r="56" fill="var(--green-800)" stroke="var(--green-300)" stroke-width="2"/>' +
        '<circle cx="215" cy="150" r="18" fill="var(--green-500)" opacity="0.85"/>' +
        '<ellipse cx="400" cy="95" rx="30" ry="15" fill="var(--science-blue-deep)" stroke="var(--science-blue)" stroke-width="1.5"/>' +
        '<ellipse cx="415" cy="205" rx="28" ry="14" fill="var(--science-blue-deep)" stroke="var(--science-blue)" stroke-width="1.5"/>' +
        '<circle cx="330" cy="215" r="4" fill="var(--green-300)"/>' +
        '<circle cx="350" cy="230" r="4" fill="var(--green-300)"/>' +
        '<circle cx="155" cy="235" r="4" fill="var(--green-300)"/>' +
        '<circle cx="140" cy="70" r="4" fill="var(--green-300)"/>' +
        '</svg>',
      leyenda: [
        { color: 'var(--green-400)', texto: 'Membrana celular — controla qué entra y qué sale' },
        { color: 'var(--green-500)', texto: 'Núcleo — guarda el ADN y dirige la célula' },
        { color: 'var(--science-blue)', texto: 'Mitocondrias — producen la energía de la célula' },
        { color: 'var(--green-300)', texto: 'Citoplasma — el medio donde ocurre todo lo demás' }
      ]
    },

    'bio-2': {
      titulo: 'La pirámide de un ecosistema',
      svg: '<svg viewBox="0 0 600 300" role="img" aria-label="Pirámide trófica con productores, consumidores y descomponedores">' +
        '<polygon points="300,20 190,110 410,110" fill="var(--green-500)" opacity="0.85"/>' +
        '<polygon points="190,115 410,115 340,190 260,190" fill="var(--green-600)" opacity="0.85"/>' +
        '<polygon points="260,195 340,195 300,260" fill="var(--green-800)" opacity="0.9"/>' +
        '<text x="300" y="70" text-anchor="middle" fill="var(--bg-deep)" font-size="13" font-family="var(--font-display)" font-weight="600">Consumidores III</text>' +
        '<text x="300" y="158" text-anchor="middle" fill="var(--bg-deep)" font-size="13" font-family="var(--font-display)" font-weight="600">Consumidores I y II</text>' +
        '<text x="300" y="235" text-anchor="middle" fill="var(--bg-deep)" font-size="12" font-family="var(--font-display)" font-weight="600">Productores</text>' +
        '<path d="M 440 250 C 500 250 500 60 460 40" fill="none" stroke="var(--green-300)" stroke-width="2" stroke-dasharray="5 5" marker-end="url(#flechaVerde)"/>' +
        '<text x="520" y="150" text-anchor="middle" fill="var(--ink-300)" font-size="11" font-family="var(--font-display)">Descomponedores reciclan nutrientes</text>' +
        '<defs><marker id="flechaVerde" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 Z" fill="var(--green-300)"/></marker></defs>' +
        '</svg>'
    },

    'bio-3': {
      titulo: 'Tres sistemas, un mismo cuerpo',
      svg: '<svg viewBox="0 0 600 280" role="img" aria-label="Relación entre el sistema respiratorio, circulatorio y digestivo">' +
        '<circle cx="150" cy="90" r="60" fill="var(--glass-bg)" stroke="var(--green-400)" stroke-width="2"/>' +
        '<circle cx="450" cy="90" r="60" fill="var(--glass-bg)" stroke="var(--green-400)" stroke-width="2"/>' +
        '<circle cx="300" cy="210" r="60" fill="var(--glass-bg)" stroke="var(--green-400)" stroke-width="2"/>' +
        '<text x="150" y="85" text-anchor="middle" fill="var(--ink-100)" font-size="13" font-family="var(--font-display)">Respiratorio</text>' +
        '<text x="150" y="103" text-anchor="middle" fill="var(--green-300)" font-size="11" font-family="var(--font-display)">(oxígeno)</text>' +
        '<text x="450" y="85" text-anchor="middle" fill="var(--ink-100)" font-size="13" font-family="var(--font-display)">Circulatorio</text>' +
        '<text x="450" y="103" text-anchor="middle" fill="var(--green-300)" font-size="11" font-family="var(--font-display)">(transporte)</text>' +
        '<text x="300" y="205" text-anchor="middle" fill="var(--ink-100)" font-size="13" font-family="var(--font-display)">Digestivo</text>' +
        '<text x="300" y="223" text-anchor="middle" fill="var(--green-300)" font-size="11" font-family="var(--font-display)">(nutrientes)</text>' +
        '<line x1="205" y1="105" x2="395" y2="105" stroke="var(--green-300)" stroke-width="2" marker-end="url(#fB)"/>' +
        '<line x1="405" y1="140" x2="330" y2="175" stroke="var(--green-300)" stroke-width="2" marker-end="url(#fB)"/>' +
        '<line x1="270" y1="175" x2="195" y2="140" stroke="var(--green-300)" stroke-width="2" marker-end="url(#fB)"/>' +
        '<defs><marker id="fB" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 Z" fill="var(--green-300)"/></marker></defs>' +
        '</svg>'
    },

    'qui-1': {
      titulo: 'Los tres estados de la materia',
      svg: '<svg viewBox="0 0 600 260" role="img" aria-label="Comparación entre sólido, líquido y gaseoso">' +
        '<rect x="30" y="40" width="160" height="160" rx="14" fill="var(--glass-bg)" stroke="var(--glass-border-strong)"/>' +
        '<rect x="220" y="40" width="160" height="160" rx="14" fill="var(--glass-bg)" stroke="var(--glass-border-strong)"/>' +
        '<rect x="410" y="40" width="160" height="160" rx="14" fill="var(--glass-bg)" stroke="var(--glass-border-strong)"/>' +
        '<g fill="var(--green-400)">' +
          '<circle cx="60" cy="70" r="7"/><circle cx="90" cy="70" r="7"/><circle cx="120" cy="70" r="7"/><circle cx="150" cy="70" r="7"/>' +
          '<circle cx="60" cy="100" r="7"/><circle cx="90" cy="100" r="7"/><circle cx="120" cy="100" r="7"/><circle cx="150" cy="100" r="7"/>' +
          '<circle cx="60" cy="130" r="7"/><circle cx="90" cy="130" r="7"/><circle cx="120" cy="130" r="7"/><circle cx="150" cy="130" r="7"/>' +
        '</g>' +
        '<g fill="var(--science-blue)">' +
          '<circle cx="250" cy="80" r="7"/><circle cx="280" cy="90" r="7"/><circle cx="315" cy="75" r="7"/>' +
          '<circle cx="260" cy="120" r="7"/><circle cx="300" cy="130" r="7"/><circle cx="340" cy="110" r="7"/>' +
          '<circle cx="280" cy="160" r="7"/><circle cx="320" cy="155" r="7"/>' +
        '</g>' +
        '<g fill="var(--green-200)">' +
          '<circle cx="440" cy="60" r="6"/><circle cx="480" cy="100" r="6"/><circle cx="520" cy="55" r="6"/>' +
          '<circle cx="450" cy="140" r="6"/><circle cx="550" cy="130" r="6"/><circle cx="500" cy="170" r="6"/>' +
          '<circle cx="430" cy="180" r="6"/><circle cx="545" cy="70" r="6"/>' +
        '</g>' +
        '<text x="110" y="225" text-anchor="middle" fill="var(--ink-100)" font-size="14" font-family="var(--font-display)" font-weight="600">Sólido</text>' +
        '<text x="300" y="225" text-anchor="middle" fill="var(--ink-100)" font-size="14" font-family="var(--font-display)" font-weight="600">Líquido</text>' +
        '<text x="490" y="225" text-anchor="middle" fill="var(--ink-100)" font-size="14" font-family="var(--font-display)" font-weight="600">Gaseoso</text>' +
        '<text x="110" y="245" text-anchor="middle" fill="var(--ink-500)" font-size="11" font-family="var(--font-display)">Partículas fijas</text>' +
        '<text x="300" y="245" text-anchor="middle" fill="var(--ink-500)" font-size="11" font-family="var(--font-display)">Partículas unidas, libres</text>' +
        '<text x="490" y="245" text-anchor="middle" fill="var(--ink-500)" font-size="11" font-family="var(--font-display)">Partículas separadas</text>' +
        '</svg>'
    },

    'qui-2': {
      titulo: 'El modelo del átomo',
      svg: '<svg viewBox="0 0 600 300" role="img" aria-label="Modelo de un átomo con núcleo y electrones en órbita">' +
        '<ellipse cx="300" cy="150" rx="240" ry="90" fill="none" stroke="var(--glass-border-strong)" stroke-width="1.5"/>' +
        '<ellipse cx="300" cy="150" rx="240" ry="90" fill="none" stroke="var(--glass-border-strong)" stroke-width="1.5" transform="rotate(60 300 150)"/>' +
        '<ellipse cx="300" cy="150" rx="240" ry="90" fill="none" stroke="var(--glass-border-strong)" stroke-width="1.5" transform="rotate(120 300 150)"/>' +
        '<circle cx="300" cy="150" r="38" fill="var(--green-700)" stroke="var(--green-300)" stroke-width="2"/>' +
        '<text x="300" y="155" text-anchor="middle" fill="var(--bg-deep)" font-size="12" font-family="var(--font-display)" font-weight="600">p+ n</text>' +
        '<circle cx="540" cy="150" r="7" fill="var(--science-blue)"/>' +
        '<circle cx="150" cy="60" r="7" fill="var(--science-blue)"/>' +
        '<circle cx="420" cy="225" r="7" fill="var(--science-blue)"/>' +
        '</svg>',
      leyenda: [
        { color: 'var(--green-700)', texto: 'Núcleo — protones (carga positiva) y neutrones (sin carga)' },
        { color: 'var(--science-blue)', texto: 'Electrones — carga negativa, giran alrededor del núcleo' }
      ]
    },

    'qui-3': {
      titulo: 'Cambio físico vs. cambio químico',
      svg: '<svg viewBox="0 0 600 240" role="img" aria-label="Comparación entre un cambio físico y un cambio químico">' +
        '<rect x="20" y="20" width="270" height="200" rx="16" fill="rgba(119,255,51,0.07)" stroke="var(--green-400)" stroke-width="1.5"/>' +
        '<rect x="310" y="20" width="270" height="200" rx="16" fill="rgba(240,162,98,0.08)" stroke="var(--danger)" stroke-width="1.5"/>' +
        '<text x="155" y="50" text-anchor="middle" fill="var(--green-300)" font-size="14" font-family="var(--font-display)" font-weight="600">Cambio físico</text>' +
        '<text x="445" y="50" text-anchor="middle" fill="var(--danger)" font-size="14" font-family="var(--font-display)" font-weight="600">Cambio químico</text>' +
        '<rect x="80" y="90" width="45" height="45" fill="var(--green-200)" opacity="0.9"/>' +
        '<path d="M150,112 L195,112" stroke="var(--ink-300)" stroke-width="2" marker-end="url(#fq1)"/>' +
        '<ellipse cx="230" cy="112" rx="26" ry="16" fill="var(--science-blue)" opacity="0.8"/>' +
        '<text x="155" y="165" text-anchor="middle" fill="var(--ink-300)" font-size="11" font-family="var(--font-display)">Hielo → agua (mismo material)</text>' +
        '<rect x="360" y="90" width="45" height="45" fill="var(--ink-300)" opacity="0.85"/>' +
        '<path d="M420,112 L465,112" stroke="var(--ink-300)" stroke-width="2" marker-end="url(#fq1)"/>' +
        '<path d="M485,95 L500,112 L485,130 L470,112 Z" fill="var(--danger)" opacity="0.85"/>' +
        '<text x="470" y="165" text-anchor="middle" fill="var(--ink-300)" font-size="11" font-family="var(--font-display)">Papel → ceniza (nueva sustancia)</text>' +
        '<defs><marker id="fq1" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 Z" fill="var(--ink-300)"/></marker></defs>' +
        '</svg>'
    },

    'fis-1': {
      titulo: 'Distancia vs. desplazamiento',
      svg: '<svg viewBox="0 0 600 260" role="img" aria-label="Comparación entre distancia recorrida y desplazamiento">' +
        '<path d="M 60 200 Q 180 40 300 160 T 540 90" fill="none" stroke="var(--science-blue)" stroke-width="3"/>' +
        '<line x1="60" y1="200" x2="540" y2="90" stroke="var(--green-400)" stroke-width="3" stroke-dasharray="8 6"/>' +
        '<circle cx="60" cy="200" r="8" fill="var(--green-300)"/>' +
        '<circle cx="540" cy="90" r="8" fill="var(--green-300)"/>' +
        '<text x="55" y="230" text-anchor="middle" fill="var(--ink-100)" font-size="13" font-family="var(--font-display)">A</text>' +
        '<text x="545" y="70" text-anchor="middle" fill="var(--ink-100)" font-size="13" font-family="var(--font-display)">B</text>' +
        '<text x="330" y="55" text-anchor="middle" fill="var(--science-blue)" font-size="12" font-family="var(--font-display)">Distancia (recorrido total)</text>' +
        '<text x="300" y="245" text-anchor="middle" fill="var(--green-300)" font-size="12" font-family="var(--font-display)">Desplazamiento (línea recta con dirección)</text>' +
        '</svg>'
    },

    'fis-2': {
      titulo: 'Fuerzas actuando sobre un objeto',
      svg: '<svg viewBox="0 0 600 300" role="img" aria-label="Diagrama de fuerzas sobre una caja: gravedad, normal, fricción y fuerza aplicada">' +
        '<rect x="255" y="130" width="90" height="70" rx="8" fill="var(--glass-bg)" stroke="var(--green-300)" stroke-width="2"/>' +
        '<line x1="300" y1="130" x2="300" y2="50" stroke="var(--science-blue)" stroke-width="3" marker-end="url(#fa-normal)"/>' +
        '<text x="300" y="40" text-anchor="middle" fill="var(--science-blue)" font-size="12" font-family="var(--font-display)">Normal</text>' +
        '<line x1="300" y1="200" x2="300" y2="270" stroke="var(--danger)" stroke-width="3" marker-end="url(#fa-grav)"/>' +
        '<text x="300" y="288" text-anchor="middle" fill="var(--danger)" font-size="12" font-family="var(--font-display)">Gravedad</text>' +
        '<line x1="255" y1="165" x2="185" y2="165" stroke="var(--green-400)" stroke-width="3" marker-end="url(#fa-fric)"/>' +
        '<text x="140" y="160" text-anchor="middle" fill="var(--green-400)" font-size="12" font-family="var(--font-display)">Fricción</text>' +
        '<line x1="345" y1="165" x2="440" y2="165" stroke="var(--green-200)" stroke-width="3" marker-end="url(#fa-apl)"/>' +
        '<text x="490" y="160" text-anchor="middle" fill="var(--green-200)" font-size="12" font-family="var(--font-display)">Fuerza aplicada</text>' +
        '<defs>' +
          '<marker id="fa-normal" markerWidth="9" markerHeight="9" refX="4.5" refY="4.5" orient="auto"><path d="M0,0 L9,4.5 L0,9 Z" fill="var(--science-blue)"/></marker>' +
          '<marker id="fa-grav" markerWidth="9" markerHeight="9" refX="4.5" refY="4.5" orient="auto"><path d="M0,0 L9,4.5 L0,9 Z" fill="var(--danger)"/></marker>' +
          '<marker id="fa-fric" markerWidth="9" markerHeight="9" refX="4.5" refY="4.5" orient="auto"><path d="M0,0 L9,4.5 L0,9 Z" fill="var(--green-400)"/></marker>' +
          '<marker id="fa-apl" markerWidth="9" markerHeight="9" refX="4.5" refY="4.5" orient="auto"><path d="M0,0 L9,4.5 L0,9 Z" fill="var(--green-200)"/></marker>' +
        '</defs>' +
        '</svg>'
    },

    'fis-3': {
      titulo: 'Energía potencial y cinética',
      svg: '<svg viewBox="0 0 600 260" role="img" aria-label="Transformación de energía potencial en energía cinética en una caída">' +
        '<path d="M 60 40 Q 60 220 540 220" fill="none" stroke="var(--glass-border-strong)" stroke-width="3"/>' +
        '<circle cx="60" cy="40" r="16" fill="var(--green-300)"/>' +
        '<circle cx="470" cy="212" r="16" fill="var(--science-blue)"/>' +
        '<text x="60" y="15" text-anchor="middle" fill="var(--green-300)" font-size="12" font-family="var(--font-display)">Energía potencial máxima</text>' +
        '<text x="480" y="245" text-anchor="middle" fill="var(--science-blue)" font-size="12" font-family="var(--font-display)">Energía cinética máxima</text>' +
        '<line x1="60" y1="60" x2="60" y2="200" stroke="var(--ink-700)" stroke-width="1" stroke-dasharray="4 4"/>' +
        '</svg>'
    },

    'tie-1': {
      titulo: 'Las capas de la Tierra',
      svg: '<svg viewBox="0 0 600 300" role="img" aria-label="Corte transversal de la Tierra mostrando corteza, manto y núcleo">' +
        '<circle cx="300" cy="150" r="140" fill="var(--green-900)" stroke="var(--green-400)" stroke-width="2"/>' +
        '<circle cx="300" cy="150" r="100" fill="var(--green-700)"/>' +
        '<circle cx="300" cy="150" r="55" fill="var(--science-blue-deep)"/>' +
        '<circle cx="300" cy="150" r="24" fill="var(--science-blue)"/>' +
        '</svg>',
      leyenda: [
        { color: 'var(--green-900)', texto: 'Corteza — la capa externa y delgada donde vivimos' },
        { color: 'var(--green-700)', texto: 'Manto — roca semisólida que fluye muy lentamente' },
        { color: 'var(--science-blue-deep)', texto: 'Núcleo externo — hierro y níquel líquidos; genera el campo magnético' },
        { color: 'var(--science-blue)', texto: 'Núcleo interno — esfera sólida a temperaturas extremas' }
      ]
    },

    'tie-2': {
      titulo: 'Dos orígenes de los fenómenos naturales',
      svg: '<svg viewBox="0 0 600 240" role="img" aria-label="Fenómenos de origen geológico frente a fenómenos de origen atmosférico">' +
        '<rect x="20" y="20" width="270" height="200" rx="16" fill="rgba(119,255,51,0.07)" stroke="var(--green-400)" stroke-width="1.5"/>' +
        '<rect x="310" y="20" width="270" height="200" rx="16" fill="rgba(85,199,231,0.08)" stroke="var(--science-blue)" stroke-width="1.5"/>' +
        '<text x="155" y="50" text-anchor="middle" fill="var(--green-300)" font-size="13" font-family="var(--font-display)" font-weight="600">Origen geológico</text>' +
        '<text x="445" y="50" text-anchor="middle" fill="var(--science-blue)" font-size="13" font-family="var(--font-display)" font-weight="600">Origen atmosférico</text>' +
        '<path d="M60,140 L100,90 L130,150 L160,80 L200,140" fill="none" stroke="var(--green-300)" stroke-width="3"/>' +
        '<text x="155" y="185" text-anchor="middle" fill="var(--ink-300)" font-size="11" font-family="var(--font-display)">Terremotos y volcanes</text>' +
        '<path d="M 400 130 a 40 40 0 1 0 80 5 a 25 25 0 1 1 -40 -5" fill="none" stroke="var(--science-blue)" stroke-width="3"/>' +
        '<text x="445" y="185" text-anchor="middle" fill="var(--ink-300)" font-size="11" font-family="var(--font-display)">Huracanes y tornados</text>' +
        '</svg>'
    },

    'tie-3': {
      titulo: 'Cómo funciona el efecto invernadero',
      svg: '<svg viewBox="0 0 600 280" role="img" aria-label="Diagrama del efecto invernadero: radiación solar entrando y calor atrapado por la atmósfera">' +
        '<circle cx="60" cy="50" r="30" fill="var(--green-200)" opacity="0.9"/>' +
        '<rect x="20" y="110" width="560" height="24" rx="12" fill="var(--science-blue-deep)" opacity="0.6"/>' +
        '<text x="300" y="127" text-anchor="middle" fill="var(--ink-100)" font-size="11" font-family="var(--font-display)">Gases de efecto invernadero</text>' +
        '<rect x="20" y="230" width="560" height="18" rx="9" fill="var(--green-800)"/>' +
        '<line x1="130" y1="70" x2="200" y2="115" stroke="var(--green-200)" stroke-width="2.5" marker-end="url(#fs1)"/>' +
        '<line x1="220" y1="134" x2="260" y2="228" stroke="var(--green-200)" stroke-width="2.5" marker-end="url(#fs1)"/>' +
        '<line x1="380" y1="228" x2="420" y2="134" stroke="var(--danger)" stroke-width="2.5" marker-end="url(#fs2)"/>' +
        '<line x1="440" y1="115" x2="480" y2="70" stroke="var(--danger)" stroke-width="2.5" marker-end="url(#fs2)" stroke-dasharray="5 4"/>' +
        '<text x="150" y="95" text-anchor="middle" fill="var(--green-200)" font-size="11" font-family="var(--font-display)">Radiación solar</text>' +
        '<text x="470" y="95" text-anchor="middle" fill="var(--danger)" font-size="11" font-family="var(--font-display)">Calor atrapado</text>' +
        '<defs>' +
          '<marker id="fs1" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 Z" fill="var(--green-200)"/></marker>' +
          '<marker id="fs2" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 Z" fill="var(--danger)"/></marker>' +
        '</defs>' +
        '</svg>'
    }
  };

  /* ---------------------------------------------------------------
     1C. PERSONAJES — mensajes cortos de bienvenida por materia
  --------------------------------------------------------------- */

  const MASCOTAS = {
    biologia: { nombre: 'Cel', icono: 'fa-dna', texto: '¡Hola! Soy Cel 🧬 Vamos a descubrir la vida.' },
    quimica: { nombre: 'Neón', icono: 'fa-flask-vial', texto: '¡Hola! Soy Neón ⚗️ Hoy mezclamos ciencia y diversión.' },
    fisica: { nombre: 'Rayo', icono: 'fa-bolt', texto: '¡Hola! Soy Rayo ⚡ Prepárate para el movimiento.' },
    tierra: { nombre: 'Gaia', icono: 'fa-earth-americas', texto: '¡Hola! Soy Gaia 🌎 Exploremos nuestro planeta.' }
  };

  /* ---------------------------------------------------------------
     1D. MINI-JUEGOS — banco corto de preguntas por materia
  --------------------------------------------------------------- */

  const PREGUNTAS = {
    biologia: [
      { pregunta: '¿Qué parte de la célula guarda el ADN?', opciones: ['Núcleo', 'Membrana', 'Mitocondria', 'Pared celular'], correcta: 0, explicacion: 'El núcleo guarda el ADN y dirige la célula.' },
      { pregunta: '¿Qué producen las mitocondrias?', opciones: ['Agua', 'Energía', 'ADN', 'Oxígeno'], correcta: 1, explicacion: 'Las mitocondrias son la central de energía de la célula.' },
      { pregunta: '¿Quién produce su propio alimento?', opciones: ['Consumidores', 'Descomponedores', 'Productores', 'Depredadores'], correcta: 2, explicacion: 'Los productores fabrican su alimento por fotosíntesis.' },
      { pregunta: '¿Qué sistema transporta oxígeno a las células?', opciones: ['Digestivo', 'Circulatorio', 'Nervioso', 'Respiratorio'], correcta: 1, explicacion: 'El sistema circulatorio reparte oxígeno por todo el cuerpo.' },
      { pregunta: '¿Qué tiene la célula vegetal y la animal no?', opciones: ['Núcleo', 'Membrana', 'Pared celular', 'Citoplasma'], correcta: 2, explicacion: 'La pared celular le da soporte extra a la célula vegetal.' }
    ],
    quimica: [
      { pregunta: '¿En qué estado las partículas están más ordenadas?', opciones: ['Sólido', 'Líquido', 'Gaseoso', 'Plasma'], correcta: 0, explicacion: 'En el sólido las partículas están fijas y ordenadas.' },
      { pregunta: '¿Qué partícula tiene carga negativa?', opciones: ['Protón', 'Neutrón', 'Electrón', 'Núcleo'], correcta: 2, explicacion: 'El electrón tiene carga negativa y gira alrededor del núcleo.' },
      { pregunta: '¿Qué define el número atómico?', opciones: ['Los electrones', 'Los protones', 'Los neutrones', 'La masa'], correcta: 1, explicacion: 'El número de protones define el elemento.' },
      { pregunta: 'Derretir hielo es un cambio…', opciones: ['Químico', 'Físico', 'Nuclear', 'Biológico'], correcta: 1, explicacion: 'Sigue siendo agua: es un cambio físico.' },
      { pregunta: 'Quemar papel es un cambio…', opciones: ['Físico', 'Reversible', 'Químico', 'Neutro'], correcta: 2, explicacion: 'Se forma una sustancia nueva: ceniza. Es un cambio químico.' }
    ],
    fisica: [
      { pregunta: 'Velocidad = desplazamiento ÷ …', opciones: ['Masa', 'Fuerza', 'Tiempo', 'Distancia'], correcta: 2, explicacion: 'La velocidad se calcula con el tiempo empleado.' },
      { pregunta: '¿Qué ley explica la inercia?', opciones: ['Primera ley de Newton', 'Segunda ley de Newton', 'Tercera ley de Newton', 'Ley de gravedad'], correcta: 0, explicacion: 'La primera ley de Newton describe la inercia.' },
      { pregunta: 'La energía del movimiento se llama…', opciones: ['Potencial', 'Cinética', 'Térmica', 'Química'], correcta: 1, explicacion: 'La energía cinética depende del movimiento.' },
      { pregunta: '¿Qué fuerza te frena al caminar?', opciones: ['Gravedad', 'Normal', 'Fricción', 'Elástica'], correcta: 2, explicacion: 'La fricción se opone al movimiento entre superficies.' },
      { pregunta: 'La energía no se crea ni se…', opciones: ['Mueve', 'Cae', 'Destruye', 'Transforma'], correcta: 2, explicacion: 'La energía solo se transforma, nunca se destruye.' }
    ],
    tierra: [
      { pregunta: '¿Qué capa de la Tierra es líquida?', opciones: ['Corteza', 'Núcleo externo', 'Núcleo interno', 'Manto'], correcta: 1, explicacion: 'El núcleo externo es de hierro y níquel líquidos.' },
      { pregunta: 'Las placas tectónicas se mueven sobre…', opciones: ['El núcleo', 'La corteza', 'El manto', 'El aire'], correcta: 2, explicacion: 'El manto fluye lentamente y mueve las placas.' },
      { pregunta: '¿Qué fenómeno es de origen atmosférico?', opciones: ['Volcán', 'Terremoto', 'Huracán', 'Tsunami'], correcta: 2, explicacion: 'Los huracanes nacen de la dinámica de la atmósfera.' },
      { pregunta: 'El efecto invernadero atrapa…', opciones: ['Agua', 'Calor', 'Oxígeno', 'Viento'], correcta: 1, explicacion: 'Los gases de efecto invernadero retienen el calor solar.' },
      { pregunta: '¿Qué causa más el cambio climático?', opciones: ['La lluvia', 'Las mareas', 'Quema de combustibles', 'El viento'], correcta: 2, explicacion: 'Quemar combustibles fósiles acelera el calentamiento global.' }
    ]
  };

  /* ---------------------------------------------------------------
     2. ESTADO Y PERSISTENCIA (LocalStorage)
  --------------------------------------------------------------- */

  function cargarUsuarios() {
    try {
      const raw = localStorage.getItem(USERS_KEY);
      return raw ? JSON.parse(raw) : [];
    } catch (err) {
      return [];
    }
  }

  function guardarUsuarios(lista) {
    try {
      localStorage.setItem(USERS_KEY, JSON.stringify(lista));
      return true;
    } catch (err) {
      return false;
    }
  }

  function obtenerCorreoSesion() {
    try {
      return localStorage.getItem(SESSION_KEY);
    } catch (err) {
      return null;
    }
  }

  function guardarSesion(correo) {
    try {
      if (correo) localStorage.setItem(SESSION_KEY, correo);
      else localStorage.removeItem(SESSION_KEY);
    } catch (err) { /* noop */ }
  }

  function obtenerUsuarioActual() {
    const correo = obtenerCorreoSesion();
    if (!correo) return null;
    const usuarios = cargarUsuarios();
    return usuarios.find(function (u) { return u.correo.toLowerCase() === correo.toLowerCase(); }) || null;
  }

  const REGEX_CORREO = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  function registrarUsuario(nombre, correo, password) {
    nombre = (nombre || '').trim();
    correo = (correo || '').trim();
    if (!nombre) return { ok: false, mensaje: 'Escribe tu nombre.' };
    if (!REGEX_CORREO.test(correo)) return { ok: false, mensaje: 'Escribe un correo válido.' };
    if (!password || password.length < 4) return { ok: false, mensaje: 'La contraseña debe tener al menos 4 caracteres.' };

    const usuarios = cargarUsuarios();
    const existe = usuarios.some(function (u) { return u.correo.toLowerCase() === correo.toLowerCase(); });
    if (existe) return { ok: false, mensaje: 'Ya existe una cuenta con ese correo.' };

    usuarios.push({ nombre: nombre, correo: correo, password: password, creado: new Date().toISOString() });
    guardarUsuarios(usuarios);
    guardarSesion(correo);
    return { ok: true };
  }

  function iniciarSesion(correo, password) {
    correo = (correo || '').trim();
    const usuarios = cargarUsuarios();
    const usuario = usuarios.find(function (u) { return u.correo.toLowerCase() === correo.toLowerCase(); });
    if (!usuario) return { ok: false, mensaje: 'No existe una cuenta con ese correo.' };
    if (usuario.password !== password) return { ok: false, mensaje: 'Contraseña incorrecta.' };
    guardarSesion(usuario.correo);
    return { ok: true };
  }

  function cerrarSesion() {
    guardarSesion(null);
  }

  function claveProgreso() {
    const usuario = obtenerUsuarioActual();
    return STORAGE_KEY_BASE + (usuario ? '_' + usuario.correo.toLowerCase() : '_invitado');
  }

  function cargarProgreso() {
    try {
      const raw = localStorage.getItem(claveProgreso());
      if (!raw) return {};
      return JSON.parse(raw);
    } catch (err) {
      console.warn('No se pudo leer el progreso guardado:', err);
      return {};
    }
  }

  function guardarProgreso(progreso) {
    try {
      localStorage.setItem(claveProgreso(), JSON.stringify(progreso));
      return true;
    } catch (err) {
      console.warn('No se pudo guardar el progreso:', err);
      return false;
    }
  }

  let progreso = cargarProgreso(); // { 'bio-1': true, 'qui-2': true, ... }
  let materiaActiva = null;
  let leccionActivaId = null;

  /* ---------------------------------------------------------------
     3. REFERENCIAS AL DOM
  --------------------------------------------------------------- */

  const vistaHero = document.getElementById('vista-hero');
  const vistaMaterias = document.getElementById('vista-materias');
  const vistaLecciones = document.getElementById('vista-lecciones');
  const vistaContenido = document.getElementById('vista-contenido');
  const vistaProgresoGlobal = document.getElementById('vista-progreso-global');
  const vistaAuth = document.getElementById('vista-auth');
  const vistaPerfil = document.getElementById('vista-perfil');
  const vistaJuego = document.getElementById('vista-juego');

  const leccionesLista = document.getElementById('lecciones-lista');
  const contenidoLeccionEl = document.getElementById('contenido-leccion');

  const materiaActivaIcono = document.getElementById('materia-activa-icono');
  const materiaActivaNombre = document.getElementById('materia-activa-nombre');
  const materiaMascotTexto = document.getElementById('materia-mascot-texto');

  const progresoMateriaFill = document.getElementById('progreso-materia-fill');
  const progresoMateriaPorcentaje = document.getElementById('progreso-materia-porcentaje');

  const toastContainer = document.getElementById('toast-container');
  const lecturaProgresoFill = document.getElementById('lectura-progreso-fill');

  /* ---------------------------------------------------------------
     4B. BARRA DE PROGRESO DE LECTURA
  --------------------------------------------------------------- */

  function actualizarBarraLectura() {
    if (!lecturaProgresoFill) return;

    if (vistaContenido.hidden) {
      lecturaProgresoFill.style.width = '0%';
      return;
    }

    const alturaTotal = document.documentElement.scrollHeight - window.innerHeight;
    const scrollActual = window.scrollY;
    const pctLeido = alturaTotal > 0 ? Math.min(100, Math.max(0, (scrollActual / alturaTotal) * 100)) : 0;
    lecturaProgresoFill.style.width = pctLeido + '%';
  }

  window.addEventListener('scroll', actualizarBarraLectura, { passive: true });
  window.addEventListener('resize', actualizarBarraLectura);

  /* ---------------------------------------------------------------
     4. FUNCIONES DE CÁLCULO DE PROGRESO
  --------------------------------------------------------------- */

  function contarCompletadasEnMateria(materiaKey) {
    const materia = DATA[materiaKey];
    return materia.lecciones.filter(function (l) {
      return progreso[l.id];
    }).length;
  }

  function contarCompletadasTotal() {
    let total = 0;
    Object.keys(DATA).forEach(function (key) {
      total += contarCompletadasEnMateria(key);
    });
    return total;
  }

  function porcentaje(completadas, total) {
    if (total === 0) return 0;
    return Math.round((completadas / total) * 100);
  }

  /* ---------------------------------------------------------------
     5. ACTUALIZACIÓN DE INTERFAZ DE PROGRESO
  --------------------------------------------------------------- */

  function actualizarProgresoGlobalUI() {
    const completadas = contarCompletadasTotal();
    const pct = porcentaje(completadas, TOTAL_LECCIONES);

    // Anillo del hero
    const miniValue = document.getElementById('mini-ring-value');
    const miniFill = document.getElementById('mini-ring-fill');
    const miniDetail = document.getElementById('mini-progress-detail');
    const circunferencia = 169.6;

    if (miniValue) miniValue.textContent = pct + '%';
    if (miniFill) miniFill.style.strokeDashoffset = circunferencia - (circunferencia * pct) / 100;
    if (miniDetail) miniDetail.textContent = completadas + ' de ' + TOTAL_LECCIONES + ' lecciones completadas';

    // Tarjetas de materias
    Object.keys(DATA).forEach(function (key) {
      const completadasMateria = contarCompletadasEnMateria(key);
      const pctMateria = porcentaje(completadasMateria, DATA[key].lecciones.length);
      const tag = document.querySelector('[data-progress-tag="' + key + '"]');
      if (tag) tag.textContent = pctMateria + '% completado';
    });

    // Sección de progreso global
    const resumenPorcentaje = document.getElementById('resumen-porcentaje');
    const resumenDetalle = document.getElementById('resumen-detalle');
    const progresoGlobalFill = document.getElementById('progreso-global-fill');

    if (resumenPorcentaje) resumenPorcentaje.textContent = pct + '%';
    if (resumenDetalle) resumenDetalle.textContent = completadas + ' de ' + TOTAL_LECCIONES + ' lecciones';
    if (progresoGlobalFill) progresoGlobalFill.style.width = pct + '%';

    renderProgresoGlobalMaterias('progreso-global-materias');

    // Si el perfil está visible, refrescarlo también
    if (!vistaPerfil.hidden) {
      renderProgresoGlobalMaterias('perfil-materias');
    }

    // Si hay materia activa, refrescar su barra también
    if (materiaActiva) {
      actualizarProgresoMateriaUI(materiaActiva);
    }
  }

  function renderProgresoGlobalMaterias(contenedorId) {
    const contenedor = document.getElementById(contenedorId);
    if (!contenedor) return;
    contenedor.innerHTML = '';

    Object.keys(DATA).forEach(function (key) {
      const materia = DATA[key];
      const completadas = contarCompletadasEnMateria(key);
      const pct = porcentaje(completadas, materia.lecciones.length);

      const item = document.createElement('div');
      item.className = 'progreso-materia-item';
      item.innerHTML =
        '<div class="progreso-materia-item-head">' +
          '<span><i class="fa-solid ' + materia.icono + '"></i> ' + materia.nombre + '</span>' +
          '<span>' + pct + '%</span>' +
        '</div>' +
        '<div class="progreso-barra">' +
          '<div class="progreso-barra-fill" style="width:' + pct + '%"></div>' +
        '</div>';
      contenedor.appendChild(item);
    });
  }

  function actualizarProgresoMateriaUI(materiaKey) {
    const completadas = contarCompletadasEnMateria(materiaKey);
    const total = DATA[materiaKey].lecciones.length;
    const pct = porcentaje(completadas, total);

    if (progresoMateriaFill) progresoMateriaFill.style.width = pct + '%';
    if (progresoMateriaPorcentaje) progresoMateriaPorcentaje.textContent = pct + '%';
  }

  /* ---------------------------------------------------------------
     6. NAVEGACIÓN ENTRE VISTAS
  --------------------------------------------------------------- */

  function ocultarTodasLasVistas() {
    vistaHero.hidden = true;
    vistaMaterias.hidden = true;
    vistaProgresoGlobal.hidden = true;
    vistaLecciones.hidden = true;
    vistaContenido.hidden = true;
    vistaAuth.hidden = true;
    vistaPerfil.hidden = true;
    vistaJuego.hidden = true;
  }

  function mostrarVistaMaterias() {
    ocultarTodasLasVistas();
    vistaHero.hidden = false;
    vistaMaterias.hidden = false;
    vistaProgresoGlobal.hidden = false;
    materiaActiva = null;
    leccionActivaId = null;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function mostrarVistaLecciones(materiaKey) {
    materiaActiva = materiaKey;
    leccionActivaId = null;

    ocultarTodasLasVistas();
    vistaLecciones.hidden = false;

    const materia = DATA[materiaKey];
    const mascota = MASCOTAS[materiaKey];
    materiaActivaIcono.innerHTML = '<i class="fa-solid ' + materia.icono + '"></i>';
    materiaActivaNombre.textContent = materia.nombre;
    materiaMascotTexto.textContent = mascota ? mascota.texto : materia.descripcion;

    renderListaLecciones(materiaKey);
    actualizarProgresoMateriaUI(materiaKey);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function mostrarVistaContenido(materiaKey, leccionId) {
    materiaActiva = materiaKey;
    leccionActivaId = leccionId;

    ocultarTodasLasVistas();
    vistaContenido.hidden = false;

    renderContenidoLeccion(materiaKey, leccionId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function mostrarVistaAuth(modo) {
    ocultarTodasLasVistas();
    vistaAuth.hidden = false;
    cambiarTabAuth(modo || 'login');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function mostrarVistaPerfil() {
    const usuario = obtenerUsuarioActual();
    if (!usuario) {
      mostrarVistaAuth('login');
      return;
    }
    ocultarTodasLasVistas();
    vistaPerfil.hidden = false;
    renderPerfil(usuario);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  /* ---------------------------------------------------------------
     6B. CUENTA: NAVBAR, TABS Y PERFIL
  --------------------------------------------------------------- */

  function actualizarNavbarAuth() {
    const usuario = obtenerUsuarioActual();
    const guestEl = document.getElementById('navbar-auth-guest');
    const chipEl = document.getElementById('navbar-user-chip');
    if (!guestEl || !chipEl) return;

    if (usuario) {
      guestEl.hidden = true;
      chipEl.hidden = false;
      const inicial = usuario.nombre.trim().charAt(0).toUpperCase() || '?';
      document.getElementById('navbar-user-avatar').textContent = inicial;
      document.getElementById('navbar-user-name').textContent = usuario.nombre.trim().split(' ')[0];
    } else {
      guestEl.hidden = false;
      chipEl.hidden = true;
    }
  }

  function cambiarTabAuth(modo) {
    const tabLogin = document.getElementById('tab-login');
    const tabRegistro = document.getElementById('tab-registro');
    const formLogin = document.getElementById('form-login');
    const formRegistro = document.getElementById('form-registro');

    const esLogin = modo !== 'registro';
    tabLogin.classList.toggle('activo', esLogin);
    tabRegistro.classList.toggle('activo', !esLogin);
    formLogin.hidden = !esLogin;
    formRegistro.hidden = esLogin;
    document.getElementById('login-error').hidden = true;
    document.getElementById('registro-error').hidden = true;
  }

  function cambiarContextoUsuario() {
    progreso = cargarProgreso();
    actualizarProgresoGlobalUI();
    actualizarNavbarAuth();
    actualizarHeroMascota();
  }

  function actualizarHeroMascota() {
    const heroMascotTexto = document.getElementById('hero-mascot-texto');
    if (!heroMascotTexto) return;
    const usuario = obtenerUsuarioActual();
    if (usuario) {
      const nombre = usuario.nombre.trim().split(' ')[0];
      heroMascotTexto.textContent = '¡Hola de nuevo, ' + nombre + '! Soy Nova 🚀 ¿Seguimos explorando?';
    } else {
      heroMascotTexto.textContent = '¡Hola! Soy Nova, tu guía. ¿List@ para descubrir algo nuevo?';
    }
  }

  function renderPerfil(usuario) {
    const inicial = usuario.nombre.trim().charAt(0).toUpperCase() || '?';
    document.getElementById('perfil-avatar').textContent = inicial;
    document.getElementById('perfil-nombre').textContent = usuario.nombre;
    document.getElementById('perfil-correo').textContent = usuario.correo;

    let fechaTexto = 'Estudiante desde hoy';
    if (usuario.creado) {
      try {
        const fecha = new Date(usuario.creado);
        fechaTexto = 'Estudiante desde ' + fecha.toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' });
      } catch (err) { /* usar el valor por defecto */ }
    }
    document.getElementById('perfil-desde').innerHTML = '<i class="fa-solid fa-seedling"></i> ' + fechaTexto;

    const completadas = contarCompletadasTotal();
    const pct = porcentaje(completadas, TOTAL_LECCIONES);
    document.getElementById('perfil-stat-pct').textContent = pct + '%';
    document.getElementById('perfil-stat-lecciones').textContent = completadas + '/' + TOTAL_LECCIONES;

    const materiasKeys = Object.keys(DATA);
    const materiasDominadas = materiasKeys.filter(function (key) {
      return contarCompletadasEnMateria(key) === DATA[key].lecciones.length;
    }).length;
    document.getElementById('perfil-stat-materias').textContent = materiasDominadas + '/' + materiasKeys.length;

    renderProgresoGlobalMaterias('perfil-materias');
  }

  /* ---------------------------------------------------------------
     6C. MINI-JUEGO: PRACTICA POR MATERIA
  --------------------------------------------------------------- */

  let juegoMateriaActual = null;
  let juegoPreguntas = [];
  let juegoIndice = 0;
  let juegoPuntaje = 0;

  function mostrarVistaJuego(materiaKey) {
    const preguntas = PREGUNTAS[materiaKey];
    if (!preguntas || !preguntas.length) return;

    juegoMateriaActual = materiaKey;
    juegoPreguntas = preguntas;
    juegoIndice = 0;
    juegoPuntaje = 0;

    ocultarTodasLasVistas();
    vistaJuego.hidden = false;

    const materia = DATA[materiaKey];
    document.getElementById('juego-titulo').textContent = 'Practica: ' + materia.nombre;
    document.getElementById('juego-mascot-avatar').innerHTML = '<i class="fa-solid ' + materia.icono + '"></i>';

    document.getElementById('juego-resultado').hidden = true;
    document.getElementById('juego-pregunta-wrap').hidden = false;

    renderDotsJuego();
    renderPreguntaJuego();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function renderDotsJuego() {
    const cont = document.getElementById('juego-progreso-dots');
    cont.innerHTML = '';
    juegoPreguntas.forEach(function (_, i) {
      const dot = document.createElement('span');
      if (i < juegoIndice) dot.className = 'hecha';
      else if (i === juegoIndice) dot.className = 'activo';
      cont.appendChild(dot);
    });
  }

  function renderPreguntaJuego() {
    const pregunta = juegoPreguntas[juegoIndice];
    document.getElementById('juego-pregunta-texto').textContent = pregunta.pregunta;
    document.getElementById('juego-puntaje').innerHTML = '<i class="fa-solid fa-star"></i> ' + juegoPuntaje;

    const opcionesEl = document.getElementById('juego-opciones');
    opcionesEl.innerHTML = '';
    pregunta.opciones.forEach(function (texto, i) {
      const btn = document.createElement('button');
      btn.className = 'juego-opcion';
      btn.textContent = texto;
      btn.addEventListener('click', function () { seleccionarOpcionJuego(i); });
      opcionesEl.appendChild(btn);
    });

    document.getElementById('juego-feedback').hidden = true;
    renderDotsJuego();
  }

  function seleccionarOpcionJuego(indiceElegido) {
    const pregunta = juegoPreguntas[juegoIndice];
    const botones = document.querySelectorAll('#juego-opciones .juego-opcion');
    botones.forEach(function (b, i) {
      b.disabled = true;
      if (i === pregunta.correcta) b.classList.add('correcta');
      else if (i === indiceElegido) b.classList.add('incorrecta');
    });

    const acierto = indiceElegido === pregunta.correcta;
    if (acierto) juegoPuntaje++;

    const feedbackEl = document.getElementById('juego-feedback');
    const feedbackTexto = document.getElementById('juego-feedback-texto');
    feedbackTexto.textContent = (acierto ? '✅ ¡Correcto! ' : '❌ ') + pregunta.explicacion;
    feedbackEl.hidden = false;

    document.getElementById('juego-puntaje').innerHTML = '<i class="fa-solid fa-star"></i> ' + juegoPuntaje;
  }

  function siguientePreguntaJuego() {
    juegoIndice++;
    if (juegoIndice >= juegoPreguntas.length) {
      mostrarResultadoJuego();
    } else {
      renderPreguntaJuego();
    }
  }

  function mostrarResultadoJuego() {
    document.getElementById('juego-pregunta-wrap').hidden = true;
    const resultadoEl = document.getElementById('juego-resultado');
    resultadoEl.hidden = false;

    const total = juegoPreguntas.length;
    let emoji = '🌱';
    let titulo = '¡Sigue practicando!';
    if (juegoPuntaje === total) { emoji = '🏆'; titulo = '¡Puntaje perfecto!'; }
    else if (juegoPuntaje >= total * 0.6) { emoji = '🎉'; titulo = '¡Buen trabajo!'; }

    document.getElementById('juego-resultado-emoji').textContent = emoji;
    document.getElementById('juego-resultado-titulo').textContent = titulo;
    document.getElementById('juego-resultado-texto').textContent = 'Acertaste ' + juegoPuntaje + ' de ' + total + ' preguntas.';
  }

  /* ---------------------------------------------------------------
     7. RENDERIZADO DE LISTA DE LECCIONES
  --------------------------------------------------------------- */

  function renderListaLecciones(materiaKey) {
    const materia = DATA[materiaKey];
    leccionesLista.innerHTML = '';

    materia.lecciones.forEach(function (leccion, index) {
      const completada = !!progreso[leccion.id];

      const card = document.createElement('div');
      card.className = 'leccion-card' + (completada ? ' completada' : '');
      card.setAttribute('data-leccion', leccion.id);
      card.setAttribute('tabindex', '0');
      card.setAttribute('role', 'button');
      card.setAttribute('aria-label', 'Abrir lección: ' + leccion.titulo);

      card.innerHTML =
        '<div class="leccion-check">' +
          (completada ? '<i class="fa-solid fa-check"></i>' : (index + 1)) +
        '</div>' +
        '<div class="leccion-info">' +
          '<span class="leccion-numero">Lección ' + (index + 1) + '</span>' +
          '<h4>' + leccion.titulo + '</h4>' +
        '</div>' +
        '<i class="fa-solid fa-chevron-right leccion-arrow"></i>';

      card.addEventListener('click', function () {
        mostrarVistaContenido(materiaKey, leccion.id);
      });

      card.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          mostrarVistaContenido(materiaKey, leccion.id);
        }
      });

      leccionesLista.appendChild(card);
    });
  }

  /* ---------------------------------------------------------------
     8. RENDERIZADO DE CONTENIDO COMPLETO DE UNA LECCIÓN
  --------------------------------------------------------------- */

  function renderBloque(bloque) {
    switch (bloque.tipo) {
      case 'texto':
        return (
          '<h3>' + bloque.titulo + '</h3>' +
          '<p>' + bloque.parrafo + '</p>'
        );

      case 'lista':
        return (
          '<h3>' + bloque.titulo + '</h3>' +
          '<ul>' +
            bloque.items.map(function (item) { return '<li>' + item + '</li>'; }).join('') +
          '</ul>'
        );

      case 'concepto':
        return (
          '<div class="concepto-clave">' +
            '<span class="concepto-label"><i class="fa-solid fa-lightbulb"></i> Concepto clave</span>' +
            '<p>' + bloque.texto + '</p>' +
          '</div>'
        );

      case 'ejemplo':
        return (
          '<div class="ejemplo-box">' +
            '<span class="ejemplo-label"><i class="fa-solid fa-flask"></i> Ejemplo</span>' +
            '<p>' + bloque.texto + '</p>' +
          '</div>'
        );

      default:
        return '';
    }
  }

  function calcularTiempoLectura(leccion) {
    let texto = leccion.intro + ' ';
    leccion.bloques.forEach(function (b) {
      if (b.titulo) texto += b.titulo + ' ';
      if (b.parrafo) texto += b.parrafo + ' ';
      if (b.texto) texto += b.texto + ' ';
      if (b.items) texto += b.items.join(' ') + ' ';
    });
    const palabras = texto.trim().split(/\s+/).length;
    return Math.max(1, Math.round(palabras / 200));
  }

  function renderEsquemaLeccion(leccionId) {
    const esquema = ESQUEMAS[leccionId];
    if (!esquema) return '';

    let html = '<div class="esquema-panel">';
    html += '<div class="esquema-header"><i class="fa-solid fa-diagram-project"></i><span>' + esquema.titulo + '</span></div>';
    html += '<div class="esquema-dibujo">' + esquema.svg + '</div>';

    if (esquema.leyenda) {
      html += '<ul class="esquema-leyenda">';
      esquema.leyenda.forEach(function (item) {
        html += '<li><span class="leyenda-dot" style="background:' + item.color + '"></span>' + item.texto + '</li>';
      });
      html += '</ul>';
    }

    html += '</div>';
    return html;
  }

  function renderResumenMini(leccion) {
    if (!leccion.resumen || !leccion.resumen.length) return '';

    let html = '<div class="resumen-mini">';
    html += '<div class="resumen-mini-header"><i class="fa-solid fa-bookmark"></i> En resumen</div>';
    html += '<ul>';
    leccion.resumen.forEach(function (punto) {
      html += '<li><i class="fa-solid fa-check"></i><span>' + punto + '</span></li>';
    });
    html += '</ul>';
    html += '</div>';
    return html;
  }

  function renderContenidoLeccion(materiaKey, leccionId) {
    const materia = DATA[materiaKey];
    const index = materia.lecciones.findIndex(function (l) { return l.id === leccionId; });
    const leccion = materia.lecciones[index];
    const completada = !!progreso[leccion.id];
    const esUltima = index === materia.lecciones.length - 1;
    const minutos = calcularTiempoLectura(leccion);

    let html = '';
    html += '<div class="leccion-meta-row">';
    html += '<p class="leccion-eyebrow">' + materia.nombre + ' · Lección ' + (index + 1) + ' de ' + materia.lecciones.length + '</p>';
    html += '<span class="tiempo-lectura"><i class="fa-regular fa-clock"></i> ' + minutos + ' min de lectura</span>';
    html += '</div>';
    html += '<h2 class="titulo-leccion">' + leccion.titulo + '</h2>';
    html += '<p class="leccion-intro">' + leccion.intro + '</p>';

    html += renderEsquemaLeccion(leccion.id);

    leccion.bloques.forEach(function (bloque) {
      html += renderBloque(bloque);
    });

    html += renderResumenMini(leccion);

    html += '<div class="leccion-acciones">';
    html +=
      '<button class="btn-completar" id="btn-completar-leccion" ' +
      (completada ? 'disabled' : '') + '>' +
      '<i class="fa-solid ' + (completada ? 'fa-check' : 'fa-flag-checkered') + '"></i> ' +
      (completada ? 'Lección completada' : 'Completar lección') +
      '</button>';

    if (!esUltima) {
      html +=
        '<button class="btn-siguiente-leccion" id="btn-siguiente-leccion">' +
          'Siguiente lección <i class="fa-solid fa-arrow-right"></i>' +
        '</button>';
    }

    html += '</div>';

    contenidoLeccionEl.innerHTML = html;

    const btnCompletar = document.getElementById('btn-completar-leccion');
    if (btnCompletar) {
      btnCompletar.addEventListener('click', function () {
        completarLeccion(materiaKey, leccionId);
      });
    }

    const btnSiguiente = document.getElementById('btn-siguiente-leccion');
    if (btnSiguiente) {
      btnSiguiente.addEventListener('click', function () {
        const siguiente = materia.lecciones[index + 1];
        if (siguiente) {
          mostrarVistaContenido(materiaKey, siguiente.id);
        }
      });
    }

    actualizarBarraLectura();
  }

  /* ---------------------------------------------------------------
     9. COMPLETAR LECCIÓN
  --------------------------------------------------------------- */

  function completarLeccion(materiaKey, leccionId) {
    if (progreso[leccionId]) return; // ya estaba completada

    const materia = DATA[materiaKey];
    const leccion = materia.lecciones.find(function (l) { return l.id === leccionId; });

    progreso[leccionId] = true;
    const guardadoOk = guardarProgreso(progreso);

    // Actualizar botón con una pequeña animación
    const btnCompletar = document.getElementById('btn-completar-leccion');
    if (btnCompletar) {
      btnCompletar.disabled = true;
      btnCompletar.innerHTML = '<i class="fa-solid fa-check"></i> Lección completada';
      btnCompletar.style.transform = 'scale(0.96)';
      setTimeout(function () {
        btnCompletar.style.transform = '';
      }, 180);
    }

    actualizarProgresoGlobalUI();

    mostrarToast(
      'fa-check',
      '¡Lección completada!',
      '"' + leccion.titulo + '" — ' + materia.nombre
    );

    // Comprobar si se completó toda la materia (desbloqueo simbólico de logro)
    const completadasMateria = contarCompletadasEnMateria(materiaKey);
    if (completadasMateria === materia.lecciones.length) {
      setTimeout(function () {
        mostrarToast('fa-unlock', '¡Área dominada!', 'Completaste todo ' + materia.nombre);
      }, 900);
    }

    if (guardadoOk) {
      setTimeout(function () {
        mostrarToast('fa-cloud', 'Progreso guardado', 'Tu avance se guardó en este navegador');
      }, 1600);
    }
  }

  /* ---------------------------------------------------------------
     10. NOTIFICACIONES (TOASTS)
  --------------------------------------------------------------- */

  function mostrarToast(icono, titulo, mensaje) {
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML =
      '<span class="toast-icon"><i class="fa-solid ' + icono + '"></i></span>' +
      '<div class="toast-text">' +
        '<strong>' + titulo + '</strong>' +
        '<span>' + mensaje + '</span>' +
      '</div>';

    toastContainer.appendChild(toast);

    setTimeout(function () {
      toast.classList.add('saliendo');
      setTimeout(function () {
        toast.remove();
      }, 320);
    }, 3600);
  }

  /* ---------------------------------------------------------------
     11. REINICIAR PROGRESO
  --------------------------------------------------------------- */

  function reiniciarProgreso() {
    const confirmado = window.confirm('¿Seguro que quieres reiniciar todo tu progreso en Ciencias? Esta acción no se puede deshacer.');
    if (!confirmado) return;

    progreso = {};
    guardarProgreso(progreso);
    actualizarProgresoGlobalUI();

    if (materiaActiva) {
      renderListaLecciones(materiaActiva);
    }

    mostrarToast('fa-rotate-left', 'Progreso reiniciado', 'Puedes comenzar de nuevo cuando quieras');
  }

  /* ---------------------------------------------------------------
     12. EVENTOS INICIALES
  --------------------------------------------------------------- */

  function inicializarEventos() {
    // Tarjetas de materia -> botón "Explorar"
    document.querySelectorAll('.btn-explorar').forEach(function (btn) {
      btn.addEventListener('click', function (e) {
        e.stopPropagation();
        mostrarVistaLecciones(btn.getAttribute('data-materia'));
      });
    });

    // Tarjetas de materia -> botón "Jugar" (mini-juego directo)
    document.querySelectorAll('.btn-jugar[data-materia-jugar]').forEach(function (btn) {
      btn.addEventListener('click', function (e) {
        e.stopPropagation();
        mostrarVistaJuego(btn.getAttribute('data-materia-jugar'));
      });
    });

    // Tarjetas de materia -> clic en toda la tarjeta
    document.querySelectorAll('.materia-card').forEach(function (card) {
      card.addEventListener('click', function () {
        mostrarVistaLecciones(card.getAttribute('data-materia'));
      });
      card.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          mostrarVistaLecciones(card.getAttribute('data-materia'));
        }
      });
    });

    // Botón "Volver a las materias"
    document.getElementById('btn-volver-materias').addEventListener('click', mostrarVistaMaterias);

    // Botón "Volver a las lecciones"
    document.getElementById('btn-volver-lecciones').addEventListener('click', function () {
      vistaContenido.hidden = true;
      vistaLecciones.hidden = false;
      if (materiaActiva) {
        renderListaLecciones(materiaActiva);
        actualizarProgresoMateriaUI(materiaActiva);
      }
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Botón reiniciar progreso
    document.getElementById('btn-reset-progreso').addEventListener('click', reiniciarProgreso);

    // Logo y "Volver al inicio" siempre llevan a la vista de materias
    document.getElementById('brand-link').addEventListener('click', function (e) {
      e.preventDefault();
      mostrarVistaMaterias();
    });
    document.getElementById('btn-back-inicio').addEventListener('click', function (e) {
      e.preventDefault();
      mostrarVistaMaterias();
    });

    // Botón "Practicar" dentro de la vista de lecciones
    document.getElementById('btn-jugar-desde-lecciones').addEventListener('click', function () {
      if (materiaActiva) mostrarVistaJuego(materiaActiva);
    });

    // --- Cuenta: navbar, tabs y formularios ---

    document.getElementById('btn-abrir-login').addEventListener('click', function () {
      mostrarVistaAuth('login');
    });
    document.getElementById('btn-abrir-registro').addEventListener('click', function () {
      mostrarVistaAuth('registro');
    });
    document.getElementById('navbar-user-chip').addEventListener('click', mostrarVistaPerfil);
    document.getElementById('tab-login').addEventListener('click', function () { cambiarTabAuth('login'); });
    document.getElementById('tab-registro').addEventListener('click', function () { cambiarTabAuth('registro'); });

    document.getElementById('form-login').addEventListener('submit', function (e) {
      e.preventDefault();
      const correo = document.getElementById('login-correo').value.trim();
      const password = document.getElementById('login-password').value;
      const resultado = iniciarSesion(correo, password);
      const errorEl = document.getElementById('login-error');

      if (!resultado.ok) {
        errorEl.textContent = resultado.mensaje;
        errorEl.hidden = false;
        return;
      }
      errorEl.hidden = true;
      cambiarContextoUsuario();
      mostrarToast('fa-circle-check', '¡Bienvenido de nuevo!', 'Sesión iniciada correctamente');
      mostrarVistaPerfil();
    });

    document.getElementById('form-registro').addEventListener('submit', function (e) {
      e.preventDefault();
      const nombre = document.getElementById('registro-nombre').value.trim();
      const correo = document.getElementById('registro-correo').value.trim();
      const password = document.getElementById('registro-password').value;
      const resultado = registrarUsuario(nombre, correo, password);
      const errorEl = document.getElementById('registro-error');

      if (!resultado.ok) {
        errorEl.textContent = resultado.mensaje;
        errorEl.hidden = false;
        return;
      }
      errorEl.hidden = true;
      cambiarContextoUsuario();
      mostrarToast('fa-user-check', '¡Cuenta creada!', 'Bienvenido a InnovaBoard, ' + nombre.split(' ')[0]);
      mostrarVistaPerfil();
    });

    document.getElementById('btn-cerrar-sesion').addEventListener('click', function () {
      cerrarSesion();
      cambiarContextoUsuario();
      mostrarToast('fa-right-from-bracket', 'Sesión cerrada', 'Tu progreso como invitado se mantiene guardado');
      mostrarVistaMaterias();
    });

    // --- Mini-juego ---

    document.getElementById('btn-juego-siguiente').addEventListener('click', siguientePreguntaJuego);

    document.getElementById('btn-juego-repetir').addEventListener('click', function () {
      if (juegoMateriaActual) mostrarVistaJuego(juegoMateriaActual);
    });

    document.getElementById('btn-juego-volver-materia').addEventListener('click', function () {
      if (juegoMateriaActual) mostrarVistaLecciones(juegoMateriaActual);
      else mostrarVistaMaterias();
    });

    document.getElementById('btn-volver-desde-juego').addEventListener('click', function () {
      if (juegoMateriaActual) mostrarVistaLecciones(juegoMateriaActual);
      else mostrarVistaMaterias();
    });
  }

  /* ---------------------------------------------------------------
     13. INICIO DE LA APLICACIÓN
  --------------------------------------------------------------- */

  function iniciar() {
    inicializarEventos();
    actualizarProgresoGlobalUI();
    actualizarNavbarAuth();
    actualizarHeroMascota();
  }

  document.addEventListener('DOMContentLoaded', iniciar);
})();
