import Display from "./components/display";

export default function Home() {
  // loop through the sentences but only display one at a time and dispaly it for 25 seconds
  // then move to the next sentence

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1>Learn It!</h1>
      <Display />
    </div>
  );
}
