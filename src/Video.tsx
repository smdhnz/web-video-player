import Player from "griffith";

export const Video = ({ url }: { url: string }) => {
  return (
    <Player
      id={url}
      useMSE
      sources={{
        fhd: {
          play_url: url,
        },
      }}
    />
  );
};
