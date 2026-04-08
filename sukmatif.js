function kirim() {
    var nama = document.getElementById("nama").value;
    var kelas = document.getElementById("kelas").value;
    var umur = document.querySelector('input[name="umur"]:checked');
    var jk = document.querySelector('input[name="jk"]:checked');
    var tingkat = document.querySelector('input[name="tingkatan"]:checked');

    if (umur == null || jk == null || tingkat == null) {
        alert("pilih dulu");
        return;
    }

    document.getElementById("hNama").innerHTML = nama;
    document.getElementById("hKelas").innerHTML = kelas;
    document.getElementById("hUmur").innerHTML = umur.value;
    document.getElementById("hJk").innerHTML = jk.value;
    document.getElementById("hTingkat").innerHTML = tingkat.value;

    document.getElementById("form").style.display = "none";
    document.getElementById("hasil").style.display = "block";
}

function clearData() {
    document.getElementById("nama").value = "";
    document.getElementById("kelas").value = "";
    document.querySelectorAll("input[type=radio]").forEach(r => r.checked = false);
}

function kembali() {
    document.getElementById("form").style.display = "block";
    document.getElementById("hasil").style.display = "none";
}