function PortalResurces({resurces}) {
    return (
        <div className="res__wrapper">
            <ul className="res__ul">
                { resurces.map((item, index) => (
                        <li key={index}><a href={item.link}>{item.title}</a></li>
                    ))
                }
            </ul>
            </div>
    );
}
export default PortalResurces;