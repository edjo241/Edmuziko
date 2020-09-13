export const authEndpoint = "https://accounts.spotify.com/authorize";

const redirectUri = "http://localhost:3000/";

const clientid = "7154e9a0b3314cc1b0e546d12fd96532";

const scopes = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state",
];
export const getTokenFromUrl=()=>{
    return window.location.hash
    .substring(1)
    .split('&')
    .reduce((initial,item)=>{
        let parts=item.split('=');
        initial[parts[0]]=decodeURIComponent(parts[1])
        return initial
    },{});
}
export const loginUrl = `${authEndpoint}?client_id=${clientid}&redirect_uri=${redirectUri}&scopes=${scopes.join(
  "%20"
)}&response_type=token&show_dialogue=true`;
