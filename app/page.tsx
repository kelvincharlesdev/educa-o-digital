import Image from "next/image";
import TutorialsPage from "./_components/tutorialLists";
import Footer from "./_components/footer";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex h-full flex-col items-center justify-center">
        <Image width={700} height={30} src="/banner.png" alt="Banner" />
        <p className="p-5 font-bold">
          Nosso objetivo é ajudar você a dominar ferramentas digitais essenciais
          para o dia a dia. Aqui você encontrará tutoriais e dicas práticas!
        </p>
      </div>

      <TutorialsPage />

      <Footer />
    </div>
  );
};

export default Home;
