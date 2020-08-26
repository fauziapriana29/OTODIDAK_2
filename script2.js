var inputpesanan = document.getElementById('inppesanan')
var addpesanan = document.getElementById('button-addon2');
var createdata1 = document.getElementById('data1');

addpesanan.addEventListener('click', function() {
        // document.getElementById('button-addon2').click()
        var paragraph = document.createElement('p')
        var valinput = inputpesanan.value;
        paragraph.innerText = '- ' + inputpesanan.value;
        createdata1.appendChild(paragraph)

        inputpesanan.value = ''

        var hasil = document.getElementById('total')
        var valhasil = hasil.innerText;
        var total = parseInt(valhasil) + parseInt(valinput)
        // console.log(total)
        hasil.innerHTML = total

})


var inputpengeluaran = document.getElementById('inppengeluaran')
var addpengeluaran = document.getElementById('button-addon3')
var createdata2 = document.getElementById('data2')

addpengeluaran.addEventListener('click', function() {

    var paragraph = document.createElement('p')
    var valinput = inputpengeluaran.value;
    paragraph.innerText = valinput;
    createdata2.appendChild(paragraph)

    inputpengeluaran.value = ''

    var hasil = document.getElementById('total')
    var valhasil = hasil.innerText;
    var total = parseInt(valhasil) - parseInt(valinput)

    hasil.innerHTML = total
})


var inputModal = document.getElementById('inpmodal');
var addModal = document.getElementById('button-addon1')
var createmodal = document.getElementById('total')

addModal.addEventListener('click', function() {

    var valmodal = inputModal.value
    var total = parseInt(valmodal)

    createmodal.innerHTML = total
    
    inputModal.value = ''
})

var inputnama = document.getElementById('nama');
var inputjumlah = document.getElementById('jmlh');
var addHutang = document.getElementById('button-addon4');
var createdata3 = document.getElementById('data3');

addHutang.addEventListener('click', function() {

    var paragraph = document.createElement('p');
    var valinputnama = inputnama.value;
    var valinputjumlah = inputjumlah.value;
    paragraph.innerText = `${valinputnama}    =      ${valinputjumlah}`

    createdata3.appendChild(paragraph)

    inputnama.value = ''
    inputjumlah.value = ''
})