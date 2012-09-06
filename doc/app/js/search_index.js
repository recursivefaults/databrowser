var search_data = {"index":{"searchIndex":["activeresource","formats","jsonlinkformat","applicationcontroller","applicationhelper","check","checkscontroller","entitiescontroller","entitieshelper","entity","loggingmiddleware","oauthhelper","oauth","page","sessionresource","authorize_url()","build_links()","build_simple_hash()","call()","callback()","collection_path()","custom_method_collection_url()","decode()","display_entity()","element_path()","enabled?()","encode()","extension()","get_basic_types()","get_client()","get_simple_and_complex()","get_table_fields()","get_token()","has_code()","headers()","localize_url()","logout()","mime_type()","new()","new()","next?()","prev?()","set_url()","show()","value_for_simple_view()","value_for_table_view()","readme_for_app"],"longSearchIndex":["activeresource","activeresource::formats","activeresource::formats::jsonlinkformat","applicationcontroller","applicationhelper","check","checkscontroller","entitiescontroller","entitieshelper","entity","loggingmiddleware","oauthhelper","oauthhelper::oauth","page","sessionresource","oauthhelper::oauth#authorize_url()","entitieshelper#build_links()","entity::build_simple_hash()","loggingmiddleware#call()","applicationcontroller#callback()","sessionresource::collection_path()","sessionresource::custom_method_collection_url()","activeresource::formats::jsonlinkformat::decode()","entitieshelper#display_entity()","sessionresource::element_path()","oauthhelper::oauth#enabled?()","activeresource::formats::jsonlinkformat::encode()","activeresource::formats::jsonlinkformat::extension()","entity::get_basic_types()","oauthhelper::oauth#get_client()","entity::get_simple_and_complex()","entitieshelper#get_table_fields()","oauthhelper::oauth#get_token()","oauthhelper::oauth#has_code()","sessionresource::headers()","entitieshelper#localize_url()","checkscontroller#logout()","activeresource::formats::jsonlinkformat::mime_type()","loggingmiddleware::new()","page::new()","page#next?()","page#prev?()","entitiescontroller#set_url()","entitiescontroller#show()","entity::value_for_simple_view()","entitieshelper#value_for_table_view()",""],"info":[["ActiveResource","","ActiveResource.html","","<p>Monkey-Patch to ActiveResource to add custom formats/media-types\n"],["ActiveResource::Formats","","ActiveResource/Formats.html","","<p>Formats are the module in ActiveResource that it knows about internally\n"],["ActiveResource::Formats::JsonLinkFormat","","ActiveResource/Formats/JsonLinkFormat.html","","<p>This is a monkey-patch to add the custom media types to ActiveResource.\n"],["ApplicationController","","ApplicationController.html","","<p>This is the standard base controller class that all others in the\ndatabrowser (and Rails) inherits from. …\n"],["ApplicationHelper","","ApplicationHelper.html","",""],["Check","","Check.html","",""],["ChecksController","","ChecksController.html","","<p>A simple controller to handle the logout functionality for the databrowser.\nIt’s only valid method is …\n"],["EntitiesController","","EntitiesController.html","","<p>This is the main controller of the Databrowser. We try to “Wrap” all api\nrequests in this one …\n"],["EntitiesHelper","","EntitiesHelper.html","","<p>This module contains a lot of the recursive view logic needed to display\nitems correctly in the databrowser …\n"],["Entity","","Entity.html","",""],["LoggingMiddleware","","LoggingMiddleware.html","","<p>Adds thread local variables that we can use for the log messages\n"],["OauthHelper","","OauthHelper.html","","<p>This module is part of using the OAuth2 gem.\n"],["OauthHelper::Oauth","","OauthHelper/Oauth.html","","<p>The OAuth class implements the various methods needed to handle OAuth as\nper the Oauth2 gem.\n"],["Page","","Page.html","",""],["SessionResource","","SessionResource.html","","<p>This class is how we make the rails ActiveResource talk to our Api. Any\nmodels we make that would talk …\n"],["authorize_url","OauthHelper::Oauth","OauthHelper/Oauth.html#method-i-authorize_url","()","<p>This is the internal call used to start the OAuth process and it passes\nalong the client redirect. This …\n"],["build_links","EntitiesHelper","EntitiesHelper.html#method-i-build_links","(hash)","<p>Here we detect links and turn it into an unordered list of links that\nreference the databrowser instead …\n"],["build_simple_hash","Entity","Entity.html#method-c-build_simple_hash","(type, hash)","<p>We use this method to go through the data, detecting it’s type and then\nbuilding the tabular information …\n"],["call","LoggingMiddleware","LoggingMiddleware.html#method-i-call","(env)",""],["callback","ApplicationController","ApplicationController.html#method-i-callback","()","<p>This method is where OAuth will finish. Basically after you send your\ncredentials to the Api it will …\n"],["collection_path","SessionResource","SessionResource.html#method-c-collection_path","(prefix_options = {}, query_options = nil)","<p>Remove format from the url.\n"],["custom_method_collection_url","SessionResource","SessionResource.html#method-c-custom_method_collection_url","(method_name, options = {})","<p>Remove format from the url.\n"],["decode","ActiveResource::Formats::JsonLinkFormat","ActiveResource/Formats/JsonLinkFormat.html#method-c-decode","(json)","<p>Override to handle json\n"],["display_entity","EntitiesHelper","EntitiesHelper.html#method-i-display_entity","(entity)","<p>This method is pretty complex, it’s recursive, so what it does is it digs\nthrough the hashmap of data …\n"],["element_path","SessionResource","SessionResource.html#method-c-element_path","(id, prefix_options = {}, query_options = nil)","<p>Remove format from the url.\n"],["enabled?","OauthHelper::Oauth","OauthHelper/Oauth.html#method-i-enabled-3F","()","<p>We use this to check to see if we have the required client_id and\nshared_secret configured.\n"],["encode","ActiveResource::Formats::JsonLinkFormat","ActiveResource/Formats/JsonLinkFormat.html#method-c-encode","(hash, options = nil)","<p>Override to handle json\n"],["extension","ActiveResource::Formats::JsonLinkFormat","ActiveResource/Formats/JsonLinkFormat.html#method-c-extension","()","<p>Override to handle json\n"],["get_basic_types","Entity","Entity.html#method-c-get_basic_types","(hash)","<p>If we don’t have any preconfigured table rows we take the first 5 keys out\nof our complex entity and …\n"],["get_client","OauthHelper::Oauth","OauthHelper/Oauth.html#method-i-get_client","()","<p>This method actually does the job of initializing the OAuth2 client with\nall of the configured information …\n"],["get_simple_and_complex","Entity","Entity.html#method-c-get_simple_and_complex","(parameters)","<p>This method makes a call to get whatever it is we need from the Api and\nproceeds to split the data up …\n"],["get_table_fields","EntitiesHelper","EntitiesHelper.html#method-i-get_table_fields","(entities)","<p>Here we go through the entities the API has returned and figure out what\ntype it is and then get the …\n"],["get_token","OauthHelper::Oauth","OauthHelper/Oauth.html#method-i-get_token","(code)","<p>The final step in this process is to get the acutal OAuth token which is\nthen stored in the @token variable. …\n"],["has_code","OauthHelper::Oauth","OauthHelper/Oauth.html#method-i-has_code","()","<p>Simply lets us know if we got an authorization code or not to decide if we\nshould proceed to the #get_token …\n"],["headers","SessionResource","SessionResource.html#method-c-headers","()","<p>We add the oauth access token we got from handle_oauth to the header of all\noutbound ActiveResource  …\n"],["localize_url","EntitiesHelper","EntitiesHelper.html#method-i-localize_url","(url)","<p>This method takes an API URL and then does a simple substitution to change\nit to point to the databrowser …\n"],["logout","ChecksController","ChecksController.html#method-i-logout","()","<p>This method will call the system/session/logout endpoint on the Api to\nclear out your session there, …\n"],["mime_type","ActiveResource::Formats::JsonLinkFormat","ActiveResource/Formats/JsonLinkFormat.html#method-c-mime_type","()","<p>The only difference between the standard <code>application/json</code>\nmedia type and this is here\n"],["new","LoggingMiddleware","LoggingMiddleware.html#method-c-new","(app)",""],["new","Page","Page.html#method-c-new","(headers = {})","<p>We take the headers from an API response and pass them to the initializer\nwhich will then in turn look …\n"],["next?","Page","Page.html#method-i-next-3F","()","<p>Tells you if there is a next page or not by doing #.nil?\n"],["prev?","Page","Page.html#method-i-prev-3F","()","<p>Tells you if there is a previous page or not by doing #.nil? This is for\ncompleteness sake, as prev doesn’t …\n"],["set_url","EntitiesController","EntitiesController.html#method-i-set_url","()","<p>What we see mostly here is that we are looking for searh parameters. Now,\nwe also try to simply set up …\n"],["show","EntitiesController","EntitiesController.html#method-i-show","()","<p>Ignoring some of the complicated parts, is we use the configured model from\nset_url to make the Api call …\n"],["value_for_simple_view","Entity","Entity.html#method-c-value_for_simple_view","(type, hash)","<p>This method looks through what we have configured as the path to get the\nvalue out of our configuration …\n"],["value_for_table_view","EntitiesHelper","EntitiesHelper.html#method-i-value_for_table_view","(type, entity)","<p>Because entities are complex json objects this method will look at the\n“path” we have described …\n"],["README_FOR_APP","","doc/README_FOR_APP.html","","<p>Welcome to the SLC Databrowser!\n<p>In a nutshell, this application is used to traverse the SLC Api to see …\n"]]}}