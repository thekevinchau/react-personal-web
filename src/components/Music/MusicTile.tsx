import { MusicObject } from "./MusicSection"

export const MusicTile = ({description, url, colorCode}: MusicObject) => {
    return <div className="w-1/5">
        <iframe src={url} width="100%" height="352" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
        <p className="mt-2 text-white pl-1 rounded-lg border border-black" style={{backgroundColor: colorCode}}>{description}</p>
    </div>
}