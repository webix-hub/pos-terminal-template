import {dataGrid} from "../data/gridData";

export const grid = {
	view: "dataview",
	select: true,
	css: "products-grid",
	type: {
		height: 150,
		width: 150,
		type: "tiles",
		template: item => `
			<div class='grid-item' style ='background-image: url( ${item.src} )'>
				<span class='grid-item-weight'>${item.price} &#8364/Kg</span>
				<span class='grid-item-title'>${item.title}</span>
			</div>`
	},
	data: dataGrid
};
