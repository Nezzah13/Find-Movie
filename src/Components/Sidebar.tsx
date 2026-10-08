import '../Styles/Sidebar.css'

interface sideBarProps {
    setActiveList: (page: 'Main' | 'Favorite' | 'Viewed') => void
}

function Sidebar({setActiveList}: sideBarProps) {
    return (
        <div className="side-bar">
            <button className="bar-button" type="button" onClick={() => setActiveList('Main')}>Поиск</button>
            <button className="bar-button" type="button" onClick={() => setActiveList('Favorite')}>Избранное</button>
            <button className="bar-button" type="button" onClick={() => setActiveList('Viewed')}>Просмотренные</button>
        </div>
    )
}

export default Sidebar
