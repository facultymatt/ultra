

<!-- Page template for mmworks -->
<?php $title = "ResourceLA Website"; ?>


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

			<img src="slideshow/resourcela-animate.jpg" title="" />
			<p>When the client asks for Flash, you give 'em jQuery.</p>
			
			<img src="slideshow/resourcela-2.jpg" title="" />
			<p>You give 'em a solid website built on the Drupal CMS too.</p>
			
			
			
		</div>
	</div>
</div>


<ul id="supersized"></ul>
<div class="slidecontainer">
<a id="prevslide" class="load-item"><span>&#60;</span></a>
<a id="nextslide" class="load-item"><span>&#62;</span></a>
</div>
<?php include_once("../../print_headline.php"); ?>


<div id="load_process" class="container">
	<div class="row">
		<div class="fourcol"></div>
		<div class="sevencol">
				<div class="inner_wrapper">
					<h4>CLIENTS</h4>
					Cheng + Snyder, NY 
					ResourceLA, LA
					
					<h4>DESIGN BRIEF</h4>
					<p>Working with the design firm Cheng + Snyder, we brought this website from initial concept to finished website. The majority of design work was handled by Cheng + Snyder, who contracted me to handle the website development and technical consulting.</p>
					
					<p>Initally the client was looking for “Flash-like” interactions and the ability to easily update and maintain their site. After discussing the disadvantages of Flash, it was decided to use pure html and javascript to achieve rich interactions. Drupal was used as a content management system.</p>
					
					<h4>INITIAL DEISGN</h4>
					<p>Brett from Cheng + Snyder worked on the initial design. The client choose the concept of horizontal bands. During this process, I created simple test pages to demonstrate functionality directly in the browser.</p>   
				</div>
				<div class="sixcol"><img src="process/brief/brief-1.png" title="" /></div>
				<div class="sixcol"><img src="process/brief/brief-2.png" title="" /></div>
				<div class="sixcol"><img src="process/brief/brief-3.png" title="" /></div>
				<div class="sixcol"><img src="process/brief/brief-4.png" title="" /></div>
				<div class="sixcol"><img src="process/brief/brief-5.png" title="" /></div>

				<div class="sixcol"><img src="process/brief/brief-final0.png" title="" /></div>
				<div class="sixcol"><img src="process/brief/brief-final1.png" title="" /></div>
				<div class="sixcol"><img src="process/brief/brief-final2.png" title="" /></div>
				<div class="twelvecol">
					<h4>TECHNICAL CHALLENGES FROM THE LIVE WEBCAM FEED</h4>
					<p>Another request from the client was to have a live webcam feed. Many hours of research and discussion went into this — discussing different camera options, indoor / outdoor, and the strategies for handling the increased bandwidth. In the end we settled on using an old macbook, webcam, and a program called EVOCAM. This program would upload a jpeg from the webcam in set intervals. We use this image to display on the site with a timestamp.</p>
					<h3>Making the site easy to update and maintain</h3>
					<p>In order to hand the site over to the client and have them take on the responsibility of updating content, the administration section of the site needed to be solid (and anyone who know Drupal, knows this can be a challenge.) First things first, I built a custom nav bar that clearly defined each client side maintenance task. When the client adds or updates content, they are presented with only a minimum amount of forms and options. They need not even worry about html tags, Drupal handles this for them!</p>
				</div>
			
		
				<div class="sixcol">
					<img src="process/admin/admin-dragdrop.png" title="" />
				</div>
				<div class="sixcol last">
					<img src="process/admin/admin-edit.png" title="" />			
				</div>

				
				<div class="twelvecol">	
					<h3>Picking colors</h3>
					<p>To reflect the unique nature of ResourceLA, we wanted to give them an equally unique color scheme. In fact, we decided to let them pick their own color palettes! With Druapl, we added a color palette feature.</p>
					<p>Each time someone visits the site, a random color palette is loaded, shuffled, and used to colorize different elements of the site. As you can see the color possibilities are endless.</p>
				</div>
				
				<div class="sixcol"><img src="process/admin/admin-color-menu.png" title="" /></div>
				<div class="sixcol last"><img src="process/admin/admin-color-picker.png" title="" /></div>
				
			
	
				<div class="threecol"><img src="process/colors/color1.png" title="" /></div>
				<div class="threecol"><img src="process/colors/color2.png" title="" /></div>
				<div class="threecol"><img src="process/colors/color3.png" title="" /></div>
				<div class="threecol last"><img src="process/colors/color4.png" title="" /></div>
				<div class="threecol"><img src="process/colors/color5.png" title="" /></div>
				<div class="threecol"><img src="process/colors/color6.png" title="" /></div>
				<div class="threecol"><img src="process/colors/color7.png" title="" /></div>
			</div>
		</div>
	</div>
</div>
			

<section id="footer">&#169; 2011 Matt Miller</section>

</body>
</html>