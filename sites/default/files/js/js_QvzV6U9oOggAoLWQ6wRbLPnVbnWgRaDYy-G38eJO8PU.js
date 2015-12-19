/*! responsive-nav.js v1.0.14 by @viljamis, http://responsive-nav.com, MIT license */
var responsiveNav=function(g,h){var t=!!g.getComputedStyle;g.getComputedStyle||(g.getComputedStyle=function(a){this.el=a;this.getPropertyValue=function(d){var c=/(\-([a-z]){1})/g;"float"===d&&(d="styleFloat");c.test(d)&&(d=d.replace(c,function(a,d,c){return c.toUpperCase()}));return a.currentStyle[d]?a.currentStyle[d]:null};return this});var b,f,e,u=h.documentElement,v=h.getElementsByTagName("head")[0],m=h.createElement("style"),r=!1,j=function(a,d,c,b){if("addEventListener"in a)try{a.addEventListener(d,
c,b)}catch(e){if("object"===typeof c&&c.handleEvent)a.addEventListener(d,function(a){c.handleEvent.call(c,a)},b);else throw e;}else"attachEvent"in a&&("object"===typeof c&&c.handleEvent?a.attachEvent("on"+d,function(){c.handleEvent.call(c)}):a.attachEvent("on"+d,c))},k=function(a,d,c,b){if("removeEventListener"in a)try{a.removeEventListener(d,c,b)}catch(e){if("object"===typeof c&&c.handleEvent)a.removeEventListener(d,function(a){c.handleEvent.call(c,a)},b);else throw e;}else"detachEvent"in a&&("object"===
typeof c&&c.handleEvent?a.detachEvent("on"+d,function(){c.handleEvent.call(c)}):a.detachEvent("on"+d,c))},l=function(a,d){for(var b in d)a.setAttribute(b,d[b])},n=function(a,b){a.className+=" "+b;a.className=a.className.replace(/(^\s*)|(\s*$)/g,"")},p=function(a,b){a.className=a.className.replace(RegExp("(\\s|^)"+b+"(\\s|$)")," ").replace(/(^\s*)|(\s*$)/g,"")},s=function(a,d){var c;this.options={animate:!0,transition:400,label:"Menu",insert:"after",customToggle:"",openPos:"relative",jsClass:"js",
init:function(){},open:function(){},close:function(){}};for(c in d)this.options[c]=d[c];n(u,this.options.jsClass);this.wrapperEl=a.replace("#","");if(h.getElementById(this.wrapperEl))this.wrapper=h.getElementById(this.wrapperEl);else throw Error("The nav element you are trying to select doesn't exist");c=this.wrapper;for(var e=this.wrapper.firstChild;null!==e&&1!==e.nodeType;)e=e.nextSibling;c.inner=e;f=this.options;b=this.wrapper;this._init(this)};s.prototype={destroy:function(){this._removeStyles();
p(b,"closed");p(b,"opened");b.removeAttribute("style");b.removeAttribute("aria-hidden");q=b=null;k(g,"load",this,!1);k(g,"resize",this,!1);k(e,"mousedown",this,!1);k(e,"touchstart",this,!1);k(e,"touchend",this,!1);k(e,"keyup",this,!1);k(e,"click",this,!1);f.customToggle?e.removeAttribute("aria-hidden"):e.parentNode.removeChild(e)},toggle:function(){r?(p(b,"opened"),n(b,"closed"),l(b,{"aria-hidden":"true"}),f.animate?setTimeout(function(){b.style.position="absolute"},f.transition+10):b.style.position=
"absolute",r=!1,f.close()):(p(b,"closed"),n(b,"opened"),b.style.position=f.openPos,l(b,{"aria-hidden":"false"}),r=!0,f.open())},handleEvent:function(a){a=a||g.event;switch(a.type){case "mousedown":this._onmousedown(a);break;case "touchstart":this._ontouchstart(a);break;case "touchend":this._ontouchend(a);break;case "keyup":this._onkeyup(a);break;case "click":this._onclick(a);break;case "load":this._transitions(a);this._resize(a);break;case "resize":this._resize(a)}},_init:function(){n(b,"closed");
this._createToggle();j(g,"load",this,!1);j(g,"resize",this,!1);j(e,"mousedown",this,!1);j(e,"touchstart",this,!1);j(e,"touchend",this,!1);j(e,"keyup",this,!1);j(e,"click",this,!1)},_createStyles:function(){m.parentNode||v.appendChild(m)},_removeStyles:function(){m.parentNode&&m.parentNode.removeChild(m)},_createToggle:function(){if(f.customToggle){var a=f.customToggle.replace("#","");if(h.getElementById(a))e=h.getElementById(a);else throw Error("The custom nav toggle you are trying to select doesn't exist");
}else a=h.createElement("a"),a.innerHTML=f.label,l(a,{href:"#",id:"nav-toggle"}),"after"===f.insert?b.parentNode.insertBefore(a,b.nextSibling):b.parentNode.insertBefore(a,b),e=h.getElementById("nav-toggle")},_preventDefault:function(a){a.preventDefault?(a.preventDefault(),a.stopPropagation()):a.returnValue=!1},_onmousedown:function(a){var b=a||g.event;3===b.which||2===b.button||(this._preventDefault(a),this.toggle(a))},_ontouchstart:function(a){e.onmousedown=null;this._preventDefault(a);this.toggle(a)},
_ontouchend:function(){var a=this;b.addEventListener("click",a._preventDefault,!0);setTimeout(function(){b.removeEventListener("click",a._preventDefault,!0)},f.transition)},_onkeyup:function(a){13===(a||g.event).keyCode&&this.toggle(a)},_onclick:function(a){this._preventDefault(a)},_transitions:function(){if(f.animate){var a=b.style,d="max-height "+f.transition+"ms";a.WebkitTransition=d;a.MozTransition=d;a.OTransition=d;a.transition=d}},_calcHeight:function(){var a="#"+this.wrapperEl+".opened{max-height:"+
b.inner.offsetHeight+"px}";t&&(m.innerHTML=a)},_resize:function(){"none"!==g.getComputedStyle(e,null).getPropertyValue("display")?(l(e,{"aria-hidden":"false"}),b.className.match(/(^|\s)closed(\s|$)/)&&(l(b,{"aria-hidden":"true"}),b.style.position="absolute"),this._createStyles(),this._calcHeight()):(l(e,{"aria-hidden":"true"}),l(b,{"aria-hidden":"false"}),b.style.position=f.openPos,this._removeStyles());f.init()}};var q;return function(a,b){q||(q=new s(a,b));return q}}(window,document);
;
/*
	scrollorama - The jQuery plugin for doing cool scrolly stuff
	by John Polacek (@johnpolacek)
	
	Dual licensed under MIT and GPL.
*/


