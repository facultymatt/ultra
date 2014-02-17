

<!-- Page template for mmworks -->
<?php $title = "ResourceLA Website";  $slideshow = true; ?>


<!-- Get the header, leave open  -->
<?php include_once("../../header.php"); ?>

<!-- Add additional classes and scripts -->
<script type="text/javascript" src="../../js/slideshow.js"></script>
<!-- End header here, allows for adding of local scripts and styles -->
</head>


<!-- Open Body tag -->
<body class="work">

<!-- Get universal navigation  -->
<?php include_once("../../analyticstracking.php"); ?>
<?php include_once("../../navigation.php"); ?>
<!-- ======================================== -->


<!-- Slideshow -->
<div id="load_slideshow" class="container">
	<div class="row">
		<div class="fourcol">

			<img src="slideshow/resourcela-animate.jpg" title="" />
			<p>When the client asks for Flash, you give 'em jQuery.</p>
			
			<img src="slideshow/resourcela-2.jpg" title="" />
			<p>Using Drupal, you let 'em pick their own colors too. </p>
			
			<img src="slideshow/resourcela-webcam.jpg" title="" />
			<p>And why not throw in a webcam for some fun!</p>
			
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
		<div id="processArea" class="sevencol ">
				<h4>DESIGN BRIEF</h4>
				<div class="inner_wrapper">
				<div class="twelvecol">
					<p>ResourceLA is a talent agency that represents some of the finest names in the business. They are fun and quirky and needed a website that represented this colorful personality. For this project I was contracted by the design firm Cheng+Snyder. They handled the site’s aesthetic and design while I served as technical consultant and developer.</p>
					<p>Initially ResourceLA was looking for “Flash-like” interaction. They also wanted the ability to easily update and maintain their site’s content. Two conflicting goals, indeed. From the get-go I recommended ditching Flash in favor of a site built with semantic HTML and jQuery. I provided examples and demos of what was possible with jQuery and ensured the proposed designs could be to built in this way. Drupal was used for the backend, allowing ResourceLA to update the site’s content as needed.</p>

					
					<h4>Initial Design Concepts</h4>
					<p>Brett from Cheng + Snyder created the initial design. The client choose the concept of horizontal bands. During this process, I created simple test pages to demonstrate functionality directly in the browser.</p>   
				</div>
				<div class="sixcol"><img src="process/brief_crop/brief-1.jpg" title="" /></div>
				<div class="sixcol last"><img src="process/brief_crop/brief-2.jpg" title="" /></div>
				<div class="sixcol "><img src="process/brief_crop/brief-5.jpg" title="" /></div>
				<div class="sixcol last"><img src="process/brief_crop/brief-7.jpg" title="" /></div>
				
				
				<div class="twelvecol last">
				<h4>Project Highlights</h4>
				
				
				<h5>Webcam</h5>
				<p>Representing creative talent in Los Angeles ensures that lots of interesting, famous, and perhaps infamous characters come through your door. ResourceLA wanted to ensure these shenanigans were caught on camera. After discussing different camera options and the strategies for handling the increased bandwidth of a live feed, we decided to on a simple solution. Using a program called Evocam, a webcam snapshot is taken every 30 seconds and uploaded via FTP to the webserver. This image is loaded when someone visits the site.</p>
				</div>
				<div class="sixcol"><img src="process/visitors_crop/visitor1.jpg" title="" /></div>
				<div class="sixcol last"><img src="process/visitors_crop/visitor2.jpg" title="" /></div>
				<div class="sixcol"><img src="process/visitors_crop/visitor3.jpg" title="" /></div>
				<div class="sixcol last"><img src="process/visitors_crop/visitor5.jpg" title="" /></div>

				<div class="twelvecol last">
				<h5>Picking colors</h5>
				<p>To reflect their colorful personality ResourceLA has full control over the color palettes used on their website. They can change palettes for different seasons, holidays, or just because! Each time someone visits the site, an active color palette is loaded, shuffled, and used to colorize different elements of the site—even the logo changes colors. As you can see, the color possibilities are endless.</p>
				</div>
				<div class="sixcol"><img src="process/admin/admin-color-menu.png" title="" /></div>
				<div class="sixcol last"><img src="process/admin/admin-color-picker.png" title="" /></div>
			
			
				<div class="twelvecol last">
				<h5>Easy to use editorial interface</h5>
				<p>The editorial interface helps take the "Drupalness" out of this Drupal site. Anyone who has tried to administer a Drupal site before knows how daunting of a task can be. Instead, ResourceLA staff are greeted with a toolbar that clearly defines the tasks they will need on a regular basis. When they update and add content, only the necessary fields are presented. In other words, they don’t need to worry about urls, html tags, comments on/off, or the like, Drupal handles all of this for them.</p>
				</div>
				<div class="sixcol"><img src="process/admin/admin-dragdrop.png" title="" /></div>
				<div class="sixcol last"><img src="process/admin/admin-edit.png" title="" /></div>

				<div class="twelvecol last">
				<h5>Dynamic jQuery welcome animation</h5>
				<p>At the time of development, ResourceLA was representing five categories of talent. Knowing they would have the flexibility to change, all the site’s animations are generated dynamically. For example, the welcome animation, which is based on the number of talent categories they represent, will always work as intended even if categories are added or removed. To see this in action, you really should <a href="http://www.resourcela.com" target="_blank" title="Visit ResourceLA's website" rel="external">visit the site!</a></p>

				<div class="twelvecol last">
				<h4>Links</h4>
				<p><a href="" target="_blank" rel="external">http://www.resourcela.com</a></p>
				</div>
				
				<div class="twelvecol last">
				<h4>Collaborators</h4>
				<p>Cheng + Snyder, New York, NY<br /> 
				ResourceLA, Los Angeles, CA</p>
				</div>

				<div class="twelvecol last">
				<h4>Responsibilities</h4>
				<p>Technical consulting, user experience consulting, website development, jQuery, HTML, Drupal</p>
				</div>

			</div>
		</div>
	</div>
</div>
			

<section id="footer">&#169; 2011 Matt Miller</section>

</body>
</html>