const data = [
	{id: "1", title: "Granny Smith apples", total: "4.95", weight: "3.000", price: "1.65"},
	{id: "2", title: "Tomatoes", total: "1.48", weight: "1.000", price: "1.48"},
	{id: "3", title: "Potatoes", total: "10.80", weight: "10.000", price: "1.08"}
];

const productList = {
	view: "list",
	borderless: true,
	autoheight: true,
	select: true,
	type: {
		height: 50,
		template(obj) {
			const html =
            `
            <div class="bag-item">
                <span class="bag-item-title webix_strong"> 
                    ${obj.title} 
                </span> 
                <span class="bag-item-total webix_strong"> 
                    ${obj.total} &#8364
                </span> 
                <div class="bag-item-details">
                    <span class="webix_strong">
                        ${obj.weight}
                    </span>
                    <span class="webix_light">
                        kg at ${obj.price} &#8364/Kg
                    </span>
                </div> 
            </div>
            `;
			return html;
		}
	},
	data
};

export const bag = {
	margin: 20,
	padding: 20,
	rows: [
		productList,
		{
			view: "template",
			autoheight: true,
			borderless: true,
			css: "total",
			data: {
				total: 19.80,
				taxes: 2.57
			},
			template: obj => `
				<div class="total-info">
					<div class="font-18 webix_strong">Total: ${obj.total} &#8364</div>
					<div class="webix_strong"> Taxes: ${obj.taxes} &#8364</div>
				</div>`
		},
		{}
	]
};
