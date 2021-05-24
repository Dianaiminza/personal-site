import React, {useState,useEffect} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import { useSelector} from 'react-redux';
import Footer from '../footer/footer'
// import LogIn from '../../pages/signin';
// import{Switch}from 'react-router-dom';
  const FileUpload = () => {
  const userSignin = useSelector((state) => state.userSignin.userInfo);
  
  // const { userInfo } = userSignin;
  const [project, setProject] = useState([]);
  // const [isLog, setLog] = useState({});
  
     useEffect(() => {
    axios.get(`http://localhost:5000/projects`)
      .then((res) => {
        console.log(res.data)
         setProject(res.data);
      })
  }, 
  []);
  console.log({userSignin})
  //  const handleLogin = (isLog)=>{
  //    setLog(isLog)
  //  console.log(isLog)
  // alert(isLog)
  //  }

  const deleteProject=(projectid)=> {
    let selectproject=project.find(function(project){
     return project.id === projectid;
     
     });
     const yesdelete= window.confirm(`Do you want to delete ${selectproject.title} ${selectproject.projectid}?`);
     
     if(yesdelete){

     const res =axios.delete("http://localhost:5000/projects/delete/" +selectproject.projectid ,{
       headers: {
           "Content-Type": "application/json",
           Accept: "application/json",
       },
       
      })
      .then((res) => {
        if (res) {
            alert("Deleted successfully!");  
        }
    })
    .catch((e) => {
        alert(e);
    });
      console.log(res)
  }else{
    alert("Delete cancelled");
   }
  }    
  
  return (
    <div className="untree_co-section untree_co-section-4 pb-0" id="portfolio-section">
<div className="container">

<div className="relative"><div className="loader-portfolio-wrap"><div className="loader-portfolio"></div></div> </div>
<div id="portfolio-single-holder"></div>
<div className="portfolio-wrapper">
<div id="posts" className="row">
<div className="item web branding col-sm-6 col-md-6 col-lg-4 isotope-mb-2">
<a href="https://github.com/Dianaiminza/Soko"rel="noopener noreferrer"target="_blank" className="portfolio-item ajax-load-page isotope-item gsap-reveal-img" data-id="1">
<div className="overlay">
<span className="wrap-icon icon-link2"></span>
<div className="portfolio-item-content">
<h3>Project Number 1</h3>
<p>An e commerce app</p>

</div>
</div>
<img src="images/img_1.jpg" className="lazyload  img-fluid" alt="Images" />
</a>
</div>
<div className="item web branding col-sm-6 col-md-6 col-lg-4 isotope-mb-2">
<a href="https://github.com/Dianaiminza/FileUpload" rel="noopener noreferrer"target="_blank"className="portfolio-item ajax-load-page isotope-item gsap-reveal-img" data-id="2">
<div className="overlay">
<span className="wrap-icon icon-link2"></span>
<div className="portfolio-item-content">
<h3>Project Number 2</h3>
<p>File upload.A project on uploading,compressing files</p>
</div>
</div>
<img src="images/img_2.jpg" className="lazyload  img-fluid" alt="Images" />
</a>
</div>
<div className="item web branding col-sm-6 col-md-6 col-lg-4 isotope-mb-2">
<a href="https://dianaiminza.github.io/"rel="noopener noreferrer"target="_blank"className="portfolio-item ajax-load-page isotope-item gsap-reveal-img" data-id="3">
<div class="overlay">
<span className="wrap-icon icon-link2"></span>
<div className="portfolio-item-content">
 <h3>Project Number 3</h3>
<p>Dijkstra's Algorithm Solver</p>
</div>
</div>
<img src="images/img_3.jpg" className="lazyload  img-fluid" alt="Images" />
</a>
</div>
<div className="item web branding col-sm-6 col-md-6 col-lg-4 isotope-mb-2">
<a href="https://dianaiminza.github.io/Budget/" rel="noopener noreferrer"target="_blank" className="portfolio-item ajax-load-page isotope-item gsap-reveal-img" data-id="3">
<div className="overlay">
<span className="wrap-icon icon-link2"></span>
<div className="portfolio-item-content">
<h3>Project Number 4</h3>
<p>Budget Planner</p>
</div>
</div>
<img src="images/img_4.jpg" className="lazyload  img-fluid" alt="Images" />
</a>
</div>
<div className="item web branding col-sm-6 col-md-6 col-lg-4 isotope-mb-2">
<a href="https://dianaiminza.github.io/ChuckNorris/"rel="noopener noreferrer"target="_blank"  className="portfolio-item ajax-load-page isotope-item gsap-reveal-img" data-id="3">
<div className="overlay">
<span className="wrap-icon icon-link2"></span>
<div className="portfolio-item-content">
<h3>Project Number 5</h3>
<p>Chuck Norris</p>
</div>
</div>
<img src="images/img_5.jpg" class="lazyload  img-fluid" alt="Images" />
</a>
</div>
<div className="item web branding col-sm-6 col-md-6 col-lg-4 isotope-mb-2">
<a href=" https://dianaiminza.github.io/Health-Bio-App/"rel="noopener noreferrer"target="_blank"  className="portfolio-item ajax-load-page isotope-item gsap-reveal-img" data-id="1">
<div classNamr="overlay">
<span className="wrap-icon icon-link2"></span>
<div className="portfolio-item-content">
<h3>Project Number 6</h3>
<p>Health Bio App</p>
</div>
</div>
<img src="images/img_6.jpg" className="lazyload  img-fluid" alt="Images" />
</a>
</div>
<div className="item web branding col-sm-6 col-md-6 col-lg-4 isotope-mb-2">
<a href="https://github.com/Dianaiminza/Hotelreservation"rel="noopener noreferrer"target="_blank"  className="portfolio-item ajax-load-page isotope-item gsap-reveal-img" data-id="2">
<div className="overlay">
<span className="wrap-icon icon-link2"></span>
<div className="portfolio-item-content">
<h3>Project Number 7</h3>
<p>Hotel reservation</p>
</div>
</div>
<img src="images/img_7.jpg" className="lazyload  img-fluid" alt="Images" />
 </a>
</div>
<div className="item web branding col-sm-6 col-md-6 col-lg-4 isotope-mb-2">
<a  href="https://dianaiminza.github.io/kicks/" rel="noopener noreferrer"target="_blank" className="portfolio-item ajax-load-page isotope-item gsap-reveal-img" data-id="3">
<div classname="overlay">
<span classnAME="wrap-icon icon-link2"></span>
<div className="portfolio-item-content">
<h3>Project Number 8</h3>
<p>Kicks Kenya</p>
</div>
</div>
<img src="images/img_8.jpg" className="lazyload  img-fluid" alt="Images" />
</a>
</div>
<div className="item web branding col-sm-6 col-md-6 col-lg-4 isotope-mb-2">
<a href="https://github.com/Dianaiminza/KicksKenya" rel="noopener noreferrer"target="_blank"className="portfolio-item ajax-load-page isotope-item gsap-reveal-img" data-id="3">
<div className="overlay">
<span className="wrap-icon icon-link2"></span>
<div className="portfolio-item-content">
<h3>Project Number 9</h3>
<p>Kicks</p>
</div>
</div>
<img src="images/img_9.jpg" className="lazyload  img-fluid" alt="Images" />
</a>
</div>
<div className="item web branding col-sm-6 col-md-6 col-lg-4 isotope-mb-2">
<a href="https://github.com/Dianaiminza/Cloud"rel="noopener noreferrer"target="_blank" className="portfolio-item ajax-load-page isotope-item gsap-reveal-img" data-id="3">
<div className="overlay">
<span className="wrap-icon icon-link2"></span>
<div className="portfolio-item-content">
<h3>Project Number 10</h3>
<p>Cloudinary Image Uplod</p>
</div>
</div>
<img src="images/img_10.jpg" className="lazyload  img-fluid" alt="Images" />
</a>
</div>
<div className="item web branding col-sm-6 col-md-6 col-lg-4 isotope-mb-2">
<a href="https://github.com/Dianaiminza/Bitly"rel="noopener noreferrer"target="_blank" class="portfolio-item ajax-load-page isotope-item gsap-reveal-img" data-id="3">
<div className="overlay">
<span className="wrap-icon icon-link2"></span>
<div className="portfolio-item-content">
<h3>Project Number 11</h3>
<p>Bitly URL Shortener</p>
</div>
</div>
<img src="images/img_11.jpg" className="lazyload  img-fluid" alt="Images" />
</a>
</div>
<div className="item web branding col-sm-6 col-md-6 col-lg-4 isotope-mb-2">
<a href="https://github.com/Dianaiminza/Url" rel="noopener noreferrer"target="_blank" className="portfolio-item ajax-load-page isotope-item gsap-reveal-img" data-id="3">
<div className="overlay">
<span className="wrap-icon icon-link2"></span>
<div className="portfolio-item-content">
<h3>Project Number 12</h3>
<p>URL</p>
</div>
</div>
<img src="images/img_12.jpg" className="lazyload  img-fluid" alt="Images" />
</a>
</div>
</div>
</div>

</div>


<Footer/>
</div>

  );          
};
export default FileUpload;


