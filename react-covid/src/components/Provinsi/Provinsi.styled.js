import styled from "styled-components";

const ProvinsiStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 5rem;

  
  .provinsi__title {
    font-size: 2.441rem;
    color: #06D6A0;
    margin-bottom: 0;
    margin-top: 5rem;
    text-align: center;
  }
  
  .provinsi__caption {
    color: #118AB2;
    margin-top: 1rem;
    margin-bottom: 3rem;
    font-size: 1.59rem;
    text-align: center;
  }
  
  #customers {
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 80%;
}

#customers td, #customers th {
  border: 1px solid #ddd;
  padding: 8px;
}

#customers tr:nth-child(even){background-color: #f2f2f2;}

#customers tr:hover {background-color: #ddd;}

#customers th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: #04AA6D;
  color: white;
}
 
`;

export default ProvinsiStyled;