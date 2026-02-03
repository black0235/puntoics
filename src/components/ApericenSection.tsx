import { Badge } from "./Badge";

export default function ApericenaSection() {
  return (
    <section className="rounded-2xl bg-white border border-neutral-200 p-6 shadow-sm space-y-4">
      {/* TITLE */}
      <div className="flex flex-col gap-2">
        <h2 className="text-2xl font-semibold">Apericena</h2>

        <div className="flex flex-wrap gap-2">
          <Badge variant="recommended">Disponibile tutti i giorni</Badge>
          <Badge variant="spicy">Minimo 2 persone</Badge>
          <Badge variant="price">Sabato su prenotazione</Badge>
        </div>
      </div>

      {/* DESCRIPTION */}
      <p className="text-sm text-neutral-600 leading-relaxed">
        Il nostro apericena è ricco di pietanze fresche e locali, a discrezione
        dello chef. Rivolgiti al nostro staff per ulteriori informazioni.
      </p>

      <p className="text-sm text-neutral-600">
        Il sabato è disponibile solo su prenotazione.
      </p>

      {/* PRICES */}
      <div className="mt-4 space-y-2 text-sm">
        <div className="flex justify-between">
          <span>Glutine (prezzo a persona)</span>
          <Badge variant="price">€18,00</Badge>
        </div>

        <div className="flex justify-between">
          <span>Senza glutine (prezzo a persona)</span>
          <Badge variant="price">€18,00</Badge>
        </div>

        <div className="flex justify-between">
          <span>Con aggiunta di burrata pugliese</span>
          <Badge variant="price">€20,00</Badge>
        </div>

        <div className="flex justify-between">
          <span>Senza lattosio (prezzo a persona)</span>
          <Badge variant="price">€19,00</Badge>
        </div>
      </div>

      {/* NOTE */}
      <p className="mt-4 text-xs text-neutral-500">
        * L’apericena copre tutte le bevande fino a €6,00. Per bevande di prezzo
        superiore verrà conteggiata la differenza.
      </p>
    </section>
  );
}
