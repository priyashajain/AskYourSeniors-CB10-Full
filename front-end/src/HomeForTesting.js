
import React from "react";

function HomeForTesting(userDetails) {
	// const user = userDetails.user;
	const logout = () => {
		window.open(`${process.env.REACT_APP_API_URL}/auth/logout`, "_self");
	};
	return (
		<div>
			
					{/* <img
						src={user.picture}
						alt="profile"
					/>
                    <p>{user.name}</p>
                    <p>{user.email}</p> */}

					
					<button onClick={logout}>
						Log Out
					</button>
				
		</div>
	);
}

export default HomeForTesting;