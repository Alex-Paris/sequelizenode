module.exports = {
	dialect: 'postgres',
	host: 'localhost',
	port: 5466,
	username: 'postgres',
	password: 'a12345z',
	database: 'sequelizenode',
	define: {
		timestamps: true, // created_at, updated_at
		underscored: true, // user_group
	}
};