
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