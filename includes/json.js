export class json
{

static async read(src) {
    const json = src;
    try {
        const respuesta = await fetch(json);
        if (!respuesta.ok) {
            console.error('Error al cargar el archivo JSON');
            return "";
        }
        const datosJSON = await respuesta.text();
        const datos = JSON.parse(datosJSON);
        return datos;
    } catch (error) {
        console.error('Error al leer el archivo JSON:', error);
        return "";
    }
}

static download(src){
    const jsonString = JSON.stringify(src, null, 2);
    const blob = new Blob([jsonString], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'save.json';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}

static async instance(src){
    const params = new URLSearchParams();
    for (const key in src) {
        params.append(key, src[key]);
    }
    const queryString = params.toString();

    await fetch(`/modify?${queryString}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    });
}

};