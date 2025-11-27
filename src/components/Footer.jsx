import '../App.css'

function Footer({ participantes }) {
  if (!participantes || participantes.length === 0) return null;

  const total = participantes.reduce((acc, p) => acc + p.aporte, 0);
  const promedio = total / participantes.length;

  const balance = participantes.map((p) => ({
    nombre: p.nombre,
    debe: +(promedio - p.aporte).toFixed(2),
  }));

  const deudores = balance.filter((b) => b.debe > 0);
  const acreedores = balance.filter((b) => b.debe < 0);

  const transacciones = [];
  let d = 0, a = 0;

  while (d < deudores.length && a < acreedores.length) {
    const cantidad = Math.min(deudores[d].debe, Math.abs(acreedores[a].debe));

    transacciones.push({
      deudor: deudores[d].nombre,
      acreedor: acreedores[a].nombre,
      monto: cantidad.toFixed(2),
    });

    deudores[d].debe -= cantidad;
    acreedores[a].debe += cantidad;

    if (deudores[d].debe < 0.01) d++;
    if (acreedores[a].debe > -0.01) a++;
  }

  return (
    <footer className="footer-balance">
      <h3>💸 Balance final</h3>
      <p>Total gastado: €{total.toFixed(2)}</p>
      <p>Promedio por persona: €{promedio.toFixed(2)}</p>

      <ul>
        {transacciones.length === 0 ? (
          <li>Todo está equilibrado ✨</li>
        ) : (
          transacciones.map((t, i) => (
            <li key={i}>
              {t.deudor} le debe €{t.monto} a {t.acreedor}
            </li>
          ))
        )}
      </ul>
    </footer>
  );
}

export default Footer;
