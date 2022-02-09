
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { useState } from 'react';
import Navbar from './components/Navbar';
import Card from './components/Card';
import ProjectList from './components/ProjectList';
import ProjectData from './data/ProjectData';
import Footer from './components/Footer';
import SocialMedia from './components/SocialMedia';









function App() {
  const [project, setProject] = useState(ProjectData)
  
  return (
   <>
  
   <Navbar />
   <Card />
   <ProjectList project={project}/>
   <SocialMedia />
   
   <Footer />
   
   
   

   </>
  
  );
}

export default App;
