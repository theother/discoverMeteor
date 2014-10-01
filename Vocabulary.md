
****************
Folder Structure

+ Lib -- Anyting you put inside the lib folder is gauaranteed to load first before anything else in your
		 app  (with the possible exception for smary packages). This makes it a greate place to put any
		 helper code that need to be available at all times. A bit of a warning: not that since the 'lib'
		 folder is neither inside the /client or /server this, means its contents will be avalible to
		 both environments.





*****************
Router Vocabulary

+ Routes -- Aroute is the basic building block of routing. It is basically the set of instruction
			that tell the app where to go and what to do when it encounters a URL

+ Paths --  A path is a URL within your app. It can be static (/terms_of_service) or dynamic (/post/xyz)
			and even include query parameters (/serch?keyword=meteor)

+ Segments -- The diffrent parths of a path delimited by forward slashed (/)

+ Hooks --  Hooks are actions that you's like to perform before, after, or even during the routing process
			A typical example would be checking if the user has the proper rights before displaying a page

+ Filters -- Filters are simply hooks that you define globally for one or more routes

+ Route Templates -- Each route needs to point to a template. If you do not specify one, the router will
					 look for a template with the same name as the route by default

+ Layouts -- You can think of layouts as one of those digital photo frams. They contian all the HTML
			 code that wraps the current template and will remain the same even if the template changes


+ Controllers -- Sometimes, you will realize that a lot of your template are resuing the same parameters.
				 Rather than duplicate your code, you can let all these routes inherit from a single routing 
				 controller which will contain all the routing logic.


*************
Data Contexts

+ By setting a templates data context you can control the value to this inside the tempalte helpers

+ This is usally done implicitly with the {{#each}} iterator which automatically sets the data
  context of each iteration to the item that is currently being iterated on
  		{{# each widgets}}
  		  {{> widgetItem}}
  		{{/each}}

+ This can also be done explicitly using {{#with}}, which simply say 
  'take this obj, and apply the following templat to it'\
  		{{#with myWidgets}}
  		  {{> widgetPage}}
  		{{/with}}

+ You can also achieve the same results by passing the context as an argument to the template call
  So the previous block of code be rewitten as
  	{{> widgetPage myWidget}}




********
Methods

	A meteor method is a server-side function that is called client-side. Collections, insert, updata, and remove
	function are all methods. The Meteor.call function calls a method named by its first argument. You can provide
	arguments to the call, (in this case the post obj we constructed from the form), and finally attach a callback,
	which will execute when the server-side Method is done.