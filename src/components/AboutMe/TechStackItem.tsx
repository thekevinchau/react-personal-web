interface TechStackItemProps{
    img: string
}


export const TechStackItem = ({img}: TechStackItemProps) => {
    return  <div className="text-white border border-red-500 h-48 w-48 flex justify-center items-center rounded-lg">
        <img src={img} className="w-36"/>
    </div>
} 