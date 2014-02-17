<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<!-- saved from url=(0014)about:internet -->
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<title>EyeAware</title>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<script type="text/javascript" src="http://use.typekit.com/whx5ocx.js"></script>
	<script type="text/javascript">try{Typekit.load();}catch(e){}</script>	

	<link rel="stylesheet" href="../../css/1140.css" type="text/css" media="screen" />
	<link rel="stylesheet" href="../../css/navigation.css?<?=filemtime("../../css/navigation.css")?>" type="text/css" media="screen" />
	<link rel="stylesheet" href="eyeaware.css" type="text/css" media="screen" />
	
	<script type="text/javascript" src="../../js/jquery-1.6.2.js"></script>
	<script type="text/javascript" src="../../js/jquery.animate-colors-min.js"></script>
	<script type="text/javascript" src="../../js/titleNav.js"></script>
	<script type="text/javascript" src="eyeaware.core1.js"></script>
</head>
<body  class="labs">
<?php include_once("../../analyticstracking.php"); ?>
<?php include_once("../../navigation.php"); ?>


<div class="container">
	<!-- Headline text -->
	<div class="row">
		<div class="sevencol">
			<h1>Make your laptop <br />Eye Aware!</h1>
		</div>
	</div>
	<!-- Subheadline, Image / hack needed to get proper wrap -->
	<div id="intro_row" class="row">
		<div class="fivecol">
			<h2>Eye tracking used to require expensive and specialized equipment. Now it can be done simply with webcams and open–source software.</h2>
		</div>
		<div  id="intro"  class="sevencol last">
			<img src="images/laptop.jpg" />
		</div>
	</div>
	<!-- Main text -->
	<div class="row">
		<div class="tencol">
			<p>EyeAware is an ongoing project that aims to perform eye tracking from built-in laptop webcams. The project overlooks the current poor quality of webcams, knowing that in a few years this will not be a problem. Instead, this project investigates various methods for performing tracking based on the following criteria:</p>
			<ol>
				<li>No need for user calibration</li>
				<li>No need for special hardware or additional cameras</li>
				<li>Works under normal lighting conditions, with no need for infrared lights **</li>				
				<li>Able to perform tracking from normal laptop view distance</li>
				<li>Able to preform tracking within normal boundaries of user movement (you should be able to move freely)</li>				
			</ol>
			<p>** While infrared lights make tracking easier and more accurate, they are not built into current laptops. Its likely that soon in the future they will be — at this point, eye tracking will be built in too. Apple is already including face tracking into iOS 5, and it's only a matter of time before they step up to eye tracking.</p> 
			
			<p>Current laptop webcams are very poor quality, it will only be a matter of years before this changes. In fact, the HD Facetime cameras on Macbooks and the iPad 2 are already a huge improvement over the webcam used when this software was originally developed.</p>
		</div>
	</div>
	
	<!-- Row -->
	<div class="row">
		<div class="twelvecol last">
			<h2>The current solution</h2> 
			<h3>Locate the head, estimate the eye position, zoom in, track pupil.</h3>
		</div>
		<div class="twelvecol">
			<img src="images/process-map.jpg" title="A map of the process to get to current version" />
		</div>
	</div>
	
	<!-- Row --><!--
	<div class="row">
		<div class="sixcol">
			<h2>Why is this project important?</h2> 
			<h3>Already we are seeing commercial devices that leverage face tracking... eye tracking is not far behind.</h3>
		</div>
	</div>	

	<div class="row">	
		<div class="sixcol">
			<img src="images/inputmethods.jpg" title="Eye tracking is the future of input methods" />
			<p class="caption">This graphic shows the progression of input methods.</p>
		</div>
		<div class="sixcol last">	
			<p>for example the Nintendo 3DS. Face tracking is built into Apple iOS 5. Eye tracking is being built into niche market laptops. It's wont't be long before this eye tracking is available to the masses.</p>
		</div>
		
	</div>	
	
-->
	
	<!-- Row -->
	<div class="row">
		<div class="eightcol last">
			<h2>Why is this project important?</h2> 
			<h3>Already we are seeing commercial devices that leverage face tracking... eye tracking is not far behind.</h3>
		</div>
		<div class="eightcol last">	
			<img src="images/inputmethods.jpg" title="Eye tracking is the future of input methods" />
			<p class="caption">The above graphic shows the progression of input methods.</p>
		</div>
		<div class="eightcol last">
			<p>for example the Nintendo 3DS. Face tracking is built into Apple iOS 5. Eye tracking is being built into niche market laptops. It's wont't be long before this eye tracking is available to the masses.</p>

		</div>
		
	</div>
	
	<!-- Row -->
	<div class="row">
		<div class="tencol">
		
		</div>
	</div>
	
	
</div>


<section id="footer">&#169; 2011 Matt Miller</section>

</body>
</html>
