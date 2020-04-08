const { createFilePath } = require('gatsby-source-filesystem');

exports.onCreateNode = ({ node, actions, getNode }) => {
	const { createNodeField } = actions;

	if (node.internal.type === 'MarkdownRemark') {
		const slug = createFilePath({
			node,
			getNode,
			basePath: 'pages',
			trailingSlash: false,
		});
		createNodeField({
			node,
			name: 'slug',
			value: slug,
		});
	}
};