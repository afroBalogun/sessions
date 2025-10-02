export default function HeroTitle() {
    const word = "sessions".split("");

    return (
        <h1 className="xl:block text-center text-[calc(100vw/5.5)] font-light font-suse text-primary">
            <div className="flex justify-between">
                {word.map((letter, index) => (
                    <span key={index}>{letter}</span>
                ))}
            </div>
        </h1>
    );
}
