interface SearchBarProps {
    text: string;
    setText: (text: string) => void;
}

function SearchBar({text, setText} : SearchBarProps) {
    return (
        <div>
            <input value={text} onChange={e => setText(e.target.value)} />
        </div>
    )
}

export default SearchBar
