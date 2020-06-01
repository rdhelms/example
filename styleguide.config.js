module.exports = {
	title: 'React Style Guide Example',
	defaultExample: true,
	webpackConfig: {
		module: {
			rules: [
				{
					test: /\.jsx?$/,
					exclude: /node_modules/,
					loader: 'babel-loader',
				},
				{
					test: /\.css$/,
					use: [
						'style-loader',
						{
							loader: 'css-loader',
							options: {
								importLoaders: 1,
								modules: true
							}
						},
					],
				},
			],
		},
    },
    styles: {
        Link: {
            link: {
                textDecoration: 'underline',
            },
        },
    },
};
