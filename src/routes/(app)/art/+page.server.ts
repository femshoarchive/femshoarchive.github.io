import type { PageLoad } from './$types';
import dree from "dree";

export const load: PageLoad = () => {
    var data: {artist: string, arts: string[]}[] = [];
    dree.scan('static/art').children?.forEach(artistdir => {
        var arts: string[] = [];
        dree.scan(`static/art/${artistdir.name}`).children?.forEach(artsdir => {
            arts[arts.length] = artsdir.name;
        });
        data[data.length] = {artist: artistdir.name, arts: arts};
    })
    return {
        arts: data
    };
}