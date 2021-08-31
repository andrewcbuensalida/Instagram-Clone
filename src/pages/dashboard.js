import React, { useEffect, useState } from "react";
import Header from "../components/header.js";
import Timeline from "../components/timeline.js";
import Sidebar from "../components/sidebar/index.js";
import FollowContext from "../context/follow.js";

export default function Dashboard() {
	useEffect(() => {
		document.title = "Instagram";
	}, []);
	const [following, setFollowing] = useState(false);

	return (
		<div className="bg-gray-background">
			<Header />
			<FollowContext.Provider value={{ following, setFollowing }}>
				<div className="grid grid-cols-3 gap-4 justify-between mx-auto max-w-screen-lg">
					<Timeline />
					<Sidebar />
				</div>
			</FollowContext.Provider>
		</div>
	);
}
