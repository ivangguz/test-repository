import Hero from "@/components/Hero";
import imgScale from 'public/images/scale.jpg';

export default function ScalePage(){
    return (
        <Hero 
        imgData={imgScale} 
        imgAlt="scale picture"
        title="Proffesional Cloud Hosting">
      </Hero>
    );
}