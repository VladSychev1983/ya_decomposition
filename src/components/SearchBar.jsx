/**
компонент формы поиска
 */
function SearchBar( {logo}) {
    return(
        <div className="search__wrapper">
            <img src={logo} alt="" className="" />
            <label htmlFor="search__input">
                <input type="text" className="search__input"/>
                <button className="search__btn">Найти</button>
            </label>
            <span>
                Найдется все. Например, фаза луны сегодня
            </span>
        </div>
    )
}
export default SearchBar;