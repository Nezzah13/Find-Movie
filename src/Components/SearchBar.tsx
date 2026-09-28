import "../Styles/SearchBar.css"

interface SearchBarProps {
    text: string;
    setText: (text: string) => void;
}

function SearchBar({text, setText} : SearchBarProps) {
    return (
        <div>
            <input value={text} onChange={e => setText(e.target.value)} placeholder="Поиск" className="search-bar"/>
        </div>
    )
}

export default SearchBar
