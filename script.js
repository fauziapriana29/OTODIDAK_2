$('.btnmodal').click(function() {
    var inputModal = $('#inpmodal').val()
    $('#inpmodal').val('')
    $('#total').html(`<h1>${inputModal}</h1>`)
    console.log(inputModal)
})

$('.pesanan').click(function() {
    var inputPesanan = $('#inppesanan').val()
    $('#total').html()
    console.log(inputPesanan)
})

$('.pengeluaran').click(function() {
    var inputpengeluaran = $('#inppengeluaran').val()
    $('#inppengeluaran').val('')
    console.log(inputpengeluaran)
})

$('.hutang').click(function() {
    var nama = $('#nama').val()
    var jumlah = $('#jmlh').val()
    $('#nama').val('')
    $('#jmlh').val('')
    console.log(nama,jumlah)
})


function total() {
    var hasil = document.getElementById('total').value
    var tekshasil = document.createTextNode(hasil)
    console.log(tekshasil)
}
