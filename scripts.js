function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.lenght == 0 || Number(fano.Value) > ano) {
        window.alert('ERRO! verifique os capos é tente novamente')
    }
    else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        if (fsex[0].checked){
            gênero = 'Home'
        }else if(fsex[1].checked) {
            gênero = 'Mulher'
        }
        res.innerHTML = `Detectamos que você é <strong> ${gênero} </strong> com ${idade} anos.`
    }
}