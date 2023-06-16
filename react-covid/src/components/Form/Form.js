import { useState } from "react";
import styles from "./Form.module.css";
import Alert from "../Alert/Alert";

function Form({provinces, setProvinces}) {

  const [provinsi, setProvinsi] = useState("");
  const [status, setStatus] = useState("");
  const [jumlah, setJumlah] = useState("");

  const [isProvinsiError, setIsProvinsiError] = useState(false);
  const [isStatusError, setIsStatusError] = useState(false);
  const [isJumlahError, setIsJumlahError] = useState(false);


  function handleProvinsi(e) {

    setProvinsi(e.target.value);
  }


  function handleStatus(e) {

    setStatus(e.target.value);
  }


  function handleJumlah(e) {
   
    setJumlah(e.target.value);
  }


  function handleSubmit(e) {
    
    e.preventDefault();

    //validasi
    // Jika provinsi kosong, set isProvinsiError true
    if (provinsi === "") {
      setIsProvinsiError(true);
    }
    // Jika status kosong, set isStatusError true
    else if (status === "") {
      setIsStatusError(true);
      setIsProvinsiError(false);
    }
    
    // Jika jumlah kosong, set isJumlahError true
    else if (jumlah === "") {
      setIsJumlahError(true);
      setIsStatusError(false);
    }

    // Jika tidak, maka push provinces dan set error false
    else {
        let dataCovid = provinces.map((data) => ({ ...data }));
        const update = dataCovid.find((data) => data.kota === provinsi);
        if (update) {
          if (status === "kasus") {
            update.kasus += Number(jumlah);
          } else if (status === "sembuh") {
            update.sembuh += Number(jumlah);
          } else if (status === "dirawat") {
            update.dirawat += Number(jumlah);
          } else if (status === "meninggal") {
            update.meninggal += Number(jumlah);
          } else {
            if (status === "kasus") {
              dataCovid.push({
                newData: {
                  kota: provinsi,
                  kasus: Number(jumlah),
                  sembuh: 0,
                  meninggal: 0,
                  dirawat: 0,
                },
              });
            } else if (status === "sembuh") {
              dataCovid.push({
                newData: {
                  kota: provinsi,
                  kasus: 0,
                  sembuh: Number(jumlah),
                  meninggal: 0,
                  dirawat: 0,
                },
              });
            } else if (status === "dirawat") {
              dataCovid.push({
                newData: {
                  kota: provinsi,
                  kasus: 0,
                  sembuh: 0,
                  meninggal: 0,
                  dirawat: Number(jumlah),
                },
              });
            } else if (status === "meninggal") {
              dataCovid.push({
                newData: {
                  kota: provinsi,
                  kasus: 0,
                  sembuh: 0,
                  meninggal: Number(jumlah),
                  dirawat: 0,
                },
              });
            }
          }
        }
        setProvinces(dataCovid);
  
        setIsProvinsiError(false);
        setIsStatusError(false);
        setIsJumlahError(false);
    }
  }

  return (
    <div className={styles.container}>
      <section className={styles.form}>
        <div className={styles.form__left}>
          <img
            className={styles.form__image}
            src={`${process.env.PUBLIC_URL}/img/undraw_medical_research_qg4d.png`}
            alt=""
          />
        </div>
        <div className={styles.form__right}>
          <h2 className={styles.form__title}>Form Covid</h2>
          <form onSubmit={handleSubmit}>

            <div className={styles.form__group}>
              <label htmlFor="provinsi" className={styles.form__label}>
                Provinsi
              </label>
              <select name="provinsi" id="provinsi" className={styles.form__input} value={provinsi} onChange={handleProvinsi}>
                {provinces.map((data) => {
                    return <option value={data.kota}>{data.kota}</option>
                })}
              </select>
              {isProvinsiError && <Alert>Provinsi Wajib Diisi</Alert>}
            </div>

            <div className={styles.form__group}>
              <label htmlFor="status" className={styles.form__label}>
                Status
              </label>
              <select name="status" id="status" className={styles.form__input} value={status} onChange={handleStatus}>
                <option value="kasus">Positif</option>
                <option value="sembuh">Sembuh</option>
                <option value="dirawat">Dirawat</option>
                <option value="meninggal">Meninggal</option>
              </select>
              {isStatusError && <Alert>Status Wajib Diisi</Alert>}
            </div>

            <div className={styles.form__group}>
              <label htmlFor="jumlah" className={styles.form__label}>
                Jumlah
              </label>
              <input
                id="jumlah"
                className={styles.form__input}
                type="text"
                name="jumlah"
                // Memberikan value input: jumlah
                value={jumlah}
                // Memberikan event onChange
                onChange={handleJumlah}
              />
              {isJumlahError && <Alert>Jumlah Wajib Diisi</Alert>}
            </div>

            <div>
              <button className={styles.form__button}>Submit</button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}

export default Form;