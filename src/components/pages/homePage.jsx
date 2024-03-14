import { Hero } from "components/hero/Hero"
import { HowItWorks } from "components/howItWork/HowItWorks";
import { Quiz } from "components/quiz/Quiz";

export const HomePage = () => {
    return (
      <>
        <Hero />
        <HowItWorks />
        <Quiz/>
      </>
    );
}