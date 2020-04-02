import {grid} from "./js/productsGrid";
import {bag} from "./js/bag";
import {calculator} from "./js/calculator";
import {topToolbar} from "./js/topToolbar";
import {breadcrumbs} from "./js/breadcrumbs";

import "./styles/main.scss";

webix.ready(() => {
	if (!webix.env.touch && webix.env.scrollSize && webix.CustomScroll) {
		webix.CustomScroll.init();
	}

	webix.ui({
		cols: [
			{
				rows: [
					{
						view: "toolbar",
						height: 60,
						padding: 10,
						cols: [
							{
								borderless: true,
								template: "<img style='height: 100%' src='assets/img/logo.png' />"
							},
							{
								view: "label",
								label: "Administrator",
								css: "text-right"
							}
						]
					},
					bag,
					{height: 3, css: "blue-thick-border"},
					calculator
				]
			},
			{
				gravity: 2,
				rows: [
					topToolbar,
					breadcrumbs,
					grid
				]
			}
		]
	});
});
