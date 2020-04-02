export const topToolbar = {
	view: "toolbar",
	css: "top-toolbar",
	type: "clean",
	height: 60,
	padding: 8,
	cols: [
		{
			view: "button",
			width: 90,
			label: "<span class='badge'> 1 </span> <span class='webix_strong'>12:30</span>",
			css: "badge-button"
		},
		{
			view: "button",
			width: 44,
			type: "icon",
			icon: "mdi mdi-plus",
			css: "webix_primary icon-center"
		},
		{
			view: "button",
			width: 44,
			type: "icon",
			icon: "mdi mdi-minus",
			css: "webix_primary icon-center"
		},
		{},
		{
			view: "button",
			width: 44,
			type: "icon",
			icon: "mdi mdi-wifi",
			css: "webix_transparent icon-center"
		},
		{
			view: "button",
			autowidth: true,
			value: "Close"
		}
	]
};
