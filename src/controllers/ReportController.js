const { Op } = require('sequelize');

const User = require('../models/User');

module.exports = {
	async show(req, res) {
		// Find all users with '@paris.dev' mail
		// Those users need to have an address (or addresses) in 'Rua Madre Sueli'
		// Those users need to have a tech who start with 'React'

		const users = await User.findAll({
			attributes: ['name', 'email'],
			where: {
				email: {
					[Op.iLike]: '%@paris.dev'
				}
			},
			include: [
				{ association: 'addresses', where: { street: 'Rua Madre Sueli' } },
				{
					association: 'techs',
					required: false,
					where: {
						name: {
							[Op.iLike]: 'React%'
						}
					}
				},
			]
		});

		return res.json(users);
	},
}