/**
баннер под строкой поиска
 */
function Banner({banner}) {
    return (
        <div className="banner__wrapper">
            <img src={banner} alt="" />
        </div>
    )
}
export default Banner;
