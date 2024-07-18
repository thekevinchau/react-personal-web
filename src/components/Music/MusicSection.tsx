import { MusicTile } from "./MusicTile";

export interface MusicObject {
  description: string;
  url: string;
  colorCode: string
}
const MusicObjects = [
  {
    description:
      "I have been getting into EDM lately and I plan on going to some more shows and festivals in the future! Some of my favorite artists are Martin Garrix, Zedd, Calvin Harris, and Avicii!",
    url: "https://open.spotify.com/embed/playlist/2RxWHXTDfU2urVPc8Cxoq4?utm_source=generator",
    colorCode: '#2068A8'
  },
  {
    description:
      "This playlist is my girlfriend and I's collaborative playlist. We had a lot of fun making it but we haven't been updating it as much as we've wanted to. Hopefully soon we will!",
    url: "https://open.spotify.com/embed/playlist/55dVVGTtETjYYwdhw48QiS?utm_source=generator",
    colorCode: '#5933E9'
  },
  {
    description:
      "Honestly, I didn't really listen to indie and alt music until I met my girlfriend. She got me into it during our long drives down to the beach :)",
    url: "https://open.spotify.com/embed/playlist/6Xq4m1SOxHPtKpDVhRtHeG?utm_source=generator",
    colorCode: '#9D4A51'
  },
];

export const MusicSection = () => {
  return (
    <div className="h-screen w-screen flex flex-col items-center justify-evenly font-mono bg-black opacity-95 MusicBg">
      <div className="flex flex-col items-center">
        <p className="w-1/3 mb-10 bg-white text-black border-black border-2 pl-1 rounded-md">
          Music is pretty much integrated into my daily life. Any task I do,
          whether it's playing video games, working out, programming, cleaning
          (literally everything) is done with music playing. I'd like to call
          myself a music enthusiast. If you'd like, below are some playlists of
          mine that you can explore!
        </p>
        <div className="flex justify-evenly mt-5">
          {MusicObjects.map((playlist: MusicObject) => (
            <MusicTile url={playlist.url} description={playlist.description} colorCode={playlist.colorCode}/>
          ))}
        </div>
      </div>
    </div>
  );
};
