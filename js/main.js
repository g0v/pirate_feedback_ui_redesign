//{ "change": [""] }
//{ "show": [""] }
//{ "hide": [""] }

var actions = {
"show-main-menu": { "change": [".main-menu-spinner"] },
"show-profile-menu": { "change": [".profile-menu-spinner"] },
"show-hint": { "change": [".help"] },
"search": { "change": [".search-bar"] },
"new-issue": { "show": [".new-issue"] },
"show-issue-filter": { "change": [".issue-filter"] },
"show-pad": { "change": [".discussion-pad"] },
"collapse-all-initiatives": { "hide": [".initiative-members", ".initiative-content", ".suggestion-wrapper", ".argument-pro-wrapper", ".argument-cons-wrapper"] },
"expand-all-initiatives": { "show": [".initiative-members", ".initiative-content", ".suggestion-wrapper", ".argument-pro-wrapper", ".argument-cons-wrapper"] },
"show-initiative-members": { "change": [".initiative-members"] },
"support-initiative": {},
"subscribe-initiative": {},
"collapse-initiative": {},
"expand-initiative": {},
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
	$(target).slideToggle();
};
var show = function(target){
	$(target).slideDown();
};
var hide = function(target){
	$(target).slideUp();
};

for (var actionButton in actions) {
	for (var action in actions[actionButton]) {
		var target = actions[actionButton][action];
		$( "[name='"+actionButton+"']" ).on("click tap", {action: action, target: target} , function(e) {
			for (var i = 0; i < e.data.target.length; i++) {
				window[e.data.action](e.data.target[i]);
			};
		});
	};
};
