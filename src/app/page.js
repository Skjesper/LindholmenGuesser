import styles from "./page.module.css";
import Button from "@/components/Button";

export default function HomePage() {
  return (
    <div>
      <img
        src="/logo.png"
        alt="Lindholmen Guesser Logo"
        className={styles.logo}
      />
      <h1>FOTOGUESSR</h1>
      <p>
        Välkommen till Lindholmen Guesser! Testa din kunskap om Lindholmen genom
        att gissa platser baserat på bilder.
      </p>
      <Button href="/levels">Spela</Button>
      <Button href="/leaderboard">Poängställning</Button>
    </div>
  );
}
