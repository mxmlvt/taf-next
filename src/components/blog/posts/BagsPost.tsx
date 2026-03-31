import { SideBySideImages, type SideBySideItem } from '../BlogWidgets';

interface Props { locale: string }

interface TypeCard { title: string; description: string }

const TYPE_CARDS_EN: TypeCard[] = [
  {
    title: 'Nylon zippers',
    description: 'Perfect for the curved surfaces of backpacks due to their flexibility, self-healing capability, and light weight. They also have strong resistance to horizontal tearing.',
  },
  {
    title: 'Plastic zippers',
    description: 'Versatile, durable, and resistant to impact and corrosion. They work well in outdoor applications, such as tents and sleeping bags.',
  },
  {
    title: 'Metal zippers',
    description: 'Known for their strength and durability, ideal for applications requiring a high level of security and resilience. They offer a high-end, classic finish.',
  },
];

const TYPE_CARDS_PL: TypeCard[] = [
  {
    title: 'Zamki nylonowe',
    description: 'Doskonałe do zakrzywionych powierzchni plecaków ze względu na elastyczność, zdolność do samonaprawiania się i lekkość. Posiadają silną odporność na rozrywanie w poziomie.',
  },
  {
    title: 'Zamki plastikowe',
    description: 'Wszechstronne, wytrzymałe i odporne na uderzenia oraz korozję. Dobrze sprawdzają się w zastosowaniach zewnętrznych, takich jak namioty i śpiwory.',
  },
  {
    title: 'Zamki metalowe',
    description: 'Znane z wytrzymałości i trwałości, idealne do zastosowań wymagających wysokiego poziomu bezpieczeństwa i odporności. Oferują wysokiej klasy, klasyczne wykończenie.',
  },
];

const COMPARISON_EN: SideBySideItem[] = [
  {
    label: 'S-Type Zipper with a Woven-in Coil',
    src: 'https://wp.trimsandfasteners.com/wp-content/uploads/2025/06/porownanie-spirali-S80-WOVENIN-I-standardowej-80S-sewon-type-1024x718.jpeg',
    description: 'In this innovative construction, the zipper elements are woven directly into the tape. This eliminates weak points associated with sewing, making the zipper significantly more resistant to tearing, abrasion, and tooth separation. This ensures higher durability and reliability.',
  },
  {
    label: 'Standard Sewn Coil Zipper',
    src: 'https://wp.trimsandfasteners.com/wp-content/uploads/2025/06/nylonzippers8-1024x1024.jpg',
    description: 'In this construction, the teeth are sewn onto the tape with polyester thread ("standard sewn coil"). These threads can be a weak point, especially due to UV degradation or intensive use, leading to the risk of the coil separating from the tape.',
  },
];

const COMPARISON_PL: SideBySideItem[] = [
  {
    label: 'Zamek spiralny na taśmie S-Type (Woven-in)',
    src: 'https://wp.trimsandfasteners.com/wp-content/uploads/2025/06/porownanie-spirali-S80-WOVENIN-I-standardowej-80S-sewon-type-1024x718.jpeg',
    description: 'W tej innowacyjnej konstrukcji elementy zamka są wplecione bezpośrednio w taśmę. Eliminuje to słabe punkty związane z szyciem, czyniąc zamek znacznie bardziej odpornym na rozdarcia, ścieranie i oddzielanie się ząbków. Zapewnia to wyższą trwałość i niezawodność.',
  },
  {
    label: 'Standardowy zamek spiralny szyty',
    src: 'https://wp.trimsandfasteners.com/wp-content/uploads/2025/06/nylonzippers8-1024x1024.jpg',
    description: 'W tej konstrukcji ząbki są przyszywane do taśmy nicią poliestrową – typowa „zwykła spirala szyta". Nici te mogą stanowić słaby punkt, zwłaszcza pod wpływem degradacji UV lub intensywnego użytkowania, co prowadzi do ryzyka oddzielania się spirali od taśmy.',
  },
];

