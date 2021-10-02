/******************************************************************************
**	@Author:				The Ape Community
**	@Twitter:				@ape_tax
**	@Date:					Wednesday August 11th 2021
**	@Filename:				next.config.js
******************************************************************************/

const Dotenv = require('dotenv-webpack');

module.exports = ({
	plugins: [
		new Dotenv()
	],
	eslint: {
		// Warning: This allows production builds to successfully complete even if
		// your project has ESLint errors.
		ignoreDuringBuilds: true,
	},
	env: {
		ALCHEMY_KEY: process.env.ALCHEMY_KEY,
		ALCHEMY_KEY_POLYGON: process.env.ALCHEMY_KEY_POLYGON,
		WEBSITE_URI: process.env.WEBSITE_URI || 'https://ape.tax/',
		SECRET: process.env.SECRET,
		FTMSCAN_API: process.env.FTMSCAN_API,
		ETHERSCAN_API: process.env.ETHERSCAN_API,
		POLYGONSCAN_API: process.env.POLYGONSCAN_API,
		BSCSCAN_API: process.env.BSCSCAN_API,
		MORALIS_ARBITRUM_KEY: process.env.MORALIS_ARBITRUM_KEY
	},
	optimization: {
		minimize: true,
		splitChunks: {
			chunks: 'all',
			maxInitialRequests: 25,
			minSize: 20000
		}
	},
	webpack: (config, {webpack}) => {
		config.plugins.push(new webpack.IgnorePlugin(/\/__tests__\//));
		return config;
	},
	webpackDevMiddleware: (config) => {
		// Perform customizations to webpack dev middleware config
		// Important: return the modified config
		return config;
	},
});
