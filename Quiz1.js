const questions = [
    {
      text: "What kind of home do you stay in?",
      options: ["Apartment", "House with a yard", "Farm", "Large house"],
    },
    {
      text: "How much time, on average, can you give daily to your pet?",
      options: ["A little", "Some", "A lot", "24 hours"],
    },
    {
      text: "How much energy do you want this pet to have?",
      options: ["Low-maintenance", "Moderate", "Active", "Very interactive"],
    }
  ];
  
  const results = {
    "Apartment|A little|Low-maintenance": "Marvin the Mouse",
    "Apartment|Some|Moderate": "Harrison the Hamster",
    "Apartment|A lot|Very Interactive": "Sarah the Squirrel",
    "House with a yard|A lot|Active": "Carmen the Capybara",
    "Farm|24/7|Low-maintenance": "Bill the Beaver",
    "Farm|Some|Moderate": "Carmen the Capybara",
    "Large house|A lot|Low-maintenance": "Harrison the Hamster",
    "Large house|24 hours|Very Interactive":"Sarah the Squirrel",
    "Large house|24 hours|Active": "Carmen the Capybara"
  };
  
  const container = document.getElementById("quiz-container");
  questions.forEach((question, index) => {
    const div = document.createElement("div");
    div.className = "question";
    const questionText = document.createElement("p");
    questionText.textContent = question.text;
    div.appendChild(questionText);
    
    question.options.forEach(option => {
      const label = document.createElement("label");
      label.style.display = "block";
      const input = document.createElement("input");
      input.type = "radio";
      input.name = `question-${index}`;
      input.value = option;
      label.appendChild(input);
      label.append(option);
      div.appendChild(label);
    });
    container.appendChild(div);
  });
  
  function getResult() {
    const answers = questions.map((_, index) => {
      const selected = document.querySelector(`input[name="question-${index}"]:checked`);
      return selected ? selected.value : null;
    });
  
    if (answers.includes(null)) {
      alert("Please answer all the questions!");
      return;
    }
  
    const key = answers.join("|");
    const pet = results[key];
    const resultText = pet ? `Your perfect match here is: ${pet}` : "Sorry, we couldn't find a perfect pet for you here.";
    document.getElementById("result").textContent = resultText;
  }