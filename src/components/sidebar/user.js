import React, { memo } from "react";
import { Link } from "react-router-dom";
import Skelton from "react-loading-skeleton";

const User = ({ username, fullName, profilePic }) =>
	!username || !fullName ? (
		<Skelton count={1} height={61} />
	) : (
		<Link
			to={`/p/${username}`}
			className="grid grid-cols-4 gap-4 mb-4 items-center"
		>
			<div className="flex items-center justify-between col-span-1">
				<img
					className="rounded-full w-16 flex mr-3"
					src={
						"https://firebasestorage.googleapis.com/v0/b/instagram-scrimba-react-tailwi.appspot.com/o/images%2Favatars%2Fdefault.jpg?alt=media&token=76195ead-75f1-4b21-b854-000ad166c25c"
					}
					alt="My profile"
				/>
			</div>
			<div className="col-span-3">
				<p className="font-bold text-sm">{username}</p>
				<p className="text-sm">{fullName}</p>
			</div>
		</Link>
	);

export default memo(User);
