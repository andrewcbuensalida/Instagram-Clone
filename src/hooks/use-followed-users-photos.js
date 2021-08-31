import { useState, useEffect, useContext } from "react";
import { getUserByUserId, getUserFollowedPhotos } from "../services/firebase";
import UserContext from "../context/user";
import FollowContext from "../context/follow";

export default function useFollowedUsersPhotos() {
	const [photos, setPhotos] = useState(null);
	const {
		user: { uid: userId = "" },
	} = useContext(UserContext);
	const { following } = useContext(FollowContext);
	useEffect(() => {
		async function getTimelinePhotos() {
			const followingUserIds = await getUserByUserId(userId);
			let followedUsersPhotos = [];

			if (followingUserIds && followingUserIds[0].following.length > 0) {
				followedUsersPhotos = await getUserFollowedPhotos(
					userId,
					followingUserIds[0].following
				);
			}

			followedUsersPhotos.sort((a, b) => b.dateCreated - a.dateCreated);
			setPhotos(followedUsersPhotos);
			console.log("this is in the gettimeline");
			console.log(followedUsersPhotos);
		}

		getTimelinePhotos();
	}, [userId, following]);
	console.log("this is in use followed users");
	console.log(photos);
	return { photos };
}
