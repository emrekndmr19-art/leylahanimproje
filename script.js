const form = document.getElementById("score-form");
const ageInput = document.getElementById("age");
const ageValue = document.getElementById("age-value");
const scoreValue = document.getElementById("score-value");
const scoreLabel = document.getElementById("score-label");
const scoreDescription = document.getElementById("score-description");

const scoreCopy = [
  {
    min: 0,
    label: "Başlangıç",
    text: "Profilinizi tamamlamak için dil veya sertifika adımlarına odaklanabilirsiniz.",
  },
  {
    min: 60,
    label: "Gelişen Profil",
    text: "Puanınız iyi seviyede. Deneyim veya eğitim güncellemesi ile daha güçlü hale gelebilir.",
  },
  {
    min: 80,
    label: "Güçlü Profil",
    text: "Profiliniz hedeflenen başvurular için güçlü görünüyor. Ek belgelerle puanınızı daha da yükseltebilirsiniz.",
  },
  {
    min: 95,
    label: "Elit Profil",
    text: "Skorunuz çok yüksek. Öncelikli başvurular için hazırsınız.",
  },
];

const calculateAgeScore = (age) => {
  if (age <= 25) return 25;
  if (age <= 30) return 20;
  if (age <= 35) return 16;
  if (age <= 40) return 12;
  return 8;
};

const updateScore = () => {
  const education = Number(document.getElementById("education").value);
  const experience = Number(document.getElementById("experience").value);
  const language = Number(document.getElementById("language").value);
  const certificate = Number(document.getElementById("certificate").value);
  const ageScore = calculateAgeScore(Number(ageInput.value));
  const total = education + experience + language + certificate + ageScore;

  scoreValue.textContent = total;

  const copy = scoreCopy
    .slice()
    .reverse()
    .find((item) => total >= item.min) || scoreCopy[0];

  scoreLabel.textContent = copy.label;
  scoreDescription.textContent = copy.text;
};

if (ageInput) {
  ageValue.textContent = ageInput.value;
  ageInput.addEventListener("input", (event) => {
    ageValue.textContent = event.target.value;
    updateScore();
  });
}

if (form) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    updateScore();
  });
}

updateScore();
