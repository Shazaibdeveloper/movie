import React from 'react'

const Services = () => {
  return (
	 <>
	  
<section id="top">
<div className="container">
 <div className="row top_1">
  <div className="col-md-3">
   <div className="top_1l pt-1">
    <h3 className="mb-0"><a className="text-white" href="index.html"><i className="fa fa-video-camera col_red me-1"></i> Planet</a></h3>
   </div>
  </div>
  <div className="col-md-5">
   <div className="top_1m">
    <div className="input-group">
				<input type="text" className="form-control bg-black" placeholder="Search Site..." />
				<span className="input-group-btn">
					<button className="btn btn text-white bg_red rounded-0 border-0" type="button">
						 Search</button>
				</span>
		</div>
   </div>
  </div>
  <div className="col-md-4">
   <div className="top_1r text-end">
     <ul className="social-network social-circle mb-0">
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
</section>

<section id="header">
<nav className="navbar navbar-expand-md navbar-light" id="navbar_sticky">
  <div className="container">
    <a className="navbar-brand text-white fw-bold" href="index.html"><i className="fa fa-video-camera col_red me-1"></i> Planet</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mb-0">
        <li className="nav-item">
          <a className="nav-link" aria-current="page" href="index.html">Home</a>
        </li>
		<li className="nav-item">
          <a className="nav-link" href="about.html">About Us</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Blog
          </a>
          <ul className="dropdown-menu drop_1" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="blog.html">Blog</a></li>
            <li><a className="dropdown-item border-0" href="blog_detail.html">Blog Detail</a></li>
          </ul>
        </li>
		<li className="nav-item">
          <a className="nav-link active" href="services.html">Services</a>
        </li>
		<li className="nav-item">
          <a className="nav-link" href="team.html">Team</a>
        </li>
		<li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Pages
          </a>
          <ul className="dropdown-menu drop_1" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="about.html">About Us</a></li>
            <li><a className="dropdown-item" href="services.html">Services</a></li>
			<li><a className="dropdown-item" href="team.html">Team</a></li>
            <li><a className="dropdown-item border-0" href="contact.html">Contact</a></li>
          </ul>
        </li>
		
		<li className="nav-item">
          <a className="nav-link" href="contact.html">Contact Us</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
</section>

<section id="center" className="center_o pt-2 pb-2">
 <div className="container-xl">
  <div className="row center_o1">
   <div className="col-md-5">
     <div className="center_o1l">
	  <h2 className="mb-0">Services</h2>
	 </div>
   </div>
   <div className="col-md-7">
     <div className="center_o1r text-end">
	  <h6 className="mb-0 col_red"><a href="#">Home</a> <span className="me-2 ms-2 text-light"><i className="fa fa-caret-right align-middle"></i></span> Services</h6>
	 </div>
   </div>
  </div>
 </div>
</section>

<section id="serv_pg" className="pt-4 pb-4 bg_grey">
 <div className="container-xl">
  <div className="row trend_1">
  <div className="col-md-12">
   <h4 className="mb-0"><i className="fa fa-youtube-play align-middle col_red me-1"></i> Our    <span className="col_red">Main Services</span></h4>
  </div>
 </div>
  <div className="row serv_pg1 mt-4">
   <div className="col-md-4">
    <div className="serv_pg1i bg_dark p-4 pt-3">
	 <h1 className="col_light"><i className="fa fa-video-camera"></i> <span className="pull-right">01</span></h1>
	 <h5 className="col_red">Market Advice For Business</h5>
	 <p className="mt-3">There are many variations of passag es of Lorem Ipsum available, but generally all have suffered.</p>
	 <h6 className="mb-0 mt-4"><a className="button" href="#">Read More</a></h6>
	</div>
   </div>
   <div className="col-md-4">
    <div className="serv_pg1i bg_dark p-4 pt-3">
	 <h1 className="col_light"><i className="fa fa-gamepad"></i> <span className="pull-right">02</span></h1>
	 <h5 className="col_red">We love our client</h5>
	 <p className="mt-3">There are many variations of passag es of Lorem Ipsum available, but generally all have suffered.</p>
	 <h6 className="mb-0 mt-4"><a className="button" href="#">Read More</a></h6>
	</div>
   </div>
   <div className="col-md-4">
    <div className="serv_pg1i bg_dark p-4 pt-3">
	 <h1 className="col_light"><i className="fa fa-film"></i> <span className="pull-right">03</span></h1>
	 <h5 className="col_red">Professional Consulting</h5>
	 <p className="mt-3">There are many variations of passag es of Lorem Ipsum available, but generally all have suffered.</p>
	 <h6 className="mb-0 mt-4"><a className="button" href="#">Read More</a></h6>
	</div>
   </div>
  </div>
 </div>
</section>

<section id="spec">
 <div className="spec_m">
  <div className="container-xl">
  <div className="spec_1 row">
   <div className="col-md-3 col-6">
    <div className="spec_1i text-center p-4">
	 <span className="font_60 col_red"><i className="fa fa-user-md"></i></span>
	 <h1>160</h1>
	 <h5>Experienced Staff</h5>
	</div>
   </div>
   <div className="col-md-3 col-6">
    <div className="spec_1i text-center p-4">
	 <span className="font_60 col_red"><i className="fa fa-bar-chart"></i></span>
	 <h1>550</h1>
	 <h5>Completed Projects</h5>
	</div>
   </div>
   <div className="col-md-3 col-6">
    <div className="spec_1i text-center p-4">
	 <span className="font_60 col_red"><i className="fa fa-tags"></i></span>
	 <h1>170</h1>
	 <h5>Winning Awards</h5>
	</div>
   </div>
   <div className="col-md-3 col-6">
    <div className="spec_1i text-center p-4">
	 <span className="font_60 col_red"><i className="fa fa-smile-o"></i></span>
	 <h1>270</h1>
	 <h5>Satisfied Customers</h5>
	</div>
   </div>
  </div>
 </div>
 </div>
</section>

<section id="price" className="pt-4 pb-4">
 <div className="container-xl">
   <div className="row price_1">
     <div className="col-md-3">
	  <div className="price_1i bg_grey p-4 rounded">
	   <h5>Starter</h5>
	   <h1 className="mt-3">$17 <span className="fs-6">/ month</span></h1>
	   <h6 className="mt-3"><i className="fa fa-chevron-right font_12 me-1 col_red"></i> Delivering Corporate</h6>
	   <h6 className="mt-3"><i className="fa fa-chevron-right font_12 me-1 col_red"></i> Business Solutions</h6>
	   <h6 className="mt-3"><i className="fa fa-chevron-right font_12 me-1 col_red"></i> Global Corporation</h6>
	   <h6 className="mt-3"><i className="fa fa-chevron-right font_12 me-1 col_red"></i> Working Group</h6>
	   <h6 className="mt-3"><i className="fa fa-chevron-right font_12 me-1 col_red"></i> Migration Software</h6>
	   <hr />
	   <h6 className="mb-0 text-center"><a className="button" href="#">Select Plan</a></h6>
	   
	  </div>
	 </div>
	 <div className="col-md-3">
	  <div className="price_1i bg_grey p-4 rounded">
	   <h5>Basic</h5>
	   <h1 className="mt-3">$27 <span className="fs-6">/ month</span></h1>
	   <h6 className="mt-3"><i className="fa fa-chevron-right font_12 me-1 col_red"></i> Delivering Corporate</h6>
	   <h6 className="mt-3"><i className="fa fa-chevron-right font_12 me-1 col_red"></i> Business Solutions</h6>
	   <h6 className="mt-3"><i className="fa fa-chevron-right font_12 me-1 col_red"></i> Global Corporation</h6>
	   <h6 className="mt-3"><i className="fa fa-chevron-right font_12 me-1 col_red"></i> Working Group</h6>
	   <h6 className="mt-3"><i className="fa fa-chevron-right font_12 me-1 col_red"></i> Migration Software</h6>
	   <hr />
	   <h6 className="mb-0 text-center"><a className="button" href="#">Select Plan</a></h6>
	  </div>
	 </div>
	 <div className="col-md-3">
	  <div className="price_1i bg_red p-4 rounded">
	   <h5>Professional</h5>
	   <h1 className="mt-3">$45 <span className="fs-6">/ month</span></h1>
	   <h6 className="mt-3"><i className="fa fa-chevron-right font_12 me-1 col_red"></i> Delivering Corporate</h6>
	   <h6 className="mt-3"><i className="fa fa-chevron-right font_12 me-1 col_red"></i> Business Solutions</h6>
	   <h6 className="mt-3"><i className="fa fa-chevron-right font_12 me-1 col_red"></i> Global Corporation</h6>
	   <h6 className="mt-3"><i className="fa fa-chevron-right font_12 me-1 col_red"></i> Working Group</h6>
	   <h6 className="mt-3"><i className="fa fa-chevron-right font_12 me-1 col_red"></i> Migration Software</h6>
	   <hr />
	   <h6 className="mb-0 text-center"><a className="button" href="#">Select Plan</a></h6>
	   
	  </div>
	 </div>
	 <div className="col-md-3">
	  <div className="price_1i bg_grey p-4 rounded">
	   <h5>Ultra</h5>
	   <h1 className="mt-3">$89 <span className="fs-6">/ month</span></h1>
	   <h6 className="mt-3"><i className="fa fa-chevron-right font_12 me-1 col_red"></i> Delivering Corporate</h6>
	   <h6 className="mt-3"><i className="fa fa-chevron-right font_12 me-1 col_red"></i> Business Solutions</h6>
	   <h6 className="mt-3"><i className="fa fa-chevron-right font_12 me-1 col_red"></i> Global Corporation</h6>
	   <h6 className="mt-3"><i className="fa fa-chevron-right font_12 me-1 col_red"></i> Working Group</h6>
	   <h6 className="mt-3"><i className="fa fa-chevron-right font_12 me-1 col_red"></i> Migration Software</h6>
	   <hr />
	   <h6 className="mb-0 text-center"><a className="button" href="#">Select Plan</a></h6>
	   
	  </div>
	 </div>
   </div>
   <div className="row work_1 mt-5">
    <div className="col-md-6">
	 <div className="work_1l">
	  <h4 className="col_red mb-4">What We Do</h4>
	  <div className="accordion" id="accordionExample">
  <div className="accordion-item">
   <h2 className="accordion-header" id="headingOne">
     <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
       Vestibulum Ante Ipsum Prin Orci
     </button>
   </h2>
   <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
     <div className="accordion-body">
      Lorem ipsum dolor sit amet consectetuer adipiscing elit Suspendisse et justo consectetuer adipiscing Praesent mattis commodo augue Aliquam ornare consectetuer adipiscing hendrerit augue .
     </div>
   </div>
  </div>
   
  <div className="accordion-item">
   <h2 className="accordion-header" id="headingTwo">
     <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
      Cras Eleifend Lacus Ullamcorper
     </button>
   </h2>
   <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
     <div className="accordion-body">
       Lorem ipsum dolor sit amet consec tetuer adipiscing elit Suspendissete justo consec tetuer elite.consectetuer adipiscing hendrerit augue .
     </div>
   </div>
 </div>
  
  <div className="accordion-item">
   <h2 className="accordion-header" id="headingThree">
     <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
      Suspendisse Lacinia Turpis Convallis
     </button>
   </h2>
   <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
     <div className="accordion-body">
       Lorem ipsum dolor sit amet consec tetuer adipiscing elit Suspendissete justo consec tetuer elite.consectetuer adipiscing hendrerit augue .
     </div>
   </div>
 </div>
</div>
	 </div>
	</div>
	<div className="col-md-6">
	 <div className="work_1r">
	    <h4 className="col_red mb-4">Our Skills</h4>
		<div className="play2rir">
		 <h6 className="fw-normal">Website Design <span className="pull-right">92%</span></h6>
         <div className="progress">
  <div className="progress-bar" role="progressbar" style={{ width: "92%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
</div>
          <h6 className="fw-normal mt-4">Graphic Design <span className="pull-right">73%</span></h6>
         <div className="progress">
  <div className="progress-bar" role="progressbar" style={{ width: "73%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
</div>
          <h6 className="fw-normal mt-4">Javascript <span className="pull-right">90%</span></h6>
         <div className="progress">
  <div className="progress-bar" role="progressbar" style={{ width: "90%"}}aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
</div>
          <h6 className="fw-normal mt-4">Development <span className="pull-right">83%</span></h6>
         <div className="progress">
  <div className="progress-bar" role="progressbar" style={{ width: "83%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
</div>
 <h6 className="fw-normal mt-4">Ms Office <span className="pull-right">79%</span></h6>
         <div className="progress">
  <div className="progress-bar" role="progressbar" style={{ width: "79%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
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

export default Services