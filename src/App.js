import React from "react";
import "./App.css";

const championActuel = {
  surnom: "Québéric",
  name: "Médéric Bélec",
  startDate: "2025-10-16",
  image: "/photos/Mederic2.jpg",
};

const champions = [
  
  {
    surnom: "Oleks",
    name: "Oleksandre Kumenko s",
    startDate: "2025-01-16",
    endDate: "2025-10-16",
    image: "/photos/Oleks1.jpg",
  },
  {
    surnom: "Québéric",
    name: "Médéric Bélec",
    startDate: "2024-12-20",
    endDate: "2025-01-16",
    image: "/photos/Mederic1.jpg",
  },
];

export default function App() {
  return (
    <div>
      {/* HEADER */}
      <header>
        <h1>🏆 Le Champion du Chapeau 🏆</h1>
      </header>

      {/* CHAPEAU SECTION */}
      <section className="chapeau-container">
        <img src="/photos/chapeau.jpg" alt="Le Chapeau" className="chapeau" />
      </section>

      <section className="champion-actuel-section">
        <h2 className="text-3xl font-semibold mb-4 text-yellow-400">
          Champion Actuel
        </h2>
        <div className="champion-actuel-card">
          <img
            src={championActuel.image}
            alt={championActuel.name}
            className="champion-actuel-img"
          />
          <p className="font-bold text-3xl">{championActuel.surnom}</p>
          <p className="text-lg">{championActuel.name}</p>
          <p className="text-lg">Depuis le {championActuel.startDate}</p>
        </div>
      </section>

      {/* CHAMPIONS SECTION */}
      <section className="champions-section">
        <h2 className="text-3xl font-semibold mb-6 text-yellow-400">
          Liste des Champions
        </h2>
        <div className="champions-container">
          {champions.map((champion, index) => (
            <div key={index} className="champion-card">
              <img
                src={champion.image}
                alt={champion.name}
                className="champion-img"
              />
              <p className="font-bold text-2xl">{champion.surnom}</p>
              <p className="text-md">{champion.name}</p>
              <p className="text-md">
                {champion.startDate} → {champion.endDate}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* RÈGLES SECTION */}
      <section className="rules-section">
        <h2 className="text-3xl font-semibold mb-6 text-yellow-400">
          Règles du Chapeau
        </h2>
        <ul className="rules-list">
          <li>
            <span>🔥</span> Pour gagner le chapeau, il faut battre le champion
            actuel au bras de fer.
          </li>
          <li>
            <span>💪</span> Un même challenger ne peut défier le champion qu'une
            fois par semaine.
          </li>
          <li>
            <span>❌</span> Le champion ne peut pas refuser un défi.
          </li>
          <li>
            <span>🎓</span> Le champion et le challenger doivent être étudiants
            à l'ÉTS et participer à la course aux Jeux de Génies de l'ÉTS.
          </li>
          <li>
            <span>🏅</span> Si le champion obtient son diplôme, il doit passer
            le chapeau et sera intronisé au mur des légendes.
          </li>
        </ul>
      </section>
    </div>
  );
}
