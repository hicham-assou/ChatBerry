

const promptMessage = (listMessages:string[], message:string) =>{
    return 'je vais te donner un nouveau prompt et l\'historique de notre conversation et j\'aimerai ' +
        'que tu me reponde sans reprendre tout l\'historique, chaque message est deliimité par + \'<<>>\'.' +
        'voici l\'historique : '+ listMessages + '. Il faut avoir une conversation fluide comme si je parlais à un humain,' +
        '. voici le nouveau message auquel il faut repondre,: "' + message + '". Ne met pas les "<<" ou ">>" dans tes messages et contente toi' +
        ' seulement de répondre';;
};

const promptMessageWithRole = (listMessages:string[], message:string, role: string) =>{
    return role + '\nje vais te donner un nouveau prompt et l\'historique de notre conversation et j\'aimerai ' +
    'que tu me reponde sans reprendre tout l\'historique, chaque message est deliimité par + \'<<>>\'.' +
    'voici l\'historique : '+ listMessages + '. Il faut avoir une conversation fluide comme si je parlais à un humain,' +
    '. voici le nouveau message auquel il faut repondre,: "' + message + '". Ne met pas les "<<" ou ">>" dans tes messages et contente toi' +
    ' seulement de répondre';
};

export default {
    promptMessage,
    promptMessageWithRole
};