(function($) {
    $.scrollorama = function(options) {
		var scrollorama = this,
			blocks = [],
			browserPrefix = '',
			ieVersion = '',
			onBlockChange = function() {},
			latestKnownScrollY = 0,
            ticking = false,
            requestAnimFrame =	window.requestAnimationFrame ||
								window.webkitRequestAnimationFrame ||
								window.mozRequestAnimationFrame    ||
								window.oRequestAnimationFrame      ||
								window.msRequestAnimationFrame     ||
								function( callback ){
									window.setTimeout(callback, 1000 / 60);
								},
			defaults = {offset:0, enablePin: true};
		
		scrollorama.settings = $.extend({}, defaults, options);
		scrollorama.blockIndex = 0;
		
		if (options.blocks === undefined) { alert('ERROR: Must assign blocks class selector to scrollorama plugin'); }
		
		// PRIVATE FUNCTIONS
		function init() {
			var i, block, didScroll, marginTop = false;
			if (typeof scrollorama.settings.blocks === 'string') { scrollorama.settings.blocks = $(scrollorama.settings.blocks); }
			
			// set browser prefix (using getBrowser based on jQuery’s $.browser)
			var browser = getBrowser();
			if (browser.mozilla) { browserPrefix = '-moz-'; }
			if (browser.webkit) { browserPrefix = '-webkit-'; }
			if (browser.opera) { browserPrefix = '-o-'; }
			if (browser.msie) {
				browserPrefix = '-ms-';
				ieVersion = parseInt(browser.version, 10);
			}
			
			// create blocks array to contain animation props
			$('body').css('position','relative');
			for (i=0; i<scrollorama.settings.blocks.length; i++) {
				block = scrollorama.settings.blocks.eq(i);
				marginTop = block.css('margin-top');
				blocks.push({
					block: block,
					top: block.offset().top - (!Boolean(marginTop) ? parseInt(marginTop, 10) : 0),
					pin: 0,
					animations:[]
				});
			}
			
			// convert block elements to absolute position
			if (scrollorama.settings.enablePin.toString() === 'true') {
				for (i=0; i<blocks.length; i++) {
					blocks[i].block
						.css('position', 'absolute')
						.css('top', blocks[i].top);
				}
			}
			
			// create scroll-wrap div only once
			if ($("#scroll-wrap").length === 0) {
				$('body').prepend('<div id="scroll-wrap"></div>');
			}
			
			latestKnownScrollY = 0;
            ticking = false;
            $(window).on( 'scroll.scrollorama', onScroll );
		}

		function onScroll() {
            latestKnownScrollY = window.scrollY;
            requestTick();
        }
        
        function requestTick() {
            if(!ticking) {
                requestAnimFrame(function(){
                    onScrollorama();
                    update();
                });
            }
            ticking = true;
        }
        
        function update() {
            // reset the tick so we can
            // capture the next onScroll
            ticking = false;
        }
		
		function onScrollorama() {
			var scrollTop = $(window).scrollTop(),
			currBlockIndex = getCurrBlockIndex(scrollTop),
			i, j, anim, startAnimPos, endAnimPos, animPercent, animVal;
			
			// update all animations
			for (i=0; i<blocks.length; i++) {
				
				// go through the animations for each block
				if (blocks[i].animations.length) {
					for (j=0; j<blocks[i].animations.length; j++) {
						anim = blocks[i].animations[j];
						
						// if above current block, settings should be at start value
						if (i > currBlockIndex) {
							if (currBlockIndex !== i-1 && anim.baseline !== 'bottom') {
								setProperty(anim, anim.startVal);
							}
							if (blocks[i].pin) {
								blocks[i].block
								.css('position', 'absolute')
								.css('top', blocks[i].top);
							}
						}
						
						// if below current block, settings should be at end value
						// unless on an element that gets animated when it hits the bottom of the viewport
						else if (i < currBlockIndex) {
							setProperty(anim, anim.endVal);
							if (blocks[i].pin) {
								blocks[i].block
                                    .css('position', 'absolute')
                                    .css('top', (blocks[i].top + blocks[i].pin));
							}
						}
						
						// otherwise, set values per scroll position
						if (i === currBlockIndex || (currBlockIndex === i-1 && anim.baseline === 'bottom')) {
							// if block gets pinned, set position fixed
							if (blocks[i].pin && currBlockIndex === i) {
								blocks[i].block
                                    .css('position', 'fixed')
                                    .css('top', 0);
							}
							
							// set start and end animation positions
							startAnimPos = blocks[i].top + anim.delay;
							if (anim.baseline === 'bottom') { startAnimPos -= $(window).height(); }
							endAnimPos = startAnimPos + anim.duration;
							
							// if scroll is before start of animation, set to start value
							if (scrollTop < startAnimPos) {
								setProperty(anim, anim.startVal);
							}
							
							// if scroll is after end of animation, set to end value
							else if (scrollTop > endAnimPos) {
								setProperty(anim, anim.endVal);
								if (blocks[i].pin) {
									blocks[i].block
                                        .css('position', 'absolute')
                                        .css('top', (blocks[i].top + blocks[i].pin));
								}
							}
							
							// otherwise, set value based on scroll
							else {
								// calculate percent to animate
								animPercent = (scrollTop - startAnimPos) / anim.duration;
								// account for easing if there is any
								if ( anim.easing && $.isFunction( $.easing[anim.easing] ) ) {
									animPercent = $.easing[anim.easing]( animPercent, animPercent*1000, 0, 1, 1000 );
								}
								// then multiply the percent by the value range and calculate the new value
								animVal = anim.startVal + (animPercent * (anim.endVal - anim.startVal));
								setProperty(anim, animVal);
							}
						}
					}
				}
			}
			
			// update blockIndex and trigger event if changed
			if (scrollorama.blockIndex !== currBlockIndex) {
				scrollorama.blockIndex = currBlockIndex;
				onBlockChange();
			}
		}
		
		function getCurrBlockIndex(scrollTop) {
			var currBlockIndex = 0, i;
			for (i=0; i<blocks.length; i++) {
				// check if block is in view
				if (blocks[i].top <= scrollTop - scrollorama.settings.offset) { currBlockIndex = i; }
			}
			return currBlockIndex;
		}
		
		function setProperty(anim, val) {
			var target = anim.element;
			var prop = anim.property;
			var scaleCSS, currentPosition;
			if (prop === 'rotate' || prop === 'zoom' || prop === 'scale') {
				if (prop === 'rotate') {
					target.css(browserPrefix+'transform', 'rotate('+val+'deg)');
				} else if (prop === 'zoom' || prop === 'scale') {
					scaleCSS = 'scale('+val+')';
					if (browserPrefix !== '-ms-') {
						target.css(browserPrefix+'transform', scaleCSS);
					} else {
						if (jQuery().scale) $(target.selector).scale(val);
						target.css('zoom', val);
					}
				}
			}
			else if(prop === 'background-position-x' || prop === 'background-position-y' ) {
				currentPosition = target.css('background-position').split(' ');
				if(prop === 'background-position-x') {
					target.css('background-position',val+'px '+currentPosition[1]);
				}
				if(prop === 'background-position-y') {
					target.css('background-position', currentPosition[0]+' '+val+'px');
				}
			}
			else if(prop === 'text-shadow' ) {
				target.css(prop,'0px 0px '+val+'px #ffffff');
			} else {
				if (anim.suffix) {
					target.css(prop, val + anim.suffix);
				} else {
					target.css(prop, val);
				}
			}
		}
		
		
		// PUBLIC FUNCTIONS
		scrollorama.animate = function(target) {
			var targetIndex,
				targetBlock,
				anim,
				offset,
				suffix,
				i, j;
			/*
				target		= animation target
				arguments	= array of animation parameters
				anim		= object that contains all animation params (created from arguments)
				offset		= positioning helper for pinning
				
				animation parameters:
				delay		= amount of scrolling (in pixels) before animation starts
				duration	= amount of scrolling (in pixels) over which the animation occurs
				property	= css property being animated
				start		= start value of the property
				end			= end value of the property
				pin			= pin block during animation duration (applies to all animations within block)
				baseline	= top (default, when block reaches top of viewport) or bottom (when block first comies into view)
				easing		= just like jquery's easing functions
			*/
			
			// if string, convert to DOM object
			if (typeof target === 'string') { target = $(target); }
			
			// find block of target
			for (i=0; i<blocks.length; i++) {
				if (blocks[i].block.has(target).length) {
					targetBlock = blocks[i];
					targetIndex = i;
				}
			}
			
			// add each animation to the blocks animations array from function arguments
			for (i=1; i<arguments.length; i++) {
				
				anim = arguments[i];
				
				// for top/left/right/bottom, set relative positioning if static
				if (anim.property === 'top' || anim.property === 'left' || anim.property === 'bottom' || anim.property === 'right' ) {
					if (target.css('position') === 'static') { target.css('position','relative'); }
					// set anim.start, anim.end defaults
					cssValue = parseInt(target.css(anim.property),10);
					if (anim.start === undefined) {
						anim.start = isNaN(cssValue) ? 0 : cssValue;
					} else if (anim.end === undefined) {
						anim.end = isNaN(cssValue) ? 0 : cssValue;
					}
				}
				
				// set anim.start/anim.end defaults for rotate, zoom/scale, letter-spacing
				if (anim.property === 'rotate') {
					if (anim.start === undefined) { anim.start = 0; }
					if (anim.end === undefined) { anim.end = 0; }
				} else if (anim.property === 'zoom' || anim.property === 'scale' ) {
					if (anim.start === undefined) { anim.start = 1; }
					if (anim.end === undefined) { anim.end = 1; }
				} else if (anim.property === 'letter-spacing' && target.css(anim.property)) {
					if (anim.start === undefined) { anim.start = 1; }
					if (anim.end === undefined) { anim.end = 1; }
				}
				
				// convert background-position property for use on IE8 and lower
				if (ieVersion && ieVersion < 9 && (anim.property == 'background-position-x' || anim.property == 'background-position-y')) {
					if (anim.property === 'background-position-x') {
						anim.property = 'backgroundPositionX';
					}
					else {
						anim.property = 'backgroundPositionY';
					}
				}
				
				if (anim.baseline === undefined) {
					if (anim.pin || targetBlock.pin || targetIndex === 0) {
						anim.baseline = 'top';
					} else {
						anim.baseline = 'bottom';
					}
				}
				
				if (anim.delay === undefined) { anim.delay = 0; }
				
				startVal = anim.start !== undefined ? typeof(anim.start) == 'function' ? anim.start() : anim.start : parseInt(target.css(anim.property),10); // if undefined, use current css value
				endVal = anim.end !== undefined ? typeof(anim.end) == 'function' ? anim.end() : anim.end : parseInt(target.css(anim.property),10); // if undefined, use current css value
				suffix = startVal.toString().match(/\D+$/) || endVal.toString().match(/\D+$/);
				if (suffix) {
					suffix = suffix[0];
					startVal = parseInt(startVal,10);  // remove the unit so calculations work correctly
					endVal = parseInt(endVal,10);
				}
				
				targetBlock.animations.push({
					element: target,
					delay: anim.delay,
					duration: anim.duration,
					property: anim.property,
					startVal: startVal,
					endVal: endVal,
					suffix: suffix,
					baseline: anim.baseline !== undefined ? anim.baseline : 'bottom',
					easing: anim.easing
				});
				
				if (anim.pin) {
					if (targetBlock.pin < anim.duration + anim.delay) {
						offset = anim.duration + anim.delay - targetBlock.pin;
						targetBlock.pin += offset;
						
						// adjust positions of blocks below target block
						for (j=targetIndex+1; j<blocks.length; j++) {
							blocks[j].top += offset;
							blocks[j].block.css('top', blocks[j].top);
						}
					}
				}
			}
			
			onScrollorama();

			return scrollorama;
		};
		
		// function for passing blockChange event callback
		scrollorama.onBlockChange = function(f) {
			onBlockChange = f;
		};
		
		// function for getting an array of scrollpoints
		// (top of each animation block and animation element scroll start point)
		scrollorama.getScrollpoints = function() {
			var scrollpoints = [],i,j,anim;
			for (i=0; i<blocks.length; i++) {
				scrollpoints.push(blocks[i].top);
				// go through the animations for each block
				if (blocks[i].animations.length && blocks[i].pin > 0) {
					for (j=0; j<blocks[i].animations.length; j++) {
						anim = blocks[i].animations[j];
						scrollpoints.push(blocks[i].top + anim.delay + anim.duration);
					}
				}
			}
			// make sure scrollpoints are in numeric order
			scrollpoints.sort(function(a,b) {return a - b;});
			return scrollpoints;
		};
		
		// Remove scrollorama
		scrollorama.destroy = function () {
			// Remove animations
			for (i=0; i<blocks.length; i++) {
				// Remove CSS rules
				blocks[i].block.css({
					top: '',
					position: ''
				});
				
				// Remove scrolloroma-specific attributes
				delete blocks[i].animations;
				delete blocks[i].top;
				delete blocks[i].pin;
			}

			// Unbind the window scroll event
			$(window).off('scroll.scrollorama');
			$('#scroll-wrap').remove();
			
			// Remove the scrolloroma object
			delete scrollorama;
		};
		
		init();
		
		return scrollorama;
    };

	// Easing functions from jQuery UI
	$.extend($.easing, {
		def: 'easeOutQuad',
		swing: function (x, t, b, c, d) {
			//alert($.easing.default);
			return $.easing[$.easing.def](x, t, b, c, d);
		},
		easeInQuad: function (x, t, b, c, d) {
			return c*(t/=d)*t + b;
		},
		easeOutQuad: function (x, t, b, c, d) {
			return -c *(t/=d)*(t-2) + b;
		},
		easeInOutQuad: function (x, t, b, c, d) {
			if ((t/=d/2) < 1) { return c/2*t*t + b; }
			return -c/2 * ((--t)*(t-2) - 1) + b;
		},
		easeInCubic: function (x, t, b, c, d) {
			return c*(t/=d)*t*t + b;
		},
		easeOutCubic: function (x, t, b, c, d) {
			return c*((t=t/d-1)*t*t + 1) + b;
		},
		easeInOutCubic: function (x, t, b, c, d) {
			if ((t/=d/2) < 1) { return c/2*t*t*t + b; }
			return c/2*((t-=2)*t*t + 2) + b;
		},
		easeInQuart: function (x, t, b, c, d) {
			return c*(t/=d)*t*t*t + b;
		},
		easeOutQuart: function (x, t, b, c, d) {
			return -c * ((t=t/d-1)*t*t*t - 1) + b;
		},
		easeInOutQuart: function (x, t, b, c, d) {
			if ((t/=d/2) < 1) { return c/2*t*t*t*t + b; }
			return -c/2 * ((t-=2)*t*t*t - 2) + b;
		},
		easeInQuint: function (x, t, b, c, d) {
			return c*(t/=d)*t*t*t*t + b;
		},
		easeOutQuint: function (x, t, b, c, d) {
			return c*((t=t/d-1)*t*t*t*t + 1) + b;
		},
		easeInOutQuint: function (x, t, b, c, d) {
			if ((t/=d/2) < 1) { return c/2*t*t*t*t*t + b; }
			return c/2*((t-=2)*t*t*t*t + 2) + b;
		},
		easeInSine: function (x, t, b, c, d) {
			return -c * Math.cos(t/d * (Math.PI/2)) + c + b;
		},
		easeOutSine: function (x, t, b, c, d) {
			return c * Math.sin(t/d * (Math.PI/2)) + b;
		},
		easeInOutSine: function (x, t, b, c, d) {
			return -c/2 * (Math.cos(Math.PI*t/d) - 1) + b;
		},
		easeInExpo: function (x, t, b, c, d) {
			return (t===0) ? b : c * Math.pow(2, 10 * (t/d - 1)) + b;
		},
		easeOutExpo: function (x, t, b, c, d) {
			return (t===d) ? b+c : c * (-Math.pow(2, -10 * t/d) + 1) + b;
		},
		easeInOutExpo: function (x, t, b, c, d) {
			if (t===0) { return b; }
			if (t===d) { return b+c; }
			if ((t/=d/2) < 1) { return c/2 * Math.pow(2, 10 * (t - 1)) + b; }
			return c/2 * (-Math.pow(2, -10 * --t) + 2) + b;
		},
		easeInCirc: function (x, t, b, c, d) {
			return -c * (Math.sqrt(1 - (t/=d)*t) - 1) + b;
		},
		easeOutCirc: function (x, t, b, c, d) {
			return c * Math.sqrt(1 - (t=t/d-1)*t) + b;
		},
		easeInOutCirc: function (x, t, b, c, d) {
			if ((t/=d/2) < 1) { return -c/2 * (Math.sqrt(1 - t*t) - 1) + b; }
			return c/2 * (Math.sqrt(1 - (t-=2)*t) + 1) + b;
		},
		easeInElastic: function (x, t, b, c, d) {
			var s=1.70158,p=0,a=c;
			if (t===0) { return b; }
			if ((t/=d)===1) { return b+c; }
			if (!p) { p=d*0.3; }
			if (a < Math.abs(c)) { a=c; s=p/4; }
			else{ s = p/(2*Math.PI) * Math.asin (c/a); }
			return -(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
		},
		easeOutElastic: function (x, t, b, c, d) {
			var s=1.70158,p=0,a=c;
			if (t===0) { return b; }
			if ((t/=d)===1) { return b+c; }
			if (!p) { p=d*0.3; }
			if (a < Math.abs(c)) { a=c; s=p/4; }
			else { s = p/(2*Math.PI) * Math.asin (c/a); }
			return a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b;
		},
		easeInOutElastic: function (x, t, b, c, d) {
			var s=1.70158,p=0,a=c;
			if (t===0) { return b; }
			if ((t/=d/2)===2) { return b+c; }
			if (!p) { p=d*(0.3*1.5); }
			if (a < Math.abs(c)) { a=c; s=p/4; }
			else { s = p/(2*Math.PI) * Math.asin (c/a); }
			if (t < 1) { return -0.5*(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b; }
			return a*Math.pow(2,-10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )*0.5 + c + b;
		},
		easeInBack: function (x, t, b, c, d, s) {
			if (s === undefined) { s = 1.70158; }
			return c*(t/=d)*t*((s+1)*t - s) + b;
		},
		easeOutBack: function (x, t, b, c, d, s) {
			if (s === undefined) { s = 1.70158; }
			return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
		},
		easeInOutBack: function (x, t, b, c, d, s) {
			if (s === undefined) { s = 1.70158; }
			if ((t/=d/2) < 1) { return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b; }
			return c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b;
		},
		easeInBounce: function (x, t, b, c, d) {
			return c - $.easing.easeOutBounce (x, d-t, 0, c, d) + b;
		},
		easeOutBounce: function (x, t, b, c, d) {
			if ((t/=d) < (1/2.75)) {
				return c*(7.5625*t*t) + b;
			} else if (t < (2/2.75)) {
				return c*(7.5625*(t-=(1.5/2.75))*t + 0.75) + b;
			} else if (t < (2.5/2.75)) {
				return c*(7.5625*(t-=(2.25/2.75))*t + 0.9375) + b;
			} else {
				return c*(7.5625*(t-=(2.625/2.75))*t + 0.984375) + b;
			}
		},
		easeInOutBounce: function (x, t, b, c, d) {
			if (t < d/2) { return $.easing.easeInBounce (x, t*2, 0, c, d) * 0.5 + b; }
			return $.easing.easeOutBounce (x, t*2-d, 0, c, d) * 0.5 + c*0.5 + b;
		}
	});
     
})(jQuery);

/*!
 * Modified from: jQuery Migrate - v1.1.0 - 2013-01-31
 * https://github.com/jquery/jquery-migrate
 * Copyright 2005, 2013 jQuery Foundation, Inc. and other contributors; Licensed MIT
 */
function getBrowser() {
	var matched = uaMatch( navigator.userAgent );
	var browser = {};
	if ( matched.browser ) {
		browser[ matched.browser ] = true;
		browser.version = matched.version;
	}
	// Chrome is Webkit, but Webkit is also Safari.
	if ( browser.chrome ) {
		browser.webkit = true;
	} else if ( browser.webkit ) {
		browser.safari = true;
	}
	return browser;
}

function uaMatch(ua) {
	ua = ua.toLowerCase();

	var match = /(chrome)[ \/]([\w.]+)/.exec( ua ) ||
		/(webkit)[ \/]([\w.]+)/.exec( ua ) ||
		/(opera)(?:.*version|)[ \/]([\w.]+)/.exec( ua ) ||
		/(msie) ([\w.]+)/.exec( ua ) ||
		ua.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec( ua ) ||
		[];

	return {
		browser: match[ 1 ] || "",
		version: match[ 2 ] || "0"
	};
};
(function ($) {
  Drupal.behaviors.drupalaton_theme = {
    attach: function (context) {   
      
      var nav = responsiveNav("#nav");

      var width = $(window).width();
      
      // navigation position settings
      function addclasstonav() {
        $window = $(window);
        var $nav_height = $('.navigation').height();
        if($window.scrollTop() > $nav_height) {
          $('.navigation').addClass('fixed');
          $nav_height += 20;
          $('section').css('padding-top', $nav_height + 'px');
        }
        $window.scroll(function () {
          // lock the menu itself
          $nav_height = $('.navigation').height();
          if ($window.scrollTop() > $nav_height) {
            $('.navigation').addClass('fixed');
            $nav_height += 20;
            $('section').css('padding-top', $nav_height + 'px');
          }
          else {
            $('.navigation').removeClass('fixed');
          }
        });
      }
      
      // Parallax elements move settings
      var scrollorama = $.scrollorama({ 
        blocks: '.scrollorama'
      });
      
      // function in normal width monitor, wider than 980 px
      if (width >= 980) {
        addclasstonav();
        
        scrollorama
        .animate('#bigboat', { delay: 0, duration: 1200, property: 'left', start: 100, end: 900  })
        .animate('#smallboat', { delay: 0, duration: 1200, property: 'left', start: 200, end: 850  })
        .animate('.cloud1', { delay: 0, duration: 1200, property: 'left', start: 0, end: 650  })
        .animate('.cloud2', { delay: 0, duration: 1200, property: 'left', start: 60, end: 650  })
        .animate('.cloud3', { delay: 0, duration: 1200, property: 'left', start: 740, end: 650  })
        .animate('.cloud4', { delay: 0, duration: 1200, property: 'left', start: 1050, end: 650  })
        .animate('.cloud5', { delay: 0, duration: 1200, property: 'left', start: 350, end: 650  })
        
        .animate('.cloud6', { delay: 0, duration: 1200, property: 'left', start: 750, end: 650  })
        .animate('.cloud7', { delay: 0, duration: 1200, property: 'left', start: 940, end: 650  })
        .animate('.cloud8', { delay: 0, duration: 1200, property: 'left', start: 900, end: 650  })
        .animate('.cloud9', { delay: 0, duration: 1200, property: 'left', start: 820, end: 650  })
        .animate('.cloud10',{ delay: 0, duration: 1200, property: 'left', start: 1000, end: 650  });
      }
      else if (width < 979 && width >= 600) {
        addclasstonav();
        
        scrollorama
        .animate('#bigboat', { delay: 0, duration: 800, property: 'left', start: -10, end: 600  })
        .animate('#smallboat', { delay: 0, duration: 700, property: 'left', start: -10, end: 600  });
    
      }
      else if (width < 600) {
        // no move
      }
    }
  };
})(jQuery);;
