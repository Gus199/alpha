import React from 'react';

import ProjectItem from './ProjectItem';

function ProjectList({project}) {
    
  return (
    <div id="projects" class="container mt-5 pt-5">

    <h1 class="text-warning mb-3 pb-2">My Projects</h1>
     <div class="row">

       
       {project.map((item) => (
           <ProjectItem key={item.id} item={item} />
       ))}
        
     </div>
     </div>
  )
  
}

export default ProjectList;
