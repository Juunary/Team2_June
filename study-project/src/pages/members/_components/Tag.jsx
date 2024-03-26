export default function Tag({ tag, index }) {
	return (
		<div key={index} className="m-2.5 bg-darkGrey rounded-3xl py-1 px-3 text-sm">
			#{tag.name}
		</div>
	);
}
