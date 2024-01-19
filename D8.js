function organizeGifts(gifts) {
  let descripcion = "";
  gifts = gifts.split("");
  let number = "";
  for (let gift of gifts)
    if (isNaN(gift)) {
      let cRegalos = Number.parseInt(number);
      number = "";
      let pale = Math.floor(cRegalos / 50);
      let sPale = "[" + gift + "]";
      let sPaleR = sPale.repeat(pale);
      let caja = Math.floor((cRegalos - pale * 50) / 10);
      let sCaja = "{" + gift + "}";
      let sCajaR = sCaja.repeat(caja);
      let bolsa = (cRegalos - pale * 50) % 10;
      let sbolsa = bolsa > 0 ? "(" + gift.repeat(bolsa) + ")" : "";
      descripcion += sPaleR + sCajaR + sbolsa;
    } else {
      number += gift;
    }
  return descripcion;
}
console.log(organizeGifts("177a8m"));
