export const CardType =({name, bg})=>{
    return (
        <div className="content_card_type_item">
            <img src={bg} alt="" srcset="" />
            <span className="text_name_card">{name}</span>
        </div>
    )
}