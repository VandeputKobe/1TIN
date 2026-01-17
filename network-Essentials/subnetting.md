# 📘 Subnetting Cheat Sheet – IPv4 & IPv6 (Examenhulp)

Dit document mag je **rechtstreeks gebruiken in VS Code** tijdens je examen.
Het is opgezet als **invulbaar stappenplan + naslagwerk**.

---

## 🟦 DEEL 1 – IPv4 SUBNETTING (SNEL STAPPENPLAN)

### 🔹 Stap 1 – Gegeven noteren

* Basisnetwerk: `_____._____._____._____`
* Prefix / subnetmasker: `/____` of `_____._____._____._____`
* Vraag:

  * ☐ Even grote subnetten
  * ☐ Verschillende subnetten (VLSM)

---

## 🟦 EVEN GROTE SUBNETTEN

### 🔹 Stap 2 – Aantal subnetten bepalen

Nodig aantal subnetten = `____`

Formule:

```
2^n ≥ aantal subnetten
```

Invullen:

```
2^__ = __
```

➡️ Geleende bits = `__`

---

### 🔹 Stap 3 – Nieuw prefix

* Oorspronkelijk prefix: `/____`
* Nieuw prefix: `/____ + ____ = /____`

---

### 🔹 Stap 4 – Hosts per subnet

Formule:

```
2^(hostbits) − 2
```

Invullen:

* Hostbits = `32 − ____ = ____`
* Hosts = `2^____ − 2 = ____`

---

### 🔹 Stap 5 – Block size

Eerste veranderende octet = `____`

Formule:

```
256 − subnetmasker-octet
```

Block size = `____`

---

### 🔹 Stap 6 – Subnetten tabel

| Subnet | Netwerk | Eerste host | Laatste host | Broadcast |
| ------ | ------- | ----------- | ------------ | --------- |
| 1      |         |             |              |           |
| 2      |         |             |              |           |
| 3      |         |             |              |           |

Regels:

* Eerste host = netwerk + 1
* Broadcast = volgend netwerk − 1
* Laatste host = broadcast − 1

---

## 🟦 VERSCHILLENDE GROTE SUBNETTEN (VLSM)

### 🔹 Stap 2 – Subnetten sorteren (groot → klein)

| Subnet | Hosts nodig |
| ------ | ----------- |
| A      | ____        |
| B      | ____        |
| C      | ____        |

---

### 🔹 Stap 3 – Hostbits per subnet

Formule:

```
2^n − 2 ≥ hosts
```

Invullen per subnet:

* Subnet ___ → hostbits = `__`

---

### 🔹 Stap 4 – Prefix per subnet

Formule:

```
32 − hostbits
```

Prefix = `/____`

---

### 🔹 Stap 5 – Subnetten uitdelen

Subnet 1 (grootste):

* Netwerk: `____________`
* Eerste host: `____________`
* Laatste host: `____________`
* Broadcast: `____________`

Subnet 2:

* Netwerk = vorige broadcast + 1

---

## 🟩 DEEL 2 – IPv6 ADRESSEN (EXAMENBELANGRIJK)

### 🔹 Wat je moet kennen

* IPv6 = **128 bits**
* Hexadecimaal (0–9, A–F)
* Bestaat uit **8 blokken van 16 bits**

Voorbeeld:

```
2001:0db8:0000:0000:0000:0000:0000:0001
```

---

### 🔹 IPv6 verkorten (compressie)

Regels:

1. Leidende nullen mag je weglaten
2. Eén reeks van opeenvolgende `0000` mag je vervangen door `::`

Voorbeeld:

```
2001:0db8:0000:0000:0000:0000:0000:0001
→ 2001:db8::1
```

⚠️ `::` mag **maar één keer** gebruikt worden!

---

### 🔹 IPv6 prefix begrijpen

Voorbeeld:

```
2001:db8:abcd::/48
```

Betekent:

* Eerste **48 bits** = netwerk
* Laatste **80 bits** = host/interface ID

---

### 🔹 IPv6 subnetten maken

Meest gebruikt:

* /48 → organisaties
* /64 → standaard subnet

Voorbeeld:

```
Basis: 2001:db8:abcd::/48
Subnetten: /64
```

Subnet-ID zit in het **4e blok**:

| Subnet | IPv6 netwerk            |
| ------ | ----------------------- |
| 1      | 2001:db8:abcd:0000::/64 |
| 2      | 2001:db8:abcd:0001::/64 |
| 3      | 2001:db8:abcd:0002::/64 |

---

### 🔹 IPv6 hosts

* Eerste adres (`::`) = netwerk
* Laatste adres bestaat niet (geen broadcast!)

Voorbeeld host:

```
2001:db8:abcd:0001::15
```

---

## ✅ SNELLE EXAMEN-CHECKLIST

* ☐ Grootste subnet eerst (VLSM)
* ☐ −2 hosts bij IPv4
* ☐ IPv6 heeft GEEN broadcast
* ☐ `::` max één keer
* ☐ Tabellen gebruiken = punten 💯

---

✍️ Tip: kopieer dit document, sla het op als `subnetting.md` en gebruik het als werkblad tijdens je examen.
