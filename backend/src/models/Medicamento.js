import { sql, getConnection } from "../config/db.js";


const getAllMedicamentos = async () => {
  try {
    const con = await getConnection();
    const resultado = await con.request().execute("sp_ListarMedicamentos");
    return resultado.recordset;
  } catch (error) {
    console.error("Error al obtener los medicamentos:", error);
    throw new Error("No se pudieron obtener los medicamentos desde la base de datos");
  }
};


// ✅ Insertar un nuevo medicamento
export const insertMedicamento = async (medicamento) => {
  const { Nombre, Descripcion, Precio, Stock, Imagen, IdCategoria } = medicamento;

  try {
    const con = await getConnection();
    await con
      .request()
      .input("Nombre", sql.VarChar(100), Nombre)
      .input("Descripcion", sql.VarChar(255), Descripcion)
      .input("Precio", sql.Decimal(10, 2), Precio)
      .input("Stock", sql.Int, Stock)
      .input("Imagen", sql.VarChar(255), Imagen)
      .input("IdCategoria", sql.Int, IdCategoria)
      .query(`
        INSERT INTO Medicamentos (Nombre, Descripcion, Precio, Stock, Imagen, IdCategoria)
        VALUES (@Nombre, @Descripcion, @Precio, @Stock, @Imagen, @IdCategoria)
      `);
  } catch (error) {
    console.error("Error al insertar medicamento:", error);
    throw new Error("No se pudo insertar el medicamento");
  }
};

// ✅ Editar un medicamento existente
export const editarMedicamento = async (id, medicamento) => {
  const { Nombre, Descripcion, Precio, Stock, Imagen, IdCategoria } = medicamento;

  try {
    const con = await getConnection();
    await con
      .request()
      .input("IdMedicamento", sql.Int, id)
      .input("Nombre", sql.VarChar(100), Nombre)
      .input("Descripcion", sql.VarChar(255), Descripcion)
      .input("Precio", sql.Decimal(10, 2), Precio)
      .input("Stock", sql.Int, Stock)
      .input("Imagen", sql.VarChar(255), Imagen)
      .input("IdCategoria", sql.Int, IdCategoria)
      .query(`
        UPDATE Medicamentos
        SET Nombre = @Nombre,
            Descripcion = @Descripcion,
            Precio = @Precio,
            Stock = @Stock,
            Imagen = @Imagen,
            IdCategoria = @IdCategoria
        WHERE IdMedicamento = @IdMedicamento
      `);
  } catch (error) {
    console.error("Error al editar medicamento:", error);
    throw new Error("No se pudo editar el medicamento");
  }
};

// ✅ Eliminar un medicamento
export const deleteMedicamento = async (id) => {
  try {
    const con = await getConnection();
    await con
      .request()
      .input("IdMedicamento", sql.Int, id)
      .query("DELETE FROM Medicamentos WHERE IdMedicamento = @IdMedicamento");
  } catch (error) {
    console.error("Error al eliminar medicamento:", error);
    throw new Error("No se pudo eliminar el medicamento");
  }
};

export { getAllMedicamentos };

