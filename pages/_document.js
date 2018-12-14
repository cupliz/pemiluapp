import Document, { Head, Main, NextScript } from 'next/document'


export default class MyDocument extends Document {
	static async getInitialProps(ctx) {
		const initialProps = await Document.getInitialProps(ctx)
		return { ...initialProps }
	}

	render() {
		return (
			<html>
				<head>
					<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"/>	
				</head>
				<body className="custom_class">
					<Main/>
					<NextScript/>
				</body>
				<script>
					M.AutoInit()
				</script>
			</html>
			)
	}
}