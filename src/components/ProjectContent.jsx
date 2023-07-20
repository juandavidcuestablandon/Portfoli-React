import 'boxicons' ;

const ProjectContent = ({link, img, description}) => {
  return (
    <div className="box">
    <a href={link}><img src={img} alt="project" /></a>
     <p>{description}</p>
     <div>
      <a href="#"><i className='bx bxl-github'></i></a>
      <a href="#"><i className='bx bxs-navigation'></i></a>
     </div>
    

    </div>
  )
}

export default ProjectContent