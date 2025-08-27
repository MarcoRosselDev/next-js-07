export default function Tablas() {
  return (
    <>
      {/* tablas 
      * si quieres con intercalacion de color en el background aplicar la clase 
      * table-striped en la etiqueta table junto a la className table, asi:
      * className="table table-striped"
      * si quieres las columnas aplicar
      * table-striped-columns
      * table-hover esta bien cool, si pasamos el mouse se osucrece el background
      */}
      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>John</td>
            <td>Doe</td>
            <td>@social</td>
          </tr>
          {/* opciones de colores de tablas */}
          <tr>
            <th scope="row">4</th>
            <td className="table-primary">a</td>
            <td className="table-secondary">b</td>
            <td className="table-success">c</td>
            <td className="table-danger">d</td>
            <td className="table-warning">e</td>
            <td className="table-info">f</td>
            <td className="table-light">g</td>
            <td className="table-dark">h</td>
          </tr>
        </tbody>
      </table>
      
    </>
  )
}