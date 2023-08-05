export const LOGIN_ROUTE = "/login";
export const REGISTRATION_ROUTE = "/registration";
export const HOME_ROUTE = "/";

export const WS_ROUTE = "https://video.auto-use.ru:5000/";
export const API_ROUTE = `${WS_ROUTE}api`;

export const videoJsOptions = {
        fill: true,
        fluid: true,
        autoplay: true,
        controls: true,
        preload: "metadata",
        sources: [
            {
                src: `${API_ROUTE}/video/output.m3u8`,
                type: "application/x-mpegURL"
            }
        ]
    }