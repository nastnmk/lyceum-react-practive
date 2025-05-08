function Aside({categories, onSelectCategory}){
    return(
        <aside className="aside">
            <h2>Категории</h2>
            <ul>
                {categories.map((category, index) => (
                    <li key={index} onClick={() => onSelectCategory(category)}>
                        {category}
                    </li>
                ))}
            </ul>
        </aside>
    )
}