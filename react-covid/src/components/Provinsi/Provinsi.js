import ProvinsiStyled from "./Provinsi.styled";

function Provinsi({provinces}) {
    return (
      <ProvinsiStyled>
          <h1 className="provinsi__title">Provinsi</h1>
          <h3 className="provinsi__caption">Data Covid Berdasarkan Provinsi</h3>
          <table id="customers">
            <tr>
                <th>Provinsi</th>
                <th>Positif</th>
                <th>Sembuh</th>
                <th>Dirawat</th>
                <th>Meninggal</th>
            </tr>
            {provinces.map((provinsi) => {
                return(
                    <tr>
                    <td>{provinsi.kota}</td>
                    <td>{provinsi.kasus}</td>
                    <td>{provinsi.sembuh}</td>
                    <td>{provinsi.dirawat}</td>
                    <td>{provinsi.meninggal}</td>
                </tr>
                )
               
            })}
            
            </table>

        </ProvinsiStyled>
          );
}


export default Provinsi;