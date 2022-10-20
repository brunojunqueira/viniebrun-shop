export default function redirectTo(link: string, newTab?: boolean){
    const target = (newTab) ? "_blank" : "_self";
    window.open(link, target);
}