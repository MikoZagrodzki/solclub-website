import Navbar from "./components/Navbar";
import AchievementsSection from "./components/AchievementsSection";
import Festival from "./components/Festival";
import gradientBg from '../styles/gradientBg.module.css';


export default function Home() {
  return (
    <main className={`flex min-h-screen flex-col justify-center ${gradientBg.gradientBackground}`}>
      <Navbar />
      <div className=" mt-24 mx-auto p-2 ">
        <Festival/>
        {/* <AchievementsSection /> */}
        
      </div>
    </main>
  );
}
