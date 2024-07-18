import { MusicObject } from "./MusicSection"

export const MusicTile = ({description, url}: MusicObject) => {
    return <div className="">
        <iframe src={url} width="100%" height="352" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
        <p>{description}</p>
    </div>
}