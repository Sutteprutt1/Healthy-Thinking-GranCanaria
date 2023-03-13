import { Card } from "../components/activity-card/card/card";
import { BackgroundGradient } from "../components/globalStyles";

export function Home() {
  return (
    <div className="home">
      <BackgroundGradient />
      <h1>Home</h1>
      <Card />
    </div>
  );
}
