// Copyright (c) 2012 Google Inc.
// From http://storage.googleapis.com/pds-emea/responsive-tests/resize-gpt.js
/**
 * @fileoverview responsive_ad.js - JavaScript for HTML5 Responsive Rich Media
 *               ads
 */
function initialise(e) {

  /*
   * Origin variable to check if the source is trusted and valid.
   * For this template we only accept messages from ads served on
   * doubleclick.net servers
   */
  var creativeDetails = JSON.parse(e.data);
  window.console.log(creativeDetails);

  for (var i = 0; i < studioV2.api.creatives.length; i++) {
    window.console.log(studioV2.api.creatives);
    //if (studioV2.api.creatives[i].getCreativeId() == creativeDetails.creativeId) {
      studioV2.api.creatives[i].getAssetAt(0).setDimension("100%", "100%");
      window.console.log(studioV2.api.creatives[i].getAssetAt(0));
      break;
    //}
  }
  
  if(top==self){
	/* The creative is not in an iframe. */
	} else {
		try {
            document.getElementById('dfp-ad--top-above-nav').className += ' ad-slot__fluid250';
            document.getElementById('dfp-ad--top').className += ' ad-slot__fluid250';
			var arrFrames = parent.document.getElementsByTagName("IFRAME");
			for (var i = 0; i < arrFrames.length; i++) {
				if (arrFrames[i].contentWindow === window) {
							  //resize the iframe
					//arrFrames[i].height = "250";
					//arrFrames[i].style.height = "250px";
					arrFrames[i].width = "100%";
					arrFrames[i].style.width = "100%";
				} 
			}
		} catch(e) { /* The creative cannot escape the iframe. */ }
	}
  
}

/* Establish the 'message' event listener for incoming messages from the iframes
 * and initialise the script.
 */
if (typeof window.addEventListener != 'undefined') {
  window.addEventListener('message', initialise, false);
} else if (typeof window.attachEvent != 'undefined') {
  window.attachEvent('onmessage', initialise);
}// JavaScript Document