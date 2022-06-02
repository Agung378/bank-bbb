import React from "react";
import Header from "./Header";
import Footer from "./Footer";

export default function SK() {

function handleClick(e) {
    window.close();
    console.log('Tautan diklik.');
}


return (

    <>
        <Header />

        <div className='container mt-5'>

            <div className='row'>
                <div className='syarat'>
                    <h4 className='text-center mt-5'>Syarat dan Ketentuan</h4>
                    <h6 className='text-center mt-2'>Pembukaan Rekening Tabungan Berjangka</h6>

                    <h6 className=' mt-5'>KETENTUAN TAHAPAN BERJANGKA</h6>
                    <h6 className=' mt-3'>PT. BANK BUKAN BANK BISA Tbk. ("Bank BBB")</h6>


                    <h6 className=' mt-5'>A. DEFINISI</h6>
                    <p>1.	Tahapan Berjangka adalah tabungan perorangan dengan setoran dalam jumlah tetap yang dilakukan secara berkala selama periode waktu tertentu yang wajib dibayar oleh nasabah setiap bulan sesuai dengan tanggal autodebet yang dipilih nasabah.<br />
                        2.	Rekening Sumber Dana adalah rekening yang menjadi rekening sumber dana pendebetan rutin tiap bulan Tahapan Berjangka yaitu Rekening Tahapan, Tahapan Gold, Tahapan Xpresi, Tapres, dan/atau rekening lainnya yang akan ditentukan oleh Bank BBB di kemudian hari. Pemilik Rekening Sumber Dana harus sama dengan pemilik rekening Tahapan Berjangka.<br />
                        3.	Setoran Rutin Bulanan adalah setoran dalam jumlah tetap yang dilakukan secara berkala selama periode waktu tertentu yang wajib dibayar oleh nasabah setiap bulan sesuai dengan tanggal autodebet yang dipilih nasabah.<br />
                        4.	Tanggal Jatuh Tempo adalah tanggal berakhirnya pembukaan rekening Tahapan Berjangka dengan mengacu pada jangka waktu yang ditentukan nasabah pada saat pembukaan rekening Tahapan Berjangka.

                    </p>

                    <h6 className=' mt-5'>B. KETENTUAN TAHAPAN BERJANGKA</h6>
                    <p>1.	Tahapan Berjangka diperuntukkan bagi nasabah perorangan yang sudah memiliki Rekening Sumber Dana.<br />
                        2.	Penabung Tahapan Berjangka adalah perorangan WNI yang telah memiliki kartu identitas sesuai ketentuan hukum yang berlaku dengan usia minimal 12 tahun maksimal 60 tahun (selanjutnya disebut "Penabung").<br />
                        3.	Rekening Tahapan Berjangka tidak dapat dibuka dalam bentuk rekening joint account "DAN" maupun "ATAU".<br />
                        4.	Jangka waktu menabung Tahapan Berjangka adalah minimum 12 (dua belas) bulan, maksimum 240 (dua ratus empat puluh) bulan atau sampai Penabung berusia 65 tahun (mana yang lebih awal).<br />
                        5.	Nominal Setoran Rutin Bulanan dan jangka waktu pembukaan rekening Tahapan Berjangka tidak dapat diubah selama pembukaan rekening Tahapan Berjangka.<br />
                        6.	Pembukaan rekening Tahapan Berjangka dapat dilakukan di konter, melalui KlikBank BBB Individu yang terkoneksi dengan Rekening Sumber Dana, atau melalui sarana lain sesuai ketentuan yang berlaku di Bank BBB.<br />
                        7.	Perubahan data rekening Tahapan Berjangka selain nominal Setoran Rutin Bulanan dan jangka waktu pembukaan rekening Tahapan Berjangka dapat dilakukan di konter atau melalui sarana lain yang ditentukan Bank BBB.<br />
                        8.	Atas pembukaan rekening Tahapan Berjangka, Penabung mendapatkan asuransi jiwa senilai total sisa Setoran Rutin Bulanan yang belum disetorkan tanpa dikenai biaya premi, apabila Penabung meninggal dunia sebelum Tanggal Jatuh Tempo.<br />
                        9.	Untuk pelaksanaan transaksi transfer dana antar rekening Bank BBB atau transaksi transfer dana antar bank melalui fasilitas perbankan elektronik Bank BBB atau ATM bank lain, Penabung dengan ini memberikan kuasa kepada Bank BBB untuk:<br />
                        a. 	menampilkan nama dan/atau nomor rekening Penabung pada layar fasilitas perbankan elektronik Bank BBB.<br />
                        b. 	memberikan data nama dan/atau nomor rekening Penabung kepada bank lain untuk ditampilkan pada layar ATM bank lain.
                        Penampilan nama dan/atau nomor rekening sebagaimana dimaksud dalam butir a dan b tersebut dilakukan sebagai sarana konfirmasi kepada nasabah pengirim dana untuk meminimalkan kemungkinan terjadinya salah transfer oleh nasabah pengirim dana.<br />
                        10.	Penabung tidak dapat melakukan penarikan dana sebelum Tanggal Jatuh Tempo. Dalam hal Penabung bermaksud melakukan penarikan dana sebelum Tanggal Jatuh Tempo, Penabung wajib melakukan penutupan rekening Tahapan Berjangka dan akan dikenakan biaya penutupan rekening sesuai ketentuan yang berlaku di Bank BBB.<br />
                        11.	Bank BBB berhak melakukan pemblokiran rekening Penabung, menolak transaksi terhadap rekening Penabung, dan/atau menutup hubungan usaha dengan Penabung dalam hal:<br />
                        a. 	Penabung tidak memenuhi ketentuan hukum yang berlaku;<br />
                        b. 	Penabung tidak memenuhi ketentuan permintaan informasi dan dokumen pendukung sesuai ketentuan hukum yang berlaku;<br />
                        c. 	Penabung diketahui dan/atau patut diduga menggunakan dokumen palsu dan/atau memberikan data yang tidak benar kepada Bank BBB;<br />
                        d. 	Penabung menyampaikan informasi yang diragukan kebenarannya; dan/atau<br />
                        e. 	Penabung memiliki sumber dana transaksi yang diketahui dan/atau patut diduga berasal dari hasil tindak pidana.<br />
                        12.	Penabung dapat mengakses data rekening Tahapan Berjangka secara elektronik (e-statement) melalui KlikBank BBB Individu yang terkoneksi dengan Rekening Sumber Dana.<br />
                        13.	Rekening Tahapan Berjangka akan ditutup otomatis :<br />
                        a. 	pada Tanggal Jatuh Tempo ; atau<br />
                        b. 	Jika terjadi kegagalan autodebet Setoran Rutin Bulanan selama 3 (tiga) bulan berturut-turut.
                        Sehubungan dengan ditutupnya rekening Tahapan Berjangka tersebut maka dana yang ada pada rekening Tahapan Berjangka akan dikreditkan ke Rekening Sumber Dana.<br />
                        14.	Penutupan Tahapan Berjangka sebelum Tanggal Jatuh Tempo akan dikenakan biaya penutupan rekening.<br />
                        15.	Penabung wajib memberitahukan secara tertulis kepada Bank BBB apabila terdapat perubahan data Penabung.<br />
                        16.	Penabung dengan ini memberikan persetujuan kepada Bank BBB untuk memberikan data Penabung kepada pihak lain di luar Bank BBB, yang bekerja sama dengan Bank BBB, dalam rangka kegiatan promosi atau untuk tujuan komersial lainnya.<br />
                        17.	Apabila Penabung meninggal dunia, Bank BBB berhak meminta dokumen-dokumen keahliwarisan yang dipersyaratkan oleh Bank BBB agar Bank BBB dapat mencairkan saldo rekening Tahapan Berjangka kepada ahli waris yang ditentukan dalam dokumen keahliwarisan. Dengan pencairan saldo rekening Tahapan Berjangka milik Penabung yang telah meninggal dunia kepada ahli waris atau kuasanya yang mendapat hak sesuai dengan dokumen keahliwarisan maka Bank BBB dibebaskan dari seluruh tanggung jawab berkaitan dengan rekening Tahapan Berjangka milik Penabung.<br />
                        18.	Selama Penabung masih berutang kepada Bank BBB berdasarkan pinjaman uang, L/C, bank garansi atau jaminan yang diberikan oleh Penabung (borgtocht), bunga, provisi, biaya pembelian buku Cek/Bilyet Giro, meterai, wesel, surat aksep atau surat dagang lain yang ditandatangani oleh Penabung sebagai akseptan, endosan, atau sebagai penarik, avalis atau akibat penggunaan kartu kredit atau biaya-biaya atau kewajiban yang timbul berdasarkan apa pun juga, Bank BBB berhak dan sepanjang perlu dengan ini diberi kuasa oleh Penabung untuk mendebet rekening Penabung dan menggunakannya untuk pembayaran kembali atas setiap jumlah uang yang setiap waktu terutang kepada Bank BBB. Segala akibat yang timbul dari pendebetan rekening Tahapan Bank BBB berdasarkan kuasa dari Penabung tersebut menjadi tanggung jawab Penabung sepenuhnya.<br />
                        19.	Bank BBB berhak melakukan koreksi atas saldo Penabung jika terjadi kesalahan posting yang dilakukan oleh Bank BBB.<br />
                        20.	Penutupan rekening Tahapan Berjangka dapat dilakukan oleh Penabung di kantor cabang Bank BBB dengan membawa asli kartu identitas Penabung yang masih berlaku serta membawa bukti kepemilikan dari Rekening Sumber Dana dan dokumen pendukung lainnya (apabila ada) sesuai ketentuan yang berlaku di Bank BBB.<br />
                        21.	Data terkait rekening Tahapan Berjangka akan disimpan Bank BBB sesuai ketentuan yang berlaku.<br />
                        22.	Rekening Tahapan Berjangka tidak diikutsertakan dalam program undian Bank BBB.<br />
                        23.	Rekening Tahapan Berjangka tidak dapat digunakan untuk autodebet.<br />
                        24.	Rekening Tahapan Berjangka dapat menerima setoran sewaktu-waktu, tetapi tidak dapat ditarik sebelum Tanggal Jatuh Tempo. Setoran yang diterima rekening Tahapan Berjangka diluar Setoran Rutin Bulanan tidak mengurangi nominal atas Setoran Rutin Bulanan dan tidak akan mengubah tiering bunga atas rekening Tahapan Berjangka.<br />
                        25.	Bank BBB melakukan penawaran produk/layanan via sarana komunikasi pribadi. Apabila Penabung tidak setuju, Penabung dapat menghubungi Halo Bank BBB di nomor 1500888.<br />
                        26.	Simpanan dana Penabung pada Bank BBB dijamin oleh Lembaga Penjamin Simpanan (LPS) sesuai dengan nilai batas maksimal yang dijamin oleh LPS. LPS tidak menjamin simpanan dengan suku bunga yang melebihi suku bunga yang ditetapkan oleh LPS.<br />
                        27.	Dengan membuka rekening Tahapan Berjangka maka Penabung tunduk dan menyetujui Ketentuan Tahapan Berjangka ini. Bank BBB berhak untuk mengubah ketentuan-ketentuan terkait rekening Tahapan Berjangka yang akan diberitahukan oleh Bank BBB dalam bentuk dan melalui sarana apa pun sesuai ketentuan hukum yang berlaku.
                    </p>
                    <h6 className=' mt-5'>C. PENYETORAN DAN PENARIKAN DANA</h6>

                    <p>1.	Setoran Rutin Bulanan Tahapan Berjangka adalah minimum Rp 500.000,00 (lima ratus ribu rupiah), dengan kelipatan Rp 50.000,00 (lima puluh ribu rupiah).<br />
                        2.	Setoran Rutin Bulanan dilakukan secara autodebet dari Rekening Sumber Dana dengan ketentuan sebagai berikut :<br />
                        a. 	untuk pembukaan rekening Tahapan Berjangka melalui konter, autodebet Setoran Rutin Bulanan untuk bulan pertama dilakukan pada hari pembukaan rekening Tahapan Berjangka.<br />
                        b. 	untuk pembukaan rekening Tahapan Berjangka melalui KlikBank BBB Individu, autodebet Setoran Rutin Bulanan untuk bulan pertama akan dilakukan pada saat pembukaan rekening Tahapan Berjangka berhasil dilakukan.<br />
                        c. 	Autodebet Setoran Rutin Bulanan selanjutnya akan dilakukan pada tanggal yang dipilih oleh penabung.<br />
                        d. 	Tanggal autodebet dibatasi sampai dengan tanggal 30 setiap bulannya.<br />
                        e. 	Jika tanggal autodebet yang dipilih Penabung adalah tanggal 29 atau 30, maka khusus untuk bulan Februari proses autodebet akan dilakukan pada tanggal 28 atau 29.<br />
                        f. 	Jika tanggal autodebet Setoran Rutin Bulanan selanjutnya jatuh pada hari libur, maka autodebet Setoran Rutin Bulanan selanjutnya tersebut akan dilakukan pada hari kerja pertama setelah hari libur.<br />
                        g. 	Jika terjadi gagal autodebet , maka akan dilakukan autodebet ulang pada akhir bulan berjalan.<br />
                        3.	Penyetoran di luar Setoran Rutin Bulanan dapat dilakukan bebas setiap saat selama konter buka pada waktu jam kerja Bank BBB atau melalui mesin setoran tunai (Cash Deposit Machine), atau melalui channel lainnya.
                    </p>

                    <h6 className=' mt-5'>D. PERHITUNGAN DAN PEMBAYARAN BUNGA</h6>
                    <p>1.	Rekening Tahapan Berjangka diberikan bunga berjenjang (tiering) berdasarkan nominal Setoran Rutin Bulanan dan dikenakan pajak sesuai ketentuan yang berlaku. Tiering bunga floating atau dapat berubah sesuai fluktuasi pasar yang akan diberitahukan oleh Bank BBB kepada Penabung dalam bentuk dan melalui sarana apa pun sesuai ketentuan yang berlaku.<br />
                        2.	Pemberian bunga akan dilakukan pada akhir bulan dari bulan yang bersangkutan dan langsung dikreditkan atau ditambahkan pada saldo rekening Penabung yang tercatat pada pembukuan Bank BBB.<br />
                        3.	Setiap pendapatan bunga akan dikenakan pajak sesuai ketentuan perpajakan yang berlaku dan akan dibebankan kepada Penabung.
                    </p>
                    <h6 className=' mt-5'>E. PENANGANAN KELUHAN (PENGADUAN)</h6>
                    <p>1.	Keluhan/pengaduan kepada Bank BBB sehubungan dengan rekening Tahapan Berjangka dapat disampaikan oleh Penabung kepada kantor cabang Bank BBB atau kepada HALO Bank BBB. Untuk keperluan penanganan keluhan/pengaduan tersebut, Bank BBB berhak meminta Penabung untuk menyerahkan fotokopi identitas diri Penabung dan dokumen pendukung lainnya.<br />
                        2.	Bank BBB akan menanggapi keluhan tersebut sesuai dengan ketentuan hukum yang berlaku.<br />
                        3.	Setiap keluhan terkait rekening Tahapan Berjangka harus disampaikan oleh Penabung kepada Bank BBB dalam waktu selambat-lambatnya 3 (tiga) bulan sejak tanggal transaksi.<br />

                        Penabung dengan ini menyatakan telah memahami sepenuhnya dan menyetujui Ketentuan Tahapan Berjangka PT BANK BUKAN BANK BIASA Tbk ("Bank BBB") sebagaimana tersebut di atas dan Bank BBB telah memberikan penjelasan dan meminta konfirmasi kepada Penabung atas penjelasan tentang manfaat, biaya, dan risiko terkait dengan rekening Tahapan Berjangka.
                    </p>
                    <button style={{background:'#8A05BE', color:'white',borderRadius:3, paddingLeft:40, paddingRight:40}} onClick={handleClick} type='submit'> Setuju</button>
                </div>
            </div>
        </div>
        <Footer />
    </>
)

}