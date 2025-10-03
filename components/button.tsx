export default function Button({ text }: {text: string }) {
    return (
        <button className="w-full capitalize mb-3 bg-primary p-2 text-secondary rounded-md hover:cursor-pointer duration-200 transform-all hover:opacity-80">
            {text}
        </button>

    )
}