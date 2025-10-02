export default function Clock() {
    return (
        <svg className="w-10 h-10 lg:w-[100px] lg:h-[100px]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="5" cy="5" r="2" stroke="currentColor" strokeWidth="2" fill="none" />
            <line x1="5" y1="3" x2="5" y2="1" stroke="currentColor" strokeWidth="2" stroke-linecap="round" />

            <circle cx="19" cy="5" r="2" stroke="currentColor" strokeWidth="2" fill="none" />
            <line x1="19" y1="3" x2="19" y2="1" stroke="currentColor" strokeWidth="2" stroke-linecap="round" />

            <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="2" fill="none" />

            <line x1="12" y1="12" x2="12" y2="8" stroke="currentColor" strokeWidth="2" stroke-linecap="round" />

            <line x1="12" y1="12" x2="15.5" y2="12" stroke="currentColor" strokeWidth="2" stroke-linecap="round" />

            <circle cx="12" cy="12" r="1.5" fill="currentColor" />

            <line x1="6" y1="19" x2="4" y2="21" stroke="currentColor" strokeWidth="2" stroke-linecap="round" />

            <line x1="18" y1="19" x2="20" y2="21" stroke="currentColor" strokeWidth="2" stroke-linecap="round" />
        </svg>
    )
}