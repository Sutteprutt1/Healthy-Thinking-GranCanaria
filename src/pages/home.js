import { Card } from "../components/activity-card/card/card";
import { BackgroundGradient } from "../components/globalStyles";
import Navbar from "../components/navbar/navbar";

export function Home() {
  return (
    <>
      <Navbar />
      <BackgroundGradient />
      <h1>Home</h1>
      <Card />
    </>
  );
}
