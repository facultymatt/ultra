

<!-- Page template for mmworks -->
<?php $title = "PORTAL"; $slideshow = true; ?>


<!-- Get the header, leave open  -->
<?php include_once("../../header.php");  $slideshow = true; ?>

<!-- Add additional classes and scripts -->
<script type="text/javascript" src="../../js/slideshow.js"></script>
<!-- End header here, allows for adding of local scripts and styles -->
</head>


<!-- Open Body tag -->
<body class="work">

<!-- Get universal navigation  -->
<?php include_once("../../analyticstracking.php"); ?>
<?php include_once("../../navigation.php"); ?>

<!-- Slideshow -->
<div id="load_slideshow" class="container">
	<div class="row">
		<div class="fourcol">

			<img src="slideshow/uartsscreen-closeup.jpg" title="" />
			<p>I helped design and build a system to connect the UArts community to the schools rich and vibrant culture of exhibits, performances, and events.</p>
			<img src="slideshow/uartsscreen-throwing.jpg" title="" />
			<p>The system gives students and faculty a new way to interact and share information.</p>
			
			<img src="slideshow/uartsscreen-install-sharper.jpg" title="" />
			<p>Part of this system replaced cluttered bulletin boards with an intuitive touch-screen digital interface. </p>
			

			
		</div>
	</div>
</div>


<ul id="supersized"></ul>
<div class="slidecontainer">
<a id="prevslide" class="load-item"><span>&#60;</span></a>
<a id="nextslide" class="load-item"><span>&#62;</span></a>
</div>
<?php include_once("../../print_headline.php"); ?>


<!-- Process -->
<div id="load_process" class="container">
	<div class="row">
		<div class="fourcol"></div>
		
		<div id="processArea" class="sevencol">
		
			<h4>Design Brief</h4>
			<div class="inner_wrapper">
				
				<div class="twelvecol">
				<h3>The Terra Building serves as the central hub for the School of Design University of the Arts. But the entrance to Terra building was cluttered with old news. A makeshift wall of posters, announcements, and ads was more than information overload, but it was also the first thing visitors to the Terra building were greeted with when entering.</h3>
				</div>
				
				<div class="twelvecol"><img src="process/uartsscreen-before.jpg" title="" /></div>
				
				<div class="twelvecol">
				<p>As part of a project on collaboration within the university, my collogues and I envisioned replacing this wall of clutter with a huge projection screen—bulletin board 2.0! Software would allow the university’s community to post announcements and hang “digital flyers.” A calendar with up-to-date events would ensure you always know what’s happening in this vibrant art and design community.</p>
				
				<h4>Project Highlights</h4>
				</div>
				
				<div class="sevencol"><img src="process/uartsscreen-space.jpg" title="" /></div>
				<div class="fivecol last">
				<h5>Making Space</h5>
				<p>After getting permission for this project from the University’s president, we started by taking down the old makeshift bulletin board. We discovered there was a decent sized empty space behind it. We used this space to hide the projection equipment.</p>
				</div>
				
				<div class="sevencol"><img src="process/uartsscreen-stand.jpg" title="" /></div>
				<div class="fivecol last">
				<h5>Projection stand</h5>
				<p>I also built a stand to hold the projector steady for testing This allowed us to easily and quickly change the angle of the projector. The stand was also used for the install. </p>
				</div>
				
				<div class="sevencol"><img src="process/uartsscreen-mirror.jpg" title="" /></div>
				<div class="fivecol last">
				<h5>Mirror</h5>
				<p>We needed to use an existing projector for this project. However, it was not a short throw model and because of the limited space behind the screen, we needed to improvise. To increase the projectors throw (final image size) we needed to increase the distance between the projector and screen with a mirror. I built a mount to hold a large mirror from IKEA. This successfully increased the throw to the necessary 80 inches.</p>
				</div>
				
				<div class="sevencol"><img src="process/uartsscreen-surface.jpg" title="" /></div>
				<div class="fivecol last">
				<h5>Projection Surfaces</h5>
				<p>For the projection surface we needed a material that would be rigid enough to span the 80 inch distance. It needed to be transparent enough to let light through but opaque enough to hide the inner workings. It also needed to diffuse the light properly to get a clean image, Giacomo and professor Mike McAllister put acrylic samples to the test.</p>
				</div>
				
				<div class="sevencol"><img src="process/uartsscreen-code.jpg" title="" /></div>
				<div class="fivecol last">
				<h5>Quick prototyping with jQuery</h5>
				<p>For the software backend, a single web page was created with HTML and jQuery to serve twitter updates, pull google calendar feeds, and display random images. The advantage of this was two-fold: it was easy to update the images via FTP and the site was also accessible from any internet enabled device. In other words, any display screen on the UArts property (since they all run on Mac Minis) could potentially be transformed into bulletin board 2.0 by just launching the web browser — no custom hardware of software needed! </p>
				</div>
				
				<div class="twelvecol last">
				<h4>Collaborators</h4>
				<p>Giacomo Ciminello, Mike Smith and Danny Chang (install), Sherika Wynter, Jess Williams</p>
					
				<h4>Responsibilities</h4> 
				<p>Concept, site approval, build / install, software development</p> 	
				</div>				
				
			</div>
		</div>
	</div>
</div>
			
<section id="footer">&#169; 2011 Matt Miller</section>

</body>
</html>
