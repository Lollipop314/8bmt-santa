// The script
let g_text = [
	"", 
	"That day, I felt as though the rain would never end. \u25bc", 
	"It was admittedly a light rain, akin to a drizzle, but it showed no signs of stopping. \u25bc", 
	"A gust of wind swept across the valley, and I clung to my raincoat for warmth. \u25bc", 
	"", 
	"Slowly, I roamed through the old ruins, watching my step for the occasional puddle. \u25bc",
	"On all sides were ancient rock formations, their rugged faces weathered by the elements. \u25bc",
	"Approaching one such monolith, I lifted my hand up towards the rocks. \u25bc",
	"With a light touch, I began to feel the stones, some partially covered with moss. \u25bc",
	"They were smooth in some places, yet rough in others. \u25bc",
	"An uneven texture, no doubt. \u25bc",
	"I wonder if ... this is really how it was like, back in ancient times. \u25bc",
	"",
	"With the passing of that thought came another, stronger burst of wind. \u25bc",
	"The weather was now much cooler than I had expected, and a chill ran down my spine. \u25bc",
	"???  —  \"Hey, are you alright over there? You seem pretty cold.\"  \u25bc",
	"It would be an understatement to say that I was quite taken aback by that voice. \u25bc",
	"I hadn't even considered the possibility that someone else would be here, at this place, in this weather. \u25bc",
	"Astonished, I turned in the direction of the mysterious voice. \u25bc",
	"",
	"No more than a few dozen paces away was a girl, around my age, observing me with a concerned gaze. \u25bc",
	"She was dressed better for the occasion than I was, and held up a large umbrella in her right hand. \u25bc",
	"And whereas I had unwisely left my things in my car, she had a small backpack with her. \u25bc",
	"Definitely the smarter move, on her part. \u25bc",
	"The wind blew her long, black locks every which way. \u25bc",
	"",
	"I wondered how I had missed her presence. Surely, I should have heard footsteps? \u25bc",
	"Or then again, I reflected, maybe not. \u25bc",
	"For a while we stared at each other, studying the other's expression. \u25bc",
	"Then, and without exchanging any further words, she began walking over to where I was standing. \u25bc",
	"",
	"She squatted down next to me, pulling her backpack off her shoulders. \u25bc",
	"???  —  \"Here, hold this while I look through my stuff.\"  \u25bc",
	"The girl held her umbrella out to me, which I took hold of without protest. \u25bc",
	"As she was rifling through her possessions, we made some small talk. \u25bc",
	"???  —  \"You're here for sight-seeing too, aren't you? To check out these ruins?\"  \u25bc",
	"Me  —  \"Well, yeah ... I mean, why else would anyone be here, getting drenched in the rain?\"  \u25bc",
	"???  —  \"I don't know, maybe you're a geologist, and it's your job to examine rock erosion or something.\"  \u25bc",
	"Me  —  \"That's definitely an interesting theory, but no.\"  \u25bc",
	"",
	"After a good bit of scouring, she brought out a scarf featuring floral patterns. \u25bc",
	"???  —  \"Here, I'll lend you this. You'll probably still be cold, but it's better than nothing, right?\"  \u25bc",
	"I accepted her scarf with gratitude, wrapping it around inside my rain jacket. \u25bc",
	"She continued to rummage through her things, now looking for something else. \u25bc",
	"???  —  \"My name's Lyra, by the way. Like the instrument, but with an \'a\'.\"  \u25bc",
	"",
	"So there I stood, angling the umbrella to shield us fom the rain, watching her search her backpack. \u25bc",
	"Lyra  —  \"...Ah, there it is!\"  \u25bc",
	"The item in question was a liquid thermos, the kind you'd see at a supermarket. \u25bc",
	"It was from one of those generic brands; in fact, I probably had that same thermos back at my place. \u25bc",
	"In one fluid motion, Lyra slung the backpack over her left shoulder, getting back on her feet. \u25bc",
	"I could make out a determined look in her eyes. \u25bc",
	"Lyra  —  \"Now, what say we go do some sight-seeing?\"  \u25bc",
	"Me  —  \"That's not a bad idea...\"  \u25bc",
	"",
	"As the two of us walked about, checking out the various structures, we again made small talk. \u25bc",
	"Some people are good at talking to strangers. I wouldn't really consider myself such a person, though. \u25bc",
	"Lyra  —  \"Have you heard of the backstory behind this place?\"  \u25bc",
	"Me  —  \"No, I can't say I really have. Is there anything particularly interesting?\"  \u25bc",
	"Lyra coughed to clear her throat, about to tell some sort of story. \u25bc",
	"You know, I really hope this doesn't drag on for too long... \u25bc",
	"Lyra  —  \"They say that a long time ago, there was a prosperous settlement here.\"  \u25bc",
	"Lyra  —  \"Food was plentiful, the weather was nice, and the people were happy.\"  \u25bc",
	"Lyra  —  \"However, their good fortunes suddenly came to ruin on one fateful day.\"  \u25bc",
	"Me  —  \"What happened?\"  \u25bc",
	"",
	"Lyra  —  \"From the nearby ocean rose a gigantic squid! An impossibly large behemoth!\"  \u25bc",
	"Lyra  —  \"Now, what occurred following its appearance is frequently disputed by historians.\"  \u25bc",
	"Me  —  \"I'm just impressed they could agree on the initial premise.\"  \u25bc",
	"Lyra  —  \"It's believed that, for no discernable reason, the monster laid waste to the community.\"  \u25bc",
	"Lyra  —  \"I think the moral of the story is that bad things are inevitable.\"  \u25bc",
	"Me  —  \"That's ... not a very uplifting moral.\"  \u25bc",
	"Lyra  —  \"It isn't, but it's more realistic like that, don't you think?\"  \u25bc",
	"",
	"We continued in this fashion for some time. \u25bc",
	"There were some periods where the rain lightened up, and many others where the opposite occured. \u25bc",
	"At some point, I discovered that the liquid inside her thermos was barley tea. \u25bc",
	"It was a trivial detail, but she was really particular about it. \u25bc",
	"Lyra  —  \"This is a special brand of tea, imported from Korea! It helps aid indigestion. I think.\"  \u25bc",
	"Me  —  \"A lot of things are imported from Korea these days; I don't see how that's special.\"  \u25bc",
	"She rolled her eyes in a playful way, like she was getting tired of my retorts. \u25bc",
	"",
	"Lyra  —  \"So, what are you going to do after you're done here?\"  \u25bc",
	"It had admittedly been a while. We had seen about everything there was to see. \u25bc",
	"Me  —  \"Well, I was going to drive over to the next town and find something to eat.\"  \u25bc",
	"Lyra  —  \"You wouldn't mind me tagging along, would you?\"  \u25bc",
	"Me  —  \"No, not paticularly.\"  \u25bc",
	"Lyra  —  \"Then it's settled! You're in luck; I just happen to know where to find good eats.\"  \u25bc",
	"",
	"Some interactions really do happen out of the blue, don't they? \u25bc",
	"Just like a giant squid rising out of the sea to ravage human civilizations. \u25bc",
	"...No, wait, that's completely ridiculous. \u25bc",
	"",
	""
];


