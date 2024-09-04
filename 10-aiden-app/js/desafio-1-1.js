const questions = [
    {
        question: "¿Cuáles son los principales programas a utilizar a lo largo de este MOOC?",
        options: ["Word, Excel", "Photoshop, Illustrator", "Premiere, After Effects", "Word, Excel, Balsamiq, Firefox"],
        correctAnswer: "D" 
    },
    {
        question: "¿Cuál es el propósito principal de un wireframe?",
        options: ["Crear gráficos", "Estructurar contenido", "Editar videos", "Diseñar logos"],
        correctAnswer: "B" 
    },
    {
        question: "¿Qué herramienta se usa comúnmente para prototipado?",
        options: ["Photoshop", "After Effects", "Balsamiq", "Excel"],
        correctAnswer: "C" 
    },
    {
        question: "¿Qué formato es el más adecuado para guardar imágenes sin pérdida de calidad?",
        options: ["JPEG", "PNG", "GIF", "MP4"],
        correctAnswer: "B" 
    },
    {
        question: "¿Qué software se usa para la edición de video?",
        options: ["Premiere Pro", "Excel", "Word", "PowerPoint"],
        correctAnswer: "A" 
    }
];

let currentQuestionIndex = 0;
let progressBar = document.getElementById("progressBar");
let questionElement = document.getElementById("question");
let startButton = document.getElementById("startButton");
let questionContainer = document.getElementById("questionContainer");
let nextButton = document.getElementById("nextButton");
let answers = document.querySelectorAll(".answer");

// Evento para iniciar el cuestionario
startButton.addEventListener('click', () => {
    startButton.classList.add('hidden');
    questionContainer.classList.remove('hidden');
    loadQuestion();
});

// Función para cargar la pregunta actual
function loadQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    answers.forEach((answer, index) => {
        answer.textContent = $;{String.fromCharCode(65 + index)}; $;{currentQuestion.options[index]};
        answer.dataset.option = String.fromCharCode(65 + index);
        answer.classList.remove("correct", "incorrect");
    });
    nextButton.classList.add('hidden');
}

// Evento para manejar la selección de respuestas
answers.forEach(answer => {
    answer.addEventListener('click', () => {
        const selectedOption = answer.dataset.option;
        const currentQuestion = questions[currentQuestionIndex];
        if (selectedOption === currentQuestion.correctAnswer) {
            answer.classList.add("correct");
        } else {
            answer.classList.add("incorrect");
        }
        nextButton.classList.remove('hidden');
    });
});

// Evento para avanzar a la siguiente pregunta
nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
        updateProgressBar();
    } else {
        alert('¡Desafío completado!');
        nextButton.disabled = true;
    }
});

// Función para actualizar la barra de progreso
function updateProgressBar() {
    const progress = (currentQuestionIndex / questions.length) * 100;
    progressBar.style.width = progress + "%";
}

updateProgressBar();