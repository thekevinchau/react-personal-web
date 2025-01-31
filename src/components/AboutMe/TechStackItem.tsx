interface TechStackItemProps{
    img: string
}


export const TechStackItem = ({img}: TechStackItemProps) => {
    return  <div className="text-white h-36 w-36 flex justify-center items-center rounded-md bg-gradient-to-r from-green-500 via-white to-green-700 p-1 ">
        <div className="flex h-full w-full items-center justify-center bg-black opacity-95">
        <img src={img} className="w-18 h-16"/>
        </div>
    </div>
} 