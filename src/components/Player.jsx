import React, { useState } from "react";

function Player({ initialName, symbol, onSaveName, isActive }) {
	const [playerName, setPlayerName] = useState(initialName);
	const [isEditing, setIsEditing] = useState(false);

	const handleClick = () => {
		setIsEditing((editing) => !editing);
		if (isEditing) {
			onSaveName(symbol, playerName);
		}
	};

	const handleChange = (event) => {
		setPlayerName(event.target.value);
	};

	let editablePlayerName = <span className="player-name">{playerName}</span>;
	if (isEditing) {
		editablePlayerName = (
			<input type="text" value={playerName} onChange={handleChange} />
		);
	}

	return (
		<li className={isActive ? "active" : undefined}>
			<span className="player">
				{editablePlayerName}
				<span className="player-symbol">{symbol}</span>
			</span>
			<button onClick={handleClick}>{isEditing ? "Save" : "Edit"}</button>
		</li>
	);
}

export default Player;
