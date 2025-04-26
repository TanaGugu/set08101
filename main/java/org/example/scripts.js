// Reptile Filter + Search
const reptiles = [
    {name: 'Leo', species: 'gecko', size: 'small', image: 'images/leopard-gecko.jpg'},
    {name: 'Blaze', species: 'snake', size: 'medium', image: 'images/blaze-corn-snake.jpg'},
    {name: 'Slyther', species: 'snake', size: 'large', image: 'images/boa-constrictor.jpg'},
    {name: 'Ziggy', species: 'lizard', size: 'medium', image: 'images/bearded-dragon.jpg'},
    {name: 'Chomp', species: 'lizard', size: 'large', image: 'images/monitor-lizard.jpg'},
    {name: 'Tiny', species: 'gecko', size: 'small', image: 'images/crested-gecko.jpg'},
    {name: 'Spice', species: 'snake', size: 'small', image: 'images/king-snake.jpg'},
    {name: 'Scales', species: 'lizard', size: 'large', image: 'images/tegus.jpg'},
    {name: 'Mossy', species: 'gecko', size: 'medium', image: 'images/mossy-gecko.jpg'},
    {name: 'Shadow', species: 'snake', size: 'medium', image: 'images/black-rat-snake.jpg'}
];

function renderReptiles(data) {
    const grid = document.getElementById('reptileGrid');
    if (!grid) return;
    grid.innerHTML = '';
    data.forEach(reptile => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
      <a href="reptile-detail.html?name=${reptile.name}">
        <img src="${reptile.image}" alt="${reptile.name}">
        <h4>${reptile.name}</h4>
        <p>${reptile.species}</p>
      </a>`;
        grid.appendChild(card);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    renderReptiles(reptiles);

    const speciesFilter = document.getElementById('speciesFilter');
    const searchBar = document.getElementById('searchBar');

    if (speciesFilter) {
        speciesFilter.addEventListener('change', () => {
            filter();
        });
    }

    if (searchBar) {
        searchBar.addEventListener('input', () => {
            filter();
        });
    }

    function filter() {
        const species = speciesFilter.value;
        const query = searchBar.value.toLowerCase();
        const filtered = reptiles.filter(r =>
            (!species || r.species === species) &&
            r.name.toLowerCase().includes(query)
        );
        renderReptiles(filtered);
    }
});

// Quiz (simple logic)
const quizData = [
    {
        question: "What's your activity level?",
        answers: ["Low", "Medium", "High"],
        mapping: {
            "Low": "snake",
            "Medium": "gecko",
            "High": "lizard"
        }
    },
    {
        question: "How much space do you have?",
        answers: ["Small", "Moderate", "Large"],
        mapping: {
            "Small": "gecko",
            "Moderate": "snake",
            "Large": "lizard"
        }
    }
];

function startQuiz() {
    const quizEl = document.getElementById("quiz");
    if (!quizEl) return;
    let current = 0;
    let answers = [];

    function showQuestion(index) {
        const q = quizData[index];
        quizEl.innerHTML = `
      <h3>${q.question}</h3>
      ${q.answers.map(ans => `<button>${ans}</button>`).join('')}
      <p>Progress: ${index + 1} / ${quizData.length}</p>
    `;

        document.querySelectorAll("#quiz button").forEach(btn => {
            btn.onclick = () => {
                answers.push(btn.innerText);
                if (index + 1 < quizData.length) {
                    showQuestion(index + 1);
                } else {
                    showResult(answers);
                }
            };
        });
    }

    function showResult(answers) {
        const scores = {};
        answers.forEach((ans, i) => {
            const species = quizData[i].mapping[ans];
            scores[species] = (scores[species] || 0) + 1;
        });

        const match = Object.keys(scores).reduce((a, b) => scores[a] > scores[b] ? a : b);
        document.getElementById("result").innerHTML = `You matched with a: <strong>${match.toUpperCase()}</strong>!`;
        quizEl.innerHTML = '';
    }

    showQuestion(0);
}

document.addEventListener("DOMContentLoaded", startQuiz);

const sizeFilter = document.getElementById('sizeFilter');

function filter() {
    const species = speciesFilter.value;
    const size = sizeFilter.value;
    const query = searchBar.value.toLowerCase();

    const filtered = reptiles.filter(r =>
        (!species || r.species === species) &&
        (!size || r.size === size) &&
        r.name.toLowerCase().includes(query)
    );

    renderReptiles(filtered);
}

<!-- In index.html or catalog.html -->
<a href="reptile-detail.html?name=Leo">See Leo's Profile</a>
