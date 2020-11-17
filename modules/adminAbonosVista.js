window.onload = function(){
    let base = JSON.parse(localStorage.getItem('miBD'));
    let txt = '';
    txt += `
        <tr>
            <td colspan="5">&nbsp;</td>
        </tr>
    `;
    base.datos.forEach(usuario => {
        txt += `
            <tr>
                <td>${usuario.nombre}</td>
                <td>${usuario.apellidoPaterno}</td>
                <td>${usuario.apellidoMaterno}</td>
                <td>${usuario.telefono}</td>
                <td>${usuario.correo}</td>
                <td>
                    <input type="radio" name="persona" id="">
                </td>
            </tr>
        `;
    });

    document.getElementById('abonos').innerHTML = txt;
    console.log(txt);
    console.log(base);
};