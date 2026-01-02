window.studyData = {};
const flashcardsData = [
    // ProÄŤ tĹ™Ă­dĂ­me
    { category: "ProÄŤ tĹ™Ă­dĂ­me", q: "Co je informaÄŤnĂ­ exploze?", a: "RĹŻst mnoĹľstvĂ­ zachycenĂ˝ch dat, informacĂ­, poznatkĹŻ a dokumentĹŻ, zejmĂ©na po 2. svÄ›tovĂ© vĂˇlce. PĹ™Ă­ÄŤinou je technologickĂ˝ vĂ˝voj - rapidnĂ­ nĂˇrĹŻst kapacity pĹ™ijĂ­mat, uklĂˇdat a komunikovat informace.", exp: "Tento koncept vysvÄ›tluje, proÄŤ vĹŻbec potĹ™ebujeme organizovat informace - bez tĹ™Ă­dÄ›nĂ­ bychom se v zĂˇplavÄ› dat ztratili." },
    { category: "ProÄŤ tĹ™Ă­dĂ­me", q: "JakĂ˝ je rozdĂ­l mezi informaÄŤnĂ­m pĹ™etĂ­ĹľenĂ­m a informaÄŤnĂ­ deprivacĂ­?", a: "InformaÄŤnĂ­ pĹ™etĂ­ĹľenĂ­ je objektivnĂ­ dĹŻsledek informaÄŤnĂ­ exploze - komplikuje vyhledĂˇvĂˇnĂ­. InformaÄŤnĂ­ deprivace (neurĂłza) je subjektivnĂ­ psychologickĂ˝ dĹŻsledek - stavy zpĹŻsobenĂ© nadbytkem nebo nedostatkem relevantnĂ­ch informacĂ­.", exp: "KlĂ­ÄŤovĂ© je rozliĹˇit objektivnĂ­ stav (pĹ™etĂ­ĹľenĂ­) od subjektivnĂ­ho pocitu (deprivace) - to je ÄŤastĂˇ zkuĹˇkovĂˇ otĂˇzka." },
    { category: "ProÄŤ tĹ™Ă­dĂ­me", q: "JakĂ˝ je vztah mezi daty, informacemi a znalostmi?", a: "Data = zaznamenanĂ© symbolickĂ© reprezentace (Ĺ™etÄ›zec znakĹŻ). Informace = data s pĹ™idÄ›lenĂ˝m vĂ˝znamem. Znalosti = informace s pĹ™idÄ›lenĂ˝m kontextem, propojenĂ© s naĹˇimi poznatky.", exp: "Tento Ĺ™etÄ›zec Dataâ†’Informaceâ†’Znalosti je zĂˇkladnĂ­ paradigma oboru. Pamatuj: +vĂ˝znam, +kontext." },
    { category: "ProÄŤ tĹ™Ă­dĂ­me", q: "Co je sĂ©miotickĂ˝ trojĂşhelnĂ­k?", a: "ZĂˇkladnĂ­ epistemologickĂ˝ model spojujĂ­cĂ­ tĹ™i prvky: jev (vÄ›c), pojem (vĂ˝znam) a znak (reprezentace). NapĹ™. tuĹľka jako vÄ›c, pojem tuĹľka (vĂ˝znam) a slovo 't-u-Ĺľ-k-a' (znak).", exp: "DĹŻleĹľitĂ© je, Ĺľe znak nemĂˇ pĹ™Ă­mĂ˝ vztah k vÄ›ci - je arbitrĂˇrnĂ­ (nahodilĂ˝). Proto rĹŻznĂ© jazyky pouĹľĂ­vajĂ­ rĹŻznĂˇ slova." },
    { category: "ProÄŤ tĹ™Ă­dĂ­me", q: "PopiĹˇ Popperovu teorii tĹ™Ă­ svÄ›tĹŻ.", a: "PI = svÄ›t vÄ›cĂ­/jevĹŻ/pĹ™edmÄ›tĹŻ. PII = poznĂˇvajĂ­cĂ­ subjekt (manipuluje s vÄ›cmi, pojmy, znaky). PIII = oblast reprezentujĂ­cĂ­ komunikaÄŤnĂ­ nĂˇstroje a zaznamenanĂ© lidskĂ© poznĂˇnĂ­.", exp: "PIII je klĂ­ÄŤovĂ˝ pro informaÄŤnĂ­ vÄ›du - zahrnuje knihy, dokumenty, databĂˇze. To je oblast, se kterou pracujeme." },

    // Co tĹ™Ă­dĂ­me
    { category: "Co tĹ™Ă­dĂ­me", q: "Co je dokument?", a: "Objekt s fyzickou povahou, kterĂ˝ nese informace (slouĹľĂ­ k jejich sdÄ›lovĂˇnĂ­), je pĹ™edmÄ›tem informaÄŤnĂ­ho systĂ©mu a dÄ›lĂ­ se do sbĂ­rek a kolekcĂ­.", exp: "Dokument mĂˇ fyzickou povahu - to ho odliĹˇuje od abstraktnĂ­ch pojmĹŻ. I digitĂˇlnĂ­ soubor mĂˇ fyzickou reprezentaci na nosiÄŤi." },
    { category: "Co tĹ™Ă­dĂ­me", q: "Co je informaÄŤnĂ­ objekt?", a: "GenerickĂ˝ pojem pro jakĂ˝koli fyzickĂ˝ ÄŤi virtuĂˇlnĂ­ objekt nesoucĂ­ libovolnĂ˝ typ ÄŤi formĂˇt informace.", exp: "Ĺ irĹˇĂ­ pojem neĹľ dokument - zahrnuje i virtuĂˇlnĂ­ objekty jako webovĂ© strĂˇnky nebo databĂˇzovĂ© zĂˇznamy." },
    { category: "Co tĹ™Ă­dĂ­me", q: "Co je informaÄŤnĂ­ pramen/zdroj?", a: "InformaÄŤnĂ­ objekt obsahujĂ­cĂ­ informace relevantnĂ­ pro konkrĂ©tnĂ­ ĂşÄŤel (napĹ™. naplnÄ›nĂ­ informaÄŤnĂ­ potĹ™eby uĹľivatele).", exp: "KlĂ­ÄŤovĂ© slovo je 'relevantnĂ­' - ne kaĹľdĂ˝ informaÄŤnĂ­ objekt je zdrojem, zĂˇleĹľĂ­ na kontextu pouĹľitĂ­." },
    { category: "Co tĹ™Ă­dĂ­me", q: "JakĂ˝ je rozdĂ­l mezi indexacĂ­ a klasifikacĂ­?", a: "Indexace = popis objektu souborem poĹ™ĂˇdajĂ­cĂ­ch znakĹŻ vyjadĹ™ujĂ­cĂ­ch obsah (klĂ­ÄŤovĂˇ slova, deskriptory). Klasifikace = zaĹ™azenĂ­ objektu na urÄŤitĂ© mĂ­sto v klasifikaÄŤnĂ­m systĂ©mu (MDT, DDC).", exp: "Indexace = 'co dokument obsahuje' (slova). Klasifikace = 'kam dokument patĹ™Ă­' (mĂ­sto v hierarchii). ObÄ› metody se ÄŤasto kombinujĂ­." },

    // SelekÄŤnĂ­ jazyky
    { category: "SelekÄŤnĂ­ jazyky", q: "Co je selekÄŤnĂ­ jazyk?", a: "Jazyk slouĹľĂ­cĂ­ k systematickĂ© organizaci informacĂ­ pro ĂşÄŤely vyhledĂˇvĂˇnĂ­, indexace a klasifikace.", exp: "SelekÄŤnĂ­ jazyky jsou umÄ›lĂ© jazyky - na rozdĂ­l od pĹ™irozenĂ˝ch jazykĹŻ majĂ­ pĹ™esnÄ› definovanĂˇ pravidla pro popis dokumentĹŻ." },
    { category: "SelekÄŤnĂ­ jazyky", q: "JakĂ© jsou 4 zĂˇkladnĂ­ typy selekÄŤnĂ­ch jazykĹŻ?", a: "1) PrekoordinovanĂ© systematickĂ© (MDT, DDC, LCC). 2) PostkoordinovanĂ© systematickĂ© (dvojteÄŤkovĂ© tĹ™Ă­dÄ›nĂ­). 3) PrekoordinovanĂ© pĹ™edmÄ›tovĂ© (pĹ™edmÄ›tovĂˇ hesla). 4) PostkoordinovanĂ© pĹ™edmÄ›tovĂ© (tezaury, klĂ­ÄŤovĂˇ slova).", exp: "Zapamatuj si tabulku 2x2: systematickĂ©/pĹ™edmÄ›tovĂ© Ă— pre/postkoordinovanĂ©. KaĹľdĂ˝ typ mĂˇ jinĂ© pouĹľitĂ­ a vĂ˝hody." },
    { category: "SelekÄŤnĂ­ jazyky", q: "Co je prekoordinace vs. postkoordinace?", a: "Prekoordinace = pojmy zaĹ™azeny jako celek (sloĹľenĂ© poĹ™ĂˇdacĂ­ znaky). Postkoordinace = pojmy rozdÄ›leny na sloĹľky a kombinujĂ­ se aĹľ pĹ™i vyhledĂˇvĂˇnĂ­.", exp: "Pre = pĹ™ed indexacĂ­ se pojmy kombinujĂ­. Post = aĹľ pĹ™i vyhledĂˇvĂˇnĂ­. Postkoordinace je flexibilnÄ›jĹˇĂ­, ale mĂ©nÄ› pĹ™esnĂˇ." },
    { category: "SelekÄŤnĂ­ jazyky", q: "Co je tezaurus?", a: "PostkoordinovanĂ˝ systĂ©m s Ĺ™Ă­zenĂ˝m slovnĂ­kem, hierarchiĂ­ a dalĹˇĂ­mi typy vztahĹŻ. Obvykle zamÄ›Ĺ™en na konkrĂ©tnĂ­ obor. Obsahuje deskriptory (preferovanĂ©) a nedeskriptory (nepreferovanĂ© lexikĂˇlnĂ­ jednotky).", exp: "Tezaurus Ĺ™eĹˇĂ­ problĂ©m synonymie - Ĺ™Ă­kĂˇ, kterĂ© slovo preferovat. NapĹ™. 'automobil' mĂ­sto 'auto', 'vĹŻz', 'vozidlo'." },
    { category: "SelekÄŤnĂ­ jazyky", q: "Co je MDT (MezinĂˇrodnĂ­ desetinnĂ© tĹ™Ă­dÄ›nĂ­)?", a: "UniverzĂˇlnĂ­ klasifikaÄŤnĂ­ systĂ©m kombinujĂ­cĂ­ hierarchickĂ˝ a fazetovĂ˝ pĹ™Ă­stup. VytvoĹ™en poÄŤĂˇtkem 20. stoletĂ­ (Otlet, La Fontaine). PouĹľĂ­vĂˇ desetinnou notaci a pomocnĂ© tabulky.", exp: "MDT je v ÄŚR nejpouĹľĂ­vanÄ›jĹˇĂ­ klasifikaÄŤnĂ­ systĂ©m. Kombinace hierarchie + fazety ho ÄŤinĂ­ velmi flexibilnĂ­m." },
    { category: "SelekÄŤnĂ­ jazyky", q: "Co je DDC (Deweyho desetinnĂ© tĹ™Ă­dÄ›nĂ­)?", a: "Pragmaticky orientovanĂ˝ enumerativnĂ­ klasifikaÄŤnĂ­ systĂ©m z roku 1876 (Melvil Dewey). PouĹľĂ­vĂˇn celosvÄ›tovÄ›. Notace poskytuje univerzĂˇlnĂ­ jazyk pro identifikaci tĹ™Ă­d.", exp: "DDC je nejstarĹˇĂ­ a nejrozĹˇĂ­Ĺ™enÄ›jĹˇĂ­ modernĂ­ klasifikace. ÄŚĂ­sla jako 821.162.3 jednoznaÄŤnÄ› identifikujĂ­ tĹ™Ă­du v jakĂ©mkoli jazyce." },
    { category: "SelekÄŤnĂ­ jazyky", q: "Co je fazeta?", a: "Kategorie entit vytvoĹ™enĂˇ uplatnÄ›nĂ­m jednĂ© klasifikaÄŤnĂ­ charakteristiky (principium divisionis). Fazety vyjadĹ™ujĂ­ vlastnosti pouĹľitĂ© pro seskupovĂˇnĂ­ pojmĹŻ podle jejich podstaty.", exp: "Fazeta = jeden 'Ăşhel pohledu' na vÄ›c. NapĹ™. kniha mĹŻĹľe bĂ˝t popsĂˇna fazetami: tĂ©ma, jazyk, forma, rok vydĂˇnĂ­." },
    { category: "SelekÄŤnĂ­ jazyky", q: "Co je PMEST?", a: "FazetovĂˇ formulace z dvojteÄŤkovĂ©ho tĹ™Ă­dÄ›nĂ­ (Ranganathan): Personality (ĂşstĹ™ednĂ­ tĂ©ma), Matter (lĂˇtka, vlastnosti), Energy (procesy, ÄŤinnosti), Space (mĂ­sto), Time (ÄŤas).", exp: "PMEST je mnemotechnickĂˇ pomĹŻcka pro zĂˇkladnĂ­ fazety. P=co, M=z ÄŤeho, E=co se dÄ›je, S=kde, T=kdy." },

    // Morfologie a struktura SJ
    { category: "Morfologie SJ", q: "Co je deskriptor a nedeskriptor?", a: "Deskriptor = preferovanĂˇ lexikĂˇlnĂ­ jednotka v tezauru. Nedeskriptor = nepreferovanĂˇ LJ (ekvivalent), nepopisuje, ale odkazuje na preferovanĂ˝ vĂ˝raz.", exp: "Deskriptor = to, co pouĹľĂ­vĂˇme. Nedeskriptor = to, co Ĺ™Ă­kĂˇ 'VIZ deskriptor'. ĹeĹˇĂ­ problĂ©m synonymie." },
    { category: "Morfologie SJ", q: "Co je synonymie?", a: "Vztah mezi termĂ­ny danĂ©ho jazyka reprezentujĂ­cĂ­mi stejnĂ˝ pojem.", exp: "Synonymie komplikuje vyhledĂˇvĂˇnĂ­ - musĂ­me hledat vĹˇechna synonyma. Tezaurus to Ĺ™eĹˇĂ­ preferovanĂ˝mi termĂ­ny." },
    { category: "Morfologie SJ", q: "Co je homonymie?", a: "Jev, kdy jazykovĂ© jednotky znÄ›jĂ­cĂ­ nebo psanĂ© stejnÄ› majĂ­ rĹŻznĂ˝ vĂ˝znam.", exp: "Homonymie = 'jedno slovo, vĂ­ce vĂ˝znamĹŻ'. ĹeĹˇĂ­ se relĂˇtory v zĂˇvorkĂˇch: koruna (mÄ›na) vs. koruna (strom)." },
    { category: "Morfologie SJ", q: "Co je polysĂ©mie?", a: "Jev spoÄŤĂ­vajĂ­cĂ­ v tom, Ĺľe jazykovĂ© jednotky majĂ­ dva nebo vĂ­ce etymologicky souvisejĂ­cĂ­ch vĂ˝znamĹŻ (napĹ™. kĹ™Ă­dlo jako klavĂ­r, ptaÄŤĂ­ konÄŤetina, ÄŤĂˇst dveĹ™Ă­).", exp: "Na rozdĂ­l od homonymie jsou vĂ˝znamy etymologicky pĹ™Ă­buznĂ© - majĂ­ spoleÄŤnĂ˝ pĹŻvod. KĹ™Ă­dlo = nÄ›co plochĂ©ho na stranÄ›." },
    { category: "Morfologie SJ", q: "JakĂ˝ je rozdĂ­l mezi paradigmatickĂ˝m a syntagmatickĂ˝m vztahem?", a: "ParadigmatickĂ˝ (apriornĂ­) = vztah existujĂ­cĂ­ nezĂˇvisle na kontextu (synonymie, hierarchie). SyntagmatickĂ˝ (aposteriornĂ­) = vztah danĂ˝ kontextem.", exp: "ParadigmatickĂ˝ = danĂ˝ jazykem/slovnĂ­kem. SyntagmatickĂ˝ = vznikĂˇ aĹľ v konkrĂ©tnĂ­ vÄ›tÄ›/textu." },

    // Jak tĹ™Ă­dĂ­me
    { category: "Indexace", q: "Co je obsahovĂˇ analĂ˝za?", a: "UrÄŤenĂ­ obsahu dokumentu na zĂˇkladÄ› plnĂ©ho textu nebo redukovanĂ©ho textu (abstrakt, nĂˇzev, obsah, rejstĹ™Ă­k). PouĹľĂ­vajĂ­ se rĹŻznĂ© typy ÄŤtenĂ­: orientaÄŤnĂ­, kurzorickĂ©, selektivnĂ­, statarickĂ©, racionĂˇlnĂ­.", exp: "ObsahovĂˇ analĂ˝za je prvnĂ­ krok indexace - musĂ­me pochopit, o ÄŤem dokument je, neĹľ ho popĂ­Ĺˇeme." },
    { category: "Indexace", q: "JakĂ© jsou aspekty vĂ˝bÄ›ru znakĹŻ SJ?", a: "Ăšplnost (rozsah zachycenĂ­ tĂ©mat), SpecifiÄŤnost (vĂ˝bÄ›r nejspecifiÄŤtÄ›jĹˇĂ­ho znaku), IndexaÄŤnĂ­ hlediska (pĹ™edmÄ›t, ÄŤas, mĂ­sto, entita, proces), Prekoordinace/postkoordinace.", exp: "VĹľdy volĂ­me nejspecifiÄŤtÄ›jĹˇĂ­ znak - ne 'zvĂ­Ĺ™e', ale 'pes'. ÄŚĂ­m specifiÄŤtÄ›jĹˇĂ­, tĂ­m pĹ™esnÄ›jĹˇĂ­ vyhledĂˇvĂˇnĂ­." },
    { category: "Indexace", q: "Co je konzistence indexace?", a: "Pro tentĂ˝Ĺľ obsah tentĂ˝Ĺľ popis. MĂ­ra shody dvou nebo vĂ­ce SOD. Typy: mezi indexĂˇtory (interindexer), jednoho indexĂˇtora, z hlediska hloubky.", exp: "Konzistence = spolehlivost. Pokud dva indexĂˇtoĹ™i popĂ­ĹˇĂ­ stejnĂ˝ dokument stejnÄ›, systĂ©m je konzistentnĂ­." },
    { category: "Indexace", q: "Jak se poÄŤĂ­tĂˇ konzistence mezi dvÄ›ma indexĂˇtory?", a: "C = a / b, kde a = poÄŤet shodnÄ› zvolenĂ˝ch znakĹŻ, b = celkovĂ˝ poÄŤet pĹ™idÄ›lenĂ˝ch jedineÄŤnĂ˝ch znakĹŻ.", exp: "JednoduchĂ˝ vzorec: shody/vĹˇechny jedineÄŤnĂ©. Pokud oba pĹ™idÄ›lili 5 znakĹŻ a 3 se shodujĂ­, C = 3/7." },
    { category: "Indexace", q: "Co je Ăşplnost (recall) a pĹ™esnost (precision)?", a: "Ăšplnost = vyhledanĂ© relevantnĂ­ / vĹˇechny relevantnĂ­. PĹ™esnost = vyhledanĂ© relevantnĂ­ / vĹˇechny vyhledanĂ©. Vztah je nepĹ™Ă­mo ĂşmÄ›rnĂ˝.", exp: "Recall = kolik z toho, co jsme MÄšLI najĂ­t, jsme naĹˇli. Precision = kolik z toho, co jsme NAĹ LI, bylo sprĂˇvnÄ›." },
    { category: "Indexace", q: "JakĂ© jsou nejÄŤastÄ›jĹˇĂ­ indexaÄŤnĂ­ chyby?", a: "OpominutĂ­ hledisek (18,6%), NesprĂˇvnĂ© stanovenĂ­ vĂ˝znamu deskriptoru (12,3%), ChybÄ›jĂ­cĂ­ jednotlivĂ© deskriptory (11,5%).", exp: "NejÄŤastÄ›jĹˇĂ­ chyba je opominutĂ­ - indexĂˇtor si nÄ›ÄŤeho nevĹˇimne. Proto je dĹŻleĹľitĂˇ systematickĂˇ kontrola." },

    // SOD
    { category: "SOD", q: "Co je SOD (SelekÄŤnĂ­ obraz dokumentu)?", a: "Soubor lexikĂˇlnĂ­ch jednotek nebo klasifikaÄŤnĂ­ch znakĹŻ, kterĂ˝ reprezentuje obsah dokumentu po jeho zpracovĂˇnĂ­.", exp: "SOD je vĂ˝sledek indexace - sada klĂ­ÄŤovĂ˝ch slov nebo klasifikaÄŤnĂ­ch znakĹŻ pĹ™iĹ™azenĂ˝ch dokumentu." },
    { category: "SOD", q: "JakĂ© jsou typy redukovanĂ˝ch textĹŻ?", a: "Abstrakt (krĂˇtkĂ© shrnutĂ­ od autora/zpracovatele), Anotace (povrchnĂ­ doprovod nakladatelskĂ© ÄŤinnosti), ReferĂˇt (delĹˇĂ­, pĹ™ibliĹľuje vĂ˝sledky), Extrakt (vĂ˝bÄ›r ÄŤĂˇstĂ­), ResumĂ© (vĂ˝sledky poznĂˇnĂ­ autora).", exp: "Abstrakt je nejdĹŻleĹľitÄ›jĹˇĂ­ - krĂˇtkĂ©, vÄ›cnĂ© shrnutĂ­. Anotace je spĂ­Ĺˇe reklamnĂ­ text, referĂˇt je podrobnÄ›jĹˇĂ­." },

    // SystĂ©my
    { category: "SystĂ©my", q: "Co jsou LCSH?", a: "PĹ™edmÄ›tovĂˇ hesla KongresovĂ© knihovny - systĂ©m se stĹ™ednĂ­ mĂ­rou prekoordinace. UmoĹľĹujĂ­ vytvĂˇĹ™et kombinovanĂˇ tĂ©mata a pracujĂ­ s vlastnĂ­mi jmĂ©ny.", exp: "LCSH je nejrozĹˇĂ­Ĺ™enÄ›jĹˇĂ­ systĂ©m pĹ™edmÄ›tovĂ˝ch hesel na svÄ›tÄ›. StĹ™ednĂ­ prekoordinace = nÄ›kterĂ© kombinace jsou pĹ™edem danĂ©." },
    { category: "SystĂ©my", q: "JakĂ˝ je rozdĂ­l mezi LCSH (PH) a tezaurem?", a: "PH umoĹľĹujĂ­ prekoordinovanĂ© lexikĂˇlnĂ­ jednotky a prĂˇci s vlastnĂ­mi jmĂ©ny. Tezaurus se snaĹľĂ­ o sĂ©mantickĂ˝ rozklad a kombinuje jednotky aĹľ pĹ™i vyhledĂˇvĂˇnĂ­.", exp: "PH = 'ÄŚeskĂ© dÄ›jiny - 20. stoletĂ­' jako celek. Tezaurus = 'ÄŚesko' AND 'dÄ›jiny' AND '20. stoletĂ­' kombinovanĂ© pĹ™i vyhledĂˇvĂˇnĂ­." },
    { category: "SystĂ©my", q: "Co je AGROVOC?", a: "Tezaurus pro jĂ­dla a zemÄ›dÄ›lstvĂ­ vytvoĹ™enĂ˝ OSN (FAO). VĂ­cejazyÄŤnĂ˝ oborovĂ˝ tezaurus.", exp: "AGROVOC je pĹ™Ă­klad oborovĂ©ho tezauru - specializovanĂ˝ slovnĂ­k pro konkrĂ©tnĂ­ oblast. VĂ­cejazyÄŤnost umoĹľĹuje mezinĂˇrodnĂ­ vyhledĂˇvĂˇnĂ­." },
    { category: "SystĂ©my", q: "Co je EuroVoc?", a: "EvropskĂ˝ mnohojazyÄŤnĂ˝ a multidisciplinĂˇrnĂ­ tezaurus spojenĂ˝ s prĂˇvnĂ­mi informacemi EU.", exp: "EuroVoc se pouĹľĂ­vĂˇ pro indexaci dokumentĹŻ EU ve vĹˇech ĂşĹ™ednĂ­ch jazycĂ­ch. DĹŻleĹľitĂ˝ pro prĂˇvo a politiku." },

    // VyhledĂˇvĂˇnĂ­
    { category: "VyhledĂˇvĂˇnĂ­", q: "JakĂ© jsou vĂ˝hody Ĺ™Ă­zenĂ©ho slovnĂ­ku oproti fulltextu?", a: "ĹeĹˇĂ­ synonymii a homonymii, paradigmatickĂ© vztahy jsou dĂˇny strukturou, pĹ™ekonĂˇvĂˇ vĂ­cejazyÄŤnost (vĂ­cejazyÄŤnĂ© tezaury), mĹŻĹľe bĂ˝t pĹ™esnÄ›jĹˇĂ­.", exp: "ĹĂ­zenĂ˝ slovnĂ­k je pĹ™esnÄ›jĹˇĂ­ - vĂ­me, jakĂ© termĂ­ny hledat. Fulltext mĹŻĹľe minout synonyma nebo najĂ­t homonyma." },
    { category: "VyhledĂˇvĂˇnĂ­", q: "JakĂ© jsou vĂ˝hody fulltextu oproti Ĺ™Ă­zenĂ©mu slovnĂ­ku?", a: "PĹ™Ă­stupnĂ˝ vĹˇem uĹľivatelĹŻm, zachycuje novĂ© termĂ­ny bez zpoĹľdÄ›nĂ­, obsahuje vĹˇechny specifickĂ© vĂ˝razy, mĹŻĹľe bĂ˝t ĂşplnÄ›jĹˇĂ­.", exp: "Fulltext je rychlejĹˇĂ­ a zachycuje novĂ© termĂ­ny okamĹľitÄ›. ĹĂ­zenĂ˝ slovnĂ­k vyĹľaduje odbornĂ­ky a mĂˇ zpoĹľdÄ›nĂ­." },
    { category: "VyhledĂˇvĂˇnĂ­", q: "Co je ontologie v kontextu organizace informacĂ­?", a: "Typ pojmovĂ©ho modelu vymezenĂ© domĂ©ny. ĂšÄŤelem je komunikace, organizace znalostĂ­, popis skuteÄŤnosti pro poÄŤĂ­taÄŤovĂ© zpracovĂˇnĂ­ a automatickĂ© odvozovĂˇnĂ­ znalostĂ­.", exp: "Ontologie jde dĂˇl neĹľ tezaurus - definuje nejen termĂ­ny, ale i jejich vlastnosti a vztahy pro strojovĂ© zpracovĂˇnĂ­." },

    // Definice
    { category: "Definice", q: "Co je epistemologie?", a: "Jedna ze zĂˇkladnĂ­ch filosofickĂ˝ch disciplĂ­n, kterĂˇ zkoumĂˇ lidskĂ© poznĂˇnĂ­, jeho vznik, proces, pĹ™edmÄ›t ÄŤi limity.", exp: "Epistemologie = teorie poznĂˇnĂ­. ZĂˇklad pro pochopenĂ­, jak vznikajĂ­ informace a znalosti." },
    { category: "Definice", q: "Co je sĂ©miotika?", a: "ObecnĂ© oznaÄŤenĂ­ vÄ›dnĂ­ch teoriĂ­ zabĂ˝vajĂ­cĂ­ch se zkoumĂˇnĂ­m znakĹŻ a znakovĂ˝ch soustav.", exp: "SĂ©miotika je ĹˇirĹˇĂ­ neĹľ sĂ©mantika - zahrnuje i syntaktiku (strukturu) a pragmatiku (pouĹľitĂ­ znakĹŻ)." },
    { category: "Definice", q: "Co je sĂ©mantika?", a: "ZkoumĂˇ vztahy mezi formou a vĂ˝znamem znakĹŻ. Je souÄŤĂˇstĂ­ sĂ©miotiky (spolu s pragmatikou a syntagmatikou).", exp: "SĂ©mantika se ptĂˇ 'co to znamenĂˇ?' - vztah mezi znakem a jeho vĂ˝znamem." },
    { category: "Definice", q: "Co je taxonomie?", a: "VÄ›da zabĂ˝vajĂ­cĂ­ se teoriĂ­ a praxĂ­ klasifikace organismĹŻ.", exp: "Taxonomie je pĹŻvodnÄ› biologickĂ˝ termĂ­n. V informaÄŤnĂ­ vÄ›dÄ› se pouĹľĂ­vĂˇ pro jakoukoliv hierarchickou klasifikaci." },
    { category: "Definice", q: "Co je syntax?", a: "Struktura nebo poĹ™adĂ­ prvkĹŻ v jazykovĂ©m vyjĂˇdĹ™enĂ­.", exp: "Syntax = pravidla, jak sklĂˇdat prvky dohromady. V ÄŤeĹˇtinÄ› mĂˇme volnĂ˝ slovosled, v angliÄŤtinÄ› pevnĂ˝." },
    { category: "Definice", q: "Co je morfologie v kontextu jazykovÄ›dy?", a: "JazykovÄ›dnĂˇ disciplĂ­na zabĂ˝vajĂ­cĂ­ se tvary slov, zkoumĂˇ slovnĂ­ druhy z hlediska jejich struktury, moĹľnostĂ­ zmÄ›n, vzĂˇjemnĂ˝ch vztahĹŻ a gramatickĂ© funkce.", exp: "Morfologie = tvary slov. V ÄŤeĹˇtinÄ› je dĹŻleĹľitĂˇ kvĹŻli skloĹovĂˇnĂ­ a ÄŤasovĂˇnĂ­." },
    { category: "Definice", q: "Co je granularita?", a: "ĂšroveĹ podrobnosti identifikace jednotlivĂ˝ch sloĹľek informaÄŤnĂ­ho objektu.", exp: "Granularita = jak detailnÄ› popisujeme. VysokĂˇ granularita = velmi podrobnĂ˝ popis (kaĹľdĂˇ kapitola zvlĂˇĹˇĹĄ)." },
    { category: "Definice", q: "Co je relĂˇtor?", a: "SlovnĂ­ vĂ˝raz pouĹľĂ­vanĂ˝ k rozliĹˇenĂ­ vĂ˝znamu homonym, je nedĂ­lnou souÄŤĂˇstĂ­ lexikĂˇlnĂ­ jednotky.", exp: "RelĂˇtor = upĹ™esnÄ›nĂ­ v zĂˇvorce: 'zĂˇmek (budova)' vs. 'zĂˇmek (uzamykacĂ­)'." },

    // === ROZĹ ĂŤĹENĂ‰ FLASHCARDS ===
    // SystematickĂ© klasifikace
    { category: "SystematickĂ© SJ", q: "Co je LCC (Library of Congress Classification)?", a: "Klasifikace KongresovĂ© knihovny - pragmatickĂ˝ enumerativnĂ­ systĂ©m orientovanĂ˝ na americkĂ© reĂˇlie. Vznikl na pĹ™elomu 19. a 20. stoletĂ­.", exp: "LCC pouĹľĂ­vĂˇ pĂ­smena pro hlavnĂ­ tĹ™Ă­dy (A=VĹˇeobecnosti, B=Filosofie). Dominuje v USA, jinde mĂ©nÄ›." },
    { category: "SystematickĂ© SJ", q: "Co je CC (Colon Classification)?", a: "DvojteÄŤkovĂ© tĹ™Ă­dÄ›nĂ­ vytvoĹ™enĂ© Ranghanathanem v roce 1933. FazetovĂ˝ pĹ™Ă­stup zaloĹľenĂ˝ na formulaci PMEST.", exp: "CC je teoreticky nejÄŤistĹˇĂ­ fazetovĂ˝ systĂ©m. PouĹľĂ­vĂˇ dvojteÄŤku k oddÄ›lenĂ­ fazet - odtud nĂˇzev." },
    { category: "SystematickĂ© SJ", q: "Co je BBC (Bliss Bibliographic Classification)?", a: "Blissovo bibliografickĂ© tĹ™Ă­dÄ›nĂ­ (1940-1953). Teoreticky fundovanĂ˝ fazetovĂ˝ systĂ©m, ale minimĂˇlnÄ› rozĹˇĂ­Ĺ™enĂ˝ v praxi.", exp: "BBC je teoreticky vynikajĂ­cĂ­, ale pĹ™iĹˇlo pozdÄ› a neujalo se. ZajĂ­mavĂ© pro studium, ne pro praxi." },
    { category: "SystematickĂ© SJ", q: "Co jsou pomocnĂ© tabulky v MDT?", a: "Tabulky obsahujĂ­cĂ­ pomocnĂ© znaky pro vyjĂˇdĹ™enĂ­ rĹŻznĂ˝ch aspektĹŻ: mĂ­sto, ÄŤas, jazyk, forma dokumentu a dalĹˇĂ­. UmoĹľĹujĂ­ kombinace s hlavnĂ­mi znaky.", exp: "PomocnĂ© tabulky jsou sĂ­la MDT - umoĹľĹujĂ­ pĹ™idat k hlavnĂ­mu znaku aspekty jako (437) pro ÄŚesko nebo \"18\" pro 18. stoletĂ­." },
    { category: "SystematickĂ© SJ", q: "Co je enumerativnĂ­ klasifikace?", a: "VĂ˝ÄŤtovĂˇ klasifikace obsahujĂ­cĂ­ vĹˇechny tĹ™Ă­dy pĹ™edem definovanĂ©. PĹ™Ă­kladem jsou DDC a LCC.", exp: "EnumerativnĂ­ = vĹˇechno vyjmenovanĂ© pĹ™edem. NevĂ˝hoda: pokud tĂ©ma nenĂ­ v seznamu, nemĹŻĹľeme ho zaĹ™adit." },
    { category: "SystematickĂ© SJ", q: "Co je fazetovĂˇ klasifikace?", a: "Klasifikace umoĹľĹujĂ­cĂ­ kombinovat rĹŻznĂ© aspekty (fazety) pro popis dokumentu. PĹ™Ă­kladem jsou CC a MDT.", exp: "FazetovĂˇ = kombinujeme aspekty. VĂ˝hoda: flexibilita. NevĂ˝hoda: sloĹľitÄ›jĹˇĂ­ pravidla kombinovĂˇnĂ­." },
    { category: "SystematickĂ© SJ", q: "Co je notace v klasifikaci?", a: "SymbolickĂ© vyjĂˇdĹ™enĂ­ tĹ™Ă­dy - mĹŻĹľe bĂ˝t numerickĂ© (DDC), alfanumerickĂ© (LCC) nebo smĂ­ĹˇenĂ© (MDT). SlouĹľĂ­ k jednoznaÄŤnĂ© identifikaci.", exp: "Notace je 'adresa' tĹ™Ă­dy. NumerickĂˇ (800) je jazykovÄ› nezĂˇvislĂˇ, alfanumerickĂˇ (PS) mĹŻĹľe bĂ˝t mnemotechnickĂˇ." },

    // PĹ™edmÄ›tovĂ© systĂ©my podrobnÄ›ji
    { category: "PĹ™edmÄ›tovĂ© SJ", q: "Co jsou pĹ™edmÄ›tovĂˇ hesla?", a: "PrekoordinovanĂ© lexikĂˇlnĂ­ jednotky pro popis obsahu dokumentu. Struktura: heslo (+ doplnÄ›k) â€“ podheslo (+ doplnÄ›k). PĹ™Ă­klad: 'DvoĹ™Ăˇk, AntonĂ­n â€“ hry divadelnĂ­ â€“ bibliografie'.", exp: "PĹ™edmÄ›tovĂˇ hesla majĂ­ pevnou strukturu: heslo â€“ podheslo. UmoĹľĹujĂ­ prĂˇci s vlastnĂ­mi jmĂ©ny a geografickĂ˝mi nĂˇzvy." },
    { category: "PĹ™edmÄ›tovĂ© SJ", q: "Co je inverze souslovĂ­?", a: "PĹ™ehozenĂ­ poĹ™adĂ­ slov v pĹ™edmÄ›tovĂ©m hesle pro ĂşÄŤely abecednĂ­ho Ĺ™azenĂ­. NapĹ™. 'loĹľiska metamorfovanĂˇ' mĂ­sto 'metamorfovanĂˇ loĹľiska'.", exp: "Inverze zajistĂ­, Ĺľe podobnĂˇ tĂ©mata jsou v abecednĂ­m katalogu blĂ­zko sebe. HledĂˇme pod podstatnĂ˝m jmĂ©nem." },
    { category: "PĹ™edmÄ›tovĂ© SJ", q: "Co jsou klĂ­ÄŤovĂˇ slova z nĂˇzvu?", a: "NejrychlejĹˇĂ­ pĹ™Ă­stup k obsahu - KWIC (Keyword in Context) a KWOC (Keyword out of Context). NevĂ˝hodou je zĂˇvislost na jazyce dokumentu.", exp: "KWIC/KWOC jsou automatickĂ© metody - ĹľĂˇdnĂ˝ indexĂˇtor. RychlĂ©, ale nepĹ™esnĂ©." },
    { category: "PĹ™edmÄ›tovĂ© SJ", q: "Kdo vytvoĹ™il unitermy?", a: "Mortimer Taube v 50. letech 20. stoletĂ­. SilnĂˇ postkoordinace - pĹŻvodnÄ› jen jednotlivĂˇ slova. PozdÄ›ji obohaceno a stalo se pĹ™edchĹŻdcem tezauru.", exp: "Unitermy = jednotlivĂˇ slova bez struktury. JednoduchĂ©, ale nepĹ™esnĂ©. Vedly k vĂ˝voji tezaurĹŻ." },
    { category: "PĹ™edmÄ›tovĂ© SJ", q: "JakĂ© vztahy obsahuje tezaurus?", a: "Hierarchie (BT/NT - nadĹ™azenĂ˝/podĹ™azenĂ˝), Ekvivalence (USE/UF - viz/ekvivalent), Asociace (RT - pĹ™Ă­buznĂ˝ termĂ­n).", exp: "BT=Broader Term, NT=Narrower Term, RT=Related Term, UF=Used For. StandardnĂ­ zkratky v tezaurech." },
    { category: "PĹ™edmÄ›tovĂ© SJ", q: "Co je deskriptorovĂ˝ odstavec?", a: "Deskriptor se vĹˇemi vztahy k nÄ›mu pĹ™ipojenĂ˝mi - nadĹ™azenĂ©, podĹ™azenĂ©, pĹ™Ă­buznĂ© termĂ­ny a nedeskriptory.", exp: "DeskriptorovĂ˝ odstavec je zĂˇklad tezauru - ukazuje deskriptor v kontextu vĹˇech jeho vztahĹŻ." },

    // Morfologie podrobnÄ›ji
    { category: "Morfologie SJ", q: "Co je kvazisynonymie?", a: "Vztah mezi termĂ­ny s podobnĂ˝mi vĂ˝znamy, kterĂ© pro nÄ›kterĂ© ĂşÄŤely mohou bĂ˝t povaĹľovĂˇny za synonyma. NapĹ™. 'automobil' a 'vĹŻz'.", exp: "Kvazi = 'jako by'. Nejsou to ĂşplnĂˇ synonyma, ale pro ĂşÄŤely SJ je povaĹľujeme za zamÄ›nitelnĂ©." },
    { category: "Morfologie SJ", q: "Co je homografie?", a: "Slova psanĂˇ stejnÄ›, ale vyslovovanĂˇ odliĹˇnÄ›. V ÄŤeĹˇtinÄ› mĂ©nÄ› ÄŤastĂ© neĹľ v angliÄŤtinÄ›.", exp: "Homografie = stejnĂ© psanĂ­, jinĂˇ vĂ˝slovnost. Anglicky: 'lead' (vĂ©st) vs. 'lead' (olovo)." },
    { category: "Morfologie SJ", q: "Co je partitivnĂ­ vztah?", a: "HierarchickĂ˝ vztah celek-ÄŤĂˇst. NapĹ™. 'auto' - 'motor', 'kolo'.", exp: "PartitivnĂ­ = ÄŤĂˇsti celku. Motor je ÄŚĂST auta, ne DRUH auta. JinĂ˝ vztah neĹľ generickĂ˝." },
    { category: "Morfologie SJ", q: "Co je generickĂ˝ vztah?", a: "HierarchickĂ˝ vztah rod-druh. NapĹ™. 'vozidlo' - 'automobil', 'motocykl'.", exp: "GenerickĂ˝ = rod-druh. Automobil JE DRUH vozidla. KaĹľdĂ˝ automobil je vozidlo." },
    { category: "Morfologie SJ", q: "Co je polyhierarchie?", a: "Situace kdy jeden pojem je podĹ™azen vĂ­ce nadĹ™azenĂ˝m pojmĹŻm. NapĹ™. 'biofyzika' pod 'fyzikou' i 'biologiĂ­'.", exp: "Polyhierarchie = vĂ­ce rodiÄŤĹŻ. V reĂˇlnĂ©m svÄ›tÄ› bÄ›ĹľnĂ©. Tezaury to umoĹľĹujĂ­." },

    // ObsahovĂˇ analĂ˝za a indexace
    { category: "Indexace", q: "JakĂ© jsou typy ÄŤtenĂ­ pĹ™i obsahovĂ© analĂ˝ze?", a: "OrientaÄŤnĂ­ (zĂˇkladnĂ­ info), KurzorickĂ©/diagonĂˇlnĂ­ (rychlĂ©, klĂ­ÄŤovĂˇ slova), SelektivnĂ­ (hledĂˇnĂ­ konkrĂ©tnĂ­ho), StatarickĂ© (dĹŻkladnĂ©), RacionĂˇlnĂ­ (kombinace metod).", exp: "RĹŻznĂ© typy ÄŤtenĂ­ pro rĹŻznĂ© ĂşÄŤely. IndexĂˇtor kombinuje metody podle potĹ™eby - racionĂˇlnĂ­ pĹ™Ă­stup." },
    { category: "Indexace", q: "Co je vĂ˝bÄ›rovĂˇ vs. ĂşplnĂˇ indexace?", a: "VĂ˝bÄ›rovĂˇ (selective) zachycuje jen hlavnĂ­ tĂ©mata. ĂšplnĂˇ (exhaustive) zachycuje vĹˇechna tĂ©mata vÄŤetnÄ› vedlejĹˇĂ­ch.", exp: "VĂ˝bÄ›rovĂˇ = jen hlavnĂ­. ĂšplnĂˇ = vĹˇechno. Volba zĂˇvisĂ­ na ĂşÄŤelu systĂ©mu a zdrojĂ­ch." },
    { category: "Indexace", q: "JakĂ© faktory ovlivĹujĂ­ indexaci?", a: "IndexĂˇtor (zkuĹˇenost, znalosti, motivace), SJ (kvalita slovnĂ­ku, pravidla), Dokument (obor, struktura, jazyk), PracovnĂ­ podmĂ­nky.", exp: "Kvalita indexace zĂˇvisĂ­ na mnoha faktorech. LidskĂ˝ faktor je nejdĹŻleĹľitÄ›jĹˇĂ­ - proto ĹˇkolenĂ­." },
    { category: "Indexace", q: "V jakĂ© fĂˇzi vznikĂˇ nejvĂ­ce chyb?", a: "Identifikace pojmĹŻ (42,3%) - nejÄŤastÄ›ji opominutĂ­ hledisek. Zdrojem jsou indexĂˇtor a indexaÄŤnĂ­ pravidla.", exp: "42,3% chyb v identifikaci pojmĹŻ! NejÄŤastÄ›jĹˇĂ­ chyba = opominutĂ­. SystematickĂˇ kontrola je klĂ­ÄŤovĂˇ." },
    { category: "Indexace", q: "Co je formĂˇlnĂ­ relevance?", a: "Dva dokumenty majĂ­ tentĂ˝Ĺľ popis/SOD, ale nemusĂ­ bĂ˝t obsahovÄ› totoĹľnĂ©. DĹŻsledek nedokonalosti popisu.", exp: "FormĂˇlnĂ­ relevance = faleĹˇnĂˇ shoda. Popis nikdy neobsĂˇhne celĂ˝ obsah dokumentu." },

    // VyhledĂˇvĂˇnĂ­ podrobnÄ›ji
    { category: "VyhledĂˇvĂˇnĂ­", q: "Co jsou proximitnĂ­ operĂˇtory?", a: "UrÄŤujĂ­ vzdĂˇlenost hledanĂ˝ch vĂ˝razĹŻ v textu - buÄŹ poÄŤtem slov, nebo segmentem (vÄ›ta, odstavec). PĹ™edpoklad: blĂ­zkĂˇ slova = blĂ­zkĂ˝ vĂ˝znam.", exp: "ProximitnĂ­ = 'blĂ­zko sebe'. NEAR/5 = maximĂˇlnÄ› 5 slov mezi vĂ˝razy. ZvyĹˇuje pĹ™esnost." },
    { category: "VyhledĂˇvĂˇnĂ­", q: "Co je query expansion?", a: "RozĹˇiĹ™ovĂˇnĂ­ uĹľivatelskĂ©ho dotazu pomocĂ­ Ĺ™Ă­zenĂ©ho slovnĂ­ku - pĹ™idĂˇnĂ­ synonym, nadĹ™azenĂ˝ch/podĹ™azenĂ˝ch termĂ­nĹŻ.", exp: "Query expansion zvyĹˇuje recall - najdeme vĂ­c. SystĂ©m pĹ™idĂˇ synonyma a pĹ™Ă­buznĂ© termĂ­ny automaticky." },
    { category: "VyhledĂˇvĂˇnĂ­", q: "Jak Ĺ™Ă­zenĂ˝ slovnĂ­k Ĺ™eĹˇĂ­ vĂ­cejazyÄŤnost?", a: "VĂ­cejazyÄŤnĂ˝ tezaurus nebo klasifikace (nezĂˇvislĂˇ na pĹ™irozenĂ©m jazyce) umoĹľĹujĂ­ vyhledĂˇvat dokumenty v rĹŻznĂ˝ch jazycĂ­ch.", exp: "Klasifikace jako MDT jsou jazykovÄ› nezĂˇvislĂ© - ÄŤĂ­slo 821 znamenĂˇ literaturu v kaĹľdĂ©m jazyce." },
    { category: "VyhledĂˇvĂˇnĂ­", q: "Co je vektorovĂ© vyhledĂˇvĂˇnĂ­?", a: "ModernĂ­ metoda kde dokumenty jsou reprezentovĂˇny jako vektory. Podobnost se mÄ›Ĺ™Ă­ vzdĂˇlenostĂ­ vektorĹŻ v prostoru.", exp: "Vektory = matematickĂˇ reprezentace. ÄŚĂ­m blĂ­Ĺľ v prostoru, tĂ­m podobnÄ›jĹˇĂ­. ZĂˇklad modernĂ­ho AI vyhledĂˇvĂˇnĂ­." },
    { category: "VyhledĂˇvĂˇnĂ­", q: "Co je latentnĂ­ sĂ©mantickĂ© vyhledĂˇvĂˇnĂ­?", a: "PokroÄŤilĂˇ metoda pĹ™ekonĂˇvajĂ­cĂ­ synonymii a vĂ­cejazyÄŤnost pomocĂ­ statistickĂ˝ch modelĹŻ textu.", exp: "LSA/LSI = statistickĂ© metody. PĹ™ekonĂˇvajĂ­ synonymii bez tezauru - na zĂˇkladÄ› co-occurrence." },

    // OborovĂ© a specializovanĂ© systĂ©my
    { category: "SystĂ©my", q: "Co je MSC (Mathematics Subject Classification)?", a: "Klasifikace matematickĂ˝ch schĂ©mat. PouĹľĂ­vĂˇ binĂˇrnĂ­ notaci na 1. Ăşrovni s vynechĂˇvkami pro budoucĂ­ rozĹˇĂ­Ĺ™enĂ­.", exp: "MSC = standardnĂ­ klasifikace v matematice. VynechĂˇvky v ÄŤĂ­slovĂˇnĂ­ umoĹľĹujĂ­ pĹ™idĂˇvat novĂ© tĹ™Ă­dy." },
    { category: "SystĂ©my", q: "Co je NACE/CZ-NACE?", a: "Klasifikace ekonomickĂ˝ch ÄŤinnostĂ­ pouĹľĂ­vanĂˇ evropskĂ˝mi statistickĂ˝mi ĂşĹ™ady. CZ-NACE je ÄŤeskĂˇ verze s podrobnÄ›jĹˇĂ­m rozĹˇĂ­Ĺ™enĂ­m.", exp: "NACE se pouĹľĂ­vĂˇ pro statistiky firem. CZ-NACE mĂˇ ÄŤeskĂ© rozĹˇĂ­Ĺ™enĂ­ - vĂ­ce detailĹŻ pro ÄŚR." },
    { category: "SystĂ©my", q: "Co je backbone thesaurus?", a: "ObecnĂ˝ propojovacĂ­ tezaurus pro humanitnĂ­ vÄ›dy. SlouĹľĂ­ jako inspirace pĹ™i zavĂˇdÄ›nĂ­ novĂ˝ch systĂ©mĹŻ a pro propojenĂ­ existujĂ­cĂ­ch.", exp: "Backbone = 'pĂˇteĹ™'. Propojuje rĹŻznĂ© oborovĂ© tezaury. DĹŻleĹľitĂ˝ pro interoperabilitu." },
    { category: "SystĂ©my", q: "Co je TaDiRaH?", a: "Taxonomie vĂ˝zkumnĂ˝ch aktivit v digitĂˇlnĂ­ch humanitnĂ­ch vÄ›dĂˇch. Velmi dobĹ™e propracovanĂˇ struktura pro Ăşzkou specializovanou oblast.", exp: "TaDiRaH = Taxonomy of Digital Research Activities. PĹ™Ă­klad specializovanĂ© taxonomie pro DH." },
    { category: "SystĂ©my", q: "Co je ICS?", a: "MezinĂˇrodnĂ­ klasifikace norem a standardĹŻ. TĹ™Ă­ĂşrovĹovĂˇ struktura pro popis technickĂ˝ch norem.", exp: "ICS = International Classification for Standards. KaĹľdĂˇ norma ISO mĂˇ ICS kĂłd." },
    { category: "SystĂ©my", q: "Co je IPS?", a: "MezinĂˇrodnĂ­ klasifikace patentĹŻ. ÄŚtyĹ™ĂşrovĹovĂˇ struktura s velmi specifickĂ˝mi vĂ˝razy pro patentovou dokumentaci.", exp: "IPC = International Patent Classification. Velmi podrobnĂˇ - patenty vyĹľadujĂ­ pĹ™esnost." },

    // Budoucnost a trendy
    { category: "Budoucnost", q: "Co jsou LOD (Linked Open Data)?", a: "PropojenĂˇ otevĹ™enĂˇ data - trend standardizace pro maximĂˇlnĂ­ propojitelnost a sdĂ­lenĂ­ dat mezi systĂ©my.", exp: "LOD = propojenĂˇ data na webu. PouĹľĂ­vajĂ­ URI a RDF. Trend smÄ›rem k sĂ©mantickĂ©mu webu." },
    { category: "Budoucnost", q: "Co je AXI?", a: "Artificial Explainable Intelligence - AI podĂˇvajĂ­cĂ­ informace zpĹŻsobem, z nÄ›jĹľ je patrnĂ©, jak se k nim dopracovala.", exp: "XAI = Explainable AI. DĹŻleĹľitĂ© pro dĹŻvÄ›ryhodnost - vĂ­me, proÄŤ AI nÄ›co tvrdĂ­." },
    { category: "Budoucnost", q: "Kdy vznikl MARC formĂˇt?", a: "V 60. letech 20. stoletĂ­. FormĂˇt pro vĂ˝mÄ›nu bibliografickĂ˝ch informacĂ­, zĂˇklad pro modernĂ­ katalogizaci.", exp: "MARC = Machine-Readable Cataloging. Vznikl v Library of Congress. StĂˇle se pouĹľĂ­vĂˇ." },
    { category: "Budoucnost", q: "JakĂ© jsou trendy v organizaci informacĂ­?", a: "UĹľivatelsky vstĹ™Ă­cnĂˇ rozhranĂ­, vyhledĂˇvĂˇnĂ­ konkrĂ©tnĂ­ informace mĂ­sto dokumentu, rĹŻst ontologiĂ­, automatizace zpracovĂˇnĂ­, standardizace (LOD).", exp: "Trendy: od dokumentĹŻ k informacĂ­m, od manuĂˇlnĂ­ prĂˇce k automatizaci, od izolace k propojenĂ­ (LOD)." },

    // === NOVĂ‰ FLASHCARDS Z PĹEDNĂĹ EK ===

    // SbĂ­rky a kolekce
    { category: "SbĂ­rky", q: "Co je sbĂ­rka v kontextu organizace informacĂ­?", a: "SubsystĂ©m informaÄŤnĂ­ho systĂ©mu vytvĂˇĹ™enĂ˝ za urÄŤitĂ˝m ĂşÄŤelem. PrimĂˇrnÄ› plnĂ­ informaÄŤnĂ­ funkci (podpora poznĂˇnĂ­), sekundĂˇrnÄ› mĹŻĹľe plnit i dalĹˇĂ­ funkce (estetickou, ekonomickou, archivaÄŤnĂ­, sociĂˇlnĂ­).", exp: "SbĂ­rka = organizovanĂˇ skupina objektĹŻ. KlĂ­ÄŤovĂ© je, Ĺľe slouĹľĂ­ k vyhledĂˇvĂˇnĂ­ informacĂ­ - antikvariĂˇt nenĂ­ sbĂ­rka, protoĹľe primĂˇrnÄ› prodĂˇvĂˇ." },
    { category: "SbĂ­rky", q: "Co je GLAM?", a: "Galleries, Libraries, Archives, Museums - souhrnnĂ© oznaÄŤenĂ­ pro sbĂ­rkovĂ©/pamÄ›ĹĄovĂ© instituce.", exp: "GLAM instituce jsou sprĂˇvci sbĂ­rek - galerie, knihovny, archivy, muzea. VĹˇechny pracujĂ­ s organizacĂ­ informacĂ­." },
    { category: "SbĂ­rky", q: "JakĂ˝ je rozdĂ­l mezi sbĂ­rkou a nesbĂ­rkou?", a: "SbĂ­rka mĂˇ primĂˇrnÄ› informaÄŤnĂ­ funkci (knihovna, bibliografickĂˇ databĂˇze). NesbĂ­rka mĂˇ jinou primĂˇrnĂ­ funkci (antikvariĂˇt = prodej, zverimex = prodej zvĂ­Ĺ™at).", exp: "KlĂ­ÄŤem je primĂˇrnĂ­ funkce. Knihovna informuje, antikvariĂˇt prodĂˇvĂˇ - pĹ™estoĹľe obÄ› obsahujĂ­ knihy." },
    { category: "SbĂ­rky", q: "JakĂ© jsou vlastnosti sbĂ­rky?", a: "SlouĹľĂ­ urÄŤitĂ˝m uĹľivatelĹŻm, je formĂˇlnÄ› nebo obsahovÄ› specializovĂˇna, objekty jsou popsĂˇny a utĹ™Ă­dÄ›ny, vlastnĂ­k mĹŻĹľe bĂ˝t soukromĂ˝ nebo veĹ™ejnĂ˝.", exp: "SbĂ­rka nenĂ­ chaotickĂˇ - mĂˇ pravidla organizace a slouĹľĂ­ konkrĂ©tnĂ­mu ĂşÄŤelu a uĹľivatelĹŻm." },
    { category: "SbĂ­rky", q: "JakĂ˝ je rozdĂ­l mezi fyzickou a virtuĂˇlnĂ­ sbĂ­rkou?", a: "FyzickĂˇ sbĂ­rka obsahuje hmotnĂ© objekty na jednom mĂ­stÄ› (knihovna, muzeum). VirtuĂˇlnĂ­ sbĂ­rka propojuje objekty digitĂˇlnÄ› bez ohledu na fyzickĂ© umĂ­stÄ›nĂ­ (digitĂˇlnĂ­ knihovna, databĂˇze).", exp: "VirtuĂˇlnĂ­ sbĂ­rka mĹŻĹľe propojovat objekty z rĹŻznĂ˝ch institucĂ­ po celĂ©m svÄ›tÄ›." },

    // Atributy informaÄŤnĂ­ho objektu
    { category: "Atributy IO", q: "JakĂ© jsou dokumentografickĂ© ĂşrovnÄ› popisu IO?", a: "A) nosiÄŤ/mĂ©dium, B) forma, C) typ/druh, D) formĂˇt obsahu, E) ĹľĂˇnr, F) obsah.", exp: "6 ĂşrovnĂ­ od nejobecnÄ›jĹˇĂ­ch (nosiÄŤ) po nejkonkrĂ©tnÄ›jĹˇĂ­ (obsah). KaĹľdĂˇ ĂşroveĹ pĹ™idĂˇvĂˇ detail popisu." },
    { category: "Atributy IO", q: "Co je nosiÄŤ/mĂ©dium informaÄŤnĂ­ho objektu?", a: "FyzickĂ˝ materiĂˇl nesoucĂ­ informaci - mĹŻĹľe bĂ˝t analogovĂ˝ (kĂˇmen, hlĂ­na, papĂ­r) nebo digitĂˇlnĂ­.", exp: "NosiÄŤ je fyzickĂˇ podstata - papĂ­r knihy, plastovĂ˝ disk CD, magnetickĂ˝ pĂˇsek." },
    { category: "Atributy IO", q: "Co je forma informaÄŤnĂ­ho objektu?", a: "KonkrĂ©tnĂ­ podoba nosiÄŤe - kniha, gramofonovĂˇ deska, databĂˇze, webovĂˇ strĂˇnka.", exp: "Forma je fyzickĂˇ podoba. PapĂ­r (nosiÄŤ) â†’ kniha (forma). DigitĂˇlnĂ­ mĂ©dium â†’ databĂˇze (forma)." },
    { category: "Atributy IO", q: "Co je formĂˇt obsahu informaÄŤnĂ­ho objektu?", a: "ZpĹŻsob zĂˇznamu informacĂ­ - text, obraz, zvuk, audiovizuĂˇlnĂ­, data, komiks.", exp: "FormĂˇt obsahu = jak je informace zaznamenĂˇna. Kniha mĹŻĹľe mĂ­t textovĂ˝ nebo obrazovĂ˝ formĂˇt obsahu." },
    { category: "Atributy IO", q: "JakĂ© funkÄŤnĂ­ vlastnosti mĂˇ informaÄŤnĂ­ objekt?", a: "Dokumentuje (doklĂˇdĂˇ), deskribuje (popisuje), reprezentuje (pĹ™edstavuje, zastupuje), komunikuje (sdÄ›luje).", exp: "IO plnĂ­ rĹŻznĂ© funkce - fotografie dokumentuje udĂˇlost, mapa reprezentuje ĂşzemĂ­, dopis komunikuje zprĂˇvu." },
    { category: "Atributy IO", q: "JakĂ© jsou strukturĂˇlnĂ­ vlastnosti IO z hlediska reprezentace?", a: "OriginĂˇl, kopie, faksimile, falzifikĂˇt.", exp: "OriginĂˇl je pĹŻvodnĂ­ dĂ­lo. Kopie je reprodukce. Faksimile je pĹ™esnĂˇ kopie. FalzifikĂˇt je podvrh." },

    // LRM model
    { category: "LRM", q: "Co je LRM (Library Reference Model)?", a: "KoncepÄŤnĂ­ model pro popis bibliografickĂ˝ch entit. Nahradil dĹ™Ă­vÄ›jĹˇĂ­ FRBR. Definuje entity DĂ­lo, VyjĂˇdĹ™enĂ­, ProvedenĂ­, Jednotka.", exp: "LRM je zĂˇklad modernĂ­ katalogizace. RozliĹˇuje abstraktnĂ­ dĂ­lo od jeho konkrĂ©tnĂ­ch realizacĂ­." },
    { category: "LRM", q: "Co je entita 'DĂ­lo' v LRM?", a: "AbstraktnĂ­ intelektuĂˇlnĂ­ nebo umÄ›leckĂ˝ vĂ˝tvor. NapĹ™. 'BabiÄŤka' jako literĂˇrnĂ­ koncept BoĹľeny NÄ›mcovĂ©.", exp: "DĂ­lo existuje nezĂˇvisle na konkrĂ©tnĂ­m vydĂˇnĂ­. 'BabiÄŤka' je jedno dĂ­lo, i kdyĹľ mĂˇ stovky vydĂˇnĂ­." },
    { category: "LRM", q: "Co je entita 'VyjĂˇdĹ™enĂ­' v LRM?", a: "IntelektuĂˇlnĂ­ nebo umÄ›leckĂˇ realizace dĂ­la. NapĹ™. ÄŤeskĂ˝ text 'BabiÄŤky', anglickĂ˝ pĹ™eklad, audiokniha.", exp: "VyjĂˇdĹ™enĂ­ = konkrĂ©tnĂ­ forma dĂ­la. OriginĂˇl vs pĹ™eklad jsou rĹŻznĂˇ vyjĂˇdĹ™enĂ­ tĂ©hoĹľ dĂ­la." },
    { category: "LRM", q: "Co je entita 'ProvedenĂ­' v LRM?", a: "FyzickĂ© ztÄ›lesnÄ›nĂ­ vyjĂˇdĹ™enĂ­. NapĹ™. konkrĂ©tnĂ­ vydĂˇnĂ­ knihy (Albatros 2020, Odeon 1985).", exp: "ProvedenĂ­ = konkrĂ©tnĂ­ vydĂˇnĂ­. RĹŻznĂˇ nakladatelstvĂ­ vydĂˇvajĂ­ rĹŻznĂˇ provedenĂ­ tĂ©hoĹľ vyjĂˇdĹ™enĂ­." },
    { category: "LRM", q: "Co je entita 'Jednotka' v LRM?", a: "KonkrĂ©tnĂ­ exemplĂˇĹ™ provedenĂ­. NapĹ™. tento konkrĂ©tnĂ­ vĂ˝tisk knihy v mĂ˝ch rukou.", exp: "Jednotka = jeden kus. KaĹľdĂ˝ vĂ˝tisk je samostatnĂˇ jednotka, i kdyĹľ jsou identickĂ©." },

    // NotaÄŤnĂ­ systĂ©m
    { category: "Notace", q: "JakĂ© jsou typy notace podle druhu znakĹŻ?", a: "AlfabetickĂˇ (pĂ­smena), numerickĂˇ (ÄŤĂ­sla), desetinnĂˇ (desetinnĂˇ ÄŤĂ­sla), alfanumerickĂˇ/smĂ­ĹˇenĂˇ (kombinace).", exp: "LCC pouĹľĂ­vĂˇ alfanumerickou (PS3511), DDC pouĹľĂ­vĂˇ desetinnou (821.162.3), MDT kombinuje oba pĹ™Ă­stupy." },
    { category: "Notace", q: "JakĂ© jsou typy notace podle struktury?", a: "LineĂˇrnĂ­ (A11, A12, A13...) vs hierarchickĂˇ (A11, A11.1, A11.1.01...). HierarchickĂˇ lĂ©pe vyjadĹ™uje vztahy.", exp: "LineĂˇrnĂ­ = plochĂ© Ĺ™azenĂ­. HierarchickĂˇ = stromovĂˇ struktura. DDC a MDT jsou hierarchickĂ©." },
    { category: "Notace", q: "Co je expanzivnĂ­ notace?", a: "Notace umoĹľĹujĂ­cĂ­ pĹ™idĂˇvĂˇnĂ­ novĂ˝ch tĹ™Ă­d bez naruĹˇenĂ­ stĂˇvajĂ­cĂ­ struktury - 'pohostinnost' notaÄŤnĂ­ho systĂ©mu.", exp: "ExpanzivnĂ­ = mĹŻĹľeme rozĹˇiĹ™ovat. MDT je velmi expanzivnĂ­, LCC mĂ©nÄ› - proto mĂˇ rĹŻznÄ› podrobnĂ© ÄŤĂˇsti." },
    { category: "Notace", q: "Co je mnemotechnickĂˇ notace?", a: "Notace navrĹľenĂˇ tak, aby si ji bylo snadnĂ© zapamatovat. NapĹ™. L pro literaturu, M pro hudbu.", exp: "Mnemotechnika = pomĹŻcka pro pamÄ›ĹĄ. LCC pouĹľĂ­vĂˇ pĂ­smena asociovanĂˇ s obory (M=Music)." },
    { category: "Notace", q: "Co je separĂˇtor notace?", a: "Symbol oddÄ›lujĂ­cĂ­ ÄŤĂˇsti sloĹľenĂ© notace - teÄŤka, dvojteÄŤka, zĂˇvorky. UmoĹľĹuje kombinovat znaky.", exp: "SeparĂˇtory v MDT: . (podtĹ™Ă­da), : (vztah), + (slouÄŤenĂ­), / (rozsah). KaĹľdĂ˝ mĂˇ jinĂ˝ vĂ˝znam." },
    { category: "Notace", q: "Co je ÄŤistĂˇ vs smĂ­ĹˇenĂˇ notace?", a: "ÄŚistĂˇ pouĹľĂ­vĂˇ jeden typ znakĹŻ (jen ÄŤĂ­sla nebo jen pĂ­smena). SmĂ­ĹˇenĂˇ kombinuje vĂ­ce typĹŻ (pĂ­smena + ÄŤĂ­sla).", exp: "DDC = ÄŤistĂˇ (jen ÄŤĂ­sla). LCC = smĂ­ĹˇenĂˇ (pĂ­smena + ÄŤĂ­sla). SmĂ­ĹˇenĂˇ je flexibilnÄ›jĹˇĂ­." },

    // Prekoordinace a postkoordinace - detaily
    { category: "Pre/Post", q: "JakĂ˝ je sĂ©mantickĂ˝ vs syntaktickĂ˝ rozklad?", a: "SĂ©mantickĂ˝ rozklad (nedoporuÄŤuje se): barometr = tlak + mÄ›Ĺ™enĂ­ + pĹ™Ă­stroj. SyntaktickĂ˝ rozklad: knihovnickĂ© ÄŤasopisy = knihovnictvĂ­ + ÄŤasopisy.", exp: "SĂ©mantickĂ˝ rozklĂˇdĂˇ podle vĂ˝znamu (ztrĂˇcĂ­ se smysl). SyntaktickĂ˝ rozklĂˇdĂˇ podle slovnĂ­ch ÄŤĂˇstĂ­ (zachovĂˇvĂˇ smysl)." },
    { category: "Pre/Post", q: "Kdy pouĹľĂ­t prekoordinaci u souslovĂ­?", a: "KdyĹľ je souslovĂ­ bÄ›ĹľnĂ© (informaÄŤnĂ­ zdroje), rozklad vede ke ztrĂˇtÄ› vĂ˝znamu (filozofie dÄ›jin), obsahuje vlastnĂ­ jmĂ©no (BradfordĹŻv zĂˇkon), nebo modifikĂˇtor ztratil pĹŻvodnĂ­ vĂ˝znam (lehkĂ˝ prĹŻmysl).", exp: "NÄ›kterĂˇ souslovĂ­ nelze rozloĹľit beze ztrĂˇty vĂ˝znamu - 'lehkĂ˝ prĹŻmysl' nenĂ­ o vĂˇze." },
    { category: "Pre/Post", q: "JakĂ© jsou aplikaÄŤnĂ­ dopady pre/postkoordinace?", a: "Prekoordinace: sloĹľenĂ˝ pojem = jeden znak pro indexaci i vyhledĂˇvĂˇnĂ­. Postkoordinace: sloĹľenĂ˝ pojem = dĂ­lÄŤĂ­ znaky kombinovanĂ© aĹľ pĹ™i vyhledĂˇvĂˇnĂ­.", exp: "Pre = pĹ™esnĂ©, ale rigidnĂ­. Post = flexibilnĂ­, ale vyĹľaduje znalost kombinovĂˇnĂ­." },
    { category: "Pre/Post", q: "Co je princip: Vlastnost/ÄŤĂˇst Ă— ModifikĂˇtor:nositel/celek?", a: "Pravidlo pro syntaktickĂ˝ rozklad: lodnĂ­ motor = lodÄ› + motory. ÄŚinnost/objekt: indexace ÄŤlĂˇnkĹŻ = indexace + ÄŤlĂˇnky.", exp: "SystematickĂ˝ pĹ™Ă­stup k rozkladu souslovĂ­. PomĂˇhĂˇ rozhodnout, jak rozloĹľit sloĹľenĂ© pojmy." },

    // Indexace - detailnÄ›ji
    { category: "Indexace detail", q: "Co je orientaÄŤnĂ­ ÄŤtenĂ­?", a: "RychlĂ© zjiĹˇtÄ›nĂ­ zĂˇkladnĂ­ch informacĂ­ o dokumentu - nĂˇzev, autor, abstrakt, obsah.", exp: "OrientaÄŤnĂ­ = 'o ÄŤem to asi je'. NejrychlejĹˇĂ­ forma analĂ˝zy, staÄŤĂ­ pro ĂşvodnĂ­ rozhodnutĂ­." },
    { category: "Indexace detail", q: "Co je kurzorickĂ©/diagonĂˇlnĂ­ ÄŤtenĂ­?", a: "RychlĂ© prochĂˇzenĂ­ textu zamÄ›Ĺ™enĂ© na klĂ­ÄŤovĂˇ slova a zvĂ˝raznÄ›nĂ© ÄŤĂˇsti.", exp: "DiagonĂˇlnĂ­ = pĹ™eskakujeme, hledĂˇme dĹŻleĹľitĂ©. VhodnĂ© pro dlouhĂ© texty." },
    { category: "Indexace detail", q: "Co je selektivnĂ­ ÄŤtenĂ­?", a: "CĂ­lenĂ© hledĂˇnĂ­ konkrĂ©tnĂ­ informace v textu - odpovÄ›ÄŹ na specifickou otĂˇzku.", exp: "SelektivnĂ­ = hledĂˇm konkrĂ©tnĂ­ Ăşdaj. Ignoruji vĹˇe ostatnĂ­, zamÄ›Ĺ™uji se na cĂ­l." },
    { category: "Indexace detail", q: "Co je statarickĂ© ÄŤtenĂ­?", a: "DĹŻkladnĂ©, pomalĂ© ÄŤtenĂ­ celĂ©ho textu s plnĂ˝m porozumÄ›nĂ­m.", exp: "StatarickĂ© = ÄŤtu vĹˇe peÄŤlivÄ›. NejpomalejĹˇĂ­, ale nejĂşplnÄ›jĹˇĂ­ porozumÄ›nĂ­." },
    { category: "Indexace detail", q: "Co je racionĂˇlnĂ­ ÄŤtenĂ­?", a: "Kombinace rĹŻznĂ˝ch metod ÄŤtenĂ­ podle potĹ™eby - nejefektivnÄ›jĹˇĂ­ pĹ™Ă­stup pro indexĂˇtora.", exp: "RacionĂˇlnĂ­ = kombinuji metody podle situace. ProfesionĂˇlnĂ­ pĹ™Ă­stup k obsahovĂ© analĂ˝ze." },
    { category: "Indexace detail", q: "JakĂˇ je nejÄŤastÄ›jĹˇĂ­ indexaÄŤnĂ­ chyba?", a: "OpominutĂ­ hledisek (18,6% chyb). IndexĂˇtor pĹ™ehlĂ©dne dĹŻleĹľitĂ˝ aspekt dokumentu.", exp: "OpominutĂ­ = nevĹˇiml jsem si. SystematickĂˇ kontrola pomocĂ­ fazet mĹŻĹľe pomoci." },
    { category: "Indexace detail", q: "V jakĂ© fĂˇzi indexace vznikĂˇ nejvĂ­ce chyb?", a: "Ve fĂˇzi identifikace pojmĹŻ vznikĂˇ 42,3% vĹˇech chyb.", exp: "Identifikace pojmĹŻ je kritickĂˇ fĂˇze. Chyba zde se propaguje do celĂ©ho SOD." },
    { category: "Indexace detail", q: "JakĂ© jsou zdroje indexaÄŤnĂ­ch chyb?", a: "IndexĂˇtor (nezkuĹˇenost, nepozornost), indexaÄŤnĂ­ pravidla (nejasnĂˇ, neĂşplnĂˇ), Ĺ™Ă­zenĂ˝ slovnĂ­k (neaktuĂˇlnĂ­, mezery).", exp: "Chyby majĂ­ rĹŻznĂ© zdroje - proto je tĹ™eba Ĺˇkolit indexĂˇtory, udrĹľovat pravidla i slovnĂ­ky." },
    { category: "Indexace detail", q: "JakĂ© jsou typy chyb podle vlivu na vyhledĂˇvĂˇnĂ­?", a: "KomplexnĂ­ chyby sniĹľujĂ­cĂ­ Ăşplnost (23,4%), dĂ­lÄŤĂ­ chyby sniĹľujĂ­cĂ­ Ăşplnost (22,1%), dĂ­lÄŤĂ­ chyby sniĹľujĂ­cĂ­ Ăşplnost i pĹ™esnost (14,9%).", exp: "NÄ›kterĂ© chyby vedou k nenalezenĂ­ dokumentu (recall), jinĂ© k nalezenĂ­ nerelevantnĂ­ch (precision)." },

    // Konzistence indexace
    { category: "Konzistence", q: "JakĂ˝ je vzorec pro konzistenci mezi dvÄ›ma indexĂˇtory?", a: "C = a / b, kde a = poÄŤet shodnĂ˝ch znakĹŻ, b = celkovĂ˝ poÄŤet jedineÄŤnĂ˝ch znakĹŻ.", exp: "PĹ™Ă­klad: oba pĹ™idÄ›lili 5 znakĹŻ, 3 se shodujĂ­. a=3, b=7 (5+5-3), C=3/7=43%." },
    { category: "Konzistence", q: "Jak se poÄŤĂ­tĂˇ konzistence pro vĂ­ce indexĂˇtorĹŻ?", a: "C = prĹŻmÄ›r konzistenÄŤnĂ­ch pĂˇrĹŻ. VypoÄŤĂ­tĂˇme konzistenci pro kaĹľdou dvojici a zprĹŻmÄ›rujeme.", exp: "Pro 3 indexĂˇtory: C = (C12 + C13 + C23) / 3" },
    { category: "Konzistence", q: "JakĂ˝ je vztah mezi kvalitou a konzistencĂ­ indexace?", a: "KonzistentnĂ­ indexace nemusĂ­ bĂ˝t kvalitnĂ­, ale kvalitnĂ­ indexace zahrnuje konzistenci. Konzistence zlepĹˇuje efektivitu vyhledĂˇvĂˇnĂ­.", exp: "Dva indexĂˇtoĹ™i mohou bĂ˝t konzistentnÄ› ĹˇpatnĂ­. Konzistence je nutnĂˇ, ale ne dostaÄŤujĂ­cĂ­ podmĂ­nka kvality." },
    { category: "Konzistence", q: "Co je interindexer a intraindexer konzistence?", a: "Interindexer = shoda mezi rĹŻznĂ˝mi indexĂˇtory. Intraindexer = konzistence jednoho indexĂˇtora v ÄŤase.", exp: "IndexĂˇtor by mÄ›l bĂ˝t konzistentnĂ­ sĂˇm se sebou - stejnĂ˝ dokument = stejnĂ˝ popis." },

    // RedukovanĂ© texty - detailnÄ›ji
    { category: "RedukovanĂ© texty", q: "Co je strukturovanĂ˝ abstrakt?", a: "Abstrakt uspoĹ™ĂˇdanĂ˝ do logickĂ˝ch oddĂ­lĹŻ - obvykle: CĂ­l, Metody, VĂ˝sledky, ZĂˇvÄ›r.", exp: "StrukturovanĂ˝ abstrakt je standardem ve vÄ›deckĂ˝ch ÄŤasopisech. UsnadĹuje rychlou orientaci." },
    { category: "RedukovanĂ© texty", q: "Co je referĂˇt (review)?", a: "Souhrn obsahu orientujĂ­cĂ­ se na konkrĂ©tnĂ­ pĹ™Ă­nosy a vĂ˝sledky prezentovanĂ© v dokumentu.", exp: "ReferĂˇt je podrobnÄ›jĹˇĂ­ neĹľ abstrakt - hodnotĂ­ a shrnuje hlavnĂ­ vĂ˝sledky." },
    { category: "RedukovanĂ© texty", q: "Co je resumĂ© (summary)?", a: "PodrobnĂ˝ (ÄŤasto nÄ›kolikastrĂˇnkovĂ˝) cizojazyÄŤnĂ˝ souhrn obsahu kopĂ­rujĂ­cĂ­ strukturu originĂˇlnĂ­ publikace.", exp: "ResumĂ© je typicky na konci knihy v jinĂ©m jazyce - umoĹľĹuje cizincĹŻm porozumÄ›t obsahu." },
    { category: "RedukovanĂ© texty", q: "Co je extrakt (vĂ˝tah)?", a: "Charakteristika obsahu sestavenĂˇ z formulacĂ­ originĂˇlnĂ­ho textu - citace klĂ­ÄŤovĂ˝ch ÄŤĂˇstĂ­.", exp: "Extrakt neformuluje vlastnĂ­mi slovy - vybĂ­rĂˇ a kopĂ­ruje dĹŻleĹľitĂ© pasĂˇĹľe originĂˇlu." },
    { category: "RedukovanĂ© texty", q: "JakĂ˝ je rozdĂ­l mezi anotacĂ­ a abstraktem?", a: "Anotace je krĂˇtkĂ˝ informativnĂ­ souhrn ÄŤasto s upoutĂˇvkou nebo hodnocenĂ­m (nakladatelskĂˇ). Abstrakt je vÄ›cnĂˇ, objektivnĂ­ charakteristika obsahu.", exp: "Anotace = reklamnĂ­ text. Abstrakt = vÄ›deckĂ© shrnutĂ­. Anotace lĂˇkĂˇ, abstrakt informuje." },

    // VyhledĂˇvĂˇnĂ­ - detailnÄ›ji
    { category: "VyhledĂˇvĂˇnĂ­ detail", q: "Jak Ĺ™Ă­zenĂ˝ slovnĂ­k Ĺ™eĹˇĂ­ synonymii?", a: "Definuje preferovanĂ© termĂ­ny (deskriptory) a nepreferovanĂ© (nedeskriptory) s odkazy USE/UF.", exp: "Synonyma jsou sjednocena pod jeden preferovanĂ˝ termĂ­n - vyhledĂˇvĂˇnĂ­ najde vĹˇe." },
    { category: "VyhledĂˇvĂˇnĂ­ detail", q: "Jak Ĺ™Ă­zenĂ˝ slovnĂ­k Ĺ™eĹˇĂ­ homonymii?", a: "PouĹľĂ­vĂˇ relĂˇtory v zĂˇvorkĂˇch k rozliĹˇenĂ­ vĂ˝znamu: koruna (mÄ›na) vs koruna (strom).", exp: "RelĂˇtor jednoznaÄŤnÄ› identifikuje vĂ˝znam - nedochĂˇzĂ­ k zĂˇmÄ›nÄ›." },
    { category: "VyhledĂˇvĂˇnĂ­ detail", q: "Co jsou proximitnĂ­ operĂˇtory?", a: "OperĂˇtory urÄŤujĂ­cĂ­ vzdĂˇlenost hledanĂ˝ch vĂ˝razĹŻ - poÄŤtem slov (NEAR/5) nebo segmentem (SAME SENTENCE).", exp: "ProximitnĂ­ operĂˇtory zvyĹˇujĂ­ pĹ™esnost - blĂ­zkĂˇ slova obvykle tvoĹ™Ă­ smysluplnou frĂˇzi." },
    { category: "VyhledĂˇvĂˇnĂ­ detail", q: "Co je query expansion?", a: "AutomatickĂ© rozĹˇĂ­Ĺ™enĂ­ dotazu o synonyma a pĹ™Ă­buznĂ© termĂ­ny z Ĺ™Ă­zenĂ©ho slovnĂ­ku.", exp: "SystĂ©m pĹ™idĂˇ k 'automobil' i 'auto', 'vĹŻz'. ZvyĹˇuje Ăşplnost (recall)." },
    { category: "VyhledĂˇvĂˇnĂ­ detail", q: "Jak dĂ©lka SOD ovlivĹuje vyhledĂˇvĂˇnĂ­?", a: "DelĹˇĂ­ SOD (ĂşplnĂˇ indexace) â†’ vyĹˇĹˇĂ­ Ăşplnost (recall). KratĹˇĂ­ SOD (vĂ˝bÄ›rovĂˇ indexace) â†’ vyĹˇĹˇĂ­ pĹ™esnost (precision).", exp: "VĂ­ce znakĹŻ = vÄ›tĹˇĂ­ Ĺˇance na shodu, ale i na faleĹˇnou shodu." },
    { category: "VyhledĂˇvĂˇnĂ­ detail", q: "Jak ovlivĹuje typ uĹľivatele vyhledĂˇvĂˇnĂ­?", a: "OdbornĂ­k vyuĹľĂ­vĂˇ Ĺ™Ă­zenĂ˝ slovnĂ­k a strukturovanĂ© vyhledĂˇvĂˇnĂ­. BÄ›ĹľnĂ˝ uĹľivatel preferuje pĹ™irozenĂ˝ jazyk a fulltext.", exp: "SystĂ©my musĂ­ podporovat oba pĹ™Ă­stupy - kombinace je ideĂˇlnĂ­." },

    // KonkrĂ©tnĂ­ systĂ©my - pĹ™Ă­klady
    { category: "PĹ™Ă­klady systĂ©mĹŻ", q: "Co je ERIC Thesaurus?", a: "Tezaurus pro oblast vzdÄ›lĂˇvĂˇnĂ­ (Education Resources Information Center). PĹ™Ă­klad oborovĂ©ho tezauru.", exp: "ERIC je americkĂ˝ systĂ©m pro pedagogickou literaturu. Tezaurus mĂˇ omezenou, Ĺ™Ă­zenou slovnĂ­ zĂˇsobu." },
    { category: "PĹ™Ă­klady systĂ©mĹŻ", q: "Co je PSH (PolytematickĂ˝ strukturovanĂ˝ heslĂˇĹ™)?", a: "ÄŚeskĂ˝ polytematickĂ˝ tezaurus spravovanĂ˝ NĂˇrodnĂ­ technickou knihovnou. PokrĂ˝vĂˇ ĹˇirokĂ© spektrum oborĹŻ.", exp: "PSH je ÄŤeskĂ˝ nĂˇstroj - dĹŻleĹľitĂ˝ pro prĂˇci s ÄŤeskou odbornou literaturou." },
    { category: "PĹ™Ă­klady systĂ©mĹŻ", q: "Co je MeSH?", a: "Medical Subject Headings - lĂ©kaĹ™skĂ˝ tezaurus pro indexaci biomedicĂ­nskĂ© literatury v databĂˇzi PubMed.", exp: "MeSH je standard pro lĂ©kaĹ™skou literaturu. Velmi podrobnĂ˝ a pravidelnÄ› aktualizovanĂ˝." },
    { category: "PĹ™Ă­klady systĂ©mĹŻ", q: "Co je AAT (Art & Architecture Thesaurus)?", a: "Tezaurus pro umÄ›nĂ­ a architekturu spravovanĂ˝ Getty Research Institute. Velmi podrobnĂ˝ slovnĂ­k pro kulturnĂ­ dÄ›dictvĂ­.", exp: "AAT je standard pro popis umÄ›leckĂ˝ch dÄ›l a architektury. MezinĂˇrodnÄ› uznĂˇvanĂ˝." },
    { category: "PĹ™Ă­klady systĂ©mĹŻ", q: "Co je BARTOC?", a: "Basel Register of Thesauri, Ontologies & Classifications - metakatalog Ĺ™Ă­zenĂ˝ch slovnĂ­kĹŻ a klasifikacĂ­.", exp: "BARTOC je katalog katalogĹŻ - pomĂˇhĂˇ najĂ­t vhodnĂ˝ Ĺ™Ă­zenĂ˝ slovnĂ­k pro konkrĂ©tnĂ­ obor." },
    { category: "PĹ™Ă­klady systĂ©mĹŻ", q: "Co je Iconclass?", a: "KlasifikaÄŤnĂ­ systĂ©m pro popis ikonografickĂ©ho obsahu obrazĹŻ - co je na obraze zobrazeno.", exp: "Iconclass popisuje vĂ˝tvarnĂ© nĂˇmÄ›ty - postavy, pĹ™Ă­bÄ›hy, symboly v obrazech." },

    // HlavnĂ­ tĹ™Ă­dy klasifikacĂ­
    { category: "HlavnĂ­ tĹ™Ă­dy", q: "Kolik mĂˇ DDC hlavnĂ­ch tĹ™Ă­d?", a: "10 hlavnĂ­ch tĹ™Ă­d (000-900): 000 PoÄŤĂ­taÄŤe a informace, 100 Filosofie, 200 NĂˇboĹľenstvĂ­, 300 SociĂˇlnĂ­ vÄ›dy, 400 Jazyky, 500 PĹ™Ă­rodnĂ­ vÄ›dy, 600 Technologie, 700 UmÄ›nĂ­, 800 Literatura, 900 Historie.", exp: "DDC mĂˇ dekadickou strukturu - 10 hlavnĂ­ch tĹ™Ă­d, kaĹľdĂˇ se dÄ›lĂ­ na 10 podtĹ™Ă­d atd." },
    { category: "HlavnĂ­ tĹ™Ă­dy", q: "Kolik mĂˇ LCC hlavnĂ­ch tĹ™Ă­d?", a: "21 hlavnĂ­ch tĹ™Ă­d oznaÄŤenĂ˝ch pĂ­smeny: A-VĹˇeobecnosti, B-Filosofie, C-PomocnĂ© vÄ›dy historickĂ©, D-SvÄ›tovĂ© dÄ›jiny, E-F Amerika, G-Geografie, H-SociĂˇlnĂ­ vÄ›dy, J-Politika, K-PrĂˇvo, L-VzdÄ›lĂˇvĂˇnĂ­, M-Hudba, N-VĂ˝tvarnĂ© umÄ›nĂ­, P-Jazyk a literatura, Q-VÄ›da, R-MedicĂ­na, S-ZemÄ›dÄ›lstvĂ­, T-Technika, U-VojenstvĂ­, V-NĂˇmoĹ™nictvĂ­, Z-Bibliografie.", exp: "LCC pouĹľĂ­vĂˇ pĂ­smena. NÄ›kterĂ© oblasti (E-F Amerika) jsou podrobnÄ›jĹˇĂ­ - odrĂˇĹľĂ­ americkĂ˝ pĹŻvod." },
    { category: "HlavnĂ­ tĹ™Ă­dy", q: "Kolik mĂˇ MDT hlavnĂ­ch tĹ™Ă­d?", a: "10 hlavnĂ­ch tĹ™Ă­d (0-9): 0 VÄ›da a poznĂˇnĂ­ obecnÄ›, 1 Filosofie, 2 NĂˇboĹľenstvĂ­, 3 SpoleÄŤenskĂ© vÄ›dy, 4 (volnĂˇ), 5 Matematika a pĹ™Ă­rodnĂ­ vÄ›dy, 6 AplikovanĂ© vÄ›dy, 7 UmÄ›nĂ­, 8 JazykovÄ›da a literatura, 9 Geografie a dÄ›jiny.", exp: "MDT mĂˇ prĂˇzdnou tĹ™Ă­du 4 - umoĹľĹuje budoucĂ­ rozĹˇĂ­Ĺ™enĂ­. To je pĹ™Ă­klad expanzivity." },

    // PĹ™irozenĂ˝ vs umÄ›lĂ˝ jazyk
    { category: "PJ vs SJ", q: "Co je asymetrie pĹ™irozenĂ©ho jazyka?", a: "VĂ˝znam zĂˇvisĂ­ na kontextu, mnoho vĂ˝jimek, obsahuje synonyma a homonyma.", exp: "PĹ™irozenĂ˝ jazyk je bohatĂ˝, ale nepĹ™esnĂ˝ - jedno slovo mĹŻĹľe znamenat rĹŻznĂ© vÄ›ci." },
    { category: "PJ vs SJ", q: "Co je symetrie selekÄŤnĂ­ho jazyka?", a: "JednoznaÄŤnĂ˝ vĂ˝znam bez zĂˇvislosti na kontextu, bez vĂ˝jimek, synonyma a homonyma jsou vylouÄŤena.", exp: "SelekÄŤnĂ­ jazyk je pĹ™esnĂ˝, ale chudĹˇĂ­ - jeden termĂ­n = jeden vĂ˝znam." },
    { category: "PJ vs SJ", q: "JakĂ© jsou sloĹľky jazyka v porovnĂˇnĂ­ PJ a SJ?", a: "Lexikum/slovnĂ­k â†’ Ĺ™Ă­zenĂ˝ slovnĂ­k. Morfologie/tvorba slov â†’ konstrukce poĹ™ĂˇdacĂ­ch znakĹŻ. Syntax/vztahy mezi slovy â†’ kombinace poĹ™ĂˇdacĂ­ch znakĹŻ.", exp: "SJ mĂˇ analogickĂ© sloĹľky jako PJ, ale formalizovanĂ© a kontrolovanĂ©." },

    // PraktickĂ© Ăşlohy z pĹ™ednĂˇĹˇek
    { category: "PraktickĂ©", q: "Jak vybrat lexikĂˇlnĂ­ jednotku z tezauru?", a: "1) NajĂ­t pojem v abecednĂ­m rejstĹ™Ă­ku. 2) OvÄ›Ĺ™it, Ĺľe jde o deskriptor (ne nedeskriptor). 3) Zkontrolovat rozsah vĂ˝znamu v poznĂˇmce. 4) PouĹľĂ­t nejspecifiÄŤtÄ›jĹˇĂ­ deskriptor.", exp: "VĹľdy ovÄ›Ĺ™ujte, Ĺľe pouĹľĂ­vĂˇte preferovanĂ˝ termĂ­n a Ĺľe odpovĂ­dĂˇ zamĂ˝ĹˇlenĂ©mu vĂ˝znamu." },
    { category: "PraktickĂ©", q: "Co je triĂˇda v kontextu fazet?", a: "Trojice: specifickĂ˝ vĂ˝raz â†’ obecnĂ˝ vĂ˝raz â†’ fazeta. NapĹ™.: 'fortifikovanĂˇ vĂ­na' â†’ 'nĂˇpoje' â†’ 'obsah alkoholu'.", exp: "TriĂˇda ukazuje hierarchii a klasifikaÄŤnĂ­ charakteristiku (fazetu)." },
    { category: "PraktickĂ©", q: "Jak sprĂˇvnÄ› zapsat lexikĂˇlnĂ­ jednotku z tezauru?", a: "PĹ™esnÄ› podle slovnĂ­ku vÄŤetnÄ› velkĂ˝ch/malĂ˝ch pĂ­smen a ÄŤĂ­sla (plurĂˇl/singulĂˇr). NapĹ™. 'jĂ­zdnĂ­ kola' (ne 'jĂ­zdnĂ­ kolo').", exp: "PĹ™esnĂ˝ zĂˇpis je dĹŻleĹľitĂ˝ pro strojovĂ© zpracovĂˇnĂ­ a vyhledĂˇvĂˇnĂ­." },

    // === Z PĹEDNĂĹ KY 1: ĂšVOD DO ORGANIZACE INFORMACĂŤ ===

    // Informace a sdÄ›lenĂ­
    { category: "ZĂˇklady OI", q: "JakĂ˝ je rozdĂ­l mezi informacĂ­ a sdÄ›lenĂ­m?", a: "SdÄ›lenĂ­/zprĂˇva je nosiÄŤ informace. Informace vznikĂˇ teprve tehdy, kdyĹľ sdÄ›lenĂ­ zmÄ›nĂ­ poznatkovĂ˝ systĂ©m pĹ™Ă­jemce - formuje ho.", exp: "KdyĹľ slyĹˇĂ­m 'je pĂˇtek' poprvĂ©, je to informace. KdyĹľ to slyĹˇĂ­m podruhĂ©, je to jen sdÄ›lenĂ­ - jĂˇ uĹľ to vĂ­m, nic se nezmÄ›nilo." },
    { category: "ZĂˇklady OI", q: "Co dÄ›lĂˇ informace s pĹ™Ă­jemcem?", a: "Informace formuje (informuje) pĹ™Ă­jemce - mÄ›nĂ­ jeho poznatkovĂ˝ systĂ©m, rozĹˇiĹ™uje znalosti.", exp: "Slovo IN-FORMACE = vtiskĂˇvĂˇ formu. Informace mĂˇ smysl jen ve vztahu k pĹ™Ă­jemci, kterĂ˝ ji pĹ™ijme a zpracuje." },
    { category: "ZĂˇklady OI", q: "Kdo vytvoĹ™il model komunikace s vysĂ­laÄŤem, pĹ™ijĂ­maÄŤem, kanĂˇlem a Ĺˇumem?", a: "Claude Shannon. Jeho matematickĂˇ teorie komunikace (1948) definovala tyto zĂˇkladnĂ­ prvky pĹ™enosu informace.", exp: "Ĺ anonĹŻv model je technicistnĂ­ - nezabĂ˝vĂˇ se vĂ˝znamem, jen pĹ™enosem signĂˇlu. Pro nĂˇs je dĹŻleĹľitĂ˝ kontext a interpretace." },
    { category: "ZĂˇklady OI", q: "Co je entropie v kontextu organizace informacĂ­?", a: "Entropie je mĂ­ra neuspoĹ™Ăˇdanosti systĂ©mu - opak informace. NestrukturovanĂ˝, chaotickĂ˝ stav.", exp: "Informace se oznaÄŤuje jako negentropie (zĂˇpornĂˇ entropie). Organizace informacĂ­ = sniĹľovĂˇnĂ­ entropie, vytvĂˇĹ™enĂ­ Ĺ™Ăˇdu." },
    { category: "ZĂˇklady OI", q: "ProÄŤ organizujeme informace?", a: "Abychom snĂ­Ĺľili entropii (neuspoĹ™Ăˇdanost), usnadnili vyhledĂˇvĂˇnĂ­ a pĹ™ekonali problĂ©my informaÄŤnĂ­ho pĹ™etĂ­ĹľenĂ­.", exp: "Bez organizace bychom v mnoĹľstvĂ­ informacĂ­ 'utonuli' - cĂ­lem je struktura umoĹľĹujĂ­cĂ­ efektivnĂ­ nalezenĂ­ relevantnĂ­ch informacĂ­." },

    // ZaznamenanĂ© poznĂˇnĂ­
    { category: "ZĂˇklady OI", q: "ÄŚĂ­m se zabĂ˝vĂˇ organizace informacĂ­?", a: "ZaznamenanĂ˝mi informacemi - dokumenty, texty, artefakty. Pracujeme s tĂ­m, co bylo vytvoĹ™eno, zjiĹˇtÄ›no a zaznamenĂˇno.", exp: "NezabĂ˝vĂˇme se informacemi 'lĂ©tajĂ­cĂ­mi ve vzduchu', ale jejich zĂˇznamy - knihy, databĂˇze, webovĂ© strĂˇnky atd." },
    { category: "ZĂˇklady OI", q: "MĹŻĹľeme v organizaci informacĂ­ rozliĹˇovat pravdivost informace?", a: "Ne, nemĹŻĹľeme hodnotit pravdivost ani odliĹˇovat informaci od dezinformace. ZpracovĂˇvĂˇme zĂˇznamy bez hodnocenĂ­ jejich obsahu.", exp: "NĂˇĹˇ systĂ©m shromaĹľÄŹuje a popisuje dokumenty. VyhodnocenĂ­ pravdivosti je nad rĂˇmec organizace informacĂ­." },

    // TacitnĂ­ znalosti
    { category: "ZĂˇklady OI", q: "Co jsou tacitnĂ­ (skrytĂ©) znalosti?", a: "Znalosti, kterĂ© ÄŤlovÄ›k mĂˇ a pouĹľĂ­vĂˇ, ale nenĂ­ si jich vÄ›dom a neumĂ­ je explicitnÄ› formulovat.", exp: "NapĹ™. expertnĂ­ intuice, 'cit pro vÄ›c'. TacitnĂ­ znalosti jsou tÄ›Ĺľko pĹ™enositelnĂ© a formalizovatelnĂ© do systĂ©mĹŻ." },
    { category: "ZĂˇklady OI", q: "Co jsou explicitnĂ­ znalosti?", a: "Znalosti, kterĂ© dokĂˇĹľeme slovnÄ› vyjĂˇdĹ™it, popsat a pĹ™edat ostatnĂ­m.", exp: "Na rozdĂ­l od tacitnĂ­ch znalostĂ­ je mĹŻĹľeme zaznamenat a sdĂ­let - jsou zĂˇkladem dokumentĹŻ a databĂˇzĂ­." },

    // ArbitrĂˇrnost a sĂ©miotika
    { category: "ZĂˇklady OI", q: "Co znamenĂˇ arbitrĂˇrnost znaku?", a: "Znak nemĂˇ pĹ™Ă­mĂ˝, pĹ™irozenĂ˝ vztah k oznaÄŤovanĂ© vÄ›ci. Vztah je konvenÄŤnĂ­ (dohodnutĂ˝, nahodilĂ˝).", exp: "Slovo 'tuĹľka' nijak nesouvisĂ­ s tuĹľkou jako objektem. JedinĂ© vĂ˝jimky jsou citoslovce (gdĂˇkat napodobuje zvuk slepice)." },
    { category: "ZĂˇklady OI", q: "ProÄŤ je v sĂ©miotickĂ©m trojĂşhelnĂ­ku vztah znaku a vÄ›ci pĹ™eruĹˇovanĂ˝?", a: "ProtoĹľe znak se nevztahuje k vÄ›ci pĹ™Ă­mo, ale pĹ™es vĂ˝znam (pojem). Toto oznaÄŤujeme jako arbitrĂˇrnost znaku.", exp: "TrojĂşhelnĂ­k: Znak â†” VĂ˝znam â†” VÄ›c. PĹ™Ă­mĂˇ linka Znak--VÄ›c je ÄŤĂˇrkovanĂˇ (nepĹ™Ă­mĂ˝ vztah)." },

    // PrimĂˇrnĂ­ a sekundĂˇrnĂ­ ĂşroveĹ
    { category: "ZĂˇklady OI", q: "Co je primĂˇrnĂ­ ĂşroveĹ zpracovĂˇnĂ­ informacĂ­?", a: "Badatel/expert pracuje s primĂˇrnĂ­m objektem (jev, datel v pĹ™Ă­rodÄ›) a vytvĂˇĹ™Ă­ primĂˇrnĂ­ zĂˇznam (vÄ›deckĂ˝ ÄŤlĂˇnek, databĂˇzovĂ˝ zĂˇznam).", exp: "Ornitolog pozoruje datla, urÄŤuje druh a zapisuje do databĂˇze - to je primĂˇrnĂ­ zpracovĂˇnĂ­." },
    { category: "ZĂˇklady OI", q: "Co je sekundĂˇrnĂ­ ĂşroveĹ zpracovĂˇnĂ­ informacĂ­?", a: "InformaÄŤnĂ­ specialista pracuje s primĂˇrnĂ­m zĂˇznamem (dokument) a vytvĂˇĹ™Ă­ metadata - popis dokumentu.", exp: "Pro nĂˇs je informaÄŤnĂ­ objekt ten dokument, ne skuteÄŤnĂ˝ datel. VytvĂˇĹ™Ă­me katalogizaÄŤnĂ­ zĂˇznamy - sekundĂˇrnĂ­ dokumenty." },
    { category: "ZĂˇklady OI", q: "Co je terciĂˇrnĂ­ ĂşroveĹ zpracovĂˇnĂ­?", a: "DigitĂˇlnĂ­ badatel pracuje s metadaty a vytvĂˇĹ™Ă­ metametadata - analĂ˝za katalogizaÄŤnĂ­ch zĂˇznamĹŻ samotnĂ˝ch.", exp: "RelativnÄ› novĂ˝ pĹ™Ă­stup - zkoumĂˇme, jak byla katalogizace provedena, jakĂ© systĂ©my byly pouĹľity." },

    // PraktickĂ© pĹ™Ă­klady z pĹ™ednĂˇĹˇky
    { category: "PraktickĂ© OI", q: "Je tÄ›hotenstvĂ­ nemoc podle klasifikaÄŤnĂ­ch systĂ©mĹŻ?", a: "V MKN (MezinĂˇrodnĂ­ klasifikace nemocĂ­) je tÄ›hotenstvĂ­ zaĹ™azeno jako poloĹľka, protoĹľe lĂ©kaĹ™ s nĂ­m pracuje v rĂˇmci diagnostik.", exp: "PragmatickĂ˝ kontext: lĂ©kaĹ™i Ĺ™eĹˇĂ­ tÄ›hotenstvĂ­, proto je v lĂ©kaĹ™skĂ˝ch tĹ™Ă­dicĂ­ch systĂ©mech. V jinĂ˝ch (biologie) je zaĹ™azeno jinam." },
    { category: "PraktickĂ© OI", q: "Je Franz Kafka ÄŤeskĂ˝ spisovatel?", a: "ZĂˇleĹľĂ­ na systĂ©mu: psal nÄ›mecky (ne ÄŤeĹˇtina), ale Ĺľil a tvoĹ™il v Praze (ÄŤeskĂ˝ kontext). Lexikon ÄŤeskĂ© literatury ho nezahrnuje.", exp: "PĹ™Ă­klad kdy musĂ­me zaujmout stanovisko. RozhodnutĂ­ zĂˇvisĂ­ na ĂşÄŤelu a definici systĂ©mu - nenĂ­ jednoznaÄŤnĂˇ odpovÄ›ÄŹ." },
    { category: "PraktickĂ© OI", q: "Je nealkoholickĂ© pivo nealkoholickĂ˝ nĂˇpoj?", a: "Obsahuje aĹľ 0,5% alkoholu - nĂˇzev je marketingovĂ˝. SprĂˇvnÄ› by mÄ›lo bĂ˝t 'pivo se snĂ­ĹľenĂ˝m obsahem alkoholu'.", exp: "PĹ™Ă­klad matoucĂ­ho pojmenovĂˇnĂ­. Pro klasifikaci musĂ­me chĂˇpat skuteÄŤnĂ˝ obsah, ne jen nĂˇzev." },

    // FormĂˇtovĂ© a obsahovĂ© stavÄ›nĂ­
    { category: "PraktickĂ© OI", q: "Co je formĂˇtovĂ© stavÄ›nĂ­ fondu?", a: "UspoĹ™ĂˇdĂˇnĂ­ dokumentĹŻ podle jejich fyzickĂ© velikosti (formĂˇtu) - velkĂ© knihy spolu, malĂ© spolu.", exp: "ViditelnĂ© tĹ™eba v baroknĂ­ch knihovnĂˇch. VĂ˝hoda: efektivnĂ­ vyuĹľitĂ­ prostoru, estetickĂ˝ vzhled." },

    // === Z PĹEDNĂĹ KY 2: SBĂŤRKY A INFORMAÄŚNĂŤ OBJEKTY ===

    // SbĂ­rky - zĂˇklady
    { category: "SbĂ­rky", q: "Co je primĂˇrnĂ­ funkce sbĂ­rky?", a: "InformaÄŤnĂ­ funkce - pomĂˇhĂˇ pĹ™i poznĂˇvĂˇnĂ­ svÄ›ta, umoĹľĹuje uĹľivateli najĂ­t informace, kterĂ© potĹ™ebuje.", exp: "TĂ­m se sbĂ­rka liĹˇĂ­ od nesbĂ­rky. Knihovna mĂˇ primĂˇrnĂ­ informaÄŤnĂ­ funkci, antikvariĂˇt mĂˇ primĂˇrnĂ­ komerÄŤnĂ­ funkci." },
    { category: "SbĂ­rky", q: "JakĂ˝ je rozdĂ­l mezi knihovnou a antikvariĂˇtem z hlediska sbĂ­rek?", a: "Knihovna je sbĂ­rka (primĂˇrnĂ­ informaÄŤnĂ­ funkce), antikvariĂˇt nenĂ­ sbĂ­rka (primĂˇrnĂ­ komerÄŤnĂ­ funkce).", exp: "Oba mĂ­vajĂ­ knihy utĹ™Ă­dÄ›nĂ©, ale ĂşÄŤel je jinĂ˝ - knihovna informuje, antikvariĂˇt prodĂˇvĂˇ." },
    { category: "SbĂ­rky", q: "Je zoologickĂˇ zahrada sbĂ­rka?", a: "Ano - zvĂ­Ĺ™ata v ZOO jsou informaÄŤnĂ­ objekty, primĂˇrnĂ­ funkcĂ­ je vzdÄ›lĂˇvĂˇnĂ­ (cedulky, informace o druzĂ­ch).", exp: "Borges: zvĂ­Ĺ™ata v ZOO jsou dokumenty. Zverimex naopak sbĂ­rka nenĂ­ - primĂˇrnĂ­ funkce je komerÄŤnĂ­." },
    { category: "SbĂ­rky", q: "JakĂ© sekundĂˇrnĂ­ funkce mĹŻĹľe mĂ­t sbĂ­rka?", a: "EstetickĂˇ (krĂˇsa), ekonomickĂˇ (monetizace), archivaÄŤnĂ­ (uchovĂˇnĂ­ pro budoucnost), sociĂˇlnĂ­ (vzdÄ›lĂˇvacĂ­ akce).", exp: "PrimĂˇrnĂ­ je informaÄŤnĂ­, ale sbĂ­rka mĹŻĹľe plnit i dalĹˇĂ­ funkce - rokokovĂˇ knihovna byla i estetickĂˇ." },
    { category: "SbĂ­rky", q: "Co je metafora pamÄ›ti ve vztahu ke sbĂ­rkĂˇm?", a: "SbĂ­rka jako pamÄ›ĹĄ - mĂˇme uloĹľenĂ© nÄ›co, co mĹŻĹľeme vyvolat a pouĹľĂ­t pro svou potĹ™ebu.", exp: "Tato metafora se pouĹľĂ­vĂˇ i v odbornĂ© literatuĹ™e - sbĂ­rka uchovĂˇvĂˇ a zpĹ™Ă­stupĹuje poznĂˇnĂ­." },
    { category: "SbĂ­rky", q: "Co je virtuĂˇlnĂ­ sbĂ­rka?", a: "SbĂ­rka propojujĂ­cĂ­ objekty digitĂˇlnÄ› bez ohledu na fyzickĂ© umĂ­stÄ›nĂ­ originĂˇlĹŻ (napĹ™. databĂˇze tkanin z rĹŻznĂ˝ch farnostĂ­).", exp: "VirtuĂˇlnĂ­ sbĂ­rka obsahuje reprezentace objektĹŻ, ne originĂˇly. UmoĹľĹuje spojit roztrouĹˇenĂ© fondy." },

    // LRM Model
    { category: "LRM", q: "JakĂ© jsou ÄŤtyĹ™i ĂşrovnÄ› LRM modelu?", a: "DĂ­lo (abstraktnĂ­) â†’ VyjĂˇdĹ™enĂ­ (realizace textu) â†’ ProvedenĂ­ (konkrĂ©tnĂ­ vydĂˇnĂ­) â†’ Jednotka (jeden exemplĂˇĹ™).", exp: "LRM = Library Reference Model. Nahradil FRBR. RozliĹˇuje abstraktnĂ­ myĹˇlenku od fyzickĂ© realizace." },
    { category: "LRM", q: "Co je DĂ­lo v LRM modelu?", a: "MyĹˇlenĂˇ intelektuĂˇlnĂ­ jednota - napĹ™. 'MĂˇj' jako koncept, nezĂˇvisle na konkrĂ©tnĂ­m textu nebo vydĂˇnĂ­.", exp: "DĂ­lo je abstraktnĂ­. MĂˇj existuje jako dĂ­lo, i kdyĹľ mĂˇ stovky vydĂˇnĂ­ s rĹŻznĂ˝mi texty." },
    { category: "LRM", q: "Co je VyjĂˇdĹ™enĂ­ (Expression) v LRM?", a: "KonkrĂ©tnĂ­ realizace dĂ­la - text v urÄŤitĂ©m jazyce. ZmÄ›na jedinĂ©ho pĂ­smene = jinĂ© vyjĂˇdĹ™enĂ­.", exp: "PĹ™eklady jsou rĹŻznĂˇ vyjĂˇdĹ™enĂ­ tĂ©hoĹľ dĂ­la. MĂˇcha psal 'MĂˇgy' (starĂ˝m pravopisem) - to je jinĂ© vyjĂˇdĹ™enĂ­ neĹľ dneĹˇnĂ­ 'MĂˇj'." },
    { category: "LRM", q: "Co je ProvedenĂ­ (Manifestation) v LRM?", a: "KonkrĂ©tnĂ­ fyzickĂˇ realizace - typografie, vazba, obĂˇlka. NapĹ™. vydĂˇnĂ­ Albatros 2020.", exp: "ProvedenĂ­ mĂˇ specifickĂ© fyzickĂ© vlastnosti. RĹŻznĂˇ nakladatelstvĂ­ = rĹŻznĂˇ provedenĂ­ tĂ©hoĹľ vyjĂˇdĹ™enĂ­." },
    { category: "LRM", q: "Co je Jednotka (Item) v LRM?", a: "Jeden konkrĂ©tnĂ­ exemplĂˇĹ™ - tento vĂ˝tisk knihy v mĂ˝ch rukou.", exp: "I identickĂ© vĂ˝tisky se mohou liĹˇit (vakĂˇty, vpisky, poĹˇkozenĂ­). KaĹľdĂ˝ exemplĂˇĹ™ je unikĂˇtnĂ­ jednotka." },
    { category: "LRM", q: "ProÄŤ mÄ›l MĂˇj stovky rĹŻznĂ˝ch vydĂˇnĂ­ s rĹŻznĂ˝mi texty?", a: "EdiÄŤnĂ­ Ăşpravy textu, cenzurnĂ­ zĂˇsahy (nacistĂ© zmÄ›nili 'vĹŻdce zhynul' na 'nĂˇĹˇ pĂˇn zhynul'), vypouĹˇtÄ›nĂ­ ÄŤĂˇstĂ­.", exp: "KaĹľdĂˇ zmÄ›na textu = jinĂ© VyjĂˇdĹ™enĂ­. MĂˇcha napsal 'MĂˇgy' starĂ˝m pravopisem, dnes ÄŤteme modernizovanĂ˝ text." },

    // InformaÄŤnĂ­ objekt - vlastnosti
    { category: "IO vlastnosti", q: "JakĂ˝ je rozdĂ­l mezi originĂˇlem, kopiĂ­, faksimilĂ­ a falzifikĂˇtem?", a: "OriginĂˇl = pĹŻvodnĂ­. Kopie = reprodukce. Faksimile = pĹ™esnĂˇ kopie (pĹ™iznanĂˇ). FalzifikĂˇt = napodobenina vydĂˇvanĂˇ za originĂˇl.", exp: "Faksimile se pouĹľĂ­vĂˇ na vĂ˝stavĂˇch mĂ­sto vzĂˇcnĂ˝ch dokumentĹŻ. FalzifikĂˇt je podvod." },
    { category: "IO vlastnosti", q: "JakĂ© jsou funkÄŤnĂ­ vlastnosti informaÄŤnĂ­ho objektu?", a: "Dokumentuje (doklĂˇdĂˇ), deskribuje (popisuje), reprezentuje (zastupuje tĹ™Ă­du objektĹŻ), komunikuje (sdÄ›luje).", exp: "KaĹľdĂ˝ IO by mÄ›l alespoĹ nÄ›kterĂ© z tÄ›chto funkcĂ­ plnit - to ho odliĹˇuje od bÄ›ĹľnĂ©ho pĹ™edmÄ›tu." },
    { category: "IO vlastnosti", q: "Co znamenĂˇ, Ĺľe dokument 'reprezentuje' tĹ™Ă­du?", a: "Jeden vĂ˝tisk z nĂˇkladu 2800 ks reprezentuje vĹˇechny ostatnĂ­ - pĹ™edpoklĂˇdĂˇme, Ĺľe jsou totoĹľnĂ©.", exp: "V praxi nejsou ĂşplnÄ› totoĹľnĂ© (vakĂˇty, vpisky), ale pro ĂşÄŤely zpracovĂˇnĂ­ je povaĹľujeme za identickĂ©." },

    // AnalogovĂ© vs digitĂˇlnĂ­
    { category: "MĂ©dia", q: "JakĂ˝ je rozdĂ­l mezi analogovĂ˝m a digitĂˇlnĂ­m dokumentem z hlediska kulturnĂ­ hodnoty?", a: "Kniha nese kulturnĂ­ hodnoty a emoce (zniÄŤenĂ­ knihy Ĺˇokuje). CD/digitĂˇlnĂ­ verze tyto vrstvy postrĂˇdĂˇ.", exp: "Performance: roztrĹľenĂ­ knihy vyvolalo Ĺˇok, zlomenĂ­ CD nikoho nerozruĹˇilo. MĂ©dium nese poselstvĂ­ (McLuhan)." },
    { category: "MĂ©dia", q: "Co znamenĂˇ McLuhanovo 'mĂ©dium je poselstvĂ­'?", a: "KaĹľdĂ© mĂ©dium mĂˇ vlastnosti, kterĂ© pĹ™edurÄŤujĂ­, jak vnĂ­mĂˇme obsah. Forma ovlivĹuje pochopenĂ­.", exp: "StejnĂ˝ text v knize a na e-readeru pĹŻsobĂ­ jinak. Typografie knihy podporuje vnĂ­mĂˇnĂ­ obsahu." },
    { category: "MĂ©dia", q: "JakĂ˝ je problĂ©m elektronickĂ˝ch knih z hlediska typografie?", a: "ÄŚasto nemajĂ­ typografii vĹŻbec - pĹ™izpĹŻsobujĂ­ se displeji. TĂ­m se ztrĂˇcĂ­ vrstva podporujĂ­cĂ­ vnĂ­mĂˇnĂ­ obsahu.", exp: "Typografie nenĂ­ samoĂşÄŤelnĂˇ - je navrĹľenĂˇ tak, aby podporovala informaÄŤnĂ­ funkci textu." },

    // Kontinuita dokumentĹŻ
    { category: "Dokumenty", q: "Co je kontinuita dokumentu?", a: "RozliĹˇenĂ­, zda byl dokument vydĂˇn jednorĂˇzovÄ› (monografie) nebo opakovanÄ› (ÄŤasopis, roÄŤenka).", exp: "DĹŻleĹľitĂ© hledisko pro tĹ™Ă­dÄ›nĂ­ - periodika a seriĂˇly se zpracovĂˇvajĂ­ jinak neĹľ monografie." }
];


const quizData = [
    // === PROÄŚ TĹĂŤDĂŤME ===
    { q: "Co je hlavnĂ­ pĹ™Ă­ÄŤinou informaÄŤnĂ­ exploze?", options: ["RĹŻst populace", "TechnologickĂ˝ vĂ˝voj", "Vznik internetu", "Globalizace"], correct: 1, cat: "ProÄŤ tĹ™Ă­dĂ­me", exp: "TechnologickĂ˝ vĂ˝voj umoĹľnil rapidnĂ­ nĂˇrĹŻst kapacity pĹ™ijĂ­mat, uklĂˇdat a komunikovat informace. Ĺ lo zejmĂ©na o rozvoj tisku, elektronickĂ˝ch mĂ©diĂ­ a pozdÄ›ji digitĂˇlnĂ­ch technologiĂ­.", hint: "SouvisĂ­ to s technikou a schopnostĂ­ uchovĂˇvat informace." },
    { q: "Kdy zaÄŤala informaÄŤnĂ­ exploze?", options: ["Po 1. svÄ›tovĂ© vĂˇlce", "Po 2. svÄ›tovĂ© vĂˇlce", "V 19. stoletĂ­", "V roce 2000"], correct: 1, cat: "ProÄŤ tĹ™Ă­dĂ­me", exp: "InformaÄŤnĂ­ exploze se datuje zejmĂ©na po 2. svÄ›tovĂ© vĂˇlce, kdy doĹˇlo k masivnĂ­mu rozvoji vÄ›dy, techniky a mĂ©diĂ­ pro ĹˇĂ­Ĺ™enĂ­ informacĂ­.", hint: "Bylo to v polovinÄ› 20. stoletĂ­." },
    { q: "Co je informaÄŤnĂ­ pĹ™etĂ­ĹľenĂ­?", options: ["SubjektivnĂ­ psychologickĂ˝ stav", "ObjektivnĂ­ dĹŻsledek informaÄŤnĂ­ exploze", "Nedostatek informacĂ­", "Typ dokumentu"], correct: 1, cat: "ProÄŤ tĹ™Ă­dĂ­me", exp: "InformaÄŤnĂ­ pĹ™etĂ­ĹľenĂ­ je objektivnĂ­ jev - reĂˇlnÄ› existuje pĹ™Ă­liĹˇ mnoho informacĂ­, coĹľ komplikuje efektivnĂ­ vyhledĂˇvĂˇnĂ­. NezĂˇvisĂ­ na vnĂ­mĂˇnĂ­ jedince.", hint: "Je to mÄ›Ĺ™itelnĂ˝ stav, ne jen pocit." },
    { q: "Co je informaÄŤnĂ­ deprivace/neurĂłza?", options: ["ObjektivnĂ­ dĹŻsledek exploze", "SubjektivnĂ­ psychologickĂ˝ dĹŻsledek", "Typ vyhledĂˇvĂˇnĂ­", "Metoda indexace"], correct: 1, cat: "ProÄŤ tĹ™Ă­dĂ­me", exp: "InformaÄŤnĂ­ deprivace je subjektivnĂ­ psychologickĂ˝ stav - pocit, Ĺľe nemĂˇme dostatek relevantnĂ­ch informacĂ­ nebo jsme jimi naopak zahlceni. Jde o osobnĂ­ proĹľitek.", hint: "TĂ˝kĂˇ se to psychiky jedince." },
    { q: "JakĂ˝ je sprĂˇvnĂ˝ vztah: Data â†’ Informace â†’ Znalosti?", options: ["PĹ™idĂˇnĂ­ kontextu â†’ PĹ™idĂˇnĂ­ vĂ˝znamu", "PĹ™idĂˇnĂ­ vĂ˝znamu â†’ PĹ™idĂˇnĂ­ kontextu", "PĹ™idĂˇnĂ­ formĂˇtu â†’ PĹ™idĂˇnĂ­ struktury", "PĹ™idĂˇnĂ­ mĂ©dia â†’ PĹ™idĂˇnĂ­ formy"], correct: 1, cat: "ProÄŤ tĹ™Ă­dĂ­me", exp: "Data jsou surovĂ© symboly. PĹ™idĂˇnĂ­m vĂ˝znamu vznikajĂ­ informace. PĹ™idĂˇnĂ­m kontextu (propojenĂ­m s naĹˇimi zkuĹˇenostmi) vznikajĂ­ znalosti.", hint: "NejdĹ™Ă­v musĂ­me vÄ›dÄ›t, co to znamenĂˇ, pak to zasadĂ­me do souvislostĂ­." },
    { q: "Co jsou data?", options: ["Informace s kontextem", "ZaznamenanĂ© symbolickĂ© reprezentace", "Znalosti bez vĂ˝znamu", "Typ dokumentu"], correct: 1, cat: "ProÄŤ tĹ™Ă­dĂ­me", exp: "Data jsou zaznamenanĂ© symbolickĂ© reprezentace - Ĺ™etÄ›zce znakĹŻ bez pĹ™idÄ›lenĂ©ho vĂ˝znamu. NapĹ™Ă­klad ÄŤĂ­slo '42' samo o sobÄ› je jen datum.", hint: "Jsou to jen surovĂ© znaky bez vĂ˝znamu." },
    { q: "JakĂ© je mĂ©dium pro znalosti?", options: ["PapĂ­r", "DigitĂˇlnĂ­ nosiÄŤ", "Mozek", "DatabĂˇze"], correct: 2, cat: "ProÄŤ tĹ™Ă­dĂ­me", exp: "Znalosti existujĂ­ v lidskĂ©m mozku - jsou to informace propojenĂ© s kontextem a zkuĹˇenostmi ÄŤlovÄ›ka. Data a informace mĹŻĹľeme uklĂˇdat na nosiÄŤe, znalosti nikoli.", hint: "Je to biologickĂ©, nelze to nahrĂˇt na disk." },
    { q: "Co NENĂŤ souÄŤĂˇstĂ­ sĂ©miotickĂ©ho trojĂşhelnĂ­ku?", options: ["Jev (vÄ›c)", "Pojem (vĂ˝znam)", "Znak (reprezentace)", "Kontext (situace)"], correct: 3, cat: "ProÄŤ tĹ™Ă­dĂ­me", exp: "SĂ©miotickĂ˝ trojĂşhelnĂ­k mĂˇ tĹ™i vrcholy: jev (vÄ›c v realitÄ›), pojem (vĂ˝znam v mysli) a znak (reprezentace). Kontext nenĂ­ jeho souÄŤĂˇstĂ­.", hint: "Je to to, co urÄŤuje okolnosti, ale nenĂ­ vrcholem trojĂşhelnĂ­ku." },
    { q: "Co zkoumĂˇ sĂ©miotika?", options: ["Vztahy mezi formou a vĂ˝znamem", "Znaky a znakovĂ© soustavy", "Strukturu vÄ›t", "Tvary slov"], correct: 1, cat: "ProÄŤ tĹ™Ă­dĂ­me", exp: "SĂ©miotika je obecnĂˇ vÄ›da o znacĂ­ch a znakovĂ˝ch soustavĂˇch. Zahrnuje sĂ©mantiku (vĂ˝znam), syntaktiku (strukturu) a pragmatiku (uĹľitĂ­).", hint: "Je to obecnĂˇ vÄ›da o vĹˇem, co nÄ›co zastupuje." },
    { q: "Co zkoumĂˇ sĂ©mantika?", options: ["ZnakovĂ© soustavy", "Vztahy mezi formou a vĂ˝znamem znakĹŻ", "Strukturu jazyka", "LidskĂ© poznĂˇnĂ­"], correct: 1, cat: "ProÄŤ tĹ™Ă­dĂ­me", exp: "SĂ©mantika je souÄŤĂˇstĂ­ sĂ©miotiky a zkoumĂˇ vztahy mezi formou znaku a jeho vĂ˝znamem - tedy co znaky znamenajĂ­.", hint: "ZabĂ˝vĂˇ se vĂ˝znamem." },
    { q: "Co je epistemologie?", options: ["Nauka o znacĂ­ch", "FilosofickĂˇ disciplĂ­na zkoumajĂ­cĂ­ poznĂˇnĂ­", "Teorie klasifikace", "Metoda indexace"], correct: 1, cat: "ProÄŤ tĹ™Ă­dĂ­me", exp: "Epistemologie (teorie poznĂˇnĂ­) je filosofickĂˇ disciplĂ­na zkoumajĂ­cĂ­ lidskĂ© poznĂˇnĂ­ - jeho vznik, proces, pĹ™edmÄ›t a limity.", hint: "Filosofie poznĂˇnĂ­." },
    { q: "KterĂ˝ PopperĹŻv svÄ›t zahrnuje zaznamenanĂ© lidskĂ© poznĂˇnĂ­?", options: ["PI", "PII", "PIII", "PIV"], correct: 2, cat: "ProÄŤ tĹ™Ă­dĂ­me", exp: "PIII (tĹ™etĂ­ svÄ›t) zahrnuje zaznamenanĂ© lidskĂ© poznĂˇnĂ­ - knihy, dokumenty, databĂˇze. Je to oblast komunikaÄŤnĂ­ch nĂˇstrojĹŻ a externĂ­ho poznĂˇnĂ­.", hint: "Je to svÄ›t knihoven a databĂˇzĂ­." },
    { q: "Co pĹ™edstavuje PopperĹŻv svÄ›t PI?", options: ["PoznĂˇvajĂ­cĂ­ subjekt", "ZaznamenanĂ© poznĂˇnĂ­", "SvÄ›t vÄ›cĂ­ a jevĹŻ", "KomunikaÄŤnĂ­ nĂˇstroje"], correct: 2, cat: "ProÄŤ tĹ™Ă­dĂ­me", exp: "PI (prvnĂ­ svÄ›t) je svÄ›t fyzickĂ˝ch vÄ›cĂ­ a jevĹŻ - materiĂˇlnĂ­ realita kolem nĂˇs. Zahrnuje pĹ™edmÄ›ty, kterĂ© mĹŻĹľeme vnĂ­mat smysly.", hint: "FyzickĂˇ realita." },
    { q: "Co pĹ™edstavuje PopperĹŻv svÄ›t PII?", options: ["SvÄ›t vÄ›cĂ­", "PoznĂˇvajĂ­cĂ­ subjekt", "ZaznamenanĂ© poznĂˇnĂ­", "ZnakovĂ˝ systĂ©m"], correct: 1, cat: "ProÄŤ tĹ™Ă­dĂ­me", exp: "PII (druhĂ˝ svÄ›t) pĹ™edstavuje poznĂˇvajĂ­cĂ­ subjekt - lidskou mysl, kterĂˇ manipuluje s vÄ›cmi (PI), pojmy a znaky (PIII).", hint: "LidskĂˇ mysl." },
    { q: "JakĂ˝ je charakter znakĹŻ v sĂ©miotickĂ©m trojĂşhelnĂ­ku?", options: ["PĹ™irozenĂ˝", "ArbitrĂˇrnĂ­ (nahodilĂ˝, konvenÄŤnĂ­)", "LogickĂ˝", "HierarchickĂ˝"], correct: 1, cat: "ProÄŤ tĹ™Ă­dĂ­me", exp: "Znaky jsou arbitrĂˇrnĂ­ (nahodilĂ©, konvenÄŤnĂ­) - vztah mezi znakem a vĂ˝znamem je dĂˇn dohodou, nikoli pĹ™irozenou souvislostĂ­. Proto rĹŻznĂ© jazyky majĂ­ rĹŻznĂˇ slova pro stejnĂ© vÄ›ci.", hint: "ZĂˇleĹľĂ­ na dohodÄ›, ne na pĹ™Ă­rodÄ›." },
    { q: "Kdo formuloval teorii tĹ™Ă­ svÄ›tĹŻ?", options: ["Melvil Dewey", "Karl Popper a John Eccles", "Ranganathan", "Paul Otlet"], correct: 1, cat: "ProÄŤ tĹ™Ă­dĂ­me", exp: "Teorii tĹ™Ă­ svÄ›tĹŻ formulovali filozof Karl Popper a neurovÄ›dec John Eccles. Tato teorie pomĂˇhĂˇ pochopit vztah mezi realitou, myslĂ­ a zaznamenanĂ˝mi informacemi.", hint: "Byl to slavnĂ˝ filozof vÄ›dy." },

    // === CO KDO TĹĂŤDĂŤ ===
    { q: "Co je taxonomie?", options: ["Teorie klasifikace dokumentĹŻ", "VÄ›da o klasifikaci organismĹŻ", "Typ selekÄŤnĂ­ho jazyka", "Metoda indexace"], correct: 1, cat: "Co kdo tĹ™Ă­dĂ­", exp: "Taxonomie je vÄ›da zabĂ˝vajĂ­cĂ­ se teoriĂ­ a praxĂ­ klasifikace organismĹŻ. V ĹˇirĹˇĂ­m smyslu se termĂ­n pouĹľĂ­vĂˇ i pro strukturovanĂ© klasifikace v jinĂ˝ch oblastech.", hint: "PĹŻvodnÄ› z biologie." },
    { q: "S ÄŤĂ­m pracuje informaÄŤnĂ­ specialista?", options: ["PĹ™Ă­mo s jevy", "S informaÄŤnĂ­mi objekty", "Pouze s metadaty", "S taxonomiemi organismĹŻ"], correct: 1, cat: "Co kdo tĹ™Ă­dĂ­", exp: "InformaÄŤnĂ­ specialista pracuje s informaÄŤnĂ­mi objekty - dokumenty, zĂˇznamy, metadaty. Nepracuje pĹ™Ă­mo s jevy (vÄ›cmi), ale s jejich reprezentacemi.", hint: "Pracuje s tĂ­m, co nese informace." },
    { q: "Co je vĂ˝sledkem prĂˇce digitĂˇlnĂ­ho badatele?", options: ["Metadata", "Metametadata", "InformaÄŤnĂ­ objekt", "Taxonomie"], correct: 1, cat: "Co kdo tĹ™Ă­dĂ­", exp: "DigitĂˇlnĂ­ badatel vytvĂˇĹ™Ă­ metametadata - metadata o metadatech. NapĹ™Ă­klad popis toho, jak byla katalogizace provedena nebo jakĂ© standardy byly pouĹľity.", hint: "Data o datech o datech." },

    // === CO TĹĂŤDĂŤME ===
    { q: "Co je dokument?", options: ["VirtuĂˇlnĂ­ objekt", "Objekt s fyzickou povahou nesoucĂ­ informace", "Pouze digitĂˇlnĂ­ soubor", "AbstraktnĂ­ pojem"], correct: 1, cat: "Co tĹ™Ă­dĂ­me", exp: "Dokument je objekt s fyzickou povahou (kniha, CD, soubor), kterĂ˝ nese informace a slouĹľĂ­ k jejich sdÄ›lovĂˇnĂ­. Je pĹ™edmÄ›tem informaÄŤnĂ­ho systĂ©mu.", hint: "MusĂ­ to bĂ˝t fyzicky zachytitelnĂ©." },
    { q: "Co je informaÄŤnĂ­ objekt?", options: ["Pouze fyzickĂ˝ dokument", "GenerickĂ˝ pojem pro jakĂ˝koli objekt nesoucĂ­ informace", "DigitĂˇlnĂ­ databĂˇze", "KlasifikaÄŤnĂ­ systĂ©m"], correct: 1, cat: "Co tĹ™Ă­dĂ­me", exp: "InformaÄŤnĂ­ objekt je obecnĂ˝ pojem pro jakĂ˝koli fyzickĂ˝ ÄŤi virtuĂˇlnĂ­ objekt nesoucĂ­ libovolnĂ˝ typ ÄŤi formĂˇt informace - ĹˇirĹˇĂ­ neĹľ pojem dokument.", hint: "NejĹˇirĹˇĂ­ pojem pro cokoliv s informacĂ­." },
    { q: "Co je informaÄŤnĂ­ pramen/zdroj?", options: ["JakĂ˝koli dokument", "InformaÄŤnĂ­ objekt relevantnĂ­ pro konkrĂ©tnĂ­ ĂşÄŤel", "DatabĂˇze metadat", "Typ klasifikace"], correct: 1, cat: "Co tĹ™Ă­dĂ­me", exp: "InformaÄŤnĂ­ pramen je informaÄŤnĂ­ objekt, kterĂ˝ obsahuje informace relevantnĂ­ pro konkrĂ©tnĂ­ ĂşÄŤel - napĹ™Ă­klad pro naplnÄ›nĂ­ informaÄŤnĂ­ potĹ™eby uĹľivatele.", hint: "Zdroj, ze kterĂ©ho ÄŤerpĂˇme." },
    { q: "JakĂ˝ je rozdĂ­l mezi indexacĂ­ a klasifikacĂ­?", options: ["Ĺ˝ĂˇdnĂ˝", "Indexace popisuje obsahem, klasifikace zaĹ™azuje do systĂ©mu", "Indexace je novÄ›jĹˇĂ­", "Klasifikace pouĹľĂ­vĂˇ klĂ­ÄŤovĂˇ slova"], correct: 1, cat: "Co tĹ™Ă­dĂ­me", exp: "Indexace popisuje obsah dokumentu pomocĂ­ klĂ­ÄŤovĂ˝ch slov nebo deskriptorĹŻ. Klasifikace zaĹ™azuje dokument na urÄŤitĂ© mĂ­sto v hierarchickĂ©m klasifikaÄŤnĂ­m systĂ©mu (MDT, DDC).", hint: "Popis vs. zaĹ™azenĂ­." },
    { q: "Co je primĂˇrnĂ­ dokument?", options: ["OriginĂˇlnĂ­ dokument", "SekundĂˇrnĂ­ zdroj", "KatalogizaÄŤnĂ­ zĂˇznam", "Abstrakt"], correct: 0, cat: "Co tĹ™Ă­dĂ­me", exp: "PrimĂˇrnĂ­ dokument je originĂˇlnĂ­, pĹŻvodnĂ­ dokument - napĹ™Ă­klad vÄ›deckĂ˝ ÄŤlĂˇnek, kniha. SekundĂˇrnĂ­ dokumenty jsou odvozenĂ© (bibliografie, abstrakty, katalogy).", hint: "PĹŻvodnĂ­ zdroj." },
    { q: "Co je granularita?", options: ["Typ notace", "ĂšroveĹ podrobnosti identifikace sloĹľek objektu", "HierarchickĂ˝ vztah", "Metoda ÄŤtenĂ­"], correct: 1, cat: "Co tĹ™Ă­dĂ­me", exp: "Granularita vyjadĹ™uje ĂşroveĹ podrobnosti - jak detailnÄ› identifikujeme jednotlivĂ© sloĹľky informaÄŤnĂ­ho objektu. VysokĂˇ granularita = velmi podrobnĂ˝ popis.", hint: "Jemnost rozliĹˇenĂ­." },

    // === SELEKÄŚNĂŤ JAZYKY - ZĂKLADY ===
    { q: "Co je selekÄŤnĂ­ jazyk?", options: ["PĹ™irozenĂ˝ jazyk", "Jazyk pro organizaci informacĂ­", "ProgramovacĂ­ jazyk", "KomunikaÄŤnĂ­ jazyk"], correct: 1, cat: "SelekÄŤnĂ­ jazyky", exp: "SelekÄŤnĂ­ jazyk je umÄ›lĂ˝ jazyk slouĹľĂ­cĂ­ k systematickĂ© organizaci informacĂ­ pro ĂşÄŤely vyhledĂˇvĂˇnĂ­, indexace a klasifikace. NenĂ­ to pĹ™irozenĂ˝ jazyk.", hint: "NĂˇstroj pro poĹ™ĂˇdĂˇnĂ­." },
    { q: "KterĂ˝ typ selekÄŤnĂ­ho jazyka je MDT?", options: ["PostkoordinovanĂ˝ pĹ™edmÄ›tovĂ˝", "PrekoordinovanĂ˝ systematickĂ˝", "PostkoordinovanĂ˝ systematickĂ˝", "PrekoordinovanĂ˝ pĹ™edmÄ›tovĂ˝"], correct: 1, cat: "SelekÄŤnĂ­ jazyky", exp: "MDT (MezinĂˇrodnĂ­ desetinnĂ© tĹ™Ă­dÄ›nĂ­) je prekoordinovanĂ˝ systematickĂ˝ SJ - mĂˇ pĹ™edem danou hierarchickou strukturu a znaky se pĹ™idÄ›lujĂ­ jako celek.", hint: "HierarchickĂ˝ a hotovĂ˝ pĹ™edem." },
    { q: "KterĂ˝ typ selekÄŤnĂ­ho jazyka je tezaurus?", options: ["PrekoordinovanĂ˝ systematickĂ˝", "PostkoordinovanĂ˝ pĹ™edmÄ›tovĂ˝", "PrekoordinovanĂ˝ pĹ™edmÄ›tovĂ˝", "PostkoordinovanĂ˝ systematickĂ˝"], correct: 1, cat: "SelekÄŤnĂ­ jazyky", exp: "Tezaurus je postkoordinovanĂ˝ pĹ™edmÄ›tovĂ˝ SJ - deskriptory se kombinujĂ­ aĹľ pĹ™i vyhledĂˇvĂˇnĂ­ a je zamÄ›Ĺ™en na pĹ™edmÄ›tovĂ˝ (vÄ›cnĂ˝) popis.", hint: "Slova se kombinujĂ­ aĹľ pĹ™i hledĂˇnĂ­." },
    { q: "KterĂ˝ typ selekÄŤnĂ­ho jazyka jsou pĹ™edmÄ›tovĂˇ hesla?", options: ["PostkoordinovanĂ˝ pĹ™edmÄ›tovĂ˝", "PrekoordinovanĂ˝ pĹ™edmÄ›tovĂ˝", "SystematickĂ˝", "DeskriptorovĂ˝"], correct: 1, cat: "SelekÄŤnĂ­ jazyky", exp: "PĹ™edmÄ›tovĂˇ hesla jsou prekoordinovanĂ˝ pĹ™edmÄ›tovĂ˝ SJ - hesla jsou tvoĹ™ena jako sloĹľenĂ© celky pĹ™edem, ale jde o slovnĂ­ (nikoli systematickĂ˝/ÄŤĂ­selnĂ˝) popis.", hint: "SlovnĂ­ popis tvoĹ™enĂ˝ pĹ™edem." },
    { q: "Co je prekoordinace?", options: ["Pojmy se kombinujĂ­ pĹ™i vyhledĂˇvĂˇnĂ­", "Pojmy jsou zaĹ™azeny jako celek", "Typ notace", "Metoda ÄŤtenĂ­"], correct: 1, cat: "SelekÄŤnĂ­ jazyky", exp: "Prekoordinace = pojmy jsou kombinovĂˇny pĹ™edem pĹ™i indexaci a pĹ™idÄ›leny jako sloĹľenĂ© celky. NapĹ™. heslo 'ÄŚeskĂ© dÄ›jiny - 20. stoletĂ­' je prekoordinovanĂ©.", hint: "SpojenĂ­ pĹ™edem." },
    { q: "Co je postkoordinace?", options: ["Pojmy jsou zaĹ™azeny jako celek", "Pojmy se kombinujĂ­ aĹľ pĹ™i vyhledĂˇvĂˇnĂ­", "Typ hierarchie", "Metoda indexace"], correct: 1, cat: "SelekÄŤnĂ­ jazyky", exp: "Postkoordinace = pojmy se pĹ™idÄ›lujĂ­ jednotlivÄ› a kombinujĂ­ se aĹľ pĹ™i vyhledĂˇvĂˇnĂ­ pomocĂ­ booleovskĂ˝ch operĂˇtorĹŻ (AND, OR). TypickĂ© pro tezaury.", hint: "SpojenĂ­ aĹľ potom." },
    { q: "Co je fazeta?", options: ["Typ notace", "Kategorie entit s jednou klasifikaÄŤnĂ­ charakteristikou", "HierarchickĂ˝ vztah", "Typ dokumentu"], correct: 1, cat: "SelekÄŤnĂ­ jazyky", exp: "Fazeta je kategorie entit vytvoĹ™enĂˇ uplatnÄ›nĂ­m jednĂ© klasifikaÄŤnĂ­ charakteristiky (principium divisionis). NapĹ™. fazeta 'materiĂˇl', 'barva', 'pouĹľitĂ­'.", hint: "Jeden Ăşhel pohledu." },
    { q: "Co znamenĂˇ PMEST?", options: ["Typ notace MDT", "Personality, Matter, Energy, Space, Time", "PrekoordinaÄŤnĂ­ metoda", "Typ tezauru"], correct: 1, cat: "SelekÄŤnĂ­ jazyky", exp: "PMEST je fazetovĂˇ formulace z dvojteÄŤkovĂ©ho tĹ™Ă­dÄ›nĂ­ (Ranganathan): Personality (ĂşstĹ™ednĂ­ tĂ©ma), Matter (vlastnosti), Energy (procesy), Space (mĂ­sto), Time (ÄŤas).", hint: "Ranganathanova formule." },
    { q: "Kdy vznikl pojem selekÄŤnĂ­ jazyk?", options: ["V 19. stoletĂ­", "V 50./60. letech 20. stoletĂ­", "Po roce 2000", "V antice"], correct: 1, cat: "SelekÄŤnĂ­ jazyky", exp: "Pojem selekÄŤnĂ­ jazyk vznikl v 50.-60. letech 20. stoletĂ­ s rozvojem informaÄŤnĂ­ vÄ›dy a potĹ™ebou systematickĂ©ho popisu klasifikaÄŤnĂ­ch a indexaÄŤnĂ­ch nĂˇstrojĹŻ.", hint: "S nĂˇstupem poÄŤĂ­taÄŤĹŻ a informaÄŤnĂ­ vÄ›dy." },

    // === SYSTEMATICKĂ‰ SELEKÄŚNĂŤ JAZYKY ===
    { q: "KterĂ˝ systĂ©m vytvoĹ™il Melvil Dewey v roce 1876?", options: ["MDT", "LCC", "DDC", "CC"], correct: 2, cat: "SystematickĂ© SJ", exp: "Melvil Dewey vytvoĹ™il DDC (Dewey Decimal Classification) v roce 1876. Je to nejstarĹˇĂ­ a nejrozĹˇĂ­Ĺ™enÄ›jĹˇĂ­ modernĂ­ klasifikaÄŤnĂ­ systĂ©m.", hint: "AmerickĂ˝ systĂ©m, zĂˇklad vĹˇeho." },
    { q: "Co je DDC?", options: ["DvojteÄŤkovĂ© tĹ™Ă­dÄ›nĂ­", "Deweyho desetinnĂ© tĹ™Ă­dÄ›nĂ­", "DeskriptorovĂ˝ systĂ©m", "DigitĂˇlnĂ­ klasifikace"], correct: 1, cat: "SystematickĂ© SJ", exp: "DDC = Dewey Decimal Classification (Deweyho desetinnĂ© tĹ™Ă­dÄ›nĂ­). Pragmaticky orientovanĂ˝ enumerativnĂ­ systĂ©m pouĹľĂ­vanĂ˝ celosvÄ›tovÄ› v knihovnĂˇch.", hint: "DesetinnĂ© tĹ™Ă­dÄ›nĂ­." },
    { q: "JakĂ˝ charakter mĂˇ DDC?", options: ["FazetovĂ˝", "EnumerativnĂ­ (vĂ˝ÄŤtovĂ˝)", "PĹ™edmÄ›tovĂ˝", "DeskriptorovĂ˝"], correct: 1, cat: "SystematickĂ© SJ", exp: "DDC je enumerativnĂ­ (vĂ˝ÄŤtovĂ˝) systĂ©m - obsahuje pĹ™edem definovanĂ© vĹˇechny tĹ™Ă­dy. Na rozdĂ­l od fazetovĂ˝ch systĂ©mĹŻ nepracuje s kombinacemi aspektĹŻ.", hint: "VĹˇechno je pĹ™edem vypsanĂ©." },
    { q: "Co je LCC?", options: ["Deweyho tĹ™Ă­dÄ›nĂ­", "Klasifikace KongresovĂ© knihovny", "LondĂ˝nskĂˇ klasifikace", "LinguistickĂˇ klasifikace"], correct: 1, cat: "SystematickĂ© SJ", exp: "LCC = Library of Congress Classification. KlasifikaÄŤnĂ­ systĂ©m americkĂ© KongresovĂ© knihovny, vznikl na pĹ™elomu 19. a 20. stoletĂ­.", hint: "Knihovna Kongresu." },
    { q: "Na co je orientovĂˇna LCC?", options: ["EvropskĂ© reĂˇlie", "AmerickĂ© reĂˇlie", "AsijskĂ© reĂˇlie", "UniverzĂˇlnÄ›"], correct: 1, cat: "SystematickĂ© SJ", exp: "LCC je orientovĂˇna na americkĂ© reĂˇlie - byla vytvoĹ™ena pro potĹ™eby KongresovĂ© knihovny USA a odrĂˇĹľĂ­ americkĂ˝ pohled na organizaci znalostĂ­.", hint: "USA." },
    { q: "Kdo vytvoĹ™il MDT?", options: ["Melvil Dewey", "Paul Otlet a Henri La Fontaine", "Ranganathan", "Bliss"], correct: 1, cat: "SystematickĂ© SJ", exp: "MDT vytvoĹ™ili Paul Otlet a Henri La Fontaine na poÄŤĂˇtku 20. stoletĂ­ v Belgii jako rozĹˇĂ­Ĺ™enĂ­ DDC pro mezinĂˇrodnĂ­ bibliografii.", hint: "BelgiÄŤtĂ­ prĂˇvnĂ­ci." },
    { q: "JakĂ˝ pĹ™Ă­stup kombinuje MDT?", options: ["Pouze hierarchickĂ˝", "HierarchickĂ˝ a fazetovĂ˝", "Pouze fazetovĂ˝", "AbecednĂ­"], correct: 1, cat: "SystematickĂ© SJ", exp: "MDT kombinuje hierarchickĂ˝ pĹ™Ă­stup (zĂˇkladnĂ­ tĹ™Ă­dy) s fazetovĂ˝m (pomocnĂ© tabulky pro mĂ­sto, ÄŤas, jazyk, formu). To umoĹľĹuje flexibilnĂ­ popis.", hint: "Klasika plus flexibility." },
    { q: "Kdo vytvoĹ™il dvojteÄŤkovĂ© tĹ™Ă­dÄ›nĂ­ (CC)?", options: ["Dewey", "Otlet", "Ranganathan", "Bliss"], correct: 2, cat: "SystematickĂ© SJ", exp: "DvojteÄŤkovĂ© tĹ™Ă­dÄ›nĂ­ (Colon Classification) vytvoĹ™il indickĂ˝ knihovnĂ­k S. R. Ranganathan v roce 1933. Jde o prvnĂ­ plnÄ› fazetovĂ˝ systĂ©m.", hint: "IndickĂ˝ matematik." },
    { q: "Kdy vzniklo dvojteÄŤkovĂ© tĹ™Ă­dÄ›nĂ­?", options: ["1876", "1933", "1950", "1900"], correct: 1, cat: "SystematickĂ© SJ", exp: "DvojteÄŤkovĂ© tĹ™Ă­dÄ›nĂ­ (CC) vzniklo v roce 1933. Ranganathan ho vytvoĹ™il jako teoreticky ÄŤistĂ˝ fazetovĂ˝ systĂ©m zaloĹľenĂ˝ na formulaci PMEST.", hint: "TĹ™icĂˇtĂˇ lĂ©ta." },
    { q: "Co je BBC?", options: ["BritskĂˇ klasifikace", "Blissovo bibliografickĂ© tĹ™Ă­dÄ›nĂ­", "BibliografickĂˇ bĂˇze dat", "BinĂˇrnĂ­ klasifikace"], correct: 1, cat: "SystematickĂ© SJ", exp: "BBC = Bliss Bibliographic Classification. Teoreticky fundovanĂ˝ fazetovĂ˝ systĂ©m vytvoĹ™enĂ˝ H. E. Blissem (1940-1953), ale minimĂˇlnÄ› rozĹˇĂ­Ĺ™enĂ˝ v praxi.", hint: "Bliss." },
    { q: "JakĂ˝ je charakter BBC?", options: ["PragmatickĂ˝", "Teoreticky fundovanĂ˝, mĂˇlo rozĹˇĂ­Ĺ™enĂ˝", "EnumerativnĂ­", "ÄŚistÄ› abecednĂ­"], correct: 1, cat: "SystematickĂ© SJ", exp: "BBC je teoreticky velmi dobĹ™e fundovanĂ˝ fazetovĂ˝ systĂ©m s filosofickĂ˝m zĂˇkladem, ale v praxi se pĹ™Ă­liĹˇ nerozĹˇĂ­Ĺ™il kvĹŻli dominanci DDC a LCC.", hint: "SkvÄ›lĂˇ teorie, malĂˇ praxe." },
    { q: "Co obsahujĂ­ pomocnĂ© tabulky v MDT?", options: ["Pouze hlavnĂ­ znaky", "PomocnĂ© znaky (mĂ­sto, ÄŤas, jazyk, forma)", "AbecednĂ­ rejstĹ™Ă­k", "Seznam autorĹŻ"], correct: 1, cat: "SystematickĂ© SJ", exp: "PomocnĂ© tabulky MDT obsahujĂ­ znaky pro vyjĂˇdĹ™enĂ­ aspektĹŻ jako mĂ­sto (=), ÄŤas (\"), jazyk (=...), forma (0...). KombinujĂ­ se s hlavnĂ­mi znaky.", hint: "VĹˇechno kromÄ› hlavnĂ­ho tĂ©matu." },

    // === PĹEDMÄšTOVĂ‰ SELEKÄŚNĂŤ JAZYKY ===
    { q: "Co jsou pĹ™edmÄ›tovĂˇ hesla?", options: ["KlasifikaÄŤnĂ­ znaky", "PrekoordinovanĂ© lexikĂˇlnĂ­ jednotky", "PostkoordinovanĂ© deskriptory", "ÄŚĂ­selnĂ© kĂłdy"], correct: 1, cat: "PĹ™edmÄ›tovĂ© SJ", exp: "PĹ™edmÄ›tovĂˇ hesla jsou prekoordinovanĂ© lexikĂˇlnĂ­ jednotky - slovnĂ­ vyjĂˇdĹ™enĂ­ tĂ©matu sloĹľenĂ© pĹ™edem. Struktura: heslo â€“ podheslo â€“ doplnÄ›k.", hint: "SlovnĂ­ vyjĂˇdĹ™enĂ­ sloĹľenĂ© pĹ™edem." },
    { q: "Co je tezaurus?", options: ["KlasifikaÄŤnĂ­ systĂ©m", "PostkoordinovanĂ˝ systĂ©m s Ĺ™Ă­zenĂ˝m slovnĂ­kem", "Typ notace", "AbecednĂ­ seznam"], correct: 1, cat: "PĹ™edmÄ›tovĂ© SJ", exp: "Tezaurus je postkoordinovanĂ˝ systĂ©m s Ĺ™Ă­zenĂ˝m slovnĂ­kem, hierarchiĂ­ a dalĹˇĂ­mi vztahy. Deskriptory se kombinujĂ­ aĹľ pĹ™i vyhledĂˇvĂˇnĂ­.", hint: "ĹĂ­zenĂ˝ slovnĂ­k s hierarchiĂ­." },
    { q: "Co je deskriptor?", options: ["NepreferovanĂˇ lexikĂˇlnĂ­ jednotka", "PreferovanĂˇ lexikĂˇlnĂ­ jednotka", "KlasifikaÄŤnĂ­ znak", "PomocnĂ˝ symbol"], correct: 1, cat: "PĹ™edmÄ›tovĂ© SJ", exp: "Deskriptor je preferovanĂˇ (schvĂˇlenĂˇ) lexikĂˇlnĂ­ jednotka v tezauru, kterĂˇ se pouĹľĂ­vĂˇ pro indexaci a vyhledĂˇvĂˇnĂ­ dokumentĹŻ.", hint: "To hlavnĂ­ slovo, kterĂ© hledĂˇme." },
    { q: "Co je nedeskriptor?", options: ["PreferovanĂ˝ termĂ­n", "NepreferovanĂˇ LJ odkazujĂ­cĂ­ na deskriptor", "KlasifikaÄŤnĂ­ znak", "Typ notace"], correct: 1, cat: "PĹ™edmÄ›tovĂ© SJ", exp: "Nedeskriptor je nepreferovanĂˇ lexikĂˇlnĂ­ jednotka (synonymum), kterĂˇ nepopisuje dokument, ale odkazuje na preferovanĂ˝ deskriptor pomocĂ­ 'VIZ'.", hint: "To, co nepouĹľĂ­vĂˇme, ale odkazujeme z toho." },
    { q: "Kdy vznikly prvnĂ­ tezaury?", options: ["V 19. stoletĂ­", "Na pĹ™elomu 50. a 60. let 20. st.", "Po roce 2000", "V antice"], correct: 1, cat: "PĹ™edmÄ›tovĂ© SJ", exp: "PrvnĂ­ tezaury vznikly na pĹ™elomu 50. a 60. let 20. stoletĂ­ jako reakce na potĹ™ebu lĂ©pe organizovat rychle rostoucĂ­ vÄ›deckou literaturu.", hint: "PĹ™elom 50. a 60. let." },
    { q: "Co jsou unitermy?", options: ["SloĹľenĂˇ slova", "JednotlivĂˇ slova jako pĹ™edchĹŻdce tezauru", "KlasifikaÄŤnĂ­ znaky", "Typ notace"], correct: 1, cat: "PĹ™edmÄ›tovĂ© SJ", exp: "Unitermy (Mortimer Taube, 50. lĂ©ta) byly jednotlivĂˇ slova pro indexaci. SilnĂˇ postkoordinace - staly se pĹ™edchĹŻdcem modernĂ­ch tezaurĹŻ.", hint: "JednotlivĂˇ slova, pĹ™edchĹŻdce tezaurĹŻ." },
    { q: "Kdo vytvoĹ™il unitermy?", options: ["Dewey", "Mortimer Taube", "Ranganathan", "Otlet"], correct: 1, cat: "PĹ™edmÄ›tovĂ© SJ", exp: "Mortimer Taube vytvoĹ™il systĂ©m unitermĹŻ v 50. letech 20. stoletĂ­. Tento pĹ™Ă­stup silnĂ© postkoordinace ovlivnil vĂ˝voj tezaurĹŻ.", hint: "Otec unitermĹŻ." },
    { q: "Co je KWIC?", options: ["Klasifikace", "Keyword in context - rotovanĂ˝ rejstĹ™Ă­k", "Typ tezauru", "Metoda indexace"], correct: 1, cat: "PĹ™edmÄ›tovĂ© SJ", exp: "KWIC = Keyword In Context - rotovanĂ˝ rejstĹ™Ă­k, kde klĂ­ÄŤovĂˇ slova z nĂˇzvĹŻ jsou zobrazena abecednÄ› s okolnĂ­m kontextem.", hint: "KlĂ­ÄŤovĂ© slovo uprostĹ™ed." },
    { q: "Co je KWOC?", options: ["Klasifikace", "Keyword out of context", "Typ notace", "Metoda ÄŤtenĂ­"], correct: 1, cat: "PĹ™edmÄ›tovĂ© SJ", exp: "KWOC = Keyword Out of Context - klĂ­ÄŤovĂˇ slova jsou vytaĹľena z nĂˇzvu a uvedena samostatnÄ› s odkazem na celĂ˝ nĂˇzev.", hint: "KlĂ­ÄŤovĂ© slovo vytaĹľenĂ© ven." },

    // === MORFOLOGIE A STRUKTURA SJ ===
    { q: "Co je synonymie?", options: ["RĹŻznĂ© termĂ­ny pro rĹŻznĂ© pojmy", "StejnĂ© termĂ­ny pro rĹŻznĂ© pojmy", "RĹŻznĂ© termĂ­ny pro stejnĂ˝ pojem", "StejnĂ© termĂ­ny pro stejnĂ© pojmy"], correct: 2, cat: "Morfologie SJ", exp: "Synonymie = rĹŻznĂ© termĂ­ny reprezentujĂ­ stejnĂ˝ pojem. NapĹ™. 'automobil' a 'auto' jsou synonyma oznaÄŤujĂ­cĂ­ tentĂ˝Ĺľ pojem.", hint: "RĹŻznĂˇ slova, stejnĂ˝ vĂ˝znam." },
    { q: "Co je homonymie?", options: ["RĹŻznĂ© termĂ­ny pro stejnĂ˝ pojem", "StejnÄ› znÄ›jĂ­cĂ­/psanĂ© jednotky s rĹŻznĂ˝m vĂ˝znamem", "PĹ™Ă­buznĂ© termĂ­ny", "NadĹ™azenĂ© termĂ­ny"], correct: 1, cat: "Morfologie SJ", exp: "Homonymie = stejnÄ› znÄ›jĂ­cĂ­ nebo psanĂ© jednotky majĂ­ rĹŻznĂ˝ vĂ˝znam. NapĹ™. 'koruna' (mÄ›na, ÄŤĂˇst stromu, krĂˇlovskĂˇ).", hint: "StejnĂ© slovo, rĹŻznĂ© vĂ˝znamy." },
    { q: "Co je polysĂ©mie?", options: ["VĂ­ce termĂ­nĹŻ pro jeden pojem", "Jeden termĂ­n s vĂ­ce etymologicky souvisejĂ­cĂ­mi vĂ˝znamy", "ChybnĂ© psanĂ­", "Typ hierarchie"], correct: 1, cat: "Morfologie SJ", exp: "PolysĂ©mie = jeden termĂ­n mĂˇ vĂ­ce etymologicky souvisejĂ­cĂ­ch vĂ˝znamĹŻ. NapĹ™. 'kĹ™Ă­dlo' - klavĂ­rnĂ­, ptaÄŤĂ­, dveĹ™nĂ­.", hint: "VĂ­ce vĂ˝znamĹŻ jednoho slova." },
    { q: "Co je kvazisynonymie?", options: ["ĂšplnĂˇ synonymie", "TermĂ­ny s podobnĂ˝mi vĂ˝znamy povaĹľovanĂ© za synonyma", "Typ homonymie", "HierarchickĂ˝ vztah"], correct: 1, cat: "Morfologie SJ", exp: "Kvazisynonymie = termĂ­ny s podobnĂ˝mi (ne zcela totoĹľnĂ˝mi) vĂ˝znamy, kterĂ© se v rĂˇmci SJ povaĹľujĂ­ za synonyma pro zjednoduĹˇenĂ­.", hint: "Skoro stejnĂ©, tak to berem jako stejnĂ©." },
    { q: "Co je homografie?", options: ["Slova psanĂˇ stejnÄ› ale vyslovovanĂˇ odliĹˇnÄ›", "Slova znÄ›jĂ­cĂ­ stejnÄ›", "Typ synonymie", "Metoda indexace"], correct: 0, cat: "Morfologie SJ", exp: "Homografie = slova psanĂˇ stejnÄ›, ale vyslovovanĂˇ odliĹˇnÄ› a s rĹŻznĂ˝m vĂ˝znamem. V ÄŤeĹˇtinÄ› mĂ©nÄ› ÄŤastĂ© neĹľ v angliÄŤtinÄ›.", hint: "StejnÄ› se pĂ­Ĺˇe, jinak ÄŤte." },
    { q: "Co je relĂˇtor?", options: ["Typ notace", "VĂ˝raz k rozliĹˇenĂ­ vĂ˝znamu homonym", "KlasifikaÄŤnĂ­ znak", "Typ dokumentu"], correct: 1, cat: "Morfologie SJ", exp: "RelĂˇtor je slovnĂ­ vĂ˝raz v zĂˇvorce k rozliĹˇenĂ­ vĂ˝znamu homonym, napĹ™. 'koruna (mÄ›na)' vs. 'koruna (strom)'.", hint: "To v zĂˇvorce pro rozliĹˇenĂ­." },
    { q: "Co je paradigmatickĂ˝ vztah?", options: ["Vztah danĂ˝ kontextem", "Vztah nezĂˇvislĂ˝ na kontextu (apriornĂ­)", "Typ notace", "Metoda indexace"], correct: 1, cat: "Morfologie SJ", exp: "ParadigmatickĂ˝ vztah existuje nezĂˇvisle na kontextu (apriornĂ­) - synonymie, hierarchie, asociace. Je dĂˇn strukturou jazyka.", hint: "NezĂˇvislĂ˝ na kontextu, danĂ˝ systĂ©mem." },
    { q: "Co je syntagmatickĂ˝ vztah?", options: ["Vztah nezĂˇvislĂ˝ na kontextu", "Vztah danĂ˝ kontextem (aposteriornĂ­)", "Typ hierarchie", "Metoda ÄŤtenĂ­"], correct: 1, cat: "Morfologie SJ", exp: "SyntagmatickĂ˝ vztah je dĂˇn kontextem (aposteriornĂ­) - vznikĂˇ aĹľ v konkrĂ©tnĂ­m textu nebo situaci.", hint: "VznikĂˇ aĹľ v textu." },
    { q: "Co je partitivnĂ­ vztah?", options: ["Rod-druh", "Celek-ÄŤĂˇst", "PĹ™Ă­ÄŤina-nĂˇsledek", "Synonymie"], correct: 1, cat: "Morfologie SJ", exp: "PartitivnĂ­ vztah = celek-ÄŤĂˇst. NapĹ™. 'auto' a 'motor' - motor je ÄŤĂˇstĂ­ auta. LiĹˇĂ­ se od generickĂ©ho vztahu (rod-druh).", hint: "Celek a ÄŤĂˇst." },
    { q: "Co je generickĂ˝ vztah?", options: ["Celek-ÄŤĂˇst", "Rod-druh", "PĹ™Ă­ÄŤina-nĂˇsledek", "Asociace"], correct: 1, cat: "Morfologie SJ", exp: "GenerickĂ˝ vztah = rod-druh (hierarchickĂ˝). NapĹ™. 'vozidlo' (rod) â†’ 'automobil' (druh). Druh dÄ›dĂ­ vlastnosti rodu.", hint: "Rod a druh." },
    { q: "Co je asociace v kontextu SJ?", options: ["HierarchickĂ˝ vztah", "NehierarchickĂ© tematickĂ© spojenĂ­", "Typ synonymie", "KlasifikaÄŤnĂ­ znak"], correct: 1, cat: "Morfologie SJ", exp: "Asociace (RT) je nehierarchickĂ© tematickĂ© spojenĂ­ mezi pojmy, kterĂ© spolu souvisejĂ­, ale nejsou v hierarchii.", hint: "SouvisĂ­ to spolu, ale nenĂ­ to podĹ™azenĂ©." },
    { q: "Co je polyhierarchie?", options: ["Jeden pojem nadĹ™azen vĂ­ce pojmĹŻm", "Jeden pojem podĹ™azen vĂ­ce pojmĹŻm", "Typ asociace", "Metoda indexace"], correct: 1, cat: "Morfologie SJ", exp: "Polyhierarchie = jeden pojem mĂˇ vĂ­ce nadĹ™azenĂ˝ch pojmĹŻ. NapĹ™. 'klavĂ­r' spadĂˇ pod 'hudebnĂ­ nĂˇstroje' i 'nĂˇbytek'.", hint: "PatĹ™Ă­ to na vĂ­ce mĂ­st najednou." },
    { q: "Co je syntax?", options: ["Tvar slov", "Struktura nebo poĹ™adĂ­ prvkĹŻ ve vyjĂˇdĹ™enĂ­", "Typ notace", "Metoda ÄŤtenĂ­"], correct: 1, cat: "Morfologie SJ", exp: "Syntax je struktura nebo poĹ™adĂ­ prvkĹŻ v jazykovĂ©m vyjĂˇdĹ™enĂ­. V SJ urÄŤuje, jak se kombinujĂ­ znaky nebo deskriptory.", hint: "Struktura a poĹ™adĂ­." },
    { q: "Co je morfologie v jazykovÄ›dÄ›?", options: ["PoĹ™adĂ­ slov", "DisciplĂ­na zabĂ˝vajĂ­cĂ­ se tvary slov", "Typ klasifikace", "Metoda indexace"], correct: 1, cat: "Morfologie SJ", exp: "Morfologie je jazykovÄ›dnĂˇ disciplĂ­na zkoumajĂ­cĂ­ tvary slov - slovnĂ­ druhy, jejich strukturu a gramatickĂ© funkce.", hint: "Tvary slov." },
    { q: "Co jsou synkategorematickĂˇ substantiva?", options: ["BÄ›ĹľnĂˇ podstatnĂˇ jmĂ©na", "Podst. jmĂ©na nevyjadĹ™ujĂ­cĂ­ tĹ™Ă­du pojmĹŻ (umÄ›lĂ© kvÄ›tiny)", "Typ deskriptorĹŻ", "KlasifikaÄŤnĂ­ znaky"], correct: 1, cat: "Morfologie SJ", exp: "SynkategorematickĂˇ substantiva sama nevyjadĹ™ujĂ­ tĹ™Ă­du pojmĹŻ, jen modifikujĂ­ jinĂˇ slova. NapĹ™. 'umÄ›lĂ©' v 'umÄ›lĂ© kvÄ›tiny'.", hint: "Sama o sobÄ› nic neznamenajĂ­." },

    // === JAK TĹĂŤDĂŤME - OBSAHOVĂ ANALĂťZA ===
    { q: "Co je obsahovĂˇ analĂ˝za?", options: ["FormĂˇlnĂ­ popis", "UrÄŤenĂ­ obsahu dokumentu", "Typ klasifikace", "Metoda vyhledĂˇvĂˇnĂ­"], correct: 1, cat: "Jak tĹ™Ă­dĂ­me", exp: "ObsahovĂˇ analĂ˝za je urÄŤenĂ­ obsahu dokumentu na zĂˇkladÄ› plnĂ©ho textu nebo jeho redukovanĂ© formy (abstrakt, nĂˇzev, obsah).", hint: "O ÄŤem to je?" },
    { q: "Co je orientaÄŤnĂ­ ÄŤtenĂ­?", options: ["DĹŻkladnĂ© ÄŤtenĂ­", "ZĂ­skĂˇnĂ­ zĂˇkladnĂ­ch informacĂ­ o dokumentu", "HledĂˇnĂ­ konkrĂ©tnĂ­ch informacĂ­", "RychlĂ© proÄŤĂ­tĂˇnĂ­"], correct: 1, cat: "Jak tĹ™Ă­dĂ­me", exp: "OrientaÄŤnĂ­ ÄŤtenĂ­ slouĹľĂ­ k zĂ­skĂˇnĂ­ zĂˇkladnĂ­ch informacĂ­ o dokumentu - zjiĹˇtÄ›nĂ­, zda je dokument relevantnĂ­.", hint: "Jen zĂˇkladnĂ­ pĹ™ehled." },
    { q: "Co je kurzorickĂ©/diagonĂˇlnĂ­ ÄŤtenĂ­?", options: ["DĹŻkladnĂ© ÄŤtenĂ­", "RychlĂ© proÄŤĂ­tĂˇnĂ­ zachycujĂ­cĂ­ podstatnĂ© pasĂˇĹľe", "VĂ˝bÄ›rovĂ© ÄŤtenĂ­", "OrientaÄŤnĂ­ ÄŤtenĂ­"], correct: 1, cat: "Jak tĹ™Ă­dĂ­me", exp: "KurzorickĂ© (diagonĂˇlnĂ­) ÄŤtenĂ­ = rychlĂ© proÄŤĂ­tĂˇnĂ­ dokumentu se snahou zachytit podstatnĂ© pasĂˇĹľe a hlavnĂ­ myĹˇlenky.", hint: "Rychle po diagonĂˇle." },
    { q: "Co je selektivnĂ­ ÄŤtenĂ­?", options: ["RychlĂ© proÄŤĂ­tĂˇnĂ­", "VĂ˝bÄ›rovĂ© ÄŤtenĂ­ hledajĂ­cĂ­ konkrĂ©tnĂ­ informace", "DĹŻkladnĂ© ÄŤtenĂ­", "OrientaÄŤnĂ­ ÄŤtenĂ­"], correct: 1, cat: "Jak tĹ™Ă­dĂ­me", exp: "SelektivnĂ­ ÄŤtenĂ­ = vĂ˝bÄ›rovĂ© ÄŤtenĂ­ zamÄ›Ĺ™enĂ© na hledĂˇnĂ­ konkrĂ©tnĂ­ch informacĂ­ v dokumentu.", hint: "HledĂˇm nÄ›co konkrĂ©tnĂ­ho." },
    { q: "KterĂˇ metoda ÄŤtenĂ­ je nejdĹŻkladnÄ›jĹˇĂ­?", options: ["OrientaÄŤnĂ­", "KurzorickĂ©", "StatarickĂ©", "SelektivnĂ­"], correct: 2, cat: "Jak tĹ™Ă­dĂ­me", exp: "StatarickĂ© ÄŤtenĂ­ je nejdĹŻkladnÄ›jĹˇĂ­ metoda - peÄŤlivĂ© ÄŤtenĂ­ celĂ©ho textu s plnĂ˝m porozumÄ›nĂ­m obsahu.", hint: "DĹŻkladnÄ› a pomalu." },
    { q: "Co je racionĂˇlnĂ­ ÄŤtenĂ­?", options: ["PovrchnĂ­ ÄŤtenĂ­", "Kombinace metod aktivizujĂ­cĂ­ vĹˇechny schopnosti", "Pouze selektivnĂ­ ÄŤtenĂ­", "Typ indexace"], correct: 1, cat: "Jak tĹ™Ă­dĂ­me", exp: "RacionĂˇlnĂ­ ÄŤtenĂ­ kombinuje rĹŻznĂ© metody a aktivizuje vĹˇechny schopnosti ÄŤtenĂˇĹ™e pro efektivnĂ­ prĂˇci s textem.", hint: "ChytrĂˇ kombinace metod." },

    // === INDEXACE ===
    { q: "Co je Ăşplnost indexace?", options: ["PoÄŤet dokumentĹŻ", "Rozsah zachycenĂ­ hlavnĂ­ch a vedlejĹˇĂ­ch tĂ©mat", "Typ notace", "Metoda ÄŤtenĂ­"], correct: 1, cat: "Indexace", exp: "Ăšplnost indexace = rozsah, v jakĂ©m jsou zachycena hlavnĂ­ i vedlejĹˇĂ­ tĂ©mata dokumentu. Hloubka popisu obsahu.", hint: "VĹˇechna tĂ©mata, i ta menĹˇĂ­." },
    { q: "Co je specifiÄŤnost indexace?", options: ["PoÄŤet znakĹŻ", "VĂ˝bÄ›r nejspecifiÄŤtÄ›jĹˇĂ­ho znaku SJ", "Typ hierarchie", "Metoda vyhledĂˇvĂˇnĂ­"], correct: 1, cat: "Indexace", exp: "SpecifiÄŤnost = volba nejspecifiÄŤtÄ›jĹˇĂ­ho moĹľnĂ©ho znaku SJ. NapĹ™. 'psi' mĂ­sto obecnÄ›jĹˇĂ­ho 'savci'.", hint: "Co nejpĹ™esnÄ›jĹˇĂ­ pojmenovĂˇnĂ­." },
    { q: "Co je konzistence indexace?", options: ["Rychlost indexace", "Pro tentĂ˝Ĺľ obsah tentĂ˝Ĺľ popis", "Typ notace", "Metoda ÄŤtenĂ­"], correct: 1, cat: "Indexace", exp: "Konzistence = pro tentĂ˝Ĺľ obsah tentĂ˝Ĺľ popis. MĂ­ra shody v popisu stejnĂ©ho dokumentu rĹŻznĂ˝mi indexĂˇtory nebo v ÄŤase.", hint: "StejnÄ› to popsat pokaĹľdĂ©." },
    { q: "Jak se poÄŤĂ­tĂˇ konzistence mezi dvÄ›ma indexĂˇtory?", options: ["a + b", "a * b", "a / b (shodnĂ© / celkovĂ© jedineÄŤnĂ© znaky)", "a - b"], correct: 2, cat: "Indexace", exp: "Konzistence C = a/b, kde a = poÄŤet shodnÄ› zvolenĂ˝ch znakĹŻ, b = celkovĂ˝ poÄŤet pĹ™idÄ›lenĂ˝ch jedineÄŤnĂ˝ch znakĹŻ.", hint: "Shoda dÄ›leno celkem." },
    { q: "Co je interindexer consistency?", options: ["Konzistence jednoho indexĂˇtora", "Shoda mezi dvÄ›ma a vĂ­ce indexĂˇtory", "Typ notace", "Metoda ÄŤtenĂ­"], correct: 1, cat: "Indexace", exp: "Interindexer consistency = shoda mezi dvÄ›ma a vĂ­ce indexĂˇtory pĹ™i popisu stejnĂ©ho dokumentu.", hint: "Shoda mezi lidmi." },
    { q: "Jak se vypoÄŤĂ­tĂˇ Ăşplnost (recall)?", options: ["VyhledanĂ© relevantnĂ­ / VĹˇechny vyhledanĂ©", "VyhledanĂ© relevantnĂ­ / VĹˇechny relevantnĂ­", "VĹˇechny vyhledanĂ© / VĹˇechny dokumenty", "RelevantnĂ­ / NerelevatnĂ­"], correct: 1, cat: "Indexace", exp: "Recall (Ăşplnost) = vyhledanĂ© relevantnĂ­ / vĹˇechny relevantnĂ­ dokumenty v databĂˇzi. Kolik z relevantnĂ­ch jsme naĹˇli.", hint: "NalezenĂ© relevantnĂ­ lomeno vĹˇemi relevantnĂ­mi." },
    { q: "Jak se vypoÄŤĂ­tĂˇ pĹ™esnost (precision)?", options: ["VyhledanĂ© relevantnĂ­ / VĹˇechny relevantnĂ­", "VyhledanĂ© relevantnĂ­ / VĹˇechny vyhledanĂ©", "VĹˇechny vyhledanĂ© / VĹˇechny relevantnĂ­", "RelevantnĂ­ / Celkem"], correct: 1, cat: "Indexace", exp: "Precision (pĹ™esnost) = vyhledanĂ© relevantnĂ­ / vĹˇechny vyhledanĂ©. Kolik z naĹˇich vĂ˝sledkĹŻ je skuteÄŤnÄ› relevantnĂ­ch.", hint: "NalezenĂ© relevantnĂ­ lomeno vĹˇemi nalezenĂ˝mi." },
    { q: "JakĂ˝ je vztah mezi ĂşplnostĂ­ a pĹ™esnostĂ­?", options: ["PĹ™Ă­mo ĂşmÄ›rnĂ˝", "NepĹ™Ă­mo ĂşmÄ›rnĂ˝", "NezĂˇvislĂ˝", "ExponenciĂˇlnĂ­"], correct: 1, cat: "Indexace", exp: "Ăšplnost a pĹ™esnost jsou nepĹ™Ă­mo ĂşmÄ›rnĂ© - zvĂ˝ĹˇenĂ­ jednĂ© metriky obvykle znamenĂˇ snĂ­ĹľenĂ­ druhĂ©.", hint: "KdyĹľ jedno roste, druhĂ© klesĂˇ." },
    { q: "JakĂˇ je nejÄŤastÄ›jĹˇĂ­ indexaÄŤnĂ­ chyba?", options: ["PĹ™eklepy", "OpominutĂ­ hledisek (18,6%)", "Duplicity", "NesprĂˇvnĂ˝ jazyk"], correct: 1, cat: "Indexace", exp: "NejÄŤastÄ›jĹˇĂ­ indexaÄŤnĂ­ chybou je opominutĂ­ hledisek (18,6%) - indexĂˇtor nezachytĂ­ nÄ›kterĂ© dĹŻleĹľitĂ© aspekty dokumentu.", hint: "NÄ›co jsme zapomnÄ›li zmĂ­nit." },
    { q: "Co je formĂˇlnĂ­ relevance?", options: ["ObsahovĂˇ shoda", "Dva dokumenty majĂ­ tentĂ˝Ĺľ popis ale nemusĂ­ bĂ˝t obsahovÄ› totoĹľnĂ©", "Typ indexace", "Metoda ÄŤtenĂ­"], correct: 1, cat: "Indexace", exp: "FormĂˇlnĂ­ relevance = dva dokumenty majĂ­ tentĂ˝Ĺľ SOD (popis), ale nemusĂ­ bĂ˝t obsahovÄ› totoĹľnĂ© - sdĂ­lejĂ­ formĂˇlnĂ­ znaky.", hint: "Popis sedĂ­, ale obsah tĹ™eba ne." },
    { q: "V jakĂ© fĂˇzi vznikĂˇ nejvĂ­ce indexaÄŤnĂ­ch chyb?", options: ["ObsahovĂˇ analĂ˝za", "Identifikace pojmĹŻ (42,3%)", "VĂ˝bÄ›r deskriptorĹŻ", "Kontrola"], correct: 1, cat: "Indexace", exp: "NejvĂ­ce chyb vznikĂˇ pĹ™i identifikaci pojmĹŻ (42,3%) - sprĂˇvnĂ© rozpoznĂˇnĂ­ toho, o ÄŤem dokument pojednĂˇvĂˇ.", hint: "PĹ™i zjiĹˇĹĄovĂˇnĂ­, o ÄŤem to vlastnÄ› je." },

    // === SOD A REDUKOVANĂ‰ TEXTY ===
    { q: "Co je SOD?", options: ["SystĂ©m organizace dokumentĹŻ", "SelekÄŤnĂ­ obraz dokumentu", "Struktura oborovĂ˝ch deskriptorĹŻ", "Standard odbornĂ© dokumentace"], correct: 1, cat: "SOD", exp: "SOD = SelekÄŤnĂ­ Obraz Dokumentu - soubor lexikĂˇlnĂ­ch jednotek nebo klasifikaÄŤnĂ­ch znakĹŻ reprezentujĂ­cĂ­ obsah dokumentu.", hint: "VĂ˝sledek indexace." },
    { q: "Co je abstrakt?", options: ["PovrchnĂ­ doprovod nakladatelstvĂ­", "KrĂˇtkĂ© shrnutĂ­ od autora/zpracovatele", "VĂ˝bÄ›r ÄŤĂˇstĂ­ dokumentu", "VĂ˝sledky poznĂˇnĂ­ autora"], correct: 1, cat: "SOD", exp: "Abstrakt je krĂˇtkĂ© shrnutĂ­ obsahu dokumentu vytvoĹ™enĂ© autorem nebo zpracovatelem. Informuje o hlavnĂ­ch bodech.", hint: "VÄ›cnĂ© shrnutĂ­." },
    { q: "Co je anotace?", options: ["ShrnutĂ­ od autora", "PovrchnĂ­ doprovod nakladatelskĂ© ÄŤinnosti", "VĂ˝bÄ›r ÄŤĂˇstĂ­", "Typ indexace"], correct: 1, cat: "SOD", exp: "Anotace je povrchnĂ­ doprovod nakladatelskĂ© ÄŤinnosti - krĂˇtkĂ˝ popis na obĂˇlce nebo v katalogu, ÄŤasto reklamnĂ­ho charakteru.", hint: "LĂˇkavĂ˝ popisek." },
    { q: "Co je referĂˇt?", options: ["KrĂˇtkĂ© shrnutĂ­", "DelĹˇĂ­ text pĹ™ibliĹľujĂ­cĂ­ vĂ˝sledky a metody", "PovrchnĂ­ doprovod", "Typ klasifikace"], correct: 1, cat: "SOD", exp: "ReferĂˇt je delĹˇĂ­ text pĹ™ibliĹľujĂ­cĂ­ vĂ˝sledky a metody vĂ˝zkumu - podrobnÄ›jĹˇĂ­ neĹľ abstrakt, ale stĂˇle zkrĂˇcenĂˇ forma.", hint: "DelĹˇĂ­ a podrobnÄ›jĹˇĂ­ neĹľ abstrakt." },
    { q: "Co je extrakt?", options: ["ShrnutĂ­", "VĂ˝bÄ›r konkrĂ©tnĂ­ch ÄŤĂˇstĂ­ z dokumentu", "Anotace", "Typ indexace"], correct: 1, cat: "SOD", exp: "Extrakt je vĂ˝bÄ›r konkrĂ©tnĂ­ch ÄŤĂˇstĂ­ z dokumentu - doslovnĂ© citace klĂ­ÄŤovĂ˝ch pasĂˇĹľĂ­ bez pĹ™eformulovĂˇnĂ­.", hint: "VĂ˝cuc citacĂ­." },
    { q: "Co je resumĂ©?", options: ["KrĂˇtkĂˇ anotace", "PĹ™ibliĹľuje vĂ˝sledky poznĂˇnĂ­ autora v dokumentu", "Extrakt", "Typ notace"], correct: 1, cat: "SOD", exp: "ResumĂ© pĹ™ibliĹľuje vĂ˝sledky poznĂˇnĂ­ autora - shrnuje zĂˇvÄ›ry a pĹ™Ă­nosy prĂˇce, ÄŤasto na konci dokumentu.", hint: "Souhrn na konci, ÄŤasto cizojazyÄŤnĂ˝." },

    // === VYHLEDĂVĂNĂŤ ===
    { q: "Co je strukturovanĂ© vyhledĂˇvĂˇnĂ­?", options: ["ZĂˇkladnĂ­ vyhledĂˇvĂˇnĂ­", "PokroÄŤilĂ© vyhledĂˇvĂˇnĂ­ s pĹ™esnĂ˝m cĂ­lem", "FulltextovĂ© vyhledĂˇvĂˇnĂ­", "NĂˇhodnĂ© hledĂˇnĂ­"], correct: 1, cat: "VyhledĂˇvĂˇnĂ­", exp: "StrukturovanĂ© vyhledĂˇvĂˇnĂ­ je pokroÄŤilĂ© vyhledĂˇvĂˇnĂ­ s pĹ™esnÄ› definovanĂ˝m cĂ­lem, vyuĹľĂ­vajĂ­cĂ­ specifickĂˇ pole a operĂˇtory.", hint: "VĂ­m pĹ™esnÄ› co a kde hledĂˇm." },
    { q: "Co jsou proximitnĂ­ operĂˇtory?", options: ["BooleovskĂ© operĂˇtory", "UrÄŤenĂ­ vzdĂˇlenosti hledanĂ˝ch vĂ˝razĹŻ", "Typ notace", "Metoda indexace"], correct: 1, cat: "VyhledĂˇvĂˇnĂ­", exp: "ProximitnĂ­ operĂˇtory urÄŤujĂ­ maximĂˇlnĂ­ vzdĂˇlenost mezi hledanĂ˝mi vĂ˝razy v textu (napĹ™. NEAR, WITHIN 5 words).", hint: "HledĂˇm slova blĂ­zko sebe." },
    { q: "Co je query expansion?", options: ["ZĂşĹľenĂ­ dotazu", "RozĹˇiĹ™ovĂˇnĂ­ dotazu pomocĂ­ Ĺ™Ă­zenĂ©ho slovnĂ­ku", "Typ indexace", "Metoda ÄŤtenĂ­"], correct: 1, cat: "VyhledĂˇvĂˇnĂ­", exp: "Query expansion = automatickĂ© rozĹˇiĹ™ovĂˇnĂ­ dotazu pomocĂ­ synonym a pĹ™Ă­buznĂ˝ch termĂ­nĹŻ z Ĺ™Ă­zenĂ©ho slovnĂ­ku.", hint: "SystĂ©m mi tam pĹ™idĂˇ synonyma." },
    { q: "JakĂˇ je vĂ˝hoda Ĺ™Ă­zenĂ©ho slovnĂ­ku?", options: ["RychlejĹˇĂ­ vyhledĂˇvĂˇnĂ­", "ĹeĹˇĂ­ synonymii a homonymii", "VĂ­ce vĂ˝sledkĹŻ", "JednoduĹˇĹˇĂ­ pouĹľitĂ­"], correct: 1, cat: "VyhledĂˇvĂˇnĂ­", exp: "ĹĂ­zenĂ˝ slovnĂ­k Ĺ™eĹˇĂ­ synonymii (rĹŻznĂˇ slova pro stejnĂ˝ pojem) a homonymii (stejnĂˇ slova pro rĹŻznĂ© pojmy).", hint: "ĹeĹˇĂ­, Ĺľe auto je automobil." },
    { q: "JakĂˇ je vĂ˝hoda fulltextovĂ©ho vyhledĂˇvĂˇnĂ­?", options: ["PĹ™esnÄ›jĹˇĂ­ vĂ˝sledky", "PĹ™Ă­stupnĂ˝ vĹˇem, zachycuje novĂ© termĂ­ny", "ĹeĹˇĂ­ synonymii", "MĂ©nÄ› vĂ˝sledkĹŻ"], correct: 1, cat: "VyhledĂˇvĂˇnĂ­", exp: "Fulltext je pĹ™Ă­stupnĂ˝ vĹˇem uĹľivatelĹŻm bez znalosti SJ a zachycuje novĂ© termĂ­ny bez zpoĹľdÄ›nĂ­ zpĹŻsobenĂ©ho aktualizacĂ­ slovnĂ­ku.", hint: "Najde i novĂˇ slova, co nejsou ve slovnĂ­ku." },
    { q: "Co je vektorovĂ© vyhledĂˇvĂˇnĂ­?", options: ["BooleovskĂ© vyhledĂˇvĂˇnĂ­", "VyhledĂˇvĂˇnĂ­ mÄ›Ĺ™Ă­cĂ­ vzdĂˇlenost mezi vektory dokumentĹŻ", "Typ indexace", "Metoda klasifikace"], correct: 1, cat: "VyhledĂˇvĂˇnĂ­", exp: "VektorovĂ© vyhledĂˇvĂˇnĂ­ reprezentuje dokumenty jako vektory a mÄ›Ĺ™Ă­ podobnost pomocĂ­ vzdĂˇlenosti v n-rozmÄ›rnĂ©m prostoru.", hint: "MatematickĂˇ podobnost v prostoru." },

    // === UNIVERZĂLNĂŤ A OBOROVĂ‰ SYSTĂ‰MY ===
    { q: "Co jsou LCSH?", options: ["Klasifikace", "PĹ™edmÄ›tovĂˇ hesla KongresovĂ© knihovny", "Typ tezauru", "BritskĂ˝ systĂ©m"], correct: 1, cat: "SystĂ©my", exp: "LCSH = Library of Congress Subject Headings - pĹ™edmÄ›tovĂˇ hesla KongresovĂ© knihovny USA se stĹ™ednĂ­ mĂ­rou prekoordinace.", hint: "Hesla americkĂ©ho Kongresu." },
    { q: "Co je AGROVOC?", options: ["Klasifikace", "Tezaurus FAO pro zemÄ›dÄ›lstvĂ­", "EvropskĂ˝ tezaurus", "AmerickĂ˝ systĂ©m"], correct: 1, cat: "SystĂ©my", exp: "AGROVOC je vĂ­cejazyÄŤnĂ˝ tezaurus FAO (OSN) pro zemÄ›dÄ›lstvĂ­ a potravinĂˇĹ™stvĂ­. Jeden z nejpouĹľĂ­vanÄ›jĹˇĂ­ch oborovĂ˝ch tezaurĹŻ.", hint: "ZemÄ›dÄ›lstvĂ­ a jĂ­dlo." },
    { q: "Co je EuroVoc?", options: ["AmerickĂ˝ systĂ©m", "EvropskĂ˝ vĂ­cejazyÄŤnĂ˝ tezaurus", "BritskĂˇ klasifikace", "Typ notace"], correct: 1, cat: "SystĂ©my", exp: "EuroVoc je evropskĂ˝ mnohojazyÄŤnĂ˝ tezaurus pro dokumenty EU, zejmĂ©na prĂˇvnĂ­ informace. DostupnĂ˝ ve vĹˇech jazycĂ­ch EU.", hint: "EvropskĂˇ unie a prĂˇvo." },
    { q: "Co je MSC?", options: ["Tezaurus", "Klasifikace matematickĂ˝ch schĂ©mat", "PĹ™edmÄ›tovĂˇ hesla", "Typ notace"], correct: 1, cat: "SystĂ©my", exp: "MSC = Mathematics Subject Classification - klasifikace matematickĂ˝ch schĂ©mat s binĂˇrnĂ­ notacĂ­ a expanzivnĂ­m systĂ©mem.", hint: "Matematika." },
    { q: "Co je NACE/CZ-NACE?", options: ["Tezaurus", "Klasifikace ekonomickĂ˝ch ÄŤinnostĂ­", "PĹ™edmÄ›tovĂˇ hesla", "Typ indexace"], correct: 1, cat: "SystĂ©my", exp: "NACE/CZ-NACE je klasifikace ekonomickĂ˝ch ÄŤinnostĂ­ pouĹľĂ­vanĂˇ evropskĂ˝mi statistickĂ˝mi ĂşĹ™ady. CZ-NACE je ÄŤeskĂˇ verze.", hint: "EkonomickĂ© ÄŤinnosti." },
    { q: "Co je backbone thesaurus?", options: ["SpecializovanĂ˝ tezaurus", "ObecnĂ˝ propojovacĂ­ tezaurus pro humanitnĂ­ vÄ›dy", "Klasifikace", "Typ notace"], correct: 1, cat: "SystĂ©my", exp: "Backbone thesaurus je obecnĂ˝ propojovacĂ­ tezaurus slouĹľĂ­cĂ­ jako zĂˇklad pro propojenĂ­ specializovanĂ˝ch tezaurĹŻ v humanitnĂ­ch vÄ›dĂˇch.", hint: "PĂˇteĹ™ pro humanitnĂ­ vÄ›dy." },
    { q: "Co je TaDiRaH?", options: ["Klasifikace", "Taxonomie pro digitĂˇlnĂ­ humanitnĂ­ vÄ›dy", "Tezaurus", "Typ notace"], correct: 1, cat: "SystĂ©my", exp: "TaDiRaH = Taxonomy of Digital Research Activities in the Humanities - propracovanĂˇ taxonomie pro digitĂˇlnĂ­ humanitnĂ­ vÄ›dy.", hint: "DigitĂˇlnĂ­ humanitnĂ­ vÄ›dy." },
    { q: "Co je ICS?", options: ["Tezaurus", "MezinĂˇrodnĂ­ klasifikace norem a standardĹŻ", "PĹ™edmÄ›tovĂˇ hesla", "Typ indexace"], correct: 1, cat: "SystĂ©my", exp: "ICS = International Classification for Standards - tĹ™Ă­ĂşrovĹovĂˇ mezinĂˇrodnĂ­ klasifikace technickĂ˝ch norem a standardĹŻ.", hint: "Normy a standardy." },
    { q: "Co je IPS?", options: ["Tezaurus", "MezinĂˇrodnĂ­ klasifikace patentĹŻ", "PĹ™edmÄ›tovĂˇ hesla", "Typ notace"], correct: 1, cat: "SystĂ©my", exp: "IPS (IPC) = International Patent Classification - ÄŤtyĹ™ĂşrovĹovĂˇ klasifikace patentĹŻ s velmi specifickĂ˝mi termĂ­ny.", hint: "Patenty." },
    { q: "JakĂ˝ je rozdĂ­l mezi LCSH a tezaurem?", options: ["Ĺ˝ĂˇdnĂ˝", "LCSH umoĹľĹujĂ­ prekoordinaci a vlastnĂ­ jmĂ©na", "LCSH jsou postkoordinovanĂ©", "Tezaurus pouĹľĂ­vĂˇ notaci"], correct: 1, cat: "SystĂ©my", exp: "LCSH umoĹľĹujĂ­ prekoordinovanĂ© lexikĂˇlnĂ­ jednotky a prĂˇci s vlastnĂ­mi jmĂ©ny. Tezaurus preferuje postkoordinaci a sĂ©mantickĂ˝ rozklad.", hint: "LCSH mĂˇ radĹˇi hotovĂˇ spojenĂ­." },

    // === ONTOLOGIE A BUDOUCNOST ===
    { q: "Co je ontologie v informaÄŤnĂ­ vÄ›dÄ›?", options: ["FilozofickĂˇ disciplĂ­na", "Typ pojmovĂ©ho modelu pro poÄŤĂ­taÄŤovĂ© zpracovĂˇnĂ­", "Klasifikace", "Tezaurus"], correct: 1, cat: "Budoucnost", exp: "Ontologie v informaÄŤnĂ­ vÄ›dÄ› je pojmovĂ˝ model domĂ©ny urÄŤenĂ˝ pro poÄŤĂ­taÄŤovĂ© zpracovĂˇnĂ­ a automatickĂ© odvozovĂˇnĂ­ znalostĂ­.", hint: "PojmovĂ˝ model pro poÄŤĂ­taÄŤe." },
    { q: "K ÄŤemu slouĹľĂ­ ontologie?", options: ["Pouze k popisu", "Komunikace, organizace znalostĂ­, automatickĂ© odvozovĂˇnĂ­", "Indexace", "Klasifikace"], correct: 1, cat: "Budoucnost", exp: "Ontologie slouĹľĂ­ ke komunikaci, organizaci znalostĂ­, popisu skuteÄŤnosti pro poÄŤĂ­taÄŤe a automatickĂ©mu odvozovĂˇnĂ­ novĂ˝ch znalostĂ­.", hint: "Aby tomu poÄŤĂ­taÄŤ rozumÄ›l." },
    { q: "Co je AXI?", options: ["Typ klasifikace", "Artificial Explainable Intelligence", "Tezaurus", "Metoda indexace"], correct: 1, cat: "Budoucnost", exp: "AXI = Artificial Explainable Intelligence - AI, kterĂˇ dokĂˇĹľe vysvÄ›tlit, jak dospÄ›la ke svĂ˝m zĂˇvÄ›rĹŻm a doporuÄŤenĂ­m.", hint: "AI, kterĂˇ umĂ­ vysvÄ›tlit proÄŤ." },
    { q: "Co jsou LOD?", options: ["Typ klasifikace", "Linked Open Data", "Tezaurus", "Metoda ÄŤtenĂ­"], correct: 1, cat: "Budoucnost", exp: "LOD = Linked Open Data - propojenĂˇ otevĹ™enĂˇ data jako trend standardizace pro maximĂˇlnĂ­ propojitelnost informaÄŤnĂ­ch systĂ©mĹŻ.", hint: "PropojenĂˇ data." },
    { q: "Kdy vznikl MARC formĂˇt?", options: ["V 19. stoletĂ­", "V 60. letech 20. stoletĂ­", "Po roce 2000", "V antice"], correct: 1, cat: "Budoucnost", exp: "MARC (Machine-Readable Cataloging) vznikl v 60. letech 20. stoletĂ­ jako formĂˇt pro vĂ˝mÄ›nu bibliografickĂ˝ch dat mezi knihovnami.", hint: "FormĂˇt z 60. let pro knihovny." },

    // === DALĹ ĂŤ DOPLĹ‡UJĂŤCĂŤ OTĂZKY ===
    { q: "Co je principium divisionis?", options: ["Typ notace", "KlasifikaÄŤnĂ­ charakteristika/princip dÄ›lenĂ­", "Metoda indexace", "Typ dokumentu"], correct: 1, cat: "SelekÄŤnĂ­ jazyky", exp: "Principium divisionis = klasifikaÄŤnĂ­ charakteristika neboli princip dÄ›lenĂ­, podle kterĂ©ho se tvoĹ™Ă­ fazety a tĹ™Ă­dy.", hint: "Princip dÄ›lenĂ­." },
    { q: "Co je expanzivnĂ­ notace?", options: ["KrĂˇtkĂˇ notace", "Notace s vynechĂˇvkami pro budoucĂ­ doplnÄ›nĂ­", "Typ klasifikace", "Metoda ÄŤtenĂ­"], correct: 1, cat: "SystematickĂ© SJ", exp: "ExpanzivnĂ­ notace obsahuje vynechĂˇvky pro budoucĂ­ rozĹˇĂ­Ĺ™enĂ­ systĂ©mu bez naruĹˇenĂ­ stĂˇvajĂ­cĂ­ struktury (napĹ™. MSC).", hint: "MĂ­sto pro novĂ© vÄ›ci." },
    { q: "Co je mnemotechnickĂˇ notace?", options: ["NĂˇhodnĂˇ notace", "Notace usnadĹujĂ­cĂ­ zapamatovĂˇnĂ­", "Typ klasifikace", "Metoda indexace"], correct: 1, cat: "SystematickĂ© SJ", exp: "MnemotechnickĂˇ notace usnadĹuje zapamatovĂˇnĂ­ - napĹ™. pouĹľĂ­vĂˇ pĂ­smena z nĂˇzvu oboru (L pro Law v LCC).", hint: "Aby se to dobĹ™e pamatovalo." },
    { q: "Co je enumerativnĂ­ klasifikace?", options: ["FazetovĂˇ", "VĂ˝ÄŤtovĂˇ - obsahuje vĹˇechny tĹ™Ă­dy", "HierarchickĂˇ", "AbecednĂ­"], correct: 1, cat: "SystematickĂ© SJ", exp: "EnumerativnĂ­ (vĂ˝ÄŤtovĂˇ) klasifikace obsahuje pĹ™edem definovanĂ© vĹˇechny tĹ™Ă­dy. PĹ™Ă­klady: DDC, LCC.", hint: "VĹˇechno pÄ›knÄ› vypsanĂ©." },
    { q: "Co je fazetovĂˇ klasifikace?", options: ["VĂ˝ÄŤtovĂˇ", "KombinujĂ­cĂ­ aspekty/fazety", "Pouze abecednĂ­", "Pouze numerickĂˇ"], correct: 1, cat: "SystematickĂ© SJ", exp: "FazetovĂˇ klasifikace umoĹľĹuje kombinovat rĹŻznĂ© aspekty (fazety) pĹ™i popisu dokumentu. PĹ™Ă­klady: CC, ÄŤĂˇsteÄŤnÄ› MDT.", hint: "SklĂˇdaÄŤka z vĂ­ce pohledĹŻ." },
    { q: "Co je Ĺ™Ă­zenĂ˝ slovnĂ­k?", options: ["JakĂ˝koli seznam slov", "KontrolovanĂ˝ slovnĂ­k se strukturou a pravidly", "AbecednĂ­ rejstĹ™Ă­k", "Typ notace"], correct: 1, cat: "PĹ™edmÄ›tovĂ© SJ", exp: "ĹĂ­zenĂ˝ slovnĂ­k je kontrolovanĂ˝ slovnĂ­k se strukturou, pravidly a vztahy mezi termĂ­ny (tezaurus, pĹ™edmÄ›tovĂˇ hesla).", hint: "SlovnĂ­k s pravidly." },
    { q: "Co je vocabulary control?", options: ["Typ notace", "ĹĂ­zenĂ­ slovnĂ­ku - kontrola termĂ­nĹŻ a vztahĹŻ", "Metoda ÄŤtenĂ­", "Typ klasifikace"], correct: 1, cat: "PĹ™edmÄ›tovĂ© SJ", exp: "Vocabulary control = Ĺ™Ă­zenĂ­ slovnĂ­ku - kontrola termĂ­nĹŻ, jejich vztahĹŻ, synonymie a homonymie v rĂˇmci SJ.", hint: "HlĂ­dĂˇnĂ­ termĂ­nĹŻ." },
    { q: "Co je deskriptorovĂ˝ odstavec?", options: ["ÄŚĂˇst dokumentu", "Deskriptor a vĹˇechny vztahy k nÄ›mu pĹ™ipojenĂ©", "Typ notace", "Metoda indexace"], correct: 1, cat: "PĹ™edmÄ›tovĂ© SJ", exp: "DeskriptorovĂ˝ odstavec = deskriptor se vĹˇemi vztahy (BT, NT, RT, UF) - zĂˇkladnĂ­ jednotka v tezauru.", hint: "Slovo a jeho rodina vztahĹŻ." },
    { q: "Co znaÄŤĂ­ zkratka BT/ND v tezauru?", options: ["PĹ™Ă­buznĂ˝ termĂ­n", "NadĹ™azenĂ˝ deskriptor (Broader Term)", "Nedeskriptor", "UĹľĹˇĂ­ termĂ­n"], correct: 1, cat: "PĹ™edmÄ›tovĂ© SJ", exp: "BT = Broader Term (ND = NadĹ™azenĂ˝ Deskriptor) - oznaÄŤuje hierarchicky nadĹ™azenĂ˝ pojem v tezauru.", hint: "NadĹ™azenĂ˝ pojem." },
    { q: "Co znaÄŤĂ­ zkratka NT/PD v tezauru?", options: ["NadĹ™azenĂ˝ termĂ­n", "PodĹ™azenĂ˝ deskriptor (Narrower Term)", "PĹ™Ă­buznĂ˝ termĂ­n", "Nedeskriptor"], correct: 1, cat: "PĹ™edmÄ›tovĂ© SJ", exp: "NT = Narrower Term (PD = PodĹ™azenĂ˝ Deskriptor) - oznaÄŤuje hierarchicky podĹ™azenĂ˝ (specifiÄŤtÄ›jĹˇĂ­) pojem.", hint: "PodĹ™azenĂ˝ pojem." },
    { q: "Co znaÄŤĂ­ zkratka RT/AD v tezauru?", options: ["NadĹ™azenĂ˝ termĂ­n", "PĹ™Ă­buznĂ˝ deskriptor (Related Term)", "PodĹ™azenĂ˝ termĂ­n", "Nedeskriptor"], correct: 1, cat: "PĹ™edmÄ›tovĂ© SJ", exp: "RT = Related Term (AD = AsociovanĂ˝ Deskriptor) - oznaÄŤuje pĹ™Ă­buznĂ˝ pojem bez hierarchickĂ©ho vztahu.", hint: "PĹ™Ă­buznĂ˝ pojem." },
    { q: "Co znaÄŤĂ­ zkratka USE/VIZ v tezauru?", options: ["NadĹ™azenĂ˝ termĂ­n", "Odkaz z nedeskriptoru na deskriptor", "PĹ™Ă­buznĂ˝ termĂ­n", "PodĹ™azenĂ˝ termĂ­n"], correct: 1, cat: "PĹ™edmÄ›tovĂ© SJ", exp: "USE/VIZ = odkaz z nedeskriptoru na preferovanĂ˝ deskriptor. ĹĂ­kĂˇ uĹľivateli, kterĂ˝ termĂ­n mĂˇ pouĹľĂ­t.", hint: "Odkaz na to sprĂˇvnĂ© slovo." },
    { q: "Co znaÄŤĂ­ zkratka UF/EKV v tezauru?", options: ["NadĹ™azenĂ˝ termĂ­n", "Used For - ekvivalent (nedeskriptor)", "PĹ™Ă­buznĂ˝ termĂ­n", "PodĹ™azenĂ˝ termĂ­n"], correct: 1, cat: "PĹ™edmÄ›tovĂ© SJ", exp: "UF = Used For (EKV = Ekvivalent) - u deskriptoru uvĂˇdĂ­ nedeskriptory (synonyma), kterĂ© na nÄ›j odkazujĂ­.", hint: "Synonyma, kterĂˇ nepouĹľĂ­vĂˇme." },
    { q: "JakĂ˝ je rozdĂ­l mezi vĂ˝bÄ›rovou a Ăşplnou indexacĂ­?", options: ["Ĺ˝ĂˇdnĂ˝", "VĂ˝bÄ›rovĂˇ zachycuje jen hlavnĂ­ tĂ©mata, ĂşplnĂˇ vĹˇechna", "VĂ˝bÄ›rovĂˇ je rychlejĹˇĂ­", "ĂšplnĂˇ pouĹľĂ­vĂˇ mĂ©nÄ› znakĹŻ"], correct: 1, cat: "Indexace", exp: "VĂ˝bÄ›rovĂˇ indexace zachycuje pouze hlavnĂ­ tĂ©mata dokumentu, ĂşplnĂˇ indexace zachycuje i vedlejĹˇĂ­ tĂ©mata.", hint: "VĹˇechno nebo jen to hlavnĂ­." },
    { q: "Co je inverze souslovĂ­ v pĹ™edmÄ›tovĂ˝ch heslech?", options: ["Typ notace", "PĹ™ehozenĂ­ poĹ™adĂ­ slov pro abecednĂ­ Ĺ™azenĂ­", "Metoda indexace", "Typ klasifikace"], correct: 1, cat: "PĹ™edmÄ›tovĂ© SJ", exp: "Inverze souslovĂ­ = pĹ™ehozenĂ­ poĹ™adĂ­ slov pro lepĹˇĂ­ abecednĂ­ Ĺ™azenĂ­. NapĹ™. 'loĹľiska metamorfovanĂˇ' mĂ­sto 'metamorfovanĂˇ loĹľiska'.", hint: "PĹ™ehozenĂ­ slov pro lepĹˇĂ­ Ĺ™azenĂ­." },
    { q: "Podle jakĂ© normy se tvoĹ™Ă­ ÄŤeskĂ© pĹ™edmÄ›tovĂˇ hesla?", options: ["ÄŚSN 01 0172", "ÄŚSN 01 0188", "ÄŚSN 01 0193", "ISO 2709"], correct: 1, cat: "PĹ™edmÄ›tovĂ© SJ", exp: "ÄŚSN 01 0188 je ÄŤeskĂˇ norma pro tvorbu pĹ™edmÄ›tovĂ˝ch hesel - definuje strukturu a pravidla jejich tvorby.", hint: "Norma pro pĹ™edmÄ›tovĂˇ hesla." },
    { q: "Podle jakĂ© normy se tvoĹ™Ă­ jednojazyÄŤnĂ© tezaury?", options: ["ÄŚSN 01 0188", "ÄŚSN 01 0193", "ÄŚSN 01 0172", "ISO 2709"], correct: 1, cat: "PĹ™edmÄ›tovĂ© SJ", exp: "ÄŚSN 01 0193 je norma pro tvorbu jednojazyÄŤnĂ˝ch tezaurĹŻ - definuje strukturu, vztahy a pravidla.", hint: "Norma pro jednojazyÄŤnĂ© tezaury." },
    { q: "Podle jakĂ© normy se tvoĹ™Ă­ vĂ­cejazyÄŤnĂ© tezaury?", options: ["ÄŚSN 01 0188", "ÄŚSN 01 0193", "ÄŚSN 01 0172", "ISO 2709"], correct: 2, cat: "PĹ™edmÄ›tovĂ© SJ", exp: "ÄŚSN 01 0172 je norma pro tvorbu vĂ­cejazyÄŤnĂ˝ch tezaurĹŻ - Ĺ™eĹˇĂ­ ekvivalenci termĂ­nĹŻ mezi jazyky.", hint: "Norma pro vĂ­cejazyÄŤnĂ© tezaury." },

    // === NOVĂ‰ OTĂZKY Z PĹEDNĂĹ EK ===

    // SbĂ­rky
    { q: "Co znamenĂˇ zkratka GLAM?", options: ["General Library and Museum", "Galleries, Libraries, Archives, Museums", "Global Library Access Model", "Government Libraries and Archives Management"], correct: 1, cat: "SbĂ­rky", exp: "GLAM = Galleries, Libraries, Archives, Museums - souhrnnĂ© oznaÄŤenĂ­ pro sbĂ­rkovĂ©/pamÄ›ĹĄovĂ© instituce.", hint: "Knihovny, muzea, archivy, galerie." },
    { q: "Co je primĂˇrnĂ­ funkce sbĂ­rky?", options: ["Prodej objektĹŻ", "EstetickĂˇ funkce", "InformaÄŤnĂ­ funkce", "ArchivaÄŤnĂ­ funkce"], correct: 2, cat: "SbĂ­rky", exp: "SbĂ­rka mĂˇ primĂˇrnÄ› informaÄŤnĂ­ funkci - podpora poznĂˇnĂ­. SekundĂˇrnÄ› mĹŻĹľe mĂ­t funkci estetickou, ekonomickou, archivaÄŤnĂ­ ÄŤi sociĂˇlnĂ­.", hint: "HlavnÄ› informace a poznĂˇnĂ­." },
    { q: "Je antikvariĂˇt sbĂ­rka?", options: ["Ano, vĹľdy", "Ne, mĂˇ primĂˇrnÄ› prodejnĂ­ funkci", "ZĂˇleĹľĂ­ na velikosti", "Pouze pokud mĂˇ katalog"], correct: 1, cat: "SbĂ­rky", exp: "AntikvariĂˇt nenĂ­ sbĂ­rka, protoĹľe jeho primĂˇrnĂ­ funkcĂ­ je prodej, nikoli informaÄŤnĂ­ funkce.", hint: "Prodej, ne sbĂ­rka." },
    { q: "Co je virtuĂˇlnĂ­ sbĂ­rka?", options: ["SbĂ­rka digitĂˇlnĂ­ch kopiĂ­", "SbĂ­rka propojujĂ­cĂ­ objekty digitĂˇlnÄ› bez ohledu na fyzickĂ© umĂ­stÄ›nĂ­", "SbĂ­rka ve virtuĂˇlnĂ­ realitÄ›", "Online katalog"], correct: 1, cat: "SbĂ­rky", exp: "VirtuĂˇlnĂ­ sbĂ­rka propojuje objekty digitĂˇlnÄ› bez ohledu na jejich fyzickĂ© umĂ­stÄ›nĂ­ - mĹŻĹľe zahrnovat objekty z rĹŻznĂ˝ch institucĂ­.", hint: "PropojenĂ© digitĂˇlnÄ›." },

    // Atributy IO
    { q: "Kolik je dokumentografickĂ˝ch ĂşrovnĂ­ popisu IO?", options: ["3", "4", "6", "10"], correct: 2, cat: "Atributy IO", exp: "Je 6 ĂşrovnĂ­: A) nosiÄŤ/mĂ©dium, B) forma, C) typ/druh, D) formĂˇt obsahu, E) ĹľĂˇnr, F) obsah.", hint: "Je jich Ĺˇest." },
    { q: "Co je 'forma' informaÄŤnĂ­ho objektu?", options: ["FyzickĂ˝ materiĂˇl nosiÄŤe", "KonkrĂ©tnĂ­ podoba nosiÄŤe (kniha, CD)", "ZpĹŻsob zĂˇznamu informacĂ­", "LiterĂˇrnĂ­ ĹľĂˇnr"], correct: 1, cat: "Atributy IO", exp: "Forma je konkrĂ©tnĂ­ podoba nosiÄŤe - napĹ™. kniha, gramofonovĂˇ deska, databĂˇze, webovĂˇ strĂˇnka.", hint: "KonkrĂ©tnĂ­ podoba nosiÄŤe." },
    { q: "Co je 'formĂˇt obsahu' IO?", options: ["RozmÄ›ry dokumentu", "ZpĹŻsob zĂˇznamu informacĂ­ (text, obraz, zvuk)", "Typ vazby knihy", "PoÄŤet stran"], correct: 1, cat: "Atributy IO", exp: "FormĂˇt obsahu je zpĹŻsob zĂˇznamu informacĂ­ - text, obraz, zvuk, audiovizuĂˇlnĂ­, data, komiks.", hint: "Text, obraz nebo zvuk?" },
    { q: "JakĂˇ NENĂŤ funkÄŤnĂ­ vlastnost IO?", options: ["Dokumentuje", "Reprezentuje", "Klasifikuje", "Komunikuje"], correct: 2, cat: "Atributy IO", exp: "IO dokumentuje, deskribuje, reprezentuje a komunikuje. Klasifikuje ho informaÄŤnĂ­ specialista, ne IO sĂˇm.", hint: "Klasifikuje ÄŤlovÄ›k, ne objekt." },
    { q: "Co je faksimile?", options: ["OriginĂˇl dĂ­la", "BÄ›ĹľnĂˇ kopie", "PĹ™esnĂˇ kopie originĂˇlu", "Podvrh"], correct: 2, cat: "Atributy IO", exp: "Faksimile je pĹ™esnĂˇ kopie originĂˇlu zachovĂˇvajĂ­cĂ­ jeho vzhled. LiĹˇĂ­ se od bÄ›ĹľnĂ© kopie i od falzifikĂˇtu.", hint: "VÄ›rnĂˇ kopie originĂˇlu." },

    // LRM model
    { q: "Co nahradil model LRM?", options: ["DDC", "FRBR", "MARC", "RDA"], correct: 1, cat: "LRM", exp: "LRM (Library Reference Model) nahradil dĹ™Ă­vÄ›jĹˇĂ­ FRBR (Functional Requirements for Bibliographic Records).", hint: "Nahradil FRBR." },
    { q: "Co je entita 'DĂ­lo' v LRM?", options: ["KonkrĂ©tnĂ­ kniha", "AbstraktnĂ­ intelektuĂˇlnĂ­ vĂ˝tvor", "VydĂˇnĂ­ knihy", "ExemplĂˇĹ™ v knihovnÄ›"], correct: 1, cat: "LRM", exp: "DĂ­lo je abstraktnĂ­ intelektuĂˇlnĂ­ nebo umÄ›leckĂ˝ vĂ˝tvor - napĹ™. 'BabiÄŤka' jako koncept, nezĂˇvisle na konkrĂ©tnĂ­m vydĂˇnĂ­.", hint: "AbstraktnĂ­ myĹˇlenka." },
    { q: "Co je 'ProvedenĂ­' v LRM?", options: ["AbstraktnĂ­ dĂ­lo", "PĹ™eklad dĂ­la", "KonkrĂ©tnĂ­ vydĂˇnĂ­ (nakladatelstvĂ­, rok)", "Jeden vĂ˝tisk"], correct: 2, cat: "LRM", exp: "ProvedenĂ­ je fyzickĂ© ztÄ›lesnÄ›nĂ­ vyjĂˇdĹ™enĂ­ - konkrĂ©tnĂ­ vydĂˇnĂ­ u konkrĂ©tnĂ­ho nakladatele v konkrĂ©tnĂ­m roce.", hint: "KonkrĂ©tnĂ­ vydĂˇnĂ­." },
    { q: "Co je 'Jednotka' v LRM?", options: ["AbstraktnĂ­ dĂ­lo", "Typ vyjĂˇdĹ™enĂ­", "VydĂˇnĂ­", "KonkrĂ©tnĂ­ exemplĂˇĹ™"], correct: 3, cat: "LRM", exp: "Jednotka je konkrĂ©tnĂ­ exemplĂˇĹ™ provedenĂ­ - tento vĂ˝tisk knihy, kterĂ˝ drĹľĂ­m v ruce.", hint: "Ten jeden kus v ruce." },

    // Notace
    { q: "Jakou notaci pouĹľĂ­vĂˇ DDC?", options: ["Alfabetickou", "Alfanumerickou", "Desetinnou numerickou", "SmĂ­Ĺˇenou"], correct: 2, cat: "Notace", exp: "DDC pouĹľĂ­vĂˇ desetinnou numerickou notaci - ÄŤĂ­sla jako 821.162.3 oznaÄŤujĂ­ tĹ™Ă­dy hierarchicky.", hint: "DesetinnĂˇ ÄŤĂ­sla." },
    { q: "Jakou notaci pouĹľĂ­vĂˇ LCC?", options: ["ÄŚistÄ› numerickou", "ÄŚistÄ› alfabetickou", "Alfanumerickou (smĂ­Ĺˇenou)", "Desetinnou"], correct: 2, cat: "Notace", exp: "LCC pouĹľĂ­vĂˇ alfanumerickou (smĂ­Ĺˇenou) notaci - kombinuje pĂ­smena a ÄŤĂ­sla, napĹ™. PS3511.I9.", hint: "PĂ­smena a ÄŤĂ­sla." },
    { q: "Co je expanzivnĂ­ notace?", options: ["Velmi dlouhĂˇ notace", "Notace umoĹľĹujĂ­cĂ­ pĹ™idĂˇvat novĂ© tĹ™Ă­dy", "Typ DDC", "Notace s mnoha symboly"], correct: 1, cat: "Notace", exp: "ExpanzivnĂ­ notace umoĹľĹuje pĹ™idĂˇvĂˇnĂ­ novĂ˝ch tĹ™Ă­d bez naruĹˇenĂ­ stĂˇvajĂ­cĂ­ struktury - 'pohostinnost' systĂ©mu.", hint: "PohostinnĂˇ pro novĂ©." },
    { q: "Co je mnemotechnickĂˇ notace?", options: ["Notace zaloĹľenĂˇ na numerickĂ˝ch kĂłdech", "Notace snadno zapamatovatelnĂˇ (M=Music)", "Notace pouĹľĂ­vajĂ­cĂ­ speciĂˇlnĂ­ znaky", "Automaticky generovanĂˇ notace"], correct: 1, cat: "Notace", exp: "MnemotechnickĂˇ notace je navrĹľena pro snadnĂ© zapamatovĂˇnĂ­ - napĹ™. M pro hudbu v LCC.", hint: "M jako Music." },
    { q: "Co jsou separĂˇtory v notaci?", options: ["Mezery mezi slovy", "Symboly oddÄ›lujĂ­cĂ­ ÄŤĂˇsti sloĹľenĂ© notace", "ÄŚĂ­sla tĹ™Ă­d", "OddÄ›lovaÄŤe stran"], correct: 1, cat: "Notace", exp: "SeparĂˇtory (teÄŤka, dvojteÄŤka, zĂˇvorky) oddÄ›lujĂ­ ÄŤĂˇsti sloĹľenĂ© notace a umoĹľĹujĂ­ kombinovat znaky.", hint: "OddÄ›lovaÄŤe ÄŤĂˇstĂ­." },

    // Pre/postkoordinace
    { q: "Co je sĂ©mantickĂ˝ rozklad?", options: ["Rozklad podle slovnĂ­ch ÄŤĂˇstĂ­", "Rozklad podle vĂ˝znamu (nedoporuÄŤuje se)", "Rozklad podle fazet", "Rozklad podle hierarchie"], correct: 1, cat: "Pre/Post", exp: "SĂ©mantickĂ˝ rozklad rozklĂˇdĂˇ pojem podle vĂ˝znamu (barometr = tlak + mÄ›Ĺ™enĂ­ + pĹ™Ă­stroj) - nedoporuÄŤuje se, ztrĂˇcĂ­ se smysl.", hint: "Rozklad podle vĂ˝znamu, nedÄ›lat." },
    { q: "Co je syntaktickĂ˝ rozklad?", options: ["Rozklad podle vĂ˝znamu", "Rozklad podle slovnĂ­ch ÄŤĂˇstĂ­", "Rozklad podle velikosti", "Rozklad podle ÄŤasu"], correct: 1, cat: "Pre/Post", exp: "SyntaktickĂ˝ rozklad rozklĂˇdĂˇ souslovĂ­ podle slovnĂ­ch ÄŤĂˇstĂ­ (knihovnickĂ© ÄŤasopisy = knihovnictvĂ­ + ÄŤasopisy).", hint: "Rozklad podle slov." },
    { q: "Kdy pouĹľĂ­t prekoordinaci?", options: ["VĹľdy", "KdyĹľ rozklad vede ke ztrĂˇtÄ› vĂ˝znamu", "Nikdy", "Pouze u ÄŤĂ­selnĂ­kĹŻ"], correct: 1, cat: "Pre/Post", exp: "Prekoordinaci pouĹľijeme, kdyĹľ je souslovĂ­ bÄ›ĹľnĂ©, rozklad vede ke ztrĂˇtÄ› vĂ˝znamu, nebo obsahuje vlastnĂ­ jmĂ©no.", hint: "KdyĹľ to jinak nedĂˇvĂˇ smysl." },

    // Indexace detaily
    { q: "Co je kurzorickĂ© ÄŤtenĂ­?", options: ["DĹŻkladnĂ© ÄŤtenĂ­", "RychlĂ© diagonĂˇlnĂ­ prochĂˇzenĂ­ textu", "ÄŚtenĂ­ nahlas", "ÄŚtenĂ­ pozpĂˇtku"], correct: 1, cat: "Indexace", exp: "KurzorickĂ© (diagonĂˇlnĂ­) ÄŤtenĂ­ je rychlĂ© prochĂˇzenĂ­ textu zamÄ›Ĺ™enĂ© na klĂ­ÄŤovĂˇ slova a zvĂ˝raznÄ›nĂ© ÄŤĂˇsti.", hint: "Rychle a diagonĂˇlnÄ›." },
    { q: "Co je statarickĂ© ÄŤtenĂ­?", options: ["RychlĂ© pĹ™eskakovĂˇnĂ­", "DĹŻkladnĂ© pomalĂ© ÄŤtenĂ­ s porozumÄ›nĂ­m", "SelektivnĂ­ hledĂˇnĂ­", "ÄŚtenĂ­ pouze nadpisĹŻ"], correct: 1, cat: "Indexace", exp: "StatarickĂ© ÄŤtenĂ­ je dĹŻkladnĂ©, pomalĂ© ÄŤtenĂ­ celĂ©ho textu s plnĂ˝m porozumÄ›nĂ­m.", hint: "PomalĂ© a dĹŻkladnĂ©." },
    { q: "V jakĂ© fĂˇzi indexace vznikĂˇ nejvĂ­ce chyb?", options: ["ObsahovĂˇ analĂ˝za", "Identifikace pojmĹŻ", "VĂ˝bÄ›r deskriptorĹŻ", "ZĂˇpis SOD"], correct: 1, cat: "Indexace", exp: "Ve fĂˇzi identifikace pojmĹŻ vznikĂˇ 42,3% vĹˇech chyb - nejÄŤastÄ›ji opominutĂ­ hledisek.", hint: "NejvĂ­c pĹ™i identifikaci pojmĹŻ." },
    { q: "JakĂˇ je nejÄŤastÄ›jĹˇĂ­ indexaÄŤnĂ­ chyba?", options: ["PĹ™eklep v deskriptoru", "OpominutĂ­ hledisek", "PouĹľitĂ­ nesprĂˇvnĂ© notace", "ZĂˇmÄ›na homonym"], correct: 1, cat: "Indexace", exp: "OpominutĂ­ hledisek (18,6% chyb) je nejÄŤastÄ›jĹˇĂ­ chyba - indexĂˇtor pĹ™ehlĂ©dne dĹŻleĹľitĂ˝ aspekt dokumentu.", hint: "NÄ›co jsme vynechali." },

    // Konzistence
    { q: "Co je interindexer konzistence?", options: ["Konzistence jednoho indexĂˇtora", "Shoda mezi rĹŻznĂ˝mi indexĂˇtory", "Konzistence notace", "Shoda slovnĂ­kĹŻ"], correct: 1, cat: "Konzistence", exp: "Interindexer konzistence je shoda indexace mezi dvÄ›ma nebo vĂ­ce indexĂˇtory indexujĂ­cĂ­mi stejnĂ˝ dokument.", hint: "Shoda mezi vĂ­ce lidmi." },
    { q: "Co je intraindexer konzistence?", options: ["Shoda mezi indexĂˇtory", "Konzistence jednoho indexĂˇtora v ÄŤase", "Konzistence slovnĂ­ku", "Shoda klasifikacĂ­"], correct: 1, cat: "Konzistence", exp: "Intraindexer konzistence je konzistence jednoho indexĂˇtora - zda stejnĂ˝ dokument popisuje stejnÄ›.", hint: "Shoda sĂˇm se sebou." },
    { q: "Jak se poÄŤĂ­tĂˇ konzistence mezi dvÄ›ma indexĂˇtory?", options: ["C = a Ă— b", "C = a / b", "C = a + b", "C = a - b"], correct: 1, cat: "Konzistence", exp: "C = a / b, kde a = poÄŤet shodnĂ˝ch znakĹŻ, b = celkovĂ˝ poÄŤet jedineÄŤnĂ˝ch znakĹŻ.", hint: "Shoda dÄ›leno celkem." },

    // RedukovanĂ© texty
    { q: "Co je strukturovanĂ˝ abstrakt?", options: ["Abstrakt bez struktury", "Abstrakt s oddĂ­ly (CĂ­l, Metody, VĂ˝sledky)", "Abstrakt s obrĂˇzky", "Automaticky generovanĂ˝ abstrakt"], correct: 1, cat: "RedukovanĂ© texty", exp: "StrukturovanĂ˝ abstrakt je uspoĹ™ĂˇdĂˇn do logickĂ˝ch oddĂ­lĹŻ - obvykle CĂ­l, Metody, VĂ˝sledky, ZĂˇvÄ›r.", hint: "MĂˇ jasnĂ© oddĂ­ly." },
    { q: "Co je resumĂ©?", options: ["KrĂˇtkĂˇ anotace", "PodrobnĂ˝ cizojazyÄŤnĂ˝ souhrn", "ReklamnĂ­ text", "Seznam klĂ­ÄŤovĂ˝ch slov"], correct: 1, cat: "RedukovanĂ© texty", exp: "ResumĂ© je podrobnĂ˝ (ÄŤasto nÄ›kolikastrĂˇnkovĂ˝) cizojazyÄŤnĂ˝ souhrn kopĂ­rujĂ­cĂ­ strukturu originĂˇlu.", hint: "Souhrn na konci." },
    { q: "Co je extrakt?", options: ["Souhrn vlastnĂ­mi slovy", "VĂ˝bÄ›r citacĂ­ z originĂˇlnĂ­ho textu", "PĹ™eklad abstraktu", "Typ bibliografie"], correct: 1, cat: "RedukovanĂ© texty", exp: "Extrakt je charakteristika obsahu sestavenĂˇ z formulacĂ­ (citacĂ­) originĂˇlnĂ­ho textu.", hint: "Jen vybranĂ© citace." },
    { q: "JakĂ˝ je rozdĂ­l mezi anotacĂ­ a abstraktem?", options: ["Ĺ˝ĂˇdnĂ˝", "Anotace je reklamnĂ­, abstrakt je objektivnĂ­", "Abstrakt je kratĹˇĂ­", "Anotace je v cizĂ­m jazyce"], correct: 1, cat: "RedukovanĂ© texty", exp: "Anotace je ÄŤasto reklamnĂ­ text s upoutĂˇvkou. Abstrakt je vÄ›cnĂˇ, objektivnĂ­ charakteristika obsahu.", hint: "Anotace lĂˇkĂˇ, abstrakt informuje." },

    // VyhledĂˇvĂˇnĂ­
    { q: "Co je query expansion?", options: ["ZkrĂˇcenĂ­ dotazu", "AutomatickĂ© rozĹˇĂ­Ĺ™enĂ­ dotazu o synonyma", "Typ proximitnĂ­ho operĂˇtoru", "Metoda indexace"], correct: 1, cat: "VyhledĂˇvĂˇnĂ­", exp: "Query expansion je automatickĂ© rozĹˇĂ­Ĺ™enĂ­ dotazu o synonyma a pĹ™Ă­buznĂ© termĂ­ny z Ĺ™Ă­zenĂ©ho slovnĂ­ku.", hint: "RozĹˇĂ­Ĺ™enĂ­ dotazu." },
    { q: "Co jsou proximitnĂ­ operĂˇtory?", options: ["BooleovskĂ© operĂˇtory", "OperĂˇtory urÄŤujĂ­cĂ­ vzdĂˇlenost vĂ˝razĹŻ", "OperĂˇtory pro Ĺ™azenĂ­", "OperĂˇtory pro filtrovĂˇnĂ­"], correct: 1, cat: "VyhledĂˇvĂˇnĂ­", exp: "ProximitnĂ­ operĂˇtory urÄŤujĂ­ vzdĂˇlenost hledanĂ˝ch vĂ˝razĹŻ - poÄŤtem slov nebo segmentem textu.", hint: "VzdĂˇlenost slov." },
    { q: "Jak Ĺ™Ă­zenĂ˝ slovnĂ­k Ĺ™eĹˇĂ­ synonymii?", options: ["Ignoruje ji", "Definuje preferovanĂ© a nepreferovanĂ© termĂ­ny", "PouĹľĂ­vĂˇ pouze homonyma", "NeumoĹľĹuje synonyma"], correct: 1, cat: "VyhledĂˇvĂˇnĂ­", exp: "ĹĂ­zenĂ˝ slovnĂ­k definuje deskriptory (preferovanĂ©) a nedeskriptory (nepreferovanĂ© synonyma) s odkazy USE/UF.", hint: "Vybere jedno sprĂˇvnĂ© a na ostatnĂ­ odkĂˇĹľe." },

    // KonkrĂ©tnĂ­ systĂ©my
    { q: "Co je PSH?", options: ["AmerickĂ˝ tezaurus", "ÄŚeskĂ˝ polytematickĂ˝ tezaurus NTK", "NÄ›meckĂˇ klasifikace", "MezinĂˇrodnĂ­ norma"], correct: 1, cat: "SystĂ©my", exp: "PSH = PolytematickĂ˝ strukturovanĂ˝ heslĂˇĹ™ - ÄŤeskĂ˝ polytematickĂ˝ tezaurus spravovanĂ˝ NĂˇrodnĂ­ technickou knihovnou.", hint: "ÄŚeskĂ˝ tezaurus z technickĂ© knihovny." },
    { q: "Co je MeSH?", options: ["Klasifikace patentĹŻ", "LĂ©kaĹ™skĂ˝ tezaurus pro PubMed", "Tezaurus pro umÄ›nĂ­", "Norma pro metadata"], correct: 1, cat: "SystĂ©my", exp: "MeSH = Medical Subject Headings - lĂ©kaĹ™skĂ˝ tezaurus pro indexaci biomedicĂ­nskĂ© literatury v PubMed.", hint: "LĂ©kaĹ™skĂ˝ tezaurus." },
    { q: "Co je BARTOC?", options: ["KlasifikaÄŤnĂ­ systĂ©m", "Metakatalog Ĺ™Ă­zenĂ˝ch slovnĂ­kĹŻ", "Typ tezauru", "BibliografickĂˇ databĂˇze"], correct: 1, cat: "SystĂ©my", exp: "BARTOC = Basel Register of Thesauri, Ontologies & Classifications - metakatalog (katalog katalogĹŻ) Ĺ™Ă­zenĂ˝ch slovnĂ­kĹŻ.", hint: "Katalog slovnĂ­kĹŻ." },
    { q: "Co je Iconclass?", options: ["Klasifikace hudby", "Klasifikace ikonografickĂ©ho obsahu obrazĹŻ", "Typ notace", "DigitĂˇlnĂ­ archiv"], correct: 1, cat: "SystĂ©my", exp: "Iconclass je klasifikaÄŤnĂ­ systĂ©m pro popis ikonografickĂ©ho obsahu (nĂˇmÄ›tĹŻ, motivĹŻ) v obrazech.", hint: "Pro obrazy a ikony." },

    // HlavnĂ­ tĹ™Ă­dy
    { q: "Kolik hlavnĂ­ch tĹ™Ă­d mĂˇ DDC?", options: ["5", "10", "21", "100"], correct: 1, cat: "SystematickĂ© SJ", exp: "DDC mĂˇ 10 hlavnĂ­ch tĹ™Ă­d (000-900) - dekadickĂˇ struktura, kaĹľdĂˇ tĹ™Ă­da se dÄ›lĂ­ na 10 podtĹ™Ă­d.", hint: "Deset hlavnĂ­ch tĹ™Ă­d." },
    { q: "Kolik hlavnĂ­ch tĹ™Ă­d mĂˇ LCC?", options: ["10", "21", "26", "100"], correct: 1, cat: "SystematickĂ© SJ", exp: "LCC mĂˇ 21 hlavnĂ­ch tĹ™Ă­d oznaÄŤenĂ˝ch pĂ­smeny (A-Z, nÄ›kterĂˇ pĂ­smena se nepouĹľĂ­vajĂ­).", hint: "Dvacet jedna tĹ™Ă­d." },
    { q: "KterĂˇ tĹ™Ă­da je v MDT prĂˇzdnĂˇ?", options: ["0", "4", "6", "9"], correct: 1, cat: "SystematickĂ© SJ", exp: "TĹ™Ă­da 4 je v MDT prĂˇzdnĂˇ - umoĹľĹuje budoucĂ­ rozĹˇĂ­Ĺ™enĂ­. Je to pĹ™Ă­klad expanzivity systĂ©mu.", hint: "ÄŚtyĹ™ka je volnĂˇ." },

    // PJ vs SJ
    { q: "Co je asymetrie pĹ™irozenĂ©ho jazyka?", options: ["JednotnĂ˝ vĂ˝znam slov", "ZĂˇvislost vĂ˝znamu na kontextu, vĂ˝jimky, synonyma", "PĹ™esnĂˇ pravidla", "JednoznaÄŤnost"], correct: 1, cat: "PJ vs SJ", exp: "Asymetrie = vĂ˝znam zĂˇvisĂ­ na kontextu, mnoho vĂ˝jimek, obsahuje synonyma a homonyma.", hint: "ZĂˇvisĂ­ na kontextu." },
    { q: "Co je symetrie selekÄŤnĂ­ho jazyka?", options: ["ZĂˇvislost na kontextu", "JednoznaÄŤnĂ˝ vĂ˝znam bez vĂ˝jimek", "Mnoho synonym", "FlexibilnĂ­ pravidla"], correct: 1, cat: "PJ vs SJ", exp: "Symetrie = jednoznaÄŤnĂ˝ vĂ˝znam bez zĂˇvislosti na kontextu, bez vĂ˝jimek, synonyma/homonyma vylouÄŤena.", hint: "JednoznaÄŤnĂ˝ vĂ˝znam." },

    // PraktickĂ© otĂˇzky
    { q: "Co je triĂˇda v kontextu fazet?", options: ["TĹ™i knihy", "Trojice: specifickĂ˝ vĂ˝raz â†’ obecnĂ˝ vĂ˝raz â†’ fazeta", "Typ klasifikace", "TĹ™i indexĂˇtoĹ™i"], correct: 1, cat: "PraktickĂ©", exp: "TriĂˇda ukazuje hierarchii: napĹ™. 'fortifikovanĂˇ vĂ­na' â†’ 'nĂˇpoje' â†’ fazeta 'obsah alkoholu'.", hint: "Apostol, VĂ­no, Alkohol." },
    { q: "ProÄŤ je dĹŻleĹľitĂ˝ pĹ™esnĂ˝ zĂˇpis lexikĂˇlnĂ­ jednotky?", options: ["EstetickĂ© dĹŻvody", "Pro strojovĂ© zpracovĂˇnĂ­ a vyhledĂˇvĂˇnĂ­", "HistorickĂ© dĹŻvody", "NenĂ­ dĹŻleĹľitĂ˝"], correct: 1, cat: "PraktickĂ©", exp: "PĹ™esnĂ˝ zĂˇpis (vÄŤetnÄ› velkĂ˝ch/malĂ˝ch pĂ­smen a plurĂˇlu) je klĂ­ÄŤovĂ˝ pro strojovĂ© zpracovĂˇnĂ­ a sprĂˇvnĂ© vyhledĂˇvĂˇnĂ­.", hint: "Aby to poÄŤĂ­taÄŤ naĹˇel." },

    // === NOVĂ‰ KVĂŤZY Z PĹEDNĂĹ KY 1 ===

    // Informace a sdÄ›lenĂ­
    { q: "JakĂ˝ je rozdĂ­l mezi informacĂ­ a sdÄ›lenĂ­m?", options: ["Ĺ˝ĂˇdnĂ˝", "SdÄ›lenĂ­ je informace opakovanĂˇ podruhĂ©", "Informace mÄ›nĂ­ poznatkovĂ˝ systĂ©m, sdÄ›lenĂ­ je jen nosiÄŤ", "Informace je vĹľdy pravdivĂˇ"], correct: 2, cat: "ZĂˇklady OI", exp: "SdÄ›lenĂ­ je nosiÄŤ informace. Informace vznikĂˇ teprve tehdy, kdyĹľ sdÄ›lenĂ­ zmÄ›nĂ­ poznatkovĂ˝ systĂ©m pĹ™Ă­jemce - formuje ho.", hint: "SdÄ›lenĂ­ je nosiÄŤ, informace je zmÄ›na v hlavÄ›." },
    { q: "Kdo vytvoĹ™il model komunikace s vysĂ­laÄŤem, pĹ™ijĂ­maÄŤem, kanĂˇlem a Ĺˇumem?", options: ["Marshall McLuhan", "Claude Shannon", "Karl Popper", "Paul Otlet"], correct: 1, cat: "ZĂˇklady OI", exp: "Claude Shannon vytvoĹ™il matematickou teorii komunikace (1948) definujĂ­cĂ­ zĂˇkladnĂ­ prvky pĹ™enosu informace.", hint: "Otec teorie informace." },
    { q: "Co je entropie v organizaci informacĂ­?", options: ["UspoĹ™Ăˇdanost systĂ©mu", "MĂ­ra neuspoĹ™Ăˇdanosti systĂ©mu", "Typ klasifikace", "Metoda indexace"], correct: 1, cat: "ZĂˇklady OI", exp: "Entropie je mĂ­ra neuspoĹ™Ăˇdanosti. Informace se oznaÄŤuje jako negentropie (zĂˇpornĂˇ entropie) - organizace = sniĹľovĂˇnĂ­ entropie.", hint: "NeuspoĹ™Ăˇdanost." },
    { q: "ProÄŤ organizujeme informace?", options: ["Pro zĂˇbavu", "Abychom snĂ­Ĺľili entropii a usnadnili vyhledĂˇvĂˇnĂ­", "ProtoĹľe to vyĹľaduje zĂˇkon", "Pro estetickĂ© ĂşÄŤely"], correct: 1, cat: "ZĂˇklady OI", exp: "Organizace informacĂ­ sniĹľuje entropii (neuspoĹ™Ăˇdanost) a pomĂˇhĂˇ pĹ™ekonat informaÄŤnĂ­ pĹ™etĂ­ĹľenĂ­.", hint: "Abychom snĂ­Ĺľili chaos." },

    // Typy znalostĂ­
    { q: "Co jsou tacitnĂ­ znalosti?", options: ["Znalosti zapsanĂ© v knihĂˇch", "Znalosti, kterĂ© ÄŤlovÄ›k mĂˇ, ale neumĂ­ explicitnÄ› formulovat", "Znalosti v databĂˇzĂ­ch", "HistorickĂ© znalosti"], correct: 1, cat: "ZĂˇklady OI", exp: "TacitnĂ­ (skrytĂ©) znalosti ÄŤlovÄ›k pouĹľĂ­vĂˇ, ale nenĂ­ si jich vÄ›dom - napĹ™. expertnĂ­ intuice, 'cit pro vÄ›c'.", hint: "VĂ­me to, ale neumĂ­me to Ĺ™Ă­ct." },
    { q: "ProÄŤ jsou tacitnĂ­ znalosti problematickĂ© pro organizaci informacĂ­?", options: ["Jsou pĹ™Ă­liĹˇ jednoduchĂ©", "Jsou tÄ›Ĺľko pĹ™enositelnĂ© a formalizovatelnĂ©", "Jsou pĹ™Ă­liĹˇ rozsĂˇhlĂ©", "Jsou pouze v cizĂ­ch jazycĂ­ch"], correct: 1, cat: "ZĂˇklady OI", exp: "TacitnĂ­ znalosti nelze jednoduĹˇe zapsat do systĂ©mĹŻ - jsou vĂˇzanĂ© na zkuĹˇenost a intuici experta.", hint: "TÄ›Ĺľko se pĹ™edĂˇvajĂ­." },

    // KlasifikaÄŤnĂ­ dilema
    { q: "ProÄŤ je v MKN (MezinĂˇrodnĂ­ klasifikace nemocĂ­) zaĹ™azeno i tÄ›hotenstvĂ­?", options: ["Je to chyba", "TÄ›hotenstvĂ­ je nemoc", "LĂ©kaĹ™i s nĂ­m pracujĂ­ v rĂˇmci diagnostik", "Je to historickĂ˝ relikt"], correct: 2, cat: "PraktickĂ© OI", exp: "PragmatickĂ˝ kontext rozhoduje - lĂ©kaĹ™i potĹ™ebujĂ­ tÄ›hotenstvĂ­ v systĂ©mu, i kdyĹľ to nenĂ­ nemoc ve vÄ›deckĂ©m smyslu.", hint: "ProtoĹľe to doktoĹ™i potĹ™ebujĂ­." },
    { q: "Je Franz Kafka ÄŤeskĂ˝ spisovatel?", options: ["Ano, protoĹľe Ĺľil v Praze", "Ne, protoĹľe psal nÄ›mecky", "ZĂˇleĹľĂ­ na definici systĂ©mu", "Ano, byl ÄŚech"], correct: 2, cat: "PraktickĂ© OI", exp: "PĹ™Ă­klad klasifikaÄŤnĂ­ho dilematu - psal nÄ›mecky (vylouÄŤen z Lexikonu ÄŤeskĂ© literatury), ale tvoĹ™il v Praze.", hint: "ZĂˇleĹľĂ­ na Ăşhlu pohledu." },

    // ĂšrovnÄ› zpracovĂˇnĂ­
    { q: "Kdo pracuje s primĂˇrnĂ­m objektem a vytvĂˇĹ™Ă­ primĂˇrnĂ­ zĂˇznam?", options: ["InformaÄŤnĂ­ specialista", "Badatel/expert", "DigitĂˇlnĂ­ badatel", "KnihovnĂ­k"], correct: 1, cat: "ZĂˇklady OI", exp: "Badatel pracuje s primĂˇrnĂ­m objektem (jev, rostlina, fosilie) a vytvĂˇĹ™Ă­ o nÄ›m primĂˇrnĂ­ zĂˇznam.", hint: "DÄ›lĂˇ primĂˇrnĂ­ zĂˇznam." },
    { q: "Co vytvĂˇĹ™Ă­ informaÄŤnĂ­ specialista?", options: ["PrimĂˇrnĂ­ dokumenty", "Metadata (sekundĂˇrnĂ­ dokumenty)", "Metametadata", "PoÄŤĂ­taÄŤovĂ© programy"], correct: 1, cat: "ZĂˇklady OI", exp: "InformaÄŤnĂ­ specialista pracuje s primĂˇrnĂ­m zĂˇznamem (dokument) a vytvĂˇĹ™Ă­ metadata - popis dokumentu.", hint: "DÄ›lĂˇ metadata." },

    // === NOVĂ‰ KVĂŤZY Z PĹEDNĂĹ KY 2 ===

    // SbĂ­rky - pokroÄŤilĂ©
    { q: "Je zoologickĂˇ zahrada sbĂ­rka?", options: ["Ne, jsou tam jen zvĂ­Ĺ™ata", "Ano, zvĂ­Ĺ™ata jsou informaÄŤnĂ­ objekty pro vzdÄ›lĂˇvĂˇnĂ­", "Pouze pokud mĂˇ knihovnu", "ZĂˇleĹľĂ­ na velikosti"], correct: 1, cat: "SbĂ­rky", exp: "ZOO je sbĂ­rka - cedulky u zvĂ­Ĺ™at jsou metadata, primĂˇrnĂ­ funkce je vzdÄ›lĂˇvacĂ­ (informaÄŤnĂ­).", hint: "Cedulky jsou metadata." },
    { q: "Je zverimex sbĂ­rka?", options: ["Ano, jsou tam zvĂ­Ĺ™ata", "Ne, primĂˇrnĂ­ funkce je komerÄŤnĂ­", "Ano, majĂ­ katalog zvĂ­Ĺ™at", "ZĂˇleĹľĂ­ na sortimentu"], correct: 1, cat: "SbĂ­rky", exp: "Zverimex mĂˇ primĂˇrnÄ› komerÄŤnĂ­ funkci (prodej), proto nenĂ­ sbĂ­rkou ve smyslu organizace informacĂ­.", hint: "Prodej, ne informace." },
    { q: "Je restauraÄŤnĂ­ menu sbĂ­rka?", options: ["Ano", "Ne, slouĹľĂ­ k vĂ˝bÄ›ru jĂ­dla pro objednĂˇvku", "ZĂˇleĹľĂ­ na typu restaurace", "Pouze u gurmĂˇnskĂ˝ch restauracĂ­"], correct: 1, cat: "SbĂ­rky", exp: "Menu nenĂ­ sbĂ­rka - primĂˇrnĂ­m ĂşÄŤelem je vĂ˝bÄ›r jĂ­dla k objednĂˇnĂ­, ne informaÄŤnĂ­ funkce.", hint: "Prodej jĂ­dla, ne informace." },

    // McLuhan a mĂ©dia
    { q: "Co tvrdĂ­ McLuhan vĂ˝rokem 'mĂ©dium je poselstvĂ­'?", options: ["Obsah je dĹŻleĹľitÄ›jĹˇĂ­ neĹľ forma", "Forma mĂ©dia ovlivĹuje, jak vnĂ­mĂˇme obsah", "MĂ©dia jsou neutrĂˇlnĂ­", "Pouze digitĂˇlnĂ­ mĂ©dia majĂ­ vĂ˝znam"], correct: 1, cat: "MĂ©dia", exp: "McLuhan: kaĹľdĂ© mĂ©dium mĂˇ vlastnosti pĹ™edurÄŤujĂ­cĂ­ vnĂ­mĂˇnĂ­ obsahu - forma ovlivĹuje pochopenĂ­.", hint: "Forma ovlivĹuje obsah." },
    { q: "ProÄŤ roztrĹľenĂ­ knihy vyvolĂˇ vÄ›tĹˇĂ­ emoce neĹľ zlomenĂ­ CD se stejnĂ˝m obsahem?", options: ["CD jsou levnÄ›jĹˇĂ­", "Kniha je kulturnÄ›jĹˇĂ­", "V knize jsou vĂˇzĂˇny kulturnĂ­ hodnoty a tradice", "CD jdou opravit"], correct: 2, cat: "MĂ©dia", exp: "Kniha jako objekt nese kulturnĂ­ hodnoty a tradice, kterĂ© digitĂˇlnĂ­ mĂ©dia postrĂˇdajĂ­.", hint: "Kniha jako kulturnĂ­ objekt." },

    // Struktura dokumentĹŻ
    { q: "Co je formĂˇt obsahu dokumentu?", options: ["RozmÄ›ry strĂˇnky", "ZpĹŻsob zĂˇznamu: text, obraz, zvuk, data", "Typ vazby", "Rok vydĂˇnĂ­"], correct: 1, cat: "Dokumenty", exp: "FormĂˇt obsahu urÄŤuje zpĹŻsob zĂˇznamu informacĂ­ - text, obraz (statickĂ˝/dynamickĂ˝), zvuk, data, komiks.", hint: "Jak je to zapsanĂ©." },
    { q: "Co je kontinuita dokumentu?", options: ["NepĹ™etrĹľitĂ© ÄŤtenĂ­", "JednorĂˇzovĂ© vs opakovanĂ© vydĂˇvĂˇnĂ­", "Kvalita tisku", "DĂ©lka textu"], correct: 1, cat: "Dokumenty", exp: "Kontinuita rozliĹˇuje jednorĂˇzovÄ› vydanĂ© dokumenty (monografie) od opakovanÄ› vychĂˇzejĂ­cĂ­ch (ÄŤasopisy, roÄŤenky).", hint: "Jednou nebo poĹ™Ăˇd?" },
    { q: "Jak se liĹˇĂ­ typografie klasickĂ© knihy od e-knihy?", options: ["Nijak", "E-kniha mĂˇ lepĹˇĂ­ typografii", "KlasickĂˇ kniha mĂˇ promyĹˇlenou typografii, e-kniha ÄŤasto ĹľĂˇdnou", "E-knihy neexistujĂ­"], correct: 2, cat: "MĂ©dia", exp: "Typografie klasickĂ© knihy podporuje vnĂ­mĂˇnĂ­ obsahu. E-knihy se pĹ™izpĹŻsobujĂ­ displeji a tuto vrstvu ÄŤasto postrĂˇdajĂ­.", hint: "ÄŚasto chybĂ­." },
    { q: "Co je bibliografie bibliografiĂ­?", options: ["PrimĂˇrnĂ­ dokument", "SekundĂˇrnĂ­ dokument", "TerciĂˇrnĂ­ dokument", "KvartĂ©rnĂ­ dokument"], correct: 2, cat: "Dokumenty", exp: "Bibliografie bibliografiĂ­ je terciĂˇrnĂ­ dokument - popisuje sekundĂˇrnĂ­ dokumenty (bibliografie), kterĂ© popisujĂ­ primĂˇrnĂ­.", hint: "TerciĂˇrnĂ­ dokument." },

    // === OTĂZKY ZE SKUTEÄŚNĂ‰HO TESTU (TEST F) ===

    // Terminologie a zĂˇklady
    { q: "V angliÄŤtinÄ› se pro oblast 'organizace informacĂ­' obvykle pouĹľĂ­vĂˇ termĂ­n:", options: ["knowledge management", "data mining", "knowledge organization", "information retrieval"], correct: 2, cat: "TEST F", exp: "Knowledge organization je anglickĂ˝ ekvivalent pro organizaci informacĂ­. Information retrieval = vyhledĂˇvĂˇnĂ­ informacĂ­, data mining = dolovĂˇnĂ­ dat.", hint: "Knowledge organization." },
    { q: "Popperova teorie tĹ™Ă­ svÄ›tĹŻ se od konceptu sĂ©miotickĂ©ho trojĂşhelnĂ­ku liĹˇĂ­ tĂ­m, Ĺľe:", options: ["zohledĹuje triĂˇdu data-informace-znalost", "objekt chĂˇpe v nominalistickĂ©m smyslu", "zahrnuje hledisko subjektu", "odliĹˇuje pojmy vĂ˝znam a smysl"], correct: 2, cat: "TEST F", exp: "Popperovy svÄ›ty zahrnujĂ­ PII - poznĂˇvajĂ­cĂ­ subjekt (lidskou mysl). SĂ©miotickĂ˝ trojĂşhelnĂ­k subjekt neobsahuje - jen znak, vĂ˝znam a vÄ›c.", hint: "Zahrnuje subjekt." },
    { q: "Zkratka GLAM v souvislosti se sbĂ­rkovĂ˝mi institucemi reprezentuje:", options: ["4 zpĹŻsoby uspoĹ™ĂˇdĂˇnĂ­ sbĂ­rek", "4 typy hlavnĂ­ch institucĂ­", "4 zĂˇkladnĂ­ geografickĂ© oblasti", "4 osobnosti pĹ™ispĂ­vajĂ­cĂ­ k teorii sbĂ­rek"], correct: 1, cat: "TEST F", exp: "GLAM = Galleries, Libraries, Archives, Museums - ÄŤtyĹ™i typy sbĂ­rkovĂ˝ch/pamÄ›ĹĄovĂ˝ch institucĂ­.", hint: "Knihovny, muzea, archivy, galerie." },
    { q: "InformaÄŤnĂ­ zdroj je:", options: ["synonymum pro informaÄŤnĂ­ objekt", "informaÄŤnĂ­ objekt dokumentovĂ© povahy", "informaÄŤnĂ­ objekt zahrnujĂ­cĂ­ informace relevantnĂ­ pro urÄŤitĂ˝ ĂşÄŤel", "dokument s vysokĂ˝m impakt faktorem"], correct: 2, cat: "TEST F", exp: "InformaÄŤnĂ­ zdroj = informaÄŤnĂ­ objekt relevantnĂ­ pro konkrĂ©tnĂ­ informaÄŤnĂ­ potĹ™ebu. Ne kaĹľdĂ˝ IO je informaÄŤnĂ­ zdroj!", hint: "RelevantnĂ­ pro mÄ›." },

    // LRM a dokumenty
    { q: "KterĂ˝ ÄŤeskĂ˝ termĂ­n chybĂ­ v LRM: DĂŤLO | ... | PROVEDENĂŤ | JEDNOTKA?", options: ["vyjĂˇdĹ™enĂ­", "koncept", "pĹ™eklad", "realizace"], correct: 0, cat: "TEST F", exp: "LRM model: DĂ­lo â†’ VyjĂˇdĹ™enĂ­ (Expression) â†’ ProvedenĂ­ (Manifestation) â†’ Jednotka (Item).", hint: "VyjĂˇdĹ™enĂ­." },
    { q: "Vyberte nejpĹ™esnÄ›jĹˇĂ­ obecnou charakteristiku umÄ›lĂ©ho jazyka:", options: ["dovoluje vyjĂˇdĹ™it pouze nÄ›kterĂ© skuteÄŤnosti", "slovnĂ­k i gramatika jsou stanoveny pĹ™edem", "je pouĹľĂ­vĂˇn Ăşzkou odbornou komunitou", "lexikum je vytvoĹ™eno pomocĂ­ kĂłdĹŻ"], correct: 1, cat: "TEST F", exp: "UmÄ›lĂ˝ (selekÄŤnĂ­) jazyk mĂˇ pĹ™edem stanovenĂ˝ slovnĂ­k i gramatiku - na rozdĂ­l od pĹ™irozenĂ©ho jazyka.", hint: "PĹ™edem danĂˇ pravidla." },
    { q: "VĂ˝hodou prekoordinovanĂ©ho systĂ©mu je:", options: ["omezenĂ­ poÄŤtu poĹ™ĂˇdacĂ­ch znakĹŻ", "snadnĂˇ sprĂˇva Ĺ™Ă­zenĂ©ho slovnĂ­ku", "zachovĂˇnĂ­ vztahu mezi dĂ­lÄŤĂ­mi pojmovĂ˝mi jednotkami", "vyuĹľitĂ­ principu fazet"], correct: 2, cat: "TEST F", exp: "Prekoordinace zachovĂˇvĂˇ vztahy mezi pojmy (napĹ™. 'ÄŤeskĂ© dÄ›jiny 20. stoletĂ­' drĹľĂ­ pohromadÄ›). Postkoordinace tyto vztahy ruĹˇĂ­.", hint: "DrĹľĂ­ vĂ˝znam pohromadÄ›." },
    { q: "PoĹ™ĂˇdacĂ­ znak klasifikaÄŤnĂ­ho systĂ©mu se nazĂ˝vĂˇ:", options: ["tĹ™Ă­dnĂ­k", "notace", "klasifikĂˇtor", "klasifikaÄŤnĂ­ znak"], correct: 1, cat: "TEST F", exp: "Notace = poĹ™ĂˇdacĂ­ znak (symbol, kĂłd) klasifikaÄŤnĂ­ho systĂ©mu, napĹ™. 821.162.3 v MDT.", hint: "Notace." },

    // Tezaurus
    { q: "OznaÄŤte prvek tezauru, kterĂ˝ se obvykle pouĹľĂ­vĂˇ pro indexaci:", options: ["mikrotezaurus", "fazeta", "deskriptor", "nedeskriptor"], correct: 2, cat: "TEST F", exp: "Deskriptor = preferovanĂˇ lexikĂˇlnĂ­ jednotka pro indexaci. Nedeskriptor pouze odkazuje na deskriptor.", hint: "Deskriptor." },
    { q: "Tezaury jsou obvykle koncipovĂˇny jako systĂ©my:", options: ["fazetovĂ©", "univerzĂˇlnĂ­", "enumerativnĂ­", "oborovĂ©"], correct: 3, cat: "TEST F", exp: "Tezaury jsou typicky oborovĂ© (specializovanĂ©) - napĹ™. MeSH pro medicĂ­nu, ERIC pro vzdÄ›lĂˇvĂˇnĂ­.", hint: "OborovĂ©." },
    { q: "Vztah mezi pojmy 'dveĹ™e' a 'klika' oznaÄŤĂ­me jako vztah:", options: ["partitivnĂ­", "ekvivalentnĂ­", "antonymnĂ­", "generickĂ˝"], correct: 0, cat: "TEST F", exp: "PartitivnĂ­ = celek-ÄŤĂˇst. Klika je ÄŚĂSTĂŤ dveĹ™Ă­. GenerickĂ˝ by byl rod-druh (nĂˇbytek â†’ stĹŻl).", hint: "Celek a ÄŤĂˇst." },

    // Notace a klasifikace
    { q: "Notace A36, A36.1, A36.1b je pĹ™Ă­kladem notace:", options: ["rozvinutĂ©", "expanzivnĂ­", "hierarchickĂ©", "kategorizaÄŤnĂ­"], correct: 2, cat: "TEST F", exp: "HierarchickĂˇ notace - kaĹľdĂˇ dalĹˇĂ­ ĂşroveĹ pĹ™idĂˇvĂˇ symbol (A36 â†’ A36.1 â†’ A36.1b) a ukazuje podĹ™azenost.", hint: "HierarchickĂˇ." },
    { q: "Mortimer Taube vytvoĹ™il systĂ©m UNITERM; nazĂ˝val se tak proto, Ĺľe:", options: ["lexikĂˇlnĂ­ jednotky byly unifikovĂˇny", "mÄ›l ambici sjednotit vÄ›cnĂ˝ popis", "Ĺˇlo o prvnĂ­ systĂ©m na poÄŤĂ­taÄŤi", "lexikĂˇlnĂ­ jednotky byly tvoĹ™eny jedinĂ˝m vĂ˝razem"], correct: 3, cat: "TEST F", exp: "UNITERM = jednotlivĂˇ slova (unitary terms) pro silnou postkoordinaci. PĹ™edchĹŻdce tezaurĹŻ.", hint: "JednotlivĂˇ slova." },
    { q: "TermĂ­nem 'klĂ­ÄŤovĂ© slovo' pravdÄ›podobnÄ› NEOZNAÄŚĂŤME:", options: ["poĹ™ĂˇdacĂ­ znak systematickĂ©ho selekÄŤnĂ­ho jazyka", "vĂ˝raz z nĂˇzvu dokumentu", "termĂ­n z plnĂ©ho textu dokumentu", "souslovĂ­ vyjadĹ™ujĂ­cĂ­ obsah dokumentu"], correct: 0, cat: "TEST F", exp: "KlĂ­ÄŤovĂˇ slova jsou z pĹ™irozenĂ©ho jazyka. SystematickĂ˝ SJ pouĹľĂ­vĂˇ notaci (ÄŤĂ­selnĂ©/alfanumerickĂ© kĂłdy), ne slova.", hint: "Notace." },
    { q: "Je-li dokument oznaÄŤen znakem '636.12', byl pouĹľit selekÄŤnĂ­ jazyk:", options: ["pĹ™edmÄ›tovĂ˝", "systematickĂ˝", "fazetovĂ˝", "univerzĂˇlnĂ­"], correct: 1, cat: "TEST F", exp: "ÄŚĂ­selnĂˇ notace (636.12) = systematickĂ˝ SJ (MDT, DDC). PĹ™edmÄ›tovĂ˝ SJ pouĹľĂ­vĂˇ slova.", hint: "SystematickĂ˝ (ÄŤĂ­sla)." },

    // AnalĂ˝za a vyhledĂˇvĂˇnĂ­
    { q: "Pro obsahovou analĂ˝zu v informaÄŤnÄ›vÄ›dnĂ­m smyslu pouĹľĂ­vĂˇme anglickĂ˝ termĂ­n:", options: ["content analysis", "table of content", "subject analysis", "text analysis"], correct: 2, cat: "TEST F", exp: "Subject analysis = obsahovĂˇ/vÄ›cnĂˇ analĂ˝za dokumentu. Content analysis je metoda sociĂˇlnĂ­ch vÄ›d.", hint: "Subject analysis." },
    { q: "SelekÄŤnĂ­ obraz dokumentu (SOD) se od redukovanĂ©ho textu liĹˇĂ­ tĂ­m, Ĺľe:", options: ["je kratĹˇĂ­", "je vytvoĹ™en na zĂˇkladÄ› umÄ›lĂ©ho jazyka", "jej sestavujĂ­ informaÄŤnĂ­ profesionĂˇlovĂ©", "lĂ©pe vyjadĹ™uje obsah dokumentu"], correct: 1, cat: "TEST F", exp: "SOD pouĹľĂ­vĂˇ umÄ›lĂ˝/selekÄŤnĂ­ jazyk (deskriptory, notace). RedukovanĂ˝ text je v pĹ™irozenĂ©m jazyce (abstrakt, anotace).", hint: "SOD je v umÄ›lĂ©m jazyce." },
    { q: "KonzistentnĂ­ indexace znamenĂˇ, Ĺľe:", options: ["vÄ›tĹˇina dokumentĹŻ je indexovĂˇna kvalitnÄ›", "lexikĂˇlnĂ­ jednotky jsou pouĹľĂ­vĂˇny dle vĂ˝znamu", "dokumenty majĂ­ alespoĹ dva poĹ™ĂˇdacĂ­ znaky", "dokumenty se shodnĂ˝m obsahem majĂ­ shodnĂ˝ selekÄŤnĂ­ obraz"], correct: 3, cat: "TEST F", exp: "Konzistence = shodnĂ˝ obsah â†’ shodnĂˇ indexace. MÄ›Ĺ™Ă­ se inter/intra-indexer konzistencĂ­.", hint: "ShodnĂ˝ obsah = shodnĂ˝ popis." },
    { q: "Pro vyhledĂˇvĂˇnĂ­ dokumentĹŻ pomocĂ­ specifickĂ˝ch vĂ˝razĹŻ a neologismĹŻ je nejvhodnÄ›jĹˇĂ­:", options: ["rejstĹ™Ă­k KWIC", "systĂ©m fazetovĂ©ho typu", "plnotextovĂ© vyhledĂˇvĂˇnĂ­", "Ĺ™Ă­zenĂ˝ slovnĂ­k"], correct: 2, cat: "TEST F", exp: "PlnotextovĂ© vyhledĂˇvĂˇnĂ­ najde i neologismy a specifickĂ© vĂ˝razy, kterĂ© nejsou v Ĺ™Ă­zenĂ©m slovnĂ­ku.", hint: "Fulltext." },
    { q: "PĹ™esnost vyhledĂˇvĂˇnĂ­ (precision) se vypoÄŤte jako podĂ­l:", options: ["nalezenĂ˝ch relevantnĂ­ch / vĹˇech nalezenĂ˝ch", "nalezenĂ˝ch relevantnĂ­ch / vĹˇech v databĂˇzi", "nalezenĂ˝ch a nenalezenĂ˝ch nerelevantnĂ­ch", "vĹˇech nalezenĂ˝ch / vĹˇech relevantnĂ­ch"], correct: 0, cat: "TEST F", exp: "Precision = nalezenĂ© relevantnĂ­ / vĹˇechny nalezenĂ©. Recall = nalezenĂ© relevantnĂ­ / vĹˇechny relevantnĂ­ v databĂˇzi.", hint: "RelevantnĂ­ z nalezenĂ˝ch." },

    // === DALĹ ĂŤ ZKOUĹ KOVĂ‰ OTĂZKY (styl TEST F) ===

    // KlasifikaÄŤnĂ­ systĂ©my - detaily
    { q: "KterĂ˝ klasifikaÄŤnĂ­ systĂ©m je orientovĂˇn pĹ™edevĹˇĂ­m na americkĂ© reĂˇlie?", options: ["DDC", "MDT", "LCC", "BBC"], correct: 2, cat: "ZkouĹˇka", exp: "LCC (Library of Congress Classification) vznikla pro americkou Kongresovou knihovnu a odrĂˇĹľĂ­ americkĂ˝ pohled.", hint: "Je americkĂˇ." },
    { q: "KterĂ˝ znak se v MDT pouĹľĂ­vĂˇ pro vyjĂˇdĹ™enĂ­ mĂ­sta?", options: ["dvojteÄŤka :", "uvozovky \"", "zĂˇvorky ()", "rovnĂ­tko ="], correct: 2, cat: "ZkouĹˇka", exp: "V MDT: (0...) = forma, (=...) = jazyk, (...) = mĂ­sto, \"...\" = ÄŤas, : = spojenĂ­ tĂ©mat.", hint: "ZĂˇvorky." },
    { q: "Znak '821.162.3' v MDT oznaÄŤuje:", options: ["anglickou literaturu", "ÄŤeskou literaturu", "nÄ›meckou literaturu", "francouzskou literaturu"], correct: 1, cat: "ZkouĹˇka", exp: "821 = beletrie, 162.3 = ÄŤeĹˇtina. Tedy ÄŤeskĂˇ beletrie/literatura.", hint: "Beletrie, ÄŚeĹˇtina." },
    { q: "DDC je klasifikace typu:", options: ["fazetovĂ©ho", "enumerativnĂ­ho", "analyticko-syntetickĂ©ho", "fasetovĂ©ho"], correct: 1, cat: "ZkouĹˇka", exp: "DDC je enumerativnĂ­ (vĂ˝ÄŤtovĂ˝) systĂ©m - vĹˇechny tĹ™Ă­dy jsou pĹ™edem definovĂˇny. MDT kombinuje enumerativnĂ­ s fazetovĂ˝m.", hint: "EnumerativnĂ­." },
    { q: "DvojteÄŤkovĂ© tĹ™Ă­dÄ›nĂ­ (CC) je pojmenovĂˇno podle:", options: ["autora Colonela", "separĂˇtoru dvojteÄŤky v notaci", "dvou hlavnĂ­ch tĹ™Ă­d", "typu dokumentĹŻ"], correct: 1, cat: "ZkouĹˇka", exp: "Colon Classification (CC) - 'colon' = dvojteÄŤka. Ranganathan pouĹľĂ­val dvojteÄŤku jako hlavnĂ­ separĂˇtor fazet.", hint: "Podle dvojteÄŤky." },

    // Vztahy v tezauru
    { q: "Zkratka BT v tezauru znamenĂˇ:", options: ["Basic Term", "Broader Term", "Better Term", "Binary Term"], correct: 1, cat: "ZkouĹˇka", exp: "BT = Broader Term (ĹˇirĹˇĂ­/nadĹ™azenĂ˝ termĂ­n). Opak je NT = Narrower Term (uĹľĹˇĂ­/podĹ™azenĂ˝).", hint: "Broader Term." },
    { q: "Zkratka UF v tezauru znamenĂˇ:", options: ["Universal Form", "Used For", "Unified Format", "Upper Field"], correct: 1, cat: "ZkouĹˇka", exp: "UF = Used For - uvĂˇdĂ­ se u deskriptoru a ukazuje, kterĂ© nedeskriptory (synonyma) na nÄ›j odkazujĂ­.", hint: "Used For." },
    { q: "Vztah RT v tezauru oznaÄŤuje:", options: ["hierarchickĂ˝ vztah rod-druh", "asociativnĂ­ (pĹ™Ă­buznĂ˝) vztah", "ekvivalentnĂ­ vztah", "partitivnĂ­ vztah"], correct: 1, cat: "ZkouĹˇka", exp: "RT = Related Term - asociativnĂ­ (pĹ™Ă­buznĂ˝) vztah. NenĂ­ hierarchickĂ˝, jen tematickĂˇ souvislost.", hint: "PĹ™Ă­buznĂ˝, ne nadĹ™azenĂ˝." },
    { q: "Pokud v tezauru vidĂ­m 'automobil USE vozidlo', znamenĂˇ to:", options: ["automobil je deskriptor", "vozidlo je nedeskriptor", "automobil je nedeskriptor odkazujĂ­cĂ­ na deskriptor vozidlo", "oba jsou deskriptory"], correct: 2, cat: "ZkouĹˇka", exp: "USE = odkaz z nepreferovanĂ©ho termĂ­nu (nedeskriptoru) na preferovanĂ˝ termĂ­n (deskriptor).", hint: "Odkaz na sprĂˇvnĂ˝ termĂ­n." },

    // SĂ©mantika a morfologie
    { q: "Slova 'koruna' (mÄ›na) a 'koruna' (strom) jsou pĹ™Ă­kladem:", options: ["synonymie", "homonymie", "polysĂ©mie", "antonymie"], correct: 1, cat: "ZkouĹˇka", exp: "Homonymie = stejnÄ› znÄ›jĂ­cĂ­/psanĂˇ slova s RĹ®ZNĂťM etymologickĂ˝m pĹŻvodem a vĂ˝znamem.", hint: "StejnÄ› znĂ­, rĹŻznĂ˝ pĹŻvod." },
    { q: "Slova 'kĹ™Ă­dlo' (ptaÄŤĂ­), 'kĹ™Ă­dlo' (klavĂ­rnĂ­), 'kĹ™Ă­dlo' (budovy) jsou pĹ™Ă­kladem:", options: ["homonymie", "polysĂ©mie", "synonymie", "antonymie"], correct: 1, cat: "ZkouĹˇka", exp: "PolysĂ©mie = jeden termĂ­n s vĂ­ce etymologicky SOUVISEJĂŤCĂŤMI vĂ˝znamy (metaforickĂ© pĹ™enosy).", hint: "Jeden termĂ­n, vĂ­ce vĂ˝znamĹŻ." },
    { q: "V tezauru se homonymie Ĺ™eĹˇĂ­ pomocĂ­:", options: ["nedeskriptorĹŻ", "relĂˇtorĹŻ v zĂˇvorce", "zkratky RT", "hierarchie BT/NT"], correct: 1, cat: "ZkouĹˇka", exp: "RelĂˇtor = slovnĂ­ vĂ˝raz v zĂˇvorce rozliĹˇujĂ­cĂ­ vĂ˝znam: 'koruna (mÄ›na)' vs 'koruna (botanika)'.", hint: "RelĂˇtor v zĂˇvorce." },
    { q: "Kvazisomymie je:", options: ["ĂşplnĂˇ synonymie", "ÄŤĂˇsteÄŤnĂˇ synonymie povaĹľovanĂˇ za plnou", "typ homonymie", "hierarchickĂ˝ vztah"], correct: 1, cat: "ZkouĹˇka", exp: "Kvazisynonymie = termĂ­ny s podobnĂ˝m (ne zcela totoĹľnĂ˝m) vĂ˝znamem, v SJ povaĹľovanĂ© za synonyma.", hint: "Skoro to samĂ©." },

    // Fazety a PMEST
    { q: "PMEST je zkratka pro fazetovou formulaci:", options: ["Deweyho", "Otleta", "Ranganathana", "Blisse"], correct: 2, cat: "ZkouĹˇka", exp: "PMEST = Personality, Matter, Energy, Space, Time - Ranganathanova fazetovĂˇ formulace pro CC.", hint: "Ranganathan." },
    { q: "Fazeta 'Energy' v PMEST oznaÄŤuje:", options: ["zdroje energie", "procesy a ÄŤinnosti", "materiĂˇly", "ÄŤasovĂ© obdobĂ­"], correct: 1, cat: "ZkouĹˇka", exp: "E = Energy = procesy, ÄŤinnosti, operace. P = tĂ©ma, M = vlastnosti/materiĂˇl, S = mĂ­sto, T = ÄŤas.", hint: "ÄŚinnosti a procesy." },
    { q: "Principium divisionis je:", options: ["princip hierarchie", "klasifikaÄŤnĂ­ charakteristika (kritĂ©rium dÄ›lenĂ­)", "typ notace", "metoda indexace"], correct: 1, cat: "ZkouĹˇka", exp: "Principium divisionis = kritĂ©rium/charakteristika, podle kterĂ© vytvĂˇĹ™Ă­me fazetu (napĹ™. barva, materiĂˇl, ĂşÄŤel).", hint: "KritĂ©rium dÄ›lenĂ­." },

    // HistorickĂ© osobnosti
    { q: "Kdo vytvoĹ™il prvnĂ­ univerzĂˇlnĂ­ desetinnou klasifikaci v roce 1876?", options: ["Paul Otlet", "S.R. Ranganathan", "Melvil Dewey", "H.E. Bliss"], correct: 2, cat: "ZkouĹˇka", exp: "Melvil Dewey vytvoĹ™il DDC (Dewey Decimal Classification) v roce 1876.", hint: "Dewey." },
    { q: "Paul Otlet a Henri La Fontaine jsou zakladatelĂ©:", options: ["DDC", "LCC", "MDT", "CC"], correct: 2, cat: "ZkouĹˇka", exp: "Otlet a La Fontaine vytvoĹ™ili MDT na zaÄŤĂˇtku 20. stoletĂ­ v Belgii pro MezinĂˇrodnĂ­ bibliografickĂ˝ Ăşstav.", hint: "MDT." },
    { q: "S.R. Ranganathan formuloval:", options: ["pÄ›t zĂˇkonĹŻ knihovnictvĂ­ a PMEST", "Deweyho desetinnĂ© tĹ™Ă­dÄ›nĂ­", "pĹ™edmÄ›tovĂˇ hesla LCSH", "formĂˇt MARC"], correct: 0, cat: "ZkouĹˇka", exp: "Ranganathan: 5 zĂˇkonĹŻ knihovnictvĂ­, PMEST, Colon Classification (1933), fazetovĂˇ analĂ˝za.", hint: "PÄ›t zĂˇkonĹŻ." },

    // Recall a vyhledĂˇvĂˇnĂ­
    { q: "Ăšplnost vyhledĂˇvĂˇnĂ­ (recall) se vypoÄŤte jako podĂ­l:", options: ["nalezenĂ˝ch relevantnĂ­ch / vĹˇech nalezenĂ˝ch", "nalezenĂ˝ch relevantnĂ­ch / vĹˇech relevantnĂ­ch v databĂˇzi", "vĹˇech dokumentĹŻ / relevantnĂ­ch dokumentĹŻ", "nalezenĂ˝ch / nenalezenĂ˝ch"], correct: 1, cat: "ZkouĹˇka", exp: "Recall = nalezenĂ© relevantnĂ­ / vĹˇechny relevantnĂ­ v databĂˇzi. MÄ›Ĺ™Ă­, kolik relevantnĂ­ch jsme naĹˇli.", hint: "RelevantnĂ­, co jsme naĹˇli." },
    { q: "VyĹˇĹˇĂ­ Ăşplnost indexace (vĂ­ce deskriptorĹŻ) obvykle vede k:", options: ["vyĹˇĹˇĂ­ pĹ™esnosti", "vyĹˇĹˇĂ­mu recall", "niĹľĹˇĂ­mu recall", "rychlejĹˇĂ­mu vyhledĂˇvĂˇnĂ­"], correct: 1, cat: "ZkouĹˇka", exp: "VĂ­ce deskriptorĹŻ = vyĹˇĹˇĂ­ Ĺˇance na shodu = vyĹˇĹˇĂ­ recall, ale moĹľnĂˇ niĹľĹˇĂ­ precision.", hint: "VÄ›tĹˇĂ­ Ĺˇance najĂ­t." },
    { q: "DelĹˇĂ­ SOD (ĂşplnĂˇ indexace) vede k:", options: ["vyĹˇĹˇĂ­ pĹ™esnosti (precision)", "vyĹˇĹˇĂ­ Ăşplnosti (recall)", "niĹľĹˇĂ­ konzistenci", "rychlejĹˇĂ­ indexaci"], correct: 1, cat: "ZkouĹˇka", exp: "DelĹˇĂ­ SOD = vĂ­ce poĹ™ĂˇdacĂ­ch znakĹŻ = vyĹˇĹˇĂ­ recall. KratĹˇĂ­ SOD = vĂ˝bÄ›rovĂˇ indexace = vyĹˇĹˇĂ­ precision.", hint: "VÄ›tĹˇĂ­ recall." },

    // RedukovanĂ© texty
    { q: "Anotace se od abstraktu liĹˇĂ­ pĹ™edevĹˇĂ­m tĂ­m, Ĺľe:", options: ["je delĹˇĂ­", "je objektivnÄ›jĹˇĂ­", "mĹŻĹľe obsahovat hodnotĂ­cĂ­/reklamnĂ­ prvky", "je v cizĂ­m jazyce"], correct: 2, cat: "ZkouĹˇka", exp: "Anotace mĹŻĹľe bĂ˝t reklamnĂ­/hodnotĂ­cĂ­. Abstrakt je objektivnĂ­, vÄ›cnĂˇ charakteristika obsahu.", hint: "Anotace mĹŻĹľe hodnotit." },
    { q: "StrukturovanĂ˝ abstrakt je charakteristickĂ˝:", options: ["nepĹ™Ă­tomnostĂ­ struktury", "rozdÄ›lenĂ­m do oddĂ­lĹŻ (CĂ­l, Metody, VĂ˝sledky)", "pouze pro beletrii", "absencĂ­ klĂ­ÄŤovĂ˝ch slov"], correct: 1, cat: "ZkouĹˇka", exp: "StrukturovanĂ˝ abstrakt mĂˇ oddĂ­ly: CĂ­l/Background, Metody, VĂ˝sledky, ZĂˇvÄ›r - typickĂ˝ pro vÄ›deckĂ© ÄŤlĂˇnky.", hint: "MĂˇ oddĂ­ly." },
    { q: "Extrakt je charakteristika obsahu sestavenĂˇ:", options: ["vlastnĂ­mi slovy indexĂˇtora", "z citacĂ­ originĂˇlnĂ­ho textu", "automatickĂ˝m algoritmem", "pĹ™ekladem z cizĂ­ho jazyka"], correct: 1, cat: "ZkouĹˇka", exp: "Extrakt = vĂ˝bÄ›r citacĂ­/formulacĂ­ pĹ™Ă­mo z originĂˇlnĂ­ho dokumentu, ne vlastnĂ­ slova.", hint: "Citace z textu." },

    // PraktickĂ© situace
    { q: "Pro popis sbĂ­rky obrazĹŻ z hlediska jejich nĂˇmÄ›tĹŻ pouĹľijeme:", options: ["DDC", "MARC", "Iconclass", "Dublin Core"], correct: 2, cat: "ZkouĹˇka", exp: "Iconclass = klasifikace ikonografickĂ©ho obsahu (co je na obraze zobrazeno - nĂˇmÄ›ty, symboly, postavy).", hint: "Pro obrazy." },
    { q: "MARC 21 je:", options: ["klasifikaÄŤnĂ­ systĂ©m", "tezaurus", "bibliografickĂ˝/metadatovĂ˝ formĂˇt", "typ notace"], correct: 2, cat: "ZkouĹˇka", exp: "MARC 21 = Machine-Readable Cataloging - formĂˇt pro strojovÄ› ÄŤitelnĂ© bibliografickĂ© zĂˇznamy.", hint: "FormĂˇt zĂˇznamĹŻ." },
    { q: "Dublin Core je:", options: ["klasifikace pro knihovny", "jednoduchĂ˝ metadatovĂ˝ standard", "americkĂ˝ tezaurus", "typ abstraktu"], correct: 1, cat: "ZkouĹˇka", exp: "Dublin Core = jednoduchĂ˝ metadatovĂ˝ standard s 15 zĂˇkladnĂ­mi prvky (Title, Creator, Subject...).", hint: "JednoduchĂˇ metadata." },
    { q: "Dokument popisujĂ­cĂ­ jinĂ© dokumenty (bibliografie, katalog) oznaÄŤujeme jako:", options: ["primĂˇrnĂ­ dokument", "sekundĂˇrnĂ­ dokument", "terciĂˇrnĂ­ dokument", "informaÄŤnĂ­ zdroj"], correct: 1, cat: "ZkouĹˇka", exp: "SekundĂˇrnĂ­ dokument = popisuje primĂˇrnĂ­ dokumenty. TerciĂˇrnĂ­ = popisuje sekundĂˇrnĂ­ (bibliografie bibliografiĂ­).", hint: "SekundĂˇrnĂ­ dokument." },

    // === OTĂZKY Z PĹEDNĂĹ KY 1: ĂšVOD DO ORGANIZACE INFORMACĂŤ ===

    // Informace a sdÄ›lenĂ­
    { q: "Slovo 'informace' etymologicky znamenĂˇ:", options: ["pĹ™enos dat", "vtiskĂˇvĂˇnĂ­ formy", "skladovĂˇnĂ­ znalostĂ­", "komunikace"], correct: 1, cat: "PĹ™ednĂˇĹˇka 1", exp: "IN-FORMACE = vtiskĂˇvĂˇ formu. Informace formuje pĹ™Ă­jemce - mÄ›nĂ­ jeho poznatkovĂ˝ systĂ©m.", hint: "VtiskĂˇvĂˇnĂ­ formy." },
    { q: "Pokud slyĹˇĂ­m zprĂˇvu 'dnes je pĂˇtek' podruhĂ© ten samĂ˝ den, jde o:", options: ["informaci", "sdÄ›lenĂ­/zprĂˇvu", "znalost", "data"], correct: 1, cat: "PĹ™ednĂˇĹˇka 1", exp: "PoprvĂ© = informace (zmÄ›nila mĹŻj poznatkovĂ˝ systĂ©m). PodruhĂ© = jen sdÄ›lenĂ­ (uĹľ to vĂ­m, nic se nezmÄ›nilo).", hint: "UĹľ jen sdÄ›lenĂ­." },
    { q: "Ĺ anonĹŻv model komunikace NEOBSAHUJE:", options: ["vysĂ­laÄŤ", "pĹ™Ă­jemce", "kanĂˇl", "kontext/vĂ˝znam"], correct: 3, cat: "PĹ™ednĂˇĹˇka 1", exp: "Shannon Ĺ™eĹˇil technickĂ˝ pĹ™enos signĂˇlu (vysĂ­laÄŤ, kanĂˇl, Ĺˇum, pĹ™Ă­jemce). VĂ˝znam/kontext neĹ™eĹˇil - to je pro nĂˇs dĹŻleĹľitĂ©.", hint: "VĂ˝znam." },
    { q: "Informace se oznaÄŤuje jako:", options: ["entropie", "negentropie", "energie", "entroda"], correct: 1, cat: "PĹ™ednĂˇĹˇka 1", exp: "Negentropie = zĂˇpornĂˇ entropie. Entropie = neuspoĹ™Ăˇdanost. Informace/organizace sniĹľuje entropii.", hint: "Negentropie." },
    { q: "ÄŚĂ­m se zabĂ˝vĂˇ organizace informacĂ­?", options: ["vĹˇemi informacemi", "zaznamenanĂ˝mi informacemi", "pouze digitĂˇlnĂ­mi daty", "ĂşstnĂ­m podĂˇnĂ­m"], correct: 1, cat: "PĹ™ednĂˇĹˇka 1", exp: "ZabĂ˝vĂˇme se zaznamenanĂ˝mi informacemi - dokumenty, texty, artefakty. Ne 'informacemi ve vzduchu'.", hint: "ZaznamenanĂ© informace." },
    { q: "MĹŻĹľe organizace informacĂ­ rozliĹˇovat pravdivost informace?", options: ["ano, vĹľdy", "ne, zpracovĂˇvĂˇme zĂˇznamy bez hodnocenĂ­", "pouze u vÄ›deckĂ˝ch textĹŻ", "zĂˇleĹľĂ­ na typu dokumentu"], correct: 1, cat: "PĹ™ednĂˇĹˇka 1", exp: "NemĹŻĹľeme hodnotit pravdivost ani odliĹˇovat informaci od dezinformace - popisujeme zĂˇznamy.", hint: "NehodnotĂ­me." },

    // Znalosti
    { q: "TacitnĂ­ znalosti jsou:", options: ["znalosti v knihĂˇch", "znalosti v databĂˇzĂ­ch", "znalosti, kterĂ© ÄŤlovÄ›k neumĂ­ explicitnÄ› formulovat", "faleĹˇnĂ© znalosti"], correct: 2, cat: "PĹ™ednĂˇĹˇka 1", exp: "TacitnĂ­ = skrytĂ© znalosti. ÄŚlovÄ›k je pouĹľĂ­vĂˇ (expertnĂ­ intuice), ale neumĂ­ je slovnÄ› vyjĂˇdĹ™it.", hint: "VĂ­me to, ale neumĂ­me to Ĺ™Ă­ct." },
    { q: "PĹ™Ă­kladem tacitnĂ­ znalosti je:", options: ["vzorec na vĂ˝poÄŤet plochy", "expertnĂ­ intuice, 'cit pro vÄ›c'", "definice v uÄŤebnici", "katalogizaÄŤnĂ­ pravidla"], correct: 1, cat: "PĹ™ednĂˇĹˇka 1", exp: "TacitnĂ­ znalosti = intuice, zkuĹˇenostnĂ­ know-how, kterĂ© nelze snadno formalizovat a pĹ™edat.", hint: "Cit pro vÄ›c." },

    // ArbitrĂˇrnost
    { q: "ArbitrĂˇrnost znaku znamenĂˇ, Ĺľe:", options: ["znak mĂˇ pĹ™irozenĂ˝ vztah k vÄ›ci", "vztah znaku a vÄ›ci je konvenÄŤnĂ­/nahodilĂ˝", "znak je vĹľdy pĂ­semnĂ˝", "znak musĂ­ bĂ˝t mezinĂˇrodnĂ­"], correct: 1, cat: "PĹ™ednĂˇĹˇka 1", exp: "ArbitrĂˇrnĂ­ = dohodnutĂ˝, konvenÄŤnĂ­. Slovo 'tuĹľka' nijak nepĹ™ipomĂ­nĂˇ skuteÄŤnou tuĹľku.", hint: "DohodnutĂ˝, konvenÄŤnĂ­." },
    { q: "VĂ˝jimkou z arbitrĂˇrnosti znakĹŻ jsou:", options: ["ÄŤĂ­sla", "citoslovce (onomatopoie)", "vlastnĂ­ jmĂ©na", "odbornĂ© termĂ­ny"], correct: 1, cat: "PĹ™ednĂˇĹˇka 1", exp: "Citoslovce napodobujĂ­ zvuky: 'gdĂˇkat' pĹ™ipomĂ­nĂˇ zvuk slepice, 'bum' pĹ™ipomĂ­nĂˇ vĂ˝buch.", hint: "CitujĂ­ zvuk." },
    { q: "V sĂ©miotickĂ©m trojĂşhelnĂ­ku je vztah mezi znakem a vÄ›cĂ­:", options: ["pĹ™Ă­mĂ˝ a silnĂ˝", "pĹ™eruĹˇovanĂ˝/nepĹ™Ă­mĂ˝", "hierarchickĂ˝", "neexistujĂ­cĂ­"], correct: 1, cat: "PĹ™ednĂˇĹˇka 1", exp: "Znak se nevztahuje k vÄ›ci pĹ™Ă­mo, ale pĹ™es vĂ˝znam (pojem). Proto je linka znak-vÄ›c ÄŤĂˇrkovanĂˇ.", hint: "NepĹ™Ă­mĂ˝ vztah." },

    // ĂšrovnÄ› zpracovĂˇnĂ­
    { q: "Ornitolog pozorujĂ­cĂ­ datla a zapisujĂ­cĂ­ do databĂˇze pracuje na Ăşrovni:", options: ["sekundĂˇrnĂ­", "primĂˇrnĂ­", "terciĂˇrnĂ­", "kvartĂ©rnĂ­"], correct: 1, cat: "PĹ™ednĂˇĹˇka 1", exp: "PrimĂˇrnĂ­ ĂşroveĹ = badatel pracuje s primĂˇrnĂ­m objektem (jev) a vytvĂˇĹ™Ă­ primĂˇrnĂ­ zĂˇznam.", hint: "PrimĂˇrnĂ­ zĂˇznam." },
    { q: "KatalogizĂˇtor popisujĂ­cĂ­ knihu pracuje na Ăşrovni:", options: ["primĂˇrnĂ­", "sekundĂˇrnĂ­", "terciĂˇrnĂ­", "kvartĂ©rnĂ­"], correct: 1, cat: "PĹ™ednĂˇĹˇka 1", exp: "SekundĂˇrnĂ­ ĂşroveĹ = informaÄŤnĂ­ specialista pracuje s dokumentem a vytvĂˇĹ™Ă­ metadata.", hint: "Metadata." },

    // PraktickĂ© pĹ™Ă­klady
    { q: "ProÄŤ je tÄ›hotenstvĂ­ zaĹ™azeno v MezinĂˇrodnĂ­ klasifikaci nemocĂ­ (MKN)?", options: ["je to nemoc", "lĂ©kaĹ™i s nĂ­m pracujĂ­ pĹ™i diagnostice", "historickĂˇ chyba", "WHO to vyĹľaduje"], correct: 1, cat: "PĹ™ednĂˇĹˇka 1", exp: "PragmatickĂ˝ kontext: lĂ©kaĹ™i potĹ™ebujĂ­ tÄ›hotenstvĂ­ v systĂ©mu pro prĂˇci s pacientkami.", hint: "DoktoĹ™i to potĹ™ebujĂ­." },
    { q: "PĹ™Ă­klad 'nealkoholickĂ© pivo obsahuje 0,5% alkoholu' ilustruje:", options: ["sprĂˇvnou klasifikaci", "matoucĂ­ pojmenovĂˇnĂ­ vs skuteÄŤnĂ˝ obsah", "marketingovou strategii", "legislativnĂ­ problĂ©m"], correct: 1, cat: "PĹ™ednĂˇĹˇka 1", exp: "Pro klasifikaci musĂ­me chĂˇpat skuteÄŤnĂ˝ obsah, ne jen nĂˇzev - 'nealkoholickĂ©' je zavĂˇdÄ›jĂ­cĂ­.", hint: "Obsah vs NĂˇzev." },

    // === OTĂZKY Z PĹEDNĂĹ KY 2: SBĂŤRKY A INFORMAÄŚNĂŤ OBJEKTY ===

    // SbĂ­rky
    { q: "SbĂ­rka se od bÄ›ĹľnĂ©ho souboru pĹ™edmÄ›tĹŻ liĹˇĂ­ pĹ™edevĹˇĂ­m:", options: ["velikostĂ­", "primĂˇrnĂ­ informaÄŤnĂ­ funkcĂ­", "materiĂˇlem objektĹŻ", "vlastnictvĂ­m"], correct: 1, cat: "PĹ™ednĂˇĹˇka 2", exp: "SbĂ­rka mĂˇ primĂˇrnÄ› informaÄŤnĂ­ funkci - podpora poznĂˇnĂ­. Sklad materiĂˇlu ji nemĂˇ.", hint: "Informuje." },
    { q: "Metafora 'sbĂ­rka jako pamÄ›ĹĄ' vyjadĹ™uje, Ĺľe sbĂ­rka:", options: ["je starĂˇ", "uchovĂˇvĂˇ a zpĹ™Ă­stupĹuje poznĂˇnĂ­", "obsahuje vzpomĂ­nky", "je subjektivnĂ­"], correct: 1, cat: "PĹ™ednĂˇĹˇka 2", exp: "SbĂ­rka jako pamÄ›ĹĄ = uloĹľenĂ© poznĂˇnĂ­, kterĂ© mĹŻĹľeme vyvolat a pouĹľĂ­t pro svou potĹ™ebu.", hint: "UchovĂˇvĂˇ poznĂˇnĂ­." },
    { q: "AntikvariĂˇt NENĂŤ sbĂ­rka, protoĹľe:", options: ["je pĹ™Ă­liĹˇ malĂ˝", "mĂˇ primĂˇrnÄ› komerÄŤnĂ­ funkci", "nemĂˇ katalog", "prodĂˇvĂˇ starĂ© vÄ›ci"], correct: 1, cat: "PĹ™ednĂˇĹˇka 2", exp: "AntikvariĂˇt mĂˇ primĂˇrnĂ­ funkci komerÄŤnĂ­ (prodej), ne informaÄŤnĂ­. Knihovna informuje, antikvariĂˇt prodĂˇvĂˇ.", hint: "ProdĂˇvĂˇ." },
    { q: "ZvĂ­Ĺ™e v ZOO je informaÄŤnĂ­ objekt, protoĹľe:", options: ["je ĹľivĂ©", "slouĹľĂ­ primĂˇrnÄ› ke vzdÄ›lĂˇvĂˇnĂ­", "mĂˇ latinskĂ˝ nĂˇzev", "je v kleci"], correct: 1, cat: "PĹ™ednĂˇĹˇka 2", exp: "ZOO mĂˇ informaÄŤnĂ­ funkci - cedulky u zvĂ­Ĺ™at jsou metadata. Zverimex mĂˇ funkci komerÄŤnĂ­.", hint: "Cedulky jsou metadata." },
    { q: "SbĂ­rka mĹŻĹľe mĂ­t sekundĂˇrnĂ­ funkci:", options: ["pouze informaÄŤnĂ­", "estetickou, ekonomickou, archivaÄŤnĂ­, sociĂˇlnĂ­", "pouze archivaÄŤnĂ­", "ĹľĂˇdnou"], correct: 1, cat: "PĹ™ednĂˇĹˇka 2", exp: "KromÄ› primĂˇrnĂ­ informaÄŤnĂ­ funkce mĂˇ sbĂ­rka i sekundĂˇrnĂ­: estetickou (krĂˇsa), ekonomickou (monetizace), archivaÄŤnĂ­, sociĂˇlnĂ­.", hint: "EstetickĂˇ, ekonomickĂˇ." },

    // LRM model
    { q: "Podle LRM modelu je 'MĂˇj' jako intelektuĂˇlnĂ­ koncept:", options: ["vyjĂˇdĹ™enĂ­", "dĂ­lo", "provedenĂ­", "jednotka"], correct: 1, cat: "PĹ™ednĂˇĹˇka 2", exp: "DĂ­lo = abstraktnĂ­ intelektuĂˇlnĂ­ jednota (MĂˇj jako koncept), nezĂˇvisle na konkrĂ©tnĂ­m textu.", hint: "AbstraktnĂ­ myĹˇlenka." },
    { q: "PĹ™eklad MĂˇje do angliÄŤtiny je v LRM:", options: ["jinĂ© dĂ­lo", "jinĂ© vyjĂˇdĹ™enĂ­", "jinĂ© provedenĂ­", "jinĂˇ jednotka"], correct: 1, cat: "PĹ™ednĂˇĹˇka 2", exp: "PĹ™eklady jsou rĹŻznĂˇ VyjĂˇdĹ™enĂ­ tĂ©hoĹľ DĂ­la. ZmÄ›na jazyka = novĂ© vyjĂˇdĹ™enĂ­.", hint: "JinĂ© vyjĂˇdĹ™enĂ­ tĂ©hoĹľ dĂ­la." },
    { q: "ProÄŤ existujĂ­ stovky rĹŻznĂ˝ch textĹŻ MĂˇje?", options: ["MĂˇcha psal vĂ­ce verzĂ­", "ediÄŤnĂ­ Ăşpravy, cenzura, modernizace pravopisu", "jsou to pĹ™eklady", "zĂˇmÄ›rnĂ© plagiĂˇty"], correct: 1, cat: "PĹ™ednĂˇĹˇka 2", exp: "EdiÄŤnĂ­ Ăşpravy textu, cenzurnĂ­ zĂˇsahy (nacistĂ©), modernizace pravopisu. MĂˇcha psal 'MĂˇgy'.", hint: "EdiÄŤnĂ­ Ăşpravy." },
    { q: "KonkrĂ©tnĂ­ vĂ˝tisk knihy v mĂ˝ch rukou je v LRM:", options: ["dĂ­lo", "vyjĂˇdĹ™enĂ­", "provedenĂ­", "jednotka"], correct: 3, cat: "PĹ™ednĂˇĹˇka 2", exp: "Jednotka (Item) = konkrĂ©tnĂ­ exemplĂˇĹ™. MĹŻĹľe se liĹˇit od ostatnĂ­ch (vakĂˇty, vpisky, poĹˇkozenĂ­).", hint: "KonkrĂ©tnĂ­ vÄ›c." },

    // OriginĂˇl a kopie
    { q: "Faksimile se od falzifikĂˇtu liĹˇĂ­ tĂ­m, Ĺľe:", options: ["je starĹˇĂ­", "pĹ™iznĂˇvĂˇ, Ĺľe jde o kopii", "je draĹľĹˇĂ­", "je digitĂˇlnĂ­"], correct: 1, cat: "PĹ™ednĂˇĹˇka 2", exp: "Faksimile = pĹ™esnĂˇ kopie, ale PĹIZNANĂ. FalzifikĂˇt = napodobenina vydĂˇvanĂˇ za originĂˇl (podvod).", hint: "PĹ™iznanĂˇ kopie." },
    { q: "Faksimile se pouĹľĂ­vĂˇ na vĂ˝stavĂˇch proto, Ĺľe:", options: ["jsou levnÄ›jĹˇĂ­", "chrĂˇnĂ­ vzĂˇcnĂ© originĂˇly", "jsou barevnÄ›jĹˇĂ­", "nĂˇvĹˇtÄ›vnĂ­ci nepoznajĂ­ rozdĂ­l"], correct: 1, cat: "PĹ™ednĂˇĹˇka 2", exp: "Faksimile nahrazuje vzĂˇcnĂ© originĂˇly (rukopisy), kterĂ© by mohly bĂ˝t poĹˇkozeny.", hint: "Ochrana originĂˇlu." },

    // McLuhan a mĂ©dia
    { q: "Performance s roztrĹľenou knihou ukĂˇzala, Ĺľe:", options: ["knihy jsou zbyteÄŤnĂ©", "kniha nese kulturnĂ­ hodnoty nad rĂˇmec obsahu", "CD jsou lepĹˇĂ­", "digitalizace je nutnĂˇ"], correct: 1, cat: "PĹ™ednĂˇĹˇka 2", exp: "RoztrĹľenĂ­ knihy Ĺˇokovalo, zlomenĂ­ CD ne. V knize jsou vĂˇzĂˇny kulturnĂ­ hodnoty a tradice.", hint: "KulturnĂ­ hodnota." },
    { q: "McLuhanovo 'mĂ©dium je poselstvĂ­' znamenĂˇ:", options: ["obsah je nedĹŻleĹľitĂ˝", "forma mĂ©dia ovlivĹuje vnĂ­mĂˇnĂ­ obsahu", "mĂ©dia lĹľou", "knihy jsou nejlepĹˇĂ­"], correct: 1, cat: "PĹ™ednĂˇĹˇka 2", exp: "KaĹľdĂ© mĂ©dium mĂˇ vlastnosti pĹ™edurÄŤujĂ­cĂ­, jak vnĂ­mĂˇme obsah. StejnĂ˝ text v knize a na ÄŤteÄŤce pĹŻsobĂ­ jinak.", hint: "Forma ovlivĹuje obsah." },
    { q: "ProblĂ©m elektronickĂ˝ch knih z hlediska typografie je:", options: ["ĹˇpatnĂ© rozliĹˇenĂ­", "ÄŤasto nemajĂ­ typografii vĹŻbec", "jsou pĹ™Ă­liĹˇ drahĂ©", "nelze je ÄŤĂ­st"], correct: 1, cat: "PĹ™ednĂˇĹˇka 2", exp: "E-knihy se pĹ™izpĹŻsobujĂ­ displeji - ztrĂˇcĂ­ se vrstva typografie podporujĂ­cĂ­ vnĂ­mĂˇnĂ­ obsahu.", hint: "ChybĂ­ vrstva." },

    // Struktura dokumentu
    { q: "'FormĂˇt obsahu' dokumentu urÄŤuje:", options: ["rozmÄ›ry strĂˇnky", "zpĹŻsob zĂˇznamu (text, obraz, zvuk)", "typ vazby", "rok vydĂˇnĂ­"], correct: 1, cat: "PĹ™ednĂˇĹˇka 2", exp: "FormĂˇt obsahu = jak jsou informace zaznamenĂˇny: text, obraz, zvuk, data, komiks.", hint: "ZpĹŻsob zĂˇznamu." },
    { q: "ÄŚasopis na rozdĂ­l od monografie mĂˇ:", options: ["vĂ­ce stran", "opakovanĂ© vydĂˇvĂˇnĂ­ (kontinuitu)", "tvrdou vazbu", "vĂ­ce autorĹŻ"], correct: 1, cat: "PĹ™ednĂˇĹˇka 2", exp: "Kontinuita = rozliĹˇenĂ­ jednorĂˇzovÄ› vydanĂ˝ch (monografie) a opakovanÄ› vychĂˇzejĂ­cĂ­ch (ÄŤasopisy) dokumentĹŻ.", hint: "Jednou nebo poĹ™Ăˇd?" },

    // === KOMPLETNĂŤ ZKOUĹ KOVĂ‰ OTĂZKY Z CELĂ‰HO KURZU ISKB18 ===

    // PROÄŚ TĹĂŤDĂŤME - zĂˇklady
    { q: "Arthur Schopenhauer pĹ™irovnal neuspoĹ™ĂˇdanĂ© poznĂˇnĂ­ k:", options: ["prĂˇzdnĂ© knihovnÄ›", "bohatĂ© ale neuspoĹ™ĂˇdanĂ© knihovnÄ›", "malĂ© uspoĹ™ĂˇdanĂ© sbĂ­rce", "digitĂˇlnĂ­ databĂˇzi"], correct: 1, cat: "Kurz ISKB18", exp: "Schopenhauer: 'ani ta nejbohatĹˇĂ­ knihovna, pokud nenĂ­ uspoĹ™ĂˇdanĂˇ, neposkytuje tolik uĹľitku jako velmi umĂ­rnÄ›nĂˇ, ale dobĹ™e uspoĹ™ĂˇdanĂˇ'", hint: "BohatĂˇ ale neuspoĹ™ĂˇdanĂˇ." },
    { q: "InformaÄŤnĂ­ exploze se datuje zejmĂ©na:", options: ["od stĹ™edovÄ›ku", "od 19. stoletĂ­", "po 2. svÄ›tovĂ© vĂˇlce", "od roku 2000"], correct: 2, cat: "Kurz ISKB18", exp: "InformaÄŤnĂ­ exploze = po 2. svÄ›tovĂ© vĂˇlce masivnĂ­ nĂˇrĹŻst zaznamenanĂ©ho poznĂˇnĂ­ dĂ­ky technologickĂ©mu vĂ˝voji.", hint: "Po vĂˇlce." },
    { q: "InformaÄŤnĂ­ pĹ™etĂ­ĹľenĂ­ je:", options: ["subjektivnĂ­ psychologickĂ˝ stav", "objektivnĂ­ dĹŻsledek informaÄŤnĂ­ exploze", "nedostatek informacĂ­", "typ dokumentu"], correct: 1, cat: "Kurz ISKB18", exp: "PĹ™etĂ­ĹľenĂ­ = objektivnĂ­ jev (pĹ™Ă­liĹˇ mnoho informacĂ­). Deprivace/neurĂłza = subjektivnĂ­ psychologickĂ˝ dĹŻsledek.", hint: "ObjektivnĂ­ fakt." },
    { q: "JakĂ© je mĂ©dium pro znalosti?", options: ["papĂ­r", "digitĂˇlnĂ­ nosiÄŤ", "mozek", "databĂˇze"], correct: 2, cat: "Kurz ISKB18", exp: "Znalosti = informace + kontext, existujĂ­ pouze v mozku. Data a informace lze uloĹľit na nosiÄŤe.", hint: "Mozek." },

    // SELEKÄŚNĂŤ JAZYKY - typologie
    { q: "SelekÄŤnĂ­ jazyk se liĹˇĂ­ od pĹ™irozenĂ©ho jazyka tĂ­m, Ĺľe je:", options: ["univerzĂˇlnĂ­ a asymetrickĂ˝", "specializovanĂ˝ a symetrickĂ˝", "pĹ™irozenĂ˝ a implicitnĂ­", "obecnĂ˝ a historickĂ˝"], correct: 1, cat: "Kurz ISKB18", exp: "PĹ™irozenĂ˝ jazyk = univerzĂˇlnĂ­, asymetrickĂ˝. SelekÄŤnĂ­ jazyk = specializovanĂ˝, symetrickĂ˝, explicitnĂ­.", hint: "SpecializovanĂ˝ a symetrickĂ˝." },
    { q: "Co je symetrie selekÄŤnĂ­ho jazyka?", options: ["zĂˇvislost na kontextu", "jednoznaÄŤnĂ˝ vĂ˝znam bez vĂ˝jimek", "mnoho synonym", "historickĂ˝ vĂ˝voj"], correct: 1, cat: "Kurz ISKB18", exp: "Symetrie SJ = jednoznaÄŤnĂ˝ vĂ˝znam bez zĂˇvislosti na kontextu, bez vĂ˝jimek, synonyma vylouÄŤena.", hint: "JednoznaÄŤnost." },
    { q: "PostkoordinovanĂ© systematickĂ© SJ jsou napĹ™Ă­klad:", options: ["MDT a DDC", "dvojteÄŤkovĂ© tĹ™Ă­dÄ›nĂ­ (CC) a BBC", "pĹ™edmÄ›tovĂˇ hesla", "volnĂˇ klĂ­ÄŤovĂˇ slova"], correct: 1, cat: "Kurz ISKB18", exp: "CC (Ranganathan) a BBC (Bliss) = postkoordinovanĂ© systematickĂ© SJ s fazetovĂ˝m pĹ™Ă­stupem.", hint: "CC a BBC." },
    { q: "PrekoordinovanĂ© pĹ™edmÄ›tovĂ© SJ jsou:", options: ["tezaury", "pĹ™edmÄ›tovĂˇ hesla", "klĂ­ÄŤovĂˇ slova", "klasifikace"], correct: 1, cat: "Kurz ISKB18", exp: "PĹ™edmÄ›tovĂˇ hesla = prekoordinovanĂ© pĹ™edmÄ›tovĂ© SJ. Tezaury = postkoordinovanĂ© pĹ™edmÄ›tovĂ© SJ.", hint: "PĹ™edmÄ›tovĂˇ hesla." },

    // KLASIFIKAÄŚNĂŤ SYSTĂ‰MY - detaily
    { q: "DDC vytvoĹ™il v roce 1876:", options: ["Paul Otlet", "S.R. Ranganathan", "Melvil Dewey", "H.E. Bliss"], correct: 2, cat: "Kurz ISKB18", exp: "Melvil Dewey = Dewey Decimal Classification (1876), pragmatickĂ˝ enumerativnĂ­ systĂ©m.", hint: "Dewey." },
    { q: "Kolik hlavnĂ­ch tĹ™Ă­d mĂˇ DDC?", options: ["5", "10", "21", "26"], correct: 1, cat: "Kurz ISKB18", exp: "DDC mĂˇ 10 hlavnĂ­ch tĹ™Ă­d (000-900), desĂ­tkovĂˇ struktura.", hint: "Deset." },
    { q: "Kolik hlavnĂ­ch tĹ™Ă­d mĂˇ LCC?", options: ["10", "21", "26", "100"], correct: 1, cat: "Kurz ISKB18", exp: "LCC mĂˇ 21 hlavnĂ­ch tĹ™Ă­d oznaÄŤenĂ˝ch pĂ­smeny A-Z (nÄ›kterĂˇ se nepouĹľĂ­vajĂ­).", hint: "Dvacet jedna." },
    { q: "PMEST je fazetovĂˇ formulace vytvoĹ™enĂˇ:", options: ["Melvilem Deweyem", "Paulem Otletem", "S.R. Ranganathanem", "H.E. Blissem"], correct: 2, cat: "Kurz ISKB18", exp: "PMEST = Personality, Matter, Energy, Space, Time - Ranganathanova formulace pro CC.", hint: "Ranganathan." },
    { q: "BBC (Blissovo bibliografickĂ© tĹ™Ă­dÄ›nĂ­) je charakteristickĂ© tĂ­m, Ĺľe:", options: ["je velmi rozĹˇĂ­Ĺ™enĂ©", "je teoreticky fundovanĂ© ale mĂˇlo rozĹˇĂ­Ĺ™enĂ©", "je enumerativnĂ­", "pouĹľĂ­vĂˇ jen ÄŤĂ­slice"], correct: 1, cat: "Kurz ISKB18", exp: "BBC = teoreticky dobĹ™e fundovanĂ˝ fazetovĂ˝ systĂ©m, ale v praxi minimĂˇlnÄ› rozĹˇĂ­Ĺ™en.", hint: "Teoreticky super, prakticky nic moc." },

    // PREKOORDINACE / POSTKOORDINACE
    { q: "VĂ˝hodou prekoordinace je:", options: ["flexibilita pĹ™i vyhledĂˇvĂˇnĂ­", "zachovĂˇnĂ­ vztahu mezi pojmy", "snadnĂˇ sprĂˇva slovnĂ­ku", "vyuĹľitĂ­ fazet"], correct: 1, cat: "Kurz ISKB18", exp: "Prekoordinace zachovĂˇvĂˇ vztahy mezi pojmy (napĹ™. 'ÄŤeskĂ© dÄ›jiny 20. stoletĂ­' drĹľĂ­ pohromadÄ›).", hint: "DrĹľĂ­ vĂ˝znam pohromadÄ›." },
    { q: "VĂ˝hodou postkoordinace je:", options: ["zachovĂˇnĂ­ vztahĹŻ", "jednoduĹˇĹˇĂ­ slovnĂ­k a flexibilita pĹ™i vyhledĂˇvĂˇnĂ­", "vyĹˇĹˇĂ­ pĹ™esnost", "delĹˇĂ­ SOD"], correct: 1, cat: "Kurz ISKB18", exp: "Postkoordinace = jednoduĹˇĹˇĂ­ slovnĂ­k, pojmy se kombinujĂ­ aĹľ pĹ™i vyhledĂˇvĂˇnĂ­ pomocĂ­ booleovskĂ˝ch operĂˇtorĹŻ.", hint: "Flexibilita." },
    { q: "SĂ©mantickĂ˝ rozklad pojmu 'barometr' na 'tlak + mÄ›Ĺ™enĂ­ + pĹ™Ă­stroj' je:", options: ["doporuÄŤovanĂ˝ postup", "nedoporuÄŤovanĂ˝ - ztrĂˇcĂ­ se vĂ˝znam", "syntaktickĂ˝ rozklad", "prekoordinace"], correct: 1, cat: "Kurz ISKB18", exp: "SĂ©mantickĂ˝ rozklad = rozklad podle vĂ˝znamu - nedoporuÄŤuje se, ztrĂˇcĂ­ se smysl pojmu.", hint: "ZtrĂˇcĂ­ se smysl." },
    { q: "Kdy pouĹľĂ­t prekoordinaci?", options: ["vĹľdy", "kdyĹľ rozklad vede ke ztrĂˇtÄ› vĂ˝znamu", "nikdy", "pouze u klasifikacĂ­"], correct: 1, cat: "Kurz ISKB18", exp: "Prekoordinace: souslovĂ­ je bÄ›ĹľnĂ©, rozklad vede ke ztrĂˇtÄ› vĂ˝znamu, obsahuje vlastnĂ­ jmĂ©no.", hint: "KdyĹľ se ztrĂˇcĂ­ vĂ˝znam." },

    // MORFOLOGIE A STRUKTURA SJ
    { q: "Vztah 'automobil - motor' je:", options: ["generickĂ˝ (rod-druh)", "partitivnĂ­ (celek-ÄŤĂˇst)", "asociativnĂ­", "ekvivalentnĂ­"], correct: 1, cat: "Kurz ISKB18", exp: "PartitivnĂ­ = celek-ÄŤĂˇst. Motor je souÄŤĂˇstĂ­ automobilu. GenerickĂ˝ by byl: vozidlo â†’ automobil.", hint: "Celek a ÄŤĂˇst." },
    { q: "SynkategorematickĂˇ substantiva jsou napĹ™Ă­klad:", options: ["bÄ›ĹľnĂˇ podstatnĂˇ jmĂ©na", "'umÄ›lĂ©' v 'umÄ›lĂ© kvÄ›tiny'", "deskriptory", "nedeskriptory"], correct: 1, cat: "Kurz ISKB18", exp: "SynkategorematickĂˇ substantiva sama nevyjadĹ™ujĂ­ tĹ™Ă­du pojmĹŻ, jen modifikujĂ­ jinĂˇ slova.", hint: "SamostatnÄ› nic neznamenajĂ­." },
    { q: "Polyhierarchie znamenĂˇ, Ĺľe:", options: ["jeden pojem mĂˇ vĂ­ce nadĹ™azenĂ˝ch", "jeden pojem mĂˇ vĂ­ce podĹ™azenĂ˝ch", "systĂ©m mĂˇ vĂ­ce ĂşrovnĂ­", "systĂ©m je velmi velkĂ˝"], correct: 0, cat: "Kurz ISKB18", exp: "Polyhierarchie = jeden pojem podĹ™azen vĂ­ce pojmĹŻm (napĹ™. klavĂ­r: hudebnĂ­ nĂˇstroje i nĂˇbytek).", hint: "VĂ­ce nadĹ™azenĂ˝ch." },

    // OBSAHOVĂ ANALĂťZA A INDEXACE
    { q: "OrientaÄŤnĂ­ ÄŤtenĂ­ slouĹľĂ­ k:", options: ["dĹŻkladnĂ©mu porozumÄ›nĂ­", "zĂ­skĂˇnĂ­ zĂˇkladnĂ­ch informacĂ­ o dokumentu", "hledĂˇnĂ­ konkrĂ©tnĂ­ch dat", "kontrole pravopisu"], correct: 1, cat: "Kurz ISKB18", exp: "OrientaÄŤnĂ­ ÄŤtenĂ­ = rychlĂ© zjiĹˇtÄ›nĂ­, zda je dokument relevantnĂ­ pro dalĹˇĂ­ zpracovĂˇnĂ­.", hint: "Je to relevantnĂ­?" },
    { q: "KurzorickĂ© (diagonĂˇlnĂ­) ÄŤtenĂ­ je:", options: ["dĹŻkladnĂ© pomalĂ© ÄŤtenĂ­", "rychlĂ© prochĂˇzenĂ­ zamÄ›Ĺ™enĂ© na klĂ­ÄŤovĂˇ slova", "ÄŤtenĂ­ nahlas", "ÄŤtenĂ­ pozpĂˇtku"], correct: 1, cat: "Kurz ISKB18", exp: "KurzorickĂ© = rychlĂ© diagonĂˇlnĂ­ prochĂˇzenĂ­ textu, zamÄ›Ĺ™enĂ­ na zvĂ˝raznÄ›nĂ© ÄŤĂˇsti.", hint: "Rychle a zbÄ›ĹľnÄ›." },
    { q: "StatarickĂ© ÄŤtenĂ­ je:", options: ["rychlĂ© pĹ™eskakovĂˇnĂ­", "dĹŻkladnĂ© pomalĂ© ÄŤtenĂ­ s porozumÄ›nĂ­m", "selektivnĂ­ hledĂˇnĂ­", "automatickĂ© zpracovĂˇnĂ­"], correct: 1, cat: "Kurz ISKB18", exp: "StatarickĂ© = dĹŻkladnĂ©, pomalĂ© ÄŤtenĂ­ celĂ©ho textu s plnĂ˝m porozumÄ›nĂ­m.", hint: "PomalĂ© s porozumÄ›nĂ­m." },
    { q: "NejÄŤastÄ›jĹˇĂ­ indexaÄŤnĂ­ chybou je:", options: ["pĹ™eklep v deskriptoru", "opominutĂ­ hledisek", "nesprĂˇvnĂˇ notace", "zĂˇmÄ›na homonym"], correct: 1, cat: "Kurz ISKB18", exp: "OpominutĂ­ hledisek = 18,6% chyb. IndexĂˇtor pĹ™ehlĂ©dne dĹŻleĹľitĂ˝ aspekt dokumentu.", hint: "NÄ›co jsme vynechali." },
    { q: "V jakĂ© fĂˇzi indexace vznikĂˇ nejvĂ­ce chyb?", options: ["obsahovĂˇ analĂ˝za", "identifikace pojmĹŻ", "vĂ˝bÄ›r deskriptorĹŻ", "zĂˇpis SOD"], correct: 1, cat: "Kurz ISKB18", exp: "Identifikace pojmĹŻ = 42,3% vĹˇech chyb. NejÄŤastÄ›ji opominutĂ­ hledisek.", hint: "KdyĹľ vybĂ­rĂˇme pojmy." },

    // KONZISTENCE INDEXACE
    { q: "Interindexer konzistence je:", options: ["shoda jednoho indexĂˇtora v ÄŤase", "shoda mezi rĹŻznĂ˝mi indexĂˇtory", "konzistence slovnĂ­ku", "typ notace"], correct: 1, cat: "Kurz ISKB18", exp: "Interindexer = shoda mezi dvÄ›ma nebo vĂ­ce indexĂˇtory indexujĂ­cĂ­mi stejnĂ˝ dokument.", hint: "Mezi vĂ­ce lidmi." },
    { q: "Intraindexer konzistence je:", options: ["shoda mezi indexĂˇtory", "konzistence jednoho indexĂˇtora v ÄŤase", "konzistence slovnĂ­ku", "typ asociace"], correct: 1, cat: "Kurz ISKB18", exp: "Intraindexer = konzistence jednoho indexĂˇtora - zda stejnĂ˝ dokument popisuje stejnÄ› v rĹŻznĂ˝ch ÄŤasech.", hint: "SĂˇm se sebou." },
    { q: "Konzistence C = a/b, kde a = 2 shodnĂ© znaky, b = 8 celkem. C =", options: ["16%", "25%", "40%", "80%"], correct: 1, cat: "Kurz ISKB18", exp: "C = 2/8 = 0,25 = 25%. Konzistence = shodnĂ© znaky / vĹˇechny jedineÄŤnĂ© znaky.", hint: "Shoda dÄ›leno celkem." },

    // RECALL A PRECISION
    { q: "Recall se vypoÄŤte jako:", options: ["nalezenĂ© relevantnĂ­ / vĹˇechny nalezenĂ©", "nalezenĂ© relevantnĂ­ / vĹˇechny relevantnĂ­ v DB", "vĹˇechny nalezenĂ© / vĹˇechny v DB", "relevantnĂ­ / nerelevantnĂ­"], correct: 1, cat: "Kurz ISKB18", exp: "Recall (Ăşplnost) = kolik z relevantnĂ­ch dokumentĹŻ v databĂˇzi jsme naĹˇli.", hint: "Co jsme naĹˇli z toho, co tam je." },
    { q: "DelĹˇĂ­ SOD (ĂşplnĂˇ indexace) vede k:", options: ["vyĹˇĹˇĂ­ pĹ™esnosti", "vyĹˇĹˇĂ­mu recall", "niĹľĹˇĂ­ konzistenci", "rychlejĹˇĂ­ indexaci"], correct: 1, cat: "Kurz ISKB18", exp: "VĂ­ce poĹ™ĂˇdacĂ­ch znakĹŻ = vyĹˇĹˇĂ­ Ĺˇance na shodu = vyĹˇĹˇĂ­ recall (ale moĹľnĂˇ niĹľĹˇĂ­ precision).", hint: "VÄ›tĹˇĂ­ recall." },
    { q: "KratĹˇĂ­ SOD (vĂ˝bÄ›rovĂˇ indexace) vede k:", options: ["vyĹˇĹˇĂ­mu recall", "vyĹˇĹˇĂ­ precision", "niĹľĹˇĂ­ konzistenci", "delĹˇĂ­ dobÄ› indexace"], correct: 1, cat: "Kurz ISKB18", exp: "MĂ©nÄ› znakĹŻ = specifiÄŤtÄ›jĹˇĂ­ popis = vyĹˇĹˇĂ­ precision, ale niĹľĹˇĂ­ recall.", hint: "VÄ›tĹˇĂ­ precision." },

    // REDUKOVANĂ‰ TEXTY
    { q: "ResumĂ© je:", options: ["krĂˇtkĂˇ anotace", "podrobnĂ˝ cizojazyÄŤnĂ˝ souhrn kopĂ­rujĂ­cĂ­ strukturu originĂˇlu", "reklamnĂ­ text", "seznam klĂ­ÄŤovĂ˝ch slov"], correct: 1, cat: "Kurz ISKB18", exp: "ResumĂ© = podrobnĂ˝ (ÄŤasto nÄ›kolikastrĂˇnkovĂ˝) cizojazyÄŤnĂ˝ souhrn na konci dokumentu.", hint: "Souhrn na konci." },
    { q: "Extrakt je charakteristika sestavenĂˇ:", options: ["vlastnĂ­mi slovy", "z citacĂ­ originĂˇlnĂ­ho textu", "automaticky", "pĹ™ekladem"], correct: 1, cat: "Kurz ISKB18", exp: "Extrakt = vĂ˝bÄ›r citacĂ­/formulacĂ­ pĹ™Ă­mo z originĂˇlnĂ­ho dokumentu, ne vlastnĂ­ slova.", hint: "Citace z textu." },
    { q: "StrukturovanĂ˝ abstrakt mĂˇ oddĂ­ly:", options: ["Ăšvod, StaĹĄ, ZĂˇvÄ›r", "CĂ­l, Metody, VĂ˝sledky, ZĂˇvÄ›r", "Autor, NĂˇzev, Obsah", "TĂ©ma, Data, AnalĂ˝za"], correct: 1, cat: "Kurz ISKB18", exp: "StrukturovanĂ˝ abstrakt: CĂ­l/Background, Metody, VĂ˝sledky, ZĂˇvÄ›r - typickĂ˝ pro vÄ›deckĂ© ÄŤlĂˇnky.", hint: "MĂˇ oddĂ­ly." },
    { q: "Anotace mĹŻĹľe na rozdĂ­l od abstraktu obsahovat:", options: ["klĂ­ÄŤovĂˇ slova", "hodnotĂ­cĂ­/reklamnĂ­ prvky", "citace", "bibliografii"], correct: 1, cat: "Kurz ISKB18", exp: "Anotace mĹŻĹľe bĂ˝t reklamnĂ­/hodnotĂ­cĂ­ (nakladatelskĂˇ anotace). Abstrakt je objektivnĂ­.", hint: "MĹŻĹľe hodnotit." },

    // SOD A VYHLEDĂVĂNĂŤ
    { q: "SOD (selekÄŤnĂ­ obraz dokumentu) se od redukovanĂ©ho textu liĹˇĂ­ tĂ­m, Ĺľe:", options: ["je delĹˇĂ­", "pouĹľĂ­vĂˇ umÄ›lĂ˝/selekÄŤnĂ­ jazyk", "je objektivnÄ›jĹˇĂ­", "je v cizĂ­m jazyce"], correct: 1, cat: "Kurz ISKB18", exp: "SOD = umÄ›lĂ˝ jazyk (deskriptory, notace). RedukovanĂ˝ text = pĹ™irozenĂ˝ jazyk (abstrakt).", hint: "SOD je v umÄ›lĂ©m jazyce." },
    { q: "Pro vyhledĂˇvĂˇnĂ­ neologismĹŻ a specifickĂ˝ch vĂ˝razĹŻ je nejvhodnÄ›jĹˇĂ­:", options: ["Ĺ™Ă­zenĂ˝ slovnĂ­k", "klasifikace", "plnotextovĂ© vyhledĂˇvĂˇnĂ­", "pĹ™edmÄ›tovĂˇ hesla"], correct: 2, cat: "Kurz ISKB18", exp: "PlnotextovĂ© vyhledĂˇvĂˇnĂ­ najde i novĂ© termĂ­ny, kterĂ© jeĹˇtÄ› nejsou v Ĺ™Ă­zenĂ©m slovnĂ­ku.", hint: "Fulltext." },
    { q: "Query expansion znamenĂˇ:", options: ["zkrĂˇcenĂ­ dotazu", "automatickĂ© rozĹˇĂ­Ĺ™enĂ­ dotazu o synonyma", "typ operĂˇtoru", "formĂˇt vĂ˝sledkĹŻ"], correct: 1, cat: "Kurz ISKB18", exp: "Query expansion = systĂ©m automaticky rozĹˇĂ­Ĺ™Ă­ dotaz o synonyma a pĹ™Ă­buznĂ© termĂ­ny z ĹS.", hint: "RozĹˇĂ­Ĺ™enĂ­ dotazu." },
    { q: "ProximitnĂ­ operĂˇtory urÄŤujĂ­:", options: ["typ dokumentu", "vzdĂˇlenost hledanĂ˝ch vĂ˝razĹŻ v textu", "relevanci", "poÄŤet vĂ˝sledkĹŻ"], correct: 1, cat: "Kurz ISKB18", exp: "ProximitnĂ­ operĂˇtory = vzdĂˇlenost vĂ˝razĹŻ (poÄŤet slov nebo segment textu).", hint: "VzdĂˇlenost slov." },

    // SYSTĂ‰MY A NĂSTROJE
    { q: "BARTOC je:", options: ["klasifikaÄŤnĂ­ systĂ©m", "metakatalog Ĺ™Ă­zenĂ˝ch slovnĂ­kĹŻ", "typ tezauru", "bibliografickĂˇ databĂˇze"], correct: 1, cat: "Kurz ISKB18", exp: "BARTOC = Basel Register of Thesauri, Ontologies & Classifications - katalog Ĺ™Ă­zenĂ˝ch slovnĂ­kĹŻ.", hint: "Katalog slovnĂ­kĹŻ." },
    { q: "AGROVOC je:", options: ["klasifikace hudby", "tezaurus pro zemÄ›dÄ›lstvĂ­", "typ notace", "bibliografickĂ˝ formĂˇt"], correct: 1, cat: "Kurz ISKB18", exp: "AGROVOC = vĂ­cejazyÄŤnĂ˝ tezaurus FAO pro oblast zemÄ›dÄ›lstvĂ­ a potravinĂˇĹ™stvĂ­.", hint: "ZemÄ›dÄ›lstvĂ­." },
    { q: "Eurovoc je:", options: ["americkĂ˝ systĂ©m", "polytematickĂ˝ tezaurus EU", "klasifikace Kongresu", "typ abstraktu"], correct: 1, cat: "Kurz ISKB18", exp: "Eurovoc = vĂ­cejazyÄŤnĂ˝ polytematickĂ˝ tezaurus EvropskĂ© unie.", hint: "EvropskĂˇ unie." },
    { q: "IPC je klasifikace pro:", options: ["knihy", "patenty", "hudbu", "obrazy"], correct: 1, cat: "Kurz ISKB18", exp: "IPC = International Patent Classification - mezinĂˇrodnĂ­ patentovĂˇ klasifikace.", hint: "Patenty." },

    // PRAKTICKĂ‰ SITUACE
    { q: "PĹ™i indexaci dokumentu o 'dovoznĂ­ch danĂ­ch na ojetĂ© osobnĂ­ automobily' v postkoordinovanĂ©m SJ:", options: ["pouĹľijeme jeden sloĹľenĂ˝ znak", "rozloĹľĂ­me na vĂ­ce jednoduchĂ˝ch znakĹŻ", "nelze indexovat", "pouĹľijeme klasifikaci"], correct: 1, cat: "Kurz ISKB18", exp: "Postkoordinace = rozklad na: dovoznĂ­ daĹ, osobnĂ­ automobil, pouĹľitĂ© zboĹľĂ­ - kombinujĂ­ se pĹ™i vyhledĂˇvĂˇnĂ­.", hint: "RozloĹľĂ­me na vĂ­ce znakĹŻ." },
    { q: "Fazeta je:", options: ["typ notace", "kategorie entit s jednou klasifikaÄŤnĂ­ charakteristikou", "druh dokumentu", "typ indexace"], correct: 1, cat: "Kurz ISKB18", exp: "Fazeta = kategorie podle jednoho principium divisionis (kritĂ©ria) - napĹ™. materiĂˇl, barva, ĂşÄŤel.", hint: "Jedno kritĂ©rium dÄ›lenĂ­." },
    { q: "ParadigmatickĂ© vztahy jsou:", options: ["danĂ© kontextem (aposteriornĂ­)", "nezĂˇvislĂ© na kontextu (apriornĂ­)", "syntagmatickĂ©", "syntaktickĂ©"], correct: 1, cat: "Kurz ISKB18", exp: "ParadigmatickĂ© = apriornĂ­ vztahy (synonymie, hierarchie) - existujĂ­ nezĂˇvisle na kontextu.", hint: "NezĂˇvislĂ© na kontextu." },
    { q: "SyntagmatickĂ© vztahy jsou:", options: ["nezĂˇvislĂ© na kontextu", "danĂ© kontextem (aposteriornĂ­)", "paradigmatickĂ©", "hierarchickĂ©"], correct: 1, cat: "Kurz ISKB18", exp: "SyntagmatickĂ© = aposteriornĂ­ vztahy - vznikajĂ­ aĹľ v konkrĂ©tnĂ­m textu nebo situaci.", hint: "VznikajĂ­ v textu." },

    // BUDOUCNOST
    { q: "Trend v organizaci informacĂ­ 21. stoletĂ­ je:", options: ["nĂˇvrat k manuĂˇlnĂ­m metodĂˇm", "rĹŻst vĂ˝znamu ontologiĂ­ a automatizace", "zĂˇnik klasifikacĂ­", "pouze plnĂ˝ text"], correct: 1, cat: "Kurz ISKB18", exp: "Budoucnost: ontologie, automatizace, jazykovĂ© technologie, standardizace, uĹľivatelsky vstĹ™Ă­cnĂˇ rozhranĂ­.", hint: "Ontologie a automatizace." }
];


const topicsData = [
    {
        icon: "âť“",
        title: "ProÄŤ tĹ™Ă­dĂ­me",
        description: "InformaÄŤnĂ­ exploze, pĹ™etĂ­ĹľenĂ­, deprivace. Vztahy data-informace-znalosti. SĂ©miotickĂ˝ trojĂşhelnĂ­k a Popperova teorie.",
        concepts: [
            { term: "InformaÄŤnĂ­ exploze", def: "RĹŻst mnoĹľstvĂ­ zachycenĂ˝ch dat/informacĂ­/dokumentĹŻ, zejmĂ©na po 2. sv. vĂˇlce." },
            { term: "InformaÄŤnĂ­ pĹ™etĂ­ĹľenĂ­", def: "ObjektivnĂ­ dĹŻsledek informaÄŤnĂ­ exploze - komplikuje efektivnĂ­ vyhledĂˇvĂˇnĂ­." },
            { term: "InformaÄŤnĂ­ deprivace", def: "SubjektivnĂ­ psychologickĂ˝ dĹŻsledek - stavy zpĹŻsobenĂ© nadbytkem nebo nedostatkem relevantnĂ­ch informacĂ­." },
            { term: "SĂ©miotickĂ˝ trojĂşhelnĂ­k", def: "Model spojujĂ­cĂ­ jev (vÄ›c), pojem (vĂ˝znam) a znak (reprezentace)." },
            { term: "Popperovy svÄ›ty", def: "PI (vÄ›ci), PII (poznĂˇvajĂ­cĂ­ subjekt), PIII (zaznamenanĂ© poznĂˇnĂ­)." }
        ]
    },
    {
        icon: "đź“„",
        title: "Co tĹ™Ă­dĂ­me",
        description: "Dokument, informaÄŤnĂ­ objekt, informaÄŤnĂ­ pramen/zdroj. Typologie dokumentĹŻ.",
        concepts: [
            { term: "Dokument", def: "Objekt s fyzickou povahou nesoucĂ­ informace, pĹ™edmÄ›t IS." },
            { term: "InformaÄŤnĂ­ objekt", def: "GenerickĂ˝ pojem pro jakĂ˝koli objekt nesoucĂ­ informace." },
            { term: "InformaÄŤnĂ­ pramen", def: "InformaÄŤnĂ­ objekt relevantnĂ­ pro konkrĂ©tnĂ­ ĂşÄŤel." },
            { term: "Indexace", def: "Popis objektu souborem poĹ™ĂˇdajĂ­cĂ­ch znakĹŻ vyjadĹ™ujĂ­cĂ­ch obsah." },
            { term: "Klasifikace", def: "ZaĹ™azenĂ­ objektu na urÄŤitĂ© mĂ­sto v klasifikaÄŤnĂ­m systĂ©mu." }
        ]
    },
    {
        icon: "đź—Łď¸Ź",
        title: "SelekÄŤnĂ­ jazyky",
        description: "Typologie SJ, prekoordinace vs. postkoordinace, vĂ˝voj SJ, systematickĂ© a pĹ™edmÄ›tovĂ© SJ.",
        concepts: [
            { term: "SelekÄŤnĂ­ jazyk", def: "Jazyk pro systematickou organizaci informacĂ­ (vyhledĂˇvĂˇnĂ­, indexace, klasifikace)." },
            { term: "Prekoordinace", def: "Pojmy zaĹ™azeny jako celek (sloĹľenĂ© poĹ™ĂˇdacĂ­ znaky)." },
            { term: "Postkoordinace", def: "Pojmy rozdÄ›leny na sloĹľky, kombinujĂ­ se pĹ™i vyhledĂˇvĂˇnĂ­." },
            { term: "Tezaurus", def: "PostkoordinovanĂ˝ systĂ©m s Ĺ™Ă­zenĂ˝m slovnĂ­kem a hierarchiĂ­." },
            { term: "Fazeta", def: "Kategorie entit vytvoĹ™enĂˇ uplatnÄ›nĂ­m jednĂ© klasifikaÄŤnĂ­ charakteristiky." }
        ]
    },
    {
        icon: "đźŹ›ď¸Ź",
        title: "KlasifikaÄŤnĂ­ systĂ©my",
        description: "DDC, LCC, MDT, CC, BBC - historie a charakteristiky velkĂ˝ch klasifikacĂ­.",
        concepts: [
            { term: "DDC", def: "Deweyho desetinnĂ© tĹ™Ă­dÄ›nĂ­ (1876) - pragmatickĂ˝ enumerativnĂ­ systĂ©m." },
            { term: "LCC", def: "Klasifikace KongresovĂ© knihovny - orientovanĂˇ na americkĂ© reĂˇlie." },
            { term: "MDT", def: "MezinĂˇrodnĂ­ desetinnĂ© tĹ™Ă­dÄ›nĂ­ - kombinace hierarchickĂ©ho a fazetovĂ©ho pĹ™Ă­stupu." },
            { term: "CC", def: "DvojteÄŤkovĂ© tĹ™Ă­dÄ›nĂ­ (Ranganathan) - fazetovĂ˝ pĹ™Ă­stup PMEST." },
            { term: "BBC", def: "Blissovo bibliografickĂ© tĹ™Ă­dÄ›nĂ­ - teoreticky fundovanĂ©, minimĂˇlnÄ› rozĹˇĂ­Ĺ™enĂ©." }
        ]
    },
    {
        icon: "đź”¤",
        title: "Morfologie a struktura SJ",
        description: "PoĹ™ĂˇdacĂ­ znaky, notace, deskriptory, Ĺ™Ă­zenĂ­ slovnĂ­ku, vztahy mezi pojmy.",
        concepts: [
            { term: "Deskriptor", def: "PreferovanĂˇ lexikĂˇlnĂ­ jednotka v tezauru." },
            { term: "Nedeskriptor", def: "NepreferovanĂˇ LJ, odkazuje na preferovanĂ˝ vĂ˝raz." },
            { term: "Synonymie", def: "RĹŻznĂ© termĂ­ny pro stejnĂ˝ pojem." },
            { term: "Homonymie", def: "StejnÄ› znÄ›jĂ­cĂ­/psanĂ© jednotky s rĹŻznĂ˝m vĂ˝znamem." },
            { term: "ParadigmatickĂ˝ vztah", def: "Vztah nezĂˇvislĂ˝ na kontextu (synonymie, hierarchie)." }
        ]
    },
    {
        icon: "âš™ď¸Ź",
        title: "Jak tĹ™Ă­dĂ­me",
        description: "ObsahovĂˇ analĂ˝za, identifikace pojmĹŻ, indexace, kvalita a konzistence indexace.",
        concepts: [
            { term: "ObsahovĂˇ analĂ˝za", def: "UrÄŤenĂ­ obsahu dokumentu na zĂˇkladÄ› textu." },
            { term: "Konzistence indexace", def: "Pro tentĂ˝Ĺľ obsah tentĂ˝Ĺľ popis." },
            { term: "Ăšplnost (recall)", def: "VyhledanĂ© relevantnĂ­ / vĹˇechny relevantnĂ­ dokumenty." },
            { term: "PĹ™esnost (precision)", def: "VyhledanĂ© relevantnĂ­ / vĹˇechny vyhledanĂ© dokumenty." },
            { term: "SOD", def: "SelekÄŤnĂ­ obraz dokumentu - vĂ˝sledek obsahovĂ©ho zpracovĂˇnĂ­." }
        ]
    },
    {
        icon: "đź”Ť",
        title: "VyhledĂˇvĂˇnĂ­",
        description: "Typy vyhledĂˇvĂˇnĂ­, faktory ovlivĹujĂ­cĂ­ vÄ›cnĂ© vyhledĂˇvĂˇnĂ­, Ĺ™Ă­zenĂ˝ slovnĂ­k vs. fulltext.",
        concepts: [
            { term: "StrukturovanĂ© vyhledĂˇvĂˇnĂ­", def: "PokroÄŤilĂ© vyhledĂˇvĂˇnĂ­ s pĹ™esnÄ› danĂ˝m cĂ­lem." },
            { term: "FulltextovĂ© vyhledĂˇvĂˇnĂ­", def: "VyhledĂˇvĂˇnĂ­ v plnĂ©m textu dokumentĹŻ." },
            { term: "ProximitnĂ­ operĂˇtory", def: "UrÄŤenĂ­ vzdĂˇlenosti hledanĂ˝ch vĂ˝razĹŻ v textu." },
            { term: "Query expansion", def: "RozĹˇiĹ™ovĂˇnĂ­ uĹľivatelskĂ©ho dotazu pomocĂ­ Ĺ™Ă­zenĂ©ho slovnĂ­ku." }
        ]
    },
    {
        icon: "đźŚŤ",
        title: "UniverzĂˇlnĂ­ a oborovĂ© systĂ©my",
        description: "LCSH, MDT, AGROVOC, EuroVoc, MSC, NACE a dalĹˇĂ­ specializovanĂ© systĂ©my.",
        concepts: [
            { term: "LCSH", def: "PĹ™edmÄ›tovĂˇ hesla KongresovĂ© knihovny." },
            { term: "AGROVOC", def: "Tezaurus FAO pro jĂ­dla a zemÄ›dÄ›lstvĂ­." },
            { term: "EuroVoc", def: "EvropskĂ˝ mnohojazyÄŤnĂ˝ tezaurus pro prĂˇvnĂ­ informace." },
            { term: "MSC", def: "Klasifikace matematickĂ˝ch schĂ©mat." },
            { term: "NACE/CZ-NACE", def: "Klasifikace ekonomickĂ˝ch ÄŤinnostĂ­." }
        ]
    },
    {
        icon: "đź“š",
        title: "SbĂ­rky a kolekce",
        description: "Definice sbĂ­rky, vlastnosti sbĂ­rek, fyzickĂ© vs virtuĂˇlnĂ­ sbĂ­rky, GLAM instituce.",
        concepts: [
            { term: "SbĂ­rka", def: "SubsystĂ©m IS vytvĂˇĹ™enĂ˝ za ĂşÄŤelem, primĂˇrnÄ› plnĂ­ informaÄŤnĂ­ funkci (podpora poznĂˇnĂ­)." },
            { term: "GLAM", def: "Galleries, Libraries, Archives, Museums - sbĂ­rkovĂ©/pamÄ›ĹĄovĂ© instituce." },
            { term: "FyzickĂˇ sbĂ­rka", def: "SbĂ­rka hmotnĂ˝ch objektĹŻ na jednom mĂ­stÄ› (knihovna, muzeum)." },
            { term: "VirtuĂˇlnĂ­ sbĂ­rka", def: "DigitĂˇlnÄ› propojenĂ© objekty bez ohledu na fyzickĂ© umĂ­stÄ›nĂ­." },
            { term: "SbĂ­rka vs nesbĂ­rka", def: "SbĂ­rka = informaÄŤnĂ­ funkce (knihovna). NesbĂ­rka = jinĂˇ funkce (antikvariĂˇt = prodej)." }
        ]
    },
    {
        icon: "đź“‹",
        title: "Atributy informaÄŤnĂ­ho objektu",
        description: "DokumentografickĂ© ĂşrovnÄ› popisu, funkÄŤnĂ­ a strukturĂˇlnĂ­ vlastnosti IO.",
        concepts: [
            { term: "NosiÄŤ/mĂ©dium", def: "FyzickĂ˝ materiĂˇl nesoucĂ­ informaci - analogovĂ˝ nebo digitĂˇlnĂ­." },
            { term: "Forma", def: "KonkrĂ©tnĂ­ podoba nosiÄŤe - kniha, gramofonovĂˇ deska, databĂˇze, web." },
            { term: "Typ/druh", def: "SpecifickĂˇ varianta formy - tiĹˇtÄ›nĂˇ kniha, LP deska, relaÄŤnĂ­ databĂˇze." },
            { term: "FormĂˇt obsahu", def: "ZpĹŻsob zĂˇznamu - text, obraz, zvuk, audiovizuĂˇlnĂ­, data, komiks." },
            { term: "Ĺ˝Ăˇnr", def: "TematickĂˇ/stylovĂˇ kategorie - epos, beletrie, pĂ­snÄ›, faktografie." },
            { term: "Obsah", def: "KonkrĂ©tnĂ­ tĂ©ma dokumentu." }
        ]
    },
    {
        icon: "đź“–",
        title: "LRM - Library Reference Model",
        description: "KoncepÄŤnĂ­ model pro popis bibliografickĂ˝ch entit (DĂ­lo, VyjĂˇdĹ™enĂ­, ProvedenĂ­, Jednotka).",
        concepts: [
            { term: "DĂ­lo (Work)", def: "AbstraktnĂ­ intelektuĂˇlnĂ­/umÄ›leckĂ˝ vĂ˝tvor (napĹ™. 'BabiÄŤka' jako koncept)." },
            { term: "VyjĂˇdĹ™enĂ­ (Expression)", def: "Realizace dĂ­la - ÄŤeskĂ˝ originĂˇl, anglickĂ˝ pĹ™eklad, audiokniha." },
            { term: "ProvedenĂ­ (Manifestation)", def: "FyzickĂ© ztÄ›lesnÄ›nĂ­ - konkrĂ©tnĂ­ vydĂˇnĂ­ (Albatros 2020)." },
            { term: "Jednotka (Item)", def: "KonkrĂ©tnĂ­ exemplĂˇĹ™ provedenĂ­ - tento vĂ˝tisk v mĂ˝ch rukou." },
            { term: "FRBR", def: "PĹ™edchĹŻdce LRM - Functional Requirements for Bibliographic Records." }
        ]
    },
    {
        icon: "đź”˘",
        title: "NotaÄŤnĂ­ systĂ©my",
        description: "Typy notace, expanzivita, mnemotechnika, separĂˇtory v klasifikaÄŤnĂ­ch systĂ©mech.",
        concepts: [
            { term: "NumerickĂˇ notace", def: "PouĹľĂ­vĂˇ pouze ÄŤĂ­sla (DDC: 821.162.3)." },
            { term: "AlfanumerickĂˇ notace", def: "Kombinuje pĂ­smena a ÄŤĂ­sla (LCC: PS3511.I9)." },
            { term: "ExpanzivnĂ­ notace", def: "UmoĹľĹuje pĹ™idĂˇvat novĂ© tĹ™Ă­dy bez naruĹˇenĂ­ struktury." },
            { term: "MnemotechnickĂˇ notace", def: "Snadno zapamatovatelnĂˇ (M=Music, L=Literature)." },
            { term: "SeparĂˇtor", def: "Symbol oddÄ›lujĂ­cĂ­ ÄŤĂˇsti sloĹľenĂ© notace (. : + / v MDT)." },
            { term: "HierarchickĂˇ notace", def: "Notace vyjadĹ™ujĂ­cĂ­ hierarchii (A11.1.01...)." }
        ]
    },
    {
        icon: "đź”„",
        title: "Pre/Postkoordinace podrobnÄ›",
        description: "SĂ©mantickĂ˝ vs syntaktickĂ˝ rozklad, pravidla pro souslovĂ­, aplikaÄŤnĂ­ dopady.",
        concepts: [
            { term: "SĂ©mantickĂ˝ rozklad", def: "Rozklad podle vĂ˝znamu (barometr = tlak + mÄ›Ĺ™enĂ­ + pĹ™Ă­stroj) - NEDOPORUÄŚUJE SE." },
            { term: "SyntaktickĂ˝ rozklad", def: "Rozklad podle slovnĂ­ch ÄŤĂˇstĂ­ (knihovnickĂ© ÄŤasopisy = knihovnictvĂ­ + ÄŤasopisy)." },
            { term: "Kdy prekoordinovat", def: "BÄ›ĹľnĂ© souslovĂ­, ztrĂˇta vĂ˝znamu pĹ™i rozkladu, vlastnĂ­ jmĂ©no, modifikĂˇtor ztratil pĹŻvodnĂ­ vĂ˝znam." },
            { term: "Princip vlastnost-nositel", def: "lodnĂ­ motor = lodÄ› + motory; indexace ÄŤlĂˇnkĹŻ = indexace + ÄŤlĂˇnky." }
        ]
    },
    {
        icon: "đź“ť",
        title: "ObsahovĂˇ analĂ˝za podrobnÄ›",
        description: "Typy ÄŤtenĂ­, fĂˇze indexace, indexaÄŤnĂ­ chyby, faktory ovlivĹujĂ­cĂ­ indexaci.",
        concepts: [
            { term: "OrientaÄŤnĂ­ ÄŤtenĂ­", def: "RychlĂ© zjiĹˇtÄ›nĂ­ zĂˇkladnĂ­ch informacĂ­ - nĂˇzev, autor, abstrakt." },
            { term: "KurzorickĂ© ÄŤtenĂ­", def: "DiagonĂˇlnĂ­ prochĂˇzenĂ­ textu zamÄ›Ĺ™enĂ© na klĂ­ÄŤovĂˇ slova." },
            { term: "SelektivnĂ­ ÄŤtenĂ­", def: "CĂ­lenĂ© hledĂˇnĂ­ konkrĂ©tnĂ­ informace v textu." },
            { term: "StatarickĂ© ÄŤtenĂ­", def: "DĹŻkladnĂ©, pomalĂ© ÄŤtenĂ­ s plnĂ˝m porozumÄ›nĂ­m." },
            { term: "RacionĂˇlnĂ­ ÄŤtenĂ­", def: "Kombinace metod podle potĹ™eby - profesionĂˇlnĂ­ pĹ™Ă­stup." },
            { term: "OpominutĂ­ hledisek", def: "NejÄŤastÄ›jĹˇĂ­ indexaÄŤnĂ­ chyba (18,6% chyb)." },
            { term: "42,3% chyb", def: "VznikĂˇ ve fĂˇzi identifikace pojmĹŻ." }
        ]
    },
    {
        icon: "đź“Š",
        title: "Konzistence a kvalita indexace",
        description: "Metriky konzistence, vĂ˝poÄŤet, vztah kvality a konzistence, indexaÄŤnĂ­ experimenty.",
        concepts: [
            { term: "Interindexer konzistence", def: "Shoda mezi rĹŻznĂ˝mi indexĂˇtory." },
            { term: "Intraindexer konzistence", def: "Konzistence jednoho indexĂˇtora v ÄŤase." },
            { term: "Vzorec C = a/b", def: "a = shodnĂ© znaky, b = vĹˇechny jedineÄŤnĂ© znaky." },
            { term: "Kvalita vs konzistence", def: "KonzistentnĂ­ nemusĂ­ bĂ˝t kvalitnĂ­, ale kvalitnĂ­ zahrnuje konzistenci." },
            { term: "Recall (Ăşplnost)", def: "VyhledanĂ© relevantnĂ­ / vĹˇechny relevantnĂ­." },
            { term: "Precision (pĹ™esnost)", def: "VyhledanĂ© relevantnĂ­ / vĹˇechny vyhledanĂ©." }
        ]
    },
    {
        icon: "đź“„",
        title: "RedukovanĂ© texty",
        description: "Abstrakt, anotace, referĂˇt, resumĂ©, extrakt - typy a rozdĂ­ly.",
        concepts: [
            { term: "Abstrakt", def: "VÄ›cnĂˇ, objektivnĂ­ charakteristika obsahu dokumentu." },
            { term: "StrukturovanĂ˝ abstrakt", def: "Abstrakt s oddĂ­ly: CĂ­l, Metody, VĂ˝sledky, ZĂˇvÄ›r." },
            { term: "Anotace", def: "KrĂˇtkĂ˝ informativnĂ­ souhrn, ÄŤasto reklamnĂ­ho charakteru." },
            { term: "ReferĂˇt", def: "Souhrn orientujĂ­cĂ­ se na pĹ™Ă­nosy a vĂ˝sledky." },
            { term: "ResumĂ©", def: "PodrobnĂ˝ cizojazyÄŤnĂ˝ souhrn kopĂ­rujĂ­cĂ­ strukturu originĂˇlu." },
            { term: "Extrakt", def: "Charakteristika obsahu z citacĂ­ originĂˇlnĂ­ho textu." }
        ]
    },
    {
        icon: "đź”Ž",
        title: "VyhledĂˇvĂˇnĂ­ podrobnÄ›",
        description: "ĹĂ­zenĂ˝ slovnĂ­k vs fulltext, proximitnĂ­ operĂˇtory, query expansion, faktory vyhledĂˇvĂˇnĂ­.",
        concepts: [
            { term: "ĹĂ­zenĂ˝ slovnĂ­k Ĺ™eĹˇĂ­", def: "Synonymii (deskriptory), homonymii (relĂˇtory), paradigmatickĂ© vztahy (struktura)." },
            { term: "Fulltext vĂ˝hody", def: "PĹ™Ă­stupnĂ˝ vĹˇem, novĂ© termĂ­ny bez zpoĹľdÄ›nĂ­, vĹˇechny specifickĂ© vĂ˝razy." },
            { term: "ProximitnĂ­ operĂˇtory", def: "NEAR/5 = max 5 slov mezi vĂ˝razy, SAME SENTENCE." },
            { term: "Query expansion", def: "AutomatickĂ© rozĹˇĂ­Ĺ™enĂ­ dotazu o synonyma a pĹ™Ă­buznĂ© termĂ­ny." },
            { term: "DĂ©lka SOD", def: "DelĹˇĂ­ â†’ vyĹˇĹˇĂ­ recall. KratĹˇĂ­ â†’ vyĹˇĹˇĂ­ precision." }
        ]
    },
    {
        icon: "đź—‚ď¸Ź",
        title: "KonkrĂ©tnĂ­ systĂ©my - pĹ™Ă­klady",
        description: "PSH, MeSH, AAT, ERIC, Iconclass, BARTOC a jejich pouĹľitĂ­.",
        concepts: [
            { term: "PSH", def: "PolytematickĂ˝ strukturovanĂ˝ heslĂˇĹ™ - ÄŤeskĂ˝ tezaurus NTK." },
            { term: "MeSH", def: "Medical Subject Headings - lĂ©kaĹ™skĂ˝ tezaurus pro PubMed." },
            { term: "AAT", def: "Art & Architecture Thesaurus - Getty pro kulturnĂ­ dÄ›dictvĂ­." },
            { term: "ERIC Thesaurus", def: "Tezaurus pro vzdÄ›lĂˇvĂˇnĂ­ (Education Resources Information Center)." },
            { term: "Iconclass", def: "Klasifikace ikonografickĂ©ho obsahu obrazĹŻ." },
            { term: "BARTOC", def: "Metakatalog Ĺ™Ă­zenĂ˝ch slovnĂ­kĹŻ a klasifikacĂ­ (katalog katalogĹŻ)." }
        ]
    },
    {
        icon: "đźŽŻ",
        title: "HlavnĂ­ tĹ™Ă­dy klasifikacĂ­",
        description: "PĹ™ehled hlavnĂ­ch tĹ™Ă­d DDC, LCC a MDT.",
        concepts: [
            { term: "DDC (10 tĹ™Ă­d)", def: "000-PoÄŤĂ­taÄŤe, 100-Filosofie, 200-NĂˇboĹľenstvĂ­, 300-Soc.vÄ›dy, 400-Jazyky, 500-PĹ™Ă­r.vÄ›dy, 600-Technika, 700-UmÄ›nĂ­, 800-Literatura, 900-Historie." },
            { term: "LCC (21 tĹ™Ă­d)", def: "PĂ­smena A-Z (ne vĹˇechna), napĹ™. A-VĹˇeobecnosti, B-Filosofie, M-Hudba, P-Jazyk/literatura, Q-VÄ›da." },
            { term: "MDT (10 tĹ™Ă­d)", def: "0-VÄ›da obecnÄ›, 1-Filosofie, 2-NĂˇboĹľenstvĂ­, 3-Spol.vÄ›dy, 4-(volnĂˇ), 5-Matematika/pĹ™Ă­rodovÄ›da, 6-AplikovanĂ© vÄ›dy, 7-UmÄ›nĂ­, 8-JazykovÄ›da/literatura, 9-Geografie/dÄ›jiny." },
            { term: "TĹ™Ă­da 4 v MDT", def: "PrĂˇzdnĂˇ tĹ™Ă­da - pĹ™Ă­klad expanzivity systĂ©mu." }
        ]
    },
    {
        icon: "âš–ď¸Ź",
        title: "PĹ™irozenĂ˝ vs selekÄŤnĂ­ jazyk",
        description: "Asymetrie vs symetrie, sloĹľky jazyka, paradigmatickĂ© vs syntagmatickĂ© vztahy.",
        concepts: [
            { term: "Asymetrie PJ", def: "VĂ˝znam zĂˇvisĂ­ na kontextu, vĂ˝jimky, synonyma/homonyma." },
            { term: "Symetrie SJ", def: "JednoznaÄŤnĂ˝ vĂ˝znam, bez vĂ˝jimek, synonyma/homonyma vylouÄŤena." },
            { term: "Lexikum â†’ ĹĂ­zenĂ˝ slovnĂ­k", def: "SlovnĂ­ zĂˇsoba je kontrolovĂˇna a strukturovĂˇna." },
            { term: "ParadigmatickĂ˝ vztah", def: "NezĂˇvislĂ˝ na kontextu (apriornĂ­) - synonymie, hierarchie." },
            { term: "SyntagmatickĂ˝ vztah", def: "DanĂ˝ kontextem (aposteriornĂ­) - vznikĂˇ v textu." }
        ]
    },
    {
        icon: "đźš€",
        title: "Budoucnost organizace informacĂ­",
        description: "Trendy, LOD, ontologie, automatizace, AI v organizaci informacĂ­.",
        concepts: [
            { term: "LOD", def: "Linked Open Data - propojenĂˇ otevĹ™enĂˇ data pro maximĂˇlnĂ­ sdĂ­lenĂ­." },
            { term: "Ontologie", def: "PojmovĂ˝ model domĂ©ny pro strojovĂ© zpracovĂˇnĂ­ a odvozovĂˇnĂ­ znalostĂ­." },
            { term: "XAI", def: "Explainable AI - AI vysvÄ›tlujĂ­cĂ­, jak doĹˇla k vĂ˝sledku." },
            { term: "Trendy", def: "Od dokumentĹŻ k informacĂ­m, automatizace, standardizace (LOD), uĹľivatelskĂˇ pĹ™Ă­vÄ›tivost." },
            { term: "MARC", def: "Machine-Readable Cataloging - formĂˇt z 60. let pro vĂ˝mÄ›nu bibliografickĂ˝ch dat." }
        ]
    },
    {
        icon: "âś…",
        title: "PraktickĂ© dovednosti",
        description: "VĂ˝bÄ›r lexikĂˇlnĂ­ch jednotek, triĂˇdy, sprĂˇvnĂ˝ zĂˇpis, Ĺ™eĹˇenĂ­ ĂşkolĹŻ.",
        concepts: [
            { term: "VĂ˝bÄ›r LJ z tezauru", def: "1) NajĂ­t v rejstĹ™Ă­ku, 2) OvÄ›Ĺ™it deskriptor, 3) Zkontrolovat rozsah, 4) NejspecifiÄŤtÄ›jĹˇĂ­." },
            { term: "TriĂˇda", def: "SpecifickĂ˝ vĂ˝raz â†’ obecnĂ˝ vĂ˝raz â†’ fazeta (napĹ™. fortifikovanĂˇ vĂ­na â†’ nĂˇpoje â†’ obsah alkoholu)." },
            { term: "PĹ™esnĂ˝ zĂˇpis LJ", def: "VÄŤetnÄ› velkĂ˝ch/malĂ˝ch pĂ­smen a plurĂˇlu - pro strojovĂ© zpracovĂˇnĂ­." },
            { term: "DokumentografickĂ© ĂşrovnÄ›", def: "A-nosiÄŤ, B-forma, C-typ, D-formĂˇt obsahu, E-ĹľĂˇnr, F-obsah." }
        ]
    }
];
window.studyData.flashcards = flashcardsData; window.studyData.quizzes = quizData; window.studyData.topics = topicsData;
