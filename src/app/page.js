import Navbar from "./components/Navbar";
import AchievementsSection from "./components/AchievementsSection";
import Festival from "./components/Festival";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-center bg-gradient-radial  from-[#4362c7]  via-[#c4a3d2]  to-[#589dde]">
      <Navbar />
      <div className="container mt-24 mx-auto p-2">
        <Festival/>
        {/* <AchievementsSection /> */}
      </div>
    </main>
  );
}