export default function BagsPost({ locale }: Props) {
  const isEn = locale === 'en';
  const typeCards = isEn ? TYPE_CARDS_EN : TYPE_CARDS_PL;
  const comparison = isEn ? COMPARISON_EN : COMPARISON_PL;

  return (
    <div className="prose prose-gray max-w-none font-[Jost]">
      <p>{isEn
        ? 'Choosing the right zipper for bags and backpacks is crucial for their functionality and durability, given their frequent use and potential loads.'
        : 'Wybór odpowiedniego zamka do toreb i plecaków jest kluczowy dla ich funkcjonalności i trwałości, biorąc pod uwagę częste użytkowanie i potencjalne obciążenia.'
      }</p>

      <h2 id="choosing">{isEn ? 'Choosing Zippers for Bags and Backpacks' : 'Wybór zamków do toreb i plecaków'}</h2>
      <p>{isEn
        ? 'Zippers for bags and backpacks must be resistant to dirt, sand, and water, move smoothly, and be durable enough for frequent use and heavy loads.'
        : 'Zamki do toreb i plecaków muszą być odporne na brud, piasek i wodę, płynnie się przesuwać i być wytrzymałe na częste użytkowanie oraz duże obciążenia.'
      }</p>

      {/* Recommended Types — card grid */}
      <p><strong>{isEn ? 'Recommended Types:' : 'Rekomendowane typy:'}</strong></p>
      <div className="not-prose grid grid-cols-1 sm:grid-cols-3 gap-4 my-4">
        {typeCards.map((card) => (
          <div key={card.title} className="bg-gray-100 p-5 rounded">
            <h3 className="font-[Jost] font-normal text-base text-[#c47a7a] mb-3">{card.title}</h3>
            <p className="font-[Jost] text-sm text-gray-600 leading-relaxed">{card.description}</p>
          </div>
        ))}
      </div>

      {/* Design Features */}
      <p><strong>{isEn ? 'Design Features:' : 'Cechy projektowe:'}</strong></p>
      <ul>
        <li>
          <strong>{isEn ? 'Larger zippers:' : 'Większe zamki:'}</strong>{' '}
          {isEn
            ? 'For heavy loads, while smaller ones are for lighter items. This helps reduce weight and makes them easier to use.'
            : 'Do ciężkich zastosowań, mniejsze do lżejszych – co przyczynia się do redukcji wagi i łatwości użytkowania.'}
        </li>
        <li>
          <strong>{isEn ? 'Sliders with double pulls:' : 'Suwaki z podwójnym uchwytem:'}</strong>{' '}
          {isEn
            ? 'Allow a backpack to be opened and closed from either side, which is more convenient.'
            : 'Umożliwiają otwieranie i zamykanie plecaka z obu stron, co zwiększa wygodę.'}
        </li>
        <li>
          <strong>{isEn ? 'Locking zippers:' : 'Zamki blokujące:'}</strong>{' '}
          {isEn
            ? 'Keep the contents secure, which is key when travelling.'
            : 'Zabezpieczają zawartość, co jest kluczowe podczas podróży.'}
        </li>
        <li>
          <strong>{isEn ? 'Water-resistant coatings:' : 'Powłoki wodoodporne:'}</strong>{' '}
          {isEn
            ? 'Add a protective barrier against moisture, preventing equipment from getting damaged by water.'
            : 'Dodają barierę ochronną przed wilgocią, chroniąc sprzęt przed uszkodzeniem przez wodę.'}
        </li>
      </ul>

      <h2 id="s-type">{isEn ? 'The Advantage of S-Type Tapes over a Standard Coil' : 'Przewaga taśm typu S nad zwykłą spiralą'}</h2>
      <p>{isEn
        ? "The construction of the coil itself and how it's attached to the tape have a decisive impact on a zipper's functionality and lifespan in bags and backpacks."
        : 'Decydujący wpływ na funkcjonalność i żywotność zamka w torbach i plecakach ma konstrukcja samej spirali i jej mocowania do taśmy.'
      }</p>

      <SideBySideImages items={comparison} />

      <h2 id="advantages">{isEn ? 'Advantages of S-Type (Woven-in) Zippers for Bags and Backpacks' : 'Zalety taśmy S (Woven-in) dla toreb i plecaków'}</h2>
      <ul>
        <li>
          <strong>{isEn ? 'Higher Durability and Lifespan:' : 'Wyższa trwałość i żywotność:'}</strong>{' '}
          {isEn
            ? 'The integrated, woven construction eliminates the weak points of sewn threads, making the zipper significantly more resistant to tearing, abrasion, and teeth separating from the tape. This is crucial for heavily used bags and backpacks.'
            : 'Integralna, tkana konstrukcja eliminuje słaby punkt szytych nici, czyniąc zamek znacznie bardziej odpornym na rozdarcia, ścieranie i oddzielanie się ząbków od taśmy. Kluczowe dla toreb i plecaków intensywnie użytkowanych.'}
        </li>
        <li>
          <strong>{isEn ? 'Increased Reliability:' : 'Zwiększona niezawodność:'}</strong>{' '}
          {isEn
            ? 'The woven structure provides a more solid and stable chain, reducing the likelihood of teeth damage. This is extremely important for tactical or heavy-duty backpacks.'
            : 'Tkana struktura zapewnia bardziej solidny i stabilny łańcuch, zmniejszając prawdopodobieństwo uszkodzenia ząbków. Niezwykle ważne w przypadku plecaków taktycznych lub ciężkich.'}
        </li>
        <li>
          <strong>{isEn ? 'Environmental Resistance:' : 'Odporność na czynniki środowiskowe:'}</strong>{' '}
          {isEn
            ? 'The woven design is inherently more robust against environmental factors.'
            : 'Tkana konstrukcja jest z natury bardziej odporna na czynniki środowiskowe.'}
        </li>
        <li>
          <strong>{isEn ? 'Maintained Smooth Operation:' : 'Utrzymanie płynnego działania:'}</strong>{' '}
          {isEn
            ? 'A more stable tape and integrated teeth ensure the slider runs more smoothly for a longer period, even under load.'
            : 'Bardziej stabilna taśma i zintegrowane ząbki zapewniają płynniejsze działanie suwaka przez dłuższy czas, nawet pod obciążeniem.'}
        </li>
      </ul>

      <h2 id="summary">{isEn ? 'Summary' : 'Podsumowanie'}</h2>
      <p>{isEn
        ? 'For bags and backpacks, especially those intended for outdoor or heavy-duty use that are subjected to significant stress, frequent handling, and exposure to various elements, a zipper that fails can render the entire item useless. Therefore, a design that minimizes failure points and maximizes integral strength, such as the woven "S-tape" construction, offers a clear functional advantage over a traditional sewn coil zipper. This innovation directly addresses the critical need for zippers that can withstand tough conditions and intensive use, extending a product\'s lifespan and increasing user confidence.'
        : 'Dla toreb i plecaków, zwłaszcza tych przeznaczonych do użytku zewnętrznego lub intensywnego, zamek, który ulegnie awarii, może uczynić cały przedmiot bezużytecznym. Dlatego konstrukcja, która minimalizuje punkty awarii i maksymalizuje integralną wytrzymałość – taka jak tkana konstrukcja „S-tape" – oferuje wyraźną przewagę funkcjonalną nad tradycyjnie szytym zamkiem spiralnym. Ta innowacja bezpośrednio odpowiada na krytyczną potrzebę zamków wytrzymujących trudne warunki i intensywne użytkowanie, wydłużając żywotność produktu i zwiększając zaufanie użytkowników.'}
      </p>
    </div>
  );
}
