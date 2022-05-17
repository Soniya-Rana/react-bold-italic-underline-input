import './App.css';
import { useState } from 'react';
import parse from 'html-react-parser';

function App() {
	const [textData, setTextData] = useState('');
	const [textDataPreview, setTextDataPreview] = useState('');
	const [showTextFlag, setShowTextFlag] = useState(false);
	const [textFlag, setTextFlag] = useState(false);
	const [boldFlag, setBoldFlag] = useState(false);
	const [italicFlag, setItalicFlag] = useState(false);
	const [underlineFlag, setUnderlineFlag] = useState(false);

	const handleChange = (e) => {
		setTextData(e.target.value);
	};

	const handleClick = (e) => {
		e.preventDefault();
		setShowTextFlag(true);
		let htmlString = textData;

		if (boldFlag === true) {
			setTextFlag(true);
			htmlString = `<b> ${htmlString} </b>`;
			setTextDataPreview(htmlString);
		} else if (italicFlag === true) {
			setTextFlag(true);
			htmlString = `<i>${htmlString}</i>`;
			setTextDataPreview(htmlString);
		} else if (underlineFlag === true) {
			setTextFlag(true);
			htmlString = `<u>${htmlString}</u>`;
			setTextDataPreview(htmlString);
		} else {
			setTextDataPreview(textData);
		}
		// setTextDataPreview(textData);
	};

	const handleBold = (e) => {
		e.preventDefault();
		setBoldFlag(!boldFlag);
	};

	const handleItalic = (e) => {
		e.preventDefault();
		setItalicFlag(!italicFlag);
	};

	const handleUnderline = (e) => {
		e.preventDefault();
		setUnderlineFlag(!underlineFlag);
	};

	return (
		<div className='App'>
			<div className='Input-Box'>
				<input
					style={{
						fontWeight: boldFlag ? 'bold' : 'normal',
						fontStyle: italicFlag ? 'italic' : '',
						textDecoration: underlineFlag ? 'underline' : '',
					}}
					className='text-styling'
					type='text'
					value={textData}
					onChange={(e) => handleChange(e)}
				/>

				<button className='submit' onClick={(e) => handleClick(e)}>
					save
				</button>
			</div>
			<div className='Input-Styles'>
				<button
					style={{ backgroundColor: boldFlag ? 'red' : 'blue' }}
					onClick={(e) => handleBold(e)}>
					B
				</button>
				<button
					style={{ backgroundColor: italicFlag ? 'red' : 'blue' }}
					onClick={(e) => handleItalic(e)}>
					I
				</button>
				<button
					style={{ backgroundColor: underlineFlag ? 'red' : 'blue' }}
					onClick={(e) => handleUnderline(e)}>
					U
				</button>
			</div>
			<div className='Input-Preview'>
				{showTextFlag && !textFlag ? textDataPreview : parse(textDataPreview)}
			</div>
		</div>
	);
}

export default App;
