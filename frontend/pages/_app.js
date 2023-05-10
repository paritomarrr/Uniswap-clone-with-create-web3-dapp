import "../styles/globals.css";

import { Navbar } from "../components";
const MyApp = ({ Component, pageProps }) => {
		  return (
			<div>
				<Navbar />
				<Component {...pageProps} />
			</div>
		  )
}

export default MyApp;