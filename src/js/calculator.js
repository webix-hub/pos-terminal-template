import {calcItems} from "../data/calcItems";

export const calculator = {
	css: "calculator",
	padding: 20,
	cols: [
		{
			minWidth: 125,
			rows: [
				{
					height: 75,
					css: "calc-template-button",
					template: "<div class='webix_secondary'><button class='webix_button'>Customer</button></div>"
				},
				{
					height: 227,
					css: "calc-template-button",
					template: "<div class='webix_secondary'><button class='webix_button'>Payment</button></div>"
				}
			]
		},
		{
			view: "dataview",
			width: 304,
			css: "calc-grid",
			scroll: false,
			autoheight: true,
			type: {
				height: 76,
				width: 76,
				template(obj) {
					const html = `
			<div class="webix_transparent calc-grid-button"><button class="webix_button">${obj.value}</button></div>
			`;
					return html;
				}
			},
			data: calcItems
		}
	]
};
