import React from 'react'

const Contact = () => {
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
          <a className="nav-link" href="services.html">Services</a>
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
          <a className="nav-link active" href="contact.html">Contact Us</a>
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
	  <h2 className="mb-0">Contact</h2>
	 </div>
   </div>
   <div className="col-md-7">
     <div className="center_o1r text-end">
	  <h6 className="mb-0 col_red"><a href="#">Home</a> <span className="me-2 ms-2 text-light"><i className="fa fa-caret-right align-middle"></i></span> Contact</h6>
	 </div>
   </div>
  </div>
 </div>
</section>

<section id="contact" className="pt-4 pb-4 bg_grey">
 <div className="container-xl">
  <div className="row contact_1 bg_dark  pt-5 pb-5">
   <div className="col-md-3">
    <div className="contact_1i row">
	 <div className="col-md-2 col-2">
	  <div className="contact_1il">
	   <span className="col_red fs-3"><i className="fa fa-map-marker"></i></span>
	  </div>
	 </div>
	 <div className="col-md-10 col-10">
	  <div className="contact_1ir">
	   <h5 className="col_red">Company Address</h5>
	   <p className="mb-0">5311 Ceaver Sidge Td. Pakland, DE 13507</p>
	  </div>
	 </div>
	</div>
   </div>   
   <div className="col-md-3">
    <div className="contact_1i row">
	 <div className="col-md-2 col-2">
	  <div className="contact_1il">
	   <span className="col_red fs-3"><i className="fa fa-clock-o"></i></span>
	  </div>
	 </div>
	 <div className="col-md-10 col-10">
	  <div className="contact_1ir">
	   <h5 className="col_red">Office Hours</h5>
	   <p className="mb-0">Monday To Saturday - 10.00 - 07.00</p>
	   <p className="mb-0">Sunday - Closed</p>
	  </div>
	 </div>
	</div>
   </div>
   <div className="col-md-3">
    <div className="contact_1i row">
	 <div className="col-md-2 col-2">
	  <div className="contact_1il">
	   <span className="col_red fs-3"><i className="fa fa-envelope"></i></span>
	  </div>
	 </div>
	 <div className="col-md-10 col-10">
	  <div className="contact_1ir">
	   <h5 className="col_red">E-mail</h5>
	   <p className="mb-0">info@gmail.com</p>
	   <p className="mb-0">info@gmail.com</p>
	  </div>
	 </div>
	</div>
   </div>
   <div className="col-md-3">
    <div className="contact_1i row">
	 <div className="col-md-2 col-2">
	  <div className="contact_1il">
	   <span className="col_red fs-3"><i className="fa fa-phone"></i></span>
	  </div>
	 </div>
	 <div className="col-md-10 col-10">
	  <div className="contact_1ir">
	   <h5 className="col_red">Phone Numbers</h5>
	   <p className="mb-0">+123 123 456</p>
	   <p className="mb-0">+123 123 456</p>
	  </div>
	 </div>
	</div>
   </div>
  </div>
  <div className="row contact_2 mt-4">
   <div className="col-md-3">
    <div className="contact_2r">
	  <h5 className="mb-3">LONDON OFFICE</h5>
	  <p><i className="fa fa-car col_red me-1"></i> 111 Queen Sv, WIC 1, India</p>
	  <p><i className="fa fa-phone col_red me-1"></i> +123 123 456</p>
	   <p><i className="fa fa-globe col_red me-1"></i> <a href="#">info@gmail.com</a></p>
	    <p><i className="fa fa-envelope col_red me-1"></i> <a href="#">info@gmail.com</a></p>
		<h5 className="mb-3 mt-4">BUSINESS HOURS</h5>
		<p>Hotline is available for 24 hours a day!..</p>
		<p>Monday – Friday : <span className="fw-bold text-white">9am to 7pm</span></p>
		<p>Saturday : <span className="fw-bold text-white">11am to 3pm</span></p>
		<p>Sunday : <span className="fw-bold text-white">Closed</span></p>
	</div>
   </div>
   <div className="col-md-9">
    <div className="contact_2l row">
	 <div className="col-md-12">
	  <h4>GET IN TOUCH</h4>
	 </div> 
	</div>
	<div className="contact_2l1 mt-3 row">
	 <div className="col-md-6">
	  <div className="contact_2l1i">
	    <input className="form-control" placeholder="Name*" type="text" />
	  </div>
	 </div> 
	 <div className="col-md-6">
	  <div className="contact_2l1i">
	    <input className="form-control" placeholder="Email*" type="text" />
	  </div>
	 </div>
	 
	</div>
	<div className="contact_2l1 mt-3 row">
	 <div className="col-md-6">
	  <div className="contact_2l1i">
	    <input className="form-control" placeholder="Name*" type="text" />
	  </div>
	 </div> 
	 <div className="col-md-6">
	  <div className="contact_2l1i">
	    <input className="form-control" placeholder="Email*" type="text" />
	  </div>
	 </div>
	 
	</div>
	<div className="contact_2l1 mt-3 row">
	 <div className="col-md-12">
	  <div className="contact_2l1i">
	    <textarea placeholder="Comment" className="form-control form_text"></textarea>
		<h6 className="mt-3 mb-0"><a className="button" href="#"> Submit</a></h6>
	  </div>
	 </div> 
	</div>
   </div>
  </div>
  <div className="row contact_3 mt-4">
   <div className="col-md-12">
     <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d114964.53925916665!2d-80.29949920266738!3d25.782390733064336!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9b0a20ec8c111%3A0xff96f271ddad4f65!2sMiami%2C+FL%2C+USA!5e0!3m2!1sen!2sin!4v1530774403788" height="450" style={{border:"0", width:"100%"}} allowfullscreen=""></iframe>
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

export default Contact