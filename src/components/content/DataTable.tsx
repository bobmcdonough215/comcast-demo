interface DataTableProps {
  caption: string;
  headers: string[];
  rows: string[][];
  highlightColumn?: number;
}

export default function DataTable({ caption, headers, rows, highlightColumn }: DataTableProps) {
  return (
    <div className="overflow-x-auto mb-8 rounded-lg border border-white/5">
      <table className="w-full text-sm">
        <caption className="text-left text-xs text-slate-500 px-4 py-2 bg-navy-light/50">
          {caption}
        </caption>
        <thead>
          <tr className="border-b border-white/10 bg-navy-light">
            {headers.map((header, i) => (
              <th
                key={i}
                scope="col"
                className={`text-left px-4 py-3 text-xs font-semibold uppercase tracking-wide text-slate-400 ${
                  highlightColumn === i ? 'text-cyan' : ''
                }`}
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIdx) => (
            <tr
              key={rowIdx}
              className={`border-b border-white/5 ${
                rowIdx % 2 === 0 ? 'bg-transparent' : 'bg-white/[0.02]'
              }`}
            >
              {row.map((cell, cellIdx) => (
                <td
                  key={cellIdx}
                  className={`px-4 py-2.5 text-slate-300 ${
                    highlightColumn === cellIdx ? 'text-cyan font-medium' : ''
                  } ${cellIdx === 0 ? 'font-medium text-white' : ''}`}
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
