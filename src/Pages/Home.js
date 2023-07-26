import React from 'react'
import Navbar from '../Components/Navbar'

const Home = () => {
  return (
     <>
      <Navbar/>
 
<section id="center" className="center_home">
 <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2" className="" aria-current="true"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div> 
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="img/1.jpg" className="d-block w-100" alt="..." />
      <div className="carousel-caption d-md-block">
       <h1 className="font_60"> Entertainment Planet</h1>
	   <h6 className="mt-3">
	    <span className="col_red me-3">
		 <i className="fa fa-star"></i>
		 <i className="fa fa-star"></i>
		 <i className="fa fa-star"></i>
		 <i className="fa fa-star"></i>
		 <i className="fa fa-star-half-o"></i>
		</span>
		 4.5 (Imdb)      Year : 2022
		 <a className="bg_red p-2 pe-4 ps-4 ms-3 text-white d-inline-block" href="#">Action</a>
	   </h6>
	   <p className="mt-3">Four waves of increasingly deadly alien attacks have left most of Earth in ruin. Cassie is on the run, desperately trying to save her younger brother.</p>
	   <p className="mb-2"><span className="col_red me-1 fw-bold">Starring:</span> Eget Nulla Semper Porta Dapibus Diam Ipsum</p>
	   <p className="mb-2"><span className="col_red me-1 fw-bold">Genres:</span> Music</p>
	   <p><span className="col_red me-1 fw-bold">Runtime:</span> 1h 32m</p>	
	   <h6 className="mt-4"><a className="button" href="#"><i className="fa fa-play-circle align-middle me-1"></i> Watch Trailer</a></h6>
      </div>
    </div>
    <div className="carousel-item">
      <img src="img/2.jpg" className="d-block w-100" alt="..." />
      <div className="carousel-caption d-md-block">
       <h1 className="font_60"> Lorem Semper Nulla</h1>
	   <h6 className="mt-3">
	    <span className="col_red me-3">
		 <i className="fa fa-star"></i>
		 <i className="fa fa-star"></i>
		 <i className="fa fa-star"></i>
		 <i className="fa fa-star"></i>
		 <i className="fa fa-star-half-o"></i>
		</span>
		 4.5 (Imdb)      Year : 2022
		 <a className="bg_red p-2 pe-4 ps-4 ms-3 text-white d-inline-block" href="#">Action</a>
	   </h6>
	   <p className="mt-3">Four waves of increasingly deadly alien attacks have left most of Earth in ruin. Cassie is on the run, desperately trying to save her younger brother.</p>
	   <p className="mb-2"><span className="col_red me-1 fw-bold">Starring:</span> Eget Nulla Semper Porta Dapibus Diam Ipsum</p>
	   <p className="mb-2"><span className="col_red me-1 fw-bold">Genres:</span> Music</p>
	   <p><span className="col_red me-1 fw-bold">Runtime:</span> 1h 32m</p>	
	   <h6 className="mt-4"><a className="button" href="#"><i className="fa fa-play-circle align-middle me-1"></i> Watch Trailer</a></h6>
      </div>
    </div>
    <div className="carousel-item">
      <img src="img/3.jpg" className="d-block w-100" alt="..." />
      <div className="carousel-caption d-md-block">
       <h1 className="font_60"> Eget Diam Ipsum</h1>
	   <h6 className="mt-3">
	    <span className="col_red me-3">
		 <i className="fa fa-star"></i>
		 <i className="fa fa-star"></i>
		 <i className="fa fa-star"></i>
		 <i className="fa fa-star"></i>
		 <i className="fa fa-star-half-o"></i>
		</span>
		 4.5 (Imdb)      Year : 2022
		 <a className="bg_red p-2 pe-4 ps-4 ms-3 text-white d-inline-block" href="#">Action</a>
	   </h6>
	   <p className="mt-3">Four waves of increasingly deadly alien attacks have left most of Earth in ruin. Cassie is on the run, desperately trying to save her younger brother.</p>
	   <p className="mb-2"><span className="col_red me-1 fw-bold">Starring:</span> Eget Nulla Semper Porta Dapibus Diam Ipsum</p>
	   <p className="mb-2"><span className="col_red me-1 fw-bold">Genres:</span> Music</p>
	   <p><span className="col_red me-1 fw-bold">Runtime:</span> 1h 32m</p>	
	   <h6 className="mt-4 mb-0"><a className="button" href="#"><i className="fa fa-play-circle align-middle me-1"></i> Watch Trailer</a></h6>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
</section>

<section id="trend" className="pt-4 pb-5">
<div className="container">
 <div className="row trend_1">
  <div className="col-md-6 col-6">
   <div className="trend_1l">
    <h4 className="mb-0"><i className="fa fa-youtube-play align-middle col_red me-1"></i> Latest <span className="col_red">Movies</span></h4>
   </div>
  </div>
  <div className="col-md-6 col-6">
   <div className="trend_1r text-end">
     <h6 className="mb-0"><a className="button" href="#"> View All</a></h6>
   </div>
  </div>
 </div>
 <div className="row trend_2 mt-4">
   <div id="carouselExampleCaptions1" className="carousel slide" data-bs-ride="carousel">
 
  <div className="carousel-inner">
    <div className="carousel-item active">
      <div className="trend_2i row">
	    <div className="col-md-3 col-6">
		  <div className="trend_2im clearfix position-relative">
		   <div className="trend_2im1 clearfix">
		     <div className="grid">
		  <figure className="effect-jazz mb-0">
			<a href="#"><img src="img/4.jpg" className="w-100" alt="img25" /></a>
		  </figure>
	  </div>
		   </div>
		   <div className="trend_2im2 clearfix text-center position-absolute w-100 top-0">
		     <span className="fs-1"><a className="col_red" href="#"><i className="fa fa-youtube-play"></i></a></span>
		   </div>
		  </div>
		  <div className="trend_2ilast bg_grey p-3 clearfix">
		    <h5><a className="col_red" href="#">Semper</a></h5>
			<p className="mb-2">A father travels from Oklahoma to France to help his...</p>
			<span className="col_red">
		 <i className="fa fa-star"></i>
		 <i className="fa fa-star"></i>
		 <i className="fa fa-star"></i>
		 <i className="fa fa-star"></i>
		 <i className="fa fa-star"></i>
		</span>
		<p className="mb-0">1 Views</p>
		  </div>  
		</div>
		<div className="col-md-3 col-6">
		  <div className="trend_2im clearfix position-relative">
		   <div className="trend_2im1 clearfix">
		     <div className="grid">
		  <figure className="effect-jazz mb-0">
			<a href="#"><img src="img/5.jpg" className="w-100" alt="img25" /></a>
		  </figure>
	  </div>
		   </div>
		   <div className="trend_2im2 clearfix text-center position-absolute w-100 top-0">
		     <span className="fs-1"><a className="col_red" href="#"><i className="fa fa-youtube-play"></i></a></span>
		   </div>
		  </div>
		  <div className="trend_2ilast bg_grey p-3 clearfix">
		    <h5><a className="col_red" href="#">Dapibus</a></h5>
			<p className="mb-2">A father travels from Oklahoma to France to help his...</p>
			<span className="col_red">
		 <i className="fa fa-star"></i>
		 <i className="fa fa-star"></i>
		 <i className="fa fa-star"></i>
		 <i className="fa fa-star"></i>
		 <i className="fa fa-star"></i>
		</span>
		<p className="mb-0">1 Views</p>
		  </div>  
		</div>
		<div className="col-md-3 col-6">
		  <div className="trend_2im clearfix position-relative">
		   <div className="trend_2im1 clearfix">
		     <div className="grid">
		  <figure className="effect-jazz mb-0">
			<a href="#"><img src="img/6.jpg" className="w-100" alt="img25" /></a>
		  </figure>
	  </div>
		   </div>
		   <div className="trend_2im2 clearfix text-center position-absolute w-100 top-0">
		     <span className="fs-1"><a className="col_red" href="#"><i className="fa fa-youtube-play"></i></a></span>
		   </div>
		  </div>
		  <div className="trend_2ilast bg_grey p-3 clearfix">
		    <h5><a className="col_red" href="#">Ipsum</a></h5>
			<p className="mb-2">A father travels from Oklahoma to France to help his...</p>
			<span className="col_red">
		 <i className="fa fa-star"></i>
		 <i className="fa fa-star"></i>
		 <i className="fa fa-star"></i>
		 <i className="fa fa-star"></i>
		 <i className="fa fa-star"></i>
		</span>
		<p className="mb-0">1 Views</p>
		  </div>  
		</div>
		<div className="col-md-3 col-6">
		  <div className="trend_2im clearfix position-relative">
		   <div className="trend_2im1 clearfix">
		     <div className="grid">
		  <figure className="effect-jazz mb-0">
			<a href="#"><img src="img/7.jpg" className="w-100" alt="img25" /></a>
		  </figure>
	  </div>
		   </div>
		   <div className="trend_2im2 clearfix text-center position-absolute w-100 top-0">
		     <span className="fs-1"><a className="col_red" href="#"><i className="fa fa-youtube-play"></i></a></span>
		   </div>
		  </div>
		  <div className="trend_2ilast bg_grey p-3 clearfix">
		    <h5><a className="col_red" href="#">Lorem</a></h5>
			<p className="mb-2">A father travels from Oklahoma to France to help his...</p>
			<span className="col_red">
		 <i className="fa fa-star"></i>
		 <i className="fa fa-star"></i>
		 <i className="fa fa-star"></i>
		 <i className="fa fa-star"></i>
		 <i className="fa fa-star"></i>
		</span>
		<p className="mb-0">1 Views</p>
		  </div>  
		</div>
	  </div>
    </div>
    
    
  </div>

</div>
 </div>
</div>
</section>

<section id="upcome" className="pt-4 pb-5">
<div className="container">
 <div className="row trend_1">
  <div className="col-md-6 col-6">
   <div className="trend_1l">
    <h4 className="mb-0"><i className="fa fa-youtube-play align-middle col_red me-1"></i> Upcoming <span className="col_red">Events</span></h4>
   </div>
  </div>
  <div className="col-md-6 col-6">
   <div className="trend_1r text-end">
     <h6 className="mb-0"><a className="button" href="#"> View All</a></h6>
   </div>
  </div>
 </div>
 <div className="row trend_2 mt-4">
   <div id="carouselExampleCaptions2" className="carousel slide" data-bs-ride="carousel">
   
  <div className="carousel-inner">
    <div className="carousel-item active">
      <div className="trend_2i row">
	    <div className="col-md-4">
		  <div className="trend_2im clearfix position-relative">
		   <div className="trend_2im1 clearfix">
		     <div className="grid">
		  <figure className="effect-jazz mb-0">
			<a href="#"><img src="img/12.jpg" className="w-100" alt="img25" /></a>
		  </figure>
	  </div>
		   </div>
		   <div className="trend_2im2 clearfix text-center position-absolute w-100 top-0">
		     <span className="fs-1"><a className="col_red" href="#"><i className="fa fa-youtube-play"></i></a></span>
		   </div>
		  </div>
		  <div className="trend_2ilast bg_grey p-3 clearfix">
		    <h5><a className="col_red" href="#">Semper</a></h5>
			<p className="mb-2">A father travels from Oklahoma to France to help his...</p>
			<span className="col_red">
		 <i className="fa fa-star"></i>
		 <i className="fa fa-star"></i>
		 <i className="fa fa-star"></i>
		 <i className="fa fa-star"></i>
		 <i className="fa fa-star"></i>
		</span>
		<p className="mb-0">1 Views</p>
		  </div>  
		</div>
		<div className="col-md-4">
		  <div className="trend_2im clearfix position-relative">
		   <div className="trend_2im1 clearfix">
		     <div className="grid">
		  <figure className="effect-jazz mb-0">
			<a href="#"><img src="img/13.jpg" className="w-100" alt="img25" /></a>
		  </figure>
	  </div>
		   </div>
		   <div className="trend_2im2 clearfix text-center position-absolute w-100 top-0">
		     <span className="fs-1"><a className="col_red" href="#"><i className="fa fa-youtube-play"></i></a></span>
		   </div>
		  </div>
		  <div className="trend_2ilast bg_grey p-3 clearfix">
		    <h5><a className="col_red" href="#">Dapibus</a></h5>
			<p className="mb-2">A father travels from Oklahoma to France to help his...</p>
			<span className="col_red">
		 <i className="fa fa-star"></i>
		 <i className="fa fa-star"></i>
		 <i className="fa fa-star"></i>
		 <i className="fa fa-star"></i>
		 <i className="fa fa-star"></i>
		</span>
		<p className="mb-0">1 Views</p>
		  </div>  
		</div>
		<div className="col-md-4">
		  <div className="trend_2im clearfix position-relative">
		   <div className="trend_2im1 clearfix">
		     <div className="grid">
		  <figure className="effect-jazz mb-0">
			<a href="#"><img src="img/14.jpg" className="w-100" alt="img25" /></a>
		  </figure>
	  </div>
		   </div>
		   <div className="trend_2im2 clearfix text-center position-absolute w-100 top-0">
		     <span className="fs-1"><a className="col_red" href="#"><i className="fa fa-youtube-play"></i></a></span>
		   </div>
		  </div>
		  <div className="trend_2ilast bg_grey p-3 clearfix">
		    <h5><a className="col_red" href="#">Ipsum</a></h5>
			<p className="mb-2">A father travels from Oklahoma to France to help his...</p>
			<span className="col_red">
		 <i className="fa fa-star"></i>
		 <i className="fa fa-star"></i>
		 <i className="fa fa-star"></i>
		 <i className="fa fa-star"></i>
		 <i className="fa fa-star"></i>
		</span>
		<p className="mb-0">1 Views</p>
		  </div>  
		</div>

	  </div>
    </div>
  </div>

</div>
 </div>
</div>
</section>

<section id="popular" className="pt-4 pb-5 bg_grey">
<div className="container">
 <div className="row trend_1">
  <div className="col-md-12">
   <div className="trend_1l">
    <h4 className="mb-0"><i className="fa fa-youtube-play align-middle col_red me-1"></i> Trending <span className="col_red">Events</span></h4>
   </div>
  </div>
 </div>
 <div className="row popular_1 mt-4">
   <ul className="nav nav-tabs  border-0 mb-0">
    <li className="nav-item">
        <a href="#home" data-bs-toggle="tab" aria-expanded="false" className="nav-link active">
            <span className="d-md-block">JUST ARRIVED</span>
        </a>
    </li>
    <li className="nav-item">
        <a href="#profile" data-bs-toggle="tab" aria-expanded="true" className="nav-link">
            <span className="d-md-block">POPULAR EVENTS</span>
        </a>
    </li>
    <li className="nav-item">
        <a href="#settings" data-bs-toggle="tab" aria-expanded="false" className="nav-link">
            <span className="d-md-block">TV SHOWS</span>
        </a>
    </li>
	<li className="nav-item">
        <a href="#settings_o" data-bs-toggle="tab" aria-expanded="false" className="nav-link">
            <span className="d-md-block">FREE MOVIES</span>
        </a>
    </li>
	
</ul>
 </div>
 <div className="popular_2 row mt-4">
   <div className="tab-content">
    <div className="tab-pane active" id="home">
	  <div className="popular_2i row">
	   <div className="col-md-6">
	    <div className="popular_2i1 row">
		 <div className="col-md-4 col-4">
		  <div className="popular_2i1lm position-relative clearfix">
		   <div className="popular_2i1lm1 clearfix">
		      <div className="grid">
		  <figure className="effect-jazz mb-0">
			<a href="#"><img src="img/18.jpg" className="w-100" alt="img25" /></a>
		  </figure>
	  </div>
		   </div>
		   <div className="popular_2i1lm2 position-absolute top-0 w-100 text-center clearfix">
		    <ul>
			 <li className="d-inline-block"><a href="#"><i className="fa fa-link col_red"></i></a></li>
			 <li className="d-inline-block"><a href="#"><i className="fa fa-search col_red"></i></a></li>
			</ul>
		   </div>
		  </div>
		 </div>
		 <div className="col-md-8 col-8">
		  <div className="popular_2i1r">
		   <h5><a className="col_red" href="#">Semp Porta</a></h5>
		   <h6>Action, Thriller</h6>
		   <h6> Imdb 8.2  <span className="ms-2"><i className="fa fa-star col_red me-1"></i></span> Year : 2022 <span className="ms-2">Runtime: 1h 49m</span></h6>
		   <p>Four waves of increasingly deadly alien attacks have left most of  ruin. Cassie is on the run, desperately trying to save her younger brother.</p>
		   <h6 className="mb-0"><a className="button" href="#"> More Info - Trailer</a></h6>
		  </div>
		 </div>
		</div>
	   </div>
	   <div className="col-md-6">
	    <div className="popular_2i1 row">
		 <div className="col-md-4 col-4">
		  <div className="popular_2i1lm position-relative clearfix">
		   <div className="popular_2i1lm1 clearfix">
		      <div className="grid">
		  <figure className="effect-jazz mb-0">
			<a href="#"><img src="img/19.jpg" className="w-100" alt="img25" /></a>
		  </figure>
	  </div>
		   </div>
		   <div className="popular_2i1lm2 position-absolute top-0 w-100 text-center clearfix">
		    <ul>
			 <li className="d-inline-block"><a href="#"><i className="fa fa-link col_red"></i></a></li>
			 <li className="d-inline-block"><a href="#"><i className="fa fa-search col_red"></i></a></li>
			</ul>
		   </div>
		  </div>
		 </div>
		 <div className="col-md-8 col-8">
		  <div className="popular_2i1r">
		   <h5><a className="col_red" href="#">Eget Diam</a></h5>
		   <h6>Action, Thriller</h6>
		   <h6> Imdb 8.3  <span className="ms-2"><i className="fa fa-star col_red me-1"></i></span> Year : 2022 <span className="ms-2">Runtime: 2h 29m</span></h6>
		   <p>Four waves of increasingly deadly alien attacks have left most of  ruin. Cassie is on the run, desperately trying to save her younger brother.</p>
		   <h6 className="mb-0"><a className="button" href="#"> More Info - Trailer</a></h6>
		  </div>
		 </div>
		</div>
	   </div>
	  </div>
	  <div className="popular_2i row mt-4">
	   <div className="col-md-6">
	    <div className="popular_2i1 row">
		 <div className="col-md-4 col-4">
		  <div className="popular_2i1lm position-relative clearfix">
		   <div className="popular_2i1lm1 clearfix">
		      <div className="grid">
		  <figure className="effect-jazz mb-0">
			<a href="#"><img src="img/20.jpg" className="w-100" alt="img25" /></a>
		  </figure>
	  </div>
		   </div>
		   <div className="popular_2i1lm2 position-absolute top-0 w-100 text-center clearfix">
		    <ul>
			 <li className="d-inline-block"><a href="#"><i className="fa fa-link col_red"></i></a></li>
			 <li className="d-inline-block"><a href="#"><i className="fa fa-search col_red"></i></a></li>
			</ul>
		   </div>
		  </div>
		 </div>
		 <div className="col-md-8 col-8">
		  <div className="popular_2i1r">
		   <h5><a className="col_red" href="#">Quis Sem</a></h5>
		   <h6>Action, Thriller</h6>
		   <h6> Imdb 8.4  <span className="ms-2"><i className="fa fa-star col_red me-1"></i></span> Year : 2022 <span className="ms-2">Runtime: 1h 59m</span></h6>
		   <p>Four waves of increasingly deadly alien attacks have left most of  ruin. Cassie is on the run, desperately trying to save her younger brother.</p>
		   <h6 className="mb-0"><a className="button" href="#"> More Info - Trailer</a></h6>
		  </div>
		 </div>
		</div>
	   </div>
	   <div className="col-md-6">
	    <div className="popular_2i1 row">
		 <div className="col-md-4 col-4">
		  <div className="popular_2i1lm position-relative clearfix">
		   <div className="popular_2i1lm1 clearfix">
		      <div className="grid">
		  <figure className="effect-jazz mb-0">
			<a href="#"><img src="img/21.jpg" className="w-100" alt="img25" /></a>
		  </figure>
	  </div>
		   </div>
		   <div className="popular_2i1lm2 position-absolute top-0 w-100 text-center clearfix">
		    <ul>
			 <li className="d-inline-block"><a href="#"><i className="fa fa-link col_red"></i></a></li>
			 <li className="d-inline-block"><a href="#"><i className="fa fa-search col_red"></i></a></li>
			</ul>
		   </div>
		  </div>
		 </div>
		 <div className="col-md-8 col-8">
		  <div className="popular_2i1r">
		   <h5><a className="col_red" href="#">Ipsum Lorem</a></h5>
		   <h6>Action, Thriller</h6>
		   <h6> Imdb 8.6  <span className="ms-2"><i className="fa fa-star col_red me-1"></i></span> Year : 2022 <span className="ms-2">Runtime: 1h 48m</span></h6>
		   <p>Four waves of increasingly deadly alien attacks have left most of  ruin. Cassie is on the run, desperately trying to save her younger brother.</p>
		   <h6 className="mb-0"><a className="button" href="#"> More Info - Trailer</a></h6>
		  </div>
		 </div>
		</div>
	   </div>
	  </div>
    </div>
    <div className="tab-pane" id="profile">
       <div className="popular_2i row">
	   <div className="col-md-6">
	    <div className="popular_2i1 row">
		 <div className="col-md-4 col-4">
		  <div className="popular_2i1lm position-relative clearfix">
		   <div className="popular_2i1lm1 clearfix">
		      <div className="grid">
		  <figure className="effect-jazz mb-0">
			<a href="#"><img src="img/22.jpg" className="w-100" alt="img25" /></a>
		  </figure>
	  </div>
		   </div>
		   <div className="popular_2i1lm2 position-absolute top-0 w-100 text-center clearfix">
		    <ul>
			 <li className="d-inline-block"><a href="#"><i className="fa fa-link col_red"></i></a></li>
			 <li className="d-inline-block"><a href="#"><i className="fa fa-search col_red"></i></a></li>
			</ul>
		   </div>
		  </div>
		 </div>
		 <div className="col-md-8 col-8">
		  <div className="popular_2i1r">
		   <h5><a className="col_red" href="#">Semp Porta</a></h5>
		   <h6>Action, Thriller</h6>
		   <h6> Imdb 8.2  <span className="ms-2"><i className="fa fa-star col_red me-1"></i></span> Year : 2022 <span className="ms-2">Runtime: 1h 49m</span></h6>
		   <p>Four waves of increasingly deadly alien attacks have left most of  ruin. Cassie is on the run, desperately trying to save her younger brother.</p>
		   <h6 className="mb-0"><a className="button" href="#"> More Info - Trailer</a></h6>
		  </div>
		 </div>
		</div>
	   </div>
	   <div className="col-md-6">
	    <div className="popular_2i1 row">
		 <div className="col-md-4 col-4">
		  <div className="popular_2i1lm position-relative clearfix">
		   <div className="popular_2i1lm1 clearfix">
		      <div className="grid">
		  <figure className="effect-jazz mb-0">
			<a href="#"><img src="img/23.jpg" className="w-100" alt="img25" /></a>
		  </figure>
	  </div>
		   </div>
		   <div className="popular_2i1lm2 position-absolute top-0 w-100 text-center clearfix">
		    <ul>
			 <li className="d-inline-block"><a href="#"><i className="fa fa-link col_red"></i></a></li>
			 <li className="d-inline-block"><a href="#"><i className="fa fa-search col_red"></i></a></li>
			</ul>
		   </div>
		  </div>
		 </div>
		 <div className="col-md-8 col-8">
		  <div className="popular_2i1r">
		   <h5><a className="col_red" href="#">Eget Diam</a></h5>
		   <h6>Action, Thriller</h6>
		   <h6> Imdb 8.3  <span className="ms-2"><i className="fa fa-star col_red me-1"></i></span> Year : 2022 <span className="ms-2">Runtime: 2h 29m</span></h6>
		   <p>Four waves of increasingly deadly alien attacks have left most of  ruin. Cassie is on the run, desperately trying to save her younger brother.</p>
		   <h6 className="mb-0"><a className="button" href="#"> More Info - Trailer</a></h6>
		  </div>
		 </div>
		</div>
	   </div>
	  </div>
	  <div className="popular_2i row mt-4">
	   <div className="col-md-6">
	    <div className="popular_2i1 row">
		 <div className="col-md-4 col-4">
		  <div className="popular_2i1lm position-relative clearfix">
		   <div className="popular_2i1lm1 clearfix">
		      <div className="grid">
		  <figure className="effect-jazz mb-0">
			<a href="#"><img src="img/24.jpg" className="w-100" alt="img25" /></a>
		  </figure>
	  </div>
		   </div>
		   <div className="popular_2i1lm2 position-absolute top-0 w-100 text-center clearfix">
		    <ul>
			 <li className="d-inline-block"><a href="#"><i className="fa fa-link col_red"></i></a></li>
			 <li className="d-inline-block"><a href="#"><i className="fa fa-search col_red"></i></a></li>
			</ul>
		   </div>
		  </div>
		 </div>
		 <div className="col-md-8 col-8">
		  <div className="popular_2i1r">
		   <h5><a className="col_red" href="#">Quis Sem</a></h5>
		   <h6>Action, Thriller</h6>
		   <h6> Imdb 8.4  <span className="ms-2"><i className="fa fa-star col_red me-1"></i></span> Year : 2022 <span className="ms-2">Runtime: 1h 59m</span></h6>
		   <p>Four waves of increasingly deadly alien attacks have left most of  ruin. Cassie is on the run, desperately trying to save her younger brother.</p>
		   <h6 className="mb-0"><a className="button" href="#"> More Info - Trailer</a></h6>
		  </div>
		 </div>
		</div>
	   </div>
	   <div className="col-md-6">
	    <div className="popular_2i1 row">
		 <div className="col-md-4 col-4">
		  <div className="popular_2i1lm position-relative clearfix">
		   <div className="popular_2i1lm1 clearfix">
		      <div className="grid">
		  <figure className="effect-jazz mb-0">
			<a href="#"><img src="img/25.jpg" className="w-100" alt="img25" /></a>
		  </figure>
	  </div>
		   </div>
		   <div className="popular_2i1lm2 position-absolute top-0 w-100 text-center clearfix">
		    <ul>
			 <li className="d-inline-block"><a href="#"><i className="fa fa-link col_red"></i></a></li>
			 <li className="d-inline-block"><a href="#"><i className="fa fa-search col_red"></i></a></li>
			</ul>
		   </div>
		  </div>
		 </div>
		 <div className="col-md-8 col-8">
		  <div className="popular_2i1r">
		   <h5><a className="col_red" href="#">Ipsum Lorem</a></h5>
		   <h6>Action, Thriller</h6>
		   <h6> Imdb 8.6  <span className="ms-2"><i className="fa fa-star col_red me-1"></i></span> Year : 2022 <span className="ms-2">Runtime: 1h 48m</span></h6>
		   <p>Four waves of increasingly deadly alien attacks have left most of  ruin. Cassie is on the run, desperately trying to save her younger brother.</p>
		   <h6 className="mb-0"><a className="button" href="#"> More Info - Trailer</a></h6>
		  </div>
		 </div>
		</div>
	   </div>
	  </div>
    </div>
    <div className="tab-pane" id="settings">
       <div className="popular_2i row">
	   <div className="col-md-6">
	    <div className="popular_2i1 row">
		 <div className="col-md-4 col-4">
		  <div className="popular_2i1lm position-relative clearfix">
		   <div className="popular_2i1lm1 clearfix">
		      <div className="grid">
		  <figure className="effect-jazz mb-0">
			<a href="#"><img src="img/26.jpg" className="w-100" alt="img25" /></a>
		  </figure>
	  </div>
		   </div>
		   <div className="popular_2i1lm2 position-absolute top-0 w-100 text-center clearfix">
		    <ul>
			 <li className="d-inline-block"><a href="#"><i className="fa fa-link col_red"></i></a></li>
			 <li className="d-inline-block"><a href="#"><i className="fa fa-search col_red"></i></a></li>
			</ul>
		   </div>
		  </div>
		 </div>
		 <div className="col-md-8 col-8">
		  <div className="popular_2i1r">
		   <h5><a className="col_red" href="#">Semp Porta</a></h5>
		   <h6>Action, Thriller</h6>
		   <h6> Imdb 8.2  <span className="ms-2"><i className="fa fa-star col_red me-1"></i></span> Year : 2022 <span className="ms-2">Runtime: 1h 49m</span></h6>
		   <p>Four waves of increasingly deadly alien attacks have left most of  ruin. Cassie is on the run, desperately trying to save her younger brother.</p>
		   <h6 className="mb-0"><a className="button" href="#"> More Info - Trailer</a></h6>
		  </div>
		 </div>
		</div>
	   </div>
	   <div className="col-md-6">
	    <div className="popular_2i1 row">
		 <div className="col-md-4 col-4">
		  <div className="popular_2i1lm position-relative clearfix">
		   <div className="popular_2i1lm1 clearfix">
		      <div className="grid">
		  <figure className="effect-jazz mb-0">
			<a href="#"><img src="img/27.jpg" className="w-100" alt="img25" /></a>
		  </figure>
	  </div>
		   </div>
		   <div className="popular_2i1lm2 position-absolute top-0 w-100 text-center clearfix">
		    <ul>
			 <li className="d-inline-block"><a href="#"><i className="fa fa-link col_red"></i></a></li>
			 <li className="d-inline-block"><a href="#"><i className="fa fa-search col_red"></i></a></li>
			</ul>
		   </div>
		  </div>
		 </div>
		 <div className="col-md-8 col-8">
		  <div className="popular_2i1r">
		   <h5><a className="col_red" href="#">Eget Diam</a></h5>
		   <h6>Action, Thriller</h6>
		   <h6> Imdb 8.3  <span className="ms-2"><i className="fa fa-star col_red me-1"></i></span> Year : 2022 <span className="ms-2">Runtime: 2h 29m</span></h6>
		   <p>Four waves of increasingly deadly alien attacks have left most of  ruin. Cassie is on the run, desperately trying to save her younger brother.</p>
		   <h6 className="mb-0"><a className="button" href="#"> More Info - Trailer</a></h6>
		  </div>
		 </div>
		</div>
	   </div>
	  </div>
	  <div className="popular_2i row mt-4">
	   <div className="col-md-6">
	    <div className="popular_2i1 row">
		 <div className="col-md-4 col-4">
		  <div className="popular_2i1lm position-relative clearfix">
		   <div className="popular_2i1lm1 clearfix">
		      <div className="grid">
		  <figure className="effect-jazz mb-0">
			<a href="#"><img src="img/28.jpg" className="w-100" alt="img25" /></a>
		  </figure>
	  </div>
		   </div>
		   <div className="popular_2i1lm2 position-absolute top-0 w-100 text-center clearfix">
		    <ul>
			 <li className="d-inline-block"><a href="#"><i className="fa fa-link col_red"></i></a></li>
			 <li className="d-inline-block"><a href="#"><i className="fa fa-search col_red"></i></a></li>
			</ul>
		   </div>
		  </div>
		 </div>
		 <div className="col-md-8 col-8">
		  <div className="popular_2i1r">
		   <h5><a className="col_red" href="#">Quis Sem</a></h5>
		   <h6>Action, Thriller</h6>
		   <h6> Imdb 8.4  <span className="ms-2"><i className="fa fa-star col_red me-1"></i></span> Year : 2022 <span className="ms-2">Runtime: 1h 59m</span></h6>
		   <p>Four waves of increasingly deadly alien attacks have left most of  ruin. Cassie is on the run, desperately trying to save her younger brother.</p>
		   <h6 className="mb-0"><a className="button" href="#"> More Info - Trailer</a></h6>
		  </div>
		 </div>
		</div>
	   </div>
	   <div className="col-md-6">
	    <div className="popular_2i1 row">
		 <div className="col-md-4 col-4">
		  <div className="popular_2i1lm position-relative clearfix">
		   <div className="popular_2i1lm1 clearfix">
		      <div className="grid">
		  <figure className="effect-jazz mb-0">
			<a href="#"><img src="img/29.jpg" className="w-100" alt="img25" /></a>
		  </figure>
	  </div>
		   </div>
		   <div className="popular_2i1lm2 position-absolute top-0 w-100 text-center clearfix">
		    <ul>
			 <li className="d-inline-block"><a href="#"><i className="fa fa-link col_red"></i></a></li>
			 <li className="d-inline-block"><a href="#"><i className="fa fa-search col_red"></i></a></li>
			</ul>
		   </div>
		  </div>
		 </div>
		 <div className="col-md-8 col-8">
		  <div className="popular_2i1r">
		   <h5><a className="col_red" href="#">Ipsum Lorem</a></h5>
		   <h6>Action, Thriller</h6>
		   <h6> Imdb 8.6  <span className="ms-2"><i className="fa fa-star col_red me-1"></i></span> Year : 2022 <span className="ms-2">Runtime: 1h 48m</span></h6>
		   <p>Four waves of increasingly deadly alien attacks have left most of  ruin. Cassie is on the run, desperately trying to save her younger brother.</p>
		   <h6 className="mb-0"><a className="button" href="#"> More Info - Trailer</a></h6>
		  </div>
		 </div>
		</div>
	   </div>
	  </div>
    </div>
	
	<div className="tab-pane" id="settings_o">
	    <div className="popular_2i row">
	   <div className="col-md-6">
	    <div className="popular_2i1 row">
		 <div className="col-md-4 col-4">
		  <div className="popular_2i1lm position-relative clearfix">
		   <div className="popular_2i1lm1 clearfix">
		      <div className="grid">
		  <figure className="effect-jazz mb-0">
			<a href="#"><img src="img/18.jpg" className="w-100" alt="img25" /></a>
		  </figure>
	  </div>
		   </div>
		   <div className="popular_2i1lm2 position-absolute top-0 w-100 text-center clearfix">
		    <ul>
			 <li className="d-inline-block"><a href="#"><i className="fa fa-link col_red"></i></a></li>
			 <li className="d-inline-block"><a href="#"><i className="fa fa-search col_red"></i></a></li>
			</ul>
		   </div>
		  </div>
		 </div>
		 <div className="col-md-8 col-8">
		  <div className="popular_2i1r">
		   <h5><a className="col_red" href="#">Semp Porta</a></h5>
		   <h6>Action, Thriller</h6>
		   <h6> Imdb 8.2  <span className="ms-2"><i className="fa fa-star col_red me-1"></i></span> Year : 2022 <span className="ms-2">Runtime: 1h 49m</span></h6>
		   <p>Four waves of increasingly deadly alien attacks have left most of  ruin. Cassie is on the run, desperately trying to save her younger brother.</p>
		   <h6 className="mb-0"><a className="button" href="#"> More Info - Trailer</a></h6>
		  </div>
		 </div>
		</div>
	   </div>
	   <div className="col-md-6">
	    <div className="popular_2i1 row">
		 <div className="col-md-4 col-4">
		  <div className="popular_2i1lm position-relative clearfix">
		   <div className="popular_2i1lm1 clearfix">
		      <div className="grid">
		  <figure className="effect-jazz mb-0">
			<a href="#"><img src="img/19.jpg" className="w-100" alt="img25" /></a>
		  </figure>
	  </div>
		   </div>
		   <div className="popular_2i1lm2 position-absolute top-0 w-100 text-center clearfix">
		    <ul>
			 <li className="d-inline-block"><a href="#"><i className="fa fa-link col_red"></i></a></li>
			 <li className="d-inline-block"><a href="#"><i className="fa fa-search col_red"></i></a></li>
			</ul>
		   </div>
		  </div>
		 </div>
		 <div className="col-md-8 col-8">
		  <div className="popular_2i1r">
		   <h5><a className="col_red" href="#">Eget Diam</a></h5>
		   <h6>Action, Thriller</h6>
		   <h6> Imdb 8.3  <span className="ms-2"><i className="fa fa-star col_red me-1"></i></span> Year : 2022 <span className="ms-2">Runtime: 2h 29m</span></h6>
		   <p>Four waves of increasingly deadly alien attacks have left most of  ruin. Cassie is on the run, desperately trying to save her younger brother.</p>
		   <h6 className="mb-0"><a className="button" href="#"> More Info - Trailer</a></h6>
		  </div>
		 </div>
		</div>
	   </div>
	  </div>
	  <div className="popular_2i row mt-4">
	   <div className="col-md-6">
	    <div className="popular_2i1 row">
		 <div className="col-md-4 col-4">
		  <div className="popular_2i1lm position-relative clearfix">
		   <div className="popular_2i1lm1 clearfix">
		      <div className="grid">
		  <figure className="effect-jazz mb-0">
			<a href="#"><img src="img/20.jpg" className="w-100" alt="img25" /></a>
		  </figure>
	  </div>
		   </div>
		   <div className="popular_2i1lm2 position-absolute top-0 w-100 text-center clearfix">
		    <ul>
			 <li className="d-inline-block"><a href="#"><i className="fa fa-link col_red"></i></a></li>
			 <li className="d-inline-block"><a href="#"><i className="fa fa-search col_red"></i></a></li>
			</ul>
		   </div>
		  </div>
		 </div>
		 <div className="col-md-8 col-8">
		  <div className="popular_2i1r">
		   <h5><a className="col_red" href="#">Quis Sem</a></h5>
		   <h6>Action, Thriller</h6>
		   <h6> Imdb 8.4  <span className="ms-2"><i className="fa fa-star col_red me-1"></i></span> Year : 2022 <span className="ms-2">Runtime: 1h 59m</span></h6>
		   <p>Four waves of increasingly deadly alien attacks have left most of  ruin. Cassie is on the run, desperately trying to save her younger brother.</p>
		   <h6 className="mb-0"><a className="button" href="#"> More Info - Trailer</a></h6>
		  </div>
		 </div>
		</div>
	   </div>
	   <div className="col-md-6">
	    <div className="popular_2i1 row">
		 <div className="col-md-4 col-4">
		  <div className="popular_2i1lm position-relative clearfix">
		   <div className="popular_2i1lm1 clearfix">
		      <div className="grid">
		  <figure className="effect-jazz mb-0">
			<a href="#"><img src="img/21.jpg" className="w-100" alt="img25" /></a>
		  </figure>
	  </div>
		   </div>
		   <div className="popular_2i1lm2 position-absolute top-0 w-100 text-center clearfix">
		    <ul>
			 <li className="d-inline-block"><a href="#"><i className="fa fa-link col_red"></i></a></li>
			 <li className="d-inline-block"><a href="#"><i className="fa fa-search col_red"></i></a></li>
			</ul>
		   </div>
		  </div>
		 </div>
		 <div className="col-md-8 col-8">
		  <div className="popular_2i1r">
		   <h5><a className="col_red" href="#">Ipsum Lorem</a></h5>
		   <h6>Action, Thriller</h6>
		   <h6> Imdb 8.6  <span className="ms-2"><i className="fa fa-star col_red me-1"></i></span> Year : 2022 <span className="ms-2">Runtime: 1h 48m</span></h6>
		   <p>Four waves of increasingly deadly alien attacks have left most of  ruin. Cassie is on the run, desperately trying to save her younger brother.</p>
		   <h6 className="mb-0"><a className="button" href="#"> More Info - Trailer</a></h6>
		  </div>
		 </div>
		</div>
	   </div>
	  </div>
    </div>
	
</div>
 </div>
</div>
</section>

<section id="choice" className="pt-4 pb-5">
<div className="container">
 <div className="row trend_1">
  <div className="col-md-6 col-6">
   <div className="trend_1l">
    <h4 className="mb-0"><i className="fa fa-youtube-play align-middle col_red me-1"></i> Director's  <span className="col_red">Choice</span></h4>
   </div>
  </div>
  <div className="col-md-6 col-6">
   <div className="trend_1r text-end">
     <h6 className="mb-0"><a className="button" href="#"> View All</a></h6>
   </div>
  </div>
 </div>
 <div className="row trend_2 mt-4">
   <div id="carouselExampleCaptions3" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions3" data-bs-slide-to="0" className="active" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions3" data-bs-slide-to="1" aria-label="Slide 2" className="" aria-current="true"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <div className="trend_2i row">
	    <div className="col-md-4">
		  <div className="trend_2im clearfix position-relative">
		   <div className="trend_2im1 clearfix">
		     <div className="grid">
		  <figure className="effect-jazz mb-0">
			<a href="#"><img src="img/12.jpg" className="w-100" alt="img25" /></a>
		  </figure>
	  </div>
		   </div>
		   <div className="trend_2im2 clearfix  position-absolute w-100 top-0">
		     <h5><a className="col_red" href="#">Semper</a></h5>
			<span className="col_red">
		 <i className="fa fa-star"></i>
		 <i className="fa fa-star"></i>
		 <i className="fa fa-star"></i>
		 <i className="fa fa-star"></i>
		 <i className="fa fa-star"></i>
		</span>
		<p className="mb-0">2 Views</p>
		   </div>
		  </div>
		    
		</div>
		<div className="col-md-4">
		  <div className="trend_2im clearfix position-relative">
		   <div className="trend_2im1 clearfix">
		     <div className="grid">
		  <figure className="effect-jazz mb-0">
			<a href="#"><img src="img/13.jpg" className="w-100" alt="img25" /></a>
		  </figure>
	  </div>
		   </div>
		   <div className="trend_2im2 clearfix  position-absolute w-100 top-0">
		     <h5><a className="col_red" href="#">Lorem</a></h5>
			<span className="col_red">
		 <i className="fa fa-star"></i>
		 <i className="fa fa-star"></i>
		 <i className="fa fa-star"></i>
		 <i className="fa fa-star"></i>
		 <i className="fa fa-star"></i>
		</span>
		<p className="mb-0">1 Views</p>
		   </div>
		  </div>
		    
		</div>
		<div className="col-md-4">
		  <div className="trend_2im clearfix position-relative">
		   <div className="trend_2im1 clearfix">
		     <div className="grid">
		  <figure className="effect-jazz mb-0">
			<a href="#"><img src="img/14.jpg" className="w-100" alt="img25" /></a>
		  </figure>
	  </div>
		   </div>
		   <div className="trend_2im2 clearfix  position-absolute w-100 top-0">
		     <h5><a className="col_red" href="#">Porta</a></h5>
			<span className="col_red">
		 <i className="fa fa-star"></i>
		 <i className="fa fa-star"></i>
		 <i className="fa fa-star"></i>
		 <i className="fa fa-star"></i>
		 <i className="fa fa-star"></i>
		</span>
		<p className="mb-0">4 Views</p>
		   </div>
		  </div>
		    
		</div>
		
	  </div>
    </div>
    <div className="carousel-item">
      <div className="trend_2i row">
	    
		<div className="col-md-4">
		  <div className="trend_2im clearfix position-relative">
		   <div className="trend_2im1 clearfix">
		     <div className="grid">
		  <figure className="effect-jazz mb-0">
			<a href="#"><img src="img/15.jpg" className="w-100" alt="img25" /></a>
		  </figure>
	  </div>
		   </div>
		   <div className="trend_2im2 clearfix  position-absolute w-100 top-0">
		     <h5><a className="col_red" href="#">Porta</a></h5>
			<span className="col_red">
		 <i className="fa fa-star"></i>
		 <i className="fa fa-star"></i>
		 <i className="fa fa-star"></i>
		 <i className="fa fa-star"></i>
		 <i className="fa fa-star"></i>
		</span>
		<p className="mb-0">4 Views</p>
		   </div>
		  </div>
		    
		</div>
		<div className="col-md-4">
		  <div className="trend_2im clearfix position-relative">
		   <div className="trend_2im1 clearfix">
		     <div className="grid">
		  <figure className="effect-jazz mb-0">
			<a href="#"><img src="img/16.jpg" className="w-100" alt="img25" /></a>
		  </figure>
	  </div>
		   </div>
		   <div className="trend_2im2 clearfix  position-absolute w-100 top-0">
		     <h5><a className="col_red" href="#">Dapibus</a></h5>
			<span className="col_red">
		 <i className="fa fa-star"></i>
		 <i className="fa fa-star"></i>
		 <i className="fa fa-star"></i>
		 <i className="fa fa-star"></i>
		 <i className="fa fa-star"></i>
		</span>
		<p className="mb-0">6 Views</p>
		   </div>
		  </div>
		    
		</div>
		<div className="col-md-4">
		  <div className="trend_2im clearfix position-relative">
		   <div className="trend_2im1 clearfix">
		     <div className="grid">
		  <figure className="effect-jazz mb-0">
			<a href="#"><img src="img/17.jpg" className="w-100" alt="img25" /></a>
		  </figure>
	  </div>
		   </div>
		   <div className="trend_2im2 clearfix  position-absolute w-100 top-0">
		     <h5><a className="col_red" href="#">Nulla</a></h5>
			<span className="col_red">
		 <i className="fa fa-star"></i>
		 <i className="fa fa-star"></i>
		 <i className="fa fa-star"></i>
		 <i className="fa fa-star"></i>
		 <i className="fa fa-star"></i>
		</span>
		<p className="mb-0">5 Views</p>
		   </div>
		  </div>

		    
		</div>
	  </div>
    </div>
    
  </div>

</div>
 </div>
</div>
</section>

<section id="play">
<div className="play_m clearfix">
 <div className="container">
 <div className="row trend_1">
  <div className="col-md-12">
   <div className="trend_1l">
    <h4 className="mb-0"><i className="fa fa-youtube-play align-middle col_red me-1"></i> Top   <span className="col_red">10 Playlist</span></h4>
   </div>
  </div>
 </div>
 <div className="play1 row mt-4 bg_grey pt-3 pb-3">
  <div className="col-md-9">
   <div className="play1l">
     <div className="grid clearfix">
				  <figure className="effect-jazz mb-0">
					<a href="#"><img src="img/2.jpg" className="w-100" height="450" alt="abc" /></a>
				  </figure>
			  </div>
   </div>
  </div>
  <div className="col-md-3 ps-0">
   <div className="play1r">
     <div className="play1ri">
	  <div className="grid clearfix">
				  <figure className="effect-jazz mb-0">
					<a href="#"><img src="img/4.jpg" className="w-100"  alt="abc" /></a>
				  </figure>
			  </div>
	 </div>
	 <div className="play1ri mt-3">
	  <div className="grid clearfix">
				  <figure className="effect-jazz mb-0">
					<a href="#"><img src="img/5.jpg" className="w-100"  alt="abc" /></a>
				  </figure>
			  </div>
	 </div>
	 <div className="play1ri mt-3">
	  <div className="grid clearfix">
				  <figure className="effect-jazz mb-0">
					<a href="#"><img src="img/6.jpg" className="w-100"  alt="abc" /></a>
				  </figure>
			  </div>
	 </div>
	 <div className="play1ri mt-3">
	  <div className="grid clearfix">
				  <figure className="effect-jazz mb-0">
					<a href="#"><img src="img/7.jpg" className="w-100"  alt="abc" /></a>
				  </figure>
			  </div>
	 </div>
	 <div className="play1ri mt-3">
	  <div className="grid clearfix">
				  <figure className="effect-jazz mb-0">
					<a href="#"><img src="img/8.jpg" className="w-100"  alt="abc" /></a>
				  </figure>
			  </div>
	 </div>
	 <div className="play1ri mt-3">
	  <div className="grid clearfix">
				  <figure className="effect-jazz mb-0">
					<a href="#"><img src="img/9.jpg" className="w-100"  alt="abc" /></a>
				  </figure>
			  </div>
	 </div>
   </div>
  </div>
 </div>
 <div className="play2 row mt-4">
  <div className="col-md-4 p-0">
   <div className="play2l">
     <div className="grid clearfix">
				  <figure className="effect-jazz mb-0">
					<a href="#"><img src="img/31.jpg" height="515" className="w-100"  alt="abc" /></a>
				  </figure>
			  </div>
   </div>
  </div>
  <div className="col-md-8 p-0">
   <div className="play2r  bg_grey p-4">
	   <h5><span className="col_red">BEST MOVIE OF THE MONTH :</span> LIAM NEESON <span className="col_red">BLACKLIGHT</span><br />
THEY’RE GONNA NEED MORE MEN</h5>
      <h5 className="mt-3">Thriller</h5>
	  <hr className="line" />
	  <p className="mt-3">A humble businessman with a buried past seeks justice when his daughter is killed in an act of terrorism. A cat-and-mouse conflict ensues with a government official, whose past may hold clues to the killers' identities.</p>
	  <div className="play2ri row mt-4">
	   <div className="col-md-6">
	    <div className="play2ril">
		 <h6 className="fw-normal">
Running Time: <span className="pull-right">1 hr 50 min</span></h6>
         <hr className="hr_1" />
		  <h6 className="fw-normal">
Genre: <span className="pull-right">Action, Thriller</span></h6>
         <hr className="hr_1" />
		 <h6 className="fw-normal">
Director: <span className="pull-right">Eget Nulla</span></h6>
         <hr className="hr_1" />
		  <h6 className="fw-normal">
Stars: <span className="pull-right">Semp Port, Dapibus Diam</span></h6>
         <hr className="hr_1" />
		 <h6 className="fw-normal">
Release Date: <span className="pull-right">2023</span></h6>
         <hr className="hr_1 mb-0" />
		</div>
	   </div>
	   <div className="col-md-6">
	    <div className="play2rir">
		 <h6 className="fw-normal">Imdb - 9.2</h6>
         <div className="progress">
  <div className="progress-bar" role="progressbar" style={{ width: "92%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
</div>
          <h6 className="fw-normal mt-3">Semper - 7.3</h6>
         <div className="progress">
  <div className="progress-bar" role="progressbar" style={{ width: "73%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
</div>
          <h6 className="fw-normal mt-3">Dapibus - 9.0</h6>
         <div className="progress">
  <div className="progress-bar" role="progressbar" style={{ width: "90%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
</div>
          <h6 className="fw-normal mt-3">Ipsum - 8.3</h6>
         <div className="progress">
  <div className="progress-bar" role="progressbar" style={{ width: "83%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
</div>
        <h6 className="fw-normal mt-3">Lorem - 7.9</h6>
         <div className="progress">
  <div className="progress-bar" role="progressbar" style={{ width: "79%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
</div>
		</div>
	   </div>
	  </div>
   </div>
  </div>
 </div>
</div>
</div>
</section>

<section id="stream" className="pb-5 pt-4">
<div className="container">
 <div className="row trend_1">
  <div className="col-md-6 col-6">
   <div className="trend_1l">
    <h4 className="mb-0"><i className="fa fa-youtube-play align-middle col_red me-1"></i> Movie   <span className="col_red">Streaming Services</span></h4>
   </div>
  </div>
  <div className="col-md-6 col-6">
   <div className="trend_1r text-end">
     <h6 className="mb-0"><a className="button" href="#"> View All</a></h6>
   </div>
  </div>
 </div>
 <div className="row trend_2 mt-4">
   <div id="carouselExampleCaptions4" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions4" data-bs-slide-to="0" className="active" aria-label="Slide 1" aria-current="true"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions4" data-bs-slide-to="1" aria-label="Slide 2" className=""></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <div className="trend_2i row">
	    <div className="col">
		  <div className="trend_2im clearfix position-relative">
		   <div className="trend_2im1 clearfix">
		     <div className="grid">
		  <figure className="effect-jazz mb-0">
			<a href="#"><img src="img/4.jpg" className="w-100" alt="img25" /></a>
		  </figure>
	  </div>
		   </div>
		   <div className="trend_2im2 clearfix  position-absolute w-100 top-0">
		     <h5><a className="col_red" href="#">Semper</a></h5>
			<span className="col_red">
		 <i className="fa fa-star"></i>
		 <i className="fa fa-star"></i>
		 <i className="fa fa-star"></i>
		 <i className="fa fa-star"></i>
		 <i className="fa fa-star"></i>
		</span>
		<p className="mb-0">2 Views</p>
		   </div>
		  </div>
		    
		</div>
		<div className="col">
		  <div className="trend_2im clearfix position-relative">
		   <div className="trend_2im1 clearfix">
		     <div className="grid">
		  <figure className="effect-jazz mb-0">
			<a href="#"><img src="img/5.jpg" className="w-100" alt="img25" /></a>
		  </figure>
	  </div>
		   </div>
		   <div className="trend_2im2 clearfix  position-absolute w-100 top-0">
		     <h5><a className="col_red" href="#">Semper</a></h5>
			<span className="col_red">
		 <i className="fa fa-star"></i>
		 <i className="fa fa-star"></i>
		 <i className="fa fa-star"></i>
		 <i className="fa fa-star"></i>
		 <i className="fa fa-star"></i>
		</span>
		<p className="mb-0">2 Views</p>
		   </div>
		  </div>
		    
		</div>
		<div className="col">
		  <div className="trend_2im clearfix position-relative">
		   <div className="trend_2im1 clearfix">
		     <div className="grid">
		  <figure className="effect-jazz mb-0">
			<a href="#"><img src="img/6.jpg" className="w-100" alt="img25" /></a>
		  </figure>
	  </div>
		   </div>
		   <div className="trend_2im2 clearfix  position-absolute w-100 top-0">
		     <h5><a className="col_red" href="#">Semper</a></h5>
			<span className="col_red">
		 <i className="fa fa-star"></i>
		 <i className="fa fa-star"></i>
		 <i className="fa fa-star"></i>
		 <i className="fa fa-star"></i>
		 <i className="fa fa-star"></i>
		</span>
		<p className="mb-0">2 Views</p>
		   </div>
		  </div>
		    
		</div>
		<div className="col">
		  <div className="trend_2im clearfix position-relative">
		   <div className="trend_2im1 clearfix">
		     <div className="grid">
		  <figure className="effect-jazz mb-0">
			<a href="#"><img src="img/7.jpg" className="w-100" alt="img25" /></a>
		  </figure>
	  </div>
		   </div>
		   <div className="trend_2im2 clearfix  position-absolute w-100 top-0">
		     <h5><a className="col_red" href="#">Semper</a></h5>
			<span className="col_red">
		 <i className="fa fa-star"></i>
		 <i className="fa fa-star"></i>
		 <i className="fa fa-star"></i>
		 <i className="fa fa-star"></i>
		 <i className="fa fa-star"></i>
		</span>
		<p className="mb-0">2 Views</p>
		   </div>
		  </div>
		    
		</div>
		<div className="col">
		  <div className="trend_2im clearfix position-relative">
		   <div className="trend_2im1 clearfix">
		     <div className="grid">
		  <figure className="effect-jazz mb-0">
			<a href="#"><img src="img/8.jpg" className="w-100" alt="img25" /></a>
		  </figure>
	  </div>
		   </div>
		   <div className="trend_2im2 clearfix  position-absolute w-100 top-0">
		     <h5><a className="col_red" href="#">Semper</a></h5>
			<span className="col_red">
		 <i className="fa fa-star"></i>
		 <i className="fa fa-star"></i>
		 <i className="fa fa-star"></i>
		 <i className="fa fa-star"></i>
		 <i className="fa fa-star"></i>
		</span>
		<p className="mb-0">2 Views</p>
		   </div>
		  </div>
		    
		</div>
	  </div>
    </div>
    <div className="carousel-item">
      <div className="trend_2i row">
	    <div className="col">
		  <div className="trend_2im clearfix position-relative">
		   <div className="trend_2im1 clearfix">
		     <div className="grid">
		  <figure className="effect-jazz mb-0">
			<a href="#"><img src="img/9.jpg" className="w-100" alt="img25" /></a>
		  </figure>
	  </div>
		   </div>
		   <div className="trend_2im2 clearfix  position-absolute w-100 top-0">
		     <h5><a className="col_red" href="#">Semper</a></h5>
			<span className="col_red">
		 <i className="fa fa-star"></i>
		 <i className="fa fa-star"></i>
		 <i className="fa fa-star"></i>
		 <i className="fa fa-star"></i>
		 <i className="fa fa-star"></i>
		</span>
		<p className="mb-0">2 Views</p>
		   </div>
		  </div>
		    
		</div>
		<div className="col">
		  <div className="trend_2im clearfix position-relative">
		   <div className="trend_2im1 clearfix">
		     <div className="grid">
		  <figure className="effect-jazz mb-0">
			<a href="#"><img src="img/10.jpg" className="w-100" alt="img25" /></a>
		  </figure>
	  </div>
		   </div>
		   <div className="trend_2im2 clearfix  position-absolute w-100 top-0">
		     <h5><a className="col_red" href="#">Semper</a></h5>
			<span className="col_red">
		 <i className="fa fa-star"></i>
		 <i className="fa fa-star"></i>
		 <i className="fa fa-star"></i>
		 <i className="fa fa-star"></i>
		 <i className="fa fa-star"></i>
		</span>
		<p className="mb-0">2 Views</p>
		   </div>
		  </div>
		    
		</div>
		<div className="col">
		  <div className="trend_2im clearfix position-relative">
		   <div className="trend_2im1 clearfix">
		     <div className="grid">
		  <figure className="effect-jazz mb-0">
			<a href="#"><img src="img/11.jpg" className="w-100" alt="img25" /></a>
		  </figure>
	  </div>
		   </div>
		   <div className="trend_2im2 clearfix  position-absolute w-100 top-0">
		     <h5><a className="col_red" href="#">Semper</a></h5>
			<span className="col_red">
		 <i className="fa fa-star"></i>
		 <i className="fa fa-star"></i>
		 <i className="fa fa-star"></i>
		 <i className="fa fa-star"></i>
		 <i className="fa fa-star"></i>
		</span>
		<p className="mb-0">2 Views</p>
		   </div>
		  </div>
		    
		</div>
		<div className="col">
		  <div className="trend_2im clearfix position-relative">
		   <div className="trend_2im1 clearfix">
		     <div className="grid">
		  <figure className="effect-jazz mb-0">
			<a href="#"><img src="img/4.jpg" className="w-100" alt="img25" /></a>
		  </figure>
	  </div>
		   </div>
		   <div className="trend_2im2 clearfix  position-absolute w-100 top-0">
		     <h5><a className="col_red" href="#">Semper</a></h5>
			<span className="col_red">
		 <i className="fa fa-star"></i>
		 <i className="fa fa-star"></i>
		 <i className="fa fa-star"></i>
		 <i className="fa fa-star"></i>
		 <i className="fa fa-star"></i>
		</span>
		<p className="mb-0">2 Views</p>
		   </div>
		  </div>
		    
		</div>
		<div className="col">
		  <div className="trend_2im clearfix position-relative">
		   <div className="trend_2im1 clearfix">
		     <div className="grid">
		  <figure className="effect-jazz mb-0">
			<a href="#"><img src="img/5.jpg" className="w-100" alt="img25" /></a>
		  </figure>
	  </div>
		   </div>
		   <div className="trend_2im2 clearfix  position-absolute w-100 top-0">
		     <h5><a className="col_red" href="#">Semper</a></h5>
			<span className="col_red">
		 <i className="fa fa-star"></i>
		 <i className="fa fa-star"></i>
		 <i className="fa fa-star"></i>
		 <i className="fa fa-star"></i>
		 <i className="fa fa-star"></i>
		</span>
		<p className="mb-0">2 Views</p>
		   </div>
		  </div>
		    
		</div>
	  </div>
    </div>
    
  </div>

</div>
 </div>
</div>
</section>

<section id="footer">
<div className="footer_m clearfix">
 <div className="container">
   <div className="row footer_1">
    <div className="col-md-4">
	 <div className="footer_1i">
	   <h3><a className="text-white" href="index.html"><i className="fa fa-video-camera col_red me-1"></i> Planet</a></h3>
	   <p className="mt-3">Lorem ipsum dolor sit amet consect etur adi pisicing elit sed do eiusmod tempor incididunt. Lorem ipsum dolor sit amet consect etur. </p>
	   <h6 className="fw-normal"><i className="fa fa-map-marker fs-5 align-middle col_red me-1"></i> 5311 Ceaver Sidge Td.
Pakland, DE 13507</h6>
        <h6 className="fw-normal mt-3"><i className="fa fa-envelope fs-5 align-middle col_red me-1"></i> info@gmail.com</h6>
		<h6 className="fw-normal mt-3 mb-0"><i className="fa fa-phone fs-5 align-middle col_red me-1"></i>  +123 123 456</h6>
	 </div>
	</div>
	<div className="col-md-4">
	 <div className="footer_1i">
	  <h4>Flickr <span className="col_red">Stream</span></h4>
      <div className="footer_1i1 row mt-4">
	   <div className="col-md-3 col-3">
	    <div className="footer_1i1i">
		  <div className="grid clearfix">
				  <figure className="effect-jazz mb-0">
					<a href="#"><img src="img/4.jpg" height="70" className="w-100" alt="abc" /></a>
				  </figure>
			  </div>
		</div>
	   </div>
	   <div className="col-md-3 col-3">
	    <div className="footer_1i1i">
		  <div className="grid clearfix">
				  <figure className="effect-jazz mb-0">
					<a href="#"><img src="img/5.jpg" height="70" className="w-100" alt="abc" /></a>
				  </figure>
			  </div>
		</div>
	   </div>
	   <div className="col-md-3 col-3">
	    <div className="footer_1i1i">
		  <div className="grid clearfix">
				  <figure className="effect-jazz mb-0">
					<a href="#"><img src="img/6.jpg" height="70" className="w-100" alt="abc" /></a>
				  </figure>
			  </div>
		</div>
	   </div>
	   <div className="col-md-3 col-3">
	    <div className="footer_1i1i">
		  <div className="grid clearfix">
				  <figure className="effect-jazz mb-0">
					<a href="#"><img src="img/7.jpg" height="70" className="w-100" alt="abc" /></a>
				  </figure>
			  </div>
		</div>
	   </div>
	  </div>
	  <div className="footer_1i1 row mt-3">
	   <div className="col-md-3 col-3">
	    <div className="footer_1i1i">
		  <div className="grid clearfix">
				  <figure className="effect-jazz mb-0">
					<a href="#"><img src="img/8.jpg" height="70" className="w-100" alt="abc" /></a>
				  </figure>
			  </div>
		</div>
	   </div>
	   <div className="col-md-3 col-3">
	    <div className="footer_1i1i">
		  <div className="grid clearfix">
				  <figure className="effect-jazz mb-0">
					<a href="#"><img src="img/9.jpg" height="70" className="w-100" alt="abc" /></a>
				  </figure>
			  </div>
		</div>
	   </div>
	   <div className="col-md-3 col-3">
	    <div className="footer_1i1i">
		  <div className="grid clearfix">
				  <figure className="effect-jazz mb-0">
					<a href="#"><img src="img/10.jpg" height="70" className="w-100" alt="abc" /></a>
				  </figure>
			  </div>
		</div>
	   </div>
	   <div className="col-md-3 col-3">
	    <div className="footer_1i1i">
		  <div className="grid clearfix">
				  <figure className="effect-jazz mb-0">
					<a href="#"><img src="img/11.jpg" height="70" className="w-100" alt="abc" /></a>
				  </figure>
			  </div>
		</div>
	   </div>
	  </div>
	 </div>
	</div>
	<div className="col-md-4">
	 <div className="footer_1i">
	  <h4>Sign  <span className="col_red">Newsletter</span></h4>
      <p className="mt-3">Subscribe to our newsletter list to get latest news and updates from us</p>
	  <div className="input-group">
				<input type="text" className="form-control bg-black" placeholder="Email" />
				<span className="input-group-btn">
					<button className="btn btn text-white bg_red rounded-0 border-0" type="button">
						 Subscribe</button>
				</span>
		</div>
		<ul className="social-network social-circle mb-0 mt-4">
			<li><a href="#" className="icoRss" title="Rss"><i className="fa fa-instagram"></i></a></li>
			<li><a href="#" className="icoFacebook" title="Facebook"><i className="fa fa-facebook"></i></a></li>
			<li><a href="#" className="icoTwitter" title="Twitter"><i className="fa fa-twitter"></i></a></li>
			<li><a href="#" className="icoGoogle" title="Google +"><i className="fa fa-youtube"></i></a></li>
			<li><a href="#" className="icoLinkedin" title="Linkedin"><i className="fa fa-linkedin"></i></a></li>
		</ul>
	 </div>
	</div>
   </div>
</div>
</div>
</section>

<section id="footer_b" className="pt-3 pb-3 bg_grey">
<div className="container">
   <div className="row footer_1">
     <div className="col-md-8">
	  <div className="footer_1l">
	   <p className="mb-0">© 2013 Your Website Name. All Rights Reserved | Design by <a className="col_red" href="http://www.templateonweb.com">TemplateOnWeb</a></p>
	  </div>
	 </div>
	 <div className="col-md-4">
	  <div className="footer_1r">
	   <ul className="mb-0">
	    <li className="d-inline-block me-2"><a href="#">Home</a></li>
		<li className="d-inline-block me-2"><a href="#">Features</a></li>
		<li className="d-inline-block me-2"><a href="#">Pages</a></li>
		<li className="d-inline-block me-2"><a href="#">Portfolio</a></li>
		<li className="d-inline-block me-2"><a href="#">Blog</a></li>
		<li className="d-inline-block"><a href="#">Contact</a></li>
	   </ul>
	  </div>
	 </div>
   </div>
</div>
</section>
 
     </>
  )
}

export default Home