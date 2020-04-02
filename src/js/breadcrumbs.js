export const breadcrumbs = {
	view: "toolbar",
	padding: 8,
	cols: [
		{
			template: () => {
				const arrowIcon = "<span class='webix_icon wxi-angle-right'></span>";
				const chunks = ["Home", "Fruits and Vegetables"];
				let path = "";
				chunks.forEach((chunk, index) => {
					path += `<span class="breadcrumbs-chunk">${chunk}</span>`;
					if (index < chunks.length - 1) path += arrowIcon;
				});
				return path;
			},
			borderless: true,
			type: "header"
		},
		{
			view: "search",
			width: 190,
			placeholder: "Search Products"
		}
	]
};
