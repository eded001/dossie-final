import dossie from './shared/dossie-data.json';

export default function DossieEleitoral() {
  const data = dossie || {};

  return (
    <div className="min-h-screen p-4 font-['Roboto_Condensed',sans-serif]">
      <div className="w-[210mm] h-[297mm] mx-auto bg-white p-[7mm_10mm] flex flex-col gap-[6px] relative print:m-0 print:shadow-none print:p-[7mm_10mm]">

        {/* CABEÇALHO */}
        <div className="flex justify-between items-end border-b-[4px] border-[#ffcc00] pb-1.5 min-h-[58px]">
          <div className="bg-[#002266] text-[#ffcc00] text-[24pt] font-black px-4 py-1 border-[3px] border-[#ffcc00] rounded flex items-center justify-center leading-none">
            CS
          </div>
          <div className="text-right flex flex-col items-end justify-end">
            <h1 className="text-[29pt] font-black text-[#002266] uppercase leading-[0.85] m-0">
              {data.cidade.nome}
            </h1>
            <div className="bg-[#002266] text-white px-3 py-1 font-bold text-[10pt] rounded mt-1 uppercase tracking-wide">
              {data.cidade.metaInfo}
            </div>
          </div>
        </div>

        {/* PRESIDENTE 2022 */}
        <div className="border border-[#bbb] rounded overflow-hidden bg-white shadow-sm">
          <div className="bg-[#002266] text-white text-[9.5pt] font-black uppercase px-2.5 py-1 border-b-[2px] border-[#ffcc00] flex items-center gap-2 h-[26px]">
            <i className="fas fa-landmark text-[8.5pt]"></i> {data.presidente2022.titulo}
          </div>
          <table className="w-full border-collapse text-[9pt]">
            <tbody>
              {data.presidente2022.candidatos.map((candidato) => (
                <tr key={candidato.posicao} className={candidato.eleito ? "bg-[#e6f7e9] font-bold text-black" : ""}>
                  <td className="w-[30px] text-center font-bold text-[#555] text-[8.5pt] bg-[#f9f9f9] border-r border-[#eee] py-1 px-1.5 border-b border-[#ddd] last:border-b-0">
                    {candidato.posicao}º
                  </td>
                  <td className="font-semibold pl-2 whitespace-nowrap overflow-hidden text-ellipsis py-1 px-1.5 border-b border-[#ddd] last:border-b-0">
                    {candidato.nome} ({candidato.partido})
                  </td>
                  <td className="text-right font-black text-[#002266] font-mono text-[9.5pt] py-1 px-1.5 border-b border-[#ddd] last:border-b-0">
                    {candidato.votos} ({candidato.percentual})
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* GRID 2 COLUNAS - GOVERNADOR E PREFEITO */}
        <div className="grid grid-cols-2 gap-[10px] w-full">
          {/* GOVERNADOR */}
          <div className="border border-[#bbb] rounded overflow-hidden bg-white shadow-sm">
            <div className="bg-[#002266] text-white text-[9.5pt] font-black uppercase px-2.5 py-1 border-b-[2px] border-[#ffcc00] flex items-center gap-2 h-[26px]">
              <i className="fas fa-user-tie text-[8.5pt]"></i> {data.governador2022.titulo}
            </div>
            <table className="w-full border-collapse text-[9pt]">
              <tbody>
                {data.governador2022.candidatos.map((candidato, idx) => (
                  <tr key={candidato.posicao} className={idx === 0 ? "bg-[#e6f7e9] font-bold text-black" : ""}>
                    <td className="w-[30px] text-center font-bold text-[#555] text-[8.5pt] bg-[#f9f9f9] border-r border-[#eee] py-1 px-1.5 border-b border-[#ddd] last:border-b-0">
                      {candidato.posicao}º
                    </td>
                    <td className="font-semibold pl-2 whitespace-nowrap overflow-hidden text-ellipsis py-1 px-1.5 border-b border-[#ddd] last:border-b-0">
                      {candidato.nome} ({candidato.partido})
                    </td>
                    <td className="text-right font-black text-[#002266] font-mono text-[9.5pt] py-1 px-1.5 border-b border-[#ddd] last:border-b-0">
                      {candidato.votos} ({candidato.percentual})
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* PREFEITO */}
          <div className="border border-[#bbb] rounded overflow-hidden bg-white shadow-sm">
            <div className="bg-[#002266] text-white text-[9.5pt] font-black uppercase px-2.5 py-1 border-b-[2px] border-[#ffcc00] flex items-center gap-2 h-[26px]">
              <i className="fas fa-building text-[8.5pt]"></i> {data.prefeito2024.titulo}
            </div>
            <table className="w-full border-collapse text-[9pt]">
              <tbody>
                {data.prefeito2024.candidatos.map((candidato, idx) => (
                  <tr key={candidato.posicao} className={idx === 0 ? "bg-[#e6f7e9] font-bold text-black" : ""}>
                    <td className="w-[30px] text-center font-bold text-[#555] text-[8.5pt] bg-[#f9f9f9] border-r border-[#eee] py-1 px-1.5 border-b border-[#ddd] last:border-b-0">
                      {candidato.posicao}º
                    </td>
                    <td className="font-semibold pl-2 whitespace-nowrap overflow-hidden text-ellipsis py-1 px-1.5 border-b border-[#ddd] last:border-b-0">
                      {candidato.nome} ({candidato.partido})
                    </td>
                    <td className="text-right font-black text-[#002266] font-mono text-[9.5pt] py-1 px-1.5 border-b border-[#ddd] last:border-b-0">
                      {candidato.votos} ({candidato.percentual})
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* VEREADORES */}
        <div className="border border-[#bbb] rounded overflow-hidden bg-white shadow-sm">
          <div className="bg-[#002266] text-white text-[9.5pt] font-black uppercase px-2.5 py-1 border-b-[2px] border-[#ffcc00] flex items-center gap-2 h-[26px]">
            <i className="fas fa-users text-[8.5pt]"></i> {data.vereadores2024.titulo}
          </div>
          <div className="grid grid-cols-2 gap-[10px] p-0">
            <table className="w-full border-collapse text-[9pt]">
              <tbody>
                {data.vereadores2024.candidatos.slice(0, 8).map((candidato) => (
                  <tr key={candidato.posicao} className={candidato.posicao <= 3 ? "bg-[#e6f7e9] font-bold text-black" : ""}>
                    <td className="w-[30px] text-center font-bold text-[#555] text-[8.5pt] bg-[#f9f9f9] border-r border-[#eee] py-1 px-1.5 border-b border-[#ddd] last:border-b-0">
                      {candidato.posicao}º
                    </td>
                    <td className="font-semibold pl-2 whitespace-nowrap overflow-hidden text-ellipsis py-1 px-1.5 border-b border-[#ddd] last:border-b-0 text-[8.5pt]">
                      {candidato.nome} ({candidato.partido}) ({candidato.status})
                    </td>
                    <td className="text-right font-black text-[#002266] font-mono text-[9.5pt] py-1 px-1.5 border-b border-[#ddd] last:border-b-0">
                      {candidato.votos}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <table className="w-full border-collapse text-[9pt]">
              <tbody>
                {data.vereadores2024.candidatos.slice(8, 15).map((candidato) => (
                  <tr key={candidato.posicao}>
                    <td className="w-[30px] text-center font-bold text-[#555] text-[8.5pt] bg-[#f9f9f9] border-r border-[#eee] py-1 px-1.5 border-b border-[#ddd] last:border-b-0">
                      {candidato.posicao}º
                    </td>
                    <td className="font-semibold pl-2 whitespace-nowrap overflow-hidden text-ellipsis py-1 px-1.5 border-b border-[#ddd] last:border-b-0 text-[8.5pt]">
                      {candidato.nome} ({candidato.partido}) ({candidato.status})
                    </td>
                    <td className="text-right font-black text-[#002266] font-mono text-[9.5pt] py-1 px-1.5 border-b border-[#ddd] last:border-b-0">
                      {candidato.votos}
                    </td>
                  </tr>
                ))}
                <tr>
                  <td colSpan="3" className="h-[33px] border-0"></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* FEDERAL E ESTADUAL */}
        <div className="grid grid-cols-2 gap-[10px] w-full">
          {/* FEDERAL */}
          <div className="border border-[#bbb] rounded overflow-hidden bg-white shadow-sm">
            <div className="bg-[#002266] text-white text-[9.5pt] font-black uppercase px-2.5 py-1 border-b-[2px] border-[#ffcc00] flex items-center gap-2 h-[26px]">
              <i className="fas fa-university text-[8.5pt]"></i> {data.deputadoFederal2022.titulo}
            </div>
            <table className="w-full border-collapse text-[9pt]">
              <tbody>
                {data.deputadoFederal2022.candidatos.map((candidato, idx) => (
                  <tr key={candidato.posicao} className={idx === 0 ? "bg-[#e6f7e9] font-bold text-black" : ""}>
                    <td className="w-[30px] text-center font-bold text-[#555] text-[8.5pt] bg-[#f9f9f9] border-r border-[#eee] py-0.5 px-1.5 border-b border-[#ddd] last:border-b-0">
                      {candidato.posicao}º
                    </td>
                    <td className="font-semibold pl-2 whitespace-nowrap overflow-hidden text-ellipsis py-0.5 px-1.5 border-b border-[#ddd] last:border-b-0 text-[8.5pt]">
                      {candidato.nome} ({candidato.partido})
                    </td>
                    <td className="text-right font-black text-[#002266] font-mono text-[9.5pt] py-0.5 px-1.5 border-b border-[#ddd] last:border-b-0">
                      {candidato.votos} ({candidato.percentual})
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="bg-[#f4f6f8] border-t border-[#ddd] px-2 py-1 text-[7pt] text-[#333] leading-tight">
              <span className="text-[#002266] font-black uppercase mr-1">* SUPLENTES (Não Eleitos):</span>
              {data.deputadoFederal2022.suplentes.map((sup, idx) => (
                <span key={idx}>
                  {sup.nome} | {sup.partido} | {sup.votos}
                  {idx < data.deputadoFederal2022.suplentes.length - 1 ? ' ; ' : ''}
                </span>
              ))}
            </div>
          </div>

          {/* ESTADUAL */}
          <div className="border border-[#bbb] rounded overflow-hidden bg-white shadow-sm">
            <div className="bg-[#002266] text-white text-[9.5pt] font-black uppercase px-2.5 py-1 border-b-[2px] border-[#ffcc00] flex items-center gap-2 h-[26px]">
              <i className="fas fa-flag text-[8.5pt]"></i> {data.deputadoEstadual2022.titulo}
            </div>
            <table className="w-full border-collapse text-[9pt]">
              <tbody>
                {data.deputadoEstadual2022.candidatos.map((candidato, idx) => (
                  <tr key={candidato.posicao} className={idx === 0 ? "bg-[#e6f7e9] font-bold text-black" : ""}>
                    <td className="w-[30px] text-center font-bold text-[#555] text-[8.5pt] bg-[#f9f9f9] border-r border-[#eee] py-0.5 px-1.5 border-b border-[#ddd] last:border-b-0">
                      {candidato.posicao}º
                    </td>
                    <td className="font-semibold pl-2 whitespace-nowrap overflow-hidden text-ellipsis py-0.5 px-1.5 border-b border-[#ddd] last:border-b-0 text-[8.5pt]">
                      {candidato.nome} ({candidato.partido})
                    </td>
                    <td className="text-right font-black text-[#002266] font-mono text-[9.5pt] py-0.5 px-1.5 border-b border-[#ddd] last:border-b-0">
                      {candidato.votos} ({candidato.percentual})
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="bg-[#f4f6f8] border-t border-[#ddd] px-2 py-1 text-[7pt] text-[#333] leading-tight">
              <span className="text-[#002266] font-black uppercase mr-1">* SUPLENTES (Relevantes):</span>
              {data.deputadoEstadual2022.suplentes.map((sup, idx) => (
                <span key={idx}>
                  {sup.nome} | {sup.partido} | {sup.votos}
                  {idx < data.deputadoEstadual2022.suplentes.length - 1 ? ' ; ' : ''}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* CELSO SABINO */}
        <div className="border-[3px] border-[#ffcc00] bg-gradient-to-r from-white to-[#fffbf0] p-[50px_16px] flex items-center justify-between rounded-lg min-h-[72px]">
          <div className="flex-1">
            <h3 className="m-0 mb-1 text-[#002266] text-[11pt] uppercase font-black flex items-center gap-2">
              <i className="fas fa-chart-line text-[9pt]"></i> {data.celsoSabino.titulo}
            </h3>
            <div className="text-[9pt] leading-tight text-[#333]">
              2018: <strong>{data.celsoSabino.dados.ano2018.votos}</strong> ({data.celsoSabino.dados.ano2018.observacao}) |
              2022: <strong>{data.celsoSabino.dados.ano2022.votos} ({data.celsoSabino.dados.ano2022.percentual})</strong><br />
              Crescimento: <span className={`font-black text-[10pt] px-1 rounded ${data.celsoSabino.dados.crescimento.tipo === 'negativo'
                  ? 'text-[#cc0000] bg-[#ffe6e6]'
                  : 'text-[#00802b] bg-[#e6f7e9]'
                }`}>
                {data.celsoSabino.dados.crescimento.descricao}
              </span><br />
              Total Acumulado: <strong>{data.celsoSabino.dados.totalAcumulado} Votos</strong>
            </div>
          </div>
          <div className="flex items-end gap-4 h-[48px] pb-1">
            <div className="text-center text-[7pt] font-bold text-[#444] flex flex-col items-center gap-0.5">
              <div
                className="w-[30px] bg-[#999] border border-[#666] rounded-t"
                style={{ height: `${data.celsoSabino.grafico.altura2018}px` }}
              ></div>
              <span>2018</span>
            </div>
            <div className="text-center text-[7pt] font-bold text-[#444] flex flex-col items-center gap-0.5">
              <div
                className="w-[30px] bg-[#002266] border border-[#001a4d] rounded-t"
                style={{ height: `${data.celsoSabino.grafico.altura2022}px` }}
              ></div>
              <span>2022</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}