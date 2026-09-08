(function(){
  'use strict';
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
  const STORAGE_KEY = 'innovaboard_progreso_ciencias';

  /* ---------------------------------------------------------------
     1B. ESQUEMAS VISUALES POR LECCIÓN
     Cada entrada tiene un SVG (el dibujo) y, cuando ayuda a entender
     mejor las partes sueltas de un dibujo, una leyenda con colores.
  --------------------------------------------------------------- */

  const ESQUEMAS = {

    'bio-1': {
      titulo: 'La célula por dentro',
      svg: '<svg viewBox="0 0 600 300" role="img" aria-label="Diagrama de una célula con membrana, núcleo y mitocondrias">' +
        '<ellipse cx="300" cy="150" rx="255" ry="120" fill="#effbea" stroke="#6fff5c" stroke-width="2.5"/>' +
        '<circle cx="215" cy="150" r="56" fill="#2d8816" stroke="#2f8f4e" stroke-width="2"/>' +
        '<circle cx="215" cy="150" r="18" fill="#77ff33" opacity="0.85"/>' +
        '<ellipse cx="400" cy="95" rx="30" ry="15" fill="#2593b1" stroke="#55c7e7" stroke-width="1.5"/>' +
        '<ellipse cx="415" cy="205" rx="28" ry="14" fill="#2593b1" stroke="#55c7e7" stroke-width="1.5"/>' +
        '<circle cx="330" cy="215" r="4" fill="#2f8f4e"/>' +
        '<circle cx="350" cy="230" r="4" fill="#2f8f4e"/>' +
        '<circle cx="155" cy="235" r="4" fill="#2f8f4e"/>' +
        '<circle cx="140" cy="70" r="4" fill="#2f8f4e"/>' +
        '</svg>',
      leyenda: [
        { color: '#6fff5c', texto: 'Membrana celular — controla qué entra y qué sale' },
        { color: '#77ff33', texto: 'Núcleo — guarda el ADN y dirige la célula' },
        { color: '#55c7e7', texto: 'Mitocondrias — producen la energía de la célula' },
        { color: '#2f8f4e', texto: 'Citoplasma — el medio donde ocurre todo lo demás' }
      ]
    },

    'bio-2': {
      titulo: 'La pirámide de un ecosistema',
      svg: '<svg viewBox="0 0 600 300" role="img" aria-label="Pirámide trófica con productores, consumidores y descomponedores">' +
        '<polygon points="300,20 190,110 410,110" fill="#77ff33" opacity="0.85"/>' +
        '<polygon points="190,115 410,115 340,190 260,190" fill="#37f906" opacity="0.85"/>' +
        '<polygon points="260,195 340,195 300,260" fill="#2d8816" opacity="0.9"/>' +
        '<text x="300" y="70" text-anchor="middle" fill="#17351f" font-size="13" font-family="var(--font-display)" font-weight="600">Consumidores III</text>' +
        '<text x="300" y="158" text-anchor="middle" fill="#17351f" font-size="13" font-family="var(--font-display)" font-weight="600">Consumidores I y II</text>' +
        '<text x="300" y="235" text-anchor="middle" fill="#17351f" font-size="12" font-family="var(--font-display)" font-weight="600">Productores</text>' +
        '<path d="M 440 250 C 500 250 500 60 460 40" fill="none" stroke="#2f8f4e" stroke-width="2" stroke-dasharray="5 5" marker-end="url(#flechaVerde)"/>' +
        '<text x="520" y="150" text-anchor="middle" fill="#395844" font-size="11" font-family="var(--font-display)">Descomponedores reciclan nutrientes</text>' +
        '<defs><marker id="flechaVerde" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 Z" fill="#2f8f4e"/></marker></defs>' +
        '</svg>'
    },

    'bio-3': {
      titulo: 'Tres sistemas, un mismo cuerpo',
      svg: '<svg viewBox="0 0 600 280" role="img" aria-label="Relación entre el sistema respiratorio, circulatorio y digestivo">' +
        '<circle cx="150" cy="90" r="60" fill="#eef8f1" stroke="#6fff5c" stroke-width="2"/>' +
        '<circle cx="450" cy="90" r="60" fill="#eef8f1" stroke="#6fff5c" stroke-width="2"/>' +
        '<circle cx="300" cy="210" r="60" fill="#eef8f1" stroke="#6fff5c" stroke-width="2"/>' +
        '<text x="150" y="85" text-anchor="middle" fill="#17351f" font-size="13" font-family="var(--font-display)">Respiratorio</text>' +
        '<text x="150" y="103" text-anchor="middle" fill="#2f8f4e" font-size="11" font-family="var(--font-display)">(oxígeno)</text>' +
        '<text x="450" y="85" text-anchor="middle" fill="#17351f" font-size="13" font-family="var(--font-display)">Circulatorio</text>' +
        '<text x="450" y="103" text-anchor="middle" fill="#2f8f4e" font-size="11" font-family="var(--font-display)">(transporte)</text>' +
        '<text x="300" y="205" text-anchor="middle" fill="#17351f" font-size="13" font-family="var(--font-display)">Digestivo</text>' +
        '<text x="300" y="223" text-anchor="middle" fill="#2f8f4e" font-size="11" font-family="var(--font-display)">(nutrientes)</text>' +
        '<line x1="205" y1="105" x2="395" y2="105" stroke="#2f8f4e" stroke-width="2" marker-end="url(#fB)"/>' +
        '<line x1="405" y1="140" x2="330" y2="175" stroke="#2f8f4e" stroke-width="2" marker-end="url(#fB)"/>' +
        '<line x1="270" y1="175" x2="195" y2="140" stroke="#2f8f4e" stroke-width="2" marker-end="url(#fB)"/>' +
        '<defs><marker id="fB" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 Z" fill="#2f8f4e"/></marker></defs>' +
        '</svg>'
    },

    'qui-1': {
      titulo: 'Los tres estados de la materia',
      svg: '<svg viewBox="0 0 600 260" role="img" aria-label="Comparación entre sólido, líquido y gaseoso">' +
        '<rect x="30" y="40" width="160" height="160" rx="14" fill="#eef8f1" stroke="#8fc7a1"/>' +
        '<rect x="220" y="40" width="160" height="160" rx="14" fill="#eef8f1" stroke="#8fc7a1"/>' +
        '<rect x="410" y="40" width="160" height="160" rx="14" fill="#eef8f1" stroke="#8fc7a1"/>' +
        '<g fill="#6fff5c">' +
          '<circle cx="60" cy="70" r="7"/><circle cx="90" cy="70" r="7"/><circle cx="120" cy="70" r="7"/><circle cx="150" cy="70" r="7"/>' +
          '<circle cx="60" cy="100" r="7"/><circle cx="90" cy="100" r="7"/><circle cx="120" cy="100" r="7"/><circle cx="150" cy="100" r="7"/>' +
          '<circle cx="60" cy="130" r="7"/><circle cx="90" cy="130" r="7"/><circle cx="120" cy="130" r="7"/><circle cx="150" cy="130" r="7"/>' +
        '</g>' +
        '<g fill="#55c7e7">' +
          '<circle cx="250" cy="80" r="7"/><circle cx="280" cy="90" r="7"/><circle cx="315" cy="75" r="7"/>' +
          '<circle cx="260" cy="120" r="7"/><circle cx="300" cy="130" r="7"/><circle cx="340" cy="110" r="7"/>' +
          '<circle cx="280" cy="160" r="7"/><circle cx="320" cy="155" r="7"/>' +
        '</g>' +
        '<g fill="#c8f5bc">' +
          '<circle cx="440" cy="60" r="6"/><circle cx="480" cy="100" r="6"/><circle cx="520" cy="55" r="6"/>' +
          '<circle cx="450" cy="140" r="6"/><circle cx="550" cy="130" r="6"/><circle cx="500" cy="170" r="6"/>' +
          '<circle cx="430" cy="180" r="6"/><circle cx="545" cy="70" r="6"/>' +
        '</g>' +
        '<text x="110" y="225" text-anchor="middle" fill="#17351f" font-size="14" font-family="var(--font-display)" font-weight="600">Sólido</text>' +
        '<text x="300" y="225" text-anchor="middle" fill="#17351f" font-size="14" font-family="var(--font-display)" font-weight="600">Líquido</text>' +
        '<text x="490" y="225" text-anchor="middle" fill="#17351f" font-size="14" font-family="var(--font-display)" font-weight="600">Gaseoso</text>' +
        '<text x="110" y="245" text-anchor="middle" fill="#a1c299" font-size="11" font-family="var(--font-display)">Partículas fijas</text>' +
        '<text x="300" y="245" text-anchor="middle" fill="#a1c299" font-size="11" font-family="var(--font-display)">Partículas unidas, libres</text>' +
        '<text x="490" y="245" text-anchor="middle" fill="#a1c299" font-size="11" font-family="var(--font-display)">Partículas separadas</text>' +
        '</svg>'
    },

    'qui-2': {
      titulo: 'El modelo del átomo',
      svg: '<svg viewBox="0 0 600 300" role="img" aria-label="Modelo de un átomo con núcleo y electrones en órbita">' +
        '<ellipse cx="300" cy="150" rx="240" ry="90" fill="none" stroke="#8fc7a1" stroke-width="1.5"/>' +
        '<ellipse cx="300" cy="150" rx="240" ry="90" fill="none" stroke="#8fc7a1" stroke-width="1.5" transform="rotate(60 300 150)"/>' +
        '<ellipse cx="300" cy="150" rx="240" ry="90" fill="none" stroke="#8fc7a1" stroke-width="1.5" transform="rotate(120 300 150)"/>' +
        '<circle cx="300" cy="150" r="38" fill="#32bd0f" stroke="#2f8f4e" stroke-width="2"/>' +
        '<text x="300" y="155" text-anchor="middle" fill="#17351f" font-size="12" font-family="var(--font-display)" font-weight="600">p+ n</text>' +
        '<circle cx="540" cy="150" r="7" fill="#55c7e7"/>' +
        '<circle cx="150" cy="60" r="7" fill="#55c7e7"/>' +
        '<circle cx="420" cy="225" r="7" fill="#55c7e7"/>' +
        '</svg>',
      leyenda: [
        { color: '#32bd0f', texto: 'Núcleo — protones (carga positiva) y neutrones (sin carga)' },
        { color: '#55c7e7', texto: 'Electrones — carga negativa, giran alrededor del núcleo' }
      ]
    },

    'qui-3': {
      titulo: 'Cambio físico vs. cambio químico',
      svg: '<svg viewBox="0 0 600 240" role="img" aria-label="Comparación entre un cambio físico y un cambio químico">' +
        '<rect x="20" y="20" width="270" height="200" rx="16" fill="#effbea" stroke="#6fff5c" stroke-width="1.5"/>' +
        '<rect x="310" y="20" width="270" height="200" rx="16" fill="rgba(240,162,98,0.08)" stroke="#d96b32" stroke-width="1.5"/>' +
        '<text x="155" y="50" text-anchor="middle" fill="#2f8f4e" font-size="14" font-family="var(--font-display)" font-weight="600">Cambio físico</text>' +
        '<text x="445" y="50" text-anchor="middle" fill="#d96b32" font-size="14" font-family="var(--font-display)" font-weight="600">Cambio químico</text>' +
        '<rect x="80" y="90" width="45" height="45" fill="#c8f5bc" opacity="0.9"/>' +
        '<path d="M150,112 L195,112" stroke="#395844" stroke-width="2" marker-end="url(#fq1)"/>' +
        '<ellipse cx="230" cy="112" rx="26" ry="16" fill="#55c7e7" opacity="0.8"/>' +
        '<text x="155" y="165" text-anchor="middle" fill="#395844" font-size="11" font-family="var(--font-display)">Hielo → agua (mismo material)</text>' +
        '<rect x="360" y="90" width="45" height="45" fill="#395844" opacity="0.85"/>' +
        '<path d="M420,112 L465,112" stroke="#395844" stroke-width="2" marker-end="url(#fq1)"/>' +
        '<path d="M485,95 L500,112 L485,130 L470,112 Z" fill="#d96b32" opacity="0.85"/>' +
        '<text x="470" y="165" text-anchor="middle" fill="#395844" font-size="11" font-family="var(--font-display)">Papel → ceniza (nueva sustancia)</text>' +
        '<defs><marker id="fq1" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 Z" fill="#395844"/></marker></defs>' +
        '</svg>'
    },

    'fis-1': {
      titulo: 'Distancia vs. desplazamiento',
      svg: '<svg viewBox="0 0 600 260" role="img" aria-label="Comparación entre distancia recorrida y desplazamiento">' +
        '<path d="M 60 200 Q 180 40 300 160 T 540 90" fill="none" stroke="#55c7e7" stroke-width="3"/>' +
        '<line x1="60" y1="200" x2="540" y2="90" stroke="#6fff5c" stroke-width="3" stroke-dasharray="8 6"/>' +
        '<circle cx="60" cy="200" r="8" fill="#2f8f4e"/>' +
        '<circle cx="540" cy="90" r="8" fill="#2f8f4e"/>' +
        '<text x="55" y="230" text-anchor="middle" fill="#17351f" font-size="13" font-family="var(--font-display)">A</text>' +
        '<text x="545" y="70" text-anchor="middle" fill="#17351f" font-size="13" font-family="var(--font-display)">B</text>' +
        '<text x="330" y="55" text-anchor="middle" fill="#55c7e7" font-size="12" font-family="var(--font-display)">Distancia (recorrido total)</text>' +
        '<text x="300" y="245" text-anchor="middle" fill="#2f8f4e" font-size="12" font-family="var(--font-display)">Desplazamiento (línea recta con dirección)</text>' +
        '</svg>'
    },

    'fis-2': {
      titulo: 'Fuerzas actuando sobre un objeto',
      svg: '<svg viewBox="0 0 600 300" role="img" aria-label="Diagrama de fuerzas sobre una caja: gravedad, normal, fricción y fuerza aplicada">' +
        '<rect x="255" y="130" width="90" height="70" rx="8" fill="#eef8f1" stroke="#2f8f4e" stroke-width="2"/>' +
        '<line x1="300" y1="130" x2="300" y2="50" stroke="#55c7e7" stroke-width="3" marker-end="url(#fa-normal)"/>' +
        '<text x="300" y="40" text-anchor="middle" fill="#55c7e7" font-size="12" font-family="var(--font-display)">Normal</text>' +
        '<line x1="300" y1="200" x2="300" y2="270" stroke="#d96b32" stroke-width="3" marker-end="url(#fa-grav)"/>' +
        '<text x="300" y="288" text-anchor="middle" fill="#d96b32" font-size="12" font-family="var(--font-display)">Gravedad</text>' +
        '<line x1="255" y1="165" x2="185" y2="165" stroke="#6fff5c" stroke-width="3" marker-end="url(#fa-fric)"/>' +
        '<text x="140" y="160" text-anchor="middle" fill="#6fff5c" font-size="12" font-family="var(--font-display)">Fricción</text>' +
        '<line x1="345" y1="165" x2="440" y2="165" stroke="#c8f5bc" stroke-width="3" marker-end="url(#fa-apl)"/>' +
        '<text x="490" y="160" text-anchor="middle" fill="#c8f5bc" font-size="12" font-family="var(--font-display)">Fuerza aplicada</text>' +
        '<defs>' +
          '<marker id="fa-normal" markerWidth="9" markerHeight="9" refX="4.5" refY="4.5" orient="auto"><path d="M0,0 L9,4.5 L0,9 Z" fill="#55c7e7"/></marker>' +
          '<marker id="fa-grav" markerWidth="9" markerHeight="9" refX="4.5" refY="4.5" orient="auto"><path d="M0,0 L9,4.5 L0,9 Z" fill="#d96b32"/></marker>' +
          '<marker id="fa-fric" markerWidth="9" markerHeight="9" refX="4.5" refY="4.5" orient="auto"><path d="M0,0 L9,4.5 L0,9 Z" fill="#6fff5c"/></marker>' +
          '<marker id="fa-apl" markerWidth="9" markerHeight="9" refX="4.5" refY="4.5" orient="auto"><path d="M0,0 L9,4.5 L0,9 Z" fill="#c8f5bc"/></marker>' +
        '</defs>' +
        '</svg>'
    },

    'fis-3': {
      titulo: 'Energía potencial y cinética',
      svg: '<svg viewBox="0 0 600 260" role="img" aria-label="Transformación de energía potencial en energía cinética en una caída">' +
        '<path d="M 60 40 Q 60 220 540 220" fill="none" stroke="#8fc7a1" stroke-width="3"/>' +
        '<circle cx="60" cy="40" r="16" fill="#2f8f4e"/>' +
        '<circle cx="470" cy="212" r="16" fill="#55c7e7"/>' +
        '<text x="60" y="15" text-anchor="middle" fill="#2f8f4e" font-size="12" font-family="var(--font-display)">Energía potencial máxima</text>' +
        '<text x="480" y="245" text-anchor="middle" fill="#55c7e7" font-size="12" font-family="var(--font-display)">Energía cinética máxima</text>' +
        '<line x1="60" y1="60" x2="60" y2="200" stroke="#6c9362" stroke-width="1" stroke-dasharray="4 4"/>' +
        '</svg>'
    },

    'tie-1': {
      titulo: 'Las capas de la Tierra',
      svg: '<svg viewBox="0 0 600 300" role="img" aria-label="Corte transversal de la Tierra mostrando corteza, manto y núcleo">' +
        '<circle cx="300" cy="150" r="140" fill="#265e17" stroke="#6fff5c" stroke-width="2"/>' +
        '<circle cx="300" cy="150" r="100" fill="#32bd0f"/>' +
        '<circle cx="300" cy="150" r="55" fill="#2593b1"/>' +
        '<circle cx="300" cy="150" r="24" fill="#55c7e7"/>' +
        '</svg>',
      leyenda: [
        { color: '#265e17', texto: 'Corteza — la capa externa y delgada donde vivimos' },
        { color: '#32bd0f', texto: 'Manto — roca semisólida que fluye muy lentamente' },
        { color: '#2593b1', texto: 'Núcleo externo — hierro y níquel líquidos; genera el campo magnético' },
        { color: '#55c7e7', texto: 'Núcleo interno — esfera sólida a temperaturas extremas' }
      ]
    },

    'tie-2': {
      titulo: 'Dos orígenes de los fenómenos naturales',
      svg: '<svg viewBox="0 0 600 240" role="img" aria-label="Fenómenos de origen geológico frente a fenómenos de origen atmosférico">' +
        '<rect x="20" y="20" width="270" height="200" rx="16" fill="#effbea" stroke="#6fff5c" stroke-width="1.5"/>' +
        '<rect x="310" y="20" width="270" height="200" rx="16" fill="#eef9fc" stroke="#55c7e7" stroke-width="1.5"/>' +
        '<text x="155" y="50" text-anchor="middle" fill="#2f8f4e" font-size="13" font-family="var(--font-display)" font-weight="600">Origen geológico</text>' +
        '<text x="445" y="50" text-anchor="middle" fill="#55c7e7" font-size="13" font-family="var(--font-display)" font-weight="600">Origen atmosférico</text>' +
        '<path d="M60,140 L100,90 L130,150 L160,80 L200,140" fill="none" stroke="#2f8f4e" stroke-width="3"/>' +
        '<text x="155" y="185" text-anchor="middle" fill="#395844" font-size="11" font-family="var(--font-display)">Terremotos y volcanes</text>' +
        '<path d="M 400 130 a 40 40 0 1 0 80 5 a 25 25 0 1 1 -40 -5" fill="none" stroke="#55c7e7" stroke-width="3"/>' +
        '<text x="445" y="185" text-anchor="middle" fill="#395844" font-size="11" font-family="var(--font-display)">Huracanes y tornados</text>' +
        '</svg>'
    },

    'tie-3': {
      titulo: 'Cómo funciona el efecto invernadero',
      svg: '<svg viewBox="0 0 600 280" role="img" aria-label="Diagrama del efecto invernadero: radiación solar entrando y calor atrapado por la atmósfera">' +
        '<circle cx="60" cy="50" r="30" fill="#c8f5bc" opacity="0.9"/>' +
        '<rect x="20" y="110" width="560" height="24" rx="12" fill="#2593b1" opacity="0.6"/>' +
        '<text x="300" y="127" text-anchor="middle" fill="#17351f" font-size="11" font-family="var(--font-display)">Gases de efecto invernadero</text>' +
        '<rect x="20" y="230" width="560" height="18" rx="9" fill="#2d8816"/>' +
        '<line x1="130" y1="70" x2="200" y2="115" stroke="#c8f5bc" stroke-width="2.5" marker-end="url(#fs1)"/>' +
        '<line x1="220" y1="134" x2="260" y2="228" stroke="#c8f5bc" stroke-width="2.5" marker-end="url(#fs1)"/>' +
        '<line x1="380" y1="228" x2="420" y2="134" stroke="#d96b32" stroke-width="2.5" marker-end="url(#fs2)"/>' +
        '<line x1="440" y1="115" x2="480" y2="70" stroke="#d96b32" stroke-width="2.5" marker-end="url(#fs2)" stroke-dasharray="5 4"/>' +
        '<text x="150" y="95" text-anchor="middle" fill="#c8f5bc" font-size="11" font-family="var(--font-display)">Radiación solar</text>' +
        '<text x="470" y="95" text-anchor="middle" fill="#d96b32" font-size="11" font-family="var(--font-display)">Calor atrapado</text>' +
        '<defs>' +
          '<marker id="fs1" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 Z" fill="#c8f5bc"/></marker>' +
          '<marker id="fs2" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 Z" fill="#d96b32"/></marker>' +
        '</defs>' +
        '</svg>'
    }
  };


  const PROGRESS_KEY = 'innovaboard_ciencias_progreso_v3';
  const GAME_KEY = 'innovaboard_ciencias_juegos_v3';

  const PERSONAJES = {
    biologia: { nombre: 'Benjamin', icono: '🧑🏽‍🔬', tono: 'BIOLOGÍA', color: 'green', saludo: '¡Bienvenido a Biología!', mensaje: 'Vamos a descubrir la vida sin hacerlo pesado.' },
    quimica: { nombre: 'Valentina', icono: '👩🏻‍🔬', tono: 'QUÍMICA', color: 'violet', saludo: '¡Entramos al laboratorio de Química!', mensaje: 'Aquí todo cambia, reacciona y tiene una razón.' },
    fisica: { nombre: 'Mateo', icono: '🧑🏽‍🏫', tono: 'FÍSICA', color: 'blue', saludo: '¡Vamos con Física!', mensaje: 'Mira a tu alrededor: movimiento, fuerza y energía están por todas partes.' },
    tierra: { nombre: 'Sofía', icono: '👩🏽‍🚀', tono: 'CIENCIAS DE LA TIERRA', color: 'amber', saludo: '¡Bienvenido al planeta!', mensaje: 'Nuestro mundo también cuenta historias. Vamos a descubrirlas.' }
  };

  const GAME_DATA = {
    biologia: {
      title: 'Detective celular', icon: 'fa-dna', color: 'green', mentor: 'Benjamin',
      intro: 'Observa, elige y descubre.',
      questions: [
        { q: '¿Dónde está el ADN?', hint: 'Pista: es el “centro de control” de la célula.', options: ['Núcleo 🧬', 'Membrana 🚪', 'Citoplasma 🫧'], answer: 0 },
        { q: '¿Qué parte ayuda a producir energía?', hint: 'Pista: piensa en la “central eléctrica”.', options: ['Mitocondria ⚡', 'Núcleo 🧬', 'Membrana 🚪'], answer: 0 },
        { q: '¿Qué controla lo que entra y sale?', hint: 'Pista: funciona como una puerta.', options: ['Membrana 🚪', 'Núcleo 🧬', 'Mitocondria ⚡'], answer: 0 }
      ]
    },
    quimica: {
      title: 'Detective de la materia', icon: 'fa-flask-vial', color: 'violet', mentor: 'Valentina',
      intro: 'Mira los ejemplos y elige.',
      questions: [
        { q: '¿Cuál es un líquido?', hint: 'Pista: puede tomar la forma del vaso.', options: ['💧 Agua', '🪨 Piedra', '💨 Aire'], answer: 0 },
        { q: '¿Cuál ocupa todo el recipiente?', hint: 'Pista: los gases se expanden.', options: ['💨 Aire', '💧 Agua', '🧊 Hielo'], answer: 0 },
        { q: '¿Cuál mantiene su propia forma?', hint: 'Pista: no necesita un recipiente para conservarla.', options: ['🪨 Piedra', '💧 Agua', '💨 Aire'], answer: 0 }
      ]
    },
    fisica: {
      title: 'Física en acción', icon: 'fa-gauge-high', color: 'blue', mentor: 'Mateo',
      intro: 'Piensa en situaciones de todos los días.',
      questions: [
        { q: 'Una pelota estaba quieta y empieza a moverse. ¿Qué cambió?', hint: 'Pista: ahora tiene movimiento.', options: ['🏃 Su movimiento', '🎨 Su color', '📏 Su tamaño'], answer: 0 },
        { q: 'Empujas un carrito. ¿Qué estás aplicando?', hint: 'Pista: un empujón es un tipo de...', options: ['💪 Fuerza', '🌡️ Temperatura', '💡 Luz'], answer: 0 },
        { q: 'Una bombilla encendida necesita...', hint: 'Pista: algo permite que funcione.', options: ['⚡ Energía', '🪨 Una roca', '💧 Agua'], answer: 0 }
      ]
    },
    tierra: {
      title: 'Guardianes del planeta', icon: 'fa-earth-americas', color: 'amber', mentor: 'Sofía',
      intro: 'Conoce la Tierra y cuídala.',
      questions: [
        { q: '¿Qué puede ocurrir cuando las placas de la Tierra se mueven bruscamente?', hint: 'Pista: puede hacer temblar el suelo.', options: ['🌎 Terremoto', '🌈 Arcoíris', '☁️ Nube'], answer: 0 },
        { q: '¿Qué acción ayuda a reducir residuos?', hint: 'Pista: usa un objeto nuevamente.', options: ['♻️ Reutilizar', '🗑️ Tirar todo', '🚰 Desperdiciar agua'], answer: 0 },
        { q: '¿Qué capa de la Tierra respiramos?', hint: 'Pista: es la capa de aire que nos rodea.', options: ['🌬️ Atmósfera', '🪨 Núcleo', '🌋 Manto'], answer: 0 }
      ]
    }
  };

  function getJSON(key, fallback) {
    try { return JSON.parse(localStorage.getItem(key) || JSON.stringify(fallback)); } catch (_) { return fallback; }
  }
  function setJSON(key, value) { try { localStorage.setItem(key, JSON.stringify(value)); } catch (_) {} }
  let progreso = getJSON(PROGRESS_KEY, {});
  let juegos = Object.assign({ points: 0, played: 0, best: 0 }, getJSON(GAME_KEY, {}));
  let materiaActiva = null;
  let leccionActivaId = null;
  let juegoActivo = null;

  const qs = (s, root=document) => root.querySelector(s);
  const qsa = (s, root=document) => [...root.querySelectorAll(s)];
  const views = { inicio: qs('#vista-inicio'), explorar: qs('#vista-explorar'), lecciones: qs('#vista-lecciones'), contenido: qs('#vista-contenido'), misiones: qs('#vista-misiones'), progreso: qs('#vista-progreso') };

  function showView(name) {
    Object.values(views).forEach(v => { if (v) v.hidden = true; });
    if (views[name]) views[name].hidden = false;
    qsa('[data-view]').forEach(b => b.classList.toggle('active', b.getAttribute('data-view') === name));
    window.scrollTo({ top: 0, behavior: 'smooth' });
    const drawer = qs('#mobile-sidebar'); if (drawer) drawer.classList.remove('open');
  }


  function renderHomeAreas() {
    const wrap = qs('#home-area-strip'); if (!wrap) return;
    wrap.innerHTML = Object.entries(DATA).map(([key,m]) => {
      const p = PERSONAJES[key]; const c = completedMateria(key); return `
        <button class="area-card-mini ${p.color}" data-materia="${key}">
          <span class="mini-area-avatar">${p.icono}</span><span class="area-card-main"><small>${p.tono}</small><b>${m.nombre}</b><em>${c}/${m.lecciones.length}</em></span><i class="fa-solid fa-arrow-right"></i>
        </button>`;
    }).join('');
    qsa('.area-card-mini', wrap).forEach(b => b.addEventListener('click', () => showLessons(b.dataset.materia)));
  }

  function renderSubjects() {
    const wrap = qs('#subject-grid'); if (!wrap) return;
    wrap.innerHTML = Object.entries(DATA).map(([key,m],i) => {
      const p=PERSONAJES[key], c=completedMateria(key), percent=pct(c,m.lecciones.length); return `
        <article class="subject-card-new ${p.color}" data-materia="${key}">
          <div class="subject-top"><div class="subject-avatar">${p.icono}</div><span>${String(i+1).padStart(2,'0')}</span></div>
          <div class="subject-character-line"><span>${p.nombre}</span><small>${p.tono}</small></div>
          <h2>${m.nombre}</h2><p>${m.descripcion}.</p>
          <div class="subject-bottom"><div><strong>${percent}%</strong><span>ruta</span></div><button class="btn-mini" type="button">Explorar <i class="fa-solid fa-arrow-right"></i></button></div>
        </article>`;
    }).join('');
    qsa('.subject-card-new', wrap).forEach(card => card.addEventListener('click', () => showLessons(card.dataset.materia)));
  }

  function updateAreaGuide(key) {
    const m=DATA[key], p=PERSONAJES[key];
    qs('#area-guide-character').textContent=p.icono; qs('#area-guide-name').textContent=`${p.nombre.toUpperCase()} · ${m.nombre.toUpperCase()}`;
    qs('#area-guide-title').textContent=p.saludo; qs('#area-guide-message').textContent=p.mensaje;
    qs('#materia-activa-nombre').textContent=m.nombre; qs('#materia-activa-desc').textContent=m.descripcion + '.';
  }

  function showLessons(key) {
    if (!DATA[key]) return; materiaActiva=key; updateAreaGuide(key); renderLessons(key); updateMateriaProgress(key); showView('lecciones');
  }

  function renderLessons(key) {
    const wrap=qs('#lecciones-lista'); const lessons=DATA[key].lecciones; const p=PERSONAJES[key];
    wrap.innerHTML=lessons.map((l,i)=>{ const done=!!progreso[l.id]; const time=readingTime(l); return `
      <button class="lesson-card ${done?'done':''}" data-lesson="${l.id}">
        <span class="lesson-number">${done?'✓':String(i+1).padStart(2,'0')}</span>
        <span class="lesson-copy"><small>${p.tono} · ${time} min</small><b>${l.titulo}</b><em>${l.resumen?.[0] || l.intro}</em></span>
        <span class="lesson-open"><i class="fa-solid ${done?'fa-check':'fa-arrow-right'}"></i></span>
      </button>`; }).join('');
    qsa('.lesson-card',wrap).forEach(btn=>btn.addEventListener('click',()=>showLesson(key,btn.dataset.lesson)));
    qs('#materia-lecciones-count').textContent=`${completedMateria(key)} / ${lessons.length}`;
  }

  function readingTime(l) { const text=[l.intro,...(l.resumen||[]),...(l.bloques||[]).map(b=>b.parrafo||b.texto||((b.items||[]).join(' ')))].join(' '); return Math.max(2,Math.ceil(text.split(/\s+/).length/190)); }

  function renderSchema(id) {
    const s=ESQUEMAS[id]; if(!s) return '';
    const legend=s.leyenda?.length ? `<div class="diagram-legend">${s.leyenda.map(x=>`<span><i style="--dot:${x.color}"></i>${x.texto}</span>`).join('')}</div>` : '';
    return `<div class="visual-card"><div class="visual-head"><span><i class="fa-solid fa-diagram-project"></i> ${s.titulo}</span><small>visual</small></div><div class="svg-wrap">${fixSvg(s.svg)}</div>${legend}</div>`;
  }

  function fixSvg(svg) { return String(svg||'').replace(/var\(--font-display\)/g,'Space Grotesk, sans-serif').replace(/rgba\(240,162,98,0\.08\)/g,'#fff5ee'); }

  function renderBlocks(blocks) {
    return (blocks||[]).map((b,i)=>{
      if(b.tipo==='lista') return `<details class="lesson-detail" ${i<1?'open':''}><summary><span class="detail-icon"><i class="fa-solid fa-list-check"></i></span>${b.titulo}</summary><ul>${(b.items||[]).map(x=>`<li>${x}</li>`).join('')}</ul></details>`;
      const icon=b.tipo==='concepto'?'fa-lightbulb':b.tipo==='ejemplo'?'fa-flask':'fa-circle-info';
      return `<details class="lesson-detail" ${i<2?'open':''}><summary><span class="detail-icon"><i class="fa-solid ${icon}"></i></span>${b.titulo || (b.tipo==='ejemplo'?'Ejemplo rápido':'Idea clave')}</summary><p>${b.parrafo||b.texto||''}</p></details>`;
    }).join('');
  }

  function showLesson(key,id) {
    const lesson=DATA[key]?.lecciones.find(l=>l.id===id); if(!lesson) return; materiaActiva=key; leccionActivaId=id;
    const idx=DATA[key].lecciones.findIndex(l=>l.id===id)+1; const p=PERSONAJES[key]; const done=!!progreso[id];
    qs('#contenido-leccion').innerHTML=`
      <div class="lesson-hero ${p.color}"><div class="lesson-buddy">${p.icono}<span>${done?'✓':'+'}</span></div><div><span class="eyebrow">${p.nombre.toUpperCase()} · MISIÓN ${idx}</span><h1>${lesson.titulo}</h1><p>${lesson.intro}</p></div><div class="time-chip"><i class="fa-regular fa-clock"></i> ${readingTime(lesson)} min</div></div>
      <div class="lesson-points"><span><i class="fa-solid fa-bolt"></i> Aprende fácil</span>${lesson.resumen.slice(0,3).map(x=>`<b>${x}</b>`).join('')}</div>
      ${renderSchema(id)}
      <div class="quick-map"><div class="map-head"><span><i class="fa-solid fa-route"></i> Mapa rápido</span><small>antes de profundizar</small></div><div>${lesson.resumen.slice(0,4).map((x,i)=>`<span><i>${i+1}</i>${x}</span>`).join('')}</div></div>
      <div class="lesson-more"><div class="panel-head"><div><span>PARA ENTENDERLO MEJOR</span><h2>Abre solo lo que necesites</h2></div><span class="soft-tag">sin muros de texto</span></div>${renderBlocks(lesson.bloques)}</div>
      <div class="lesson-finish"><div><span>${done?'MISIÓN COMPLETADA':'CUANDO TERMINES'}</span><strong>${done?'¡Excelente! Sigue con la siguiente.':'Marca la lección como completada para sumar a tu ruta.'}</strong></div><div class="finish-actions"><button class="btn-soft" id="lesson-back-action">Volver</button><button class="btn-main" id="lesson-complete">${done?'✓ Completada':'Completar misión'} <i class="fa-solid fa-arrow-right"></i></button></div></div>`;
    qs('#lesson-back-action').onclick=()=>showLessons(key); qs('#lesson-complete').onclick=()=>completeLesson(key,id);
    showView('contenido');
  }

  function completeLesson(key,id) {
    const already=!!progreso[id]; progreso[id]=true; setJSON(PROGRESS_KEY,progreso); updateAllProgress();
    showToast(already?'fa-check':'fa-sparkles',already?'Ya estaba completada':'¡Misión completada!', already?'Puedes seguir con la siguiente.':'Sumaste progreso a tu laboratorio.');
    if (key===materiaActiva) renderLessons(key); showLesson(key,id);
  }

  function updateMateriaProgress(key) { const n=completedMateria(key), total=DATA[key].lecciones.length; qs('#progreso-materia-porcentaje').textContent=pct(n,total)+'%'; qs('#progreso-materia-fill').style.width=pct(n,total)+'%'; qs('#materia-lecciones-count').textContent=`${n} / ${total}`; }

  function updateAllProgress() {
    const total=completedTotal(), percent=pct(total,TOTAL_LECCIONES); qs('#home-progress').textContent=percent+'%'; qs('#global-percent').textContent=percent+'%'; qs('#global-completed').textContent=total; qs('#total-game-points').textContent=juegos.points; qs('#global-game-points').textContent=juegos.points; qs('#global-games-played').textContent=juegos.played; qs('#global-badges').textContent=badges();
    if(materiaActiva) updateMateriaProgress(materiaActiva);
    renderHomeAreas(); renderSubjects(); renderRoutes();
  }
  function badges(){ let b=0; if(completedTotal()>=1)b++; if(completedTotal()>=5)b++; if(juegos.points>=20)b++; if(juegos.played>=4)b++; return b; }
  function renderRoutes(){ const wrap=qs('#route-list'); if(!wrap)return; wrap.innerHTML=Object.entries(DATA).map(([k,m])=>{const c=completedMateria(k),p=pct(c,m.lecciones.length),ch=PERSONAJES[k];return `<button class="route-row" data-route="${k}"><span class="route-avatar ${ch.color}">${ch.icono}</span><span><b>${m.nombre}</b><small>${ch.nombre} · ${c}/${m.lecciones.length} lecciones</small></span><strong>${p}%</strong><i class="fa-solid fa-chevron-right"></i></button>`}).join(''); qsa('.route-row',wrap).forEach(x=>x.onclick=()=>showLessons(x.dataset.route)); }

  function renderGames(){ const wrap=qs('#games-grid'); wrap.innerHTML=Object.entries(GAME_DATA).map(([key,g])=>{const ch=PERSONAJES[key];return `<button class="game-card ${g.color}" data-game="${key}"><div class="game-avatar">${ch.icono}<i class="fa-solid ${g.icon}"></i></div><span>${ch.nombre}</span><h2>${g.title}</h2><p>${g.intro}</p><div><small>3 preguntas</small><strong>Jugar <i class="fa-solid fa-play"></i></strong></div></button>`}).join(''); qsa('.game-card',wrap).forEach(x=>x.onclick=()=>startGame(x.dataset.game)); }

  function startGame(key){ juegoActivo={key,index:0,score:0,selected:false}; qs('#games-grid').hidden=true; const area=qs('#game-area'); area.hidden=false; renderQuestion(); area.scrollIntoView({behavior:'smooth',block:'start'}); }
  function renderQuestion(){
    const g=GAME_DATA[juegoActivo.key], q=g.questions[juegoActivo.index], area=qs('#game-area'), num=juegoActivo.index+1;
    area.innerHTML=`<div class="game-head ${g.color}">
      <div class="game-avatar big">${PERSONAJES[juegoActivo.key].icono}</div>
      <div><span>${g.mentor} · RETO ${num}/3</span><h2>${q.q}</h2><p class="game-hint">${q.hint||''}</p></div>
      <button class="icon-btn" id="exit-game" aria-label="Salir del juego"><i class="fa-solid fa-xmark"></i></button>
    </div>
    <div class="game-options" aria-label="Opciones de respuesta">${q.options.map((o,i)=>`<button data-opt="${i}"><span>${String.fromCharCode(65+i)}</span><strong>${o}</strong></button>`).join('')}</div>
    <div class="game-footer"><span>${g.intro}</span><div class="question-dots">${g.questions.map((_,i)=>`<i class="${i<=juegoActivo.index?'on':''}"></i>`).join('')}</div></div>`;
    qs('#exit-game').onclick=endGame;
    qsa('.game-options button',area).forEach(b=>b.onclick=()=>answer(Number(b.dataset.opt)));
  }
  function answer(choice){ if(juegoActivo.selected)return;juegoActivo.selected=true;const g=GAME_DATA[juegoActivo.key],q=g.questions[juegoActivo.index],correct=choice===q.answer; if(correct)juegoActivo.score+=10; qsa('.game-options button').forEach((b,i)=>{b.disabled=true;if(i===q.answer)b.classList.add('correct');if(i===choice&&!correct)b.classList.add('wrong');}); setTimeout(()=>{if(juegoActivo.index<g.questions.length-1){juegoActivo.index++;juegoActivo.selected=false;renderQuestion();}else finishGame();},700); }
  function finishGame(){ const score=juegoActivo.score; juegos.played++; juegos.points+=score; juegos.best=Math.max(juegos.best,score); setJSON(GAME_KEY,juegos); const area=qs('#game-area');area.innerHTML=`<div class="game-result"><div class="result-orb">${score>=20?'🏆':'✨'}</div><span>RETO TERMINADO</span><h2>${score>=20?'¡Nivel desbloqueado!':'¡Buen intento!'}</h2><p>Has conseguido <b>${score}/30</b> puntos en ${GAME_DATA[juegoActivo.key].title}.</p><div class="result-actions"><button class="btn-main" id="play-again">Repetir reto</button><button class="btn-soft" id="back-games">Ver otros juegos</button></div></div>`; updateAllProgress(); qs('#play-again').onclick=()=>startGame(juegoActivo.key);qs('#back-games').onclick=endGame;showToast('fa-star','Puntos sumados',`+${score} puntos a tu laboratorio.`); }
  function endGame(){ juegoActivo=null; qs('#game-area').hidden=true; qs('#games-grid').hidden=false; }

  function showToast(icon,title,msg){ const wrap=qs('#toast-container'),el=document.createElement('div');el.className='toast';el.innerHTML=`<span><i class="fa-solid ${icon}"></i></span><div><b>${title}</b><small>${msg}</small></div>`;wrap.appendChild(el);setTimeout(()=>{el.classList.add('hide');setTimeout(()=>el.remove(),300)},3200); }

  function talk(key='biologia', context='home'){
    const p=PERSONAJES[key]||PERSONAJES.biologia; const lines={home:[`¡Hola! Soy Benjamin. Hoy toca descubrir algo nuevo.`,`Dato rápido: aprender jugando ayuda a que las ideas se queden contigo.`,`No tienes que aprender todo de una vez. Vamos por una misión.`],explore:[`¿Qué te da más curiosidad: vida, materia, energía o planeta?`,`Elige un área y te acompañaré en el camino.`],area:[p.saludo,p.mensaje,`Cuando termines una misión, márcala y seguimos con la siguiente.`]}; const arr=lines[context]||lines.home;const msg=arr[Math.floor(Math.random()*arr.length)]; if(context==='area'){qs('#area-guide-title').textContent=msg;qs('#area-guide-message').textContent=`${p.nombre} está contigo.`;} else if(context==='explore'){qs('#explore-guide-title').textContent=msg;} else {qs('#home-mentor-title').textContent=msg;qs('#home-mentor-message').textContent='Toca explorar cuando estés listo.';} }

  function initNav(){
    qsa('[data-view]').forEach(b=>b.addEventListener('click',()=>{const v=b.dataset.view;showView(v); if(v==='explorar')renderSubjects();if(v==='misiones')renderGames();if(v==='progreso')updateAllProgress();}));
    qs('#brand-home').onclick=()=>showView('inicio'); qs('#hero-explore').onclick=()=>{renderSubjects();showView('explorar');}; qs('#hero-game').onclick=()=>{renderGames();showView('misiones');};
    qs('#quick-last').onclick=()=>{const x=lastCompleted();if(x)showLesson(x.materia,x.leccionId);else{renderSubjects();showView('explorar');showToast('fa-compass','Aún no hay una última lección','Elige una ruta para empezar.');}};
    qs('#talk-home').onclick=()=>talk('biologia','home');qs('#talk-explore').onclick=()=>talk('biologia','explore');qs('#talk-area').onclick=()=>talk(materiaActiva,'area');
    qs('#btn-volver-materias').onclick=()=>{renderSubjects();showView('explorar');}; qs('#btn-volver-lecciones').onclick=()=>{if(materiaActiva)showLessons(materiaActiva);else showView('explorar');}; qs('#explore-back').onclick=()=>showView('inicio');
    qs('#mobile-menu').onclick=()=>qs('#mobile-sidebar').classList.add('open');qs('#mobile-close').onclick=()=>qs('#mobile-sidebar').classList.remove('open');
  }

  function init(){ initNav();renderHomeAreas();renderSubjects();renderGames();updateAllProgress();showView('inicio'); }
  document.addEventListener('DOMContentLoaded',init);

})();
