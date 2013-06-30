var actions = {
"show-main-menu": { "scope": ".nav", "execution": {"change": [".main-menu-spinner"]} },
"show-profile-menu": { "scope": ".nav", "execution": {"change": [".profile-menu-spinner"]} },
"show-hint": { "scope": "body", "execution": {"change": [".help"]} },
"search": { "scope": "body", "execution": {"change": [".search-bar"]} },
"new-issue": { "scope": "body", "execution": {"show": [".new-issue"]} },
"show-issue-filter": { "scope": "body", "execution": {"change": [".issue-filter"]} },
"show-pad": { "scope": "body", "execution": {"change": [".discussion-pad"]} },
"collapse-all-initiatives": { "scope": "body", "execution": {"hide": [".initiative-members", ".initiative-content", ".suggestion-wrapper", ".suggestion-members", ".suggestion-meta", ".suggestion-content", ".argument-pro-wrapper", ".argument-cons-wrapper", ".argument-members", ".argument-meta", ".argument-content"]} },
"expand-all-initiatives": { "scope": "body", "execution": {"show": [".initiative-members", ".initiative-content", ".suggestion-wrapper", ".suggestion-members", ".suggestion-meta", ".suggestion-content", ".argument-pro-wrapper", ".argument-cons-wrapper", ".argument-members", ".argument-meta", ".argument-content"]} },
"show-initiative-members": { "scope": ".initiative-wrapper", "execution": {"change": [".initiative-members"]} },
"support-initiative": {},
"subscribe-initiative": {},
"collapse-initiative": { "scope": ".initiative-wrapper", "execution": {"hide": [".initiative-members", ".initiative-content", ".suggestion-wrapper", ".suggestion-members", ".suggestion-meta", ".suggestion-content", ".argument-pro-wrapper", ".argument-cons-wrapper", ".argument-members", ".argument-meta", ".argument-content"]} },
"expand-initiative": { "scope": ".initiative-wrapper", "execution": {"show": [".initiative-members", ".initiative-content", ".suggestion-wrapper", ".suggestion-members", ".suggestion-meta", ".suggestion-content", ".argument-pro-wrapper", ".argument-cons-wrapper", ".argument-members", ".argument-meta", ".argument-content"]} },
"show-suggestion-members": {},
"new-suggestion": {},
"collapse-suggestion": {},
"expand-suggestion": {},
"show-argument-members": {},
"new-argument": {},
"collapse-argument": {},
"expand-argument": {},
};

var change = function(target){
	target.slideToggle();
};
var show = function(target){
	target.slideDown();
};
var hide = function(target){
	target.slideUp();
};

for (var actionButton in actions) {
	for (var action in actions[actionButton]["execution"]) {
		var target = actions[actionButton]["execution"][action];
		$( "[name='"+actionButton+"']" ).on("click tap", {action: action, target: target} , function(e) {
			for (var i = 0; i < e.data.target.length; i++) {
				window[e.data.action]($(this).parents(actions[actionButton]["scope"]).find(e.data.target[i]));
			};
		});
	};
};
