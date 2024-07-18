import { MusicTile } from "./MusicTile";

export interface MusicObject{
    description: string,
    url: string
}

const MusicObjects = [
    {description: 'blah blah', url: "https://open.spotify.com/embed/playlist/2RxWHXTDfU2urVPc8Cxoq4?utm_source=generator"}
]

export const MusicSection = () => {
  return (
    <div className="h-screen w-screen bg-black opacity-95 flex flex-col items-center justify-evenly font-mono">
      <div className="flex flex-col items-center">
        <h1 className="text-white text text-6xl mb-16">
          Music
          <div className="bg-red-500 text-red-500 h-5 w-32 mt-[-1.25rem] ml-[4rem]"></div>
        </h1>
        {MusicObjects.map((playlist: MusicObject) => <MusicTile url={playlist.url} description={playlist.description}/>)}
      </div>
    </div>
  );
};
