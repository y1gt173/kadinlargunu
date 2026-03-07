
const kutular = document.querySelectorAll('.kutu');

kutular.forEach(kutu => {
  kutu.addEventListener('click', () => {
    kutu.classList.toggle('active');
  });
});

// Buraya mesajını yazabilirsin
const mesaj = "Türk Kadını; tarih boyunca cesaretin fedakarlığın ve gücün simgesi olmuştur sadece bir anne, bir eş yada bir kardeş değil; aynı zamanda bir milletin en büyük dayanağıdır Çanakkale Savaşı sırasında cepheye mermi taşıyan, yaralı askerleri iyileştiren, yokluk içinde bile vatanı için mücadele eden kahraman kadınlarımız bunun en büyük kanıtıdır. Onlar; cephede asker kadar cesur, evinde anne kadar şefkatli, toplumda ise bir milletin geleceğini şekillendirecek kadar güçlüdür. Bugün sahip olduğumuz birçok değerin temelinde, fedakâr Türk kadınlarının emeği ve mücadelesi vardır. Bu yüzden bugün sadece bir kutlama değil, aynı zamanda minnet ve saygı günüdür. Başta şehit anneleri olmak üzere, tarihe iz bırakmış tüm kahraman kadınlarımızı saygıyla anıyor, tüm kadınların 8 Mart Dünya Kadınlar Günü’nü yürekten kutluyoruz. 🌷";
document.querySelector('.message-content').textContent = mesaj;


const btn = document.getElementById("surpriseBtn");
const bouquet = document.getElementById("bouquet");

btn.onclick = function(){

bouquet.style.visibility = "visible";
bouquet.style.opacity = "1";

}

