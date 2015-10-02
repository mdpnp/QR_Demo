(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['disclaimer.tmpl'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return "\n<div id=\"disclaimer\">\n	<h2>Disclaimer</h2>\n	<p>You probably have reached this website through a link (QR code or otherwise) from the MD PnP's <a href=\"./index.html\">QR Codes for Medical Device Point-of-Care Product Information demo</a>.\n	</p>\n\n	<p>This web page has been created for demonstration purporses only and does not substitute nor intents to substitute any manufacturer or vendor official resources pages. Any medical device manufacturer's resources used or linked here are publicly available and used for demonstration purporses only. By using any product or resource form a specific manufacturer or vendor we intent no misrepresentation of the capabilities of any mentioned resource or product. Manufacturers and/or medical devices may have been chosen based on either completely random criteria or availability of public resources for this demo.\n	</p>\n\n	<p>"
    + ((stack1 = ((helper = (helper = helpers.extramessage || (depth0 != null ? depth0.extramessage : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"extramessage","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</p>\n\n</div>";
},"useData":true});
})();