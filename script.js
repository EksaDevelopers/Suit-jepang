var tanya = true;
while(tanya){
//piihan player
var p = prompt('piih=batu,gunting,kertas');
//pilihan computer
//random number selection
var computer = Math.random();

if (computer < 0.34) {
	computer = 'batu';
}else if (computer >= 0.34 && computer < 0.67) {
	computer = 'gunting';
}else{
	computer = 'kertas';
}

var hasil = '';
//rules
if (p == computer) {
	hasil ='SERI';
}else if (p == 'batu') {
	if (computer == 'gunting') {
		hasil = 'menang';
	}else{
		hasil = 'kalah';
	}
}else if (p == 'gunting') {
	if (computer == 'batu') {
		hasil = 'kalah';
	}else{
		hasil = 'menang';
	}
}else if (p == 'gunting') {
	if (computer == 'batu') {
		hasil = 'kalah';
	}else{
		hasil = 'menang';
	}
}else if (p == 'kertas') {
	if (computer == 'gunting') {
		hasil = 'kalah';
	}else{
		hasil = 'menang';
	}
}else{
	hasil = 'anda memasukkan nama yang salah';
}

//hasil
alert('kamu memilih '+p+' dan computer memilih '+computer+'\nmaka hasilnya '+hasil);
tanya = confirm('lagi??');
}
alert('terima kasih sudah bermain');