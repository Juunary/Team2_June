import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import './page.css';

export default function SchedulePage() {
	return (
		<main className="w-5/6 mx-auto flex-col flex-grow flex mt-4">
			<h2>HCC-Lab Study Calendar</h2>
			<FullCalendar
				height="820px"
				events={[
					{ title: '스터디', date: '2024-03-26', color: '#890F1F' },
					{ title: '스터디', date: '2024-04-02', color: '#890F1F' },
				]}
				defaultView="dayGridMonth"
				plugins={[dayGridPlugin]}
			/>
		</main>
	);
}
