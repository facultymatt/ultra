
<!-- Page template for mmworks -->
<?php $title = "PIXEL"; $slideshow = true;  
?>

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
<!-- ======================================== -->


<!-- Slideshow frame / mask -->
<div  class="wrapper_full">
	<img id="m_frame_full" src="slideshow/pixel-slideshow-mask3.png" />
	<!-- <p class="caption">Comps from the Rant cloud platform.</p> -->	
</div>




<!-- Slideshow -->
<div id="load_slideshow" class="container">
	<div class="row">
		<div class="fourcol">
				
			<img src="slideshow/pixel-suitcase.jpg" title="" />
			<p>What is PIXEL?</p>
			
			<img src="slideshow/pixel-designdoes2.jpg" title="" />
			<p>PIXEL is an interactive experience that connects people through their eyes.</p>

			<img src="slideshow/pixel-fourthwallfinal.jpg" title="" />
			<p>Peer into PIXEL and invite others to experience what you see.</p>
			
			<img src="slideshow/pixel-research.jpg" title="" />
			<p>PIXEL exposes exactly what you are looking at by tracking your eye movements. </p>
			
			<img src="slideshow/pixel-meholding.jpg" title="" />
			<p>Interesting view, eh?</p>
			
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
		
			<h4>Process</h4>
			<div class="inner_wrapper">
				
				<div class="twelvecol">
				<h3>How can I see what you see? The concept of peering through someone else’s eyes is familiar to us from TV and  movies. With this project, my colleague and I endeavored to create this situation in real life.</h3>
				
				
				<p>Using open-source eye tracking technology we created a prototype reminiscent of a children’s viewfinder. We created a playful way to experience what someone else is seeing—watching their gaze indicated as a small dot on a computer screen as they take a look at their surroundings.</p>
				
				<img class="sevencol" src="process/pixel-eyetracking.jpg" alt="pixel-eyetracking"  />
					
				<p>Eye tracking works by first shining infrared light into your eye. Your pupil absorbs this light and appears on camera as a solid black dot, allowing software to easily lock onto your pupil position and track your gaze. PIXEL takes this a step forward, using a second camera to record your field of view. The two camera feeds are overlaid on top of one another and your gaze appears as a small dot within your field of view.</p>
				
				<p>The software that runs PIXEL is a hacked version of the open-source EyeWriter. It’s much simpler though, relying mainly on blob tracking to track your gaze. Since the PIXEL is held closely to the viewers face (like a view-master) calibration is not required—eye position is consistent. In this way PIXEL overcomes the main limitation of many eye tracking systems.</p>
				</div>
				
				<div class="twelvecol">
				<h4>Making PIXEL</h4>
				<img src="process/pixel-version1.jpg" alt="pixel-version1"  />
				<p class="caption">Prototype 1 was constructed using a viewfinder lens and wood box. The goal was not aesthetic, but rather a rugged proof of concept. </p>
				
				<img src="process/pixel-version2.jpg" alt="pixel-version2"  />
				<p class="caption">For prototype 2 we designed and 3D printed a large plastic case. The case is reminiscent of a children’s viewfinder but has quite a different feel.</p>
				
				<div class="sixcol"><img src="process/pixel-version2-detail.jpg" alt="pixel-version2-detail" /></div>
				<div class="sixcol last"><img src="process/pixel-version2-detail2.jpg" alt="pixel-version2-detail2"  /></div>
				<p class="caption">Looking inside prototype 2, you can see a mess of wires and cables. There is a Mac Mini that runs the eye tracking software. Recently, we have upgraded PIXEL’s hardware so these wires are no longer needed.</p>
				</div>
				
				
				
				<div class="twelvecol">
				
				<h4>Exhibitions</h4>
				<ul>
				<li>2011, Soon to be announced!</li>
				<li>2011, Museums and the Web Conference opening reception</li>
				<li>2011, Fourth Wall Arts Salon</li>
				<li>2011, UArts Design Exhibition: Active Territory</li>
				<li>2010, UArts Deign Exhibition: Design Does</li>
				</ul>
				
				<h4>Links</h4>
				<a href="http://lookintopixel.com/" title="Visit PIXEL's website" rel="external" target="_blank">http://lookintopixel.com/</a>
				
				<h4>Collaborators</h4>
				<p>This project is an ongoing collaboration with colleague John MacDuffie Woodburn.</p>

				<h4>Responsibilities</h4>
				<p>Hardware hacking, OpenFrameworks, software development, creative direction</p>
				</div>				
			
			</div>
		</div>
	</div>
</div>

<section id="footer">&#169; 2011 Matt Miller</section>

</body>
</html>