// Creating a 'high-resolution' canvas
function createHiPPICanvas(w, h){
	let ratio = 2 * window.devicePixelRatio;
    let cv = document.createElement("canvas");
    cv.width = w * ratio;
    cv.height = h * ratio;
    cv.style.width = w + "px";
    cv.style.height = h + "px";
    cv.getContext("2d").scale(ratio, ratio);
    return cv;
}


// How many times the player has clicked; used to track progress through the game 
var advance = 0;

// Global variables for text control
var fade_x = 0;
var text_index = 0;
var italics = false;

// Square rotation variables
var rot = 0;
var alph = 0;

// Creating the actual canvas
var customCanvas = createHiPPICanvas(640, 480);
var ctx = customCanvas.getContext("2d");

// Add it to the HTML
document.getElementById("main").appendChild(customCanvas);

// Fades in the rain
function fadeRain(audio){
	audio.volume = 0.01;

	var func = setInterval(function(){
		if(audio.volume <= 0.98){
			audio.volume += 0.01;
		}
		else {
			audio.volume = 1;
			clearInterval(func);
		}
	}, 100);
}

// Loops music at random time intervals
function loopMusic(audio){
	audio.play();

	var time = Math.floor(Math.random() * (250 - 180) + 180);
	console.log(time);
	var count = 0;

	setInterval(function(){
		if(count >= time){
			audio.play();
			count = 0;
			time = Math.floor(Math.random() * (250 - 180) + 180);

			console.log("Music reset");
			console.log(time);
		}
		count += 1;
	}, 1000);
}

// Setting up the custom font
var newFont = new FontFace('Source-Serif-Pro', 'url(assets/fonts/SourceSerifPro-Regular.ttf)')

