const products = [
    {
      id: "a1",
      image:
        "https://images.fravega.com/f300/c16e93000c7170464dc33206b5dba763.jpg.webp",
      name: "Iphone 13 128gb",
      description:
        "Actualiza a el iPhone 13 de 128GB en color Rosa, una combinación perfecta de estilo y rendimiento. Con 128GB de almacenamiento, este iPhone ofrece espacio amplio para tus fotos, aplicaciones y videos. Impulsado por el chip A15 Bionic, el iPhone 13 garantiza un rendimiento ultrarrápido, multitarea fluida y experiencias de juego superiores. La impresionante pantalla Super Retina XDR de 6.1 pulgadas ofrece colores vibrantes y detalles nítidos, haciendo que todo se vea mejor. Captura fotos increíbles y videos en 4K con el avanzado sistema de doble cámara, que incluye Modo Noche y Estilos Fotográficos. El iPhone 13 está construido con Ceramic Shield para una mayor durabilidad y ofrece una batería de larga duración que te mantiene conectado todo el día. Consigue el iPhone 13 de 128GB en color Rosa y disfruta de lo mejor de la tecnología Apple en un diseño moderno y elegante.",
      price: 1600,
      stock: 3,
      category: "cellphones",
    },
    {
      id: "a2",
      image:
        "https://images.fravega.com/f300/4de30386672fa87b57905ecf223dcf2d.png.webp",
      name: "Samsung Galaxy S24",
      description:
        "Memoria RAM: 8 GB de RAM que permite una multitarea fluida y sin interrupciones. Almacenamiento: 256 GB de capacidad interna para almacenar aplicaciones, fotos, videos y archivos sin preocuparte por el espacio. Procesador: Potente procesador de última generación para un rendimiento ultra rápido y eficiente en el consumo de energía. Pantalla: Dynamic AMOLED 2X con colores vibrantes y detalles nítidos, ideal para disfrutar de contenido multimedia, juegos y navegación. Cámaras: Sistema de cámaras avanzadas que ofrece fotografías de calidad profesional y videos en alta resolución. Capacidad para capturar imágenes claras en condiciones de poca luz. Batería: Larga duración y tecnología de carga rápida para que siempre estés conectado. Conectividad: Compatible con 5G, asegurando una navegación y descargas ultrarrápidas. Diseño: Elegante y resistente, con un acabado premium que combina estilo y durabilidad. Experiencia móvil superior: Perfecto para usuarios que buscan rendimiento, capacidad de almacenamiento y una experiencia visual envolvente.",
      price: 1900,
      stock: 7,
      category: "cellphones",
    },
    {
      id: "b1",
      image:
        "https://images.fravega.com/f300/b3bc518a01e2173a6f515236ae4020a5.jpg.webp",
      name: "Heladera Whirpool",
      description: "La heladera Whirlpool WRM39CK combina diseño moderno con eficiencia. Cuenta con compartimientos especiales, estantes de vidrio templado removibles y un cajón para productos frescos. Su capacidad es de 340 litros y utiliza el sistema No Frost, que evita la formación de escarcha y asegura una distribución homogénea del frío. Con eficiencia energética clase A y luz LED de larga duración, ofrece ahorro energético y mejor visibilidad interior.",
      price: 900,
      stock: 2,
      category: "appliances",
    },
    {
      id: "b2",
      image:
        "https://images.fravega.com/f300/6c165115a0a2a633c4adf83ab1bbd41c.jpg.webp",
      name: "Aire Acondicionado Kelvinator",
      description: "El aire acondicionado Kelvinator KE2600FC, con diseño clásico blanco, ofrece función frío-calor y modo nocturno para un ambiente confortable. Con 2600 watts de potencia, es ideal para espacios según tamaño y condiciones. Posee eficiencia energética clase A en frío y B en calor, además de la función iFeel, que ajusta la temperatura según la proximidad del control remoto.",
      price: 750,
      stock: 11,
      category: "appliances",
    },
    {
      id: "c1",
      image:
        "https://images.fravega.com/f300/f7810d7c9d5ae40c8c917019add20487.jpg.webp",
      name: "MacBook Pro 13 Apple M2 ",
      description: 'La MacBook Pro 13" con chip Apple M2 ofrece potencia y diseño compacto. Su CPU de 8 núcleos y GPU de 10 núcleos garantizan alto rendimiento, mientras que su pantalla Retina de 13.3" brinda colores vibrantes con tecnología True Tone. Tiene 8 GB de memoria unificada (configurable hasta 24 GB) y almacenamiento SSD de 512 GB. Su batería dura hasta 20 horas de reproducción de video y 17 horas de navegación web. Incluye dos puertos Thunderbolt/USB 4, Magic Keyboard con Touch Bar y Touch ID, cámara FaceTime HD, audio estéreo con Dolby Atmos, Wi-Fi 6 y Bluetooth 5.0. Corre macOS Monterey e incluye apps como Safari, FaceTime y GarageBand.',
      price: 2550,
      stock: 1,
      category: "computing",
    },
    {
      id: "c2",
      image:
        "https://images.fravega.com/f300/1bb876a70d04cb41ae2f6ae330606615.jpg.webp",
      name: "Monitor Samsung 32",
      description: "El Smart Monitor Samsung combina funcionalidad y diseño. Permite disfrutar contenido en 4K HDR sin necesidad de una PC, con acceso a aplicaciones de streaming y Microsoft 365. Su diseño elegante se adapta a cualquier entorno, mientras que Samsung Dex y el control remoto de tu PC amplían su versatilidad.",
      price: 500,
      stock: 3,
      category: "computing",
    }
  ];

  const getProducts = () => {
    return new Promise((resolve, reject) => {
      setTimeout(()=>{resolve(products)
      }, 2000) })
  }

export { getProducts }