function mostrarLibros(categoria) {
    const libros = {
        ficcion: [
            { 
                titulo: "1984", 
                autor: "George Orwell", 
                imagen: "../Images/Ficcion Clasica/1984.jpg", 
                descripcion: "Una novela distópica que explora un futuro totalitario, donde el Gran Hermano observa todo y el pensamiento independiente es un crimen." 
            },
            { 
                titulo: "Cien Años de Soledad", 
                autor: "Gabriel García Márquez", 
                imagen: "../Images/Ficcion Clasica/cien_anos_de_soledad.jpg", 
                descripcion: "La historia épica y mágica de la familia Buendía en el pueblo ficticio de Macondo, marcada por generaciones de realismo mágico y soledad." 
            },
            { 
                titulo: "El Gran Gatsby", 
                autor: "F. Scott Fitzgerald", 
                imagen: "../Images/Ficcion Clasica/el_gran_gatsby.jpeg", 
                descripcion: "Una crítica a la sociedad estadounidense de los años 20, donde el sueño americano se revela como un espejismo a través de la historia de Jay Gatsby." 
            },
            { 
                titulo: "Matar a un Ruiseñor", 
                autor: "Harper Lee", 
                imagen: "../Images/Ficcion Clasica/matar_a_un_ruisenor.jpg", 
                descripcion: "Un poderoso relato sobre la injusticia racial y la pérdida de la inocencia en el sur de Estados Unidos, narrado desde la perspectiva de una niña." 
            },
            { 
                titulo: "Orgullo y Prejuicio", 
                autor: "Jane Austen", 
                imagen: "../Images/Ficcion Clasica/orgullo_y_prejuicio.jpeg", 
                descripcion: "Una historia de amor y malentendidos en la Inglaterra del siglo XIX, donde las diferencias sociales y las primeras impresiones juegan un papel crucial." 
            }
        ],
        ciencia: [
            { 
                titulo: "Breve Historia del Tiempo", 
                autor: "Stephen Hawking", 
                imagen: "../Images/Ciencia/Breve historia del tiempo.jpeg", 
                descripcion: "Un recorrido por el universo y los conceptos más complejos de la física moderna, explicado de manera accesible por el renombrado físico Stephen Hawking." 
            },
            { 
                titulo: "Cosmos", 
                autor: "Carl Sagan", 
                imagen: "../Images/Ciencia/Cosmos.jpeg", 
                descripcion: "Una exploración de la historia del universo, la ciencia y la civilización humana, presentada de manera poética y científica por Carl Sagan." 
            },
            { 
                titulo: "El Gen Egoísta", 
                autor: "Richard Dawkins", 
                imagen: "../Images/Ciencia/Gen egoista.jpg", 
                descripcion: "Una revolucionaria interpretación de la teoría de la evolución, argumentando que los genes son las verdaderas unidades de selección natural." 
            },
            { 
                titulo: "El Origen de las Especies", 
                autor: "Charles Darwin", 
                imagen: "../Images/Ciencia/Origen de las especies.jpg", 
                descripcion: "La obra fundacional de la teoría de la evolución por selección natural, que transformó nuestra comprensión de la vida en la Tierra." 
            },
            { 
                titulo: "Sapiens", 
                autor: "Yuval Noah Harari", 
                imagen: "../Images/Ciencia/Sapiens.jpeg", 
                descripcion: "Una fascinante historia de la humanidad, desde el Homo sapiens hasta la revolución tecnológica, explorando cómo llegamos a ser quienes somos hoy." 
            }
        ],
        filosofia: [
            { 
                titulo: "El Contrato Social", 
                autor: "Jean-Jacques Rousseau", 
                imagen: "../Images/Filosofia/El contrato social.jpg", 
                descripcion: "Una obra fundamental de la filosofía política, que plantea la idea de que la legitimidad del gobierno proviene del consentimiento del pueblo." 
            },
            { 
                titulo: "La Crítica de la Razón Pura", 
                autor: "Immanuel Kant", 
                imagen: "../Images/Filosofia/La crítica de la razón pura.jpeg", 
                descripcion: "Un análisis profundo de cómo percibimos y comprendemos el mundo, estableciendo los límites del conocimiento humano y la razón." 
            },
            { 
                titulo: "Más Allá del Bien y del Mal", 
                autor: "Friedrich Nietzsche", 
                imagen: "../Images/Filosofia/Mas alla del bien y del mal.jpeg", 
                descripcion: "Una crítica radical a la moral tradicional y las creencias filosóficas occidentales, que desafía las nociones de verdad, moralidad y poder." 
            },
            { 
                titulo: "Meditaciones", 
                autor: "Marco Aurelio", 
                imagen: "../Images/Filosofia/Meditaciones.jpeg", 
                descripcion: "Reflexiones filosóficas personales del emperador romano Marco Aurelio, ofreciendo sabiduría estoica sobre la vida, el deber y la muerte." 
            },
            { 
                titulo: "República", 
                autor: "Platón", 
                imagen: "../Images/Filosofia/Republica.jpg", 
                descripcion: "Un diálogo filosófico sobre la justicia, la sociedad ideal y el papel del filósofo-rey, una de las obras más influyentes de la filosofía occidental." 
            }
        ]
    };

    const librosDiv = document.getElementById("libros");
    librosDiv.innerHTML = "";

    libros[categoria].forEach(libro => {
        const libroElement = document.createElement("div");
        libroElement.innerHTML = `
            <img src="${libro.imagen}" alt="${libro.titulo}" style="width:150px; height:200px;" onclick="mostrarDescripcion('${libro.titulo}', '${libro.imagen}', '${libro.descripcion}')">
            <h3>${libro.titulo}</h3>
            <p>${libro.autor}</p>
        `;
        librosDiv.appendChild(libroElement);
    });
}

function mostrarDescripcion(titulo, imagen, descripcion) {
    localStorage.setItem('titulo', titulo);
    localStorage.setItem('imagen', imagen);
    localStorage.setItem('descripcion', descripcion);
    window.location.href = 'descripcion.html';
}