newFont.load().then(function(font){

	document.fonts.add(font);
	console.log('Custom font loaded');

	// Handy variables
	let rt = 2 * window.devicePixelRatio;
	let wx = customCanvas.width;
	let wy = customCanvas.height;
	let cx = wx/2;
	let cy = wy/2;

	//Initial set-up
	ctx.setTransform(1, 0, 0, 1, 0, 0);

	ctx.fillStyle = "#000000";
	ctx.fillRect(0, 0, wx, wy);

	// Render the clouds
    renderImage("./assets/images/clouds.png");

	// The display function
	function display(){
		// Do absolutely fucking nothing until renderImage is done
		if(ctx.globalAlpha == 1){
			// Clear the text region
			ctx.clearRect(0, 276 * rt, wx, wy);

			// Fill the text region black
			ctx.fillStyle = "#000000";
			ctx.fillRect(0, 276 * rt, wx, wy);

			renderText(g_text[text_index]);

			// Draws the little rotating square
			ctx.save();
			ctx.translate(615 * rt, 455 * rt);
			ctx.rotate(rot);
			ctx.fillStyle = "rgba(245, 245, 245,  " + alph + ")";
			ctx.fillRect(-6 * rt, -6 * rt, 12 * rt, 12 * rt);
			ctx.setTransform(1, 0, 0, 1, 0, 0);
			ctx.restore();
			rot += 0.007;
		}
	}

	// Renders text, with fade in
	function renderText(text){
		if(italics){
			var font_size = "italic " + Math.floor(12.9 * rt).toString();
		}
		else {
			var font_size = Math.floor(12.9 * rt).toString();
		}

		ctx.font = font_size.concat('px ', "Source-Serif-Pro");
		ctx.fillStyle = "white";
		ctx.textAlign = "center";
		ctx.fillText(text, cx, cy + 55 * rt);

		if(fade_x < wx){
			ctx.fillStyle = "#000000";
			ctx.fillRect(fade_x, 276 * rt, wx, 100 * rt);

			fade_x += 1.4 * rt;
		}
	}

	// Renders an image, with fade in
	function renderImage(image){
		setTimeout(function(){ // Atrocious code holy shit
			ctx.clearRect(0, 276 * rt, wx, wy);

			ctx.fillStyle = "#000000";
			ctx.fillRect(0, 276 * rt, wx, wy);

			ctx.globalAlpha = 0.00;

			var func = setInterval(function(){
				if(ctx.globalAlpha <= 0.12){
					ctx.globalAlpha += 0.0015;

					let img = new Image();
					img.src = image;
					img.onload = function(){
						ctx.drawImage(img, 0, 115 * rt, wx, 160 * rt);
					};
				}
				else {
					// Advance to next text
					advance_canvas();
					ctx.globalAlpha = 1;

					clearInterval(func);
					squareIn();
					return;
				}
			}, 60);
		}, 700);
		squareOut();
	}

	// Fades the square in
	function squareIn(){
		alph = 0;

		var func = setInterval(function(){
			if(alph <= 0.98){
				alph += 0.01;
			}
			else {
				alph = 1;
				clearInterval(func);
			}
		}, 20);
	}

	function squareOut(){
		var func = setInterval(function(){
			if(alph >= 0.015){
				alph -= 0.006;
			}
			else {
				alph = 0;
				clearInterval(func);
			}
		}, 5);
	}

	// This function is called every time the player clicks
	function advance_canvas(){
		fade_x = 0;
		text_index += 1; // Progress the text

		switch(advance){
			case 1:
				// Play rain
				var audio_rain = document.getElementById("audio_rain");
				audio_rain.loop = true;
				audio_rain.play();

				fadeRain(audio_rain);
				break;
			case 2:
				// Play music
				var audio_music = document.getElementById("audio_music");
				loopMusic(audio_music);
				break;
			case 3:
				renderImage("./assets/images/valley.png");
				break;
			case 10:
				italics = true;
				break;
			case 11:
				italics = false;
				renderImage("./assets/images/clouds2.png");
				break;
			case 18:
				renderImage("./assets/images/valley.png");
				break;
			case 24:
				renderImage("./assets/images/clouds2.png");
				break;
			case 29:
				renderImage("./assets/images/river.png");
				break;
			case 38:
				renderImage("./assets/images/clouds.png");
				break;
			case 44:
				renderImage("./assets/images/clouds2.png");
				break;
			case 53:
				renderImage("./assets/images/ruins.png");
				break;
			case 59:
				italics = true;
				break;
			case 60:
				italics = false;
				break;
			case 64:
				renderImage("./assets/images/river.png");
				break;
			case 72:
				renderImage("./assets/images/clouds2.png");
				break;
			case 80:
				renderImage("./assets/images/ruins.png");
				break; 
			case 87:
				renderImage("./assets/images/clouds.png");
				break;
			case 91:
				renderImage("./assets/images/end.png");
				// Le epic coding
				const para = document.createElement("p");
				const node = document.createTextNode("The game is over.");
				para.appendChild(node);
				const element = document.getElementById("info");
				element.appendChild(para);
				break;
		}

		advance += 1;
	}

	// Update loop
	function update(timer){
		globalTime = timer;
		display();
		requestAnimationFrame(update);
	}

	// Add click listener and start canvas
	customCanvas.addEventListener("click", advance_canvas, false);
	requestAnimationFrame(update);
});
