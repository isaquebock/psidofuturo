import Header from "./components/header/header";
import PsychologistList from "./components/psychologistList/psychologistList";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-5 sm:p-24">
      <Header/>
      <PsychologistList></PsychologistList>
    </main>
  );
}
