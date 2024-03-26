import { useState } from 'react';
import './styles.css';

export default function ToggleBtn() {
	const [toggleOn, setToggleOn] = useState(false);

	const handleToggle = () => {
		setToggleOn((prev) => !prev);
	};

	return (
		<>
			<div className="relative cursor-pointer" onClick={handleToggle}>
				<div className={`toggle-container ${toggleOn ? 'toggle-container-checked' : ''}`}></div>
				<div className={`toggle-circle ${toggleOn ? 'toggle-circle-checked' : ''}`}></div>
			</div>
		</>
	);
}
