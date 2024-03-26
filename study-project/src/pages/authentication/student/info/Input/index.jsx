export default function Input({ title }) {
	return (
		<div className="flex flex-col gap-1 w-full">
			<label className="text-textBlack text-sm font-semibold">{`${title} *`}</label>
			<input type="text" placeholder="title" className="border border-textBlack rounded px-2 py-3" />
		</div>
	);
}
