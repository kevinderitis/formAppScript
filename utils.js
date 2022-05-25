
const getResultJson = async data => {
    let fecha = data[0];
    let actitud = (data[1] + data[2] + data[3] + data[4] + data[5] + data[6]) * 0.6;
    let motivacion = (data[7] + data[8] + data[9]) * 0.6;
    let metas = (data[10] + data[11] + data[12]) * 0.6;
    let habSociales = (data[13] + data[14] + data[15]) * 0.6;
    let dialogos =  (data[16] + data[17] + data[18]) * 0.6;
    let imagineria = (data[19] + data[20] + data[21]) * 0.6;
    let ansiedad = (data[22] + data[23] + data[24]) * 0.6;
    let emociones = (data[25] + data[26]) * 0.6;
    let concentracion = (data[27] + data[28] + data[20] + data[30]) * 0.6;

    let jsonData = {
        mail: "ultimo@mail.com",
        fecha,
        actitud,
        motivacion,
        metas,
        habSociales,
        dialogos,
        imagineria,
        ansiedad,
        emociones,
        concentracion
    }
   
    return jsonData;
}


const getResultFake = async data => {
  let fecha = 'fecha';
  let actitud = 60;
  let motivacion = 55;
  let metas = 10;
  let habSociales = 1;
  let dialogos =  2;
  let imagineria = 3;
  let ansiedad = 4;
  let emociones = 5;
  let concentracion = 6;

  let jsonData = {
      fecha,
      actitud,
      motivacion,
      metas,
      habSociales,
      dialogos,
      imagineria,
      ansiedad,
      emociones,
      concentracion
  }
 
  return jsonData;
}

module.exports = { getResultJson, getResultFake };