import Features from "../src/templates/features"
import Research from "../src/templates/research"
import Story from './../src/templates/story';
import Products from '../pages/browseProducts';


export default function Home() {
  return (
    <div>
      <Features />
      <Story />
      <Research />
      <Products />
    </div>
  );
}