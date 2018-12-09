(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"HotDog Shop_atlas_", frames: [[0,0,1200,1350]]},
		{name:"HotDog Shop_atlas_2", frames: [[1306,0,725,416],[1306,418,630,164],[0,0,1304,728],[0,730,980,90],[1245,730,52,121],[1559,584,343,147],[1306,584,251,201],[982,730,261,193],[1938,418,70,125],[1938,545,77,107]]}
];


// symbols:



(lib._251P206135RW57 = function() {
	this.initialize(ss["HotDog Shop_atlas_2"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.A = function() {
	this.initialize(ss["HotDog Shop_atlas_"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.bgtitle = function() {
	this.initialize(ss["HotDog Shop_atlas_2"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_1 = function() {
	this.initialize(ss["HotDog Shop_atlas_2"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.menu = function() {
	this.initialize(ss["HotDog Shop_atlas_2"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.走 = function() {
	this.initialize(ss["HotDog Shop_atlas_2"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.playbutton = function() {
	this.initialize(ss["HotDog Shop_atlas_2"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.playsound = function() {
	this.initialize(ss["HotDog Shop_atlas_2"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.SHOP = function() {
	this.initialize(ss["HotDog Shop_atlas_2"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.站 = function() {
	this.initialize(ss["HotDog Shop_atlas_2"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.跑 = function() {
	this.initialize(ss["HotDog Shop_atlas_2"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.过场_图层_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib._251P206135RW57();
	this.instance.parent = this;
	this.instance.setTransform(-350,-250,0.9655,1.202);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.过场_图层_1, null, null);


(lib.PLAY = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.playbutton();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,343,147);


(lib.HotDogShop_图层_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.SHOP();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.HotDogShop_图层_1, null, null);


(lib.A_图层_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.A();
	this.instance.parent = this;
	this.instance.setTransform(-25.95,-30.35,0.0432,0.045);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.A_图层_1, null, null);


(lib.场景_1_background = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// background
	this.instance = new lib.bgtitle();
	this.instance.parent = this;
	this.instance.setTransform(0,102);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.场景_1_background, null, null);


(lib.选择页面bg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.menu();
	this.instance.parent = this;

	this.instance_1 = new lib.CachedTexturedBitmap_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(32.3,99.65,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,980,463.7);


(lib.过场 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1_obj_
	this.图层_1 = new lib.过场_图层_1();
	this.图层_1.name = "图层_1";
	this.图层_1.parent = this;
	this.图层_1.depth = 0;
	this.图层_1.isAttachedToCamera = 0
	this.图层_1.isAttachedToMask = 0
	this.图层_1.layerDepth = 0
	this.图层_1.layerIndex = 0
	this.图层_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.图层_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.过场, new cjs.Rectangle(-350,-250,700,500), null);


(lib.HotDogShop_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1_obj_
	this.图层_1 = new lib.HotDogShop_图层_1();
	this.图层_1.name = "图层_1";
	this.图层_1.parent = this;
	this.图层_1.setTransform(130.5,96.5,1,1,0,0,0,130.5,96.5);
	this.图层_1.depth = 0;
	this.图层_1.isAttachedToCamera = 0
	this.图层_1.isAttachedToMask = 0
	this.图层_1.layerDepth = 0
	this.图层_1.layerIndex = 0
	this.图层_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.图层_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.HotDogShop_1, new cjs.Rectangle(0,0,261,193), null);


(lib.A_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1_obj_
	this.图层_1 = new lib.A_图层_1();
	this.图层_1.name = "图层_1";
	this.图层_1.parent = this;
	this.图层_1.depth = 0;
	this.图层_1.isAttachedToCamera = 0
	this.图层_1.isAttachedToMask = 0
	this.图层_1.layerDepth = 0
	this.图层_1.layerIndex = 0
	this.图层_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.图层_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.A_1, new cjs.Rectangle(-25.9,-30.3,51.9,60.7), null);


(lib.场景_1_letter_A = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// letter_A
	this.instance = new lib.playsound();
	this.instance.parent = this;
	this.instance.setTransform(173,66,0.4382,0.503);

	this.instance_1 = new lib.A_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(114.55,127.85);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_1},{t:this.instance}]},21).to({state:[{t:this.instance_1},{t:this.instance}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();


(lib.场景_1_animationpart1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animationpart1
	this.instance = new lib.站();
	this.instance.parent = this;
	this.instance.setTransform(40,255);

	this.instance_1 = new lib.走();
	this.instance_1.parent = this;
	this.instance_1.setTransform(70,255);

	this.instance_2 = new lib.HotDogShop_1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(820.45,235.3,1.5326,1.5543,0,0,0,130.6,96.7);

	this.instance_3 = new lib.跑();
	this.instance_3.parent = this;
	this.instance_3.setTransform(84,257);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance,p:{x:40,y:255}}]},1).to({state:[{t:this.instance_1,p:{x:70,y:255}}]},1).to({state:[{t:this.instance,p:{x:101,y:256}}]},1).to({state:[{t:this.instance_1,p:{x:130,y:255}}]},1).to({state:[{t:this.instance,p:{x:160,y:255}},{t:this.instance_2,p:{regY:96.7,scaleY:1.5543,x:820.45,y:235.3,regX:130.6,scaleX:1.5326}}]},1).to({state:[{t:this.instance,p:{x:130,y:255}},{t:this.instance_2,p:{regY:96.5,scaleY:1.5544,x:782.25,y:235,regX:130.6,scaleX:1.5326}}]},1).to({state:[{t:this.instance_2,p:{regY:96.5,scaleY:1.5544,x:688.35,y:235,regX:130.7,scaleX:1.5326}},{t:this.instance,p:{x:109,y:259}}]},1).to({state:[{t:this.instance,p:{x:54,y:255}},{t:this.instance_2,p:{regY:96.5,scaleY:1.5544,x:571.75,y:235,regX:130.6,scaleX:1.5326}}]},1).to({state:[{t:this.instance,p:{x:0,y:255}},{t:this.instance_2,p:{regY:96.5,scaleY:1.5544,x:535.75,y:235,regX:130.6,scaleX:1.5326}}]},1).to({state:[{t:this.instance,p:{x:0,y:255}},{t:this.instance_2,p:{regY:96.5,scaleY:1.5544,x:531,y:235,regX:130.6,scaleX:1.5326}}]},1).to({state:[{t:this.instance_2,p:{regY:96.5,scaleY:1.5544,x:531.85,y:235,regX:130.6,scaleX:1.5325}},{t:this.instance_1,p:{x:52,y:257}}]},1).to({state:[{t:this.instance_2,p:{regY:96.5,scaleY:1.5544,x:529.9,y:235,regX:130.6,scaleX:1.5326}},{t:this.instance_3,p:{x:84,y:257}}]},1).to({state:[{t:this.instance_2,p:{regY:96.5,scaleY:1.5544,x:533.1,y:235,regX:130.6,scaleX:1.5326}},{t:this.instance_1,p:{x:160,y:255}}]},1).to({state:[{t:this.instance_2,p:{regY:96.5,scaleY:1.5544,x:531,y:235,regX:130.5,scaleX:1.5326}},{t:this.instance_3,p:{x:211,y:255}}]},1).to({state:[{t:this.instance_2,p:{regY:96.5,scaleY:1.5544,x:526.35,y:235,regX:130.5,scaleX:1.5326}},{t:this.instance,p:{x:308,y:255}}]},1).to({state:[{t:this.instance_2,p:{regY:96.5,scaleY:1.5544,x:524,y:235,regX:130.5,scaleX:1.5326}},{t:this.instance_3,p:{x:415,y:261}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();


(lib.场景_1_actions = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// actions
	this.button_2 = new lib.PLAY();
	this.button_2.name = "button_2";
	this.button_2.parent = this;
	this.button_2.setTransform(174.2,266);
	new cjs.ButtonHelper(this.button_2, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.button_2).to({_off:true},1).wait(20));

}).prototype = p = new cjs.MovieClip();


(lib.元件_1_图层_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.A_1();
	this.instance.parent = this;
	this.instance.setTransform(-419.55,-83.8);

	this.instance_1 = new lib.选择页面bg("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,0.2,1,1,0,0,0,490,231.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件_1_图层_1, null, null);


(lib.元件1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1_obj_
	this.图层_1 = new lib.元件_1_图层_1();
	this.图层_1.name = "图层_1";
	this.图层_1.parent = this;
	this.图层_1.setTransform(0,0.2,1,1,0,0,0,0,0.2);
	this.图层_1.depth = 0;
	this.图层_1.isAttachedToCamera = 0
	this.图层_1.isAttachedToMask = 0
	this.图层_1.layerDepth = 0
	this.图层_1.layerIndex = 0
	this.图层_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.图层_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件1, new cjs.Rectangle(-490,-231.6,980,463.7), null);


(lib.场景_1_animationpart2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animationpart2
	this.movieClip_3 = new lib.过场();
	this.movieClip_3.name = "movieClip_3";
	this.movieClip_3.parent = this;
	this.movieClip_3.setTransform(353,249);

	this.movieClip_8 = new lib.元件1();
	this.movieClip_8.name = "movieClip_8";
	this.movieClip_8.parent = this;
	this.movieClip_8.setTransform(485,237.9,1,1,0,0,0,0,0.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.movieClip_3}]},17).to({state:[{t:this.movieClip_8}]},3).wait(1));

}).prototype = p = new cjs.MovieClip();


// stage content:
(lib.HotDogShop = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	this.___GetDepth___ = function(obj) {
		var depth = obj.depth;
		var cameraObj = this.___camera___instance;
		if(cameraObj && cameraObj.depth && obj.isAttachedToCamera)
		{
			depth += depth + cameraObj.depth;
		}
		return depth;
		}
	this.___needSorting___ = function() {
		for (var i = 0; i < this.getNumChildren() - 1; i++)
		{
			var prevDepth = this.___GetDepth___(this.getChildAt(i));
			var nextDepth = this.___GetDepth___(this.getChildAt(i + 1));
			if (prevDepth < nextDepth)
				return true;
		}
		return false;
	}
	this.___sortFunction___ = function(obj1, obj2) {
		return (this.exportRoot.___GetDepth___(obj2) - this.exportRoot.___GetDepth___(obj1));
	}
	this.on('tick', function (event){
		var curTimeline = event.currentTarget;
		if (curTimeline.___needSorting___()){
			this.sortChildren(curTimeline.___sortFunction___);
		}
	});

	// timeline functions:
	this.frame_0 = function() {
		this.button_2 = this.actions.button_2;
		this.stop();
		
		
		this.button_2.addEventListener("click", fl_MouseClickHandler_2.bind(this));
		
		function fl_MouseClickHandler_2()
		{
			this.gotoAndPlay(2);
		}
		playSound("backgroundmusic");
	}
	this.frame_1 = function() {
		this.button_2 = undefined;
	}
	this.frame_9 = function() {
		playSound("surprice");
	}
	this.frame_17 = function() {
		this.movieClip_3 = this.animationpart2.movieClip_3;
	}
	this.frame_20 = function() {
		this.movieClip_3 = undefined;this.movieClip_8 = this.animationpart2.movieClip_8;
		this.movieClip_8.addEventListener("click", fl_MouseClickHandler_10.bind(this));
		
		function fl_MouseClickHandler_10()
		{
			// 开始您的自定义代码
			// 此示例代码在"输出"面板中显示"已单击鼠标"。
			alert("已单击鼠标");
			this.gotoAndPlay(22);
			// 结束您的自定义代码
		}
		this.stop();
	}
	this.frame_22 = function() {
		this.___loopingOver___ = true;
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(8).call(this.frame_9).wait(8).call(this.frame_17).wait(3).call(this.frame_20).wait(2).call(this.frame_22).wait(1));

	// actions_obj_
	this.actions = new lib.场景_1_actions();
	this.actions.name = "actions";
	this.actions.parent = this;
	this.actions.setTransform(345.7,339.5,1,1,0,0,0,345.7,339.5);
	this.actions.depth = 0;
	this.actions.isAttachedToCamera = 0
	this.actions.isAttachedToMask = 0
	this.actions.layerDepth = 0
	this.actions.layerIndex = 0
	this.actions.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.actions).wait(20).to({_off:true},1).wait(2));

	// letter_A_obj_
	this.letter_A = new lib.场景_1_letter_A();
	this.letter_A.name = "letter_A";
	this.letter_A.parent = this;
	this.letter_A.depth = 0;
	this.letter_A.isAttachedToCamera = 0
	this.letter_A.isAttachedToMask = 0
	this.letter_A.layerDepth = 0
	this.letter_A.layerIndex = 1
	this.letter_A.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.letter_A).wait(23));

	// animationpart2_obj_
	this.animationpart2 = new lib.场景_1_animationpart2();
	this.animationpart2.name = "animationpart2";
	this.animationpart2.parent = this;
	this.animationpart2.depth = 0;
	this.animationpart2.isAttachedToCamera = 0
	this.animationpart2.isAttachedToMask = 0
	this.animationpart2.layerDepth = 0
	this.animationpart2.layerIndex = 2
	this.animationpart2.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.animationpart2).wait(20).to({_off:true},1).wait(2));

	// animationpart1_obj_
	this.animationpart1 = new lib.场景_1_animationpart1();
	this.animationpart1.name = "animationpart1";
	this.animationpart1.parent = this;
	this.animationpart1.depth = 0;
	this.animationpart1.isAttachedToCamera = 0
	this.animationpart1.isAttachedToMask = 0
	this.animationpart1.layerDepth = 0
	this.animationpart1.layerIndex = 3
	this.animationpart1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.animationpart1).wait(16).to({_off:true},1).wait(6));

	// background_obj_
	this.background = new lib.场景_1_background();
	this.background.name = "background";
	this.background.parent = this;
	this.background.setTransform(315,184,1,1,0,0,0,315,184);
	this.background.depth = 0;
	this.background.isAttachedToCamera = 0
	this.background.isAttachedToMask = 0
	this.background.layerDepth = 0
	this.background.layerIndex = 4
	this.background.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.background).to({_off:true},1).wait(22));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(345,249,675.3,250);
// library properties:
lib.properties = {
	id: '18C280979098D742A10748B19EC853B3',
	width: 700,
	height: 500,
	fps: 3,
	color: "#66FFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/HotDog Shop_atlas_.png?1544329272308", id:"HotDog Shop_atlas_"},
		{src:"images/HotDog Shop_atlas_2.png?1544329272308", id:"HotDog Shop_atlas_2"},
		{src:"sounds/backgroundmusic.mp3?1544329272342", id:"backgroundmusic"},
		{src:"sounds/surprice.mp3?1544329272342", id:"surprice"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['18C280979098D742A10748B19EC853B3'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


// Layer depth API : 

AdobeAn.Layer = new function() {
	this.getLayerZDepth = function(timeline, layerName)
	{
		if(layerName === "Camera")
		layerName = "___camera___instance";
		var script = "if(timeline." + layerName + ") timeline." + layerName + ".depth; else 0;";
		return eval(script);
	}
	this.setLayerZDepth = function(timeline, layerName, zDepth)
	{
		const MAX_zDepth = 10000;
		const MIN_zDepth = -5000;
		if(zDepth > MAX_zDepth)
			zDepth = MAX_zDepth;
		else if(zDepth < MIN_zDepth)
			zDepth = MIN_zDepth;
		if(layerName === "Camera")
		layerName = "___camera___instance";
		var script = "if(timeline." + layerName + ") timeline." + layerName + ".depth = " + zDepth + ";";
		eval(script);
	}
	this.removeLayer = function(timeline, layerName)
	{
		if(layerName === "Camera")
		layerName = "___camera___instance";
		var script = "if(timeline." + layerName + ") timeline.removeChild(timeline." + layerName + ");";
		eval(script);
	}
	this.addNewLayer = function(timeline, layerName, zDepth)
	{
		if(layerName === "Camera")
		layerName = "___camera___instance";
		zDepth = typeof zDepth !== 'undefined' ? zDepth : 0;
		var layer = new createjs.MovieClip();
		layer.name = layerName;
		layer.depth = zDepth;
		layer.layerIndex = 0;
		timeline.addChild(layer);
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;