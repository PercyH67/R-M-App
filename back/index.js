
require("dotenv").config();
const app = require("./src/app.js");
const { sequelize } = require("./src/db.js");

const main = async() =>{
	try {
		await sequelize.sync({ force: true });
		console.log("Database synchronized successfully.");
	
		const PORT = process.env.PORT || 3001;
		app.listen(PORT, () => {
			console.log(`Server running on port ${PORT}`);
		});

	} catch (error) {
		console.error("Error synchronizing database:", error);
	}
}

main();