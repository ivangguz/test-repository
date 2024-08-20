import Hero from "@/components/Hero";
import imgPerform from 'public/images/performance.jpg';

export default function PerformancePage(){
    return (
        <Hero 
        imgData={imgPerform} 
        imgAlt="machine solding"
        title="Proffesional Cloud Hosting">
      </Hero>
    );
}