const promptMessage = (listMessages:string[], message:string) =>{
    return 'je vais te donner un nouveau prompt et l\'historique de notre conversation et j\'aimerai ' +
        'que tu me reponde sans reprendre tout l\'historique, chaque message est delimité par + \'<<>>\'.' +
        'voici l\'historique : '+ listMessages + '. Il faut avoir une conversation fluide comme si je parlais à un humain,' +
        '. voici le nouveau message auquel tu dois repondre dans la langue du dernier message, n\'hesite pas achnger de langue si c\'est nécessaire: "' + message + '". Ne met pas les "<<" ou ">>" dans tes messages et contente toi' +
        ' seulement de répondre';
};

export default {
    promptMessage,
};